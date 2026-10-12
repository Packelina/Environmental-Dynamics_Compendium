---
numbering:
  enumerator: 1.%s
---

(sec-1-4)=
# 1.4. From rigid bodies to solid and fluid dynamics

At this point, the quantity $\Phi$, and its distributed counterpart $\varphi$, are very abstract! This is a necessity, since we wish to describe a great variety of phenomena with $\Phi$ or $\varphi$. Here we take the first step toward concretizing the universal balance law and the quantities involved. The main focus of this chapter will be fluid flow, which is most important for environmental dynamics; however, for completeness, we shall also mention rigid body dynamics and the deformation of solids, quantified using the same integrated or distributed universal balance laws.

(sec-1-4-1)=
## 1.4.1. Rigid body dynamics

We consider first the simplest problem of describing the motion of a rigid body. We know from classical mechanics that the overall motion of any body with any kind of shape is the same motion as if all body mass was concentrated at one special point called the center of mass. Therefore, we can consider the rigid body to be a zero-dimensional domain (0-D). The quantity we are interested in is the momentum, which is the product of the mass $M$ of the body times its velocity $\mathbf{v}$. Hence, it is a vector, which in three dimensions has three coordinates and reads

:::{math}
\mathbf{\Phi} = (Mv_x, Mv_y, Mv_z)
:::

The sources or sinks that are able to "generate" or "consume" momentum are forces such as the gravitational force or the electromagnetic force, and are represented either as internal or external forces. For example, in the case of a system of planets rotating around a star the force causing the motion is the star's gravitational force, and it is an internal force (since it is within the system domain) acting as a sink term. Then, we pose the sink/ source term as a vector $\mathbf{S}$ with the following components:

:::{math}
\mathbf{S} \equiv (F_x, F_y, F_z)
:::  

where $\mathbf{F}[F_x, F_y, F_z]$ is the force vector applied on the rigid body.

The integral form of the universal balance law now reads

:::{math}
M\frac{dv_x}{dt} = F_x, \quad M\frac{dv_y}{dt} = F_y, \quad M\frac{dv_z}{dt} = F_z
:::

or in vector form,

:::{math}
M\frac{d\mathbf{v}}{dt} = \mathbf{F}
:::

which is the formulation of the classical Newton's law of motion; it constitutes the basis of modeling dynamics from planetary motion to ballistics.

(sec-1-4-2)=
## 1.4.2. Mass conservation for fluids

(sec-1-4-2-1)=
### 1.4.2.1. Flood routing

We consider the balance law for a fluid mass, i.e., we pose $\Phi \equiv M$, where $M = \rho V$ and $\rho$ is the fluid density and $V$ is the control volume. If there is no source or sink acting on the fluid within the control volume, then $S^{\mathrm{int}} = 0$. The mass balance then reads

:::{math}
\frac{d\rho V}{dt} = J^{\mathrm{in}} - J^{\mathrm{out}}
::: 

where we allow for compressibility (i.e., $\rho$ can change in time). If the fluid is incompressible, $\rho = \mathrm{constant}$, and the above equation simplifies to

:::{math}
\rho \frac{dV}{dt} = J^{\mathrm{in}} - J^{\mathrm{out}}
::: 
 
 (sec-1-4-2-2)=
### 1.4.2.2. Example: The reservoir

As an example of the integral form of the balance law for a 0-D system, we consider water balance in a lake as shown in {ref}`fig_example_reservoir`.

:::{figure} ../images/fig_example_reservoir.png
:label: fig_example_reservoir
:width: 400px
Simple model of a reservoir where $J^{\mathrm{in}}$ is the inflow, $J^{\mathrm{out}}$ the outflow, $A$ the mean area, $V$ the total volume of the reservoir and $h$ its mean depth.
::: 

If the reservoir is of relatively large area $A$ compared to its depth $h$, then the volume $V$ can be approximated by $A \times h$. With $\rho$ defined as the density, the mass of water will be $A \times h \times \rho$ . Furthermore, if the inflow $J^{\mathrm{in}}$ and outflow $J^{\mathrm{out}}$ are functions of time $t$, then the depth $h(t)$ is also a function of time, and is a solution of the following differential equation:

:::{math}
\rho A \frac{dh}{dt} = J^{\mathrm{in}}(t) - J^{\mathrm{out}}(t)
:::

<!-- NOTE:T is also Temperature, maybe confusing?-->
Let us solve this equation to demonstrate the capacity of a reservoir to absorb (or damp) large variations of the inflow. We normalize all lengths with a characteristic length scale of the reservoir, say $L$. For example, one could choose $L = A^{1/2}$ . We define the non-dimensional depth as $h^{*} = h/L$. In principle, we should do the same for the time variable $t$ and divide it with a characteristic time, for example the time $T$ that it takes to empty the reservoir (in general unknown). Here, we define $T$ to be the period of time between two maximum values of the function $J^{\mathrm{in}}$. For a real flood, $T$ will be the a period between two extreme floods, which appear in general during the spring season, i.e., $T \sim 1$ year can be our typical characteristic time. We define and denote the nondimensional time as $t^{*} = t/T$.

Consider the following inflow and outflow:

:::{math}
J^{\mathrm{in}} = J_1 + a\sin(2\pi t^{*})
:::

:::{math}
J^{\mathrm{out}} = J_2
::: 

where $J_1$ and $J_2 = J_1$ (imposing that the reservoir has the ability to damp the variations of the inflow) are the mean inflow and outflow respectively, and $a$ is a given amplitude which has the same units as $J$ and represents the magnitude of oscillation of the flooding. Hence, the sinus term in the expression represents an increase or a decrease in the inflow. It is a perturbation term with a mean value which is equal to zero. The general solution, $h(t^{*})$, of the balance law is,

:::{math}
\rho A h^{*}(t^{*}) = \int_{0}^{t^{*}} \left[ J^{\mathrm{in}}(t') - J^{\mathrm{out}}(t') \right] dt'
:::

:::{math}
\rho A h^{*}(t^{*}) = \int_{0}^{t^{*}} a \sin(2 \pi t') dt'
:::

:::{math}
h^{*}(t^{*}) = \frac{a}{2A\pi\rho} \left[ 1 - \cos(2\pi t^{*}) \right] + h^{*}(0)
:::

At $t=0$, our initial condition is $h(0)^{*}=h_{0}^{*}$, which yields the integration constant. If the surface of the lake is large enough so that the magnitude of the flooding is small compared to the size of the lake (i.e., $a/(A \times \rho) \ll 1$), then the right hand side is $\ll 1$ and the variation in the inflow is damped by a factor $1/A$.

(sec-1-4-2-3)=
### 1.4.2.3. Continuity equation

We focus on the mass balance in a distributed system by setting $\varphi \equiv \rho$ where $\rho$ is the mass density of the fluid, i.e., the amount of mass in the vicinity of a point, per unit volume.

Substituting $\varphi \equiv \rho$, we get the classical *continuity equation*:

:::{math}
:label: eq_continuity
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0 
:::

The continuity equation can be simplified by first expanding the divergence term:
 
:::{math}
\nabla \cdot (\rho \mathbf{v}) = \rho \nabla \cdot \mathbf{v} + \mathbf{v} \cdot \nabla \rho
::: 

And then if the density $\rho$ is constant in space, we have $\nabla \rho = 0$ and the continuity equation becomes

:::{math}
\frac{\partial \rho}{\partial t} + \rho \nabla \cdot \mathbf{v} = 0
:::  

Furthermore, if the fluid is incompressible then $\rho = \mathrm{constant}$ in time and hence $\frac{\partial \rho}{\partial t} = 0$ whence we obtain the continuity equation of a homogeneous fluid (i.e., with $\rho$ constant) that moves with a velocity $\mathbf {v}$, is

:::{math}
\nabla \cdot \mathbf{v} = 0
:::

By definition of the divergence of a vector, we then have the following relationship between the components $v_x$, $v_y$ and $v_z$ of the velocity vector:

:::{math}
\frac{\partial v_x}{\partial x} + \frac{\partial v_y}{\partial y} + \frac{\partial v_z}{\partial z} = 0
:::

This equation is called the *incompressibility condition* for the flow of the quantity $\varphi = \rho$ , despite the fact that the above equation does not contain any material parameters, but only the velocity of the flow. Thus, we have tacitly assumed that the velocity of the quantity $\varphi$ is the same as the velocity of the flow. This is not always true! An example of such a case is the flow of small particles in a liquid or a gas. Due to their inertia, and the internal viscous forces, both the direction and the magnitude of the velocity vector of the transporting fluid and the particles can be very different. In such a case, the velocity $\mathbf {v}$ should be the velocity (or mean velocity) of the particles at a given point (i.e., within an infinitesimal volume in the vicinity of a point) and not the velocity of the fluid. 

(sec-1-4-3)=
## 1.4.3. Fluid dynamics

What happens if the body is not rigid, but deformable as a liquid, for example? Instead of the mass $M$ we now need to consider the mass $M$ in a given volume $V$ or the ratio $M/V$, which is the density $\rho$. Note that the density $\rho$ is in general a function of space and time.

Then $\varphi$, is defined as the momentum, which is a vector with three components:

:::{math}
\phi = (\rho v_x, \rho v_y, \rho v_z)
:::

As for the rigid body case, the source/sink terms are the internal forces. A common body force is gravity but a general body force reads as follows:

:::{math}
\mathbf{s}^{int} = (\rho f_x, \rho f_y, \rho f_z)
::: 

Because the medium is deformable we need to consider possible inflow and outflow to or from the volume $V$. Such flux is complicated to describe because the deformation of the medium depends not only on the longitudinal but also tangential forces. This difficulty is solved using the tensorial notation. Using the rate of stress $\sigma _{mn}$, the flux $j$ is in this case a tensor $\mathbf{j}$ or $j_{mn}$ (where $m$, $n$ take values $x$, $y$ and $z$<!-- CHANGE: and x -->), defined by,

:::{math}
j_{xx} = \rho v_x v_x - \sigma_{xx}, \qquad j_{xy} = \rho v_y v_x - \sigma_{xy}, \qquad j_{xz} = \rho v_z v_x - \sigma_{xz}
:::

:::{math}
j_{yx} = \rho v_x v_y - \sigma_{yx}, \qquad j_{yy} = \rho v_y v_y - \sigma_{yy}, \qquad j_{yz} = \rho v_z v_y - \sigma_{yz}
:::

:::{math}
j_{zx} = \rho v_x v_z - \sigma_{zx}, \qquad j_{zy} = \rho v_y v_z - \sigma_{zy}, \qquad j_{zz} = \rho v_z v_z - \sigma_{zz}
::: 
  <!-- CHANGE: switched last line, middle term v_z v_y -->

Then, the balance equation (in tensor form) reads

:::{math}
\frac{\partial \phi}{\partial t} + \nabla \cdot \mathbf{j} = \mathbf{s}
::: 

or in component form

:::{math}
\rho\frac{\partial v_x}{\partial t} + \rho v_x \frac{\partial v_x}{\partial x} + \rho v_y \frac{\partial v_x}{\partial y} + \rho v_z \frac{\partial v_x}{\partial z} = \frac{\partial \sigma_{xx}}{\partial x} + \frac{\partial \sigma_{xy}}{\partial y} + \frac{\partial \sigma_{xz}}{\partial z} + \rho f_x
::: 

:::{math}
\rho\frac{\partial v_y}{\partial t} + \rho v_x \frac{\partial v_y}{\partial x} + \rho v_y \frac{\partial v_y}{\partial y} + \rho v_z \frac{\partial v_y}{\partial z} = \frac{\partial \sigma_{yx}}{\partial x} + \frac{\partial \sigma_{yy}}{\partial y} + \frac{\partial \sigma_{yz}}{\partial z} + \rho f_y
:::

:::{math}
\rho\frac{\partial v_z}{\partial t} + \rho v_x \frac{\partial v_z}{\partial x} + \rho v_y \frac{\partial v_z}{\partial y} + \rho v_z \frac{\partial v_z}{\partial z} = \frac{\partial \sigma_{zx}}{\partial x} + \frac{\partial \sigma_{zy}}{\partial y} + \frac{\partial \sigma_{zz}}{\partial z} + \rho f_z
:::  

where we have used the continuity equation in the form:

:::{math}
\frac{\partial \rho}{\partial t} + \frac{\partial \rho v_x}{\partial x} + \frac{\partial \rho v_y}{\partial y} + \frac{\partial \rho v_z}{\partial z} = 0
::: 

If we assume a linear relationship between the stress tensor $\sigma _{mn}$ and the rate of deformation quantified by $\nabla \mathbf {v}$ as

:::{math}
:label: eq_newton_fluid
\sigma_{mn} = -\delta_{mn} \, p + \mu \frac{\partial v_m}{\partial n}
::: 

where again $m, n = x, y, z$, we obtain,

:::{math}
:label: eq_navier_stokes_1
\rho\frac{\partial v_x}{\partial t} + \rho v_x \frac{\partial v_x}{\partial x} + \rho v_y \frac{\partial v_x}{\partial y} + \rho v_z \frac{\partial v_x}{\partial z} = -\frac{\partial p}{\partial x} + \mu \left[ \frac{\partial v_x}{\partial x} + \frac{\partial v_x}{\partial y} + \frac{\partial v_x}{\partial z} \right] + \rho f_x
:::

:::{math}
:label: eq_navier_stokes_2
\rho\frac{\partial v_y}{\partial t} + \rho v_x \frac{\partial v_y}{\partial x} + \rho v_y \frac{\partial v_y}{\partial y} + \rho v_z \frac{\partial v_y}{\partial z} = -\frac{\partial p}{\partial y} + \mu \left[ \frac{\partial v_y}{\partial x} + \frac{\partial v_y}{\partial y} + \frac{\partial v_y}{\partial z} \right] + \rho f_y
:::

:::{math}
:label: eq_navier_stokes_3
\rho \frac{\partial v_z}{\partial t} + \rho v_x \frac{\partial v_z}{\partial x} + \rho v_y \frac{\partial v_z}{\partial y} + \rho v_z \frac{\partial v_z}{\partial z} = -\frac{\partial p}{\partial z} + \mu \left[ \frac{\partial v_z}{\partial x} + \frac{\partial v_z}{\partial y} + \frac{\partial v_z}{\partial z} \right] + \rho f_z
:::   

Eq. {ref}`eq_navier_stokes_1` -  Eq. {ref}`eq_navier_stokes_3` are the so-called Navier-Stokes equations for a Newtonian fluid defined by Eq. {ref}`eq_newton_fluid`. The Navier-Stokes equations are fundamental partial differential equations that describe flow of incompressible fluids. They are widely used in fluid dynamics, atmospheric flows, oceans streams, etc., from laminar (linear) to turbulent (non-linear) flow conditions. For more background on the Navier-Stokes equations, see a general textbook on fluid dynamics, e.g., @batchelor2000

The Navier-Stokes equations are difficult to solve because they include non-linear terms, in particular the term $\mathbf {v} \cdot \nabla \mathbf {v}$ gives rise to chaotic effects that can be found in the dynamics of many environmental flows. The complete solutions of the Navier-Stokes equations for 3-D geometries require very complex and CPU demanding numerical schemes; this field of study is called computational fluid dynamics (CFD).

However, there are simplified forms of the Navier-Stokes equations that are more tractable to analytical results. One such form is an excellent approximation to describe the behavior of very slow flows called Poiseuille flows; this will be exemplified below.

What does one mean by "slow flows"? In general, the perception of low and high velocity is related to the concept of a characteristic dimension. We know what is low velocity on a motorway (let us say it is any velocity under 50 km/h) but how does it feel for a smaller creature on the road when a car travels at 50 km/h (say for an ant)? The point is that the concept of slow or high velocity is related to the characteristic dimension of our problem.

A suitable way to characterize a flow is by using a dimensionless quantity referred to as the *Reynolds number*, $\mathrm{Re} = \rho vL/ \mu$<!-- CHANGE: Re = rho * v * L -->, where $v$ is the fluid velocity, $L$ is a characteristic length, and $\mu$ is a material constant referred to as *dynamic viscosity* with dimensions of pressure times time [Pa s = kg/(m s)]. The Reynolds number can also be seen as the ratio between a convective and a diffusive flux. Therefore, a slow flow does not necessarily mean a low Reynolds number. Indeed, if $v \ll 1$ we can still have $L \gg 1$ and for $\mu \ll 1$ we can obtain $\mathrm{Re} \gg 1$. Therefore, instead of "slow" and "fast" flow, we should refer to a low or high Reynolds number.

For low Reynolds numbers, the non-linear terms in the Navier-Stokes equations are generally small, such that they can be neglected compared to others terms, in particular the dominant force due to the pressure variations in the flow. For such a flow, the velocity becomes proportional to the pressure gradient, i.e.,

:::{math}
v_x \sim -\frac{\partial p}{\partial x}, \qquad \qquad v_y \sim -\frac{\partial p}{\partial y}, \qquad \qquad v_z \sim -\frac{\partial p}{\partial z}
::: 

This approximation is in general correct for flows in porous media, e.g., groundwater flows.

(sec-1-4-4)=
## 1.4.4. Example: Flow in a homogeneous fracture

Consider flow of water in an "ideal" fracture. By "ideal" we mean that the walls of the fracture are perfect horizontal planes of constant *aperture*, which is the opening of the fracture (distance between the planes). Such fractures do not exist in reality, but the idealized model is in many cases a useful approximation.

:::{figure} ../images/fig_fracture_hz.png
:label: fig_fracture_hz
:width: 250px
An ideal horizontal fracture with constant aperture $a$
:::

The boundary conditions for the velocity at the walls are:

:::{math}
v_{x}(z=0) = v_{x}(z=a) = 0
::: 

which is referred to as the "non-slip condition". It indicates that the velocity of the water at the contact boundary with wall and the velocity of the walls, are identical.

The impenetrability of the walls is equivalent to saying that no flux can cross the walls. The flux is proportional to the velocity component $v_z$, hence $v_z = 0$. To simplify the problem we also consider that there is no flow in the $y$ direction, i.e., $v_y = 0$.

Therefore, the only velocity component that remains is $v_x$ and the Navier-Stokes equations reduce to the following form

:::{math}
\rho\frac{\partial v_x}{\partial t} = -\frac{\partial p}{\partial x} + \mu \, \frac{\partial^2 v_x}{\partial z^2}
::: 

where $\mu$ is the dynamic viscosity, with dimensions of pressure times time [Pa s]. We can also define the kinematic viscosity $\nu = \mu / \rho$, with dimensions [m{sup}`2`/s] (the same as a diffusion coefficient which will be discussed later). Using $\nu$, we get

:::{math}
:label: eq_fracture_hz_navier_stokes
\frac{\partial v_x}{\partial t} = I_p + \nu \frac{\partial^2 v_x}{\partial z^2}
:::

where $I_p \equiv -(1/\rho) \partial p/\partial x$ is the driving force for flow.

If the flow is at steady state (independent of time) then all time derivatives are equal to zero. In other words, the left hand side of Eq. {ref}`eq_fracture_hz_navier_stokes` is zero. If we also neglect internal body forces, then $f_z = 0$, and the Navier-Stokes equation (Eq. {ref}`eq_fracture_hz_navier_stokes`) simplifies to

:::{math}
\frac{d^2v_x}{dz^2} = \frac{I_p}{\nu}
::: 

The above equation can be integrated to yield the following relationship

:::{math}
\frac{dv_x}{dz} = \frac{I_p}{\nu}z + C_1
::: 

A second integration yields

:::{math}
:label: eq_fracture_hz_navier_stokes_integrated
v_{x}(z) = \frac{I_p}{\nu} \frac{z^2}{2} + C_{1} z + C_2
:::  

For the solution to be applicable, we need to determine the two integration constants $C_1$ and $C_2$, by using the boundary conditions at $z = 0$. We obtain the following 

:::{math}
v_{x}(0) = C_2 = 0
::: 

and at $z = a$

:::{math}
v_{x}(a) = \frac{I_p}{\nu} \frac{a^2}{2} + C_{1} a = 0
:::   

which gives us

:::{math}
C_{1} = -\frac{aI_p}{2\nu}
:::  

Inserting $C_1$ and $C_2$ in the general solution Eq. {ref}`eq_fracture_hz_navier_stokes_integrated` finally gives us

:::{math}
:label: eq_fracture_hz_navier_stokes_solution
v_{x}(z) = \frac{I_p}{2\nu} z(z-a)
:::  

This is a parabolic profile, as shown in {ref}`fig_ideal_fracture_v_parabolic`. Eq. {ref}`eq_fracture_hz_navier_stokes_solution` is often used as an approximation for solving groundwater flow systems in subsurface rock. Since the rock is very impermeable, the main pathways for water flow are (discrete) networks of connected fractures. Each fracture in the system can usually be approximated by the parallel-plate approach (instead of using the full Navier-Stokes equations) to solve for the flow through the system.

:::{figure} ../images/fig_ideal_fracture_v_parabolic.png
:label: fig_ideal_fracture_v_parabolic
:width: 250px
Parabolic proflie for the velocity in a homogeneous ideal fracture
:::

:::{note icon=false} ✏️ **Exercise**
What happens if the aperture $a$ is a function of $x$ Consider, e.g., $a(x) = sin(x + b)$. The solutions may be a good approximation of the flow in a porous medium with periodic structure.
:::