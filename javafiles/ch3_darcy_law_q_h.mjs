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
        labelElement.style.width = "25px";
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

    // Slider for Hydraulic Conductivity (K)
    const KControl = createSlider("K", 0.00002, 0.0001, 0.00001, 0.00005, true);

    // 4. The Draw Function
    function draw() {
        const K_val = Number(KControl.slider.value);

        // Update text display
        KControl.valueElement.textContent = K_val.toExponential(2);

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        const margin = { left: 90, right: 30, top: 30, bottom: 60 }; // Slightly larger left margin for decimal text
        const xMin = -10, xMax = 0;
        const yMin = 0, yMax = 0.001; 

        // --- DRAW GRIDS, TICKS, AND NUMBERS ---
        ctx.font = "14px sans-serif";

        // X-axis (dh/dx): -10 to 0. Minor steps = 0.4. Total steps = 25.
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        for (let i = 0; i <= 25; i++) {
            const val = xMin + i * 0.4;
            const px = margin.left + (val - xMin) / (xMax - xMin) * (width - margin.left - margin.right);
            const isMajor = i % 5 === 0; // Major line every 2.0

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
                // Math.abs to prevent JS from rendering "-0" instead of "0"
                const displayVal = Math.abs(val) < 0.01 ? 0 : val;
                ctx.fillText(displayVal.toFixed(0), px, height - margin.bottom + 10);
            }
        }

        // Y-axis (q): 0 to 0.001. Minor steps = 0.00004. Total steps = 25.
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        for (let i = 0; i <= 25; i++) {
            const val = yMin + i * 0.00004;
            const py = height - margin.bottom - (val - yMin) / (yMax - yMin) * (height - margin.top - margin.bottom);
            const isMajor = i % 5 === 0; // Major line every 0.0002

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
                // Formatting to 4 decimal places (e.g. 0.0002)
                ctx.fillText(val.toFixed(4), margin.left - 10, py);
            }
        }

        // --- Calculate and Draw the Math Line ---
        const n = 100; 
        
        ctx.save();
        ctx.beginPath();
        ctx.rect(margin.left, margin.top, width - margin.left - margin.right, height - margin.top - margin.bottom);
        ctx.clip();
        
        ctx.beginPath();
        let firstPoint = true;

        for (let i = 0; i < n; i++) {
            const x = xMin + (xMax - xMin) * i / (n - 1);
            
            // Darcy's Law: q = -K * (dh/dx)
            let q = -K_val * x; 

            const px = margin.left + (x - xMin) / (xMax - xMin) * (width - margin.left - margin.right);
            const py = height - margin.bottom - (q - yMin) / (yMax - yMin) * (height - margin.top - margin.bottom);

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
        ctx.font = "20px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        
        ctx.fillText("head gradient dh/dx", margin.left + (width - margin.left - margin.right) / 2, height - 10);
        
        ctx.save();
        ctx.translate(20, margin.top + (height - margin.top - margin.bottom) / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText("flow rate q", 0, 0);
        ctx.restore();
    }

    // 6. Attach event listener
    KControl.slider.addEventListener("input", draw);

    // Initial draw
    draw();
}

export default { render };