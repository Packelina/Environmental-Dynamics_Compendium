---
numbering:
  enumerator: 4.%s
---

(sec-4-5)=
# 4.5. Stochastic approaches to consider randomness in groundwater flow and solute transport


(sec-4-5-1)=
## 4.5.1. Uncertainty in groundwater flow and solute transport

Already in the lectures and exercises about streams and lakes, i.e. surface waters, you learned about uncertainties in the flow and transport modeling in these systems. In groundwater we face even more uncertainties as we cannot see groundwater flowing in the subsurface or transporting contaminants. {ref}`fig_out_wash_plain_crosssection` illustrates how layered an aquifer may look like, which implies varying conductivities in the ground. In reality aquifers may be highly heterogeneous and anisotropic. (Using the applet on solute transport on the course homepage you may investigate the effect of randomized conductivities or layers in the ground.)

A very common use of statistics in hydrogeology is in the calculation of the average hydraulic conductivity through a layered aquifer. If we have a simple heterogeneous system of different parallel layers in an aquifer and the separate layers are assumed to be homogeneous and isotropic, we are able to determine the mean hydraulic conductivity for horizontal and vertical flow.

(sec-4-5-1-1)=
### 4.5.1.1. Effective hydraulic conductivity of layered aquifers

For simplicity we may assume a layered aquifer consisting of three homogeneous and isotropic layers. The layers are characterized by their hydraulic conductivity, $K_1$, $K_2$, $K_3$ and thickness, $b_1$, $b_2$, $b_3$.

- **Horizontal flow**

For horizontal flow, parallel to the layers, the constraint is that the hydraulic head difference across each layer must be the same (otherwise, if there are hydraulic head differences between the layers, there is according to Darcy's law also a vertical flow component between the layers, so the flow is in other words no longer horizontal). Then, the total flow $Q_{\mathrm{tot}}$ is equal to the sum of the flow in the different layers (in this case three layers)

Hydraulic Gradient:

:::{math}
\frac{dh_{\mathrm{tot}}}{dx} = \frac{dh_1}{dx} = \frac{dh_2}{dx} = \frac{dh_3}{dx}
:::

Flow:

:::{math}
Q_{\mathrm{tot}} = Q_{1} + Q_{2} + Q_{3}
:::

We then apply Darcy's law for the whole system. Let the cross sectional area be $A = b_{\mathrm{tot}} \times w$, where $b_{\mathrm{tot}}$ is the total depth (all three layers) and $w$ is the width of the layer (perpendicular to the flow direction), which can be set to 1 m for simplicity.

:::{math}
Q_{\mathrm{tot}} = b_{\mathrm{tot}} \times w \times \overline{K} \frac{dh}{dx}
:::

where $\overline{K}$ is the effective conductivity and $dh/dx = i$ the gradient. We then apply Darcy's law for an individual layer $i$ (here $i=1, 2, 3$) and insert these expressions into our flow requirement above.

:::{math}
Q_{i} = b_{i} \times w \times K_{i} \frac{dh}{dx} \quad \Rightarrow \quad b_{\mathrm{tot}} \times w \times \overline{K} \frac{dh}{dx} = (b_{1} \times w \times K_{1} + b_{2} \times w \times K_{2} + b_{3} \times w \times K_{3}) \frac{dh}{dx}
:::

We can now eliminate $dh/dx$ and $w$. Hence we see that for parallel flow the effective hydraulic conductivity can be obtained through arithmetic averaging of $K \times b$.

:::{math}
\overline{K} \times b_{\mathrm{tot}} = K_{1} b_{1} + K_{2} b_{2} + K_{3} b_{3}
:::

:::{math}
\overline{x}=\frac{1}{n}\sum_{i=1}^{n} x_{i}
:::

- **Vertical flow**

Now, for vertical flow, perpendicular to the layers, the physical constraints are that the flow through each layer $i$ (here $i=1, 2, 3$) must be the same and equal the total flow $Q_{\mathrm{tot}}$ (this can be understood by considering that mass must be conserved along the perpendicular flow paths. In other words, the inflow at the top must be balanced by the same outflow at the bottom as long as no accumulation occurs). The second constraint is that the total hydraulic gradient equals the total hydraulic head difference $h_{\mathrm{tot}}$ divided by the total thickness ($b_{\mathrm{tot}}$) and that the hydraulic gradient in an individual layer $i$ equals the head difference in the layer $h_i$ divided by the layer thickness $b_i$.

Hydraulic Conductivity:

:::{math}
\frac{dh_{\mathrm{tot}}}{db_{\mathrm{tot}}} = \frac{dh_1}{db_1} + \frac{dh_2}{db_2} + \frac{dh_3}{db_3}
:::

Flow:

:::{math}
Q_{\mathrm{tot}} = Q_{1} = Q_{2} = Q_{3}
:::

We then apply Darcy's law for the whole system with the cross sectional area $A$, we get.

:::{math}
A\overline{K}\frac{dh_{\mathrm{tot}}}{b_{\mathrm{tot}}} = AK_{1}\frac{dh_1}{b_1} = AK_{2}\frac{dh_2}{b_2} = AK_{3}\frac{dh_3}{b_3}
:::

By rearranging the above equalities, we get relations between the hydraulic head difference in an individual layer and the total hydraulic head difference (eliminating $A$).

:::{math}
dh_{i} = \frac{b_i}{K_i} \overline{K} \frac{dh_{\mathrm{tot}}}{b_{\mathrm{tot}}}
:::

We also have the physical constraint that the sum of the hydraulic head differences in our three layers must equal the total hydraulic head difference. We can now eliminate and rearrange some components of the equation above and get the expression below, which is an harmonic mean value.

:::{math}
\frac{b_{\mathrm{tot}}}{\overline{K}} = \frac{b_1}{K_1} + \frac{b_2}{K_2} + \frac{b_3}{K_3}
:::

(sec-4-5-1-2)=
### 4.5.1.2. Effective hydraulic conductivity of many uncharacterized layers

If we have a geological formation that consists of a number of layers with varying hydraulic conductivity the simple approach presented before may be impossible to apply as layer conductivities and thicknesses are difficult to estimate. Instead we define the effective hydraulic conductivity by a probability density functions (PDF), PDF(K), which is usually a log-normal function $f_{\ln}(K)$ with a mean value and a standard deviation (if log-normal then both are of $\log(K)$, i.e. $\ln(K)$). Even so you should be familiar with basic statistic terms, below you find a brief listing of the most important statistical terms used.

The effective hydraulic conductivity is then written as:

:::{math}
K=E(K)=\mu_{K}=\int Kf(K)dK
:::

With help of other parameters known from measurements, such as groundwater velocity, we can then estimate the probability distribution of the effective hydraulic conductivity. This is done by applying a well known relationship in statistics:

:::{math}
\underbrace{f_{x}(x)}_{\mathrm{outputpdf}} = \left| \frac{\partial y(x)}{\partial x} \right| \underbrace{f_{y}(y(x))}_{\mathrm{inputpdf}}
:::

**Important statistical terms:**

**Variance:**

:::{math}
s^{2} = \frac{1}{n-1} \sum_{i=1}^{n} (x_{i} - \overline{x})^{2}
:::
<!-- CHANGE: i=1 instead of 1=1 -->

**Standard Deviation:**

:::{math}
s = \sqrt{s^2}
:::

*Distribution parameters*

- **Mean:**

:::{math}
E(X) = \mu_{X} = \int x f(x) dx
:::

- **Standard Deviation:**

:::{math}
\sigma_{X} = \sqrt{\sigma_{X}^{2}}
:::

- **Variance:**

:::{math}
V(X) = \sigma_{X}^{2} = E\left((X - \mu_{X})^{2}\right) = \int (x - \mu_{X})^{2} f(x) dx
:::

**Probability density function for Normal distribution:**

:::{math}
f(x;\mu_{X},\sigma_{X}) = \frac{1}{\sigma_{X}\sqrt{2\pi}}e^{\beta}, \ \beta = \frac{(x-\mu_{X})^{2}}{2\sigma_{X}^{2}}, \quad (-\infty \le 0 \le \infty)
:::

**Probability density function for Log-normal distribution:**

:::{math}
f_{\ln}(x;\mu_{Y},\sigma_{Y}) = \frac{1}{x\sigma_{Y}\sqrt{2\pi}}e^{\beta}, \ \beta = \frac{(\ln(x)-\mu_{Y})^{2}}{2\sigma_Y^{2}}, \quad (x>0)
:::

where $Y = \ln(X)$ (if $X$ is log-normal distributed, then $Y$ is normally distributed)

**Calculating $\mu_X$ (log-normally distributed $X$) based on $\mu_Y$ and $\sigma^{2}_{Y}$:**

:::{math}
\mu_{X} = e^{\left(\mu_{Y} + \sigma_{Y}^{2}/2\right)}
:::

**Calculating $\sigma^{2}_{X}$ (log-normally distributed $X$) based on $\mu_Y$ and $\sigma^{2}_{Y}$:**

:::{math}
\sigma_X^{2}=e^{\left(2\mu_{Y}+\sigma_{Y}^{2}\right)}\times\left(e^{\sigma_{Y}^{2}}-1\right)
:::

:::::{exercise}
:label: ex_4_11

(ex_4_11_a)=
a) Consider the layered geological profile below and determine the effective hydraulic conductivity for (i) horizontal flow, and (ii) vertical flow. Is there a big difference?

::::{grid} 2
:class: gap-4 items-end

:::{figure} ../images/fig_ex_4_11_profile_1.png
:label: fig_ex_4_11_profile_1
:height: 200px
:align: center

Geological profile 1.
:::

:::{figure} ../images/fig_ex_4_11_profile_2.png
:label: fig_ex_4_11_profile_2
:height: 200px
:align: center

Geological profile 2.
:::
::::

(ex_4_11_b)=
b) Do the same as above for the geological profile of {ref}`fig_ex_4_11_profile_2`. 
(ex_4_11_c)=
c) Determine how much larger the horizontal conductivity is in {ref}`Ex. 4.11 b) <ex_4_11_b>` in comparison with {ref}`Ex. 4.11 a) <ex_4_11_a>` by calculating the ratio {ref}`Ex. 4.11 b) <ex_4_11_b>`/{ref}`Ex. 4.11 a) <ex_4_11_a>`. Do the same for the vertical conductivity. Which conductivity, the horizontal or the vertical, increased the most (in relative terms) when the clay layer thickness decreased from 1 m in {ref}`Ex. 4.11 a) <ex_4_11_a>` to 0.33 m in {ref}`Ex. 4.11 b) <ex_4_11_b>`? See the course material for expressions for arithmetic averaging and harmonic averaging.
:::::

:::::{exercise}
:label: ex_4_12

(ex_4_12_a)=
a) Assume that particles are released at $t_{0}= 0$ at the soil surface and that the flow is downwards ({ref}`fig_ex_4_12_snapshot`). The water table coincides with the soil surface. The layers can be considered to be homogeneous although the conductive properties are different between the layers, as indicated in {ref}`fig_ex_4_12_snapshot`. The porosity is equal in all layers. If local dispersion is negligible, and the head difference between the top and the bottom of the aquifer is the same regardless of horizontal position, which of the below "snapshot" alternatives is/are possible for the location of the particles at $t = t_{1} (t > 0)$? More than one alternative can be correct.

::::{grid} 2
:class: gap-4 items-end

:::{figure} ../images/fig_ex_4_12_snapshot.png
:label: fig_ex_4_12_snapshot
:height: 200px
:align: center

Snapshot at $t = t_{0}$
:::

:::{figure} ../images/fig_ex_4_12_snapshot_alternatives.png
:label: fig_ex_4_12_snapshot_alternatives
:height: 200px
:align: center

Snapshot alternatives at $t = t_{1} > t_{0}$
:::
::::

(ex_4_12_b)=
b) Based on the correct situation(s) in {ref}`Ex. 4.12 a) <ex_4_12_a>`, how will the temporal, cumulative distribution function (CDF) for particles look like at the location of the control plane (bottom)? (Sketch the curve for time versus fraction of particles.)
:::::

:::::{exercise}
:label: ex_4_13

(ex_4_13_a)=
a) This question similar to {ref}`ex_4_12`, although now the flow is from the left to the right in {ref}`fig_ex_4_13_snapshot`, and the head difference between left and right can be considered to be constant regardless Given the snapshot at $t = t_{0}$, which of the below snapshot alternatives is/are possible for $t = t_{1} > t_{0}$?

::::{grid} 2
:class: gap-4 items-end

:::{figure} ../images/fig_ex_4_13_snapshot.png
:label: fig_ex_4_13_snapshot
:height: 200px
:align: center

Snapshot at $t = t_{0}$
:::

:::{figure} ../images/fig_ex_4_13_snapshot_alternatives.png
:label: fig_ex_4_13_snapshot_alternatives
:height: 200px
:align: center

Snapshot alternatives at $t = t_{1} > t_{0}$
:::
::::

(ex_4_13_b)=
b) Based on the correct situation(s) in {ref}`Ex. 4.13 a) <ex_4_13_a>`, how will the temporal, cumulative distribution function (CDF) for particles look like at the location of the control plane (right)? (Sketch the curve for time versus fraction of particles.)
:::::

:::::{exercise}
:label: ex_4_14
Using the numbers for $K_1$ and $K_2$ and the length dimensions given in {ref}`Ex. 4.11 a) <ex_4_11_a>`, as well as the relevant calculations of {ref}`Ex. 4.11 a) <ex_4_11_a>`, estimate the time for the arrival of the first particle in {ref}`ex_4_12` and {ref}`ex_4_13`. The porosity is 0.25 and the hydraulic gradient is 0.02 in all layers. Do the same for the last particle. Will the first particle arrive to the control plane earlier in {ref}`ex_4_12` than in {ref}`ex_4_13`, or later? And how is the situation for the last particle?
:::::

:::::{exercise}
:label: ex_4_15
We now consider many thin layers, according to {ref}`fig_ex_4_15_aquifer_layered`. Because of the large number of layers, the conductivity of each one is not known. However, measurements have shown that the layer conductivities follow a log-normal probability density function, $f_{\ln}(K)$, with a mean value (of $\ln(K)$) of -6.9 and a standard deviation (of $\ln(K)$) of 0.9. The formula for $f_{\ln}(K)$ is given in the course material

:::{figure} ../images/fig_ex_4_15_aquifer_layered.png
:label: fig_ex_4_15_aquifer_layered
:width: 400px
Aquifer consisting of numerous layers.
:::

(ex_4_15_a)=
a) Assuming the aquifer (porosity $n = 0.3$) is confined and situated between two small lakes as shown schematically in {ref}`fig_ex_4_15_aquifer_layered`, write the relation between the hydraulic conductivity $K$ of a layer and the pore water velocity $v$ in the layer. 
(ex_4_15_b)=
b) Use the expression in {ref}`Ex. 4.15 a) <ex_4_15_a>` and derive an expression for the probability density function for the pore water velocity. 
(ex_4_15_c)=
c) Calculate the mean pore water velocity. Also calculate the travel time that corresponds to the mean pore water velocity. 
(ex_4_15_d)=
d) If one would explicitly calculate the mean travel time, by considering the probability density function for the travel time, rather than as in {ref}`Ex. 4.15 c) <ex_4_15_c>` considering a travel time that corresponds to a mean pore water velocity, would the answer be the same? Give a motivation for your answer.
:::::

:::::{exercise}
:label: ex_4_16
A well is located in a rock fracture zone at a distance L from a lake ({ref}`fig_4_16_sketch_situation`).

:::{figure} ../images/fig_4_16_sketch_situation.png
:label: fig_4_16_sketch_situation
:width: 400px
Schematic illustration of the hydro-geological situation.
:::

(ex_4_16_a)=
a) Because the porosity of the fracture zone is low, even modest precipitation has relatively large effect on $\Delta h$ and the travel time $T$ between the well and the lake. Therefore, the water-levels at the well and the lake were continuously monitored during ten weeks, and the weekly maximum values of $\Delta h$ ($\Delta h_{\mathrm{max}}$) were determined as:

:::{table} Measurements of water levels.
:label: tab_ex_4_16_water_levels

| Week # | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $\Delta h_{\text{max}}$ (m) | 2.7 | 3.8 | 4.3 | 3.4 | 2.8 | 2.1 | 2.5 | 2.7 | 3.5 | 3.1 |
:::

Based on the tabulated data, determine the mean value and the standard deviation of $\Delta h_{\mathrm{max}}$ 

(ex_4_16_b)=
b) Continuous monitoring during a few years indicated that $\Delta h_{\mathrm{max}}$ can be regarded as a normally distributed random variable with a mean value of 3.0 and a standard deviation of 0.6, i.e., $\Delta h_{\mathrm{max}} \in N(3.9, 0.6)$. What is the probability that $\Delta h_{\mathrm{max}}$-reading is greater than 5 meters, i.e., what is $P(\Delta h_{\mathrm{max}} > 5)$? 

(ex_4_16_c)=
c) The hydraulic conductivity and the porosity of the fracture zone are such that the weekly maximum advective velocity can be estimated from $v_{\mathrm{max}} = 5 \cdot 10^{-4} \times \Delta h_{\mathrm{max}}$, where $v_{\mathrm{max}}$ is given in m/s and $\Delta h_{\mathrm{max}}$ is given in m. Provided that $\Delta h_{\mathrm{max}} \in N(3.9, 0.6)$, as assumed in {ref}`Ex. 4.16 b) <ex_4_16_b>`, is $v_{\mathrm{max}}$ normally distributed or not? Also determine the mean value and standard deviation of $v_{\mathrm{max}}$.

:::::

:::::{exercise}
:label: ex_4_17
The relation between the intrinsic permeability, $k$, and the hydraulic conductivity, $K$, used by the hydrogeologists is:

:::{math}
K=k\frac{\rho g}{\mu}
:::

where $\rho$<!-- CHANGE: "r" --> is the fluid density, $g$ is the acceleration of gravity and $\mu$<!-- CHANGE: "m" --> is the dynamic fluid viscosity. 

a) Derive the PDF of $k$, $f_{k}(k)$, based on the PDF of $K$, $f_{K}(K)$. 

b) It can be assumed that the hydraulic conductivity $K$ is described by a log-normal distribution $Y = \ln(K)$, where $Y$ is normally distributed with $\mu_Y = 1.142$ m/d, $\sigma_{Y}^{2} = 0.342$ m{sup}`2`/d{sup}`2`. Calculate the mean and the standard deviation for the permeability values associated to that $K$-field if $\rho = 1000$  kg/m{sup}`3` and $\mu = 10^{-3}$ kg/(m s).
:::::