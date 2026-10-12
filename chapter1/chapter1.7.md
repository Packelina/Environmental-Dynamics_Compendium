---
numbering:
  enumerator: 1.%s
---

(sec-1-7)=
# 1.7. Contaminant transport pathways

In general, environmental systems such as the atmosphere, hydrosphere, and geosphere are all composed of a carrying fluid (air, water) and different chemical species/compounds (O,  N{sub}`2`, Cl, ...). The list of chemicals species that can be found in environmental systems is extremely long. A short list of the most commonly encountered species is shown in {ref}`tab_common_pollutants`.

:::{list-table} Some examples of the most commonly found pollutants in nature
:label: tab_common_pollutants
:header-rows: 0

* - Arsenic
  - Mercury
  - Trichloroethanes
* - DDT
  - Nickel
  - Trichloroethylene
* - Dichloroethylenes
  - Nitrates
  - Trichlorophenol
* - Ethylbenzene
  - Phenol
  - 
* - Hexachloroethane
  - Tetrachloroethanes
  - 
* - Hexachlorobenzene
  - Toluene
  -
:::
We wish to apply the universal balance law to a multi-species system such as a lake, a river or the atmosphere, taking into account the chemical reactions between species.

(sec-1-7-1)=
## 1.7.1. Transformation

(sec-1-7-1-1)=
### 1.7.1.1. Reversible reactions

The key step in modeling transport of reactive multiple substances (components) is to define the internal sink/source term, $S_k^{\mathrm{int}}$,or $s_k$. Here we shall discuss an important aspect of reactions, namely one of their dynamics, or *time-dependence*.

The dynamics of chemical reactions constitute what is referred to as *kinetics*. A chemical reaction can be expressed in general terms as follows,

:::{math}
\ce{a A + b B <=> c C + d D}
:::

where $a$, $b$, $c$ and $d$ are the *stoichiometric* coefficients, i.e., the number of moles (or mass) of the particular species (or compound). The compounds A and B are referred to as *reactants* and C and D are referred to as *products*. Since overall mass in the reaction[^mass-conservation] is conserved, we have the relationship $a + b = c + d$.

We define the rate of the forward reaction as $k_\mathrm{f} [\mathrm{A}]^a [\mathrm{B}]^b$ and the rate of the reverse reaction as $k_\mathrm{r} [\mathrm{C}]^c [\mathrm{D}]^d$. We see that the kinetics of a chemical reaction is proportional to the product of concentration (or activity) taken to the power of the stoichiometric coefficients. The proportionality constants ($k_\mathrm{f}$ and $k_\mathrm{r}$), also referred to as *rate constants*, depend mostly on the temperature. It has been found that at different temperatures $T$, $\ln(k)$ decreases linearly as a function of $1/T$. The tangent of this function is constant, and equal to $-E_{\mathrm{act}}/R$ where $E_{\mathrm{act}}$ is the *activation energy* with units [J/mol]<!-- CHANGE: mole -->, i.e., the energy that is required to activate a reaction, and $R = 8.314$ J/(mol K) is the universal gas constant. Hence, the general dependency of the rate constant $k$ is

:::{math}
\ln(k) = -\frac{E_{\mathrm{act}}}{R \, T}
:::

Most chemical reactions in nature are reversible. Instead of having compounds that are completely depleted by reacting with other compounds, in general they reach an equilibrium state, also called steady state.

As an example, consider two substances (species) A and B, where the reversible reaction between them is noted as $\mathrm{A} \rightleftharpoons \mathrm{B}$ and the two rate constants are defined as $k_\mathrm{f}$ and $k_\mathrm{r}$ for the forward and reverse reaction, respectively.

The governing system of equations is the following

:::{math}
[\mathrm{A}] + [\mathrm{B}] = C_\mathrm{T} = \mathrm{Constant}
:::

:::{math}
\frac{d[\mathrm{A}]}{dt} = -k_{\mathrm{f}}[\mathrm{A}] + k_{\mathrm{r}}[\mathrm{B}]
:::

:::{math}
\frac{d[\mathrm{B}]}{dt} = -k_{\mathrm{r}}[\mathrm{B}] + k_{\mathrm{f}}[\mathrm{A}]
:::

The solution can easily be found as

:::{math}
\mathrm{A} = \mathrm{A}_0 e^{-(k_{\mathrm{f}} + k_{\mathrm{r}})t} + \frac{k_{\mathrm{r}} C_{\mathrm{T}}}{k_{\mathrm{f}} + k_{\mathrm{r}}} (1 - e^{-(k_{\mathrm{r}} + k_{\mathrm{f}})t})
:::

:::{math}
\mathrm{B} = C_{\mathrm{T}} - \mathrm{A}
:::

We observe that after a long period of time, the function $[\mathrm{A}](t)$ and $[\mathrm{B}](t)$ tend asymptotically to some constants $[\hat{\mathrm{A}}]$ and $[\hat{\mathrm{B}}]$. At equilibrium ($d[\mathrm{A}]/dt = d[\mathrm{B}]/dt = 0$), and we have the equilibrium constant

:::{math}
K_{\mathrm{eq}} \equiv \frac{k_{\mathrm{f}}}{k_{\mathrm{r}}} = \frac{[\hat{\mathrm{A}}]}{[\hat{\mathrm{B}}]}
:::

where

:::{math}
[\hat{\mathrm{A}}] = \frac{k_{\mathrm{r}} C_{\mathrm{T}}}{k_{\mathrm{f}} + k_{\mathrm{r}}}
:::

:::{math}
[\hat{\mathrm{B}}] = C_{\mathrm{T}} - [\hat{\mathrm{A}}]
:::

If we know the forward and reverse constants $k_{\mathrm{f}}$ and $k_{\mathrm{r}}$ of a reaction, then we can obtain the equilibrium constant $K_{\mathrm{eq}}$. Equilibrium is reached asymptotically, i.e., for sufficiently long time relative to the value of rate constants. At equilibrium, we have

:::{math}
k_{\mathrm{f}}[\mathrm{A}]^a[\mathrm{B}]^b = k_{\mathrm{r}}[\mathrm{C}]^c[\mathrm{D}]^d
:::

which can be rewritten as follows

:::{math}
K_{\mathrm{eq}} = \frac{k_{\mathrm{f}}}{k_{\mathrm{r}}} = \frac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b}
:::

This is a well-known expression from equilibrium chemistry, referred to as *law of mass action*.

(sec-1-7-1-2)=
### 1.7.1.2. Irreversible transformation: Degradation and decay

We focus our attention here on a few typical irreversible reactions between one and two compounds, $\ce{A -> B}$ or $\ce{A + B -> C}$; another example is a decay chain $\ce{A -> B -> C ->}$ etc. (mother $\rightarrow$ daughter $\rightarrow$ granddaughter $\rightarrow$ etc.). For organic pollutants, degradation is the key mechanism of removal. It involves microorganisms and relatively complex transformation mechanisms. In many practical cases, however, degradation is modeled as first-order decay.

(sec-1-7-1-3)=
### 1.7.1.3. Zero-order reaction

Some chemical reactions do not depend on the concentration of the reactant $[\mathrm{A}]$ but on other limiting factors, such as the available solid surface onto which the reactant can be adsorbed. Then, the rate is given by

:::{math}
\frac{d[\mathrm{A}]}{dt} = -k_0
:::

which is referred to as zero-order reaction. The zero-order solution is $[\mathrm{A}] = [\mathrm{A}]_0 \pm k_{0} t$, where $[\mathrm{A}]_0$ is the concentration of the reactant at $t = 0$.

(sec-1-7-1-4)=
### 1.7.1.4. First order

If the rate constant is $k_1$, then by definition of the forward rate, we can write

:::{math}
\frac{d[\mathrm{A}]}{dt} = -k_{1}[\mathrm{A}]
:::

which is the most common decay or degradation model. Note that the exponent of $[\mathrm{A}]$ on the right hand side is 1, which is why these kinds of reactions are called *first-order* reactions. The first-order reaction has the solution $[\mathrm{A}] = [\mathrm{A}]_0 \exp(-k_{1} t)$.

(sec-1-7-1-5)=
### 1.7.1.5. Second order

If the rate constant is $k_2$, then the governing reaction reads

:::{math}
\frac{d[\mathrm{A}]}{dt} = -k_{2}[\mathrm{A}][\mathrm{B}]
:::

Instead of $\ce{A + B -> C}$, we can pose $\mathrm{B} = \mathrm{A}$ and obtain $\ce{A + A -> D}$. The governing equation becomes

:::{math}
\frac{d[\mathrm{A}]}{dt} = -k_{2}[\mathrm{A}]^2
:::

In both cases, the right hand side contains the product of two concentrations and therefore these reactions are referred to as *second order*.

For the second-order reaction (a *non-linear* ODE), the solution for a single reactant $(\ce{A + A -> B})$  can be written as $[\mathrm{A}] = 1/(k_{2}t + [\mathrm{A}]_{0}^{-1})$, but for two reactants $\ce{A + B -> C}$ we have two unknowns, and we need a second equation. The stoichiometric relation between the species A and B gives us $[\mathrm{B}] = [\mathrm{B}]_{0} - ([\mathrm{A}]_{0} - [\mathrm{A}])$. The term $([\mathrm{A}]_{0} - [\mathrm{A}])$ is equal to the amount of reactant B that has been consumed by reaction with A. Finally, we obtain the following equation for $[\mathrm{A}]$:

:::{math}
\frac{d[\mathrm{A}]}{dt} = -k_{2}([\mathrm{A}][\mathrm{B}]_{0} - [\mathrm{A}][\mathrm{A}]_{0} + [\mathrm{A}]^2)
:::

Using separation of variables and integration tables, we obtain the solution,

:::{math}
\ln \frac{[\mathrm{A}]}{[\mathrm{B}]} = \ln \frac{[\mathrm{A}]_0}{[\mathrm{B}]_0} - k_2([\mathrm{B}]_0 - [\mathrm{A}]_0)t
:::

(sec-1-7-2)=
## 1.7.2. Multi-component systems

Let us consider a system that contains $N_{\mathrm{s}}$ chemical species that are all mixed in a 0-D system (a batch reactor or a continuously stirred flow reactor). The universal balance law is valid for each individual species (component). In case the reactor volume is constant (time-independent), the mass balance can be written for a given species (component) $k$ (e.g., an organic toxic substance, a nutrient, or a metal)

:::{math}
:label: eq_reactor_single_species_blw
\frac{dM_k}{dt} = S_k(M_1, M_2, M_3, \dots, M_{N_{\mathrm{s}}}, t)
:::

where $M_k$ is the total mass contained in the reactor volume $V$. Note that since the volume is assumed known and fixed, we can easily transform the mass $M_k$ to concentration as $C_{k} \equiv M_{k}/V$. Mass can be expressed either as mass in SI units, or as a number of constituent particles (molecules, ions), i.e., in moles. If we consider moles per unit volume, a notation $M$ is commonly used in chemistry with dimensions [mol/liter]; the "liter" (10{sup}`-3` m{sup}`3`) is of the fluid containing the chemical species. Clearly, if we know what kind of atoms/molecules are in solution, we can always convert $M$ to mass per volume, by multiplying $M$ by the number of atoms/molecules in one mole (this is Avogadros number = 6.023 $\cdot$ 10{sup}`23`) times the atomic/molecular weight of a single atom or molecule, to obtain the mass per unit volume of solution for a given species.

If we have $N_{\mathrm{s}}$ different components (species), then the relation in Eq. {ref}`eq_reactor_single_species_blw` represents a system of $N_{\mathrm{s}}$ equations with $2N_{\mathrm{s}}$ unknowns ($M$ and $S$ for each species). So, we need at least $N_{\mathrm{s}}$ additional equations to be able to solve the system. These extra equations are called constitutive relationships. They describe how the unknown functions $S_k$ are related with the variables $M_k$. Usually, these relations are very dependent of the system under consideration; nevertheless, we can write general relationships that apply to most environmental systems.

(sec-1-7-2-1)=
### 1.7.2.1. Batch

In chemistry, we often use a *batch reactor*. It is a closed system (e.g., a test tube or a closed recipient) with completely mixed conditions where chemical reactions take place. Conceptually, it can be regarded as a 0-dimensional box, i.e., a mathematical point without internal structure. In other words, we assume that all physical and chemicals variables, such as concentrations, temperature, etc., are homogeneous, i.e., they are constant in space (but not necessarily in time, because we expect some dynamics of the system). Since the 0-D batch reactor is a closed system ({ref}`fig_batch_reactor`), we always have $S^{\mathrm{ext}} = 0$. In the case of a batch reactor, we require the external sink and source terms to be zero, i.e., $J^{\mathrm{in}} = J^{\mathrm{out}} = 0$. Note that by definition the case $J^{\mathrm{in}} = J^{\mathrm{out}}$ is not a batch reactor.

The balance law (Eq. {ref}`eq_blw_integral`) simplifies to

:::{math}
\frac{d\Phi}{dt} = S^{\mathrm{int}}
:::

Consequently, for a batch reactor all the dynamics are controlled by the internal source and sink terms. The condition of steady state (equilibrium) is obtained as

:::{math}
S^{\mathrm{int}} = 0
:::

:::{figure} ../images/fig_batch_reactor.png
:label: fig_batch_reactor
:width: 100px
A closed batch reactor is an isolated system at constant temperature and pressure where concentrations are measured versus time.
:::

For multiple substances (species), we write the balance law (Eq. {ref}`eq_reactor_single_species_blw`) for a batch reactor as

:::{math}
:label: eq_reactor_multiple_species_blw
\frac{dM_k}{dt} = S_k^{\mathrm{int}}(M_{1}, M_{2}, M_{3}, \dots, M_{N_{\mathrm{s}}}, t)
:::

where $k=1,...,N_{\mathrm{s}}$. In Eq. {ref}`eq_reactor_multiple_species_blw`, we allow for possible explicit dependence on time, if, for instance, the reaction parameters are time-dependent. Eq. {ref}`eq_reactor_multiple_species_blw` captures changes in the system of component masses due to ongoing reactions. Once the system reaches a steady state, we have $dM_{k}/dt=0$, whereby

:::{math}
S_k^{\mathrm{int}}(M_{1}, M_{2}, M_{3}, \dots, M_{N_{\mathrm{s}}}) = 0
:::

which is a system of $N_{\mathrm{s}}$ in general non-linear, algebraic equations. If the parameters (equilibrium constants) of the constitutive functions $S_k$ are given, then this system can be solved to yield $M_{1}, M_{2}, M_{3}, ..., M_N$. Such computations are routinely done in equilibrium chemistry.

(sec-1-7-2-2)=
### 1.7.2.2. Flow reactor

A flow reactor is a generalization of the batch reactor, by allowing through-flow where the contents are completely mixed. If we consider a number of reactants in a flow reactor, we now have the possibility to influence the reactions by controlling the flow. This was not possible in a batch reactor, were we mixed the reactants (species, components) and then basically waited for the outcome.

For a flow reactor, we have for species $k$

:::{math}
S_{k}^{\mathrm{ext}} \equiv J_{k}^{\mathrm{in}} - J_{k}^{\mathrm{out}}
:::

where $J_{k}^{\mathrm{in}} \neq 0$ and $J_{k}^{\mathrm{out}} \neq 0$ are the inflow and outflow of species $k$. Internal sources/sinks are due to the (bio)chemical reactions which transform species. The general equation for sources/sinks terms associated with each species reads

:::{math}
S_{k} = J_{k}^{\mathrm{in}} - J_{k}^{\mathrm{out}} + S_{k}^{\mathrm{int}}
:::

We write the full set of equations:

:::{math}
\frac{dM_1}{dt} = J_{1}^{\mathrm{in}} - J_{1}^{\mathrm{out}} + S_{1}^{\mathrm{int}}(M_{1}, M_{2}, ...., M_{N_{\mathrm{s}}})
:::

:::{math}
\frac{dM_2}{dt} = J_{2}^{\mathrm{in}} - J_{2}^{\mathrm{out}} + S_{2}^{\mathrm{int}}(M_{1}, M_{2}, ...., M_{N_{\mathrm{s}}})
:::

:::{math}
\frac{dM_3}{dt} = J_{3}^{\mathrm{in}} - J_{3}^{\mathrm{out}} + S_{3}^{\mathrm{int}}(M_{1}, M_{2}, ...., M_{N_{\mathrm{s}}})
:::

:::{math}
:enumerated: false
\ldots \ \ldots \ \ldots
:::

:::{math}
\frac{dM_{N_{\mathrm{s}}}}{dt} = J_{N_{\mathrm{s}}}^{\mathrm{in}} - J_{N_{\mathrm{s}}}^{\mathrm{out}} + S_{N_{\mathrm{s}}}^{\mathrm{int}}(M_{1}, M_{2}, ...., M_{N_{\mathrm{s}}})
:::

Usually, $J_{k}^{\mathrm{in}}(t)$ is a control variable for species $k$, i.e., an input that we in some way specify.

In a general case, where both the reactor volume and flow rate can change in time, i.e., $V(t)$ and $Q(t)$, we write the balance equations in terms of the concentration, where $J_{k}^{\mathrm{out}} = C_{k} \times Q$. We get

:::{math}
\frac{dC_1}{dt} = J_{1}^{\mathrm{in}} - Q(t)C_{1} + S_{1}^{\mathrm{int}}(C_{1}, C_{2}, ...., C_{N_{\mathrm{s}}})
:::

:::{math}
\frac{dC_2}{dt} = J_{2}^{\mathrm{in}} - Q(t)C_2 + S_{2}^{\mathrm{int}}(C_{1}, C_{2}, ...., C_{N_{\mathrm{s}}})
:::

:::{math}
\frac{dC_3}{dt} = J_{3}^{\mathrm{in}} - Q(t)C_3 + S_{3}^{\mathrm{int}}(C_{1}, C_{2}, ...., C_{N_{\mathrm{s}}})
:::

:::{math}
:enumerated: false
\ldots \ \ldots \ \ldots
:::

:::{math}
\frac{dC_{N_{\mathrm{s}}}}{dt} = J_{N_{\mathrm{s}}}^{\mathrm{in}} - Q(t)C_{N_{\mathrm{s}}} + S_{N_{\mathrm{s}}}^{\mathrm{int}}(C_{1}, C_{2}, ...., C_{N_{\mathrm{s}}})
:::

since $J_{k}^{\mathrm{out}} = Q(t) C_{k}(t)$. Note that in this case the sink/source terms $S_k$ are defined as mass per unit volume per time.

(sec-1-7-3)=
## 1.7.3. Multi-dimensional transport

We now consider multiple substances in a 1-D distributed system and introduce the concentration for species $k$ as $\varphi \equiv C_k$ with dimensions [M/L{sup}`3`]. The flux in this case is $j_k$ and sink/source $s_k$ for species $k$. The universal balance law then gives

:::{math}
:label: eq_multi_transport_multiple_species_blw
\frac{\partial C_k}{\partial t} + \frac{\partial j_k}{\partial x} = s_{k}(C_{1}, C_{2}, C_{3}, \dots, C_{N_{\mathrm{s}}})
:::

where $k = 1, N_{\mathrm{s}}$; thus we have a set of $N_{\mathrm{s}}$ coupled and generally non-linear partial differential equations.

In Eq. {ref}`eq_multi_transport_multiple_species_blw` we have $3N_{\mathrm{s}}$ unknowns, $C_k$, $j_k$ and $s_k$, thus we need to introduce additional $2N_{\mathrm{s}}$ equations. First, we postulate

:::{math}
j_{k} \equiv j_{k}^{\mathrm{adv}} + j_{k}^{\mathrm{disp}}
:::

The component $j_{k}^{\mathrm{adv}}$ is the *advective* flux of species $k$, equal to

:::{math}
j_{k}^{\mathrm{adv}} = v C_k
:::

The component $j_{k}^{\mathrm{disp}}$ refers to the *dispersive* flux of species $k$. As noted earlier, dispersion arises in all types of environmental flows, and is assumed in the form (Fick's first law in one dimension)

:::{math}
j_{k}^{\mathrm{disp}} = -D \frac{\partial C_k}{\partial x}
:::

where $D$ is the coefficient of dispersion, assumed here identical for all species. The universal distributed balance law (Eq. {ref}`eq_blw_1D`) gives us the transport equation for component $k$ (in one dimension)

:::{math}
\frac{\partial C_k}{\partial t} + v \frac{\partial C_k}{\partial x} - D \frac{\partial^{2} C_k}{\partial x^2} = s_{k}(C_{1}, C_{2}, C_{3}, \dots, C_{N_{\mathrm{s}}})
:::

In three dimensions, we have Fick's law given by

:::{math}
\mathbf{j}_k^{\mathrm{disp}} = -\mathbf{D} \cdot \nabla C_k
:::

and the following continuity equation for component $k$:

:::{math}
:label: eq_ade_multiple_components_blw
\frac{\partial C_k}{\partial t} + v_{i} \frac{\partial C_k}{\partial x_i} - D_{ij} \frac{\partial}{\partial x_i} \left( \frac{\partial C_k}{\partial x_j} \right) = s_{k}(C_{1}, C_{2}, C_{3}, \dots, C_{N_{\mathrm{s}}})
:::

where $D_{ij}$ is the dispersion tensor and $i, j = 1, 2, 3$ refer to the three Cartesian coordinates $x, y, z$ respectively.

The above Eq. {ref}`eq_ade_multiple_components_blw` is referred to either as the *convection-diffusion*, or *advection-dispersion* equation for multiple components, or species. This equation has been obtained assuming that the dispersion coefficient $D$ is constant in space, and the same for all components $k$. Again, we assume in Eq. {ref}`eq_ade_multiple_components_blw` the carrier fluid to be incompressible such that $\nabla \mathbf{v} = 0$ holds.

The advection-dispersion-reaction equation, with constants coefficients, reads in 3-D:

:::{math}
\frac{\partial C_k}{\partial t} + \left[ v_{x} \frac{\partial C_k}{\partial x} + v_{y} \frac{\partial C_k}{\partial y} + v_{z} \frac{\partial C_k}{\partial z} \right] - \left[ D_{x} \frac{\partial^{2} C_k}{\partial x^2} + D_{y} \frac{\partial^{2} C_k}{\partial y^2} + D_{z} \frac{\partial^{2} C_k}{\partial z^2} \right] = s_k
:::

where it is understood that $s_k$ is a function of the component concentrations $C_{1}, C_{2}, ..., C_{N_{\mathrm{s}}}$, i.e., $s_k = s_{k}(C_{1}, C_{2}, ..., C_{N_{\mathrm{s}}})$. Note that $D_x \equiv D_{11}, D_y \equiv D_{22}, D_z \equiv D_{33}$, and $D_{ij} \equiv 0 \ (i \neq j)$.

(sec-1-7-4)=
## 1.7.4. Retention of contaminants

In most cases, transport pathways of pollutants involve two phases. In streams, for instance, the water and the sediment of the riverbed are in close contact, with fluid and solute exchange constantly taking place. In a porous medium (e.g., groundwater), the solid and fluid phases are also interrelated and a solute is constantly exchanged between them. In fact, a typical aquifer is viewed as a medium with a complex structure of mobile water pathways and an equally complex structure of immobile water associated with grain surfaces and intra-granular volumes. In both cases, a contaminant is transported by a flow where an immobile phase is present. The contaminant then "partitions" into both phases, either due to chemical forces (sorption, e.g., ion exchange) or physical forces (diffusion gradients). The most important consequence of this partitioning (or mass transfer) is *retention*, whereby the movement of a contaminant is delayed ("retarded") relative to the movement of the water; this retardation can be insignificant or very large, depending on the contaminant and medium of interest.

Let a contaminant A be present in a flow that is in contact with an immobile phase (e.g., a stream or an aquifer). The contaminant will partition into two fractions: one associated with the mobile fluid with a concentration $C_{\mathrm{A}}$ and one associated with the immobile fluid; we denote the latter as $C_{\mathrm{A}^{*}}$, i.e., we denote the immobilized contaminant of A as A{sup}`*` (both concentrations are defined per unit bulk volume). The formal expression of exchange is

:::{math}
\ce{A <-> A^*}
:::

i.e., analogous to what was given previously for two solutes, $\ce{A <-> B}$.

The advection-dispersion transport equations (1-D) for the two components A and A{sup}`*` (solutes) are

:::{math}
:label: eq_ade_two_components_1D_1
\frac{\partial C_{\mathrm{A}}}{\partial t} = -U \frac{\partial C_{\mathrm{A}}}{\partial x} + D \frac{\partial^2 C_{\mathrm{A}}}{\partial x^2} + s_{\mathrm{A}}(C_{\mathrm{A}}, C_{\mathrm{A}^*})
:::

:::{math}
:label: eq_ade_two_components_1D_2
\frac{\partial C_{\mathrm{A}^*}}{\partial t} = s_{\mathrm{A}^*}(C_{\mathrm{A}}, C_{\mathrm{A}^*})
:::

Note that all the "mobile" terms (advection and dispersion) for the immobile contaminant $C_{\mathrm{A}^{*}}$ are zero.

Mass balance requires

:::{math}
s_{\mathrm{A}}(C_{\mathrm{A}}, C_{\mathrm{A}^*}) = -s_{\mathrm{A}^*}(C_{\mathrm{A}}, C_{\mathrm{A}^*})
:::

Assuming a first-order exchange process, we have

:::{math}
s_{\mathrm{A}} = -k_{\mathrm{f}} C_{\mathrm{A}} + k_{\mathrm{r}} C_{\mathrm{A}^*} \quad ; \quad s_{\mathrm{A}^*} = k_{\mathrm{f}} C_{\mathrm{A}} - k_{\mathrm{r}} C_{\mathrm{A}^*}
:::

where, as before, $k_{\mathrm{f}}$ is the forward rate coefficient and $k_{\mathrm{r}}$ is a reverse rate coefficient. We now write

:::{math}
:label: eq_ade_retention_blw
\frac{\partial C_{\mathrm{A}}}{\partial t} + U \frac{\partial C_{\mathrm{A}}}{\partial x} - D \frac{\partial^2 C_{\mathrm{A}}}{\partial x^2} = - \frac{\partial C_{\mathrm{A}^*}}{\partial t}
:::

For equilibrium conditions (reached for sufficiently long time), we have

:::{math}
:label: eq_retention_equilibrium_concentration
C_{\mathrm{A}^*} = K_{\mathrm{d}} C_{\mathrm{A}}
:::

where $K_{\mathrm{d}}$ is a dimensionless partitioning (distribution) coefficient, with $K_{\mathrm{d}} = k_{\mathrm{f}}/k_{\mathrm{r}}$. Note that we can write $K_{\mathrm{d}} = k_{\mathrm{f}}/k_{\mathrm{r}}$ irrespective of whether equilibrium is reached or not. In fact, it is common to specify the first-order retention with two parameters: the distribution coefficient $K_{\mathrm{d}}$, and the reverse kinetic rate $k \equiv k_{\mathrm{r}}$ (referred to simply as the "kinetic rate").

Substituting Eq. {ref}`eq_retention_equilibrium_concentration` into Eq. {ref}`eq_ade_retention_blw` we get, for equilibrium conditions:

:::{math}
:label: eq_ade_retention_equilibrium
R \frac{\partial C}{\partial t} + U \frac{\partial C}{\partial x} - D \frac{\partial^2 C}{\partial x^2} = 0
:::

where

:::{math}
R \equiv 1 + K_{\mathrm{d}}
:::

is the retardation coefficient, and we have omitted index "A" for simplicity.

Eq. {ref}`eq_ade_retention_equilibrium` is a common transport model for contaminants subject to retention. The retardation coefficient is a direct measure of retention. Rewriting Eq. {ref}`eq_ade_retention_equilibrium` as

:::{math}
\frac{\partial C}{\partial t} + \frac{U}{R} \frac{\partial C}{\partial x} - \frac{D}{R} \frac{\partial^2 C}{\partial x^2} = 0
:::

we see that the mean contaminant velocity is "reduced" by a factor $R$, relative to the velocity of the water. Thus a contaminant with increasing $K_{\mathrm{d}}$ (or $R$), due to its chemical properties, is transported at a slower rate.

Finally, a note on the partitioning coefficient $K_{\mathrm{d}}$. The way we have written the distribution (partitioning) coefficient $K_{\mathrm{d}}$, it is dimensionless, which is suitable for transport modeling. However, in the laboratory, we typically measure $K_{\mathrm{d}}'$ with dimensions [L{sup}`3`/M] and the equilibrium relationship is obtained from the linear sorption isotherm, which is written as

:::{math}
:label: eq_linear_sorption_isotherm
C^{*\prime} = K_{\mathrm{d}}' C'
:::

where $C^{*\prime}$ is the solute concentration on the solid phase per unit mass of solid phase, i.e., $C^{*\prime}$ is dimensionless, and $C'$ is the solute concentration in the aqueous (mobile) phase per unit volume of water (not bulk). To obtain an equilibrium equation defined per unit bulk volume (i.e., corresponding to equation Eq. {ref}`eq_retention_equilibrium_concentration`), we multiply Eq. {ref}`eq_linear_sorption_isotherm` by $\rho(1-\theta)$ where $\rho$ is the solid density and $(1-\theta)$ is the solid volume (here, $\theta$ is the normalised porosity, i.e., the fraction of void space in the solid volume). The left-hand side yields the solute concentration on the solid phase defined per bulk volume as

:::{math}
C^* = C^{*\prime} \rho (1 - \theta)
:::

Since the relationship between the concentration in the aqueous phase defined per unit volume of water ($C'$) and defined per bulk volume $C$ is

:::{math}
C = C' \theta
:::

we finally have the relationship between $K_{\mathrm{d}}$ and  $K_{\mathrm{d}}'$ as

:::{math}
K_{\mathrm{d}} = \frac{K_{\mathrm{d}}' \rho(1-\theta)}{\theta}
:::

For organic pollutants it is common to express $K_{\mathrm{d}}'$ as a function of the organic carbon content as

:::{math}
K_{\mathrm{d}}' = f_{\mathrm{oc}} K_{\mathrm{oc}}
:::

where $f_{\mathrm{oc}}$ is the decimal fraction of organic carbon present in the particulate matter [M/M], and $K_{\mathrm{oc}}$ is the organic carbon normalized partition coefficient:

:::{math}
K_{\mathrm{oc}} = \frac{\text{mg solute/kg organic carbon}}{\text{mg solute/L H}_2\text{O}}
:::

Empirical formulas have been established for relating $K_{\mathrm{oc}}$ and $K_{\mathrm{ow}}$, where $K_{\mathrm{ow}}$ is the octanol-water partition coefficient, which is relatively easy to determine in the laboratory. The empirical relationship we suggest here is the so-called Karickhoff equation:

:::{math}
\log(K_{\mathrm{oc}}) = \log(K_{\mathrm{ow}}) - 0.21
:::

In {ref}`tab_octanol_water_partition_coefficients`, we provide a list of  $\log(K_{\mathrm{ow}})$ values for some well known organic pollutants. With an estimate of the organic carbon content (depending on the porous material), we can determine $K_{\mathrm{d}}'$, and from there the dimensionless partition coefficient $K_{\mathrm{d}}$ used in the transport modeling.

(sec-1-7-5)=
## 1.7.5. Particle-facilitated Contaminant Transport

A more complicated situation is when three phases are present: one mobile (fluid) and other mobile (suspended particles or colloids) and one immobile; such a case is common in both groundwater and streams. A contaminant A now partitions into three components, A, A{sup}`*` and A{sup}`**`, where A{sup}`**` is the concentration on suspended mobile particles. Let us now consider equilibrium sorption between A and A{sup}`*`, as in the previous section. The governing transport equations are written (again in one dimension) as

:::{math}
R \frac{\partial C_{\mathrm{A}}}{\partial t} + U \frac{\partial C_{\mathrm{A}}}{\partial x} - D \frac{\partial^2 C_{\mathrm{A}}}{\partial x^2} = -\alpha_{\mathrm{f}} R_{\mathrm{c}} C_{\mathrm{A}} + \alpha_{\mathrm{r}} R_{\mathrm{c}} C_{\mathrm{A}^{**}}
:::

:::{math}
R \frac{\partial C_{\mathrm{A}^{**}}}{\partial t} + U \frac{\partial C_{\mathrm{A}^{**}}}{\partial x} - D \frac{\partial^2 C_{\mathrm{A}^{**}}}{\partial x^2} = \alpha_{\mathrm{f}} R_{\mathrm{c}} C_{\mathrm{A}} - \alpha_{\mathrm{r}} R_{\mathrm{c}} C_{\mathrm{A}^{**}} - \epsilon C_{\mathrm{A}^{**}}
:::

where $\alpha_{\mathrm{f}}$ is a forward rate and $\alpha_{\mathrm{r}}$ the reverse rate of contaminant transfer from the mobile fluid phase to the mobile particulate phase (colloids), $R_{\mathrm{c}}$ is a retardation coefficient for the colloids, and $\epsilon$ is a first-order filtration rate for the colloids.

(sec-1-7-6)=
## 1.7.6. Cases for further study

Here we summarize a few cases of single and coupled systems and processes that are of interest in applications, and are suggested for further study. We consider five cases that can be explored with the code TRANSPATH.

(sec-1-7-6-1)=
### 1.7.6.1. One flow reactor

:::{figure} ../images/fig_case1_single_reactor.png
:label: fig_case1_single_reactor
:width: 200px
Configuration sketch for single flow reactor.
:::

We write the governing mass balance equation as

:::{math}
:label: eq_single_flow_reactor_blw_1
V\frac{dC_{\mathrm{I}}}{dt} = Q_{0} C_{0}(t) - Q_{\mathrm{I}}C_{\mathrm{I}} - \lambda_{\mathrm{I}}C_{\mathrm{I}}V
:::

where $Q_0$ [L{sup}`3`/T] is the volumetric flow rate that is injecting a contaminant at a concentration $C_0(t)$ [M/L{sup}`3`] (which generally changes with time), $V$ [L{sup}`3`] is the volume of the reactor, $Q_{\mathrm{I}}$ [L{sup}`3`/T] is the volumetric flow rate with which the contaminant is leaving the reactor with the concentration  $C_{\mathrm{I}}(t)$ [M/L{sup}`3`]and $\lambda_{\mathrm{I}}$ [1/T] is a "removal" rate for the contaminant, e.g., irreversible binding to the sediment, or simply decay; the index "$\mathrm{I}$" denotes "system $\mathrm{I}$".

We can now write Eq. {ref}`eq_single_flow_reactor_blw_1` as

:::{math}
:label: eq_single_flow_reactor_blw_2
\frac{1}{\omega_{\mathrm{I}}}\frac{dJ_{\mathrm{I}}}{dt}=J_{0}(t)-J_{\mathrm{I}}-\lambda_{\mathrm{I}}\,J_{\mathrm{I}}\,\frac{1}{\omega_{\mathrm{I}}}
:::

where $\omega_{\mathrm{I}} = Q_{\mathrm{I}}/V = 1/\tau_{\text{ I}}$ [1/T] is the "turnover rate" in the reactor with $\tau_{\text{ I}} = V/Q_{\mathrm{I}}$ [T] being the water residence (turnover) time in the reactor, $J_{0}(t)$ [M/T] is the contaminant injection rate and $J_{\mathrm{I}}$ [M/T] is the contaminant discharge from the reactor.

We write Eq. {ref}`eq_single_flow_reactor_blw_2` as

:::{math}
\frac{dJ_{\mathrm{I}}}{dt} = \omega_{\mathrm{I}} J_{0}(t) - \omega_{\mathrm{I}} J_{\mathrm{I}} - \lambda_{\mathrm{I}} J_{\mathrm{I}}
:::

In the Laplace domain, the solution is

:::{math}
\hat{J}=\frac{\omega_{\mathrm{I}} \,\hat{J}_{0}}{\omega_{\mathrm{I}}+\lambda_{\mathrm{I}}+s}
:::

where ^ denotes the Laplace transform and $s$ is the Laplace transform variable.

We consider here a pulse injection whereby

:::{math}
J_{0}(t) = M_{0} \, \delta(t)
:::

where $M_0$ is the total injected mass of the contaminant and $\delta(t)$ [1/T] is the Dirac delta function, thus the Laplace transform of $J_{0} = M_{0}$. If contaminant injection takes place at the concentration $C_0$ and flow rate $Q_0$, then we have to assume a short time interval over which injection takes place, say $\Delta t_0$ [T]; then we have

:::{math}
M_0 = C_{0} Q_{0} \Delta t_{0}
:::

For a pulse injection, we write the Laplace transform solution

:::{math}
\hat{J} = \frac{\omega_{\mathrm{I}} M_0}{\omega_{\mathrm{I}} + \lambda_{\mathrm{I}} + s}
:::

(sec-1-7-6-2)=
### 1.7.6.2. Two flow reactors in series

:::{figure} ../images/fig_case2_two_reactors_series.png
:label: fig_case2_two_reactors_series
:width: 200px
Configuration sketch for two flow reactors.
:::

Here we consider two coupled systems ($\mathrm{I}$ and $\mathrm{II}$) where both are flow reactors. In system $\mathrm{II}$ we shall assume equilibrium sorption on the immobile phase (sediment or aquifer matrix), and also we shall allow for degradation/removal rates to be different in the mobile and immobile phases.

Here we write the governing equations directly for the discharge $J_{\mathrm{I}}$ and $J_{\mathrm{II}}$ as

:::{math}
:label: eq_two_flow_reactors_series_blw_1
\frac{dJ_{\mathrm{I}}}{dt} = \omega_{\mathrm{I}} J_{0}(t) - \omega_{\mathrm{I}} J_{\mathrm{I}} - \lambda_{\mathrm{I}} J_{\mathrm{I}}
:::

:::{math}
:label: eq_two_flow_reactors_series_blw_2
R\frac{dJ_{\mathrm{II}}}{dt} = \omega_{\mathrm{II}}J_{\mathrm{I}} - \omega_{\mathrm{II}}J_{\mathrm{II}} - (\lambda_{\mathrm{II}} + \lambda_{\mathrm{II}}^{*}K_{\mathrm{d}})J_{\mathrm{II}}
:::

where $\omega_{\mathrm{II}}=1/\tau_{\text{ II}}$ and $\tau_{\text{ II}}$ is the water residence time in system $\mathrm{II}$, $\lambda_{\mathrm{II}}$ is a decay rate in the mobile phase and $\lambda^{*}_{\mathrm{II}}$ a decay rate in the immobile phase of system $\mathrm{II}$, $K_{\mathrm{d}}$ the dimensionless partition coefficient in system $\mathrm{II}$ and $R = 1 + K_{\mathrm{d}}$ is the retardation coefficient. In Table {ref}`tab_biotransformation_rate_constants` the first-order decay rates $\lambda_{\mathrm{II}}$ for a number of well known organic pollutants are provided. The decay rate in the immobile phase in system $\mathrm{II}$, $\lambda^{*}_{\mathrm{II}}$, can typically be assumed to be 5-10 lower than the rate in the mobile phase, $\lambda_{\mathrm{II}}$.

The solution of the coupled system of equations (Eq. {ref}`eq_two_flow_reactors_series_blw_1`-Eq. {ref}`eq_two_flow_reactors_series_blw_2`) is obtained in the Laplace domain as

:::{math}
\hat{J}_{\mathrm{II}} = \left(\frac{\omega_{\mathrm{I}} \, \hat{J}_0}{\omega_{\mathrm{I}} + \lambda_{\mathrm{I}} + s}\right) \left[\frac{\omega_{\mathrm{II}}}{\omega_{\mathrm{II}} + (\lambda_{\mathrm{II}} + \lambda_{\mathrm{II}}^{*} K_{\mathrm{d}}) + s \, R}\right]
:::

(sec-1-7-6-3)=
### 1.7.6.3. One flow reactor and one-dimensional transport governed by advection-dispersion-retention-degradation

:::{figure} ../images/fig_case3_reactor_1d_transport.png
:label: fig_case3_reactor_1d_transport
:width: 300px
Configuration sketch for a flow reactor and a transport process.
:::

Here we consider coupling of two systems ($\mathrm{I}$ and $\mathrm{II}$) like in {ref}`Section 1.7.6.2 <sec-1-7-6-2>`, however, now system $\mathrm{II}$ is not a reactor but is a transport process governed by a one-dimensional advection-dispersion equation; system $\mathrm{I}$ is a flow reactor like in {ref}`Section 1.7.6.1 <sec-1-7-6-1>` and {ref}`Section 1.7.6.2 <sec-1-7-6-2>`.

The governing equations are

:::{math}
:label: eq_reactor_1D_transport_blw_1
\frac{dJ_{\mathrm{I}}}{dt} = \omega_{\mathrm{I}} J_{0}(t) - \omega_{\mathrm{I}} J_{\mathrm{I}} - \lambda_{\mathrm{I}} J_{\mathrm{I}}
:::

:::{math}
:label: eq_reactor_1D_transport_blw_2
R\frac{\partial J_{\mathrm{II}}}{\partial t} - U\frac{\partial J_{\mathrm{II}}}{\partial x} + D_{x} \frac{\partial^{2} J_{\mathrm{II}}}{\partial x^2} = -(\lambda_{\mathrm{II}} + \lambda_{\mathrm{II}}^{*} K_{\mathrm{d}}) J_{\mathrm{II}}
:::

where $\tau_{\text{ II}} = L/U$ is the water residence time in system $\mathrm{II}$, described by a one-dimensional advection-disperison-retention-decay equation; $U$ is the mean flow velocity and $L$ is the transport distance. $D_x$ is the longitudinal dispersion coefficient which can be expressed as $D_x = a_x U$ where $a_x$ [L] is the so-called longitudinal dispersivity. It can be shown that

:::{math}
\mathrm{CV}(\tau) = \sqrt{\frac{2a_x}{L}}
:::

where $\mathrm{CV}(\tau)$ is the coefficient of variation for the water residence time; our input will be specified as $\mathrm{CV}$ and $\tau_{\text{ II}}$.

In Eq. {ref}`eq_reactor_1D_transport_blw_2`, $J_{\mathrm{II}}$ is the contaminant discharge from system $\mathrm{II}$ into the accessible environment; if this contaminant discharge is extracted with a flow (e.g., pumping) rate $Q_{\mathrm{II}}$, then we can compute the concentration exiting system $\mathrm{II}$ as $C_{\mathrm{II}} = J_{\mathrm{II}}/Q_{\mathrm{II}}$.

The solution of Eq. {ref}`eq_reactor_1D_transport_blw_1`-Eq. {ref}`eq_reactor_1D_transport_blw_2` in the Laplace domain is

:::{math}
\hat{J}_{\mathrm{II}}(s) = \left(\frac{\omega_{\mathrm{I}} \, \hat{J}_0}{\omega_{\mathrm{I}} + \lambda_{\mathrm{I}} + s}\right) \, \exp\left[\mathcal{C}\sqrt{\mathcal{A}} - \mathcal{C} \, \left(\mathcal{A} + \hat{F}\right)^{1/2}\right]
:::

where

:::{math}
\mathcal{A} = \frac{1}{2\,\tau_{\text{ II}}\,\mathrm{CV}^2} \quad ; \quad \mathcal{C} = 2\,\tau_{\text{ II}}\,\sqrt{\mathcal{A}}
:::

For equilibrium sorption in system $\mathrm{II}$, the function $\hat{F}$ is defined as

:::{math}
:label: eq_reactor_1D_transport_function_f_1
\hat{F} = s R + \lambda_{\mathrm{II}} + \lambda_{\mathrm{II}}^{*} K_{\mathrm{d}}
:::

If the sorption/retention is non-equilibrium, governed by first-order kinetics, then it can be shown that the function $\hat{F}$ takes the form

:::{math}
:label: eq_reactor_1D_transport_function_f_2
\hat{F} = s + \lambda_{\mathrm{II}} + \frac{K_{\mathrm{d}} (s + \lambda_{\mathrm{II}}^{*}) k}{s + k + \lambda_{\mathrm{II}}^{*}}
:::

where $k$ [1/T] is the reverse (backward) kinetic rate. Note that for $k \rightarrow \infty$ (equilibrium), Eq. {ref}`eq_reactor_1D_transport_function_f_2` reduces to Eq. {ref}`eq_reactor_1D_transport_function_f_1 `.

(sec-1-7-6-4)=
### 1.7.6.4. Three flow reactors in series

:::{figure} ../images/fig_case4_three_reactors_series.png
:label: fig_case4_three_reactors_series
:width: 300px
Configuration sketch for three flow reactors.
:::

Here we consider the coupling of three systems ($\mathrm{I}$, $\mathrm{II}$ and $\mathrm{III}$), where all three are flow reactors. The solution for the contaminant discharge from system $\mathrm{III}$ is given in the Laplace domain as

:::{math}
\hat{J}_{\mathrm{III}} = \left(\frac{\omega_{\mathrm{I}} \, \hat{J}_{0}}{\omega_{\mathrm{I}} + \lambda_{\mathrm{I}} + s}\right) \left[\frac{\omega_{\mathrm{II}}}{\omega_{\mathrm{II}} + \lambda_{\mathrm{II}} + \lambda_{\mathrm{II}}^{*}K_{\mathrm{d}} + s \, R}\right] \left(\frac{\omega_{\mathrm{III}}}{\omega_{\mathrm{III}} + \lambda_{\mathrm{III}} + s}\right)
:::

where $\omega_{\mathrm{III}} = 1/\tau_{\text{ III}}$ and $\tau_{\text{ III}}$ is the water residence time in system $\mathrm{III}$, $\lambda_{\mathrm{III}}$ is a removal/decay rate (e.g., due to binding to the sediment in a lake).

(sec-1-7-6-5)=
### 1.7.6.5. One flow reactor, one-dimensional transport governed by advection-dispersion-retention-degradation and a second flow reactor

:::{figure} ../images/fig_case5_two_reactors_1d_transport.png
:label: fig_case5_two_reactors_1d_transport
:width: 300px
Configuration sketch for two reactors and a transport process.
:::

Here we consider three coupled systems $\mathrm{I}$, $\mathrm{II}$ and $\mathrm{III}$ as in {ref}`Section 1.7.6.4 <sec-1-7-6-4>`, however, now system $\mathrm{II}$ is a transport process governed by a one-dimensional advection-dispersion equation (as in {ref}`Section 1.7.6.3 <sec-1-7-6-3>`). The solution in the Laplace domain (obtained by using the solutions of the previous cases) is

:::{math}
\hat{J}_{\mathrm{III}}(s) = \left(\frac{\omega_{\mathrm{I}} \, \hat{J}_0}{\omega_{\mathrm{I}} + \lambda_{\mathrm{I}} + s}\right) \exp\left[\mathcal{C}\sqrt{\mathcal{A}} - \mathcal{C}\,\left(\mathcal{A} + \hat{F}\right)\right] \left(\frac{\omega_{\mathrm{III}}}{\omega_{\mathrm{III}} + \lambda_{\mathrm{III}} + s}\right)
:::

where $\hat{F}$ is given in Eq. {ref}`eq_reactor_1D_transport_function_f_1` or Eq. {ref}`eq_reactor_1D_transport_function_f_2`. All parameters have been defined in relation to previous cases.

(sec-1-7-6-6)=
### 1.7.6.6. Colloid-facilitated, one-dimensional contaminant transport

We simplify Eq. {ref}`eq_ade_two_components_1D_1`-Eq. {ref}`eq_ade_two_components_1D_2` as follows

:::{math}
:label: eq_ade_colloid_1D_transport_1
R\frac{\partial C}{\partial t} + U\frac{\partial C}{\partial x} - D_{x}\frac{\partial^{2} C}{\partial x^2} = -\alpha C - \lambda RC
:::

:::{math}
:label: eq_ade_colloid_1D_transport_2
\frac{\partial C^{*}}{\partial t} + U \frac{\partial C^{*}}{\partial x} - D_{x} \frac{\partial^{2} C^{*}}{\partial x^2} = \alpha C - \lambda C^{*}
:::

where $C$ corresponds to $C_{\mathrm{A}}$ and $C^*$ to $C_{\mathrm{A}^{**}}$, retardation and filtration of colloids are neglected ($R_{\mathrm{c}}=1$, $\epsilon=0$), and we only consider irreversible sorption of the contaminant on the colloids ($\alpha_{\mathrm{r}}=0$). Note that the mean flow velocity $U$ and dispersion coefficient $D_x$ are both assumed identical for the water and colloids. Also, in Eq. {ref}`eq_ade_colloid_1D_transport_1`-Eq. {ref}`eq_ade_colloid_1D_transport_2` we assume that the decay/degradation rate is the same in the mobile and immobile phases.


:::{table} Octanol/Water Partition Coefficients of Selected Organics, 298 K.
:label: tab_octanol_water_partition_coefficients
:class: merge-categories

| Chemical | $\log(K_{\mathrm{ow}})$ |
| :--- | :--- |
| **Pesticides** | |
| Carbofuran | 1.60 |
| DDT | 6.4 |
| Parathion | 3.81 |
| **PCBs** | |
| Aroclor 1248 | 5.75 - 6.11 |
| **Halogenated aliphatic hydrocarbons** | |
| Chloroform | 1.90 - 1.97 |
| **Halogenated ethers** | |
| 2-Chloroethyl vinyl ether | 1.28 |
| **Monocyclic aromatics** | |
| 2,4-Dimethylphenol | 2.42 - 2.50 |
| Pentachlorophenol | 5.01 |
| **Phthalate esters** | |
| Bis(2-ethylhexyl)phthalate | 8.73 |
| **Polycyclic aromatic hydrocarbons** | |
| Anthracene | 4.34 - 4.63 |
| Benzo[a]pyrene | 6.5 |
| **Nitrosamines and miscellaneous** | |
| Benzidine | 1.36 - 1.81 |
| Dimethyl nitrosamine | 0.06 |
:::

:::{table} Selected Biotransformation Rate Constants.
:label: tab_biotransformation_rate_constants
:class: merge-categories

| Chemical | Pseudo-First-Order Rate Constant Change, day{sup}`-1` | Estimated Second-Order Rate Constants, mL cell{sup}`-1` h{sup}`-1` |
| :--- | :--- | :--- |
| **Pesticides** | | |
| Carbofuran | 0.03 | 1 $\cdot$ 10{sup}`-8` |
| DDT | 0.0 - 0.10 | 3 $\cdot$ 10{sup}`-12` |
| Parathion | 0.0 - 0.12 | - |
| Dioxin TCDD | < 0.01 | 1 $\cdot$ 10{sup}`-10` |
| Atrazine | 0.02 - 0.03 | 1 $\cdot$ 10{sup}`-8` |
| Alachlor | 0.05 - 0.06 | 3 $\cdot$ 10{sup}`-8` |
| **PCBs** | | |
| Aroclor 1248 | 0.0 - 0.007 | 10{sup}`-9` - 10{sup}`-12` |
| **Halogenated aliphatic hydrocarbons** | | |
| Chloroform | 0.09 - 0.10 | 1 $\cdot$ 10{sup}`-10` |
| Carbon tetrachloride | | |
| **Halogenated ethers** | | |
| 2-Chloroethyl vinyl ether | 0.0 - 0.20 | 1 $\cdot$ 10{sup}`-10` |
| **Monocyclic aromatics** | | |
| 2,4-Dimethylphenol | 0.24 - 0.66 | 1 $\cdot$ 10{sup}`-7` |
| Pentachlorophenol | 0.00 - 33.6 | 3 $\cdot$ 10{sup}`-8` |
| Benzene 14 | 0.006 - 0.01 | 1 $\cdot$ 10{sup}`-7` |
| Toluene 14 | 0.01 - 0.019 | 1 $\cdot$ 10{sup}`-7` |
| Phenol | - | 3 $\cdot$ 10{sup}`-6` |
| **Phthalate esters** | | |
| Bis(2-ethylhexyl)phthalate | 0.00 - 0.14 | 1 $\cdot$ 10{sup}`-7` |
| **Polycyclic aromatic hydrocarbons** | | |
| Anthracene | 0.007 - 15.0 | 3 $\cdot$ 10{sup}`-9` |
| Benzo[a]pyrene | 0.0 - 0.075 | 3 $\cdot$ 10{sup}`-12` |
| **Nitrosamines and miscellaneous** | | |
| Benzidine | < 0.001 | 1 $\cdot$ 10{sup}`-10` |
| Dimethyl nitrosamine | < 0.001 | 3 $\cdot$ 10{sup}`-10` |
:::

[^mass-conservation]: This is applicable as long as we are considering non-radioactive, abiogenic, chemical reactions.