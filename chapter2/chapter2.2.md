---
numbering:
  enumerator: 2.%s
---

(sec-2-2)=
# 2.2. Stochastic aspects of surface water modeling

There are many uncertainties that should be kept in mind when modeling environmental and surface water systems. One problem that causes uncertainty of the behavior of environmental systems is the lack of data with sufficiently high temporal and spatial resolution. In general, quantities that characterize environmental systems show high spatial and temporal variability. For instance, {ref}`fig_basin_Nconcentration_outlet` shows a time series of monthly nitrite+nitrate concentrations at the outlet of the Norrström drainage basin. The time series seems to vary almost erratically from month to month and the time series we obtain is very much dependent on the measurement times. Would the series look similar if all measurements were taken one day later? Maybe not, and that is why it is important to be aware of the uncertainties in the system characterization that are caused by a temporal data resolution that is poor compared to the characteristic time scales over which changes occur. In addition to such temporal variability, the spatial variability of relevant quantities is often also considerable. {ref}`fig_basin_Nconcentration_stations` illustrates average total nitrogen concentrations at 62 measurement stations in the Norrström basin in 1995, with the value at the outlet marked in red. The concentrations vary considerably and it becomes clear that spatial variability of the surface water concentrations is quite large and that we at the same time only have data at 62 points. To get a complete picture we would need many more sampling points, however, we know that this basin can be regarded as well monitored compared to most other drainage basins. Because sampling that is dense enough is almost always prohibitively expensive or even impossible, we have to face the challenge of quantifying system behavior accounting for such uncertainty or at least giving it a thought when interpreting our modeling results.

:::{figure} ../images/fig_basin_Nconcentration_outlet.jpg
:label: fig_basin_Nconcentration_outlet
:width: 500px
Time series of nitrite + nitrate concentration at the outlet of the Norrström basin.
:::

:::{figure} ../images/fig_basin_Nconcentration_stations.png
:label: fig_basin_Nconcentration_stations
:width: 400px
Total nitrogen concentration at 62 measurement stations in the Norrström basin.
:::

There are many other sources of uncertainty to be considered. System inherent uncertainty is important in environmental systems. For instance, weather is inherently unpredictable and is the driving force for many processes such as surface water flow and transport. Another type of uncertainty is the lack of knowledge of which processes are actually important for the problem at hand. Research aiming at finding the processes that govern different systems is one way to tackle this problem. Moreover, there is the uncertainty if the model really represents what it is intended to. This problem can be approached by a good model validation, i.e. a comparison of the model output with measurements. Finally, measurement errors are a source of uncertainty. Some measurement errors can be controlled, for instance by appropriate calibration of the equipment, whereas others are harder to control. In many cases the behavior of the individual that measures affects the results. When it comes to surface water measurements, easy access to the measurement location can be an important source of bias. One way to decrease the risk of such problems is to randomly select the measurement locations in advance.

Here we are concerned with parametric uncertainty, i.e., with the following question: How large is the uncertainty in the model output $y(x, p_i)$, given the uncertainty in the model input parameters $p_i = (p_1, \ p_2, \ p_3, \ p_4, \text{ etc.})$ of the model? In other words: How much does the uncertainty in the input parameters affect the results of our model calculations? The aim is then to quantify this uncertainty to improve the knowledge we gain from the model. Sometimes the quantification of parametric uncertainty is referred to as uncertainty analysis, in contrast to sensitivity analysis, dealing with how important the individual factors are with respect to the uncertainty of the output. However, this terminology is not used universally and some authors use the two terms synonymously.

There are a multitude of quantitative measures of uncertainty. If we can quantify the uncertainty in the input parameters, we can, for instance, try to quantify the range of the output variable that results from the range of these input parameters. We could also try to find the variance of the uncertain output variable. This means that we quantify the spreading of the results around the average result that follows from the quantification of the uncertainty in the input parameters. Finally, we could try to quantify the probability density function (PDF) of the uncertain model output, given the PDF of the uncertain input parameter.

The methods for uncertainty analysis discussed in the following are first-order analysis, calculation of output PDF given the PDF of input parameters, and Monte Carlo analysis.

(sec-2-2-1)=
## 2.2.1. First order analysis

The aim with a first-order analysis is to calculate the variance of the output variable, given the variance of the input parameter. We use the analytical solution of the mass balance equation in question and linearize the solution. This is achieved with a Taylor series expansion around the mean of the parameter of interest $p_{\mathrm{mean}}$ for the given variable value $x_1$. We will only keep first-order terms in the Taylor expansion, i.e. higher order terms are neglected (therefore first-order analysis). Thus we get:

:::{math}
f(x_{1}, p) = f(x_{1}, \overline{p}) + (p - \overline{p}) \left[ \frac{\partial (f(x_{1}, p))}{\partial p} \right]_{p=\overline{p}}
:::

taking the variance of this expression we obtain

:::{math}
\operatorname{VAR}\left[ f(x_{1},p) \right] = \operatorname{VAR} \left[ f(x_{1},\overline{p}) + (p-\overline{p}) \left[ \frac{\partial (f(x_{1},p))}{\partial p} \right]_{p=\overline{p}} \right]
:::

Using

:::{math}
\operatorname{VAR}[a+bx] = b^{2} \, \operatorname{VAR}[x]
:::

and

:::{math}
\operatorname{VAR}[\mathrm{constant}] = 0
:::

we get

:::{math}
\operatorname{VAR}[f(x_{1},p)] = \operatorname{VAR}[p] \left[ \left[ \frac{\partial (f(x_{1},p))}{\partial p} \right]_{p=\overline{p}} \right]^2
:::

which is what we want, an expression that relates the variance of the input parameter $p$ to the variance of the output variable $f(x_{1} , p)$. We now just need to calculate the value of the differential and insert it into the equation. The mean of the output variable equals the value of $f(x_{1} , p)$ for the mean of $p$.

The limitations of this approach are that an analytical solution of the mass balance equation is needed. Moreover, the range of variation around the mean of $p$ should be relatively small, since otherwise the neglect of the higher order terms in the Taylor series expansion may lead to significant error. Another drawback is that we can only calculate the variance of the result as a function of one uncertain input parameter (since $f$ is a function of $x_1$ and $p$ only).

(sec-2-2-2)=
## 2.2.2. PDF of output given PDF of input

The aim is to find the probability density function of the output variable $f(x, p)$ given the PDF of the input parameter $p$. To be able to find the PDF of the output, we need to have an analytical solution of our mass balance equation. Moreover, it must be possible to rearrange to function to obtain $p(f(x))$, i.e. the parameter as a function of the output $f(x)$. This will only be possible in some cases. The equation for calculating the output PDF $f_{x} (x)$ from the input parameter PDF $f_{p} (x)$ is expressed as

:::{math}
f_{x}(x) = \left| \frac{\partial p(x)}{\partial x} \right| f_{p}(p(x))
:::

where $p(x)$ is the analytical solution of the mass balance equation solved for the parameter $p$. To obtain the result we thus have to calculate $p(x)$ and its partial derivative with respect to $x$. The required analytical solution that can be solved for the uncertain input parameter limits this approach considerably. Again, it is only possible to look at the effect of one uncertain parameter at a time.

(sec-2-2-3)=
## 2.2.3. Monte Carlo analysis

The goal of a Monte Carlo analysis is to calculate statistics of output data, given the statistical distributions of the input parameters. In contrast to the two methods outlined above, Monte Carlo analysis can handle uncertainties of several parameters at a time. It is also a numerical method, that does not require analytical solutions of the mass balance equation. However, if an analytical solution is available it can be used for a Monte Carlo analysis as well.

The general idea is to solve the mass balance equations several times with different sets of input parameters. Using the appropriate statistical distributions to generate these input parameter sets, and a sufficient number of input parameter sets, the resulting outputs can be used to derive a statistical distribution or at least statistics thereof. {ref}`fig_monte_carlo` illustrates the steps required for an Monte Carlo analysis.

:::{figure} ../images/fig_monte_carlo.png
:label: fig_monte_carlo
:width: 500px
Steps of a Monte Carlo analysis.
:::

First, determine the probability distribution of the input parameters. If they are not known it may be possible to make a justifiable assumption. Then use a random generator to obtain parameter values that are distributed according to the input parameter distributions. The next step is then to run the model with the set of randomly generated parameter values. This step is repeated many times until a statistically significant number of simulations and associated results have been reached. This can be checked by calculating the wanted statistics after a certain number of iterations and then comparing it to the statistic that results after some additional runs. If it does not vary very much it may be possible to conclude that the statistic has stabilizing. If not, more runs are needed. In general, it will take more runs to get a good estimate of the variance than for the mean. The absolute number of runs required depends on the model and the input parameter distributions.

The advantage of the Monte Carlo analysis is that it is relatively straightforward. The model that has been set up and solved for the deterministic case can be used without modifications. Moreover, the effect of the combination of several uncertain input parameters can be analyzed. This may be important for some models where uncertainties may be larger for some input parameter combinations. Such combinations are hard to detect when analyzing the effect of parameter uncertainty of the output for one input parameter at a time.

The disadvantage of the Monte Carlo analysis is the high computational cost that results for complex models. In particular, models that are solved numerically often require long run times. It should be noted that in the suggested method the input parameters are assumed to be statistically independent of each other. This may not be given for the real system at hand.

:::::{exercise}
:label: ex_2_10
The arrival time $T$ of the peak of a pollutant plume in a stream is assumed to be normally distributed with $N(\mu, \sigma) = N(30 \, \mathrm{min}, 12.3 \, \mathrm{min})$. Calculate 

a) the probability that $T$ is smaller than 24 min; and 

b) the probability that $T$ is larger than 33 min.
:::::

:::::{exercise}
:label: ex_2_11
Given the mean and variance of an input parameter $p$, calculate the variance of the output at $f(x=x_{0} ;p)$, using a first order approximation.
:::::

:::::{exercise}
:label: ex_2_12
A truck dumps an environmentally hazardous, water-soluble substance into a stream. The amount of the substance $M$, the coefficient of dispersion $D_x$, as well as the average velocity of the stream $v$ are known and assumed constant. However the cross sectional area $A$ has only been estimated and is assumed to be uniformly distributed between ±10% of the given value. $M = 100$ kg, $D_x = 0.31$ m{sup}`2`/s, $A = 0.82$ m{sup}`2`, $v_x = 0.017$ m/s. The solution of the advection dispersion equation for an instantaneous pulse can be assumed to be applicable and is given by:

:::{math}
c(x,t) = \frac{M_0}{A\sqrt{4\pi D_{x} t}} e^{-\frac{(x-v_{x} t)^2}{4D_{x} t}}
:::

Based on the PDF of $A$ calculate the PDF of the peak concentration $C_{\mathrm{peak}}$ at $x = 1000$ m.
:::::

:::{exercise}
:label: ex_2_13
Consider the situation described in {ref}`ex_2_12`. Now use a Monte Carlo analysis to find the mean and variance of the peak concentration $C_{\mathrm{peak}}$ at $x = 1000$ m. Compare the results of the Monte Carlo analysis to the results obtained in {ref}`ex_2_12`. Try different number of realizations of $A$ and do several runs for each number of realizations. How is the result influenced?
:::