---
numbering:
  enumerator: 7.%s
---

(sec-7-3)=
# 7.3. Uncertainty aspects

Data uncertainty may lower the value of material flow analysis interpretations (direct or indirect) as these initial uncertainties will propagate through the whole flow system which leads to uncertain results. In the other compendium parts uncertainty propagation is explained using probability distribution of variables (pdf, knowing the pdf of input variables gives the pdf of output variables); however, the result of a MFA would still remain uncertain. One approach to estimate the uncertainty propagation when uncertainties of the input variables are known is to use Gauss's Law (functions are expanded to Taylor series which are cut after the first-order term) but this is applicable only for normally distributed variables and small uncertainties. Another method that also works for other distributions and larger uncertainties is to use Monte Carlo Simulations (for a detailed description see {ref}`Section 2.2.3. <sec-2-2-3>`). For the rare case of over-determined systems (number of equations is higher than number of variables), Least-Square methods can be used to calculate result uncertainties of linear systems.

As it is normally very difficult to know beforehand how much input data uncertainties affect MFA results, sensitivity analyses (focusing on known or suspected inaccuracies) are commonly performed. The level of accuracy however is not always the same; just consider MFA as basis for absolute and relative interpretations as for instance reports of a current system state and comparison of two alternative management strategies. Nevertheless, also interpretations based on relative statements require accuracy in the most significant system variables. The level of uncertainty is often the most significant factor when doubts about the interpretation of MFA occur.

:::::{exercise}
:label: ex_7_1
Determine the cadmium accumulation/depletion in the anthroposphere in {ref}`fig_cadmium_flows`!
:::::

:::::{exercise}
:label: ex_7_2
a) MFA is based on a major principle of physics. Name it and describe its content! 

b) What is a possible benefit of this principle looking at the need of data for MFA?
:::::

:::::{exercise}
:label: ex_7_3
The flux of zinc into the city of Stockholm is about 2.7 kg/(capita yr), the output flux amounts to ca. 1.0 kg/(capita yr). Please discuss what these in- and outflows imply for the city and calculate the time until the zinc pool will double (assuming stationary conditions and a current reservoir of about 40 kg/capita [^source_bergbäck].
:::::

:::::{exercise}
:label: ex_7_4
The global flows and reservoirs of cadmium in the 1980s as presented in {ref}`fig_cadmium_flows` have been changed only two decades later according to an unpublished review from 2003. The following changes in flows and reservoirs of the anthroposphere have been revealed: cadmium exploitation has slightly increased and amounts to 18 to 20 $\cdot$ 10{sup}`3` t/yr. The anthropogenic reservoir has more than doubled to 500 $\cdot$ 10{sup}`3` t). Due to environmental protection, emissions to air and water have both decreased by about 80%. Data about the residence time of goods containing cadmium suggest that about 20 $\cdot$ 10{sup}`3` t/yr of cadmium are changing into goods that are no longer in use; they are either discarded as wastes or hibernating in the anthroposphere. The amount of cadmium transferred to landfills is not known, it may range between 2 and 20 $\cdot$ 10{sup}`3` t/yr.

a) Discuss the effect of reduced atmospheric cadmium emissions on the soil. 

b) In view of the increase in anthropogenic pool from 200 to 500 $\cdot$ 10{sup}`3` t of cadmium during the last 20 years, assess the cadmium flow to landfills.
:::::

:::::{exercise}
:label: ex_7_5
Consider a region of 2 500 km{sup}`2` and 1 million inhabitants. Only one river flows through this region. At the inflow, the river has a flow rate of 1 $\cdot$ 10{sup}`9` m{sup}`3`/yr, and the concentration of the main pollutant phosphorous (P) is 0.01 mg/l. The river discharges into a lake that represents a reservoir of 2.8 $\cdot$ 10{sup}`9` m{sup}`3` and a water residence time of 1 year. (Due to hydrological conditions in the area we can neglect precipitation, evaporation, etc. as well as we can assume that the river is unchanged when flowing through the lake.) The anthroposphere of the region comprises the following processes: agriculture, food industry, private households, composting of biomass wastes from private households, and wastewater treatment. Per capita consumption of P for nutrition is 0.4 kg/(capita year); 20% of this demand is supplied by food industries within the region. For cleaning purposes, 1 kg/(capita year) of P is used, with 70% contained in detergents for textiles (assume that all detergents are imported). Approximately 90% of total nutritional P and 100% of total detergent-based P are directed to the wastewater treatment plant (WWTP). The fraction of P that goes into sewage sludge is 0.85. The remaining 10% of nutritional P is contained in biomass waste from households that is composted without loss of P and applied to the soil. The pool of P is assessed at ca. 380 000 t. Agriculture imports 2 400 t of P in fertilizers and 1 200 t of P in animal feed; 80% of this P flow goes to the soil as manure, dung, and residues from harvesting. The balance is input to the regional food industry. The fraction of P that goes into food production wastes is 0.6. Food products that are not consumed within the region are exported. Approximately 1% of P that is annually applied to soil leaks to the surface water (river) as a result of erosion.

a) Draw a qualitative flowchart for the region described (system boundary, flows, processes). 

b) Quantify the P flows and reservoirs (t/yr and t) of the system. What is the accumulation of P in the soil? 

c) Assume that P in detergents for textiles is phased out. Is this measure sufficient to prevent eutrophication (limit for eutrophication = 0.03 mg/l) of the lake? 

d) What further measures do you suggest to prevent eutrophication?
:::::

*(For more problems please see @brunner2003. You may use the freeware tool "STAN - Software for Substance Flow Analysis[^STAN]" published by the same authors and available from the course homepage)*



[^source_bergbäck]: Bergbäck, B.; Johansson, K.; Mohlander, U. Urban metal flows a case study of Stockholm. *Water Air Soil Pollut. Focus* 1(3), 2001.
[^STAN]: http://www.iwa.tuwien.ac.at/iwa226\_english/stan.html