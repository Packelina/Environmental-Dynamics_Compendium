---
numbering:
  enumerator: 2.%s
---

(sec-2-1)=
# 2.1. Drainage basins, flow from soil surface to the sea

Precipitation that falls on the land surface drains to the sea or finds its way directly back to the atmosphere by evaporation or transpiration through plants. After intercepting with the land surface the water may flow along different paths. The water may infiltrate and follow sub-surface pathways (see {ref}`Section 4.1. <sec-4-1>`) and then re-enter the surface waters, or the water may flow along surface water pathways directly to the coast. In many areas of the world the withdrawal of surface water to the technosphere is one of the most important pathways in the flow from soil surface to ocean.

From the perspective of the receiving water body, i.e. usually the sea, it is interesting to know where the inflowing water comes from. The answer is the drainage basin, being synonymous to catchment and watershed. The drainage basin defines the area from which precipitation is collected that discharges at a certain location. Usually drainage basins are defined from a river mouth. But considering that a substantial amount of water may discharge from groundwater directly into the sea, a drainage basin may as well be defined from a coastal stretch.

Important aspects of the terrestrial water cycle are the amount of water that drains through the system and the quality of this water. The amount of water is largely controlled by climate. However, technical systems such as reservoirs change at least the temporal availability of water (see {ref}`Section 1.4.2.2. <sec-1-4-2-2>`). It is important to understand that water quantity is very closely linked to the water quality. The water picks up and releases substances when interacting with the surrounding geology, the atmosphere, the biota in the water, and of course ourselves and the man made systems. In terms of ecosystem and human needs the water quality thereby may change for the worse or the better. Large amounts of clean water can, for instance, easily be deteriorated with a relatively small release of wastewater.

In this chapter, we are concerned with the natural surface water pathways, including streams and lakes, leaving the other water pathways to subsequent chapters. The aim is to quantify different aspects of water quantity and quality. For this purpose we derive and use simple models that are based on the principles outlined in {ref}`Chapter 1 <sec-1-1>`.

(sec-2-1-1)=
## 2.1.1. Quantification: Setting up the model system

There are many steps to go through to quantify different aspects of surface waters. But before rushing into the details of systems and their boundaries, conceptual models, flow and biogeochemical processes, equations, solution techniques, interpretation of results, their implications, and the uncertainties involved, it is a good idea to step back and think: What is the problem?

A problem description helps to find the way through the modeling exercise. Do we deal with a lake, a stream, a drainage basin? Is the water quality or quantity the main issue? Do we want to quantify a general behavior or are we dealing with a case study? How large is the spatial and temporal scale of interest? What substances/quantities are of interest and which processes are associated with these? Do we want to have a rough estimate obtainable with an analytical solution, requiring only pen and paper, or an accurate spatio-temporal quantification of several entities, requiring a numerical solution obtainable only with a high performance computer? To whom shall the result be presented, a scientist, a decision maker, or the local community? All these questions may affect the way the problem at hand is best solved.

Following the discussion in Section {ref}`Section 1.2.2. <sec-1-2-2>` we start with the outline of the system that is relevant for the problem at hand. In the following a lake with an eutrophication problem is used as an illustrative example. We define different parts of the system that may be important and the boundaries between these parts and the surrounding nature. We may want to include the water mass and divide it into different layers that form due to temperature and associated density differences. Another sub-system that is important in many cases is the lake sediment.

The boundaries between the lake and the surrounding nature are physical boundaries. One boundary is the interface between water and lake bottom, another the lake surface. If the sediment is part of the system the question of the boundary may, however, not be straight forward. Where does the sediment end and the underlying geology begin? In this case we may want to choose<!-- CHANGE: "choose from chose" --> a geometric boundary, e.g., the boundary could be set at one meter below the lake bottom. If some processes in the sediment are dependent on depth, then this might give us a hint on where to place the geometric boundary. At a depth where<!-- CHANGE: "where from were, mby commas?" --> the process becomes negligible we can put our boundary.

The lake system is clearly an open system with mass and energy entering and leaving the system. However, we may not have mass transport through all boundaries. In our case, there may be no important mass transport between the sediment and surrounding geology. For all boundaries we need to quantify the boundary conditions. For the lake, these are the in- and outflows of water and solutes through the boundaries. This may include atmospheric deposition of substances at the lake surface and inflow of water carrying solutes from the groundwater.

The next step is to identify the properties that are of interest for our problem. Eutrophication is linked to nutrient concentrations, thus these are central to quantify. Moreover, the water flow through the lake is important, since the water carries the solutes. These are both extensive properties, because they depend on mass. Eutrophication is also linked to temperature, which therefore may be important to consider. Temperature is a intensive property, because it is independent of mass.

Further questions are the spatial structure and the dynamics of the system. A lake is clearly a three dimensional water body in which the properties of interest, i.e., in our case the water flow, nutrient concentration, and temperature, vary from location to location. Thus we have a heterogeneous system. A lake is also clearly a dynamic (or transient) system. For instance, the water inflows vary with time, because the driving force is the weather, which is highly variable.

Now that we have defined our system, its boundaries, important properties, and have thought about its spatial structure, we have to look at what is going on within this system. The behavior of the system is controlled by physical and biogeochemical processes. We now have to determine which of all such possible processes are relevant for our problem. In our case, we may find that physical mixing within the lake is important for the transport of nutrients through the lake. Moreover, chemical exchange of nutrients between the water body and the sediments may be important. Biologically controlled denitrification may also be important. We know that there are many processes going on in a lake, and it may be worth while to think closely on which processes are really important for the problem at hand. In fact, there are thousands of research articles dealing with the importance of different physical and biogeochemical processes in lakes and there is still much to be explored. The process quantifications presented in this compendium, we hope, are a good basis for digging deeper into such questions.

The mass balance for the system we have defined can now be set up. We may want to formulate it in words or with the help of a sketch. With this guideline we can then take the next step and put up equations that quantitatively capture the behavior of the system for the entities we have selected. In our case we may want to have equations that quantify nutrient concentrations in the lake as a function of space and time. As described in {ref}`Section 1.3.2. <sec-1-3-2>` - {ref}`Section 1.3.3. <sec-1-3-3>`, mass balances are expressed either with an integral formulation or with a distributed formulation. If we find that the system can be modeled without considering differences of the quantities of interest in space a zero dimension representation can be chosen, which is handled with an integral formulation. If we need to consider the spatial structure of the system we need a one to three dimensional model, which is handled with a distributed model formulation. In the examples below, we will set up a lake model using an integral formulation and a stream water quality model using a distributed formulation.

(sec-2-1-2)=
## 2.1.2. Setting up and solving the mass balance equations

The question now is how the mass balance is formulated with equations. For this purpose we need to put together the basic terms that can be included in a mass balance. The basic terms describe the accumulation, the inputs, the outputs, and sink/source terms (see {ref}`Section 1.3.2. <sec-1-3-2>`). All these terms are described as changes of mass with time. In mathematical formulation this is:

:::{math}
\begin {gathered}
\scriptsize {\text{Rate of change of mass (accumulation) within the system due to one or several processes}} = \\
\frac{dM(t)}{dt}
\end {gathered}
:::

(sec-2-1-2-1)=
### 2.1.2.1. Equation terms for the flow problem

The flow problem is concerned with the flow of water into, out of, and within environmental systems ({ref}`Section 1.4.2. <sec-1-4-2>`). The quantity of interest is thus the movement of the mass of water. The accumulation in the system is the mass of water that is added to or subtracted from the system in a certain time:

:::{math}
\begin{gathered}
\text{Rate of change of water mass within the system} = \\
\frac{dM_{\mathrm{water}}(t)}{dt} = \frac{d\left(\rho_{\mathrm{water}} V_{\mathrm{water}}(t)\right)}{dt}
\end{gathered}
:::

For a lake such an accumulation is manifested by changes in the water level. If there is no accumulation the mass of water in the lake is constant in every point and the system is at steady state. We get $dM/dt = 0$. The accumulation is determined by the sum of inflows, outflows, internal sinks and sources. In the mass balance equation we get:

:::{math}
\begin{gathered}
\text{Rate of change of water mass in the system due to inflow} = \\
\frac{dM_{\mathrm{water,in}}(t)}{dt} = \rho_{\mathrm{water}}Q_{\mathrm{in}}(t)
\end{gathered}
:::

:::{math}
\begin{gathered}
\text{Rate of change of water mass in the system due to outflow} = \\
\frac{dM_{\mathrm{water,out}}(t)}{dt} = \rho_{\mathrm{water}}Q_{\mathrm{out}}(t)
\end{gathered}
:::

Note that $Q$ can represent stream flows, but also precipitation, evaporation, or groundwater in- or outflows. <!-- CHANGE: "...in or outflows" -> "...in- or outflows" -->

Now we need to describe the internal sinks and sources. These are controlled by physical or biogeochemical processes that lead to changes of mass of water within the system with time. However, in the case of surface waters we can in many environmental applications assume that water is neither created nor destroyed within the systems, but is inert and incompressible. In chemical engineering applications this may not be the case, e.g., water may be hydrolyzed into hydrogen and oxygen in some apparatus, thus changing the water mass within such a system due to a chemical reaction.

(sec-2-1-2-2)=
### 2.1.2.2. Equation terms for the solute transport problem

Now we are concerned with the mass of some solute in a system, for instance in a lake ({ref}`Section 1.6.2. <sec-1-6-2>`). To quantify how much solute mass there is in a water body, usually the concentration $C$ is determined and then multiplied with the volume of water. As above, the change of mass with time is expressed as a differential

:::{math}
:label: eq_change_solute_mass_system
\begin{gathered}
\text{Rate of change of solute mass within the system} = \\
\frac{dM_{\mathrm{solute}}(t)}{dt} = \frac{d(C_{\mathrm{solute}}(t)V_{\mathrm{water}})}{dt}
\end{gathered}
:::

As we here assume that the volume fraction of solute is small, changes in solute mass will not affect the water level in lake. The solute mass can generally not be observed directly, but has to be determined by sampling and water quality analysis in a laboratory.

The movement of solute mass within a system is controlled by physical processes as described in {ref}`Section 1.6. <sec-1-6>`, i.e. solute advection with the water mass (even called plug or piston flow), dispersion due to local velocity differences of solute molecules, and diffusion, controlled by the interaction of water and solute molecules on a microscopic scale. To describe spatial movement at least one spatial dimension is needed. However, the solute which flows into and out from the zero dimensional system has to be quantified in the mass balance:

:::{math}
\begin{gathered}
\text{Rate of change of solute mass in the system due to inflow} = \\
\frac{dM_{\mathrm{solute,in}}(t)}{dt} = C_{\mathrm{solute}}(t)Q_{\mathrm{in}}
\end{gathered}
:::

:::{math}
\begin{gathered}
\text{Rate of change of solute mass in the system due to outflow} = \\
\frac{dM_{\mathrm{solute,out}}(t)}{dt} = C_{\mathrm{solute}}(t)Q_{\mathrm{out}}
\end{gathered}
:::

In a system with one spatial dimension the solute movement is described as concentration that is a function of time and space (for derivatives see {ref}`Section 1.6.2. <sec-1-6-2>`). Since we assume that the water flow is in steady state, the water volume term $V$ in Eq. {ref}`eq_change_solute_mass_system` cancels out and the terms can be described as a function of concentration only, yielding the partial differential equation terms:

:::{math}
\begin{gathered}
\footnotesize \text{Rate of change of solute mass in the control volume due to pure advection} = \\
\frac{\partial C_{\mathrm{solute}}(x,t)}{\partial t} = v_x \frac{\partial C_{\mathrm{solute}}(x,t)}{\partial x}
\end{gathered}
:::

:::{math}
\begin{gathered}
\scriptsize \text{Rate of change of solute mass in the control volume due to pure diffusion or dispersion} = \\
\frac{\partial C_{\mathrm{solute}}(x,t)}{\partial t} = D_x \frac{\partial^2 C_{\mathrm{solute}}(x,t)}{\partial x^2}
\end{gathered}
:::

where $D_{x}$ is the coefficient of dispersion (alternatively the coefficient of diffusion) and $v_{x}$ is the advective velocity. We see that the same term is used both to express diffusion and dispersion processes. In surface water problems (as also in many groundwater problems), dispersion due to spatial water velocity differences and turbulence is generally orders of magnitude larger than the effect of diffusion. Consequently, diffusion is commonly neglected. However, there may be certain cases in which diffusion is important, for instance small-scale boundary layer problems.

Biogeochemical processes are expressed as sink/source terms in the mass balances ({ref}`Section 1.6.2 <sec-1-6-2>`). They are described in the same way in integral and distributed formulations, the only difference is in units and that in the distributed formulation the mass (or concentration if the flow is at steady state, which we assume here) is dependent on space and time and not only on time, as in the integral formulation. Here some processes with the commonly used mathematical representations are listed:

:::{math}
:label: eq_change_solute_mass_system_FOD_0D
\begin{gathered}
\footnotesize \text{Rate of change of solute mass in the system due to first-order decay (0-D)} = \\
\frac{dC_{\mathrm{solute}}(t)}{dt} = \lambda_1 C_{\mathrm{solute}}(t)
\end{gathered}
:::

:::{math}
\begin{gathered}
\footnotesize \text{Rate of change of solute mass in the system due to first-order decay (1-D)} = \\
\frac{\partial C_{\mathrm{solute}}(x,t)}{\partial t} = \lambda_1 C_{\mathrm{solute}}(x,t)
\end{gathered}
:::

:::{math}
\begin{gathered}
\footnotesize \text{Rate of change of solute mass in the system due to zero-order decay (0-D)} = \\
\frac{dC_{\mathrm{solute}}(t)}{dt} = \lambda_{0}
\end{gathered}
:::

:::{math}
\begin{gathered}
\footnotesize \text{Rate of change of solute mass in the system due to zero-order decay (1-D)} = \\
\frac{\partial C_{\mathrm{solute}}(x,t)}{\partial t} = \lambda_{0}(x)
\end{gathered}
:::

In {ref}`Section 1.7.2 <sec-1-7-2>`, reactions of several substances are described, which can be introduced into a mass balance. This leads to a system of coupled (partial) differential equations, when formulating the mass balance. For simplicity such systems are not dealt with here in the context of surface water transport. In principle, however, equations for several substances are put up in the same way as the relatively simple expressions derived here.

Now that we have a collection of equation terms, we just need to put together the relevant terms for the system at hand in a mass balance equation. This differential equation then has to be solved for the quantity we are interested in.

(sec-2-1-3)=
## 2.1.3. Solving the mass balance equation

Solving differential equations is a broad field in itself. The solution technique that is best applied depends on the form of the differential equation. For ordinary differential equations, i.e. equations that only depend on one variable, there may be straightforward analytical solutions. For some partial differential equations, i.e., equations in which the quantity of interest depends on several variables, there are analytical solution techniques. In general, however, there are no straightforward analytical solution methods for partial differential equations. Often, the only option is to use numerical solution techniques that find approximative solutions by using iterative calculations that are best performed by computers.

Here we use some simple analytical solution techniques. We will see that the solution of the differential equations give rise to new unknowns. These have to be determined using boundary and/or initial conditions that we need to specify. For some relatively complex equations, solutions that are valid for the specified boundary and/ or initial conditions are supplied.

(sec-2-1-4)=
## 2.1.4. Interpreting the results

When the mass balance equations have been solved we get our wanted quantity as a function of time, space, or both, depending on the model set up (for instance, $C(t)$ as given in Eq. {ref}`eq_reactor_single_solution_2`). With a numerical solution technique we would obtain approximate values of the quantity of interest for specified points in time and/or space.

What does the function or the numbers we have now calculated tell us? It is the solution to the mathematical problem we formulated as a mass balance with a differential equation. The reason for calculating these quantities was, however, that we wanted to know something about a real system. So now we have to go back to the real problem and see how the results apply to it and what they may imply.

Under which assumptions are the calculated results valid for the actual system? For instance, we might have assumed that a lake is well mixed. How well mixed is it in reality? We might have chosen a 1-D representation of a stream system, but we know that the real stream is 3-D; does this affect the behavior of the modeled system in comparison to the real system? Many questions like these have to be considered for finding an appropriate answer to the questions we posed for the real system. One aspect of the interpretation of the results is the uncertainty of the results. These aspects will be discussed more thoroughly in {ref}`Section 2.2 <sec-2-2>`.

(sec-2-1-5)=
## 2.1.5. Examples of modeling surface water systems

The examples in the following sections show how different aspects of surface water systems can be quantified by mathematical modeling. The appropriate model set up depends on the question that is to be answered and the site specific conditions. The examples are thus only applications of the general methodology to some particular cases. It is important to understand this general methodology to be able to solve other case specific problems. In each case, different conceptual models will be appropriate, resulting in different mass balances. In other words, it is shown below how the basic tools of environmental modeling can be applied. These tools are not the solutions to environmental problems, they are the means with which certain aspects of the environment can be quantified. This quantification may in turn be helpful in finding a good way to respond to the real problems at hand.

(sec-2-1-5-1)=
### 2.1.5.1. Example: Formulating an integral mass balance for a lake

{ref}`fig_photo_small_lake` shows a lake that has one inflow and one outflow in form of two small creeks. We want to know how the water quality in the lake evolves when a small company starts to continuously discharge a reactive pollutant into the feeding stream. To handle this quantification problem in a simple way, we assume that the water level in the lake is constant. We expect that the concentration in the lake will rise and then reach a new steady state.

:::{figure} ../images/fig_photo_small_lake.jpg
:label: fig_photo_small_lake
:width: 400px
A small lake.
:::

Clearly, the system we are interested in is the lake and the physical boundaries are clear. They are the lake surface and the lake bottom. Water enters the lake from the creek, from precipitation, and from groundwater. Water leaves the lake through evaporation and the other creek. The lake is rather small and we assume that it is reasonably well mixed. Because of the mixing the pollutant concentration is expected to be homogeneously distributed in the lake. This assumption thus implies that we do not need to consider the spatial dimension of the lake but can choose an integral formulation (0-D).

Now we turn to the sink/source terms within the system. As stated above, the pollutant is reactive, and we know that it will degrade in the lake. The question is how to quantify this degradation process. One commonly used assumption is to quantify degradation by a first order decay (Eq. {ref}`eq_change_solute_mass_system_FOD_0D`). Such an assumption may be accurate or not, depending on the pollutant. If the assumption shows not to be accurate another process representation should be chosen. There may be other processes that are important, for instance, burying of pollutant in the sediments. Assuming that the pollutant dissolves very well in water we neglect such processes. Having defined the properties of the system we can sketch a conceptual model of our system ({ref}`fig_lake_conceptual_model`).

:::{figure} ../images/fig_lake_conceptual_model.png
:label: fig_lake_conceptual_model
:width: 400px
Conceptual model of the lake.
:::

The mass balance can then be described in words as (see {ref}`Section 1.3.2. <sec-1-3-2>`):

:::{math}
\begin{gathered}
\footnotesize \text{Accumulation of pollutant mass} = \text{inflow of pollutant from creek 1} - \text{outflow of} \\
\footnotesize \text{pollutant through creek 2} - \text{degradation in the lake}
\end{gathered}
:::

Note that we are here only concerned with the in- and outflows of the pollutant and not of water. The in and outflows of water, and thus the water level and volume is assumed to be in steady state. Therefore we do not need to account for the water flows that do not carry any pollutant (e.g., the evaporation and the groundwater inflow). In other words, there is no dilution of the pollutant due to increase of water volume (or level) in the lake.

Taking for every part of the mass balance in words the appropriate terms described above we get

:::{math}
\frac{dM_{\mathrm{pollutant}}(t)}{dt} = \frac{d(C_{\mathrm{pollutant}}(t)V_{\mathrm{water}})}{dt} = C_{\mathrm{pollutant,in}}Q_{\mathrm{in}} - C_{\mathrm{pollutant,out}}(t)Q_{\mathrm{out}} - \lambda C_{\mathrm{pollutant}}V_{\mathrm{water}}
:::

It is always a good idea to check the units of all the terms. It is easy to confuse different ways to formulate the same thing. (For instance, you may find it convenient to formulate the mass balance directly in terms of concentrations in some cases, whereas in others cases you could prefer solute mass)<!-- NOTE: Should this be as a sentence? -->. Validating the units often helps to avoid mistakes on an early stage of the calculations.

The equation we now have put up is a linear first-order inhomogeneous ordinary differential equation. For such equations there is a straightforward solution technique. If we rearrange the mass balance equation in the following form, using the assumption of completely mixed water to be able to set $C_{\mathrm{pollutant,out}}=C_{\mathrm{pollutant}}$ and the assumption of constant water volume to be able to divide by $V_{\mathrm{water}}$ we get

:::{math}
\frac{dC_{\mathrm{pollutant}}(t)}{dt} + \left(\lambda + \frac{Q_{\mathrm{out}}}{V_{\mathrm{water}}}\right)C_{\mathrm{pollutant}}(t) = \frac{C_{\mathrm{pollutant,in}}Q_{\mathrm{in}}}{V_{\mathrm{water}}}
:::

which we can write as

:::{math}
\frac{dC_{\mathrm{pollutant}}(t)}{dt} + f(t)C_{\mathrm{pollutant}}(t) = g(t)
:::

For this equation we can use the solution that is given by (this solution is found in standard mathematics handbooks like BETA (@rade1995)

:::{math}
C_{\mathrm{pollutant}}(t) = e^{-\int f(t)dt} \left[ \int e^{\int f(t)dt} g(t)dt + \mathrm{Const} \right]
:::

Simplifying this rather complex looking solution, by calculating the integrals, we get:

:::{math}
C_{\mathrm{pollutant}}(t) = \frac{C_{\mathrm{pollutant,in}}Q_{\mathrm{in}}}{\lambda V_{\mathrm{water}} + Q_{\mathrm{out}}} + e^{-t \left(\lambda + \frac{Q_{\mathrm{out}}}{V_{\mathrm{water}}}\right)}\mathrm{Const}
:::

Now we have a new unknown, the integration constant, $\mathrm{Const}$. To be able to quantify it, we need one more piece of information, the initial condition. We specify the concentration at time $t=0$, when the pollutant starts entering the lake, as $C(t=0)=C_{0}$. Inserting this initial condition into above equation we get

:::{math}
C_{\mathrm{pollutant}}(0) = C_0 = \frac{C_{\mathrm{pollutant,in}}Q_{\mathrm{in}}}{\lambda V_{\mathrm{water}} + Q_{\mathrm{out}}} + e^{-0 \left(\lambda + \frac{Q_{\mathrm{out}}}{V_{\mathrm{water}}}\right)}\mathrm{Const}
:::

which simplifies to

:::{math}
\mathrm{Const} = C_0 - \frac{C_{\mathrm{pollutant,in}}Q_{\mathrm{in}}}{\lambda V_{\mathrm{water}} + Q_{\mathrm{out}}}
:::

Thus the solution to our mass balance differential equation is

:::{math}
C_{\mathrm{pollutant}}(t) = \frac{C_{\mathrm{pollutant,in}}Q_{\mathrm{in}}}{\lambda V_{\mathrm{water}} + Q_{\mathrm{out}}} + e^{-t \left(\lambda + \frac{Q_{\mathrm{out}}}{V_{\mathrm{water}}}\right)} \left(C_0 - \frac{C_{\mathrm{pollutant,in}}Q_{\mathrm{in}}}{\lambda V_{\mathrm{water}} + Q_{\mathrm{out}}}\right)
:::

In {ref}`fig_lake_concentration_function(t)` the function is plotted for more or less arbitrarily chosen input parameters. The concentration increases from $C_{0}$ to a new steady state concentration.

:::{figure} ../images/fig_lake_concentration_function(t).jpg
:label: fig_lake_concentration_function(t)
:width: 300px
Concentration in the lake as a function of time.
:::

The question is now what this result tells us about the real system. In general, we can say that the behavior seems plausible, the concentration increases to a new steady state. But it is clear that we made several assumptions to be able to use the equations we did. Is the lake really well mixed, is the degradation really behaving like a first-order reaction, etc? In addition to being uncertain if the model really represents what it is intended to represent, there are many other uncertainties (see {ref}`Section 2.2. <sec-2-2>`). The quantification could be validated by some measurements. However, if measurements are available, the intention of the modeling is not so clear anymore; why model when we already know how the system behaves? One other reason for modeling is to see which processes are likely to affect the pollutant transport. If the modeling results do not match the actual behavior we can try to analyze which part of the assumptions or mathematical representations are not valid. In the end we might be able to suggest a new model that captures the behavior of the real system. Such an approach is called inverse process modeling. The governing processes are backed out from the measurements.

:::::{exercise}
:label: ex_2_1
Consider a pool with a constant water volume $V$ (see {ref}`fig_ex_2_1_pool`) with an initial ($t=0$) solute concentration $C_{0}$ [M/L{sup}`3`]. Water enters and flows out of the pool at a constant rate $Q$. The concentration in the inflowing water is $C_{\mathrm{in}}$. Solve following problems using the mass conservation law. Assume rapid mixing in the pool.

:::{figure} ../images/fig_ex_2_1_pool.png
:label: fig_ex_2_1_pool
:width: 300px
Single-compartment model of a solute of concentration $C$ in a water body with the solute input mass flow rate $C_{\mathrm{in}}Q_{\mathrm{in}}$ and the output mass flow rate $C_{\mathrm{out}}Q_{\mathrm{out}}$.
:::

a) Determine the concentration $C(t)$ of the solute in the pool. 

b) Determine the steady-state concentration. 

c) Calculate the concentration $C(t)$, assuming the input water is pure (i.e. does not contain any solute).
:::::

:::::{exercise}
:label: ex_2_2
Suppose there is also solute loss to the sediments in the pool considered in {ref}`ex_2_1`. The solute has an apparent settling rate $k$ [L/T] and the surface area of the pool is $A$. 

a) Determine the solute concentration $C(t)$ in the pool considering the loss to the sediments. 

b) Determine the steady-state solute concentration and compare it with the steady-state concentration in {ref}`ex_2_1`.
:::::

:::::{exercise}
:label: ex_2_3
Assume now that the sediments in {ref}`ex_2_2` are able to release some of the nutrient back into the water. Use {ref}`fig_ex_2_3_nutrient_exchange` to derive the mass balance equations describing the nutrient mass in the pool and the mass in the sediments. In {ref}`fig_ex_2_3_nutrient_exchange`, $V_{\mathrm{s}}$ is the volume of sediment close enough to the water to exchange the nutrient with the water column, $k_{\mathrm{s}}$ is the rate constant for release of the bio element into the water, $v$ is the apparent settling rate of the nutrient, $A$ is the surface area of the lake, which is assumed to be equal to the surface area of the sediment, and $k_{\mathrm{u}}$ is the fraction of input from the water column to the sediments that becomes permanently inaccessible to any further circulation in the system (due to for example irreversible adsorption to the sediment).

:::{figure} ../images/fig_ex_2_3_nutrient_exchange.png
:label: fig_ex_2_3_nutrient_exchange
:width: 300px
Schematic diagram of solute dynamics in a water body that includes exchange of nutrients with sediments.
:::
:::::

:::::{exercise}
:label: ex_2_4
Lakes and reservoirs are frequently connected in chains and therefore upstream solute input changes may propagate downstream. A lake system of four shallow eutrophic lakes is illustrated in {ref}`fig_ex_2_4_lake_system`. To each lake $i$ there is a nutrient input associated with runoff $Q_{i}C_{\mathrm{L},i}$ and sewage $J_{i}$ (the volumetric flow rate of the sewage is assumed negligible compared to other water flows; $L_{i}=Q_{i}C_{i}+J_{i}$). Furthermore, in each lake the sediment retention factor is $R_{i}$, and $C_{i}$ is the nutrient concentration. $R_{i}$ is defined as the ratio of the nutrient mass flow rate lost to the sediment and the input mass flow rate to the lake. Derive the mass balance equations for this system. Assume complete mixing and no evaporation losses.

:::{figure} ../images/fig_ex_2_4_lake_system.png
:label: fig_ex_2_4_lake_system
:width: 300px
Illustration of a series of lakes with solute concentrations $C_{i}$
:::
:::::

:::::{exercise}
:label: ex_2_5
Consider a lake with the volume 10{sup}`7` m{sup}`3` that is fed by a stream with the flow rate $Q = 5.0$ m{sup}`3`/s and a pollutant concentration $C_{\mathrm{p}} = 10.0$ mg/l. There is also a sewage outlet that discharges $Q_{\mathrm{s}} = 0.5$ m{sup}`3`/s of the same pollutant with a concentration $C_{\mathrm{s}} = 100.0$ mg/l into the lake. The pollutant in the sewage degrades according to a firstorder reaction rate $\tau = 0.20$ 1/day. Find the steady-state concentration in the lake assuming that the pollutant is completely mixed in the lake and that no evaporation or other water in- or outputs take place.
:::::

(sec-2-1-5-2)=
### 2.1.5.2. Example: Formulating a distributed mass balance for a stream: ADE/R

{ref}`fig_photo_small_stream` shows a photo of a small stream. Marked with the white arrow is a pipe that continuously discharges wastewater into the stream that among other substances contains nitrate. The question is how the concentration of nitrate in the stream evolves downstream, given a steady flow. There is much research in the field of in-stream nitrate degradation, since nitrate is a major actor in coastal eutrophication problems which is an important issue in many parts of the world. Here we use some of the tools that are also presented in high profile research papers published in journals like Nature and Science.

:::{figure} ../images/fig_photo_small_stream.jpg
:label: fig_photo_small_stream
:width: 400px
A small stream with a sewage outlet.
:::

The boundaries of the stream system seem to be obvious. There are the physical boundaries to the atmosphere, i.e., the water surface and the stream bed. However, the stream water takes short cuts through stream banks and the stream bed, where there are steps in the stream bottom (for instance caused by a big stone). The subsurface zone that is affected by such stream water flowing outside the actual stream is called the hyporheic zone. This zone is important for biogeochemical processes that affect substances like nitrate. For simplicity, we neglect this zone here and set the boundaries of the system to the stream bed. We are only concerned with the part of the stream that stretches from the waste water inlet to the location where this small stream joins a larger stream. We thus put geometrical boundaries across the stream at these two locations. The stream is of course three dimensional, but since we are interested in the concentration along the stream and not across it, and the stream seems rather well mixed laterally, we choose a one dimensional representation. Consequently, we have to use a distributed formulation when expressing the mass balance.

The nitrate is advected along the stream with the bulk water, and the nitrate solute is dispersed due to velocity differences between different depths and across the stream. The nitrate is lost from the water on its way downstream due to biogeochemical reactions, such as plant uptake and denitrification. Thus we have an internal sink. It is common to model this retention of nitrate along a stream as a first-order decay reaction. Since we have a distributed formulation, the inputs of solute to the system at the beginning of the system along the spatial dimension is handled by the boundary condition, i.e., $C(x=0)$. In a one dimensional system, the inputs along the stream (which we neglect in this case, since we assume that the point source dominates the nitrate transport in the stream) could be modeled as an external input/output term, that may depend on the distance along the stream, $x$.

:::{figure} ../images/fig_stream_conceptual model.png
:label: fig_stream_conceptual model
:width: 400px
Conceptual model of the stream.
:::

A conceptual model of the stream is shown in {ref}`fig_stream_conceptual model`. As we have a distributed system we formulate the mass balance over a differential length of the stream and obtain (see {ref}`Section 1.6.2. <sec-1-6-2>`)

:::{math}
\frac{\partial C}{\partial t}Adx = v_x CA - \left(v_x C + v_x \frac{\partial C}{\partial x} dx\right)A + \left(-D_x A \frac{\partial C}{\partial x} - \left(-D_x \frac{\partial C}{\partial x} - D_x \frac{\partial^2 C}{\partial x^2} dx\right)A\right) - \lambda CAdx
:::

which simplifies to (see {ref}`Section 1.6.2. <sec-1-6-2>`)

:::{math}
\frac{\partial C}{\partial t} = -v_x \frac{\partial C}{\partial x} + D_x \frac{\partial^2 C}{\partial x^2} - \lambda C
:::

Now we need to solve this equation. As we assume that the solute transport is at steady state (stable flow conditions and continuous input) we get

:::{math}
\frac{\partial C}{\partial t} = 0 = -v_x \frac{\partial C}{\partial x} + D_x \frac{\partial^2 C}{\partial x^2} - \lambda C
:::

i.e. no changes of concentration in time. However, since we have a distributed formulation, $C$ still depends on $x$ and will vary along the spatial dimension. For the equation above there is an analytical solution available, given the boundary condition $C(x=0)=C_{\mathrm{a}}$. Since the system is at steady state, we do not need any initial condition. Using the available solution we get (this solution is probably not presented in standard mathematical handbooks, but is for instance found in @bear1972, a comprehensive book on flow processes in porous media)

:::{math}
C(x) = C_0 \, e^{\frac{v_x x}{2D_x} \left(1 - \sqrt{1 + \frac{4\lambda D_x}{v_x^2}}\right)}
:::

:::{math}
C_0=\frac{C_{\mathrm{a}}}{\sqrt{1+\frac{4\lambda D_x}{v_x^2}}}
:::

This function is plotted in {ref}`fig_stream_concentration_function(x)` for a given set of input parameters. The nitrate concentration falls off exponentially along the stream. This is the expected behavior. Again we need to think about how well this result agrees with the behavior of the real system. We neglected in- and outflows along the stream and we assumed that no nitrate entered the stream except for the waste water discharge. These assumptions may be questionable. Furthermore, representing all biogeochemical reactions by a lumped first-order reaction may not be very realistic. Did we parameterize the advection and dispersion correctly? All these questions need to be addressed to judge how relevant these results are for the real system. In any case, this rough quantification is one piece of information that characterizes the system. It has to be added to other relevant information to get a more complete understanding of the system.

:::{figure} ../images/fig_stream_concentration_function(x).jpg
:label: fig_stream_concentration_function(x)
:width: 400px
Concentration (in g/l) in the stream as a function of distance from source.
:::

:::::{exercise}
:label: ex_2_6
Describe following transport processes in a few words: i) advection, ii) diffusion, and iii) dispersion.
:::::

:::::{exercise}
:label: ex_2_7
A river that on average is 50 m wide and 6 m deep has a flow rate $Q = 120$ m{sup}`3`/s. A degrading pollutant is continuously discharged into the river at a constant concentration $C_0 = 100$ mg/l. How large is the concentration $x = 50 m$ downstream of the source? The diffusion coefficient $D_x = 0.01$ m{sup}`2`/s and the rate of degradation $\lambda = 0.005$ 1/s. Assume that the following solution of the partial differential mass balance equation can be applied.

:::{math}
c(x) = \frac{c_0}{\sqrt{1 + \frac{4\lambda D_x}{v_x^2}}} e^{\frac{v_x x}{2D_x} \left(1 - \sqrt{1 + \frac{4\lambda D_x}{v_x^2}}\right)}
:::
:::::

:::::{exercise}
:label: ex_2_8
Water with a contaminant concentration $C_0$ enters a pipe with constant cross-sectional area $A$ at $x = 0$. The flow rate $Q$ is constant. Plug-flow conditions are assumed, i.e. there is no mixing in the direction of the flow and complete mixing perpendicular to the flow. Furthermore, a first-order decay reaction with reaction rate $k$ is taking place in the flow system. 
(ex_2_8_a)=
a) Derive an expression for the steady-state concentration profile along the pipe $C(x)$, by setting up and solving the appropriate differential equation with the boundary condition given above. 
(ex_2_8_b)=
b) Given that the length of the pipe is $L$ (volume $V=A \times L$), what will the steady-state ratio $C(L)/C_0$ be? 
(ex_2_8_c)=
c) If completely mixed flow conditions are assumed inside the volume $V=A \times L$, what will the steady-state ratio $C(L)/C_0$ be then? (Use the same boundary conditions, flow-rate and reaction rate as in {ref}`Ex. 2.8 a) <ex_2_8_a>` and {ref}`Ex. 2.8 b) <ex_2_8_b>`). 
(ex_2_8_d)=
d) In which of the two systems, i.e. the plug-flow or completely mixed system, is the removal of mass more efficient, if $k>0$?
:::::

:::::{exercise}
:label: ex_2_9
A tracer test is planned to determine the flow rate in a ditch with the constant cross sectional area ($A = 75$ dm{sup}`2`). The investigator plans to use a fluorescent dye called Uranine, which is easily analyzed in a spectro fluorometer. The detection limit for the instrument is 0.1 mg/l. To be on the safe side and to get the best possible analysis results the investigator desires to reach a peak concentration of 500 times the detection limit. The injection point is located 250 m upstream the detection point. Assume one-dimensional transport only and that the transport is controlled by advection and dispersion according to the equation below with the dispersion coefficient $D_x = 0.2$ m{sup}`2`/s. Furthermore, the flow rate may be approximated to 0.25 m{sup}`3`/s. Assume that the following solution of the partial differential mass balance equation can be applied.

:::{math}
c(x,t) = \frac{M_0}{A\sqrt{4\pi D_x t}} e^{-\frac{(x-v_xt)^2}{4D_xt}}
:::

a) Assuming advection only, how long will it take for the tracer to reach the detection point? 

b) Assuming Uranine is a conservative tracer, how much should the investigator at least apply in a pulse at the injection point to reach the desired peak concentration at the detection point?
:::::

(sec-2-1-5-3)=
### 2.1.5.3. Example: Distributed transport using integral formulation - Transport in a drainage basin using GIS

In the examples above, we used relatively simple analytical tools for systems that could be handled on a local scale. Now we turn to a large scale problem for which we need to consider spatially distributed input data. Geographical Information Systems (GIS) are commonly used to handle distributed data and to model water flow and transport of substances through drainage basins. Here we will show how simple mass balances for integral systems can be used together with GIS to model transport of nitrogen through the Norrström drainage basin. The Norrström basin has its outlet in the center of Stockholm and has an area of approximately 22 000 km{sup}`2`. {ref}`fig_photo_norrstroem_satellite` shows a satellite image of central Sweden containing the Norrström basin. The basin forms the major part of the European Union water district Northern Baltic Proper and is thus interesting to look at from a water resources management perspective. Nitrogen transport from drainage basins is one factor influencing the eutrophication of the Baltic Sea and is therefore important to quantify.

:::{figure} ../images/fig_photo_norrstroem_satellite.jpg
:label: fig_photo_norrstroem_satellite
:width: 400px
Satellite image of the Norrström basin.
:::

In GIS, data (e.g., elevation, vegetation type, flow direction) is stored together with the location of the data. In our case that means we get a map that is made up of cells or pixels with a data value in every cell. In {ref}`fig_photo_norrstroem_DEM` the Norrström basin is divided into cells that are 1 km by 1 km, and for every cell the elevation over sea water level is stored and illustrated with a color scale. The black line is the water divide that defines the basin. This information together with many other maps that contain data that is relevant for nitrogen transport is used as input for the model which is now outlined. We hereby follow the model developed by @dewit2001, which is called POLFLOW and that is programmed in the PCRaster Environmental Modeling language that can be used for construction of iterative spatio-temporal environmental models.

:::{figure} ../images/fig_photo_norrstroem_DEM.jpg
:label: fig_photo_norrstroem_DEM
:width: 400px
Digital elevation model of the Norrström basin.
:::

Each GIS cell is represented by four flow reactors (described in {ref}`Section 1.6. <sec-1-6>` for a general case, and for a lake in the {ref}`example above <sec-2-1-5-1>`). One flow reactor represents the soil sub-system, one the shallow groundwater subsystem, one the deep groundwater sub-system, and one the surface water sub-system. There are external in- and outflows from each of these sub-systems as shown in {ref}`fig_basin_conceptual_model_POLFLOW`. Moreover, there are denitrification reactions within these sub-systems. The denitrification depends on several parameters like the slope and the texture of the soil. For each sub-system the reactions are either parameterized or modeled differently.

:::{figure} ../images/fig_basin_conceptual_model_POLFLOW.png
:label: fig_basin_conceptual_model_POLFLOW
:width: 400px
Conceptual model according to POLFLOW.
:::

We are interested in the long term behavior of the system and therefore we use long-time averages of the input data. For instance, we use a long term mean nitrogen fertilizer application, thus assuming a continuous input. In the long-term perspective we can assume that the water flow is in steady state in the drainage basin.

We now set up an integral mass balance of nitrogen for the soil sub-system in one cell, yielding

:::{math}
\frac{dM_{\mathrm{N, soil}}}{dt} = \frac{d\left(C_{\mathrm{N, soil}} V_{\mathrm{soil}}\right)}{dt} = C_{\mathrm{N, soil}}^{\mathrm{in}} Q_{\mathrm{rain}} - C_{\mathrm{N, soil}} Q_{\mathrm{gw}} - C_{\mathrm{N, soil}} Q_{\mathrm{sr}} - \lambda C_{\mathrm{N, soil}} V_{\mathrm{soil}}
:::

where the subscripts gw = groundwater, sr = surface runoff, and rain corresponds to atmospheric deposition in {ref}`fig_basin_conceptual_model_POLFLOW`. Note that we need to know the flows $Q$ for this nitrogen mass balance and thus first have to quantify these by use of a water mass balance (equations not shown). The outputs from the soil sub-system are inputs for the shallow groundwater sub-system and the surface water sub-system. Mass balances like this one are then formulated for all three subsurface systems. Note also, that this means that the flow is in steady state, but that the nitrogen transport can still be variable in time.

Until now we have only been looking at a single cell, and the next step is to link all the cells in the drainage basin to calculate the nitrogen that discharges at the outlet. The flow and transport between the cells and thus through the drainage basin is assumed to occur only through the surface water ({ref}`fig_basin_conceptual_model_POLFLOW`). Therefore we need to link only the surface water sub-systems of neighboring cells. The water flows from high elevations to lower elevations and we therefore can approximate the flow direction in every cell through the drainage basin using the elevation map (see {ref}`fig_photo_norrstroem_DEM`). This is done by the PCRaster program and yields the local drainage direction map. Such a map is shown for the south-western-most sub drainage basin of the Norrström basin ({ref}`fig_basin_local_drainage`). The water flows from the water divide depicted by black squares along the lines and leaves the subcatchment at the red arrow. For every surface water sub-system in a cell we thus have external inputs from the upstream cells and output to the downstream cell. In other words we have a system of thousands of coupled through flow reactors. Solving the water mass balance for the whole basin we obtain {ref}`fig_basin_flowrate_surface` that shows the flow rate of water through all cells in the drainage basin. Note that the flow rate is constant in time but changes from cell to cell.

:::{figure} ../images/fig_basin_local_drainage.png
:label: fig_basin_local_drainage
:width: 200px
Local drainage direction map for the south western part of the Norrström basin.
:::

:::{figure} ../images/fig_basin_flowrate_surface.jpg
:label: fig_basin_flowrate_surface
:width: 500px
Flow rate in the surface water in the Norrström basin.
:::

Given the water flows in each cell, it is now possible to solve the nitrogen mass balance. Because it would be cumbersome to solve this huge system of through flow reactors analytically, we discretisize the time into fiveyear time steps. The mass balance equations can then be approximated by difference equations, in which the nitrogen mass in every sub-system in every cell in time step $t^{n+1}$ depends on the mass in time step $t^n$. Recall that every sub-system in every cell is a 0-D system. The spatial aspects are handled by the spatial arrangement of the sub-systems in the GIS.

Now that we have formulated the model equations we "just" need to write the program code for the numerical solution, collect all required input data, and run the program. Having gone through this work (actually a Master Student did this for her thesis!) we obtain results in the form of maps showing nitrogen transport in each cell in the Norrström basin. For every time step we get one map ({ref}`fig_basin_Nload_0yr`, and {ref}`fig_basin_Nload_50yr`) that shows the nitrogen stream transport in kg/year in a color scale. The second image shows the nitrogen mass flows 50 years after the nitrogen mass flows in the first image. You can see that the average nitrogen transport does not seem to vary very much over time.

:::{figure} ../images/fig_basin_Nload_0yr.jpg
:label: fig_basin_Nload_0yr
:width: 500px
Nitrogen loads in the Norrström basin in $t = 0$ years.
:::

:::{figure} ../images/fig_basin_Nload_50yr.jpg
:label: fig_basin_Nload_50yr
:width: 500px
Nitrogen loads in the Norrström basin int $t = 50$ years.
:::

In a model like this there are of course many assumptions and uncertainties and the nice graphical output should not keep us from critically evaluating our results. How well do they capture the behavior of the real system? Under which assumptions are they valid etc.? Only by knowing what you do, can you really learn something from such a modeling exercise.

