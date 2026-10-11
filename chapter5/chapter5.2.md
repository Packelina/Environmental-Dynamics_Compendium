---
numbering:
  enumerator: 5.%s
---

(sec-5-2)=
# 5.2. Modeling

Since many of the processes if interest in an eutrophied lake have been described, the next step is to introduce modeling procedures.

(sec-5-2-1)=
## 5.2.1. Modeling procedure

The first modeling step is a *definition of the problem* and bounding of the problem in space and time and subsystems (see {ref}`Chapter 2 <sec-2>`).

There are three different categories that can be modeled concerning the eutrophication problem (@snape1995):

- The prediction of nutrient loadings reaching a lake (based on the average annual or seasonal variations in the loading)
- The process in the lake (modeling the influence of pollution or nutrient loads on biochemical processes)
- The control of eutrophication (management models)

When one of the categories has been chosen and the problem has been defined, the next step is to select a right *model complexity level,* which is a matter of balance. On the one hand, it is necessary to include the state variables (like the concentrations of nutrients and phytoplankton) and the processes essential for the problem in focus. On the other hand, it is of importance not to make the model more complex than the data set can bear. Our knowledge of processes and state variables together with our data set will determine the selection of model complexity. A more complex model contains more parameters, which increases the level of uncertainty because parameters have to be estimated either by more observations in the field, by lab experiments or by calibrations that are based on field measurements.

Modeling of eutrophication processes in a lake can differ a lot in the degree of complexity. The model can include some or all of several processes like hydrology, ecology, chemistry, sediment and climate. Furthermore, within each section the degree of complexity can vary too. For example, a hydrology part includes determination of flows that enter and leave a system, which can be simple in a lake or more complicated in a river (see {ref}`fig_sketch_flow_in_out_river`). Further, the volume and a shape of the lake will determine the transport regime (see {ref}`Section 5.2.2.1. <sec-5-2-2-1>`).

:::{figure} ../images/fig_sketch_flow_in_out_river.png
:label: fig_sketch_flow_in_out_river
:width: 500px
Flows into and out of a river (@snape1995).
:::

An ecology part includes the prediction of kinetics of algal growth related to nutrient concentrations (see also {ref}`Section 5.2.2.2. <sec-5-2-2-2>`), which can also vary in the complexity level. In some models several species of algae can be included and by that increasing model complexity. From a chemistry part, the model can include different levels of substrate: organic, inorganic, dissolved, or particulate forms, but also the influence of others compounds. Further, the model complexity level can rise a lot if one involves a complex process of exchange of nutrients between a water body and the sediment. Finally one can include a climate data like the temperature, wind direction, the rainfall, the intensity and duration of the sunlight into the model.

When the level of model complexity has been decided, the next step is to *conceptualize the model* in the form of a diagram as shown in {ref}`fig_diagram_P_cycle_aquatic` (example of a phosphorus cycle). This step will give information on which state variables, forcing functions (external variables that influence the model like climatic variables) and processes are required in the model.

The next step is to formulate and to represent the biological, chemical and physical processes by *mathematical equations*. They describe the relationship between the forcing functions and state variables. The same process does not have to be formulated by use of the same equations. For example we could include the influence of other factors on the process, which will include more parameters and therefore will result in increasing of a complexity level (see {ref}`Section 5.2.3.2. <sec-5-2-3-2>`).

Furthermore, coefficients in mathematical equations are called parameters which can often be represented as ranges and not as a constant value. Our limited knowledge of parameters is one of the weakest points in modeling (@jorgensen1994).

Then, *calibration* will take place, as an attempt to find the best fit between observed and computed values by variation of some selected parameters. Sensitivity analysis is carried out to find the most sensitive components of the model by changing the parameters, the forcing functions or the sub-models. The aim of the calibration is to improve the parameter estimation.

The next step is *verification* as a test of the internal logic of the model. With verification and comparing of model results one should be able to get the answers to the questions like: Does the model react as expected? Is the model long term stable? Can I apply the model to another site?

The last step, *validation,* (gives the answer to the question how well the model outputs fit the data) is the scientific acceptance that the model includes all major processes, the processes are formulated correctly and the aim has been achieved.

(sec-5-2-2)=
## 5.2.2. Modeling lake eutrophication

As mentioned earlier, eutrophication is the enrichment of waters by nutrients from natural or man-made sources that causes increased biological production. In order to model the eutrophication process in lakes one should focus first on nutrient transport regimes within the lake as well as on how to model the growth rate of algae as one of the most important processes in the lake.

(sec-5-2-2-1)=
### 5.2.2.1. Transport regimes - the complexity level

Depending on a shape of a lake transport regimes will be determined. For a small and shallow lake a continuous stirred tank reactor (CSTR) model can be used where it is assumed that the lake is well mixed, neither temperature nor concentration gradients occur, and that the concentration of nutrients in the lake is equal to the concentration in the effluent, leaving the lake (see {ref}`fig_CSTR` and {ref}`Section 1.6. <sec-1-6>`).

:::{figure} ../images/fig_CSTR.png
:label: fig_CSTR
:width: 400px
Continuously stirred tank reactor (CSTR).
:::

If a lake is long and thin, a plug-flow (PFR) model may be more appropriate (see {ref}`fig_PFR` but also {ref}`Section 1.6. <sec-1-6>`). In the case of a river with eddy a combination of CSTR and PFR could be used ({ref}`fig_river_eddy`)

:::{figure} ../images/fig_PFR.png
:label: fig_PFR
:width: 500px
Plug flow reactor (PFR).
:::

:::{figure} ../images/fig_river_eddy.png
:label: fig_river_eddy
:width: 400px
River flow with eddy.
:::

If thermal stratification is present in the lake the epilimnion and hypolimnion layers should be modeled separately, which will increase the model complexity. Furthermore, within each layer several separate boxes can be established. {ref}`fig_transport_regime_lake_stratified` shows six different compartments (boxes) in a lake as an example of a complex box model. Each box consists of series of mass balance equations, and is being mixed with the neighboring boxes. The number of boxes will be determined according to the available data and the decided complexity level.

:::{figure} ../images/fig_transport_regime_lake_stratified.png
:label: fig_transport_regime_lake_stratified
:width: 400px
Transport regime for a stratified lake (@schnoor1996).
:::

(sec-5-2-2-2)=
### 5.2.2.2. The growth rate

After stating a proper complexity level one should describe the effect of nutrient loadings on the growth rate. One possibility of modeling the kinetics of algal growth is with a simple linear model expressed as $\mu = r_{1} S$ (where $r_1$ is a constant). This will mean that if a food supply increases i.e. increasing of nutrient concentrations ($S$) the rate of biomass production will increase linearly, and that there is not a maximum value. Since this is a limitless model it is not realistic.

A frequently used model relating microbial growth (the extent of algal blooms) to substrate utilization is an analogue of the Monod model from 1949, based on the Michaelis-Menten function for enzyme kinetics, where it was identified that the growth rate was a function of some limiting substrate ($S$) or nutrient concentration. In eutrophied lakes phosphorus is usually assumed as a limiting substrate. When the concentration of phosphorus increases the growth rate will increase too, but until the maximum growth rate has been reached (see {ref}`fig_max_growth_rate`). Then with further increase of P the growth rate will keep constant, and eventually will start to decrease (a process that has not been shown in the {ref}`fig_max_growth_rate`). The non-linear relationship can be written as:

:::{math}
\mu = \mu_{\mathrm{max}} \frac{S}{S + K_{\mathrm{s}}}
:::

where $\mu_{\mathrm{max}}$ is a maximum growth rate of phytoplankton per day, $S$ is a substrate in mg/l, and $K_{\mathrm{s}}$ is a half saturation constant in mg/l representing a concentration of the substrate when a growth rate is equal to $\mu = \mu_{\mathrm{max}}/2$

:::{figure} ../images/fig_max_growth_rate.png
:label: fig_max_growth_rate
:width: 300px
Effect of substrate concentration on growth rate.
:::

(sec-5-2-2-3)=
### 5.2.2.3. Steady state

The steady state represents a static or an average situation. In {ref}`fig_steady_state` a static model (dashed line) cannot be used in a transient state B, but it can be used to describe state A or an average situation of state C.

:::{figure} ../images/fig_steady_state.png
:label: fig_steady_state
:width: 300px
Steady state (@jorgensen1994).
:::

(sec-5-2-3)=
## 5.2.3. From simplicity to complexity

(sec-5-2-3-1)=
### 5.2.3.1. An aquatic phosphorus model

Lets assume that phosphorus is a limiting nutrient for eutrophication of the lake system conceptualized in {ref}`fig_diagram_P_cycle_simple`. In order to describe changes of phosphorous concentrations in the lake one should derive the mass balance equations (see {ref}`Section 1.6. <sec-1-6>`).

Here, the lake is our system of interest with its own boundaries. In the lake we have two components, two state variables of concern, soluble phosphorus and organically bound phosphorus in the algae biomass (in phytoplankton), with their inputs and outputs. Since our assumptions concerning transport regimes are complete mixing, i.e. the lake acts as a continuous stirred tank reactor (CSTR), and steady state flow conditions ($Q = \mathrm{const}$, $V = \mathrm{const}$) (the average lake concentration is equal to the concentration of total phosphorus in the outflow), we will not consider thermal stratification of a lake, but will assume one box within the lake.

:::{figure} ../images/fig_diagram_P_cycle_simple.png
:label: fig_diagram_P_cycle_simple
:width: 400px
A simple conceptual model of the phosphorus cycle.
:::

As already was explained in {ref}`Chapter 2 <sec-2>`, here we will also use a zero (0) dimensional model with no space variables.

Let $\mathrm{PS}$ denote soluble P and $\mathrm{PA}$ P in algae biomass. Simple mass balance equations for $\mathrm{PS}$ and $\mathrm{PA}$ is written as:

:::{math}
\begin{gathered}
\text{Rate of change} = \text{Inflow} - \text{Outflow} + \text{Processes in the lake} \\
\frac{d\mathrm{PS}}{dt} = (1) - (2) - (3) + (\mathrm{A}) \quad [\text{mg/(l d)}] \\
\end{gathered}
:::

:::{math}
\frac{d\mathrm{PA}}{dt} = (3) - (\mathrm{A}) - (4) \quad [\text{mg/(l d)}]
:::

In order to set a mass balance equation for each state variable one should first determine the processes. Processes can be represented with different mathematical expressions; here we chose to assume linear (first order) kinetics for all processes other than the algal growth, and Michaelis-Menten kinetics for algal growth. See {ref}`tab_explanation_diagram_P_cycle` below for explanation of symbols and processes, and examples of parameters and variables to be used for the modeling.

:::{math}
\begin{gathered}
\text{Process (1) = inflow to the soluble phosphorous pool, } \mathrm{PS}; \\
= P_{\mathrm{in}} \times Q/V \quad [\text{(mg P)/(l d)}]
\end{gathered}
:::

:::{math}
\begin{gathered}
\text{Process (2) = concentration of phosphorus in the outflow from a pool } \mathrm{PS}; \\
= \mathrm{PS} \times Q/V \quad [\text{(mg P)/(l d)}]
\end{gathered}
:::

:::{math}
\begin{gathered}
\text{Process (3) = } \ce{P} \text{ uptake by phytoplankton/algae growth}; \\
= \mu \times \mathrm{PA} \quad [\text{(mg P)/(l d)}]
\end{gathered}
:::

As mentioned, the only non-linear process is the algae growth, which is explained by Michaelis-Menten kinetics for the algal growth where $\mu = \mu_{\mathrm{max}} \times \mathrm{PS}/ (\mathrm{PS} + K_{\mathrm{s}})$

In the case where the effect of time-dependent sunlight intensity on the growth rate (process 7) is taken into account, we assume that the maximum rate of growth, $\mu_{\mathrm{max}}$, is equal to $S$, i.e. to the solar radiation available for photosynthesis. This is an example of how processes can be represented by either simple or more complex expressions. Thus

:::{math}
\mu = S \times \mathrm{PS}/(\mathrm{PS} + K_{\mathrm{s}}) 
:::

where $S$ is a function of $t$, time: $S = S_{\mathrm{max}}(1 + \sin(0.008603t))$

:::{math}
\begin{gathered}
\scriptsize \text{Process (4) = concentration of phosphorus in the outflowing water from a phytoplankton pool;} \\
= \mathrm{PA} \times Q/V \quad [\text{(mg P)/(l d)}]
\end{gathered}
:::

:::{math}
\begin{gathered}
\scriptsize \text{Process (A) = remineralisation of organically bound } \ce{P} \text{ to the soluble phosphorous pool }\mathrm{(PS)}\text{;} \\
(\mathrm{A}) = R_{\mathrm{rel, a}} \times \mathrm{PA} \quad [\text{(mg P)/(l d)}]
\end{gathered}
:::

Putting all the processes in the above written equations will yield:

:::{math}
\frac{d\mathrm{PS}}{dt} = (1) - (2) - (3) + (\mathrm{A}) = (\ce{P}_{\mathrm{in}} - \mathrm{PS}) Q/V - (S \times \mathrm{PS}/(\mathrm{PS} + K_{\mathrm{s}}) - R_{\mathrm{rel, a}}) \mathrm{PA} \quad [\text{(mg P)/(l d)}]
:::

:::{math}
\frac{d\mathrm{PA}}{dt} = (3) - (\mathrm{A}) - (4) = (S \times \mathrm{PS}/(\mathrm{PS} + K_{\mathrm{s}}) - R_{\mathrm{rel, a}} - Q/V) \mathrm{PA} \quad [\text{(mg P)/(l d)}]
:::

:::{table} Explanation of symbols and processes.
:label: tab_explanation_diagram_P_cycle
:class: widen-third-col

| | Examples of parameters / variables | Ex. values |
| :---: | :--- | :---: |
| **$\ce{P}_\mathrm{in}$** | - soluble phosphorus concentration in inflow water [mg/l] | 0.2 (0-1.5) |
| **$\mathrm{PA}$** | - P organically bound in algae biomass [mg/l] | 1.0 |
| **$\mathrm{PS}$** | - soluble phosphorus [mg/l] | 0.02 (0-0.3) |
| **$\mathrm{PT}$** | - total phosphorus concentration, $\mathrm{PT} = \mathrm{PS} + \mathrm{PA}$ [mg/l] | 0.05 (0-0.35) |
| **$Q$** | - hydraulic inflow/outflow [m{sup}`3`/day] | 450 |
| **$V$** | - lake volume [m{sup}`3`] | 700 000 |
| **$R_{\mathrm{rel,a}}$** | - rate constant for release of P from algae [1/d] | 0.1 (?-0.2) |
| $\mathbf{\mu}$ | - growth rate variable, P uptake [1/d] | 0.1 |
| $\mathbf{\mu_{\mathrm{max}}}$ | - maximum growth rate of phytoplankton [1/d] | 1.5 (0.6-4) |
| **$S$** | - solar radiation available for photosynthesis [1/d] | 0.1 (0-1) |
| **$S_{\mathrm{max}}$** | - maximum solar radiation [1/d] | 0.5 |
| **$t$** | - time [day] | 360 |
| **$A$** | - degradation of P in phytoplankton and direct return to the soluble phosphorous pool | |
| **$K_{\mathrm{s}}$** | - Michaelis-Menten (half saturation) constant for P uptake | 1 (0-1.2) |
:::

The model must have realistic parameters within the range given in the literature. In order to check that one should perform a steady state analysis. If calibration gives parameters outside this range, the model should be changed.

Lets now find the steady state solutions for $\mathrm{PS}$ and $\mathrm{PA}$ by introducing $\mathrm{PT} = \mathrm{PS} + \mathrm{PA}$ (use an expression for $d\mathrm{PT}/dt$). We shell set also a limit for $\mu_{\mathrm{max}}$, based on the obtained steady state solutions.

Analysis of the non-linear model developed above, is preformed by assuming the dynamic system had converged to the steady state (i.e. change in concentration of state variables with time = zero). Steady state analysis is limited, as it does not show time-dependent variations such as seasonal changes, but it is a useful assumption to make, because e.g. the system becomes less time-consuming to solve, an analytical solution may be easier to find, and less data is required. The steady state system could be solved analytically for the state variables by using the substitution $\mathrm{PT} = \mathrm{PS} + \mathrm{PA}$. The steady state analysis indicates parameter value limits necessary for the solution to converge.

At steady state, differential equations will be reduced to algebraic equations. In this example we get the following two algebraic equations in the steady state situation:

:::{math}
d\mathrm{PS}/dt = 0 = (\ce{P}_\mathrm{in} - \mathrm{PS}) Q/V - (\mu - R_{\mathrm{rel,a}}) \mathrm{PA}
:::

:::{math}
d\mathrm{PA}/dt = 0 = (\mu - R_{\mathrm{rel,a}} - Q/V) \mathrm{PA}
:::

Instead of solving these equations, which are non-linear (remember that $\mu$ is a function of $\mathrm{PS}$), it is easier to derive a new differential equation from the two original model equations by introducing the variable total phosphorus concentration ($\mathrm{PT}$):

:::{math}
\mathrm{PT} = \mathrm{PS} + \mathrm{PA}
:::

By adding the model equations we get the differential equations for $\mathrm{PT}$:

:::{math}
d\mathrm{PT}/dt = d\mathrm{PS}/dt + d\mathrm{PA}/dt
:::

:::{math}
\Rightarrow d\mathrm{PT}/dt = (\ce{P}_{\mathrm{in}} - \mathrm{PS}) Q/V - (\mu - R_{\mathrm{rel,a}}) \mathrm{PA} + (\mu - R_{\mathrm{rel,a}} - Q/V) \mathrm{PA}
:::

:::{math}
\Rightarrow d\mathrm{PT}/dt = (\ce{P}_{\mathrm{in}} - \mathrm{PS}) Q/V - Q/V \times \mathrm{PA}
:::

:::{math}
\Rightarrow d\mathrm{PT}/dt = (\ce{P}_{\mathrm{in}} - \mathrm{PS} - \mathrm{PA}) Q/V
:::

:::{math}
\Rightarrow d\mathrm{PT}/dt = (\ce{P}_{\mathrm{in}} - \mathrm{PT}) Q/V
:::

This equation is linear, which neither of the original model equations were. So the equation can be solved analytically, while there are no known analytical solutions to the original model equations. The simplified steady state equations can be found as follows:

:::{math}
:label: eq_P_cycle_simple_steady_state_1
0 = (\ce{P}_{\mathrm{in}} - \mathrm{PT}) = \ce{P}_{\mathrm{in}} - \mathrm{PS}^{*} - \mathrm{PA}^{*}
:::

:::{math}
:label: eq_P_cycle_simple_steady_state_2
0 = (\mu - R_{\mathrm{rel,a}} - Q/V) \mathrm{PA}^{*}
:::

We get the following steady state solutions, ($\mathrm{PS}^{*}$ , $\mathrm{PA}^{*}$):

*Solution 1*

Eq. {ref}`eq_P_cycle_simple_steady_state_2` gives $\mathrm{PA}^{*} = 0$, input to Eq. {ref}`eq_P_cycle_simple_steady_state_1` gives $\mathrm{PS}^{*} = \ce{P}_{\mathrm{in}}$, or: $(\mathrm{PS}^{*} , \mathrm{PA}^{*} ) = (\ce{P}_{\mathrm{in}}, 0)$ which means that there is no growth, and therefore it is not a realistic solution.

*Solution 2*

Eq. {ref}`eq_P_cycle_simple_steady_state_1` gives $\mathrm{PA}^{*} = \ce{P}_{\mathrm{in}} - \mathrm{PS}^{*}$

Eq. {ref}`eq_P_cycle_simple_steady_state_2` gives $\mu - R_{\mathrm{rel,a}} - Q/V = 0$ and $\mu = R_{\mathrm{rel,a}} + Q/V$

From process (3) we have (replacing $S$ with $\mu_{\mathrm{max}}$):

:::{math}
\mu = \mu_{\mathrm{max}} \times \mathrm{PS}^{*}/(\mathrm{PS}^{*} + K_{\mathrm{s}})
:::

We get:

:::{math}
R_{\mathrm{rel,a}} + Q/V = \mu_{\mathrm{max}} \times \mathrm{PS}^{*}/(\mathrm{PS}^{*} + K_{\mathrm{s}})
:::

:::{math}
\Rightarrow (\mathrm{PS}^{*} + K_{\mathrm{s}}) (R_{\mathrm{rel,a}} + Q/V) = \mu_{\mathrm{max}} \times \mathrm{PS}^{*}
:::

:::{math}
\Rightarrow \mathrm{PS}^{*}(R_{\mathrm{rel,a}} + Q/V) + K_{\mathrm{s}}(R_{\mathrm{rel,a}} + Q/V) = \mu_{\mathrm{max}} \times \mathrm{PS}^{*}
:::

:::{math}
\Rightarrow \mu_{\mathrm{max}} \times \mathrm{PS}^{*} - \mathrm{PS}^{*} (R_{\mathrm{rel,a}} + Q/V) = K_{\mathrm{s}}(R_{\mathrm{rel,a}} + Q/V)
:::

:::{math}
\Rightarrow \mathrm{PS}^{*} (\mu_{\mathrm{max}} - (R_{\mathrm{rel,a}} + Q/V)) = K_{\mathrm{s}}(R_{\mathrm{rel,a}} + Q/V)
:::

:::{math}
\Rightarrow \mathrm{PS}^{*} = K_{\mathrm{s}}(R_{\mathrm{rel,a}} + Q/V)/(\mu_{\mathrm{max}} - R_{\mathrm{rel,a}} - Q/V)
:::

i.e. the second steady state solution is

<!-- NOTE: The brackets are wrong in this equation, double check it later! -->
:::{math}
(\mathrm{PS}^{*}, \mathrm{PA}^{*}) = (K_{\mathrm{s}}(R_{\mathrm{rel,a}} + Q/V))/(\mu_{\mathrm{max}} - R_{\mathrm{rel,a}} - Q/V), \ce{P}_{\mathrm{in}} - \mathrm{PS}^{*})
:::

The first solution is uninteresting, as it corresponds to no phytoplankton growth ($\mathrm{PA}^{*} = 0$). The interesting case is where $\mathrm{PA} = \ce{P}_{\mathrm{in}} - \mathrm{PS} > 0$. This expression leads to $\ce{P}_{\mathrm{in}} > \mathrm{PS}$. The following inequality can be derived by using the steady state solutions:

:::{math}
\ce{P}_{\mathrm{in}} > (K_{\mathrm{s}}(R_{\mathrm{rel,a}} + Q/V))/(\mu_{\mathrm{max}} - R_{\mathrm{rel,a}} - Q/V) \text{, or:}
:::

:::{math}
\ce{P}_{\mathrm{in}} \times (\mu_{\mathrm{max}} - R_{\mathrm{rel,a}} - Q/V) > (K_{\mathrm{s}} (R_{\mathrm{rel,a}} + Q/V)) \text{, or:}
:::

:::{math}
\mu_{\mathrm{max}} > (1 + K_{\mathrm{s}} / \ce{P}_{\mathrm{in}})(R_{\mathrm{rel,a}} + Q/V)
:::

The limit on $\mu_{\mathrm{max}}$ means that algae only exist in a lake provided that $\ce{P}_{\mathrm{in}}$ is sufficiently large and $R_{\mathrm{rel,a}}$ and $Q/V$ are sufficiently small to allow the growth, i.e., nutrients should be available and the algae should not be remineralized too fast or washed out. If we use the parameters listed above, we get that $\mu_{\mathrm{max}} > (1 + 1/0.2) (0.1 + 450/700 \ 000) = 0.6$ 1/d, which is the case. The chosen value, 1.5 1/d, complies with the range of values found in the literature for this rate: 0.6 - 4 1/d .

This example shows that the steady state version of the model should be used to set up limits for some of the most important parameters.

(sec-5-2-3-2)=
### 5.2.3.2. A step model

In this example we will build a complex model from a simple case (model 1) to the more complicated case (model 4). We will derive the mass balance equations to describe changes of state variables in the lake system conceptualized below for each model (1–4). The assumptions are complete mixing (as in the previous example), i.e. the lake acts as a continuous stirred tank reactor (CSTR), and steady-state flow conditions. Description and values of parameters are given below for each model.

:::{table} State variables.
:label: tab_P_cycle_state_variables

| State variables | |
| :---: | :--- |
| **$\mathrm{PS}$** | - soluble phosphorus (P) [mg/l or (g P)/m{sup}`3`] |
| **$\mathrm{PA}$** | - organically bound P in the algae biomass (phytoplankton), [(mg P)/l]; |
| **$\ce{P}_{\mathrm{hyt}}$** | - phytoplankton [(mg biomass)/l] |
| **$\ce{P}_{\mathrm{det}}$** | - P in detritus [mg/l] |
| **$\ce{P}_{\mathrm{sed}}$** | - P in sediment [g/m{sup}`2`] |
| **$\ce{P}_{\mathrm{zoo}}$** | - P in zooplankton [mg/l] |
| **$\ce{P}_{\mathrm{in}}$** | - concentration of $\mathrm{PS}$ in the inflowing water [mg/l] |
| **$\ce{P}_{\mathrm{out}}$** | - concentration of P in the outflowing water [mg/l] |
:::

{u}`Processes and forcing functions:`
<!-- SUGGESTION: Make it as a list and not text block -->
**(1)** = $\ce{P}_{\mathrm{in}}$ - input to the soluble phosphorous pool, $\mathrm{PS}$; \
**(2)** = $\ce{P}_{\mathrm{out}}$ - output from $\mathrm{PS}$; \
**(3)** = P uptake by phytoplankton/algae growth; \
**(4)** = $\ce{P}_{\mathrm{out}}$, phytoplankton; \
**(5)** = phytoplankton mortality; \
**(6)** = detritus decomposition, re-mineralization; release of P to $\mathrm{PS}$; \
**(7)** = solar radiation available for photosynthesis; \
**(8)** = $\ce{P}_{\mathrm{out}}$, detritus; \
**(9)** = detritus sedimentation; \
**(10)** = phytoplankton sedimentation; \
**(11)** = release of P from sediment; \
**(12)** = zooplankton grazing of phytoplankton; \
**(13)** = zooplankton mortality; \
**(14)** = zooplankton sedimentation; \
**(15)** = $\ce{P}_{\mathrm{out}}$, zooplankton

{u}`Model 1`

:::{figure} ../images/fig_diagram_P_cycle_model_1.png
:label: fig_diagram_P_cycle_model_1
:width: 400px
A simple dilution model
:::

In the first model we assumed that only one state variable (soluble phosphorus) is important (see {ref}`fig_diagram_P_cycle_model_1`), and therefore we will have only one differential equation.

:::{math}
\begin{gathered}
\text{Rate of change = Inflow - Outflow + Processes in the lake } \\
d\mathrm{PS}/dt = (1) - (2) = \ce{P}_{\mathrm{in}} \times Q/V - \mathrm{PS} \times Q/V = (\ce{P}_{\mathrm{in}} - \mathrm{PS}) \times Q/V [\text{(mg P)/(l d)}]
\end{gathered}
:::

After deriving a mass balance equation and giving all important parameters the model was run for a one year period and the result is shown in {ref}`fig_graph_P_cycle_model_1`. It can be seen that since we assumed only a soluble P pool without any other process involved, the concentration of P increases linearly as there are no consumers that could decrease its content.

:::{figure} ../images/fig_graph_P_cycle_model_1.png
:label: fig_graph_P_cycle_model_1
:width: 400px
Result from the model 1.
:::

:::{table} Parameters for model 1 and model 2.
:label: tab_P_cycle_parameters_model_1_2

| | Parameters for models 1 and 2 | Possible values |
| :---: | :--- | :---: |
| **$R_{\mathrm{rel,d}}$** | - rate constant for detritus decomposition [1/d] | 0.1 |
| **$\ce{P}_{\mathrm{det}}$** | - phosphorus in detritus [(mg P)/l] | 0.05 |
| **$I$** | - light intensity [kcal/(m{sup}`2` day{sup}`3`)] | 500-4 500 |
| **$I_{\mathrm{lim}}$** | - limiting light intensity for growth | 0-0.4 |
| **$\ce{P}_{\mathrm{lim}}$** | - limiting phosphorous concentration for growth | 0.1 (0-1) |
| **$k1$** | - phosphorus/biomass ratio of plankton [(mg P)/(mg biomass)] | 0.01 |
| **$\ce{P}_{\mathrm{hyt}}$** | - phytoplankton [(mg biomass)/l] | 4 (-10) |
| **$R_{\mathrm{det,a}}$** | - rate constant for loss of algae to detritus [1/d] | 0.05 |
| **$KL$** | - Michaelis-Menten (half saturation) constant for light uptake [kcal/(m{sup}`2` day{sup}`3`)] | 400 |
| **$\alpha$** | - light extinction coefficient of water [1/m] | |
| **$\beta$** | - light extinction coefficient of phytoplankton [1/m] | 0.18 |
| **$K_{\mathrm{s}}$** | - Michaelis-Menten (half saturation) constant for P uptake, equal to the concentration of $\mathrm{PS}$ where $\ce{P}_{\mathrm{lim}} = 0.5$ [mg/l] | 0.2 (0-1.2) |
| **$\mu$** | - growth rate for phytoplankton [1/d] | 0.1 |
:::

{u}`Model 2`

In the second model a phytoplankton and a detritus pool have been introduced (see {ref}`fig_diagram_P_cycle_model_2`). Expanding of a model with new state variables will increase complexity of the model. The question is if we have enough parameters to support the expansion? A list of parameters to be used is given above.

:::{figure} ../images/fig_diagram_P_cycle_model_2.png
:label: fig_diagram_P_cycle_model_2
:width: 400px
Conceptual model with a phytoplankton and a detritus pool.
:::

Additional assumptions:

The concentration of organically bound P in the algae biomass is not given, but a phosphorus to biomass ratio of phytoplankton is given. Furthermore, the phytoplankton growth is limited by the amount of light and soluble phosphorus, and is described according to the equation:

:::{math}
\mu = \mu_{\mathrm{max}} I_{\mathrm{lim}} \ \ce{P}_{\mathrm{lim}} \ \text{[1/d] where}
:::

:::{math}
I_{\mathrm{lim}} = \ln [ (I + KL)/(I \times \exp (-(\alpha + \beta \times \ce{P}_{\mathrm{hyt}}) D)) + KL ]/(\alpha + \beta \times \ce{P}_{\mathrm{hyt}}) \times D, \text{ and}
:::

:::{math}
\ce{P}_{\mathrm{lim}} = \mathrm{PS}/(\mathrm{PS} + K_{\mathrm{s}})
:::

From the phytoplankton pool organic material is by a simple first order reaction transferred to a detritus pool (process 5). Decomposition of detritus P to inorganic phosphorus is assumed to follow a first order reaction (process 6).

A mass balance equation for a soluble phosphorus pool is:

:::{math}
:enumerated: false
d\mathrm{PS}/dt = (1) - (2) + (6) - (3)
:::

:::{math}
= (\ce{P}_{\mathrm{in}} - \mathrm{PS}) \times Q/V + R_{\mathrm{rel,d}} \times \ce{P}_{\mathrm{det}} - \mu_{\mathrm{max}} I_{\mathrm{lim}} \ce{P}_{\mathrm{lim}} \times k1 \times \ce{P}_{\mathrm{hyt}}
:::

:::{math}
\text{where } (6) = R_{\mathrm{rel,d}} \times \ce{P}_{\mathrm{det}} \quad [\text{(mg P)/(l d)}]
:::

:::{math}
(3) = \mu \times \mathrm{PA}
:::

:::{math}
\mu = \mu_{\mathrm{max}} I_{\mathrm{lim}} \ce{P}_{\mathrm{lim}}
:::

Knowing a concentration of phytoplankton and a ratio of phosphorus bounded in 1 mg of biomass, one can calculate a concentration of phosphorus in phytoplankton, as

:::{math}
\mathrm{PA} = k1 \times \ce{P}_{\mathrm{hyt}} \quad [= \text{(mg P)/(mg biomass) $\times$ (mg biomass)/l $=$ (mg P)/l}]
:::

:::{math}
\begin{gathered}
\frac{d\ce{P}_{\mathrm{hyt}}}{dt} = (3) - (5) - (4) \\
= (\mu_{\mathrm{max}} I_{\mathrm{lim}} \ce{P}_{\mathrm{lim}} - R_{\mathrm{det,a}} - Q/V) \ce{P}_{\mathrm{hyt}} \quad [\text{(mg biomass)/(l d)}]
\end{gathered}
:::

:::{math}
\text{where } (5) = R_{\mathrm{det,a}} \times \ce{P}_{\mathrm{hyt}}
:::

:::{math}
\begin{gathered}
\frac{dP_{\mathrm{det}}}{dt} = (5) - (6) - (8) \\
= (R_{\mathrm{det,a}} \times k1 \times \ce{P}_{\mathrm{hyt}}) - (R_{\mathrm{rel,d}} + Q/V) \ce{P}_{\mathrm{det}} \quad [\text{(mg P)/(l d)}]
\end{gathered}
:::

:::{figure} ../images/fig_graph_P_cycle_model_2.png
:label: fig_graph_P_cycle_model_2
:width: 600px
Results from the model 2
:::

After setting a mass balance equations for all state variable a model was run and results are shown in {ref}`fig_graph_P_cycle_model_2`. It can be seen that linear increase of $\mathrm{PS}$ has disappeared, and that now seasonal variations can be seen. When $\mathrm{PS}$ decreases during the year, phytoplankton increases since they are feeding on them. As phytoplankton concentration increases so does the detritus pool.

{u}`Model 3`

In the third model a sediment phosphorus pool is introduced as shown in {ref}`fig_diagram_P_cycle_model_3`.

:::{figure} ../images/fig_diagram_P_cycle_model_3.png
:label: fig_diagram_P_cycle_model_3
:width: 400px
Conceptual model with a phytoplankton, detritus and a sediment pool.
:::

:::{table} Parameters for model 3.
:label: tab_P_cycle_parameters_model_3

| | Parameters for model 3 | Possible values |
| :---: | :--- | :---: |
| **$\ce{P}_{\mathrm{sed}}$** | - phosphorus in sediment [(g P)/m{sup}`2`] | 30 |
| **$D$** | - lake depth [m] | 4 |
| **$R_{\mathrm{rel,s}}$** | - rate constant for release of phosphorous from sediment [1/d] | 0.001 |
| **$R_{\mathrm{sed,a}}$** | - rate constant for sedimentation of phytoplankton [1/d] | 0.2 |
| **$R_{\mathrm{sed,d}}$** | - rate constant for sedimentation of phosphorus from detritus [1/d] | 0.1 |
:::

The sediment pool has input from sedimentation of phytoplankton (process 10) and from a detritus pool (process 9).

Release from sediment (process 11) is assumed to follow a first order reaction. Furthermore it is assumed that there is no non-exchangeable phosphorus.

:::{math}
(11) = R_{\mathrm{rel,s}} \times \ce{P}_{\mathrm{sed}} / D \quad [\text{(mg P)/(l d)}]
:::

:::{math}
\begin{gathered}
\frac{d\mathrm{PS}}{dt} = (1) - (2) + (6) - (3) + (11) \\
= (\ce{P}_{\mathrm{in}} - \mathrm{PS}) \times Q/V + R_{\mathrm{rel,d}} \times \ce{P}_{\mathrm{det}} - \mu_{\mathrm{max}} I_{\mathrm{lim}} \ce{P}_{\mathrm{lim}} \times k1 \times \ce{P}_{\mathrm{hyt}} + R_{\mathrm{rel,s}} \times \ce{P}_{\mathrm{sed}} / D \quad [\text{(mg P)/(l d)}]
\end{gathered}
:::

:::{math}
(10) = R_{\mathrm{sed,a}} \times \ce{P}_{\mathrm{hyt}} \quad [\text{(mg biomass)/(l d)}]
:::

:::{math}
\begin{gathered}
\frac{d\ce{P}_\mathrm{hyt}}{dt} = (3) - (5) - (4) - (10) \\
= (\mu_{\mathrm{max}} I_{\mathrm{lim}} \ce{P}_{\mathrm{lim}} - R_{\mathrm{det,a}} - Q/V - R_{\mathrm{sed,a}}) \ce{P}_{\mathrm{hyt}} \quad [\text{(mg biomass)/(l d)}]
\end{gathered}
:::

:::{math}
(9) = R_{\mathrm{sed,d}} \times \ce{P}_{\mathrm{det}} \quad [\text{(mg P)/(l d)}]
:::

:::{math}
\begin{gathered}
\frac{d\ce{P}_{\mathrm{det}}}{dt} = (5) - (6) - (8) - (9) \\
= (R_{\mathrm{det,a}} \times k1 \times \ce{P}_{\mathrm{hyt}}) - (R_{\mathrm{rel,d}} + Q/V + R_{\mathrm{sed,d}}) \ce{P}_{\mathrm{det}} \quad [\text{(mg P)/(l d)}]
\end{gathered}
:::

:::{math}
\begin{gathered}
\frac{d\ce{P}_{\mathrm{sed}}}{dt} = (9) + (10) - (11) \\
= (R_{\mathrm{sed,d}} \times \ce{P}_{\mathrm{det}} + R_{\mathrm{sed,a}} \times \ce{P}_{\mathrm{hyt}} \times k1) D - R_{\mathrm{rel,s}} \times \ce{P}_{\mathrm{sed}} \quad [\text{(g P)/(m}^{2}\text{ d)}]
\end{gathered}
:::

:::{figure} ../images/fig_graph_P_cycle_model_3.png
:label: fig_graph_P_cycle_model_3
:width: 500px
Results from the model 3.
:::

Results showed that by introducing a sediment pool a concentration of soluble P is increasing because of remineralisation of sediment and therefore a constant supply of dissolved P occurs (see {ref}`fig_graph_P_cycle_model_3`). A seasonal variation was kept. The concentrations of phytoplankton and P from a detritus pool are decreasing because of the sedimentation process. It can be also seen that after a peak in soluble P concentrations an algal bloom occurs. Results for a sediment pool showed no seasonal variations that can be explained with different rates of inflows and outflows from the pool.

{u}`Model 4`

In the forth model zooplankton grazing is introduced (as shown in {ref}`fig_diagram_P_cycle_aquatic`).

:::{figure} ../images/fig_diagram_P_cycle_aquatic.png
:label: fig_diagram_P_cycle_aquatic
:width: 500px
The conceptual diagram of a phosphorous cycle in an aquatic ecosystem.
:::

:::{table} Parameters for model 4.
:label: tab_P_cycle_parameters_model_4

| | Parameters for models 4 and 2 | Possible values |
| :---: | :--- | :---: |
| **$\mathrm{GRZ}$** | - zooplankton grazing [(mg biomass)/(l d)] | ? |
| **$R_{\mathrm{det,z}}$** | - rate constant for loss of zooplankton to detritus [1/d] | 0.03 |
| **$R_{\mathrm{sed,z}}$** | - rate of sedimentation of zooplankton [1/d] | - |
| **$Y$** | - assimilation coefficient/efficiency of zooplankton | 0.3 |
| **$\mathrm{Zoo}$** | - zooplankton [(mg biomass)/l] | 2 |
| **$C_{\mathrm{zoo}}$** | - carrying capacity of zooplankton [(mg biomass)/l] | 15 |
| **$\mathrm{GZK}$** | - minimum phytoplankton concentration for zooplankton grazing [(mg biomass)/l] | 0.5 |
| **$\mathrm{GRZ}_{\mathrm{max}}$** | - rate constant for maximum grazing [1/d]] | 0.25 |
| **$K_{\mathrm{Phyt}}$** | - half saturation constant for zooplankton grazing [(mg biomass)/l] | 2 |
:::

Also given, the rate of grazing [(mg biomass)/(l d)]:

:::{math}
\mathrm{GRZ} = [\mathrm{GRZ}_{\mathrm{max}} \times (\ce{P}_{\mathrm{hyt}} - \mathrm{GZK}) \times (C_{\mathrm{zoo}} - \mathrm{Zoo}) \times \mathrm{Zoo}] / (\ce{P}_{\mathrm{hyt}} + K_{\mathrm{Phyt}} \times C_{\mathrm{zoo}}
:::

if $(\ce{P}_{\mathrm{hyt}} - \mathrm{GRZ}) > 0$ and $ \mathrm{GRZ} = 0$ if $(\ce{P}_{\mathrm{hyt}} - \mathrm{GRZ}) < 0$

Zooplankton grazing is regulated by a Monod like expression and a carrying capacity. Carrying capacity is the optimum population size that a given habitat can support indefinitely under a given set of environmental conditions.

:::{math}
(12) = \mathrm{GRZ} \quad [\text{(mg biomass)/(l d)}]
:::

:::{math}
\begin{gathered}
\frac{d\mathrm{PS}}{dt} = (1) - (2) + (6) - (3) + (11) = \text{(same as in the model 3)} \\
= (\ce{P}_{\mathrm{in}} - \mathrm{PS}) \times Q/V + R_{\mathrm{rel,d}} \times \ce{P}_{\mathrm{det}} - \mu_{\mathrm{max}} I_{\mathrm{lim}} \ce{P}_{\mathrm{lim}} \times k1 \times \ce{P}_{\mathrm{hyt}} + R_{\mathrm{rel,s}} \times \ce{P}_{\mathrm{sed}} / D \quad [\text{(mg P)/(l d)}]
\end{gathered}
:::

:::{math}
\begin{gathered}
\frac{d\mathrm{\ce{P}_{\mathrm{hyt}}}}{dt} = (3) - (5) - (4) - (10) - (12) \\
= (\mu_{\mathrm{max}} I_{\mathrm{lim}} \ce{P}_{\mathrm{lim}} - R_{\mathrm{det,a}} - Q/V - R_{\mathrm{sed,a}}) \ce{P}_{\mathrm{hyt}} - \mathrm{GRZ} \quad [\text{(mg biomass)/(l d)}]
\end{gathered}
:::

:::{math}
\begin{gathered}
\frac{d\ce{P}_{\mathrm{det}}}{dt} = (5) - (6) - (8) - (9) + (13) \\
= (R_{\mathrm{det,a}} \times k1 \times \ce{P}_{\mathrm{hyt}}) - (R_{\mathrm{rel,d}} + Q/V + R_{\mathrm{sed,d}}) \ce{P}_{\mathrm{det}} + R_{\mathrm{det,z}} \times \mathrm{Zoo} \times k1 + \mathrm{GRZ} \times (1 - Y) k1 \quad [\text{(mg P)/(l d)}]
\end{gathered}
:::

(13) Here $Y$ is an efficiency of zooplankton. Only a part of the consumed uptake/food is assimilated for the growth and activity. In order to produce one unit of zooplankton maybe 5 units of phytoplankton are needed. This represents a yield, $Y$. For example, for a phytoplankton growth we assumed that all soluble phosphorus has been assimilated. Further, the grazed phytoplankton biomass that is not assimilated by zooplankton $(1 - Y)$ is transferred to the detritus pool (expressed as $\mathrm{GRZ} × (1 - Y) k1$) plus dead zooplankton is transferred as well (expressed as $R_{\mathrm{det,z}} \times \mathrm{Zoo} \times k1$). So, in total the process can be written as:

:::{math}
(13) = R_{\mathrm{det,z}} \times \mathrm{Zoo} \times k1 + \mathrm{GRZ} \times (1 - Y) k1
:::

:::{math}
\begin{gathered}
\frac{d\ce{P}_{\mathrm{sed}}}{dt} = (9) + (10) + (14) - (11) \\
= (R_{\mathrm{sed,d}} \times \ce{P}_{\mathrm{det}} + R_{\mathrm{sed,a}} \times \ce{P}_{\mathrm{hyt}} \times k1 + R_{\mathrm{sed,z}} \times \mathrm{Zoo} \times k1) D - R_{\mathrm{rel,s}} \times \ce{P}_{\mathrm{sed}} \quad [\text{(g P)/(m}^{2}\text{ d)}]
\end{gathered}
:::

where a zooplankton sedimentation can be written as:

:::{math}
(14) = R_{\mathrm{sed,z}} \times \mathrm{Zoo} \times k1 \times D \quad [\text{(g P)/(m}^{2}\text{ d)}]
:::

:::{math}
\text{or } = R_{\mathrm{sed,z}} \times \mathrm{Zoo} \quad [\text{(mg biomass)/(l d)}]
:::

:::{math}
\begin{gathered}
\frac{d\mathrm{Zoo}}{dt} = (12) - (13) - (14) - (15) \\
= \mathrm{GRZ} \times Y - (R_{\mathrm{det,z}} + R_{\mathrm{sed,z}} + Q/V) \mathrm{Zoo} \quad [\text{(mg biomass)/(l d)}]
\end{gathered}
:::

:::{figure} ../images/fig_graph_P_cycle_model_4.png
:label: fig_graph_P_cycle_model_4
:width: 600px
Results from the model 4.
:::

By introducing a zooplankton pool it can be seen that a phytoplankton concentration has decreased a little bit due to zooplankton grazing (see {ref}`fig_graph_P_cycle_model_4`). Comparing with a zooplankton response, one should expect a higher decrease in the algal pool (testing of internal logic of a model). This can be because only primary consumers (zooplankton) are included in the model. A detritus pool has increased due to inputs from a zooplankton pool. A sediment pool remained constant which can be explained by a small increase in a soluble P pool. One can also test the internal logic of a model (verification) by recording the response of the model to increased or decreased incoming P concentration, by increasing solar radiation etc.

(sec-5-2-4)=
## 5.2.4. Interactive applets / problems

(sec-5-2-4-1)=
### 5.2.4.1. Online applets (Simple Aquatic Phosphorus Model)

:::::{exercise}
:label: ex_5_1
Test the internal logic of the model conceptualized in {ref}`fig_diagram_P_cycle_simple` and discussed in {ref}`Section 5.2.3.1.. <sec-5-2-3-1>` by recording the response of the model to increased concentration of soluble phosphorus in the inflowing water ($\ce{P}_\mathrm{in}$) from 1 to 2 mg/l, to decreased $\ce{P}_\mathrm{in}$ from 1 to 0.2 mg/l, and to increased maximum solar radiation ($S_\mathrm{max}$) from 0.5 to 0.75. Using the online applet PAPS: Simple phosphorus box model[^PAPS_box_model] developed for the model shown in {ref}`fig_diagram_P_cycle_simple` discuss results for both state variables. Does the model react as expected after these changes? To which changes is model more sensitive?
:::::

:::::{exercise}
:label: ex_5_2

(ex_5_2_a)=
a) Test the internal logic of the model conceptualized in {ref}`fig_diagram_P_cycle_simple` and discussed in {ref}`Section 5.2.3.1. <sec-5-2-3-1>` by recording the response of the model after adding temperature influence on the remineralisation process. Since the level of the model complexity is low, use one of simple equations involving temperature like: $K_{t} = K_{20} \times KOT^{(T -20)}$, and $T = 10 \times (1 + \sin(0.008603 × (t - 30)))$, where $(t - 30)$ is 30 days delay between maximum in solar radiation and maximum in achieved temperature. Using the online applet (PAPS-T: Influence of temperature on eutrophication - simple model[^PAPS_T_box_model]) developed for the model shown in {ref}`fig_diagram_P_cycle_simple`, where temperature influence on remineralisation has been already included, discuss results for both state variables. Does the model react as expected after these changes? 

(ex_5_2_b)=
b) Now, analyze and discuss results using the online applet (PAPS-T-2: Influence of temperature on eutrophication improvement of simple model[^PAPS_T_2_box_model]) for the model where temperature influence (the same equations like in {ref}`Ex. 5.2 a)<ex_5_2_a>`) has been introduced on both processes, remineralisation and on photosynthesis. How does the model react on these changes? Compare these results with the results from the initial state of the model from {ref}`ex_5_1`, and discuss them.
:::::

:::::{exercise}
:label: ex_5_3
Describe actions that one should take in order to prevent eutrophication of lakes, but also describe actions for restoration of already eutrophied lake.
:::::

(sec-5-2-4-2)=
### 5.2.4.2. Online applets (eutrophication of the Baltic sea)

MARE (Marine Research on Eutrophication)[^MARE] is a multidisciplinary research program. The overall goal of MARE is to develop a decision-support system (DSS) to be used as a tool for developing and testing costeffective strategies to reduce eutrophication in the Baltic.


[^PAPS_box_model]: http://www.lwr.kth.se/Grundutbildning/AE2201/index.htm#topics
[^PAPS_T_box_model]: http://www.lwr.kth.se/Grundutbildning/AE2201/index.htm#topics
[^PAPS_T_2_box_model]: http://www.lwr.kth.se/Grundutbildning/AE2201/index.htm#topics
[^MARE]: http://www.mare.su.se/nest/