---
numbering:
  enumerator: 5.%s
kernelspec:
  name: python3
  display_name: Python 3
authors:
  - name:
      literal: " "
---

# 1 Aquatic phosphorus models: from simplicity to complicity

In this Notebook, we will build and solve a complex model from a simple case (model 1) to the more complicated case
(model 4). The mass balance equations are used to describe changes of state variables in the lake system
conceptualized below for each model (1–4). The assumptions are complete mixing (as in the previous examples),
i.e. the lake acts as a continuous stirred tank reactor (CSTR), and steady-state flow conditions.

## 1.1 Model 1

In the first model we assumed that only one state variable (soluble phosphorus) is important (see {ref}`fig_notebook5_P_model_1`),
and therefore we will have only one differential equation.

:::{figure} ../images/fig_notebook5_P_model_1.png
:label: fig_notebook5_P_model_1
:width: 500px
:::

::::{note icon=false} Parameter
```{code-cell} python

#@title  Parameters

# parameters
Q = 450 # hydraulic inflow/outflow [m³ day-3]
V = 700000 # lake volume [m³]
DD = 4.0 # lake depth [m]
II = 1500 # light intensity [kcal m-2 day-3]
k1 = 0.01; # phosphorus/biomass ratio of plankton [(mg P) (mg biomass)-1]
Rreld = 0.1; # rate constant for detritus decomposition [d-1]
Rrela = 0.1; # rate constant for release of P from algae [d-1]
Rdeta = 0.05; # rate constant for loss of algae to detritus [d-1]
KL = 400.; # Michaelis-Menten (half saturation) constant for light uptake [kcal m-2 day-3]
α = .3; # light extinction coefficient of water [m-1]
β = 0.18; # light extinction coefficient of phytoplankton [m-1]
Ks = 0.2; # Michaelis-Menten (half saturation) constant for P uptake, equal to the concentration of PS where Plim = 0.5 [mg l-1]
μmax = 1.0; # maximum growth rate of phytoplankton [d-1]
Smax = 0.5;  # maximum solar radiation [d-1]
Rrels = 0.001; # rate constant for release of phosphorous from sediment [d-1]
Rseda = 0.2; # rate constant for sedimentation of phytoplankton [d-1]
Rsedd = 0.1; # rate constant for sedimentation of phosphorus from detritus [d-1]
Rdetz = 0.03; # rate constant for loss of zooplankton to detritus [d-1]
Rsedz = 0.1; # rate of sedimentation of zooplankton [d-1]
Y = 0.3; # assimilation coefficient/efficiency of zooplankton
Czoo = 15; # zooplankton [(mg biomass) l-1]
GZK = 0.5; # minimum phytoplankton concentration for zooplankton grazing [(mg biomass) l-1]
GRZmax = 0.25; # rate constant for maximum grazing [d-1]
Kphyt = 2; # half saturation constant for zooplankton grazing [(mg biomass) l-1]
Psi = 0.02; # initial soluble phosphorus (P) [mg l-1 or (g P) m-3]
Pin = 0.2; # soluble phosphorus concentration in inflow water [mg l-1]
Phyti = 4. # initial phytoplankton [(mg biomass) l-1]
Pdeti = .04 # initial P in detritus [mg l-1]
Psedi = 30 #initial P in sediment [g m-2]
Zooi = 2; # P in zooplankton [mg l-1]

tL = 365*5 # modelling time
```
::::

::::{hint icon=false} Solve the Model 1
:::{anywidget} ../javafiles/ch5_model_1.mjs
:::
::::

## 1.2 Model 2
In the second model a phytoplankton and a detritus pool have been introduced (see {ref}`fig_notebook5_P_model_2`). Expanding
of a model with new state variables will increase complexity of the model.

:::{figure} ../images/fig_notebook5_P_model_2.png
:label: fig_notebook5_P_model_2
:width: 500px
:::

::::{note icon=false} Solve the Model 2
```{code-cell} python
:tags: [remove-input]
#@title Solve the Model 2

import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint
# Define a set of functions which calculates the derivative

def model2(f, t):
    f1,f2,f3=f
    dps_dt= (Pin-f1) *Q / V + Rreld * f3  -  ( np.log( (II+KL)/ (II*np.exp(-(α +β * f2)*DD)) +KL ) / (α +β * f2)/DD ) * μmax*(Smax*(1+np.sin(0.008603*t))*f1/(f1+Ks))*k1*f2
    dphyt_dt= (  ( np.log( (II+KL)/ (II*np.exp(-(α +β * f2)*DD)) +KL ) / (α +β * f2)/DD ) *μmax* (Smax*(1+np.sin(0.008603*t))*f1/(f1+Ks)) -Rdeta-Q/V  ) *f2
    dpdet_dt= Rdeta * k1 * f2 - (Rreld + Q / V) *f3
    f=[dps_dt,
       dphyt_dt,
       dpdet_dt]
    return  f

t = np.linspace(0,tL,365*5)
f0 = [Psi,
      Phyti,
      Pdeti]
fs = odeint(model2, f0, t)

fig,ax = plt.subplots(1, 1,figsize=(10,6))
plt.plot(t,fs[:,0],lw=2)
plt.xlabel('time [Day]',fontsize=18)
plt.ylabel('P_in [mg/l]',fontsize=18)
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.grid(True)
plt.show()

fig,ax = plt.subplots(1, 1,figsize=(10,6))
plt.plot(t,fs[:,1],lw=2)
plt.xlabel('time [Day]',fontsize=18)
plt.ylabel('P_hyt [mg/l]',fontsize=18)
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.grid(True)
plt.show()

fig,ax = plt.subplots(1, 1,figsize=(10,6))
plt.plot(t,fs[:,2],lw=2)
plt.xlabel('time [Day]',fontsize=18)
plt.ylabel('P_det [mg/l]',fontsize=18)
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.grid(True)
plt.show()
```
::::

## 1.3 Model 3

In the third model a sediment phosphorus pool is introduced as shown in {ref}`fig_notebook5_P_model_3`.

:::{figure} ../images/fig_notebook5_P_model_3.png
:label: fig_notebook5_P_model_3
:width: 500px
:::

::::{note icon=false} Solve the Model 3
```{code-cell} python
:tags: [remove-input]
#@title Solve the Model 3

def model3(f, t):
    f1,f2,f3,f4=f
    dps_dt= (Pin-f1) *Q / V + Rreld * f3  - μmax* ( np.log( (II+KL)/ (II*np.exp(-(α +β * f2)*DD)) +KL ) / (α +β * f2)/DD ) * (Smax*(1+np.sin(0.008603*t))*f1/(f1+Ks))*k1*f2 +Rrels*f4/DD
    dphyt_dt= ( μmax* ( np.log( (II+KL)/ (II*np.exp(-(α +β * f2)*DD)) +KL ) / (α +β * f2)/DD ) * (Smax*(1+np.sin(0.008603*t))*f1/(f1+Ks)) -Rdeta-Q/V -Rseda ) *f2
    dpdet_dt= Rdeta * k1 * f2 - (Rreld + Q / V + Rsedd) *f3
    dpsed_dt= (Rsedd * f3 + Rseda * f2 * k1) * DD - Rrels * f4
    f=[dps_dt,
       dphyt_dt,
       dpdet_dt,
       dpsed_dt]
    return  f

t = np.linspace(0,tL,365*5+1)
f0 = [Psi,
      Phyti,
      Pdeti,
      Psedi]
fs = odeint(model3, f0, t)


fig,ax = plt.subplots(1, 1,figsize=(10,6))
plt.plot(t,fs[:,0],lw=2)
plt.xlabel('time [Day]',fontsize=18)
plt.ylabel('P_in [mg/l]',fontsize=18)
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.grid(True)
plt.show()

fig,ax = plt.subplots(1, 1,figsize=(10,6))
plt.plot(t,fs[:,1],lw=2)
plt.xlabel('time [Day]',fontsize=18)
plt.ylabel('P_hyt [mg/l]',fontsize=18)
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.grid(True)
plt.show()

fig,ax = plt.subplots(1, 1,figsize=(10,6))
plt.plot(t,fs[:,2],lw=2)
plt.xlabel('time [Day]',fontsize=18)
plt.ylabel('P_det [mg/l]',fontsize=18)
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.grid(True)
plt.show()

fig,ax = plt.subplots(1, 1,figsize=(10,6))
plt.plot(t,fs[:,3],lw=2)
plt.xlabel('time [Day]',fontsize=18)
plt.ylabel('P_sed [mg/l]',fontsize=18)
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.grid(True)
plt.show()
```
::::

## 1.4 Model 4
In the forth model zooplankton grazing is introduced, as shown in {ref}`fig_notebook5_P_model_4`.

:::{figure} ../images/fig_notebook5_P_model_4.png
:label: fig_notebook5_P_model_4
:width: 500px
:::

::::{note icon=false} Solve the Model 4
```{code-cell} python
:tags: [remove-input]
#@title Solve the Model 4

Pin=0

Y=0.3
Czoo=15
GZK=0.5
GRZmax = 1 * .25;
Kphyt = 2;
Ks = .2;
μmax = 1.0;
Smax = 0.5;
Rrels = 0.001;

def model4(f, t):
    f1,f2,f3,f4,f5=f
    if f2-GZK>=0:
      GRZ=(GRZmax*(f2-GZK)*(Czoo-f5)*f5)/((f2+Kphyt)*Czoo)
    else:
      GRZ=0

    (GRZmax*(f2-GZK)*(Czoo-f5)*f5)/((f2+Kphyt)*Czoo)

    dps_dt= (Pin-f1) *Q / V + Rreld * f3  - μmax* ( np.log( (II+KL)/ (II*np.exp(-(α +β * f2)*DD)) +KL ) / (α +β * f2)/DD ) * (Smax*(1+np.abs(np.sin(0.008603*t)))*f1/(f1+Ks))*k1*f2 +Rrels*f4/DD
    dphyt_dt= ( μmax* ( np.log( (II+KL)/ (II*np.exp(-(α +β * f2)*DD)) +KL ) / (α +β * f2)/DD ) * (Smax*(1+np.abs(np.sin(0.008603*t)))*f1/(f1+Ks)) -Rdeta-Q/V -Rseda ) *f2  - GRZ
    dpdet_dt= Rdeta * k1 * f2 - (Rreld + Q / V + Rsedd) *f3 + Rdetz *f5 *k1 +GRZ*(1-Y)*k1
    dpsed_dt= (Rsedd * f3 + Rseda * f2 * k1 + Rsedz *f5 *k1) * DD - Rrels * f4
    #dzoo_dt=  (GRZmax * ( f2 - GZK) *( Czoo - f5)/ f5 )/ (( f2 + Kphyt) * Czoo)  - Rdetz * f5* k1 + (GRZmax * (f2 - GZK) *(Czoo - f5)*f5 ) /  ( (f2 + Kphyt) * Czoo) *(1 - Y) * k1 - Rsedz *f5  - Q / V *f5
    dzoo_dt=  Y*GRZ  - (Rdetz + Rsedz + Q / V) *f5

    f=[dps_dt,
       dphyt_dt,
       dpdet_dt,
       dpsed_dt,
       dzoo_dt]
    return  f


t = np.linspace(0,tL,365*5+1)
f0 = [Psi,
      Phyti,
      Pdeti,
      Psedi,
      Zooi]
fs = odeint(model4, f0, t)



fig,ax = plt.subplots(1, 1,figsize=(10,6))
plt.plot(t,fs[:,0],lw=2)
plt.xlabel('time [Day]',fontsize=18)
plt.ylabel('P_in [mg/l]',fontsize=18)
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.grid(True)
plt.show()

fig,ax = plt.subplots(1, 1,figsize=(10,6))
plt.plot(t,fs[:,1],lw=2)
plt.xlabel('time [Day]',fontsize=18)
plt.ylabel('P_hyt [mg/l]',fontsize=18)
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.grid(True)
plt.show()

fig,ax = plt.subplots(1, 1,figsize=(10,6))
plt.plot(t,fs[:,2],lw=2)
plt.xlabel('time [Day]',fontsize=18)
plt.ylabel('P_det [mg/l]',fontsize=18)
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.grid(True)
plt.show()

fig,ax = plt.subplots(1, 1,figsize=(10,6))
plt.plot(t,fs[:,3],lw=2)
plt.xlabel('time [Day]',fontsize=18)
plt.ylabel('P_sed [mg/l]',fontsize=18)
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.grid(True)
plt.show()

fig,ax = plt.subplots(1, 1,figsize=(10,6))
plt.plot(t,fs[:,4],lw=2)
plt.xlabel('time [Day]',fontsize=18)
plt.ylabel('P_zoo [mg/l]',fontsize=18)
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.grid(True)
plt.show()
```
::::