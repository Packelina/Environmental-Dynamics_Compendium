function render({ el }) {
    // 1. Create the UI containers
    const container = document.createElement("div");
    container.style.fontFamily = "sans-serif";
    container.style.paddingTop = "5px"; // Reduced padding

    const controls = document.createElement("div");
    controls.style.display = "flex";
    controls.style.flexDirection = "column";
    controls.style.gap = "6px"; // Tightened the gap between sliders (was 12px)
    controls.style.marginLeft = "20px";
    controls.style.marginBottom = "10px"; // Reduced space below sliders (was 20px)

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

    // 3. Helper to create sliders
    function createSlider(label, min, max, step, initialValue, isExponential) {
        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";

        const labelElement = document.createElement("label");
        labelElement.textContent = `${label}:`;
        labelElement.style.width = "25px"; // Slightly narrower label
        labelElement.style.fontWeight = "bold";
        labelElement.style.fontSize = "14px"; // Slightly smaller text

        const slider = document.createElement("input");
        slider.type = "range";
        slider.min = min;
        slider.max = max;
        slider.step = step;
        slider.value = initialValue;
        slider.style.width = "130px"; // Shorter slider bar (was 200px)
        slider.style.accentColor = "#007bff";
        slider.style.cursor = "pointer";

        const valueElement = document.createElement("span");
        valueElement.style.marginLeft = "10px";
        valueElement.style.fontSize = "14px"; // Slightly smaller text
        valueElement.textContent = isExponential ? Number(initialValue).toExponential(2) : Number(initialValue).toFixed(2);

        wrapper.appendChild(labelElement);
        wrapper.appendChild(slider);
        wrapper.appendChild(valueElement);
        controls.appendChild(wrapper);

        return { slider, valueElement, isExponential };
    }

    const xControl = createSlider("x", 1, 5, 1, 1.0, false);
    const vControl = createSlider("v", 0.05, 0.1, 0.01, 0.05, false);
    const DControl = createSlider("D", 0.001, 0.01, 0.001, 0.001, true);

    // 4. The Draw Function
    function draw() {
        const x_val = Number(xControl.slider.value);
        const v_val = Number(vControl.slider.value);
        const D_val = Number(DControl.slider.value);

        xControl.valueElement.textContent = x_val.toFixed(2);
        vControl.valueElement.textContent = v_val.toFixed(2);
        DControl.valueElement.textContent = D_val.toExponential(2);

        ctx.clearRect(0, 0, width, height);

        const margin = { left: 70, right: 30, top: 30, bottom: 60 };
        const xMin = 0, xMax = 500;
        const yMin = 0, yMax = 3; 

        // --- DRAW GRIDS, TICKS, AND NUMBERS ---
        ctx.font = "14px sans-serif";

        // X-axis (t): 0 to 500. Minor steps = 20. Total steps = 25.
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        for (let i = 0; i <= 25; i++) {
            const val = i * 20; 
            const px = margin.left + (val - xMin) / (xMax - xMin) * (width - margin.left - margin.right);
            const isMajor = i % 5 === 0;

            // Draw Grid Line across the graph
            ctx.beginPath();
            ctx.moveTo(px, margin.top);
            ctx.lineTo(px, height - margin.bottom);
            ctx.strokeStyle = isMajor ? "#cccccc" : "#eeeeee"; 
            ctx.lineWidth = 1;
            ctx.stroke();

            // Draw Black Ticks on the BOTTOM only
            ctx.strokeStyle = "black";
            const tickLength = isMajor ? 6 : 3; 
            
            ctx.beginPath();
            ctx.moveTo(px, height - margin.bottom);
            ctx.lineTo(px, height - margin.bottom + tickLength);
            ctx.stroke();
            
            // Draw text only on the major lines
            if (isMajor) {
                ctx.fillStyle = "black";
                ctx.fillText(val, px, height - margin.bottom + 10);
            }
        }

        // Y-axis (C): 0 to 3. Minor steps = 0.1. Total steps = 30.
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        for (let i = 0; i <= 30; i++) {
            const val = i * 0.1;
            const py = height - margin.bottom - (val - yMin) / (yMax - yMin) * (height - margin.top - margin.bottom);
            const isMajor = i % 5 === 0;

            // Draw Grid Line across the graph
            ctx.beginPath();
            ctx.moveTo(margin.left, py);
            ctx.lineTo(width - margin.right, py);
            ctx.strokeStyle = isMajor ? "#cccccc" : "#eeeeee";
            ctx.lineWidth = 1;
            ctx.stroke();

            // Draw Black Ticks on the LEFT only
            ctx.strokeStyle = "black";
            const tickLength = isMajor ? 6 : 3;
            
            ctx.beginPath();
            ctx.moveTo(margin.left, py);
            ctx.lineTo(margin.left - tickLength, py);
            ctx.stroke();
            
            // Draw text only on the major lines
            if (isMajor) {
                ctx.fillStyle = "black";
                ctx.fillText(val.toFixed(1), margin.left - 10, py);
            }
        }

        // --- Calculate and Draw the Math Line ---
        const M = 1;
        const A = 1;
        
        ctx.save();
        ctx.beginPath();
        ctx.rect(margin.left, margin.top, width - margin.left - margin.right, height - margin.top - margin.bottom);
        ctx.clip();
        
        ctx.beginPath();
        let firstPoint = true;
        
        for (let t = 1; t <= 500; t++) {
            const coeff = M / (2 * A * Math.sqrt(Math.PI * D_val * t));
            const exponent = -Math.pow(x_val - v_val * t, 2) / (4 * D_val * t);
            let C = coeff * Math.exp(exponent);

            const px = margin.left + (t - xMin) / (xMax - xMin) * (width - margin.left - margin.right);
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

        // --- Draw L-Shape Axis Lines LAST ---
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
        
        ctx.fillText("t", margin.left + (width - margin.left - margin.right) / 2, height - 10);
        
        ctx.save();
        ctx.translate(25, margin.top + (height - margin.top - margin.bottom) / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText("C", 0, 0);
        ctx.restore();
    }

    xControl.slider.addEventListener("input", draw);
    vControl.slider.addEventListener("input", draw);
    DControl.slider.addEventListener("input", draw);

    draw();
}

export default { render };