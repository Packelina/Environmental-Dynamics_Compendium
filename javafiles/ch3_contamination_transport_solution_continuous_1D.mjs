function render({ el }) {
    // 1. Create the UI containers (Compact Layout)
    const container = document.createElement("div");
    container.style.fontFamily = "sans-serif";
    container.style.paddingTop = "5px";

    const controls = document.createElement("div");
    controls.style.display = "flex";
    controls.style.flexDirection = "column";
    controls.style.gap = "6px";
    controls.style.marginLeft = "20px";
    controls.style.marginBottom = "10px";

    const graph = document.createElement("div");

    container.appendChild(controls);
    container.appendChild(graph);
    el.appendChild(container);

    // 2. Create the Canvas ONCE
    const width = 700;
    const height = 450;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.maxWidth = "100%";
    graph.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    // 3. Helper to create sliders (Compact Size)
    function createSlider(label, min, max, step, initialValue, isExponential) {
        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";

        const labelElement = document.createElement("label");
        labelElement.textContent = `${label}:`;
        labelElement.style.width = "30px";
        labelElement.style.fontWeight = "bold";
        labelElement.style.fontSize = "14px";

        const slider = document.createElement("input");
        slider.type = "range";
        slider.min = min;
        slider.max = max;
        slider.step = step;
        slider.value = initialValue;
        slider.style.width = "130px";
        slider.style.accentColor = "#007bff";
        slider.style.cursor = "pointer";

        const valueElement = document.createElement("span");
        valueElement.style.marginLeft = "10px";
        valueElement.style.fontSize = "14px";
        valueElement.textContent = isExponential ? Number(initialValue).toExponential(2) : Number(initialValue).toFixed(2);

        wrapper.appendChild(labelElement);
        wrapper.appendChild(slider);
        wrapper.appendChild(valueElement);
        controls.appendChild(wrapper);

        return { slider, valueElement, isExponential };
    }

    // Sliders: 5 parameters mapping your exact Python constraints
    const tControl = createSlider("t", 1, 500, 0.1, 100, false);
    const uxControl = createSlider("ux", 0.00001, 0.0001, 0.00001, 0.00005, true);
    const DxControl = createSlider("Dx", 0.000001, 0.0001, 0.000001, 0.00001, true);
    const kControl = createSlider("k", 0.001, 0.01, 0.001, 0.005, true);
    const RControl = createSlider("R", 1, 3, 0.001, 1.5, false);

    // 4. Numerical approximation for the complementary error function (math.erfc)
    function erfc(x) {
        const z = Math.abs(x);
        const t = 1.0 / (1.0 + 0.3275911 * z);
        const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429;
        const result = (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-z * z);
        return x >= 0 ? result : 2.0 - result;
    }

    // 5. The Draw Function
    function draw() {
        const t_val = Number(tControl.slider.value);
        const ux_val = Number(uxControl.slider.value);
        const Dx_val = Number(DxControl.slider.value);
        const k_val = Number(kControl.slider.value);
        const R_val = Number(RControl.slider.value);

        // Update text displays
        tControl.valueElement.textContent = t_val.toFixed(2);
        uxControl.valueElement.textContent = ux_val.toExponential(2);
        DxControl.valueElement.textContent = Dx_val.toExponential(2);
        kControl.valueElement.textContent = k_val.toExponential(2);
        RControl.valueElement.textContent = R_val.toFixed(2);

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        const margin = { left: 70, right: 30, top: 30, bottom: 60 };
        const xMin = 0, xMax = 1;
        const yMin = 0, yMax = 1; 

        // --- DRAW GRIDS, TICKS, AND NUMBERS ---
        ctx.font = "14px sans-serif";

        // X-axis (x): 0 to 1. Minor steps = 0.04. Total steps = 25.
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        for (let i = 0; i <= 25; i++) {
            const val = i * 0.04;
            const px = margin.left + (val - xMin) / (xMax - xMin) * (width - margin.left - margin.right);
            const isMajor = i % 5 === 0;

            ctx.beginPath();
            ctx.moveTo(px, margin.top);
            ctx.lineTo(px, height - margin.bottom);
            ctx.strokeStyle = isMajor ? "#cccccc" : "#eeeeee"; 
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.strokeStyle = "black";
            const tickLength = isMajor ? 6 : 3; 
            
            ctx.beginPath();
            ctx.moveTo(px, height - margin.bottom);
            ctx.lineTo(px, height - margin.bottom + tickLength);
            ctx.stroke();
            
            if (isMajor) {
                ctx.fillStyle = "black";
                ctx.fillText(val.toFixed(1), px, height - margin.bottom + 10);
            }
        }

        // Y-axis (C): 0 to 1. Minor steps = 0.04. Total steps = 25.
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        for (let i = 0; i <= 25; i++) {
            const val = i * 0.04;
            const py = height - margin.bottom - (val - yMin) / (yMax - yMin) * (height - margin.top - margin.bottom);
            const isMajor = i % 5 === 0;

            ctx.beginPath();
            ctx.moveTo(margin.left, py);
            ctx.lineTo(width - margin.right, py);
            ctx.strokeStyle = isMajor ? "#cccccc" : "#eeeeee";
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.strokeStyle = "black";
            const tickLength = isMajor ? 6 : 3;
            
            ctx.beginPath();
            ctx.moveTo(margin.left, py);
            ctx.lineTo(margin.left - tickLength, py);
            ctx.stroke();
            
            if (isMajor) {
                ctx.fillStyle = "black";
                ctx.fillText(val.toFixed(1), margin.left - 10, py);
            }
        }

        // --- Calculate and Draw the Math Line ---
        const n = 300; 
        const C0 = 1;
        
        ctx.save();
        ctx.beginPath();
        ctx.rect(margin.left, margin.top, width - margin.left - margin.right, height - margin.top - margin.bottom);
        ctx.clip();
        
        ctx.beginPath();
        let firstPoint = true;
        
        // Performance optimization: calculate loop-independent variables once
        const v = ux_val * Math.sqrt(1 + 4 * k_val * Dx_val / (ux_val * ux_val));
        const sqrt_DxRt = Math.sqrt(Dx_val * R_val * t_val);
        const vt = v * t_val;

        for (let i = 0; i < n; i++) {
            const x = xMin + (xMax - xMin) * i / (n - 1);
            
            // Equation translated directly from your Python `cx1` function
            const term1_exp = Math.exp((x * (ux_val - v)) / (2 * Dx_val));
            const term1_erfc = erfc((R_val * x - vt) / (2 * sqrt_DxRt));
            
            const term2_exp = Math.exp((x * (ux_val + v)) / (2 * Dx_val));
            const term2_erfc = erfc((R_val * x + vt) / (2 * sqrt_DxRt));
            
            let C = (C0 / 2) * term1_exp * term1_erfc + (C0 / 2) * term2_exp * term2_erfc;

            const px = margin.left + (x - xMin) / (xMax - xMin) * (width - margin.left - margin.right);
            const py = height - margin.bottom - (C - yMin) / (yMax - yMin) * (height - margin.top - margin.bottom);

            if (firstPoint) {
                ctx.moveTo(px, py);
                firstPoint = false;
            } else {
                ctx.lineTo(px, py);
            }
        }
        
        ctx.strokeStyle = "#1f77b4"; 
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();

        // --- Draw L-Shape Axis Lines LAST (Crisp border) ---
        ctx.beginPath();
        ctx.moveTo(margin.left, margin.top);
        ctx.lineTo(margin.left, height - margin.bottom);
        ctx.lineTo(width - margin.right, height - margin.bottom);
        
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();

        // --- Axis Titles ---
        ctx.fillStyle = "black";
        ctx.font = "24px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        
        ctx.fillText("x", margin.left + (width - margin.left - margin.right) / 2, height - 10);
        
        ctx.save();
        ctx.translate(25, margin.top + (height - margin.top - margin.bottom) / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText("C", 0, 0);
        ctx.restore();
    }

    // 6. Attach event listeners to all 5 sliders
    tControl.slider.addEventListener("input", draw);
    uxControl.slider.addEventListener("input", draw);
    DxControl.slider.addEventListener("input", draw);
    kControl.slider.addEventListener("input", draw);
    RControl.slider.addEventListener("input", draw);

    // Initial draw
    draw();
}

export default { render };