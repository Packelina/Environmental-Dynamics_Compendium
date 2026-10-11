---
numbering:
  enumerator: 1.%s
---

(sec-1-3)=
# 1.3. The basic principles: *Checks-and-balances*

(sec-1-3-1)=
## 1.3.1. Control volume and continuum concept
The control volume depends on the particular problem at hand. There is no "universal" control volume. The properties of a fluid in a domain which is smaller than the control volume are dominated by the elementary or constitutive particles. Such a domain is called *microscopic*. Conversely, the properties in a volume which is larger than the control volume are called *macroscopic* properties and such a domain is called the macroscopic, or continuum domain.

We define a continuum to be a one-dimensional (1-D for short), two-dimensional (2-D for short), or threedimensional (3-D for short) space, where each point corresponds to the mean value of large number of constituent particles of the fluid, i.e., the mean value in a control volume centered at a given point.

In principle, we can associate a continuum description for each quantity (variable) that characterizes the fluid, e.g., temperature, pressure, concentration, etc. Some of these continua may depend on other continua. The minimum set of continua that completely describes the fluid at any time and any point, constitutes a *multi-continua model of the fluid*. The solutions of such a model are functions that describe the dynamics of the flow, i.e., its evolution in time and space. 

(sec-1-3-2)=
## 1.3.2. Integral formulation
The general balance law for a particular quantity of interest within a given domain (or control volume) can be expressed as:
 
:::{math} 
\text{Accumulation} = \text{Inflow} - \text{Outflow} + \text{Generation} = \text{Sink/Source}
:::

% TO-DO: Math or not math for the ones in bracket?
We let $\Phi$ denote a generic quantity, so that $\Phi$ can take on different physical interpretations and attain corresponding units depending on what property to which we want to apply the balance law. If it is defined as mass, then the units of $\Phi$ will be mass [M], if it is defined as momentum, then dimensions are [(M L)/T], if it is energy, then dimensions are [J]. The accumulation, or more generally, the variation of the quantity $\Phi$ in a given control volume $V$ is

:::{math}
\frac{d\Phi}{dt} = S(\Phi, t)
:::

where $S$ represents all possible source and sink terms that exist in $V$. The solution of the above differential equation is a function $\Phi = \Phi(t)$ that quantifies the dynamics of the system, i.e., the evolution in time of the quantity $\Phi$.

The sources, i.e., all possible processes that are able to generate some amount of the quantity $\Phi$, can be either *external* or *internal*. If a process consumes the quantity $\Phi$, it is called a sink, and like a source it can be either external or internal, depending on its location relative to the control volume. We decompose the sink/source term as

:::{math}
S = S^{\mathrm{ext}} + S^{\mathrm{int}}
:::

to be the sum of all internal and external sources or sinks.

The contribution of all external sources or sinks is also called the net flux, and it is by definition the difference between the inflow $J^{\mathrm{in}}$ and outflow $J^{\mathrm{out}}$ of the quantity $\Phi$ to the control volume

:::{math}
S^{\mathrm{ext}} \equiv J^{\mathrm{in}} - J^{\mathrm{out}}
:::

The universal conservation law can then be written as follows

:::{math}
:label: eq_blw_integral
\frac{d\Phi}{dt} = S(\Phi, t) = S^{\mathrm{ext}} + S^{\mathrm{int}} \equiv J^{\mathrm{in}} - J^{\mathrm{out}} + S^{\mathrm{int}}
:::

If there are no internal sources or sinks, then $S^{\mathrm{int}} = 0$ and if, at the same time, we have reached a steady state, then $d\Phi/dt = 0$ and $J^{\mathrm{in}} = J^{\mathrm{out}}$, i.e., the net flux is equal to zero.

Eq. {ref}`eq_blw_integral` is in essence a "checks-and-balances" relationship that we use daily in our private, as well as national, economy!

(sec-1-3-3)=
## 1.3.3. Distributed formulation

In many applications, we are not only interested to know how the quantity $\Phi$ varies in time (its dynamics), but we also need to know how it varies in space. To achieve this, we commonly analyze systems in one, two, or three dimensions, depending on the system and the problem at hand.

The choice of system dimensionality is problem-dependent. For example, the transport of a pollutant in a river can be suitably analyzed using a 1-D model independently of the fact that river flow is strictly threedimensional. A typical 2-D problem is to determine the spatial distribution of the wind velocity at the ground level. The wind maps are such 2-D solutions. If, instead, we are interested to know how a tornado is formed and evolves in time, we certainly need a 3-D model for the wind velocity field. This may be done by releasing small balloons whose positions are recorded using a ground radar. Other methods can be used as well, e.g., based on the Doppler effect [@noaa2006].

Consider a one-dimensional system through which the quantity $\Phi$ is propagated (transported). The control volume is suitably defined as a rectangular box, with cross-sectional area $A$ and infinitesimal length $dx$, as shown in {ref}`fig_box_1D`. The cross-sectional area may vary along $x$; however, we neglect this variability over the elementary distance $dx$. The contents of the control volume $A \times dx$ are assumed mixed, whereby the quantity $\Phi$ is uniform *in* the control volume. The input is here assumed to take place over the left boundary and output over the right boundary (as indicated by arrows in {ref}`fig_box_1D`). The quantity $\Phi$ may be created or destroyed in the control volume (i.e., the source/sink is non-zero).

:::{figure} ../images/fig_box_1D.png
:label: fig_box_1D
:width: 250px
1-D box with cross-section A.
:::

% TO-DO: Math or not math in brackets?
We first define $\varphi$ as a density of $\Phi$ , i.e., $\Phi$ per unit volume. Then, we define the flux $j$ as discharge per unit cross-sectional area. Finally, we define the sink/source term for the control volume. Thus, in terms of units, [$\varphi$] = [$\Phi$/[L{sup}`3`]], [j] = [J/[L{sup}`2`]] and [s] = [S/[L{sup}`3`]] .

Using the basic rules of differentiation, we write the balance law (Eq. {ref}`eq_blw_integral`) for the infinitesimal control volume in {ref}`fig_box_1D` as

:::{math}
\frac{\partial \phi}{\partial t}Adx = jA - \left(j + \frac{\partial j}{\partial x}dx\right)A + sAdx
:::

where $J^{\mathrm{int}} \equiv jA$ and $J^{\mathrm{out}} \equiv jA + \partial j/\partial t \ dx \ A$ . Finally, we obtain,

:::{math}
:label: eq_blw_1D
\frac{\partial \phi}{\partial t} + \frac{\partial j}{\partial x} = s
:::

In 3-D, the flux $\mathbf{j}$ is a vector with 3 components ($j_x$, $j_y$, $j_z$). In a rectangular co-ordinate system, the universal balance law reads:

:::{math}
:label: eq_blw_3D
\frac{\partial \phi}{\partial t} + \frac{\partial j_x}{\partial x} + \frac{\partial j_y}{\partial y} + \frac{\partial j_z}{\partial z} = s
:::
