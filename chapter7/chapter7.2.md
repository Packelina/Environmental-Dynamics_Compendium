---
numbering:
  enumerator: 7.%s
---

(sec-7-2)=
# 7.2. Modeling anthropogenic metabolism

Methods to describe, investigate and evaluate anthropogenic material flows are commonly refereed to as Material flow analysis (MFA) or Substance flow analysis (SFA). The common feature of MFA with other modeling tools presented in this compendium is the applicability and validity of the basic concepts of mass conservation (balance) (see also {ref}`Section 1.3. <sec-1-3>`):

:::{math}
\begin{gathered}
\textit{Inflow - Outflow = Accumulation/Depletion} \\[2ex]
\frac{\mathrm{d}M}{\mathrm{d}t} = S(M_1, M_2, \dots, M_n)
\end{gathered}
:::

where $M$ represents a certain mass and $S$ all possible source and sink terms that exist in a defined system. The solution of the above differential equation is a function $M = M(t)$ that quantifies the dynamics of the system, i.e., the evolution in time of $M$.

In steady-state there are no internal sources or sinks ($M_1 = M_2 = ... = M_n = 0$) which implies that the net flux becomes 0.

:::{math}
\begin{gathered}
\textit{Inflow - Outflow = 0} \\[2ex]
\frac{\mathrm{d}M}{\mathrm{d}t} = 0
\end{gathered}
:::

In general, modeling material flows consists of following steps:

- Defining the system
- Quantifying flows and reservoirs
- Interpretation of the results

(sec-7-2-1)=
## 7.2.1. System definition

Modeling material flows in the technosphere means describing the exchange of materials within and across the boundaries of a defined system in a quantitative way. The term *substance/material* refers here to any element or material that can be defined in a unit as shown in the example of cadmium flows of {ref}`fig_cadmium_flows` Thus, also something that is not tangible (as for instance energy) may be considered in MFA. *Goods* consist of one or several substances and *reservoirs/pools* are sources/sinks of substances in a considered system. (Note that the term *material* is sometimes used to refer to goods and substances!) *Processes*, and on larger scales sectors, define the transport, transformation, and sometimes accumulation of substances. *Flows or fluxes* are used to describe both substance exchanges between processes/sectors within a system, and imports into and exports out of the system. A system of interest must have clearly defined *boundaries* in both time and space. Regarding spatial dimensions this may be any anthropogenic unit, e.g. countries, regions, cities, households, person, etc. with commonly annual flow accounting used (temporal dimension). (Note that investigated time periods should generally not be smaller than the time period of available data sets.)

A general layout of a flow system with the described components is given in {ref}`fig_cadmium_flows_MFA`. The example uses the lowest level of detail in a MFA to present the whole global cadmium cycle that is influenced my humans (as introduced in {ref}`fig_cadmium_flows`).

:::{figure} ../images/fig_cadmium_flows_MFA.png
:label: fig_cadmium_flows_MFA
:width: 500px
Global MFA of anthropogenic cadmium flows and reservoirs in the 1980s [10{sup}`3` t/yr] (derived from @baccini1991)
:::

In the following we will go through various levels of MFA; from basic mass balance setup to static and dynamic modeling of material flows.

(sec-7-2-2)=
## 7.2.2. Quantifying flows and reservoirs

Quantifying flows and reservoirs simply means to both gather available data (which may include performing research in order to produce data) and modeling flows and accumulation/depletion of reservoirs. MFA is used to organize and visualize this data (as the example of {ref}`fig_cadmium_flows_MFA` illustrates). Modeling the system may be done in different ways which are all described in the following sections and which all have special data requirements.

(sec-7-2-2-1)=
### 7.2.2.1. Material flow accounting

Most studies of anthropogenic material flows can be described as simple accounting (bookkeeping) of the relevant material flows and reservoirs. Even though, this is not modeling as we normally would define it, it provides very relevant information. First of all it helps to discover missing or incorrect data. Key flows and processes within the system, i.e. those that are more important than others with respect to their impact on other internal (and often also external) processes/sectors can be identified. Also future problems due to accumulation/depletion in certain sectors can be detected by material flow accounting. If established annually, this simple bookkeeping further monitors changes in flows and reservoirs over time.

(sec-7-2-2-2)=
### 7.2.2.2. Static modeling of anthropogenic material flows

If variables are used to describe flows, the relation between flows and reservoirs, etc we talk about static modeling. This includes simple data from "bookkeeping" but also emission and/or distribution factors and partition coefficients to describe the various outputs, processes/sectors and compartments of the system. Static modeling of anthropogenic material flows is mostly used for analyzing the causes of environmental problems by back-tracking of key flows, and predictions related to the effectiveness of various pollution abatement measures and side-effects of key flows.

(sec-7-2-2-3)=
### 7.2.2.3. Dynamic modeling of anthropogenic material flows

Dynamic modeling involves temporal aspects of variables such as lifetime of processes and flows, and retention times of materials in the system. Considering these time dimensions enables us to model e.g. when and how long management and policy have to be applied, when they give a feedback in the system and how do changes in our society change the system. In other words, dynamic modeling of anthropogenic material flows facilitates scenario analysis if the data on system flows and reservoirs is reliable.

(sec-7-2-3)=
## 7.2.3. Interpretation of the results

MFA store and visualize important data about flows and reservoirs, reflecting the state of a system either in a static or dynamic mode. This information can be used for various interpretations:

- Robustness of the system quantification (closed mass balance, data sources, guesstimates, uncertainty, etc)
- Translation and linkage to evaluation systems (e.g. Life Cycle Assessment (LCA), Input-Output Analysis (IOA; coupling of flows to economic values)) and indicator based management systems
- Linkage to policy and management (policy instruments, etc)

