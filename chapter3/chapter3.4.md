---
numbering:
  enumerator: 3.%s
---

(sec-3-4)=
# 3.4. Estuarine exchange flows and tracer fluxes

The circulation of water is governed by the equations of motion, i.e. the Navier-Stokes equations Eq. {ref}`eq_navier_stokes_1`-Eq. {ref}`eq_navier_stokes_3`, or

:::{math}
\frac{\partial v_i}{\partial t} + v_{j} \frac{\partial v_i}{\partial x_j} = \frac{1}{\rho} \frac{\partial p}{\partial x_i} + \nu \frac{\partial^{2} v_j}{\partial x_{j}^{2}} + F_i
:::

Where $F_i$ is the sum of all external forces acting on the fluid, e.g. gravitational acceleration g, wind stress, bottom friction. One specific force of importance when dealing with large estuaries is the Coriolis force, which is really an effect induced by Earth's rotation rather than a real force. The result of the Earth's rotation is that moving objects deflect to the right in the northern hemisphere and to the left in the southern. This has many implications, one example is the Swedish rivers that when discharging into the Baltic Sea, deflect to the right, i.e. southwards.

Salt and other conservative tracers are transported according to the ADE equation where the horizontal dispersion is assumed to be equal in $x$- and $y$-directions and the vertical dispersion is $K_{\mathrm{v}}$.

:::{math}
\frac{\partial S}{\partial t} + \nabla \cdot (\mathbf{u}S) = K_{\mathrm{h}} \Delta S + K_{\mathrm{v}} \frac{\partial^2 S}{\partial z^2}
:::

(sec-3-4-1)=
## 3.4.1. Knudsen's hydrographical theorem

In a highly stratified estuary the mixing and transport of salt is almost only due to advection and can thus be described by a simpler form of the salt equation. Consider a two-layered box model of the estuary, where we have river input ($R$) at one side to the upper layer and salt water inflow ($Q_{\mathrm{b}}$) at the outer boundary of the lower layer as in {ref}`fig_stratified_estuary_simple_model`. The only transport between these layers is assumed to occur in vertical direction.

:::{figure} ../images/fig_stratified_estuary_simple_model.jpg
:label: fig_stratified_estuary_simple_model
:width: 400px
A simple box model of a highly stratified estuary, where $Q$ indicates flows and $S$ salinity (@tomczak1998).
:::

In steady state conservation of mass of water gives

:::{math}
R + Q_{\mathrm{b}} - Q_{\mathrm{t}} = 0
:::

Conservation of salt requires

:::{math}
RS_{\mathrm{f}} + Q_{\mathrm{b}} S_{\mathrm{b}} - Q_{\mathrm{t}} S_{\mathrm{t}}
:::

Where $S_{\mathrm{f}} = 0$ is the freshwater salinity. Thus we have a simple relation, giving the water flows if we know the salinity in both layers (which can be measured) at the inlet and the outlet.

:::{math}
Q_{\mathrm{t}} = \frac{R}{1 - \frac{S_{\mathrm{t}}}{S_{\mathrm{b}}}}
:::

:::{math}
Q_{\mathrm{b}}=\frac{R}{\frac{S_{\mathrm{b}}}{S_{\mathrm{t}}}-1}
:::

This can be generalized to sections of an estuarine channel according to {ref}`fig_stratified_estuary_general_section_model`

:::{figure} ../images/fig_stratified_estuary_general_section_model.jpg
:label: fig_stratified_estuary_general_section_model
:width: 350px
A general section model of a highly stratified estuary. $Q_j$ is the water flow, $S_j$ describes the salinity over the $j$-th border (@tomczak1998).
:::

Mass conservation of water in steady state conditions gives

:::{math}
Q_{j}^{\mathrm{upper}}-Q_{j}^{\mathrm{lower}}-Q_{j+1}^{\mathrm{upper}}+Q_{j+1}^{\mathrm{lower}}=0
:::

and for salt

:::{math}
Q_j^{\mathrm{upper}}S_j^{\mathrm{upper}}-Q_j^{\mathrm{lower}}S_j^{\mathrm{lower}}-Q_{j+1}^{\mathrm{upper}}S_{j+1}^{\mathrm{upper}}+Q_{j+1}^{\mathrm{lower}}S_{j+1}^{\mathrm{lower}}=0
:::

This gives the following solution scheme for water flow over the $j+1$-th border.

:::{math}
Q_{j+1}^{\mathrm{upper}} = Q_{j}^{\mathrm{upper}} \left( \frac{S_{j}^{\mathrm{upper}} - S_{j+1}^{\mathrm{lower}}}{S_{j+1}^{\mathrm{upper}} - S_{j+1}^{\mathrm{lower}}} \right) - Q_{j}^{\mathrm{lower}} \left( \frac{S_{j}^{\mathrm{lower}} - S_{j+1}^{\mathrm{lower}}}{S_{j+1}^{\mathrm{upper}} - S_{j+1}^{\mathrm{lower}}} \right)
:::

:::{math}
Q_{j+1}^{\mathrm{lower}} = Q_{j}^{\mathrm{upper}} \left( \frac{S_{j}^{\mathrm{upper}} - S_{j+1}^{\mathrm{upper}}}{S_{j+1}^{\mathrm{upper}} - S_{j+1}^{\mathrm{lower}}} \right) + Q_{j}^{\mathrm{lower}} \left( \frac{S_{j+1}^{\mathrm{upper}} - S_{j}^{\mathrm{lower}}}{S_{j+1}^{\mathrm{upper}} - S_{j+1}^{\mathrm{lower}}} \right)
:::

which could be simplified to

:::{math}
Q_{j+1}^{\mathrm{upper}} = Q_{j}^{\mathrm{upper}} \frac{1 - \frac{S_{j}^{\mathrm{upper}}}{S_{j}^{\mathrm{lower}}}}{1 - \frac{S_{j+1}^{\mathrm{upper}}}{S_{j+1}^{\mathrm{lower}}}}
:::

:::{math}
Q_{j+1}^{\mathrm{lower}} = Q_{j}^{\mathrm{lower}} \frac{\frac{S_{j}^{\mathrm{lower}}}{S_{j}^{\mathrm{upper}}} - 1}{\frac{S_{j+1}^{\mathrm{lower}}}{S_{j+1}^{\mathrm{upper}}} - 1}
:::

Notice that the right hand sides (RHS) in these equations only contain $j$-terms for water flow, which makes this to an iterative scheme. This means that we can solve these equations for each consecutive $j+1$ border and thus calculate the water exchange within the whole estuary, providing that we know the top and bottom salt concentrations in each compartment and the river inflow into the estuary.

(sec-3-4-2)=
## 3.4.2. Water exchange in a stratified water column over a sill or through a constriction

The two-layer flow over a sill is controlled by the *composite Froude number* at the sill

:::{math}
:label: eq_flow_sill_composite_froude
G^{2}=F_{1}^{2}+F_{2}^{2}=\frac{U_{1}^{2}}{g' h_1}+\frac{U_{2}^{2}}{g' h_2}=1
:::

:::{figure} ../images/fig_stratified_estuary_sill_general_section_model.jpg
:label: fig_stratified_estuary_sill_general_section_model
:width: 300px
A general section model of a highly stratified estuary. $Q_j$ is the water flow, $S_j$ describes the salinity over the $j$-th border (@tomczak1998).
:::

where $g' = g \Delta \rho / \rho = g(S_{2}-S_{1})/S_{2} \rho$ is the reduced gravity and $U_1$ and $U_2$ are the velocities in each layer. The situation is shown in {ref}`fig_stratified_estuary_sill_general_section_model` and is usually applicable to fjord-like estuaries.

The sill has a width $B$ and depth $H$, the freshwater inflow to the estuary is $Q_{\mathrm{f}}$. Setting $u_{1}h_{1}=q_{1}=Q_{1}/B$, $u_{2}h_{2}=q_{2}=Q_{2}/B$ and $q_{\mathrm{f}}=Q_{\mathrm{f}}/B$ and defining the relative layer thickness as

:::{math}
h_{1} = (1 - \eta)H; \ h_{2} = \eta H
:::

gives together with Eq. {ref}`eq_flow_sill_composite_froude` the dynamic sill condition in<!-- CHANGE: "... i terms..." -> "... in terms" --> terms of $q$.

:::{math}
\frac{q_{1}^{2}}{(1-\eta)^3} + \frac{q_{2}^{2}}{\eta^3} = g' H^3
:::

Using the water conservation equation

:::{math}
q_{2} = q_{1} - q_{\mathrm{f}}
:::

gives

:::{math}
\frac{q_{1}^{2}}{(1-\eta)^3} + \frac{q_{1}^{2} - 2q_{1} q_{\mathrm{f}} + q_{\mathrm{f}}^2}{\eta^3} = g(\Delta\rho/\rho)H^3
:::

Multiplying by $\eta^{3} / q^2$ and introducing

:::{math}
P = \frac{q_{1}}{q_{\mathrm{f}}}
:::

the mixing factor, which is a measure of how much water is mixed into the freshwater fraction within the estuary gives

:::{math}
P^{2} \left[1+\frac{\eta^3}{(1-\eta)^3}\right]-2P+1=\frac{\eta^3}{F_{\mathrm{e}}^2}
:::

Where we have defined the *estuarine Froude number*, $F_{\mathrm{e}}$.

:::{math}
F_{\mathrm{e}}=\frac{Q_{\mathrm{f}}}{\sqrt{(\Delta\rho/\rho)g B^{2} H^3}}
:::

This expression relates the degree of mixing within the estuary to the layer thickness to freshwater inflow and physical characteristics at the mouth. The solution for a couple of $F_{\mathrm{e}}$-numbers are plotted in {ref}`fig_estuary_relationship_mixing_froude` and shows that for a given estuarine geometry and external forcing ($F_{\mathrm{e}}$) and mixing intensity, $P$, only two different combinations of layer thickness are allowed. The maximum mixing intensity that is allowed occurs when $\eta \approx 0.5$ for small $F_{\mathrm{e}}$. That means that for a given mouth geometry and freshwater inflow there exists a maximum mixing, resulting in almost equally thick layers at the mouth, no matter how much mixing energy that is available. This state is called *overmixed* .

:::{figure} ../images/fig_estuary_relationship_mixing_froude.jpg
:label: fig_estuary_relationship_mixing_froude
:width: 600px
Relationships between layer thicknes, $\eta$, mixing, $P$, and Estuarine Froude number, $F_{\mathrm{e}}$. Every line corresponds to one specific $F_{\mathrm{e}}$, denoted in the figure. Adapted from @stigebrandt1989.
:::

(sec-3-4-3)=
## 3.4.3. Flushing time and pollutant transport

The *flushing time* is a crucial concept for estimating the fate of pollutants and robustness of estuarine environments. If the water mass within the estuary is regularly and quickly exchanged into the surrounding ocean, pollutants will also pass through quickly, possibly causing less harm than in a stagnant estuary. The term is basically identical to that of residence time, introduced in {ref}`Section 1.6.1.1. <sec-1-6-1-1>` but when studying estuaries the important process is often the time of exposure of a pollutant in the estuarine body and consequently the time required to flush the entire estuary body has been regarded. Thus the different nomenclature.

The general expression of the flushing time is

:::{math}
t_{\mathrm{f}} = \frac{V_{\mathrm{f}}}{R} = f^{*} \frac{V}{R}
:::

Where $V_{\mathrm{f}}$ is the freshwater volume in the estuary, $f^{*}$ is the average freshwater fraction, $V$ is the total estuarine volume and $R$ is the river flow. The flushing time is then a measure of the time required to replace the estuarine freshwater at the rate of freshwater net flow. Since $f^{*} = 1-S^{*}/S_{0}$, the flushing time could be calculated straightforward if many distibuted salinity measurements for the whole estuary are available. However, since measurements usually are scarce or expensive, methods for calculating the flushing time from fewer measurements are desirable.

(sec-3-4-3-1)=
### 3.4.3.1. Tidal prism method

A simple estimate for calculating the flushing time is by using the tidal prism estimate. Here the freshwater fraction is assumed to equal the fraction of river inflow volume ($R$) over one tidal cycle and the intertidal volume, the *tidal prism* ($P$), i.e. the water entering the estuary during one tidal cycle which is the sum of the river inflow and tidal flood flow.

:::{math}
f^{*} = \frac{R}{T+R} = \frac{R}{P}
:::

Which gives the flushing time

:::{math}
t_{\mathrm{f}} = \frac{V}{P}T
:::

Where $V$ in this case is the estuary volume at *low tide*. The time unit is one tidal period. Note that this method has been found to underestimate the flushing time considerably, mainly because it assumes complete mixing of the water masses during one tidal cycle, which is generally not true. Water that leaves the estuary during one tidal cycle can also reenter through the mouth at next flood.

(sec-3-4-3-2)=
### 3.4.3.2. Salt budget method

To calculate the freshwater fraction, the Knudsen formulas described<!-- CHANGE: "...describes" --> in section {ref}`Section 3.4.1 <sec-3-4-1>` could be used. Knowing the salinity concentrations at the mouth of the estuary and the river flow rate ($R$) the flushing time is

:::{math}
t_{\mathrm{f}} = \left(1 - \frac{S_{\mathrm{top}}}{S_{\mathrm{bottom}}}\right) \frac{V}{R}
:::

Also this method underestimates the actual flushing time, since it assumes complete mixing of the entrained bottom water with the top water and a distinct two-layer structure.

When choosing flushing time estimate it is important to look at the characteristics of the studied estuary, the tidal prism method is more applicable to slightly stratified estuaries with large vertical mixing and tidal flows, as the Knudsen theorem method is better for salt wedge estuaries.

(sec-3-4-3-3)=
### 3.4.3.3. Water age, Exposure time and Modelling

However since different processes are present in estuarine dynamics and lakes the methods mentioned above ignore several important aspects and another measure of the time particles stay in an estuary is needed. The most problematic assumption is the complete mixing. As we have seen, circulation is highly variable and often restricted to different parts of the estuary. Therefore the residence, or flushing, time varies for different parts of the estuary. For example, tidal flows usually creates smaller residence times closer to the mouth, wind and density circulation can create stagnant zones and eddies within the estuary which considerably raises the residence time, the circulation in fjords is very different in the surface layer and the bottom layer, at low tide wetlands can form in parts of the estuary, also raising the time water stays in the estuary.

This calls for the concept of *water age*, where modelling is used to track the fate of individual water particles, measuring the time they are in the estuary. In that way the flushing time of different parts of the estuary can be determined. An example of the result of this kind of modelling is shown in {ref}`fig_estuary_water_age`.

:::{figure} ../images/fig_estuary_water_age.jpg
:label: fig_estuary_water_age
:width: 500px
Modeled residence times and circulation patterns for the Mururoa atoll lagoon. The zero streamline separates anti-clockwise circulation from clockwise. Notice that most of the lagoon circulation is closed, so exchange with the ocean can only occur through turbulent diffusion across streamlines. Parts of the lagoon form relatively stagnant zones and are not flushed in more than 100 days (@tomczak1998).
:::

As mentioned above, water that has left the estuary can also re-enter through the estuary mouth during following tidal floods. Thus the time that an individual water particle is within the estuary can be significantly longer than just the theoretical residence time or average age. Therefore it is sometimes necessary to discuss the concept of *exposure time*, i.e. the time spent in the domain of interest until the particles never return back into the estuary. This is however more complicated to calculate since the circulation *outside* the estuary mouth has to be known as well (@wolanski2007).

:::::{exercise}
:label: ex_3_2
At the mouth of one estuary there exists a distinct two-layer flow situation. The outward-flowing upper layer has a salinity of 28 psu and the ocean has a salinity of 35 psu. The freshwater inflow into the estuary is estimated to be 25 m{sup}`3`/s. Assuming that the estuary is highly stratified, how large are the in- and outflows at the mouth?
:::::

:::::{exercise}
:label: ex_3_3
A relatively large estuary with a surface area ($A$) of 20 km{sup}`2` and a mean depth ($D$) of 20 m has an average tidal range ($h$) of 2 m. The tidal mixing forces are large enough to provide significant mixing in the estuarine water body and conditions within are characterized as slightly stratified. The tidal period is di-urnal, meaning that there occurs almost two tides per day and the period is then 12.5 hours. Calculate an estimate of the flushing time.
:::::

:::::{exercise}
:label: ex_3_4
Consider an estuary with the same geometry as the one in {ref}`ex_3_3` but with no tidal flows. The estuary can then be assumed to be highly stratified. The river inflow ($R$) is 50 m{sup}`3`/s. The salinity in the top layer is measured to be 30 psu and in the bottom layer 35 psu. Calculate the flushing time.
:::::

:::::{exercise}
:label: ex_3_5
Consider the fjord-like estuary in {ref}`ex_3_4`. The sill depth is 20 m and width is 100 m. The upper layer with salinity 30 psu has a density of 1 023 kg/m{sup}`3` and the lower (S=35 psu) 1 027kg/m{sup}`3` 

a) Calculate the estuarine Froude number. 

b) Calculate the mixing factor. 

c) What is the effect of higher freshwater inflow if all other parameters are the same? 

d) What is the effect of higher mixing intensity if all other parameters are the same?
:::::