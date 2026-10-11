---
numbering:
  enumerator: 1.%s
---

(sec-1-2)=
# 1.2. Introducing the actors and setting the stage

Environmental subsystems such as the atmosphere, hydrosphere, biosphere, and technosphere (comprising all technological systems on Earth) constitute our common environmental spheres. These subsystems are related, and more or less influence each other. Boundaries and initial conditions between subsystems are generally approximated poorly or completely unknown. However, theoretical approaches and models based on balance laws and stochastic descriptions enable us, as engineers and scientists, to obtain reasonably accurate predictions and estimates of the trends and possible fluctuations in environmental systems.

Environmental problems confronting us today arise on a wide range of spatial scales. Planet Earth evolves in time with characteristic time scales that may differ by many orders of magnitude. In addition, the engineering problems in the environment may also span a wide range of temporal scales. The technosphere, on the other hand, like a giant organism follows the same conservation laws as any other physical system, and evolves with its own characteristic spatial and temporal scales. *Dynamics* is the key to understanding the past, current, and future states of our environment, and is a necessary condition for formulating effective and workable strategies for sustainable development. 

<!-- REVIEW: "Formatting of units and symbols" -->
(sec-1-2-1)=
## 1.2.1. Quantities and units
The basic quantities that characterize any physical system are as follows:
- **Mass** (say $M$) defined as quantity of matter; the SI unit is *kilogram* [kg]
- **Length** (say $l$) quantifies distance between two points in space; the SI unit is *meter* [m]. Cartesian spatial coordinates $x$, $y$, $z$ are defined as lengths.
- **Time** (say $t$) quantifies an interval between two events in a non-spatial continuum; the SI unit is *second* [sec], or [s].
- **Temperature** (say $T$) quantifies the degree of hotness or coldness of matter; the SI unit is *Kelvin* [K]

From the basic quantities, we have several *derived* quantities that we use to characterize physical systems:
- **Force** (say $F$) quantifies the capacity to do work or cause physical change; the SI unit is *Newton* [N], or [(kg m)/s{sup}`2`].
- **Pressure/Stress** (say $p$) quantifies the force applied uniformly over a specified surface, measured as force per unit area; the SI unit is *Pascal* [Pa], or [N/m{sup}`2`].
- **Stress** (say $\sigma$) quantifies applied force that tends to strain or deform a body; the SI unit is *Pascal* [Pa], or [N/m{sup}`2`].
- **Energy** (say $E$) quantifies the capacity of a physical system to do work; the SI unit is *Joule* [J], or [N m].
- **Power** (say $P$) quantifies the rate at which work is done expressed as amount of work per unit time; the SI unit is *Watt* [W] or [J/s].
- **Density/Concentration** (say $\rho$) quantifies matter per unit volume; the SI unit is [kg/m{sup}`3`].
- **Volume** (say $V$) quantifies amount of space occupied by a three-dimensional object or region of space; the SI unit is [m{sup}`3`], or *Liter* [10{sup}`-3` m{sup}`3`].
- **Velocity** (say $v$) is a vector quantity whose magnitude is a body's speed and whose direction is the body's direction of motion; the SI unit is [m/s].

In order to describe environmental change, we need to somehow relate the above quantities; this is done based on certain laws, or principles, which have been found universally valid. Change, or evolution, of a system is associated with both space and time. Thus we often express the above-derived quantities as functions of space and time. For a more rigorous and detailed definition of base units see for example <wiki:SI_base_unit>. 

(sec-1-2-2)=
## 1.2.2. System definition
In our context, *system* refers to a group of interacting, interrelated, or independent elements forming a complex entity that is physically or geometrically separated from the rest of the world. A system encompasses a restricted physical volume in space, which is referred to as its *domain*. Its *boundaries* provide the contact for interactions and exchanges with the *outside* world, i.e., with other, neighbouring systems. It is understood that a system will be specified, or defined, in an engineering sense, i.e., its particular definition depends on the environmental problem at hand; different problems will generally require different definitions (specifications) of a system.

There are three key aspects of systems, which we summarize as follows. 

(sec-1-2-2-1)=
### 1.2.2.1. Boundaries
The first step is to identify the physical or geometrical boundaries of our system. By *physical* we mean boundaries that are in some way "natural", or have some physical relevance. Some examples include say a subsurface impermeable layer as the bottom boundary of an aquifer, the groundwater surface as the upper boundary, a water-divide which defines the limits of a catchment; a river or the coastal line are other examples of physical boundaries. A *geometrical* boundary is arbitrary with respect to physical relevance, and is imposed for administrative, managerial, or practical reasons. Examples are a municipality, a region, or a country. A geometrical boundary is often specified simply to delimit a given domain, based on experience and expert judgment. It is not always trivial or obvious how to best define reasonable boundaries.

Boundaries are classified as either *open*, which means that both mass and energy can be exchanged through them, or *closed*, which means that only energy, but not mass, can be exchanged through them. A third category would be *isolated* systems that exchange neither mass nor energy; such systems, however, are an idealization and are not relevant from the environmental perspective. 

(sec-1-2-2-2)=
### 1.2.2.2. Properties
Based on the problem at hand, we identify a number of quantities (basic or derived, as listed above) that we use to characterize our system. We classify properties as *extensive*, which refers to properties that depend on mass (typical examples being mass and volume), or *intensive*, which are independent of the mass (typically temperature, velocity, density). In the environmental context, concentrations of different dissolved species (or to be more explicit: chemical substances) would be typical properties indicative of environmental quality.

System properties may be *homogeneous* in space, i.e., approximately the same everywhere (uniform), or *heterogeneous*, i.e., varying in space. Homogeneous systems do not have a spatial structure, whereas heterogeneous ones have a structure. An heterogeneous system may either be purely deterministic, then each property has a known value at each point of the spatial domain, or non-deterministic, and then each property is assigned to vary spatially in some fashion, according to inferred statistical variations. Often, the spatial structure of a system exhibits a combination of deterministic and statistical properties.

Another classification of system properties is in terms of *phases* (liquid, solid, gas). A system may be composed of a single phase (for instance, water as a single liquid phase when considering flow in streams), or two phases (for instance, groundwater flow which implies two phases, liquid/water and solid/grains), three phases (for instance, considering the water flow in soils, where we have gas/air, liquid/water and solid/grains). Other examples are transport of suspended particles/sediment in streams (two-phase), or oil flow in groundwater (three-phase system, with two immiscible liquids).

Related to phases are *components*, in a chemical/biological sense. The typical example is air, which is a single phase containing a mixture of components (oxygen, nitrogen, carbon dioxide, etc.). Similarly, any water sample (as a single liquid phase) will contain many components, which constitute its chemical composition (in terms of cat-ions, an-ions, etc.). Moreover, bacteria, viruses, phytoplankton, and even higher biological species may be considered as *components* with their specified mass per unit volume, say of a liquid (water).

The complexity of a system clearly increases if it consists of several phases, and if each phase consists of multiple components. 

(sec-1-2-2-3)=
### 1.2.2.3. Processes
By *processes*, we imply any set of relations/interactions within a system that result in changes of system properties in space and time. *System dynamics* is an expression of this change, and is a result of some type of process. For changes to take place within a system, we require some type of *driving force*; mechanical (such as pressure gradients, gravity), chemical (existence of chemical potential) or thermodynamic (temperature gradients, energy gradient), all of which are propagated through boundaries and/or generated internally (within a system) due to the existence of sinks and sources.

A special case of system dynamics is an asymptotic equilibrium state where change has ceased. With respect to processes, we can therefore have the more general *transient* state in which a system is still subject to observable change, and *steady state* in which a system is (within the relevant time frame of observation) in equilibrium, i.e., does not change. Clearly, the equilibrium (or steady state) is often only a temporary state from which the next phase of change (transition) takes place when due to external and/or internal forcing. 

(sec-1-2-2-4)=
### 1.2.2.4. System classification table
 We summarize the above classifications in the following table.

:::{table} System classification
:label: tab_system_classification

| Boundaries | Structure | Composition | Dynamics |
| :----: | :----: | :----: | :----: |
| Closed (energy $\rightleftharpoons$) | Homogeneous (integral formulation) | Single phase/single component | Steady state (equilibrium, time-independent) |
| Open (energy, mass $\rightleftharpoons$) | Heterogeneous (spatial dependence; distributed formulation) | Multiphase/multi-component | Transient (kinetics, time-dependent) |
:::

(sec-1-2-2-5)=
### 1.2.2.5. Examples
- Earth
- Lake
- Catchment
- Wastewater treatment plant
- Aquifer
- Municipality