---
numbering:
  enumerator: 4.%s
---

(sec-4-4)=
# 4.4. Solute transport in soils and groundwater

What happens to contaminants that enter the saturated zone? What kind of processes are governing the movement of the contaminants? By simulating these processes can we accurately predict the movement of a contaminant? How reliable are these predictions? In this chapter the transport processes will be covered briefly. We will start by presenting a common empirical method applicable both in field and laboratory, called a tracer test. It enable us to visualize the fate of a contaminant transport, both in space and time. The continuum law from physics will be applied in the form of a mass balance equation. It is used in models to simulate the behavior of solute transported by groundwater.

(sec-4-4-1)=
## 4.4.1. Tracer and breakthrough curve (BTC)

A common tool used to visualize the spreading of contaminants and to help in understanding of the different transport processes, is the tracer test, presented in the form of a breakthrough curve, see {ref}`fig_BTC_tracer`. The tracer tests can be conducted both in the laboratory and in the field. It is commonly done by measuring the concentration of some species introduced or already present in a groundwater system repeatedly in some predefined time interval. To study the affect of advection, dispersion and diffusion a conservative tracer is used i.e. the chloride ion. There are also reactive tracers used to study retarding (retention) effects and source/sink (decay/growth) processes.

We will go on by describing a simple experiment, perhaps not a very accurate one but it will provide the basic idea behind a tracer test. Now imagine filling the kitchen sink (introduced in the theoretical part) with sand and putting an (airtight) lid on it. A gap is left between the lid and the sand and we assume that no sand will exit the sink. We thereafter connect a water tap with constant flow rate to a hole in the lid so that it saturates the sand. Next the tap is replaced by another water source containing a contaminant entering the sink at a the same constant flow rate. Now we start a timer and measure the concentration of contaminant in the outlet of the sink and plot it on a graph. The plotted graph would look something like the one presented in {ref}`fig_BTC_tracer`, this is called a breakthrough curve or BTC. If the supplied source has a constant concentration of contaminant, and it remains so throughout the test, it is a continuous source. If we would switch back to the water tap after some predefined time, we would have a finite pulse source. If the duration time of the finite source is very small it is said to be an instantaneous pulse source (which is described mathematically by the Dirac-delta function, introduced in the theory section).

:::{figure} ../images/fig_BTC_tracer.png
:label: fig_BTC_tracer
:width: 400px
A breakthrough curve displacing a tracer test. The tracer test represents a continuous source. The x:es in the figure display measure points, the line is an approximation of the curve.
:::

(sec-4-4-2)=
## 4.4.2. Solute transpor equation

The transport of solute contaminants in groundwater is modeled in a similar way as introduced in surface water modeling. We may use simple advection-dispersion equations (ADE) or we may consider retardation (sorption) and reaction processes (ADRE). As the general description of the various transport mechanism is given in {ref}`Section 1.6. <sec-1-6>` and {ref}`Section 1.7. <sec-1-7>`, the following sections only briefly outline the different processes for the special case of solute transport in groundwater. Below we see the common one-dimensional transport equation as described in {ref}`Section 1.7.4. <sec-1-7-4>`, but rewritten using the notation we introduced for groundwater flow:

:::{math}
\frac{\partial C}{\partial t} = -\frac{v_{x}}{R} \frac{\partial C}{\partial x} + \frac{D_{x}}{R} \frac{\partial^{2} C}{\partial x^{2}} - \frac{k}{R} C
:::

Note that here the retardation coefficient $R$ is used. It may represent various sorption processes, in this form the processes are assumed linear and in equilibrium (see {ref}`Section 4.4.2.4. <sec-4-4-2-4>`). It is further important to mention the assumptions made in order to simplify the transport equation to the form given above: a homogeneous porous media, saturated conditions, steady-state and an average linear velocity. The transport equation also has to fulfill the conservation of mass on a elemental volume (see {ref}`Section 1.3.3. <sec-1-3-3>`).

(sec-4-4-2-1)=
### 4.4.2.1. Transport process - Advection

We mentioned earlier that the groundwater flow is important for revealing the transport and movement of the contaminants in groundwater. We will now briefly explain why. As an example, imagine placing a fishing float in a river with laminar (no turbulences) flow on a quiet (no wind) day. If we release enough line the float will flow along with the river water at the same velocity. Looking at groundwater flow at micro/pore scale, a contaminant particle would be brought along at the same speed as the groundwater (parameter $u$) in the same way as the float would in a river. This is referred to as advective transport.

Now since groundwater is flowing through porous media, pure advection is not enough to accurately simulate/predict the transport of contaminants. We also need to consider the effects of the medium through which the contaminated water flows. These effects cause the contaminants to be delayed with respect to the advective flow.

(sec-4-4-2-2)=
### 4.4.2.2. Transport processes - Dispersion and Diffusion

The process called mechanical dispersion is a result of the flow through porous media, which will spread and dilute the contaminant (small in very low velocities). This process is due to the irregular flow paths and different velocities of the water flowing through the porous medium if we consider the microscopic scale. Let us look at a set of contaminant particles being transported through a pore channel of the media by advection. Due to the pore structure, the pore channel will eventually branch out in a set of new paths and the next ones into new branches, similar to the branches on a tree. (However, the contaminant might coincide again at a later point if their flow paths meet again). This "branching" will spread and dilute the contaminant in both longitudinal (flow direction) and transverse -direction (perpendicular to the flow direction). The thickness of the channels affecting the velocity and the length of the flow path are governing factors. Now, since water flowing through a pipe has a parabolic velocity profile, it means that water closer to the sides of the pipe move slower than in the center of the pipe. In the same way, the pore channels have an advective velocity profile such that water velocity is slower the closer the water is to the side of the pore channel. Thus, microscopic dispersion is caused by two factors, (i) the "branching" of flow paths in pore channels, and (ii) the velocity profile across pore channels.

Dispersion can also take place on the macroscopic scale. At this scale it is caused by variable permeabilities of single layers that cause different flow velocities within the aquifer ({ref}`fig_dispersion_factors`).

:::{figure} ../images/fig_dispersion_factors.jpg
:label: fig_dispersion_factors
:width: 500px
Dispersion causing factors on micro- and macroscopic scales (After Kinzelbach, 1987<!-- QUESTION: Reference is missing in list -->).
:::

There is another process, independent of the flow of the groundwater, and that is **diffusion**. By simplifying the contaminant to a single ion, for example the chloride ion (seawater intrusion) and looking at it on a molecular scale, we would see the ions moving around in a pattern that would seem random. Now since the ions have the same charge they would be repelled by each other, hence the trend of movement would be towards areas of less concentration of chloride ions. This means that the contaminant is transported from areas of high concentration to areas of low concentrations. This is called diffusion and is described by Fick's law (see {ref}`Section 1.6.2. <sec-1-6-2>`). It can also be described using a stochastic approach called a "random walk" (see {ref}`Section 1.8.3.2. <sec-1-8-3-2>`). When modeling these processes, they are usually combined into one property called dispersion coefficient expressed by $D= \alpha v + D^{*}$. Where $\alpha v$ is the dynamic dispersivity (characteristic property of the porous medium, scale dependent), $D^*$ is the coefficient of molecular diffusion for the solute in porous medium.

(sec-4-4-2-3)=
### 4.4.2.3. Transport process - Retardation and Reaction

When a contaminant moves through porous medium it also interacts with the medium itself. We can use the general terms **sorption or retardation** (parameter $R$) to describe the process where the movement of pollutants in groundwater is slowed down (retarded) relative to an inert (non-reacting) solute (An inert solute would be subject to dispersion and diffusion.). The sorption processes can be divided in absorption, adsorption and ion exchange.

**Reactions** (parameter $r$), a term which sometimes is also used for sorption processes, includes among others biodegradation, hydrolysis, redox reactions, and volatilization. Reactions usually reduce the solute concentration but may however also increase the dissolved contaminant concentration. More about the affects of the different transport processes on the solute transport in groundwater can be studied with help of the Transport Guide[^transport_guide] on the course homepage[^course_homepage] . {ref}`fig_BTC_different_transports` provides an example of the various transport mechanisms.

:::{figure} ../images/fig_BTC_different_transports.png
:label: fig_BTC_different_transports
:width: 500px
A pulse input of a contaminant shown as BTC, displaying different transport processes: (a) advection (b) advection and dispersion: (c) advection, dispersion, and retardation (d) advection, dispersion, retardation and reaction.
:::

(sec-4-4-2-4)=
### 4.4.2.4. Example landfill - Transport processes

We will now return the landfill example. In this section we will look in more detail on the contaminant transport. A question to ask oneself is for example: Is the advective transport approximation good, or is it relevant to look at other transport processes like dispersion, diffusion, retardation or reactions? We will simulate the behavior of the contaminant using the contaminant transport equation above. However, the question is how do we estimate the required parameters?

At a first step we may assume that there are no reactions occurring in the area of study. Then we can think about how to find the retardation factor $R$. We could for example use adsorption isotherms determined in laboratory batch tests. Because it is not possible to distinguish between all the sorption processes that may occur, such tests look instead at the distribution of the solute mass between the solid and the solution phase. It will show the equilibrium concentration of the species adsorbed onto the medium, in relation to the concentration in the water. This requires that we assume that the time scale of microscopic processes is much less then the time scale of macroscopic processes, since otherwise we cannot reach an equilibrium of the sorption processes.

(sec-4-4-2-4-1)=
#### 4.4.2.4.1. This is how a batch test works:

1. Add a known amount of solute to a test tube
2. Add a known mass of soil/sediment to the tube
3. Shake and let it attain equilibrium
4. Measure equilibrium concentration in solution
5. Determine how much mass was removed from the solution
6. Plot equilibrium concentration vs. mass sorbed and fit a model (isotherm)

A number of test tubes ar prepared as described above. There are two different ways to conduct this test. Either keeping the relation between the solute volume and the added mass of sorbing material constant ($-L/m = \mathrm{constant}$), with different initial concentration of solute or keeping the initial concentration of solute constant and varying the $-L/m$ relation (see {ref}`fig_ex_landfill_batch_isotherm`). From both tests we got initial concentration of the solute $c_0$ as well as the concentration when equilibrium is reached $c$. Now by looking at the mass balance of the species under investigation we can calculate $q$, the amount sorbed to the solid phase,

:::{math}
c_{0}L+mq_{0}=cL+mq \quad \Rightarrow \quad q=\frac{L}{m}(c_{0}-c)
:::

The data from the batch test is plotted in a diagram and approximated by a adsorption isotherm. Depending on mixing method we may use different procedures to obtain the isotherm.

:::{figure} ../images/fig_ex_landfill_batch_isotherm.png
:label: fig_ex_landfill_batch_isotherm
:width: 400px
Isotherm obtained from a batch-test. The circles show data from a batch test, the line represent the Freundlich isotherm calculated from this data. With the initial and equilibrium concentration known, the data can be plotted by the method illustrated in the figure. The straight with different initial concentration vs. the varying lines slops with same initial concentration represent the different batch mixing methods.
:::

Common adsorption isotherms are the nonlinear Freundlich and Langmuir isotherms. However when dealing with groundwater the contaminant concentration is usually fairly low, in comparison with for example the concentrations dealt with in a wastewater plant. Looking at the sorption data in {ref}`fig_ex_landfill_batch_isotherm_linear`, one can see that it is possible to treat the isotherm as linear so that we have

:::{math}
S = K_{\mathrm{d}} \times c
:::

where $S$ is the amount sorbed on onto the porous medium, $K_{\mathrm{d}}$ is the distribution coefficient and $c$ the solute concentration. With the distribution coefficient $K_{\mathrm{d}}$ we can finally calculate the retardation factor $R$ used in the ADRE:

:::{math}
\frac{\partial S}{\partial t} = K_{\mathrm{d}} \frac{\partial C}{\partial t} \quad \Rightarrow \quad \frac{\partial S}{\partial C} = K_{\mathrm{d}}
:::

The nonlinear isotherms are often more accurate, especially when the solute concentration is high. These are given by:

:::{math}
\begin{gathered}
\text{Langmuir Isotherm} \\
S = \frac{K_{1} C}{1 + K_{2} C}
\end{gathered}
:::

:::{math}
\begin{gathered}
\text{Freundlich Isotherm} \\
S = K_{1} C^{K_{2}}
\end{gathered}
:::

with $K_1$ and $K_2$ as coefficients reflecting the extent of sorption.

The distribution coefficient $K_{\mathrm{d}}$ is equal to the slope of the linear sorption isotherm, illustrated in {ref}`fig_ex_landfill_batch_isotherm_linear`.

Now the retardation factor $R$ can be calculated as:

:::{math}
R=1+K_{\mathrm{d}}\frac{\rho_{\mathrm{s}}}{n_{\mathrm{e}}}
:::

where $n_{\mathrm{e}}$ is the effective porosity $\rho_{\mathrm{s}}$ and is the soil density.

:::{figure} ../images/fig_ex_landfill_batch_isotherm_linear.png
:label: fig_ex_landfill_batch_isotherm_linear
:width: 400px
Linear isotherm, i.e. a linear approximation of the data from a batch test. This could represent an approximation of the data in the very left part of the graph in {ref}`fig_ex_landfill_batch_isotherm`, where solute concentrations are small. Considering this it is clear that for higher solute concentrations this approximation is not very accurate.
:::

(sec-4-4-2-5)=
### 4.4.2.5. Example Nuclear waste in deep repository, Contaminant Dispersion in rock fractures

"Plutonium waste has been detected 1.3 kilometers from 1968 nuclear weapon test site in Nevada - carried much further and faster by groundwater than current theory would predict.". "Plutonium hardly dissolves in water, which is why underground storage of nuclear waste has been seen as the most acceptable disposal option". However, when plutonium is adsorbed onto small particles in the ground it is readily transported by the groundwater flow (@bbc1999).

In Sweden, a project is underway to enable a safe way of canister deposition of nuclear fuel, see @skb2004. The plan is to encapsulate the nuclear waste into copper canisters that are stored about 500 m underground.

:::{figure} ../images/fig_ex_nuclear_waste_storage_sketch.jpg
:label: fig_ex_nuclear_waste_storage_sketch
:width: 200px
Deep Repository storage of Nuclear Fuel (After @skb2004).
:::

The bedrock is the final protection from the hazardous waste, if all other safety measures brake. Therefore it is relevant to investigate how nuclear waste would be transported through the rock. The deep repository storage is tested (in simulations of course, cannot 'test' everything in reality) against a set of worst-case scenarios which could occur during its lifetime (which can be of the order of 10{sup}`5` years!). These scenarios would for example simulate the effect of induced shear stress resulting in shear displacement in the rock. Where one reason could be a tunneling construction in the vicinity of the repository or an earth quake.

Here investigations are made on the effect of shear displacement on both parallel and perpendicular flow. A common assumption when dealing with fractures, is that they are ideal parallel planes (see the example in {ref}`Section 1.4.4. <sec-1-4-4>`). The transmissivity can then be calculated using the so-called cubic law, which means that transmissivity is proportional to the cube of the fracture aperture, as is shown in Eq. {ref}`eq_transmissivity_cubic_law`. However, in reality the sides of a fracture are irregular with varying aperture (distance between the walls of the fracture) and there is also asperity regions (where the two sides of the fractures are in contact with each other). This means that the true transport properties of the rock can deviate considerably from the estimated values using for example the cubic law. Therefore, we should consider these irregularities to get more accurate predictions of the transport through the rock.


(sec-4-4-2-5-1)=
#### 4.4.2.5.1. Laboratory-scale tracer test analyzed using analytical model

Laboratory experiments have been conducted to investigate these effects. The experiment setup involves a small replica of a real fracture from the field. The fracture samples are limited to sizes ranging from 50 mm to 200 mm and are constructed by casting one side of the fracture in the field and then creating the other side superficially in the laboratory. The final product is two epoxyplates representing the fracture. These plates are put in a special box to simulate different shear displacements of the fracture.

One way to look at transport properties is to estimate the longitudinal dispersivity $\alpha_x$ and the advective velocity $v_x$, if we assume that the retardation and reactions is negligible. It can be done by conducting tracer tests. Since we are only looking at advection and dispersion, a conservative (inert) tracer is used. With the tracer test it is possible to make an estimation of the dispersivity as well as the advective velocity by fitting a 1-D analytical solution of the ADE Advection-Dispersion equation to the plotted tracer curves.

To use this equation the following assumptions are made: Samples must be large enough to incorporate a macro-scale REV (Representative Elementary Volume), so it can be considered as homogeneous porous media at that scale and the flow can be described by the average linear velocity. There must be saturated conditions and the system should be in steady state.

In this tracer experiment the system is bounded by no flow boundaries (potential lines are perpendicular to this boundary), in vertical and perpendicular direction of flow and can therefore be seen as being 1-D. The boundaries governing the flow is setup to be constant head boundaries implying steady state (observe that these boundaries are for the flow and not used to solve the ADE), see {ref}`fig_ex_nuclear_waste_equipotential_numerical_solution`.

Now the continuum or mass balance law (see {ref}`Section 1.3.2. <sec-1-3-2>` and {ref}`Section 1.6.2. <sec-1-6-2>`) is used to derive the equation describing the transport processes through the media (fracture).

:::{math}
\frac{\partial C}{\partial t} + v_{x} \frac{\partial C}{\partial x} - D_{x} \frac{\partial^{2} C}{\partial x^{2}} = 0
:::

Where $D$ is the dispersion coefficient, and $v$ is the advective velocity. With the following boundary/initial conditions we can get an analytical solution of the ADE:

**BC1** $C(0,t) = C_0$, $t > 0$ (continuous source)

**BC2** $dC/dx = 0$ when $x = \infty$ 

**IC** $C(x,0) = 0$ (the tracer concentration is zero in the fracture when the experiment is started).

The analytical solution of the ADE using the above boundary and initial conditions can be seen in {ref}`fig_ex_nuclear_waste_BTC`. By adjusting the dispersivity and the advective velocity, the analytical solution curve can be fitted to the tracer curves also displayed in the figure. It is clearly seen that the advective velocity is increasing when the shear displacement is increasing (the contaminant reaches the measure point in a shorter time) and that the dispersive effect is reduced (the gradient or slope of the curve is increased).

:::{figure} ../images/fig_ex_nuclear_waste_BTC.png
:label: fig_ex_nuclear_waste_BTC
:width: 400px
Breakthrough curve (BTC) of a continuous tracer source for two different shear displacements, 0 mm (b) and 1 mm (a). Line (c) represents a solution to the ADE.
:::

When comparing the analytical solution to the tracer measurements it is evident that the fit is not perfect. This does not imply that the test is unsuccessful, rather that the ADE model is not totally accurate.

(sec-4-4-2-5-2)=
#### 4.4.2.5.2. Laboratory-scale experiment, using numberical model

To investigate this issue further it would be interesting to look at the aperture distribution of a single fracture in detail. The aperture can be assessed by scanning the two walls of the fracture in a laser scanner. In this example we will use a numerical code for solving flow in a fracture consisting of 6 400 points in 2D space forming a 80 by 80 cell grid. The mean aperture for each cell is found using a special software that analyzes the scanned date. Combined with the assumption that on the cell scale the fracture is ideal (see {ref}`fig_ex_nuclear_waste_fracture_illustration`), the local transmissivity can be calculated using the cubic law. With an approximation of the transmissivity of each cell, the flow equation can be solved numerically. In this example the flow equation would be written as follows, for each cell in the grid:

:::{math}
\frac{\partial}{\partial x}\left(T_{xx}\frac{\partial h}{\partial x}\right) + \frac{\partial}{\partial y}\left(T_{yy}\frac{\partial h}{\partial y}\right) + Q = 0
:::

which is the equation of 2D flow of an incompressible fluid. Where $T$ is the transmissivity, and $Q$ sources/sinks. It can be shown that the transmissivity is then proportional to the cube of the aperture, and if we also assume the transmissivity is isotropic, we can obtain

:::{math}
:label: eq_transmissivity_cubic_law
T_{xx} = T_{yy} = T(x,y) = \frac{\rho_{\mathrm{f}} g b^3}{12 \mu}
:::

where $\mu$ is the dynamic viscosity, $\rho_{\mathrm{f}}$ is the fluid density, $g$ a gravitational acceleration, and $b$ the local fracture aperture (i.e. the fracture aperture at each cell).

:::{figure} ../images/fig_ex_nuclear_waste_fracture_illustration.png
:label: fig_ex_nuclear_waste_fracture_illustration
:width: 500px
A conceptual illustration of a fracture, represented by a) a mesh; and b) a ideal cell (after @cvetkovic2000).
:::

In {ref}`fig_ex_nuclear_waste_equipotential_numerical_solution` we present the resulting equipotential lines produced by solving the problem numerically. Notice that the equipotential lines always are connecting perpendicular to the side boundaries, represented by the top and bottom border in the figure. This indicates a no flow boundary as we set up when defining the boundary condition earlier. We can also see that the flow is irregular. The software can now be adjusted to test different shear displacements to analyze the issue further.

:::{figure} ../images/fig_ex_nuclear_waste_equipotential_numerical_solution.jpg
:label: fig_ex_nuclear_waste_equipotential_numerical_solution
:width: 400px
Equipotential lines of unidirectional flow parallel to the shear direction 0 mm shear displacement. The hydraulic gradient is presented on the top of the picture whereas the mean flow direction is indicated by the black arrow in the bottom of the figure (After @koyama2006).
:::

(sec-4-4-2-5-3)=
#### 4.4.2.5.3. Field-scale tracer tests

From a small scale laboratory investigation on the topic of change in transport properties due to shear displacement in a rock fracture, we will move on to a real field experiment involving tracer tests on in situ fractures, i.e. a network of fractures residing in the bedrock, which means this is a field experiment. These tests are also related to the SKB deep repository project.

In a series of experiments conducted within the True project (@cvetkovic2000), the retardation capacity of the fractured rock at the Äspö Hard Rock Laboratory in Oskarshamn (southern Sweden) is examined. A series of tracer test are conducted using different tracers from conservative to highly reactive. The aim is to increase the knowledge of the retention capacity of the fractured rock (see {ref}`Section 1.7.4. <sec-1-7-4>`). The tests are conducted by drilling two holes connecting to the fracture with a predefined distance between the connections. Water is injected into one hole and pumped out in the other, the aim is to collect all the inserted tracers in the fracture (see {ref}`fig_ex_nuclear_waste_drill_holes`). Now a instantaneous pulse of tracer is injected into the drill hole, and the concentration is measured in the extraction hole.

:::{figure} ../images/fig_ex_nuclear_waste_drill_holes.png
:label: fig_ex_nuclear_waste_drill_holes
:width: 300px
Injection and recovery drill-holes ($A$ & $B$) connecting to the fracture, as well as an imaginary flow path through the heterogeneous fracture.
:::

It is evident that we cannot make the same detailed investigation of the fractures in a field situation, since it is impossible to access the inside of every fracture without blasting the rock. We are therefore more limited when conducting the tracer tests. For example it is not always easy to define the boundaries for the fracture through which the tracer is injected etc. And all the injected tracer is not always recovered, which can lead to uncertainties.

We will not get into depth on the results here, rather just show some illustrative plots from the tracer testing, that is typical for the retardation on contamination transported in porous media. In Figure {ref}`fig_ex_nuclear_waste_BTC_retardation`, two tracer curves are plotted which are the result of two different tracer tests conducted in the same two drill-holes at two different occasions. The tracer is injected at a 20 m distance from the recovery hole. The red curve is a more reactive tracer. This can be seen in the curve by the delay in transport, the tracer is held in the fracture network a longer time. Note also that the more reactive tracer is dispersed more and has a lower peak concentration.

:::{figure} ../images/fig_ex_nuclear_waste_BTC_retardation.png
:label: fig_ex_nuclear_waste_BTC_retardation
:width: 500px
Breakthrough curve illustrating the effect of retardation. The red curve (lower peak) shows the more reactive tracer.
:::

:::::{exercise}
:label: ex_4_6
Describe in a few words each of the following notions related to transport processes: i) advection, ii) dispersion, iii) retardation, and iv) sorption.
:::::

:::::{exercise}
:label: ex_4_7
In {ref}`fig_ex_4_7_BTCs`, cumulative breakthrough curves resulting from tracer tests in a soil column are shown. In each experiment water is flushed through the column when at a given instance a given mass of tracer is injected instantaneously at the inlet of the column, and the breakthrough is monitored at the outlet. Match the curves denoted by a, b, c and d in {ref}`fig_ex_4_7_BTCs` with the following descriptions:

1. This curve was obtained for a tracer test where the heterogeneity of the column material resulted in longitudinal dispersion. Decay of the tracer was present during the experiment.
2. This curve was obtained for a tracer test where the heterogeneity of the column material resulted in longitudinal dispersion. No other reactions.
3. This curve was obtained for a tracer test where the heterogeneity of the column material was so low that plug flow conditions prevailed. No other reactions.
4. This curve was obtained for a tracer test where the heterogeneity of the column material resulted in longitudinal dispersion. Equilibrium sorption resulted in retardation.

:::{figure} ../images/fig_ex_4_7_BTCs.png
:label: fig_ex_4_7_BTCs
:width: 400px
Breakthrough curves.
:::
:::::

:::::{exercise}
:label: ex_4_8
a) Below the advection-dispersion equation is written in one dimension. Explain in a few words the meaning of each of the three terms in the equation.

:::{math}
D_{x} \frac{\partial^{2} C}{\partial x^{2}} - v_{x} \frac{\partial C}{\partial x} = \frac{\partial C}{\partial t}
:::

b) By incorporating a source or sink term in the advection—dispersion equation, reactive solutes can also be considered. For example, equilibrium sorption reactions can be represented by a retardation factor, $R$. Rewrite the above equation but include the retardation factor $R$ so that the equation is valid for a solute sorbing according to a linear equilibrium isotherm. 

c) One rainy summer day a truck loaded with a pesticide barrel (200 kg) was rapidly spread evenly over the length of 200 m in a ditch before it quickly infiltrated the entire depth of the underlying shallow (3 m) aquifer. The groundwater flow at the site is perpendicular to the ditch and in the direction of a lake only 150 m away. The groundwater table where the contaminant enters the aquifer is at +26 m and the lake surface is at +19 m. The hydraulic conductivity is $K = 1 \cdot 10^{-5}$ m/s and the aquifer porosity is 35%. Estimate how long it will take before the contaminants reaches the lake assuming a linear groundwater table, constant depth of the aquifer and advection only. 

d) If the source is approximated as a pulse, the concentration in the groundwater can be calculated as

:::{math}
c(x,t) = \frac{M_{0}}{Q} \frac{x}{\sqrt{4\pi D_{x} t^3}} e^{\left(-\frac{(x-v_{x} t)^2}{4D_{x} t}\right)}
:::

Calculate the concentration in the groundwater entering the lake at the arrival time estimated for advection only if the dispersion coefficient is $D_{x} = 10^{-5}$ m{sup}`2`/s
:::::

:::::{exercise}
:label: ex_4_9
Draw a diagram showing a schematic breakthrough curve for (both solutes resulting from the same continuous source) i) a conservative solute, and ii) an adsorbing solute.
:::::

:::::{exercise}
:label: ex_4_10
Consider a tracer experiment carried out in a soil column, where the tracer is affected by advection and longitudinal dispersion (no other reactions). Data:

- column length: $L = 20$ cm
- radius of column: $r = 5$ cm
- constant flow rate during the experiment: $Q = 1$ l/h<!-- CHANGE: "lit. h^-1" -->
- diffusion coefficient: $D^{*} = 5 \cdot 10^{-10}$ m{sup}`2`/s
- dispersivity: $\alpha_{x} = 1$ cm
- porosity: $n = 0.25$
- injected mass: $m = 10$ g

Assume that transport can be described by the following solution to the 1-D advection-dispersion equation:

:::{math}
C(L,t) = \frac{m}{nA\sqrt{4\pi D_{x} t}}e^{\left(-\frac{(L-v_{x}t)^2}{4D_{x}t}\right)}
:::

and that the dispersion coefficient is calculated as $D_{x} = \alpha_{x} v_{x} + D^{*}$. Use the data given above to calculate:

a) the advective (pore) velocity, $v_x$, in the column, 

b) the concentration, $C$, at the outlet of the column (in g/l water) when 20 minutes have elapsed from the time of injection.
:::::


<!-- NOTE: Links are not up to date anymore! -->
[^transport_guide]: http://www.lwr.kth.se/Grundutbildning/AE2201/Topics/Groundwater/Applets/Transport/_Guide/_Website/01-Index.htm
[^course_homepage]: http://www.lwr.kth.se/Grundutbildning/AE2201
