---
numbering:
  enumerator: 1.%s
---

(sec-1-8)=
# 1.8. On random walks, marathon races and kitchen sinks

Here we consider the transport of a single component, or tracer, that is dissolved in a fluid. The tracer is viewed as consisting of many indivisible particles which are transported by the fluid independently. We take a probabilistic/stochastic view on transport and follow the fate of one individual tracer particle. Once the transport of a single particle is quantified and understood, we can generalize the results to many (or to an ensemble of) particles that constitute the tracer plume. Due to the randomness widely observed in natural systems, the stochastic approach to transport presented in this chapter is becoming increasingly important for applications.

(sec-1-8-1)=
## 1.8.1. The kitchen sink

The flow reactor was discussed previously by considering the injection of a fluorescent dye. Here we consider a single, indivisible particle injected into a flow reactor (or its domestic prototype, the kitchen sink). The particle will exit the reactor after a certain time, say $\tau$. The question is how to predict $\tau$ statistically. The flow conditions are assumed steady state, with a volumetric flow rate $Q$, and a reactor volume $V$.

Let us consider the experiment where we release a single particle at the inlet of a kitchen sink with volume $V$ and a steady state volumetric flow rate $Q$, waiting for it to exit and registering its time of exit, $\tau$. Clearly, the exit times are random, and with a sufficient number of particles (consisting of a set of $\tau$`s), we could construct a probability density function (PDF) $p(\tau)$. Formally, we write for each particle the discharge as $J = \mathcal{J}m_{0}\delta(t - \tau)$, where $m$ is particle mass and $\tau$ time of exit. By considering many particles, we take the average of $J$ as

:::{math}
:label: eq_kitchen_sink_flux_PDF
J(t) = \langle \mathcal{J} \rangle = m_{0} \langle \delta(t - \tau) \rangle = m_{0} \, p(\tau)
:::

where $J$ is monitored at the outlet of the kitchen sink, and angular brackets denote ensemble average. Thus $p(\tau)$ is proportional to $J/m_{0}$, i.e., $J$ per unit mass.

The ergodic hypothesis of thermodynamics says that the ensemble (or collection) of all possible (micro-) states of a system are equally probable given enough time. In our context, this means that if we release sufficiently many particles at once (referred to as an ensemble of particles) *that do not interact*, i.e., they do not influence dynamically the flow or each other, and then monitored the time of arrival for the ensemble (as mass per unit time), it would yield a "breakthrough curve" (i.e., $J$) that would be equivalent to considering single particles individually, one by one.

Similarly, if we consider a series of flow reactors, and carry out the same experiment with individual particles, then the PDF $p(\tau)$ can be predicted with the expression Eq. {ref}`eq_kitchen_sink_flux_PDF`; the input parameters are the number of reactors $N$, and the turnover rate $\omega$ (assuming it to be constant for all reactors). As $N$ and $\omega$ increase, the ratio $N/\omega$ stays constant (i.e., as $N \rightarrow \infty$ and $\omega \rightarrow \infty$, we have $N/\omega = \mathrm{const.}$). In the limit, we obtain the probabilistic statement of plug flow in terms of the cumulative distribution function (CDF) of the PDF $p(t)$, as follows

:::{math}
\mathrm{CDF}(\tau) \equiv \int_0^{\tau} p(t)dt = 1 - H(\tau)
:::

<!-- QUESTION: Should this be H(\tau)? -->
where $H()$ is the so-called *Heaviside step function* with properties $H(x) = 1$ for $x \geq 0$ and $H(x) = 0$ for $x < 0$; the above equation indicates that all of the particles in a series of an infinite number of flow reactors arrive at the same time, namely $\tau = N/\omega$.

(sec-1-8-2)=
## 1.8.2. The Marathon race

A useful analogy for understanding the probabilistic concepts of transport in a distributed flow system is a race, in particular the marathon race. In a short race, we usually have relatively few runners, whereas in a marathon there may be very many runners (several thousands, think of the Stockholm or Boston marathon!); this fact makes the analogy more suggestive.

The runners correspond to a "plug flow", where the tracer "parcel" is the runner that travels between the start point $A$ and end point $B$ in time $\tau$. In fact, $\delta(t - \tau)$ is a formal statement of a race from start to finish for any given runner; the runner with a minimum $\tau$ is the winner.

As we have already noted, plug flow is a very useful concept for environmental systems that have a clearly defined mean flow direction (e.g., subsurface flows, streams and rivers). The "plug flow" can then be defined on a relatively small scale (depending on the scale of the problem and structural properties of the media), such as to capture the relevant variability for large-scale dispersion, which, as we shall argue below, is primarily due to the variations of $\tau$ along different flow paths (stream tubes, or trajectories).

We consider fluid flow where a mean flow direction can be identified. In the general case, the flow is along a meandering line, referred to as the "flow path" which is assumed at steady state; we refer to such flow as quasistationary. Examples are: surface flow in a stream, or a network of streams, in a catchment; groundwater flow in an aquifer or fracture network; vertical water flow through soils; wind with a persistent direction in the lower atmosphere.

We refer to the *local* flow velocity as the velocity on a scale sufficiently small relative to the mean flow. The local velocity generally varies in space (relative to the mean), and may also change in time; however, the mean is at steady state.

A tracer is released at input location $A$ and is transported by the flow downstream (meaning along the mean flow direction). As it is advected by the mean flow, it is also *dispersed* by the variations/fluctuations of the local velocity.

Here we continue the analogy with the marathon runners. The flow path is the route in advance prescribed for the race, which at the same time defines the mean "flow" direction of the runners. The "parcel" or "particles" of tracers, defined approximately on the scale of the local velocity [^local_scale_aquifer] would be analogous to the individual runners.

The marathon race itself is analogous to a transport process. Different runners run with different velocities (due to variations in the advective velocity field), they disperse along the (mean) flow path as time progresses, and ultimately arrive at different times at the finish location $B$ [^finish_location_B]. In a similar manner, different portions ("parcels") of the tracer in the flow are advected with varying local velocities, they too are dispersed relative to the mean flow, and arrive at different times at the target location $B$ [^target_location_B]. In hydrology, the travel paths for tracer parcels, and the length of these paths, can also be random variables, whereas in the marathon race each runner follows the same path. However, we will assume here that parcels follow the same path, as in a marathon race.

The finish of a marathon race provides a suggestive analogy to a typical transport process in the environment. We watch the first runner cross the finish line, then followed by one or few runners; in other words, initially relatively few runners cross the finish line in unit time. Eventually, more and more runners cross the finish line per unit time, reaching a *peak* of the number of runners crossing the finish per unit time. Following the peak, the "rate of crossing" by the runners declines, leaving the slowest runners to trickle into the finish. Plotting the "rate of crossing" of runners across the finish line at $B$ is the "breakthrough" curve for the race, giving us the number of runners per unit time; this would be the most important quantity for quantifying the outcome of the whole race.

An alternative view is the spatial position of any runner during the race. Clearly, from an aerial (helicopter) view, the runners would be greatly dispersed along the flow path at any given time. The fastest runner would be in the front, the slowest way in back, and their spatial distribution (number of runners per unit length) would quantify a "plume" of runners. As each runner crosses the finish line, its position is defined as the finish line and the clock time corresponds to the travel time. Thus there is a relationship between the two descriptions (as we shall discuss later). Likewise, the advecting tracer is dispersed along the flow path, forming a tracer plume.

The question in either description is if/how we could predict the outcome of the race, or advective tracer transport, spatially ("plume") or temporally ("breakthrough"); it is understood that "prediction" here is meant in a statistical sense!

Let us denote the velocity [^velocity_runner] of any runner as $v$. Clearly $v$ is a random variable, since no one can predict in advance exactly how any given runner will perform; the PDF is denoted by $p(v)$. The position of the runner at any given time is $X = vt$, whereas the travel time of the runner to any location $x$ along the flow path, is $\tau = x/v$. Given $p(v)$, we can easily compute the PDF of $X$ or $\tau$, using the general result $p(u) = |dv/du|p[v(u)]$ where $u$ and $v$ are arbitrary random variables related by $u=u(v)$.

Since $p(v)$ is central in both $X$ and $\tau$, it is appropriate to briefly reflect of how $p(v)$ would be measured. One could sample all data on runners' performance at marathons on record, and compile a PDF $p(v)$. Alternatively, one could focus only on the particular marathon of interest (for which the predictions will be made) and compile data for, say the Stockholm marathon. This would presumably give a different $p(v)$. Another way would be to follow the past performance of each runner that will take part in the particular race, and compile data for estimating a PDF for individual runners. This then could be used to statistically predict the outcome of the entire race.

(sec-1-8-2-1)=
### 1.8.2.1. Travel time and discharge

As in everyday life, "transport" is naturally viewed between two locations, which may be associated with different spatial dimensions. In particular we consider two points, $A$ and $B$ between which a solute is transported. If $A$ is Stockholm and $B$ Uppsala, then transport between $A$ and $B$ is a question of *travel time* between $A$ and $B$; we shall denote travel time as $\tau$.

In a race, the locations $A$ and $B$ are clearly defined as the start and finish point of the race, respectively. At the end of a race, each runner has achieved a certain $\tau$ and the winner of course is the individual who has minimized his/her $\tau$ with respect to others!

Following individual runners in a race and assigning them a $\tau$ appears natural for the purpose of athletics, but less obvious for transport of tracers in environmental flows! However, the analogy to a race is straightforward: runners are "parcels" of tracers (essentially overlapping with "parcels" discussed earlier in the first chapter), as they propagate through a flow system between specified locations $A$ and $B$. In the general case, $\tau$ will be known only statistically. This is a "discrete" view of tracer transport. We can thus consider any environmental flow with a dissolved tracer in it. How long will the tracer (say a pollutant) travel from a discharge location $A$ to a "target" location $B$, for instance, a supply well in groundwater, an ecologically sensitive area in a river or lake, or an inhabited area for the (lower) atmosphere? Will it take 1 or 10 years, or a few hours or days? The travel time $\tau$ of a tracer in a flow is the most natural and relevant quantity for quantifying and characterizing transport.

How do we monitor transport in this case? As runners in a marathon are arriving to the finish $B$, we may count the number of runners arriving in a specified time interval, say 10 minutes; lets call this quantity $J$ with dimensions number of runners per unit time; this is referred to as discharge and is in effect the "breakthrough" (mass per unit time), $J$ (individual particles can always be assigned some mass). In a statistical sense, $J$ is directly related to a probability density function of the travel time $\tau$ as $J = m_{0} \ p(\tau)$, as already noted earlier in relation to the kitchen sink (see previous section). Note that we may write $\tau(x_{B})$ where $x_{B}$ is the co-ordinate of the finish point, with $\tau(x_{A}) = 0$, where $x_{A}$ is the starting point.

In a marathon or any other race, it is impossible to predict in advance the travel time $\tau$ of an individual runner, since it is *random* and can be predicted only statistically. In other words, we can predict the *probability* distribution of $\tau$ for one or all runners in a race.

Given $p(v)$, we have

:::{math}
p_{\tau}(\tau) = |\frac{dv}{d\tau} | p[v(\tau)] = \frac{x}{\tau^2} p_{v}(x/v)
:::

which is the PDF of the travel time for all runners, given as a function of the PDF of the velocity distribution $p(v)$ and the distance along the flow path $x$; the PDF quantifies the "arrival rate" of the runners, or runners' "discharge" across $B$ ("breakthrough"), provided we have sufficiently many runners such that the ergodic hypothesis holds.

We can also compute useful compact measures of the distribution as mean and variance of $\tau$. Specifically,

:::{math}
\langle \tau \rangle = x \, \langle 1/v \rangle \qquad \qquad \sigma_{\tau}^{2} \equiv \langle \tau^{2} \rangle - \langle \tau \rangle^{2} = \sigma_{1/v}^{2} \, x^2
:::

where $1/\langle 1/v \rangle$ is the harmonic mean velocity and $\sigma_{1/v}^2$ is the variance of $1/v$. In other words, the mean position of runners along the flow path is proportional to elapsed time, and the variance is proportional to time squared. The mean travel time is linear in the distance along the flow path, and the variance is proportional to the distance squared.

(sec-1-8-2-2)=
### 1.8.2.2. Position and concentration

Rather than to monitor particle time of arrival at a specified location, we may alternatively monitor the location of a particle at a given (fixed) time. At any specified (clock) time, we define particle location as $X(t)$ with dimensions [L]. If the velocity is constant, we have $X = vt$, but if the velocity is a random function in space we have to solve the non-linear, integral equation

:::{math}
X(t) = \int_{0}^{t} v[X(t')]dt'
:::

in order to obtain $X(t)$, given $v(x)$. Our location $A$ is $X$ at the starting time $t = t_A$, and location $B$ at time $t_B$, i.e., $x_{A} \equiv X(t = t_{A})$ and $x_{B} \equiv X(t = t_{B})$, where $x$ is a spatial coordinate, conveniently set in 1-D but easily extended to 2-D, or 3-D. The transport quantity of interest is thus $X(t)$, i.e., particle position at a given clock time, $t$. We know we have reached our destination $B$ (e.g., the finish of a race), when $X \approx x_{B}$. The time it takes to arrive at $x_{B}$, say $t = t_{B}$ is in effect the travel time from $A$ to $B$! To obtain $X(t)$ we need to identify the location of the tracer "particle", or runner, at snapshots in time.

Rather than following individual runners we may divide the running path into equal segments (which could be elements $\Delta x$, say each 50 m long, which gives 800 elements for a 40 km race), and simply count how many runners we have in each element at a given time; in practice, this would be easily monitored from the air, simply by taking snapshots and counting. In that case, we take the so-called "Eulerian" view on transport, where the "concentration" $C$ of runners is their number (or total mass!) per unit length (in 1-D).

The "concentration" of an individual runner can be written as $C = m_{0} \delta[x - X(t)]$ where $m_{0}$ is an appropriately defined mass of a particle (or runner), and the $\delta$ function has dimensions (in 1-D) [1/L]; formally $\delta[x - X(t)] \rightarrow 1/\Delta x$ in the vicinity [^vicinity] of $x = X(t)$. By averaging over many particles, we get

:::{math}
C(x,t) = m_{0} \langle \delta[x - X(t)] \rangle = m_{0} p[X(t)] \equiv m_{0} p(x,t)
:::

where the PDF is defined as the number of runners in the vicinity of a given point $x = X$, at a given time $t$, divided by $\Delta x$; thus $p$ [1/L]. $C$ is then the "concentration" of runners in a one-dimensional case.

We can easily compute $p(X)$ given $p(v)$. In particular, we have

:::{math}
p_{x}(X) = | \ \frac{dv}{dX} \ | \ p[v(X)] = \frac{1}{t} p_{v}(X/t)
:::

where we emphasize with subscripts for which random variable the PDF refers to. Thus we see that given $p(v)$, we can determine at any "clock time" $t$ (most conveniently defined as ticking from the start of the race!) the spatial distribution ("plume") of runners, as $p(X)$. Assuming sufficiently many runners such that the ergodic hypothesis holds, we have that $p(X)$ (as a probabilistic, ensemble quantity) is proportional to the actual distribution of runners in a given race.

Useful compact measures of the PDF $p(X)$ are the mean and variance of the spatial location of particles, computed respectively as

:::{math}
:label: eq_spatial_location_particle_mean_variance
\langle X \rangle = \langle v \rangle t \qquad \sigma_x^{2} \equiv \langle X^{2} \rangle - \langle X \rangle^{2} = \sigma_v^{2} \, t^2 
:::

(sec-1-8-2-3)=
### 1.8.2.3. Ergodic hypothesis

The notion "ergodic hypothesis" is important in the context of statistical physics. It is useful here to reflect on the ergodic hypothesis in the present context. We can conduct the marathon race in the normal (conventional) way or in a less common (unconventional) way. The normal race would be conducted by gathering all runners at a starting point at the same time, and seeing them run through to the finish. If we assume that we have many runners (say several thousands) such that *their* velocity distribution is well represented by the PDF $p(v)$, the conditions for the race are ergodic and $p(X)$ and $p(\tau)$ provide accurate measures of the race outcome, spatially (snapshots of a "plume") or temporally ("breakthrough" at the finish line).

An alternative (unconventional) race would be to take one runner each day and let him/her run the marathon race *alone* [^only_thought_experiment]. Each race could then be referred to as a single realization, and the result of each such race with one runner, a member of a "marathon ensemble". Can we predict the outcome of any single realization? We can, but only statistically. In other words,  $p(X)$ and $p(\tau)$ in this case quantify the outcome statistically, as a PDF for any runner's position, or arrival time. We emphasize here that the analogy between tracer transport and a race with a single runner is highly relevant in the environmental context, since in many cases the source size of a tracer is *small* compared to the transport domain, and can easily be on the local scale. In that case, we predict transport in a statistical sense taking into account uncertainty, which is not considered in the classical deterministic descriptions.

Summarizing this subsection, we make the point that quantifying the statistics of underlying flow ($p(v)$ for the race) is critical for quantifying transport in many environmental flows. However, there generally is no single, well-defined way in which to estimate the equivalent of $p(v)$ for environmental transport. Relevant data *is* often available, and our task as engineers is to use the limited information available in a most efficient manner; this means that we extract as much information as possible from available data, using tools of statistics. It is important to emphasize here that the problem and difficulty is *not* a statistical one of data processing! We need to understand well the underlying (stochastic) processes that govern transport in order to be able to adopt and efficiently use statistical tools.

(sec-1-8-3)=
## 1.8.3. Probabilistic description of transport

With the above basic concepts (reactor, marathon race and random walk) we are in a position to formulate a more general/probabilistic view on transport than in the previous chapter.

(sec-1-8-3-1)=
### 1.8.3.1. Relationship between $p(X)$, $p(\tau)$

Clearly, there is a connection between the two descriptions and the transport equation (Eq. {ref}`eq_ade_1D_without_sinkorsource`). In fact, we can write (in 1-D)

:::{math}
\frac{\partial C}{\partial t} + \frac{\partial J}{\partial x} = 0
:::

where $C \sim p(X)$ and $J \sim p(\tau)$<!-- QUESTION: is it p(t) or p(tau) -->. Thus,

:::{math}
\frac{\partial p_{X}(x,t)}{\partial t} + \frac{\partial p_{\tau}(t,x)}{\partial x} = 0
:::

where $p_{X}(x,t) \equiv p[X(t)]$ and $p_{\tau}(x,t) \equiv p[\tau(x)]$. By integrating over $x$ and $t$, we get

:::{math}
:label: eq_CDF_X_tau
P_{X}(x,t) + P_{\tau}(x,t) = 1
:::

and

:::{math}
P_{X}(x,t) = \int_{0}^{x} p_{X}(\xi,t) d\xi \qquad \qquad P_{\tau}(x,t) = \int_{0}^{t} p_{\theta}(x,\theta) d\theta
:::

are the CDFs of $X$ and $\tau$, respectively. In words, Eq. {ref}`eq_CDF_X_tau` states that the probability of a particle being at $X < x$ at time $t$ and the probability that the particle has crossed $x$ with $X > x$ at time $t$, are complimentary and adding to 1.

(sec-1-8-3-2)=
### 1.8.3.2. The random walk

The underlying physical phenomena for dispersion (as discussed in the previous chapter) are associated with some type of fluctuations. The basic idea is that we know the flow (or advection) only to some level of detail. Below that level, we cannot characterize the flow deterministically, but we know that statistical variations (fluctuations) are present. When the wind speed is given, for instance, or the velocity in a stream, this represents estimated mean values. Clearly, there is much more going on in the flow field of the atmosphere or stream that is not captured by the mean flow! Specifically, there are smaller or greater fluctuations/ variations, which transport a tracer *relative* to the mean movement. This phenomenon is referred to as "dispersion" and is conventionally treated in analogy to diffusion (Fickian description).

From a "particle" perspective, the dispersive fluctuations are best described by the drunk, taking steps forward and backward relative to the mean flow, thereby causing spreading (or dispersion). An analogy can be a drunk taking a random walk in a moving train. The train is the analogy to the mean flow, whereas the drunken random walk provides a conceptual prototype for the spreading around the mean. Note that this is in contrast to the runners, where the "dispersion" is caused simply by the fact that runners will have traveled between $A$ and $B$ by different velocities, greater or smaller relative to the mean velocity of all runners; the different velocities result of course in different travel times $\tau$, the statistical variation of which is a direct measure of dispersion.

For pure dispersion/diffusion, the analogy with runners is inappropriate. Runners have a clear objective and are focused on getting to the finish in the shortest possible time. Thus in a sense they put great effort to minimize fluctuations! Dispersion is all about fluctuations and the appropriate analogy is one of a drunken individual, rather than a dedicated athlete.

A more appropriate analogy for diffusion is the walk of a drunken individual. More specifically, we think of the drunk as being at the location $A$ at initial time $t=0$ (e.g., getting out of a local pub!). The drunk then wishes to get home, which is located at $B$; the home may be located at a given distance from $A$, to the left or right of $A$ (think 1-D). The movement of the drunk at any given time is uncertain, i.e., it fluctuates randomly. The basic model of diffusion/dispersion, is thus one where from $A$, the drunken individual may take a step to the left, or a step to the right, with equal probability, 1/2. If the length of individual steps and the duration of individual steps is specified, then it can be shown that the "transport" of the drunk from $A$ to $B$ is a diffusion process (referred to as a *random walk*) [^robert_brown_pollen].

Imagine what happens if you were to observe a football from relatively far above and be able to observe only the ball. The motion of the ball should in this situation appear chaotic, bouncing from one end side to the other. This is an analogy to what happens to pollen particles due to collisions with water molecules. This type of irregular movement is referred to in physics as *Brownian motion*, and it constitutes a basic probabilistic model for diffusion processes. Another analogy mentioned earlier, is that of a drunk individual taking steps in any direction with equal probability; hence the reference to a "random walk".

To present basic outlines of this model, let us say that with each collision the pollen particles are displaced a constant length $l$ during a constant time interval $\tau$, see {ref}`fig_simplified_brownian_motion`. Thus the time it takes to make $N$ steps is $t=N \tau$, so that

:::{math}
N=\frac{t}{\tau}
:::

:::{figure} ../images/fig_simplified_brownian_motion.png
:label: fig_simplified_brownian_motion
:width: 200px
Simplified Brownian motion with constant step 1 in a constant time $\tau$. Starting at the point $O$, the particle goes to $X_1$, $X_2$, ..., $X_N$. The final distance at time $t$ is $R(t)$.
:::

The basic question is how far the pollen particle has moved after a period of time $t$. This mean that we are looking for a function $R(t)$ that describes the final traveled distance at time $t$, i.e., $R(N\tau)$. For each experiment we make with a single pollen particle [^single_pollen_single_runner], then for a given $t$ we would obtain different values for $R(t)$. The mean value $\langle R(t) \rangle = 0$, because the motion is isotropic as there is no spatially preferred direction, i.e., all directions are statistically equivalent [^mean_isotropic_motion]. The probability that the particle moves in a given direction is exactly the same as the probability that it moves in the opposite direction. Therefore, when we integrate for all space (over all directions) we obtain zero.

Consider now $\langle R^{2}(\tau) \rangle$ (noting that it is different from $\langle R(\tau) \rangle^{2} = 0$!). After one step, we can write,

:::{math}
\langle R(\tau)^{2} \rangle = R(\tau)^{2} = l^2
:::

We anticipate that

:::{math}
\langle R(t)^{2} \rangle = \langle R(N\tau)^{2} \rangle = N l^2
:::

We shall demonstrate that this is always correct. If the above relation is correct at $N$, then it should also be correct for $N - 1$, and we have

:::{math}
\langle R[(N-1)\tau]^{2} \rangle = (N-1)l^2
:::

How do we construct the last step $N$ from the step $N - 1$?

Let us now introduce $\mathbf{X}(t)$ as a two- or three-dimensional position vector of a given particle, from the origin 0. In the previous section with the marathon runners, we considered the position in one dimension, as $X$. Since $t = N\tau$, we can write $\mathbf{X}(t) \equiv \mathbf{X}_N$. We then have $R(t) = |\mathbf{X}_{N}| = (\mathbf{X}_{N} \cdot \mathbf{X}_{N})^{1/2}$. To compute $R$, we recognize (see {ref}`fig_simplified_brownian_motion`)

:::{math}
R(t)^{2} = (\mathbf{X}_{N} + \Delta \mathbf{X}_{N-1}) \cdot (\mathbf{X}_{N} + \Delta \mathbf{X}_{N-1})
:::

:::{math}
= \mathbf{X}_{N} \cdot \mathbf{X}_{N} + \Delta \mathbf{X}_{N-1} \cdot \Delta \mathbf{X}_{N-1} + 2\mathbf{X}_{N} \cdot \Delta \mathbf{X}_{N-1}
:::

By taking the average of the above relation, and distributing the average operator to each terms of the sum, we obtain three terms: $\langle \mathbf{X}_{N-1} \cdot \mathbf{X}_{N-1} \rangle$, $\langle \mathbf{X}_{N} \cdot \mathbf{X}_{N} \rangle$ and $\langle \mathbf{X}_{N} \cdot \Delta \mathbf{X}_{N-1} \rangle$. For the case where the steps are independent, i.e., the direction of the step $k$ does not depend on what happened during the step $k - 1$, then the scalar product $\langle \mathbf{X}_{N} \times \Delta \mathbf{X}_{N-1} \rangle = 0$, since $\mathbf{X}_N$ and $\Delta \mathbf{X}_{N-1}$ are uncorrelated. The final result is

:::{math}
\langle R^{2} \rangle = (N-1)l^{2} + l^{2} = Nl^{2}
:::

which is what we wanted to show.

Can we now establish a dependence of the function $R$ on time $t$? Let us make use of our first relationship that gives the number of steps during a period of time $t$. We write

:::{math}
\langle R(t)^{2} \rangle = N l^{2} = \frac{t l^{2}}{\tau} = \frac{l^{2}}{\tau} t = D t
:::

where $D$ is a diffusion coefficient with dimensions [L{sup}`2`\T]. Note that $\langle R(t)^{2}\rangle$ corresponds to the variance of $X$ in one dimension, i.e., $\sigma^{2}_{X} \equiv \langle R(t)^{2}\rangle$. Hence, the standard deviation is $\sigma_{X} \sim t^{1/2}$. This is an important relationship that characterizes physical processes dominated by diffusion. We observe in the above relationship a velocity $\langle u \rangle = l/\tau$ which corresponds to a mean velocity with which a pollen particle is displaced by random molecular motions of water. Then the diffusion coefficient reads

:::{math}
D = \langle u \rangle l
:::

which means that $l$ is a characteristic length scale of the fluctuations. Some typical values for $D$ are: $D \sim  10^{-5} - 10^{-3}$ m{sup}`2`/s in air, and $D \sim 10^{-9}$ m{sup}`2`/s in water.

Finally we note the analogy between the advecting tracer (or marathon runner) position $X(t)$ and the displacement $R(t)$. The position $X$ had clearly a mean defined in Eq. {ref}`eq_spatial_location_particle_mean_variance`, whereas $R$ has zero mean. However, if we subtract the mean as $X - \langle X \rangle \equiv X'$, then $X'$ and $R$ are analogous, with distinctly different behavior. In particular, we showed that $\sigma_{x}^{2} \sim t^2$<!-- QUESTION: Should it not be a capital X? -->, whereas it was shown that $\langle R \rangle \equiv \sigma_{R}^{2} \sim t$. In other words, for advective displacement of the type described in a marathon race, the displacement variance changes as time squared, which is significantly larger than for a diffusion process where it increases linearly in $t$.

Physically, the random walk is characterized by relatively short correlation of the velocity fluctuations/variations, over a scale $l$. By contrast, each marathon runner was assumed to have a constant velocity, and the only fluctuations considered were *among* the runners. For advective transport analogous to the marathon race, the velocity was, in technical terms, assumed perfectly correlated over the entire transport domain; this is equivalent to saying that the integral scale has a correlation length on the order of, or greater than, the transport domain. Such a model is relevant for some systems that exhibit long persistence, or correlation in velocities ("channeling", "preferential flow") such as in macro-porous soils, fractured networks, and some types of granular aquifers. Other types of systems exhibit relatively short correlations and hence can be appropriately described with the diffusion (random walk) model. In other cases, the correlation may be such that actual system behaves somewhere in between the random walk and marathon models, with the displacement variance being $\sim t^m$ where $1 < m \le 2$; such behavior is referred to as "anomalous diffusion", which has been found to arise in a variety of physical systems. Considerable effort has been dedicated to statistical physics over the past three to four decades, to studying "anomalous diffusion"; these results are becoming increasingly important for environmental applications.

[^local_scale_aquifer]: For an aquifer that is on the scale of say 100-1000 m, the local scale would be say a few decimeters up to meter.
[^finish_location_B]: Normally $B$ is appropriately defined as a line that transects the mean flow path, rather than a point.
[^target_location_B]: In the environmental context, the target location is some type of sensitive area/zone for which the potential presence of the tracer is of concern.
[^velocity_runner]: Clearly in reality a runner does not run with the same velocity throughout the race; for simplicity we shall here assume that it is approximately constant, focusing on the differences between runners.
[^vicinity]: "Vicinity" means within the infinitesimal element $\Delta x$ around point $x$; in this case - as with all large-scale transport problems - "infinitesimal" may imply rather large dimensions, several tens of meters, for instance!
[^only_thought_experiment]: This of course is just a *thought experiment* since such a race would not be practical for many reasons!
[^robert_brown_pollen]: In 1827, the botanist Robert Brown observed and analyzed the motion of small pollen particles on water. He demonstrated that these particles were not living organisms but rather were due to molecular collision of the water molecules with pollen particles.
[^single_pollen_single_runner]: Equivalent to a single runner marathon race!
[^mean_isotropic_motion]: We emphasize that is true in the absence of a mean flow, or "mean drift" as it is referred to in statistical physics.
