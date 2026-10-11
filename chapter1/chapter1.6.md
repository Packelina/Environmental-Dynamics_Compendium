---
numbering:
  enumerator: 1.%s
---

(sec-1-6)=
# 1.6. Mixing and spreading of substances

Most synthetic substances find their way into the environment. They diffuse, disperse, and are advected, changing the quality (sometimes irreversibly) of air, water and soil. The myriad of substances that to some extent move in the environment affect ecosystems and well as humans in a positive and negative manner. The entire process needs to be understood, addressed (monitored) and is important in preventing environmental contamination.

In this chapter we address the mixing and spreading of substances (contaminants), providing the conceptual basis for classical (continuum, deterministic) modeling of transport.

(sec-1-6-1)=
## 1.6.1. Reactor model

In this section, we discuss flow reactors and their applicability for tracer transport. By a "tracer" we mean a single substance/component that follows the fluid and does not influence flow dynamics. Thus *tracer* can imply mass (say tritium as a tracer) or energy (e.g., a "parcel" of fluid with higher temperature). In our present discussion we shall refer to a tracer mainly as mass, rather than energy.

We first consider a *continuously stirred flow reactor*, referred to simply as a "flow reactor". "Continuously stirred" implies that we maintain completely mixed conditions, and "flow" indicates that there is a through-flow. A common example is a kitchen sink, where input and output of water are maintained. Flow reactors have wide industrial applications in various process technologies, including wastewater treatment. Lakes are often approximated as such, although the fully mixed condition is not always a realistic assumption. A flow reactor is a 0-D system (a "box") since we assume the existence of a strong mixing process that continuously creates homogeneous conditions.

(sec-1-6-1-1)=
### 1.6.1.1. Single

The basic property of a flow reactor is its *volume* $V$ [L{sup}`3`], and the *volumetric flow rate* $Q$ [L{sup}`3`/T]. As mentioned earlier, the everyday prototype, useful for our discussion, is the kitchen sink. We shall suggest a few experiments (which in fact would be relatively easy to carry out!) that will help unfold our arguments and concepts.

Let us assume that a steady state flow is established in a kitchen sink, with a flow rate $Q$. The fluid mass balance, together with the assumption of fluid incompressibility, simply states that the volume (= mass) of water that enters the reactor will leave the reactor.

At time $t = 0$ we instantaneously release [^instantaneously_release] a dissolved tracer at the input location, say a fluorescent dye [^fluorescent_dye] of total mass $M_0$. The dye is then mixed in the reactor, and gradually exits the reactor. With a light-sensitive device, we can measure the concentration $C$ of the dye at the outlet location. Can we predict the outcome $C(t)$ independent of the experiment, as a function of the given physical parameters?

To this purpose, we use the general balance equation with $\Phi = M$ and write the integral mass balance for the dye as

:::{math}
:label: eq_reactor_single_mass_balance
\frac{dM}{dt} = J^{\mathrm{in}} - J^{\mathrm{out}}
:::

where $M$ is the mass of dye in the flow reactor (i.e., in the volume $V$), and as before $J^{\mathrm{in}}$ and $J^{\mathrm{out}}$ are the input and output rates for the dye, both given in [M/T].

Concentration is obtained from Eq. {ref}`eq_reactor_single_mass_balance` if we divide the equation by the volume $V$ (assumed to be constant). Moreover, if $C$ is the dye concentration in the reactor, and $C^{\mathrm{in}}(t)$ is the dye concentration in the input fluid (water), in general dependent on time, then (in analogy to the advective flux) $J^{\mathrm{in}} = C^{\mathrm{in}} \times Q$ and $J^{\mathrm{out}} = C \times Q$. From Eq. {ref}`eq_reactor_single_mass_balance`, we now obtain

:::{math}
:label: eq_reactor_single_concentration
\frac{dC}{dt} + \omega C = \omega C^{\mathrm{in}}(t)
:::

where $\omega \equiv 1/\Delta \tau = Q/V$ is a rate of mixing in the reactor. We assume full mixing in the reactor; however, due to its finite volume and finite volumetric flow rate, there is a characteristic time of mixing in the reactor (also referred to as reactor *residence time*), denoted by $\Delta \tau$ [T]; its inverse $\omega$ is the mixing (or mix down) rate with dimensions [1/T].

Predicting the concentration $C$ is appropriate for the kitchen sink experiment with a fluorescent dye. However, in applications we may be interested in the *discharge* of a tracer rather than concentration, defined as mass of tracer per unit time, [M/T], which in fact is $J^{\mathrm{out}}$. In the case above, we already stated $J^{\mathrm{out}} = CQ$, hence if we know $C$ and $Q$ we easily compute $J^{\mathrm{out}}$. Nevertheless, it is useful to re-state the equation in terms $J \equiv J^{\mathrm{out}}$. Multiplying Eq. {ref}`eq_reactor_single_concentration` with $Q$ yields

:::{math}
:label: eq_reactor_single_solution
\frac{dJ}{dt} + \omega J = \omega J^{\mathrm{in}}(t)
:::

where, as already noted, $J^{\mathrm{in}} = C^{\mathrm{in}} \times Q$. Note that now we can specify the input condition *without* reference to concentration, i.e., we can directly specify $J^{\mathrm{in}}$. The solution is then

:::{math}
:label: eq_reactor_single_solution_2
J(t) = M_0 \, \omega \exp(-\omega \,t) \quad ; \quad C(t) = \left(\frac{M_0 \,\omega}{Q}\right) \exp(-\omega \,t)
:::

We emphasize that the choice of the modeling approach on whether to predict $C$ or $J$, will essentially depend on how the input conditions are specified, as concentration $C_0$, or total mass $M_0$. Often, it is easy to convert the discharge to concentration, but in some cases the conversion may be less straightforward and we may conveniently use one or the other.

The solution for $J$ or $C$ is thus exponential decay. The decay process is physically attributed to the fact that reactors have a finite mix down time $\Delta \tau$, parameterized by $\omega = 1/\Delta \tau$.

Rather than inject a dye, we may formulate the experiment in the following alternative way. Once a steady state flow is established in a kitchen sink, we may release a single, indivisible, small particle that is carried by the flow (any material in a small volume where the density is approximately that of water, i.e., 1 kg/l, will do for the experiment). The particle will enter the reactor, spend some time in it and eventually exit at the outlet location. If we monitor the exit point (and can detect the passage of the particle), we pose the following problem: Can we predict the passage time (or "residence time") of the particle at the outlet? Clearly, the problem is statistical since the actual residence time of the particle cannot be exactly (deterministically) predicted (which is caused by the mixing in the reactor).

(sec-1-6-1-2)=
### 1.6.1.2. Series

A useful extension of the single flow reactor concept is to consider several (say $N$) flow reactors in a series; the output from one reactor is then the input to the next reactor.

Let $i$ be an index for one flow reactor in the series, where $i = 0, 1, 2, ..., N$; the zero-th flow reactor (i.e., $i = 0$) receives an external input, which is then propagated to flow reactor $i = 1$, and then to $i = 2$, etc., until the final output is released from reactor $i = N$. To refer to our kitchen sink experiment, if we now set $N$ kitchen sinks in a series, and again inject a fluorescent dye as a pulse in the first, can we predict the dye concentration (or discharge) at the outlet kitchen sink $i = N$?

Again, we shall assume that a volumetric flow rate $Q$ is established through the system, at steady state; the fluid mass balance and incompressibility ensure that the same amount of water flows through. However, the volumes of the reactors will in general be different, $V_i$. Likewise, the mix down times and rates will be different, $\omega_i = Q/V_i$.

The series of integral mass balance equations (which we shall here write for $J$) can be written for reactor $i$ as

:::{math}
\frac{dJ_{i+1}}{dt} = \omega_{i+1} \ (J_i - J_{i+1})
:::

or in developed form

:::{math}
\frac{dJ_1}{dt} = \omega_1 \left( J_0 - J_1 \right)
:::

:::{math}
\frac{dJ_{2}}{dt} = \omega_{2} \left( J_{1} - J_{2} \right)
:::

:::{math}
\frac{dJ_3}{dt} = \omega_3 \left( J_2 - J_3 \right)
:::

:::{math}
:enumerated: false
\ldots \ \ldots \ \ldots
:::

:::{math}
\frac{dJ_N}{dt} = \omega_N \left(J_{N-1} - J_N\right)
:::

Let us for simplicity assume that all flow reactors have the same volume; hence only one value of the rate is required, $\omega$.

Considering the pulse input case with $J^{\mathrm{in}} = M_0 \, \delta (t)$ we finally get

:::{math}
:label: eq_reactor_series_solution
J(t) = \frac{M_0 \,\omega^N \,t^{N-1}}{(N-1)!} \,\exp(-\omega \,t)
:::

The special case of Eq. {ref}`eq_reactor_series_solution` is one reactor; with $N = 1$ we recover the solution of Eq. {ref}`eq_reactor_single_solution`. The other limit is more interesting, i.e., for an increasing number of reactors $N \rightarrow \infty$, where we assume that $N \Delta \tau \equiv \tau$ is finite; in other words, we assume that as $N \rightarrow \infty$ (the number of reactors increases indefinitely), the mix down time of each reactor become smaller, as $\tau /N = \Delta \tau \rightarrow 0$ since $\tau$ is finite. We have imposed that all the volumes will be the same! Thus the only physical justification is that we impose that as the number of reactors increase, their respective mix down times decrease. In that case, the mix down rate increases $\omega \rightarrow \infty$.

It can be shown mathematically that

:::{math}
\lim_{N,\omega\to\infty} \left[ \frac{\omega^N t^{N-1}}{(N-1)!} exp(-\omega t) \right] \to \delta(t-\tau)
:::

where $\tau /N = \Delta \tau \rightarrow 0$ is finite. The term $\delta (x)$ is the Dirac delta function, which generally can be regarded as a function with the value $\infty$ for $x = 0$ and zero for any other $x$. As we shall show in the next section, $\delta (t - \tau )$ is the formal solution for so-called *plug flow*, due to pure advection. Hence, an infinite series of flow reactors is equivalent to pure advection. We have thereby established a relationship between the classical continuously stirred flow reactor formulation of transport and the plug flow concept for pure advection. We shall return to these concepts in subsequent sections.

(sec-1-6-1-3)=
### 1.6.1.3. System

For some applications, it is useful to conceptualize an environmental system as a number of connected reactors. A typical example is a series of connected lakes, whereby the flow out of one or several lakes is the inflow for another lake, etc. In that case, we can generalize the series of flow reactors, where the connections now can be more complicated, and as a rule, the mix down times (volume) for different reactors are different. However, the basic principle is the same, where we have to identify each input and output as a sum.

We may also consider several coupled (related) flow reactors, through which several components (species) are transported, exchanging mass between them (due to reactions). In other words, we have system of flow reactors, through which a number of components (species) are transported and transformed. Such a case will be considered later.

(sec-1-6-2)=
## 1.6.2. Advection-dispersion model

We consider now a 1-D distributed system and introduce the concentration for any given, dissolved substance (species, or component) as $\varphi \equiv C$ with dimensions [M/L{sup}`3`]. The flux in this case is $j$ and sink/source term is $s$. The universal balance law (Eq. {ref}`eq_blw_1D`) then gives

:::{math}
:label: eq_ade_blw
\frac{\partial C}{\partial t} + \frac{\partial j}{\partial x} = s(C)
:::

thus in general, we have a non-linear partial differential equation.

As the equation is written in Eq. {ref}`eq_ade_blw`, we have 3 unknowns, $C$, $j$ and $s$. In order for Eq. {ref}`eq_ade_blw` to be useful, we need to introduce two additional equations. First, we shall express $j$ as functions of $C$ and its derivatives. In particular, we *postulate*

:::{math}
j \equiv j^{\mathrm{adv}} + j^{\mathrm{disp}}
:::

The component $j^{\mathrm{adv}}$ is the *advective* flux for the substance. It arises due to the flow that is carrying (advecting) the bulk of a substance (component, species) and is equal to

:::{math}
:label: eq_advec_flux
j^{\mathrm{adv}} = v C
:::

where $v$ is the flow velocity.

The component $j^{\mathrm{disp}}$ refers to the *dispersive* flux of a substance. The dispersive flux arises due to the fact that the velocity field fluctuates (varies) on a much smaller scale, relative to the mean value of the velocity $v$.

Dispersion arises in all types of environmental flows. Granular and fractured porous media are typical examples from the geosphere. Dispersion also exists in the atmosphere, where turbulent eddy currents are responsible for the dispersion of a tracer. The dispersive flux is commonly assumed proportional to the concentration gradient, in analogy to molecular diffusion. We know from Fick's first law that if we have a gradient in concentration, we also have a flux that tends to homogenize the solution, i.e., it decreases the concentration gradient in the solution. This flux is given by Fick's first law (in one dimension) as

:::{math}
:label: eq_disp_flux
j^{\mathrm{disp}}=-D\frac{\partial C}{\partial x}
:::

where $D$ [L{sup}`2`/T] is the coefficient of dispersion.

Combining $j = j^{\mathrm{adv}} + j^{\mathrm{disp}}$ with Eq. {ref}`eq_advec_flux` and Eq. {ref}`eq_disp_flux`, the universal distributed balance law (Eq. {ref}`eq_blw_1D`) gives us the transport equation for a dissolved substance (in one dimension) as

:::{math}
\frac{\partial C}{\partial t} + v \frac{\partial C}{\partial x} - D \frac{\partial^{2} C}{\partial x^2} = s(C)
:::

In three dimensions, we have the advective and dispersive/diffusive flux defined, respectively, by

:::{math}
:label: eq_ade_flux_3D
\mathbf{j}^{\mathrm{adv}} = \mathbf{v} C \qquad \mathbf{j}^{\mathrm{disp}} = -\mathbf{D} \cdot \nabla C
:::

where $\mathbf{v}$ is the mean velocity vector and $\mathbf{D}$ is a dispersion *tensor*. Typically, $\mathbf{D}$ is symmetric; hence, in 3-D we have 6 independent components. If the $x$-component of a Cartesian coordinate system is aligned parallel to $\mathbf{v}$, then $\mathbf{v} (v, 0, 0)$, where $v \equiv v_x$. Combining Eq. {eq}`eq_ade_flux_3D` with the 3-D balance law ({numref}`Eq. %s <eq_blw_3D>`) yields the following continuity equation:

:::{math}
:label: eq_ade_blw_3D
\frac{\partial C}{\partial t} + v_i \frac{\partial C}{\partial x_j} - D_{ij} \frac{\partial^2 C}{\partial x_i \, x_j} = s(C)
:::

The above Eq. {ref}`eq_ade_blw_3D` is referred to as either the *convection-diffusion*, or the *advection-dispersion* equation (ADE). This equation has been obtained assuming that the dispersion tensor $D_{ij}$ is constant in space. We assume the carrier fluid to be incompressible such that $\nabla \mathbf{v} = 0$ holds.

If $\mathbf{D}(\mathbf{x})$ is a function of the position vector $\mathbf{x}(x, y, z)$ then we have to keep $\mathbf{D}$ in front of the $\nabla$ operator. The diffusive term in 3-D reads (using tensor notation)

:::{math}
\frac{\partial}{\partial x_i} \left( D_{ij} \frac{\partial C}{\partial x_j} \right)
:::

The transport equation for a single component/substance is now written in 3-D using tensor notation as

:::{math}
\frac{\partial C}{\partial t} = -\frac{\partial}{\partial x_i}(v_{i} C) + \frac{\partial}{\partial v_i} \left( D_{ij} \frac{\partial C}{\partial x_j} \right) + s(C) 
:::

where $i, j = 1, 2, 3$ correspond to the $(x, y, z)$ coordinates respectively, $v_i$ is the velocity vector [L/T], $D_{ij}$ is the dispersion coefficient tensor, [L/T{sup}`2`] and finally, $s$ is the sink/source term for the physical, chemical and biological reactions [M/(L{sup}`3` T)] that may be present.

For homogeneous media and steady state flow, the velocity $v_i$ and the dispersion coefficient $D_{ij}$ are constants both in space and time. Then we know that a tensor of second order can always be re-arranged to have non-zero principal components. Let us call these components $D_x$, $D_y$ and $D_z$. Then the advection-dispersion-reaction equation with constants coefficients reads in 3-D:

:::{math}
\frac{\partial C}{\partial t} + \left[ v_x \frac{\partial C}{\partial x} + v_y \frac{\partial C}{\partial y} + v_z \frac{\partial C}{\partial z} \right] - \left[ D_x \frac{\partial^2 C}{\partial x^2} + D_y \frac{\partial^2 C}{\partial y^2} + D_z \frac{\partial^2 C}{\partial z^2} \right] = s(C)
:::

(sec-1-6-3)=
## 1.6.3. A few analytical results

(sec-1-6-3-1)=
### 1.6.3.1. Advection

We assume the existence of a flow with a velocity $v$ [L/T]. Let a tracer [^tracer] be injected into the flow at a known location at time $t = 0$. For $t \ge 0$, the tracer is transported downstream. Pure advection with the flow velocity $v$ is referred to as *plug-flow*. Thus by definition we have no dispersion $(D_{ij} = 0)$ and thus have

:::{math}
J = J^{\mathrm{adv}} = vC
:::

which yields

:::{math}
:label: eq_advection_blw_1D_concentration
\frac{\partial C}{\partial t} + v \frac{\partial C}{\partial x} = s(C)
:::

For $s = 0$ (a conservative tracer), we have $C(x, t) = m_0 \ \delta[x - X(t)]$, a Dirac delta function, where $m_0$ is the mass of the advecting tracer "parcel", and

:::{math}
X(t) = \int_0^t v[X(t')dt']
:::

is the position of the "parcel" at time $t$ for the case where the velocity is a function of space, $v(x)$; if $v = \mathrm{const.}$, then $X = vt$.

If the sink/source term is linear in $C$ (satisfying the condition $As(C) = s(AC)$ where $A = \mathrm{const.}$), then for pure advection we have $C = J/v$. Introducing a transformation $dx/d\tau = v$, the 1-D balance equation (Eq. {ref}`eq_advection_blw_1D_concentration`) yields (after algebraic manipulation)

:::{math}
:label: eq_advection_blw_1D_flux
\frac{\partial J}{\partial t} + \frac{\partial J}{\partial \tau} = s(J)
:::

For $s = 0$, the solution of this equation is a Dirac delta function, i.e.,

:::{math}
:label: eq_advection_plug_flow
J(t,\tau) = m_0 \, \delta(t-\tau)
:::

where $\tau$ is the fluid (or equivalently tracer "parcel") travel time from the input location to the outlet location defined by

:::{math}
\tau(x) = \int_0^x \frac{d\xi}{v(\xi)}
:::

and $m_0$ [M] is the mass of tracer in the *parcel* assumed to be injected instantaneously, as a pulse. Eq. {ref}`eq_advection_plug_flow` is a formal expression of plug flow, which indicates that the tracer is being advected with the water and arrives at the outlet location.

If the tracer is subject to linear decay/degradation with $s \equiv \lambda C$, where $\lambda$ [1/T] is a specified rate (parameter), then Eq. {ref}`eq_advection_blw_1D_flux` yields

:::{math}
J(t,\tau) = m_0 \exp(-\lambda \tau) \, \delta(t-\tau)
:::

(sec-1-6-3-2)=
### 1.6.3.2. Diffusion/dispersion

For pure dispersion/diffusion, we have

:::{math}
:label: eq_diffusion_process
J=J^{\mathrm{disp}}=-D \,\frac{\partial C}{\partial x}
:::

where $D$ is referred to as the dispersion coefficient, and Eq. {ref}`eq_diffusion_process` is analogous to Fick's first law for molecular diffusion, which simply states that the flow is proportional to the concentration gradient. Hence, we may refer to Eq. {ref}`eq_diffusion_process` as a "diffusion process", whereby we mean this in a mathematical (formal) sense, not physical.

Using Eq. {ref}`eq_diffusion_process`, we get the transport equation for a single tracer as

:::{math}
:label: eq_diffusion_transport_single_tracer
\frac{\partial C}{\partial t} = D \frac{\partial^{2} C}{\partial x^2}
:::

The solution of Eq. {ref}`eq_diffusion_transport_single_tracer` for a tracer mass $M_0$ released as a pulse at a specified location at $t = 0$, in an infinite domain (i.e., a domain without boundaries), is a Gaussian distribution in the form,

:::{math}
C(t,x) = \frac{M_0}{2\sqrt{\pi Dt}} \exp\left(-\frac{x^2}{4Dt}\right)
:::

<!-- QUESTION: variance 2Dt? -->
with zero mean and variance $2Dt$.

(sec-1-6-3-3)=
### 1.6.3.3. Advection and dispersion

*Advection*, in the present context, implies tracer movement by the mean flow, and *dispersion* implies existence of fluctuations/variability in the flow velocity at a scale much *smaller* than the scale of the mean flow.

As already stated earlier, the advection-dispersion equation in 1-D and without sink/sources is

:::{math}
:label: eq_ade_1D_without_sinkorsource
\frac{\partial C}{\partial t} + v \frac{\partial C}{\partial x} = D \frac{\partial^{2} C}{\partial x^2}
:::

With appropriate boundary and initial conditions, this partial differential equation can be solved for $C(x, t)$.

For a tracer mass $M_0$ released as a pulse at a specified location at $t = 0$, in an infinite domain (i.e., a domain without boundaries), the solution of Eq. {ref}`eq_ade_1D_without_sinkorsource` is a Gaussian distribution with a non-zero mean given in the form

:::{math}
C(t,x) = \frac{M_0}{2\sqrt{\pi Dt}} \exp\left[-\frac{(x-v \,t)^2}{4Dt}\right]
:::

Note that $v \times t$ quantifies simply the mean displacement of the "plume" that is formed by the tracer along the flow path, and $Dt$ quantifies the spreading (dispersion) *around*, or relative to, the mean.

For a semi-infinite domain ($x > 0$), the solution for a pulse is

:::{math}
:label: eq_ade_1D_pulse_semi_solution
C(x,t) = \frac{M_0}{Q} \frac{x}{2\sqrt{\pi D t^3}} \exp\left[-\frac{(x-v \,t)^2}{4Dt}\right]
:::

where $Q$ [L{sup}`3`/T] is the volumetric flow rate of the stream tube in which transport takes place.

If the solute is injected at a continuous, constant rate, the solution is obtained by integrating Eq. {ref}`eq_ade_1D_pulse_semi_solution` over time as:

:::{math}
C(x,t) = \frac{C_0}{2}\operatorname{erfc}\left[\frac{x-vt}{2\sqrt{Dt}}\right] + \frac{C_0}{2}\exp\left(\frac{vx}{D}\right)\operatorname{erfc}\left[\frac{x+vt}{2\sqrt{Dt}}\right]
:::

where $C_0$ is the concentration that is injected.

[^instantaneously_release]: In practice, this means that we release the tracer quickly relative to the flow rate.
[^fluorescent_dye]: Such dyes are often used in experiments as non-reacting tracers.
[^tracer]: A dissolved, dynamically inert substance