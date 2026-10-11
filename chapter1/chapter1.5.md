---
numbering:
  enumerator: 1.%s
---

(sec-1-5)=
# 1.5. Transformation and flow of energy

(sec-1-5-1)=
## 1.5.1. Integral formulation: Classical thermodynamics

The science of thermodynamics is generally complex to understand and manipulate mathematically. Here, we shall give only a brief summary as an important application area of the universal balance law.

The central quantity of thermodynamics is *internal energy*, which we define indirectly through its manifestations. Energy is required for any change to take place. For engineering applications, only differences in energy are meaningful - absolute values are not. Classical thermodynamics is focused on two independent variables; say the temperature $T$ and the volume $V$ of a given system. The third variable, pressure $P$, can always be obtained with a transformation of $T$ and $V$.

Let $E$ denote internal energy of a system (body) within a control volume $V$; we identify $\Phi \equiv E$ and write

:::{math}
\frac{dE}{dt} = S
:::

where, as before, $S$ denotes the sink/source term. We write the above equation in differential form as

:::{math}
dE = S \, dt = W + Q
::: 

where $W$ is the work, and $Q$ is the energy sink/source from heat input/output. In other words, we associate the sink/source term $S$ with the *work* applied on (or done by) the system, plus *heat* delivered to (or released from) the system.

Finite change of $E$ is denoted by $\Delta E$. It follows from the universal balance law that

:::{math}
:label: eq_first_law_thermo
\Delta E \equiv E_{\mathrm{final}} - E_{\mathrm{initial}} = W + Q
:::

This relationship is referred to as the *first law of thermodynamics* and is a statement of conservation of energy. Hence, any variation of $Q$ and $W$ will result in a variation of the change in the internal energy $\Delta E$. Note that Eq. {ref}`eq_first_law_thermo` is a quasi-stationary expression of change and does not explicitly account for the dynamics. It refers to steady (equilibrium) states and considers changes between these states.

Although basic for many applications, the first law of thermodynamics does not provide information on the direction or constraints of change. This aspect is covered by the *second law of thermodynamics*, which, in words, states that heat cannot be used at a constant temperature to produce work without a change in the system or its environment. This is equivalent to say that heat cannot by itself pass from a cold to a warm system. For this to happen, work has to be done, as for example in a refrigerator.

A more formal expression of the second law is obtained using the concept of *entropy*, $H$. Entropy quantifies disorder of a system. Entropy is defined in its differential form by

:::{math}
dH = \frac{dQ}{T}
:::

where $dQ$ is the amount of heat absorbed (or released) by the system, and $T$ is the absolute temperature of the system. For any reversible system, the variation of entropy does not depend on how we arrive at the final state. The entropy difference between two states $a$ and $b$ of a system is

:::{math}
\Delta H = \int_{a}^{b} \frac{dQ}{T}
::: 

implying that similar to energy, and for practical applications, it is meaningful to talk about entropy change, rather than its absolute value [^third_law_thermo].

For reversible changes, entropy is conserved. This is not true for irreversible processes. For irreversible change, the entropy of the total system (body and its surroundings) always increases.

As an example of the integral formulation of the universal balance law (i.e., in 0-D), we can look at the simple case of a closed piston, as shown in {ref}`fig_piston`. Such a piston is the basic prototype in classical thermodynamics (representing an engine), and conceptually is the equivalent to a batch reactor in chemistry.

Let us suppose that we push and release the piston, and by doing so we deliver work to, and/or receive work from, the system. The question is: how much does the internal energy of the system change?

:::{figure} ../images/fig_piston.png
:label: fig_piston
:width: 250px
Piston, a prototype of a reversible engine.
:::

The law of idealized gases is

:::{math}
pV = nkT
::: 

where $n$ is the number of moles, and $k$ is the Boltzmann constant ($k = R/N = 1.38 \cdot 10^{-23}$, where $R = 8.3$ [J/(mol K)] is the molar gas constant and $N = 6.023 \cdot 10^{23}$ [1/mol] is the Avogadro number). At constant temperature and pressure, the work we do on the piston is $W = -p \Delta V$, i.e., we need to produce a work ($W > 0$) to decrease the volume ($\Delta V < 0$). If the system is closed and finite, as our above system, we also have to consider the change in pressure $\Delta p$ and write $W = V \Delta p - p \Delta V$. If the system is not adiabatic, a quantity $Q$ of heat can be absorbed ($Q > 0$) or released ($Q < 0$) by the gas. Finally, change in internal energy is the sum of the heat and work applied on the system.

:::{math}
\Delta E = V \Delta p - p \Delta V + Q
::: 

(sec-1-5-2)=
## 1.5.2. Distributed formulation: Continuum thermodynamics

We consider a flow system, for simplicity defined in one dimension, with flow velocity $v$. Let $e$ be the *internal energy density* with dimensions [J/m{sup}`3`]; then $\varphi \equiv \rho e$ is the internal energy at a given point $x$. Let $j$ be the energy flux with dimensions [J/(m{sup}`2`s)]. The flux $j$ may be decomposed as

:::{math}
j = v \rho e + q
:::

where $v \rho e$ is the advective flux of internal energy (i.e., internal energy that is advected by the velocity $v$), and $q$ is the heat flux with same dimensions as $j$. Then the 1-D universal balance law (Eq. {ref}`eq_blw_1D`) yields

:::{math}
:label: eq_energy_blw_1D
\rho \frac{\partial e}{\partial t} + \rho v \frac{\partial e}{\partial x} + \frac{\partial q}{\partial x} = s
:::

where $s$ is the internal energy sink/source defined per unit volume.

To obtain an equation that has only one unknown, we shall relate change in energy density $e$ with change in temperature $T$ by a relationship which at constant pressure reads

:::{math}
de = c_{p} dT
:::

where

:::{math}
c_{p} \equiv \left(\frac{\partial e}{\partial T}\right)|_p
:::

is the specific heat at constant pressure. Furthermore, Fourier's law (established empirically) reads

:::{math}
Q = -\kappa \frac{\partial T}{\partial x}
:::

where $\kappa$ is the thermal conductivity of the medium.

Finally, we obtain from Eq. {ref}`eq_energy_blw_1D` the heat transport equation as

:::{math}
\frac{\partial T}{\partial t} + v \frac{\partial T}{\partial x} - \frac{\kappa}{\rho c_p} \frac{\partial^{2} T}{\partial x^2} = \frac{s}{\rho c_p}
:::

This model is frequently used for describing dynamics of temperature change in a flow system, e.g., in a river. It has a form of a convection-diffusion (transport) transport equation, analogous for the transport of dissolved substances in fluids; we shall elaborate on this equation in subsequent chapters.

[^third_law_thermo]: Absolute entropy can be defined if we consider the *third law of thermodynamics* (or Nernst's postulate) stating that the entropy of any system at $T = 0$ is zero (i.e., $S =0$).

