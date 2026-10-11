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

    // 2. Create the Canvas
    const width = 700;
    const height = 450;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.maxWidth = "100%";
    graph.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    // 3. Helper to create sliders
    function createSlider(label, min, max, step, initialValue) {
        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";

        const labelElement = document.createElement("label");
        labelElement.textContent = `${label}:`;
        labelElement.style.width = "80px"; 
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
        valueElement.textContent = Number(initialValue).toFixed(2);

        wrapper.appendChild(labelElement);
        wrapper.appendChild(slider);
        wrapper.appendChild(valueElement);
        controls.appendChild(wrapper);

        return { slider, valueElement };
    }

    // Sliders: Initial C, Velocity, Time (Matching your exact constraints)
    const C0Control = createSlider("Initial C", 0.1, 2.0, 0.1, 0.6);
    const uxControl = createSlider("Velocity", 0, 10, 0.1, 1.0);
    const tControl = createSlider("Time", 0, 60, 0.1, 1.0);

    // 4. The Draw Function
    function draw() {
        const C0_val = Number(C0Control.slider.value);
        const ux_val = Number(uxControl.slider.value);
        const t_val = Number(tControl.slider.value);

        // Update text displays
        C0Control.valueElement.textContent = C0_val.toFixed(2);
        uxControl.valueElement.textContent = ux_val.toFixed(2);
        tControl.valueElement.textContent = t_val.toFixed(2);

        // Math
        const x_val = t_val * ux_val;

        // Dynamic Axis Limits (matching Python)
        const xMin = -0.1;
        const xMax = x_val * 1.2 + 0.5;
        const yMin = 0;
        const yMax = C0_val * 1.5;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        const margin = { left: 70, right: 30, top: 30, bottom: 60 };
        const plotWidth = width - margin.left - margin.right;
        const plotHeight = height - margin.top - margin.bottom;

        // --- DRAW GRIDS AND TICKS ---
        ctx.font = "14px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";

        // X-axis ticks (10 dynamic segments)
        for (let i = 0; i <= 10; i++) {
            const val = xMin + i * (xMax - xMin) / 10;
            const px = margin.left + (val - xMin) / (xMax - xMin) * plotWidth;
            
            ctx.beginPath();
            ctx.moveTo(px, margin.top);
            ctx.lineTo(px, height - margin.bottom);
            ctx.strokeStyle = (i % 2 === 0) ? "#cccccc" : "#eeeeee";
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.strokeStyle = "black";
            const tickLength = (i % 2 === 0) ? 6 : 3; 
            
            ctx.beginPath();
            ctx.moveTo(px, height - margin.bottom);
            ctx.lineTo(px, height - margin.bottom + tickLength);
            ctx.stroke();
            
            if (i % 2 === 0) {
                ctx.fillStyle = "black";
                ctx.fillText(val.toFixed(1), px, height - margin.bottom + 10);
            }
        }

        // Y-axis ticks (10 dynamic segments)
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        for (let i = 0; i <= 10; i++) {
            const val = yMin + i * (yMax - yMin) / 10;
            const py = height - margin.bottom - (val - yMin) / (yMax - yMin) * plotHeight;
            
            ctx.beginPath();
            ctx.moveTo(margin.left, py);
            ctx.lineTo(width - margin.right, py);
            ctx.strokeStyle = (i % 2 === 0) ? "#cccccc" : "#eeeeee";
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.strokeStyle = "black";
            const tickLength = (i % 2 === 0) ? 6 : 3;
            
            ctx.beginPath();
            ctx.moveTo(margin.left, py);
            ctx.lineTo(margin.left - tickLength, py);
            ctx.stroke();
            
            if (i % 2 === 0) {
                ctx.fillStyle = "black";
                ctx.fillText(val.toFixed(2), margin.left - 10, py);
            }
        }

        // --- DRAW THE CONTAMINANT BLOCK (fill_between) ---
        ctx.save();
        ctx.beginPath();
        ctx.rect(margin.left, margin.top, plotWidth, plotHeight);
        ctx.clip();
        
        // Calculate corner coordinates for the block
        const px_start = margin.left + (0 - xMin) / (xMax - xMin) * plotWidth;
        const px_end = margin.left + (x_val - xMin) / (xMax - xMin) * plotWidth;
        const py_bottom = height - margin.bottom - (0 - yMin) / (yMax - yMin) * plotHeight;
        const py_top = height - margin.bottom - (C0_val - yMin) / (yMax - yMin) * plotHeight;

        // Draw shaded area
        ctx.fillStyle = "rgba(31, 119, 180, 0.4)"; // Semi-transparent Matplotlib blue
        ctx.fillRect(px_start, py_top, px_end - px_start, py_bottom - py_top);

        // Draw the leading edge line (matching plt.plot([x,x],[0,c]))
        ctx.beginPath();
        ctx.moveTo(px_end, py_bottom);
        ctx.lineTo(px_end, py_top);
        ctx.strokeStyle = "#1f77b4"; 
        ctx.lineWidth = 2; // Slightly thicker than 1 for crisp web visibility
        ctx.stroke();
        
        ctx.restore();

        // --- Draw L-Shape Axis Lines (Crisp border) ---
        ctx.beginPath();
        ctx.moveTo(margin.left, margin.top);
        ctx.lineTo(margin.left, height - margin.bottom);
        ctx.lineTo(width - margin.right, height - margin.bottom);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // --- Axis Titles ---
        ctx.fillStyle = "black";
        ctx.font = "20px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        
        ctx.fillText("x", margin.left + plotWidth / 2, height - 10);
        
        ctx.save();
        ctx.translate(20, margin.top + plotHeight / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText("C", 0, 0);
        ctx.restore();
    }

    // 5. Attach event listeners
    C0Control.slider.addEventListener("input", draw);
    uxControl.slider.addEventListener("input", draw);
    tControl.slider.addEventListener("input", draw);

    // Initial draw
    draw();
}

export default { render };