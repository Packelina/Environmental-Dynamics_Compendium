function render({ el }) {
    // 1. Create the UI containers
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
    function createSlider(label, min, max, step, initialValue, isExponential) {
        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";

        const labelElement = document.createElement("label");
        labelElement.innerHTML = label; // Using innerHTML to allow subscripts like P<sub>in</sub>
        labelElement.style.width = "40px"; 
        labelElement.style.fontWeight = "bold";
        labelElement.style.fontSize = "14px";

        const slider = document.createElement("input");
        slider.type = "range";
        slider.min = min;
        slider.max = max;
        slider.step = step;
        slider.value = initialValue;
        slider.style.width = "150px";
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

    // Sliders: Q, V, and Pin (matching your Python ranges and defaults)
    const QControl = createSlider("Q", 50, 500, 10, 450, false);
    const VControl = createSlider("V", 100000, 1000000, 100000, 700000, true);
    const PinControl = createSlider("P<sub>in</sub>", 0, 0.5, 0.01, 0.2, false);

    // 4. The Draw Function
    function draw() {
        const Q_val = Number(QControl.slider.value);
        const V_val = Number(VControl.slider.value);
        const Pin_val = Number(PinControl.slider.value);

        // Update text displays
        QControl.valueElement.textContent = Q_val.toFixed(0);
        VControl.valueElement.textContent = V_val.toExponential(2);
        // Matching Python readout format .4f for Pin
        PinControl.valueElement.textContent = Pin_val.toFixed(4); 

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        const margin = { left: 70, right: 30, top: 30, bottom: 60 };
        const xMin = 0, xMax = 1825; // 5 years (365 * 5)
        const yMin = 0, yMax = 0.5; // Bounded by max Pin

        const plotWidth = width - margin.left - margin.right;
        const plotHeight = height - margin.top - margin.bottom;

        // --- DRAW GRIDS, TICKS, AND NUMBERS ---
        ctx.font = "14px sans-serif";

        // X-axis (time): 0 to 1825. Ticks every 365 days (1 year)
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        for (let i = 0; i <= 5; i++) {
            const val = i * 365;
            const px = margin.left + (val - xMin) / (xMax - xMin) * plotWidth;

            // Grid line
            ctx.beginPath();
            ctx.moveTo(px, margin.top);
            ctx.lineTo(px, height - margin.bottom);
            ctx.strokeStyle = "#cccccc"; 
            ctx.lineWidth = 1;
            ctx.stroke();

            // Tick mark
            ctx.strokeStyle = "black";
            ctx.beginPath();
            ctx.moveTo(px, height - margin.bottom);
            ctx.lineTo(px, height - margin.bottom + 6);
            ctx.stroke();
            
            // Label
            ctx.fillStyle = "black";
            ctx.fillText(val, px, height - margin.bottom + 10);
        }

        // Y-axis (Ps): 0 to 0.5. Steps of 0.1
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        for (let i = 0; i <= 5; i++) {
            const val = i * 0.1;
            const py = height - margin.bottom - (val - yMin) / (yMax - yMin) * plotHeight;

            // Grid line
            ctx.beginPath();
            ctx.moveTo(margin.left, py);
            ctx.lineTo(width - margin.right, py);
            ctx.strokeStyle = "#cccccc";
            ctx.lineWidth = 1;
            ctx.stroke();

            // Tick mark
            ctx.strokeStyle = "black";
            ctx.beginPath();
            ctx.moveTo(margin.left, py);
            ctx.lineTo(margin.left - 6, py);
            ctx.stroke();
            
            // Label
            ctx.fillStyle = "black";
            ctx.fillText(val.toFixed(1), margin.left - 10, py);
        }

        // --- Calculate and Draw the Analytical ODE Line ---
        const n = 200; 
        const Psi = 0.02; // Initial condition f0
        
        ctx.save();
        ctx.beginPath();
        ctx.rect(margin.left, margin.top, plotWidth, plotHeight);
        ctx.clip();
        
        ctx.beginPath();
        let firstPoint = true;
        
        const rate = Q_val / V_val;

        for (let i = 0; i < n; i++) {
            const t = xMin + (xMax - xMin) * i / (n - 1);
            
            // Exact mathematical solution to the ODE: df/dt = (Pin - f) * Q / V
            const f = Pin_val + (Psi - Pin_val) * Math.exp(-rate * t);

            const px = margin.left + (t - xMin) / (xMax - xMin) * plotWidth;
            const py = height - margin.bottom - (f - yMin) / (yMax - yMin) * plotHeight;

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

        // --- Draw Box Border ---
        ctx.beginPath();
        ctx.rect(margin.left, margin.top, plotWidth, plotHeight);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();

        // --- Axis Titles ---
        ctx.fillStyle = "black";
        ctx.font = "18px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        
        ctx.fillText("time [Day]", margin.left + plotWidth / 2, height - 10);
        
        ctx.save();
        ctx.translate(20, margin.top + plotHeight / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText("Ps [mg/L]", 0, 0);
        ctx.restore();
    }

    // 5. Attach event listeners
    QControl.slider.addEventListener("input", draw);
    VControl.slider.addEventListener("input", draw);
    PinControl.slider.addEventListener("input", draw);

    // Initial draw
    draw();
}

export default { render };