---
numbering:
  enumerator: 4.%s
kernelspec:
  name: python3
  display_name: Python 3
authors:
  - name:
      literal: " "
---

# Introduction
In this Notebook, we will illustrate the uncertainty and varibility by  examples of flow in heterogeneious aquifers.

# 1 Flow in stratified formations (layered structures)
A confined aqufier is studied with a clearly layered structure, as shown in the figure below:

:::{figure} ../images/fig_notebook4_confined_aquifer_layered.png
:label: fig_notebook4_confined_aquifer_layered
:width: 500px
:::

Each individial layer is homogeneious and isotropic with hydraulic conductivity $K_i$. There are many layers to enable quantification of $K$ for each layer. However, based on measurements, $K$ is found to follow a lognormal distribution, where $Y = \ln(K)$ and $Y \sim \mathcal{N}(\mu_{Y},\sigma_{Y})$, with $\mu_{Y}=-6.9$ and $\sigma_{Y}=0.3$. The porosity is uniform in the aquifer with 0.3. The hydraulic gradient $i=(h_{2}-h_{1})/L$.

From the lecture, we know that the probability density functions (PDFs) for the advective velocity is:

<!-- QUESTION: is it ln(k) or ln(k - \mu) and whatabout the mathcal? -->
:::{math}
:enumerated: false
f_{v}(v)=\frac{1}{K\sigma\sqrt{2\pi}} e^{\left(\frac{(\ln(k) -\mu)^2}{2\sigma^2}\right)} |n/i|
:::

In this example, we assume that there are 100 layers and we randomly generate the hydraulic conductivity for each layer. We then calculate the velocity distributions and compare with the analytical solution.

<!-- NOTE: Maybe a way to reload the random layers? -->
*(1) Randomly generate the hydraulic conductivity for each layer:*

::::{note icon=false} Generate lognormal distributed hydraulica conductivity for each layer
```{code-cell} python
:tags:[remove-input]

#@title Generate lognormal distributed hydraulic conductivity for each layer
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.cm as cm
from matplotlib.colors import BoundaryNorm
from matplotlib.ticker import MaxNLocator
import numpy as np

# np.random.seed(19680801)
K = np.random.lognormal(-6.9,0.3,size=(1000,1))
z = np.linspace(-6, 0, num=1001)
x = np.linspace(0, 340, num=2)

fig, ax1 = plt.subplots(1, 1,figsize=(12,6))
cf=ax1.pcolormesh(x, z, K,cmap=cm.coolwarm)
fig.colorbar(cf, ax=ax1,format='%0.2e',shrink=1)
plt.xticks(fontsize=18)
plt.yticks(fontsize=18)
plt.xlabel('x [m]',fontsize=18)
plt.ylabel('z [m]',fontsize=18)
plt.show()
```
::::

<!-- FIXME: Fix x-axis labeling so it does not overlap -->
*(2) Plot the PDF and CDF of hydraulic conductivity:*

::::{note icon=false} Plot the PDF and CDF of hydraulic conductivity
```{code-cell} python
:tags: [remove-input]

#@title Plot the PDF and CDF of hydraulic conductivity

fig, ax = plt.subplots(1, 1,figsize=(10,6))
counts, bins = np.histogram(K,20)
plt.plot(bins[:-1],counts/len(K))


plt.xlabel('K [m/s]',fontsize=18)
plt.ylabel('PDF',fontsize=18)
ax.set_ylim(0, 0.2)
plt.xticks(fontsize=18)
# ax.xaxis.set_major_formatter(ticker.FormatStrFormatter("%.1e"))
plt.yticks(fontsize=18)
plt.show()


# sort the data:
data_sorted = np.sort(K, axis=None)
# calculate the proportional values of samples
p = 1. * np.arange(len(K)) / (len(K) - 1)

# plot the sorted data:
fig, ax = plt.subplots(1, 1,figsize=(10,6))
ax.plot(data_sorted,p,lw=2)
plt.xticks(fontsize=18)
# ax.xaxis.set_major_formatter(ticker.FormatStrFormatter("%.1e"))
plt.yticks(fontsize=18)

plt.xlabel('K [m/s]',fontsize=18)
plt.ylabel('CDF',fontsize=18)
ax.set_ylim(0, 1)
plt.show()
```
::::

*(3) Plot the PDF and CDF of the advective velocity*

::::{note icon=false} PDF and CDF of the advective velocity
```{code-cell} python
:tags: [remove-input]

#@title PDF and CDF of the advective velocity
h1=37.3
h2=35.8
L=340
i=(h2-h1)/L
n=0.3
v=K*np.abs(i/n)


fig, ax = plt.subplots(1, 1,figsize=(10,6))
counts, bins = np.histogram(v,20)
plt.plot(bins[:-1],counts/len(K))

plt.xlabel('v [m/s]',fontsize=18)
plt.ylabel('PDF',fontsize=18)
ax.set_ylim(0, 0.2)
plt.xticks(fontsize=18)
# ax.xaxis.set_major_formatter(ticker.FormatStrFormatter("%.1e"))
plt.yticks(fontsize=18)
plt.show()


# sort the data:
data_sorted = np.sort(v, axis=None)
# calculate the proportional values of samples
p = 1. * np.arange(len(v)) / (len(v) - 1)

# plot the sorted data:
fig, ax = plt.subplots(1, 1,figsize=(10,6))
ax.plot(data_sorted,p,lw=2)
plt.xticks(fontsize=18)
# ax.xaxis.set_major_formatter(ticker.FormatStrFormatter("%.1e"))
plt.yticks(fontsize=18)

plt.xlabel('v [m/s]',fontsize=18)
plt.ylabel('CDF',fontsize=18)
ax.set_ylim(0, 1)
plt.show()
```
::::

*(4) Plot PDF and CDF for the resident time distributions*

::::{note icon=false} PDF and CDF of the resident time
```{code-cell} python
:tags: [remove-input]

#@title PDF and CDF of the resident time
T=np.divide(L,v)
fig, ax = plt.subplots(1, 1,figsize=(10,6))
counts, bins = np.histogram(T,20)
plt.plot(bins[:-1],counts/len(K))

plt.xlabel('T [s]',fontsize=18)
plt.ylabel('PDF',fontsize=18)
ax.set_ylim(0, 0.5)
plt.xticks(fontsize=18)
# ax.xaxis.set_major_formatter(ticker.FormatStrFormatter("%.1e"))
plt.yticks(fontsize=18)
plt.show()


# sort the data:
data_sorted = np.sort(T, axis=None)
# calculate the proportional values of samples
p = 1. * np.arange(len(v)) / (len(v) - 1)

# plot the sorted data:
fig, ax = plt.subplots(1, 1,figsize=(10,6))
ax.plot(data_sorted,p,lw=2)
plt.xticks(fontsize=18)
# ax.xaxis.set_major_formatter(ticker.FormatStrFormatter("%.1e"))
plt.yticks(fontsize=18)

plt.xlabel('T [s]',fontsize=18)
plt.ylabel('CDF',fontsize=18)
ax.set_ylim(0, 1)
plt.show()
```
::::

# 2 Heterogeneous aquifer with random hydraulic conductivity
In this example, we consider a heterogeneious aquifer with the size of 100 m $\times$ 100 m. The hydraulic conductivity $K$ follows correlated lognormal distribution, i.e.,

:::{math}
:enumerated: false
\ln(K) \sim \mathcal{N}_{\mathrm{2D}}(\mu, \sigma) = \mu + \sigma \mathcal{N}_{\mathrm{2D}}(0, 1)
:::

where $\mathcal{N}_{\mathrm{2D}}(0, 1)$ is the correlated standard Gaussian (normal) distribution.

The hydraulic head on the left-hand-size is 100 m. On the right-hand-side, the hydraulic head is 90 m. Assuming that the $\mu=-16.118$ and $\sigma^{2}=3$. The correlation length is 5m. We will solve the hydraulic head and velocity distributions in this heterogeneious aquifer in the following steps:

*(1) Firstly, we randomly generate a standard Gaussian (normal) field:*

::::{note icon=false} Generate Gaussian random field
```{code-cell} python
:tags: [remove-input]
#@title Generate Gaussian random field

import numpy as np
import matplotlib.pyplot as plt
from scipy.spatial import Delaunay
import matplotlib.cm as cm
import matplotlib
from matplotlib import ticker
matplotlib.rc('xtick', labelsize=18)
matplotlib.rc('ytick', labelsize=18)


nx=100;ny=100;lx=100;ly=100


# Gaussian fields
def Gaussian_field_2D(nx,ny,lx,ly,sdx,sdy):
    X=np.linspace(-0.5*lx,0.5*lx,nx)
    Y=np.linspace(-0.5*ly,0.5*ly,ny)
    XX, YY  = np.meshgrid(X, Y)

    gs2D = np.zeros([nx,ny])
    for i in range(nx):
      for j in range(ny):
        x=XX[i][j];y=YY[i][j]
        gs2D[i][j]=1.0/(sdx*sdy*2.0*np.pi) * np.exp(-0.5*((x/sdx)**2) - 0.5*((y/sdy)**2))

    A=np.random.normal(0,1,size=(nx,ny))

    F_g = np.fft.fft2(gs2D)

    F_A = np.fft.fft2(A)
    F_B  = np.multiply(F_g,F_A)
    F = np.fft.ifft2(F_B)

    F = np.real(F)
    # mean 0.0
    F -= np.mean(F)
    # std = 1.0
    F/=np.std(F)
    return XX,YY,F

XX,YY,F=Gaussian_field_2D(100,100,100,100,2.5,2.5)

x=XX.reshape(np.size(XX),1)+0.5*lx
y=YY.reshape(np.size(YY),1)+0.5*ly
f=F.reshape(np.size(F),1)
x=x.reshape(-1);y=y.reshape(-1);f=f.reshape(-1)
p=np.zeros([np.size(XX),2])
for i in range(np.size(XX)):
  p[i][0]=x[i]
  p[i][1]=y[i]

tri = Delaunay(p)
t=tri.simplices.copy()

fig,ax = plt.subplots(1, 1,figsize=(12,12))

plt.tricontourf(x,y,t,f,levels=np.linspace(np.min(f),np.max(f),101), cmap=cm.coolwarm, extend ='both') # ,locator=ticker.LogLocator(), norm=matplotlib.colors.LogNorm(),
plt.colorbar(format='%0.1e',shrink=0.8)
#plt.triplot(x,y,t)
#plt.plot(x,y,'ro')
plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('Ganussian random field',fontsize=18)
ax.set_aspect(aspect=1)
plt.show()
```
::::

*(2) We then map the random field to the hydraulic conductivity field, load mesh and solve the hydraulic head:*

::::{note icon=false} Hydraulic head
```{code-cell} python
:tags: [remove-input]
#@title Hydraulic head
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm
from scipy import sparse
from scipy.sparse.linalg import spsolve

# mesh
import matplotlib
matplotlib.rc('xtick', labelsize=18)
matplotlib.rc('ytick', labelsize=18)
import matplotlib.tri as tri

# conductivity field
k=np.exp(-16.118 + np.sqrt(2)*f)

nump=np.shape(p)[0]
numt=np.shape(t)[0]
print('The node number is:', nump)
print('The element number is:', numt)
x=np.transpose(p[:,[0]])[0]
y=np.transpose(p[:,[1]])[0]

fig,ax = plt.subplots(1, 1,figsize=(10,10))
plt.triplot(x, y, t)
plt.title('mesh',fontsize=18)
plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)


# boundary conditions
boundary_left=[];boundary_right=[];boundary_top=[];boundary_down=[];observation_point=[]
# left boundary points
for i in range(nump):
  if x[i]<=1e-6:
    boundary_left.append(i)

  if x[i]>=100-1e-6:
    boundary_right.append(i)

  #if y[i]<=1e-6:
  #  boundary_down.append(i)

  #if y[i]>=25-1e-6:
  #  boundary_top.append(i)
  if x[i]>=49-1e-2 and x[i]<=50+1e-2 and y[i]>=49-1e-2 and y[i]<=50+1e-2 :
    observation_point.append(i)


#print(observation_point)
bc_val_left = 100 #[m] head h = 100 m
bc_val_right = 90 #[m] head h = 90 m


plt.plot(x[boundary_left],y[boundary_left],'ro')
plt.plot(x[boundary_right],y[boundary_right],'go')
plt.plot(x[observation_point],y[observation_point],'yo')
ax.set_aspect(aspect=1)
plt.show()


Gp =[[0.5, 0.5],[0.5, 0],[0, 0.5]]
Gw =[1.0/6.0, 1.0/6.0, 1.0/6.0]

si=[];sj=[]
sk=[];sm=[]
nt=0

for ie in range(numt):
  em = t[ie]
  xy = np.zeros([3,2],dtype=float)
  fe = np.zeros([3,1],dtype=float)
  for ilp in range(3):
    xy[ilp][0]= p[em[ilp]][0]
    xy[ilp][1]= p[em[ilp]][1]
    fe[ilp]   = k[em[ilp]]

  K = np.zeros([3,3])
  for ig in range(3):
    L1 = Gp[ig][0]
    L2 = Gp[ig][1]
    W = Gw[ig]

    shape_function = np.array([[1-L1-L2, L1, L2]])
    deriv_shape_fun = np.array( [[-1, 1,0],[-1, 0, 1]])
    jacobian_matrix = np.dot(deriv_shape_fun,xy)
    det_jacob = np.linalg.det(jacobian_matrix)
    inv_jacob = np.linalg.inv(jacobian_matrix)
    deriv_jacob = np.dot(inv_jacob, deriv_shape_fun)

    kx=shape_function.dot(fe)
    kx=kx[0][0]
    ky=kx
    kappa = np.array([[kx,0],[0,ky]])

    K += W* np.dot(np.dot(deriv_jacob.T , kappa),  deriv_jacob) * det_jacob


  for i in range(3):
    for j in range(3):
      mm = t[ie][i]
      nn = t[ie][j]
      si.append(mm)
      sj.append(nn)
      sk.append(K[i][j])



KK = sparse.coo_matrix((sk, (si, sj)), shape=(nump, nump))
A = KK
A=A.tocsr()

F = np.zeros([nump,1])
F = F.reshape(-1)

# impose boundary conditions
for i in range(len(boundary_left)):
  ib=boundary_left[i]
  A[ib,ib]=A[ib,ib]*1e9
  F[ib]=A[ib,ib]*bc_val_left

for i in range(len(boundary_right)):
  ib=boundary_right[i]
  A[ib,ib]=A[ib,ib]*1e9
  F[ib]=A[ib,ib]*bc_val_right

# solve linear equation systems
h = spsolve(A,F,use_umfpack=True)

fig,ax = plt.subplots(1, 1,figsize=(12,12))
#plt.triplot(x, y, t)
plt.tricontourf(x,y,t,h,levels=np.linspace(np.min(h),np.max(h),11), cmap=cm.coolwarm, extend ='both')
plt.colorbar(format='%0.1f',shrink=0.8)


plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('water head [m]',fontsize=18)
ax.set_aspect(aspect=1)
plt.show()
```
::::

*(3) We then solve the velocity field:*

::::{note icon=false} Solve the velocity field
```{code-cell} python
:tags: [remove-input]

#@title Solve the velocity field
# postprocessing: to compute Darcy velocity
Fu = np.zeros([nump,1])
Fv = np.zeros([nump,1])

for ie in range(numt):
  em = t[ie]
  xy = np.zeros([3,2],dtype=float)
  he = np.zeros([3,1],dtype=float)
  fe = np.zeros([3,1],dtype=float)
  for ilp in range(3):
    xy[ilp][0]= p[em[ilp]][0]
    xy[ilp][1]= p[em[ilp]][1]
    he[ilp][0] = h[em[ilp]]
    fe[ilp]   = k[em[ilp]]

  K = np.zeros([3,3])
  Rx = np.zeros([3,1])
  Ry = np.zeros([3,1])
  for ig in range(3):
    L1 = Gp[ig][0]
    L2 = Gp[ig][1]
    W = Gw[ig]

    shape_function = np.array([[1-L1-L2, L1, L2]])
    deriv_shape_fun = np.array( [[-1, 1,0],[-1, 0, 1]])
    jacobian_matrix = np.dot(deriv_shape_fun,xy)
    det_jacob = np.linalg.det(jacobian_matrix)
    inv_jacob = np.linalg.inv(jacobian_matrix)
    deriv_jacob = np.dot(inv_jacob, deriv_shape_fun)

    kx=shape_function.dot(fe)
    kx=kx[0][0]
    ky=kx
    #kappa = np.array([[kx,0],[0,ky]])
    K  += W* np.dot(shape_function.T,  shape_function) * det_jacob
    Rx += W* (-kx)*np.dot(np.dot(shape_function.T,  deriv_jacob[[0]]), he) * det_jacob
    Ry += W* (-ky)*np.dot(np.dot(shape_function.T,  deriv_jacob[[1]]), he) * det_jacob

  for i in range(3):
    for j in range(3):
      mm = t[ie][i]
      nn = t[ie][j]
      si.append(mm)
      sj.append(nn)
      sk.append(K[i][j])

    Fu[mm][0]+= Rx[i][0]
    Fv[mm][0]+= Ry[i][0]

A = sparse.coo_matrix((sk, (si, sj)), shape=(nump, nump))

A=A.tocsr()

#Fu = Fu.reshape(-1)
#Fv = Fv.reshape(-1)

u = spsolve(A,Fu,use_umfpack=True)
v = spsolve(A,Fv,use_umfpack=True)

uv=np.sqrt(np.multiply(u,u)+np.multiply(v,v))

fig,ax = plt.subplots(1, 1,figsize=(12,12))
plt.tricontourf(x,y,t,uv,norm=matplotlib.colors.LogNorm(),levels=np.linspace(np.min(uv),np.max(uv),101), cmap=cm.coolwarm, extend ='both')
plt.colorbar(format='%0.1e',shrink=0.8)
#plt.quiver(x, y, u, v, pivot='mid')
plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('velocity magnitude sqrt(u^2+v^2) [m/s]',fontsize=18)
ax.set_aspect(aspect=1)
plt.show()


fig,ax = plt.subplots(1, 1,figsize=(12,12))
plt.quiver(x, y, u, v, pivot='mid')
plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('velocity vectors',fontsize=18)
ax.set_aspect(aspect=1)
plt.show()

fig,ax = plt.subplots(1, 1,figsize=(12,12))
seed_points=np.zeros([len(boundary_left),2])
for i in range(len(boundary_left)):
  seed_points[i][0]=x[boundary_left[i]]
  seed_points[i][1]=y[boundary_left[i]]

plt.streamplot(
    XX+0.5*lx, YY+0.5*ly, u.reshape(nx,ny), v.reshape(nx,ny), minlength=0.1, maxlength=20, density=20, start_points=seed_points,linewidth=1,color='b',
    cmap=plt.cm.coolwarm,integration_direction='both')

plt.show()
```
::::

# 3 Monte Carlo simulation of flow in heterogeneous aquifers

In this example, we would to check the hydraulic head and velocity at specific point, for example, at the center, $x= 50$ m and $y = 50$ m. Because the hydraulic conductivity is uncertain (since we only know it follows a lognormal distribution), the hydraulic head and velocity at specific point are also uncertain. The variability could be checked by Monte Carlo simulation that simulate the flow in multiple realizations. Then, the variability of hydraulic head and velocity at the specific point can be analysed statistically.

In previous exercise, we calculated the hydraulic head and velocity field in one realization. For Monte Carlo simulation, we just need to run many realizations. In each realization, new hydraulic conductivity field is randomly generated.

Let's run 10 times and record the calculated  hydraulic head and velocity values at the location, $x= 50$ m and $y = 50$ m, for statistical analysis.

*(1) Run Monte Carlo simulations and record the calculated  hydraulic head and velocity values:*

::::{note icon=false} Monte Carlo simulation
```{code-cell} python
:tags: [remove-input]
#@title Monte Carlo simulation
num_of_relizations=10


nump=np.shape(p)[0]
numt=np.shape(t)[0]

x=np.transpose(p[:,[0]])[0]
y=np.transpose(p[:,[1]])[0]

# boundary conditions
boundary_left=[];boundary_right=[];boundary_top=[];boundary_down=[]
observation_point=[]
# left boundary points
for i in range(nump):
  if x[i]<=1e-6:
   boundary_left.append(i)

  if x[i]>=100-1e-6:
    boundary_right.append(i)

  if x[i]>=49-1e-2 and x[i]<=50+1e-2 and y[i]>=49-1e-2 and y[i]<=50+1e-2 :
    observation_point.append(i)


bc_val_left = 100 #[m] head h = 100 m
bc_val_right = 90 #[m] head h = 90 m



Hydraulic_head=[]
Velocity=[]
for re in range(num_of_relizations):

  XX,YY,F=Gaussian_field_2D(100,100,100,100,5,5)

  x=XX.reshape(np.size(XX),1)+0.5*lx
  y=YY.reshape(np.size(YY),1)+0.5*ly
  f=F.reshape(np.size(F),1)

  # conductivity field
  k=np.exp(-16.118 + np.sqrt(2)*f)


  Gp =[[0.5, 0.5],[0.5, 0],[0, 0.5]]
  Gw =[1.0/6.0, 1.0/6.0, 1.0/6.0]

  si=[];sj=[]
  sk=[];sm=[]
  nt=0

  for ie in range(numt):
    em = t[ie]
    xy = np.zeros([3,2],dtype=float)
    fe = np.zeros([3,1],dtype=float)
    for ilp in range(3):
      xy[ilp][0]= p[em[ilp]][0]
      xy[ilp][1]= p[em[ilp]][1]
      fe[ilp]   = k[em[ilp]]

    K = np.zeros([3,3])
    for ig in range(3):
      L1 = Gp[ig][0]
      L2 = Gp[ig][1]
      W = Gw[ig]

      shape_function = np.array([[1-L1-L2, L1, L2]])
      deriv_shape_fun = np.array( [[-1, 1,0],[-1, 0, 1]])
      jacobian_matrix = np.dot(deriv_shape_fun,xy)
      det_jacob = np.linalg.det(jacobian_matrix)
      inv_jacob = np.linalg.inv(jacobian_matrix)
      deriv_jacob = np.dot(inv_jacob, deriv_shape_fun)

      kx=shape_function.dot(fe)
      kx=kx[0][0]
      ky=kx
      kappa = np.array([[kx,0],[0,ky]])

      K += W* np.dot(np.dot(deriv_jacob.T , kappa),  deriv_jacob) * det_jacob


    for i in range(3):
      for j in range(3):
        mm = t[ie][i]
        nn = t[ie][j]
        si.append(mm)
        sj.append(nn)
        sk.append(K[i][j])



  KK = sparse.coo_matrix((sk, (si, sj)), shape=(nump, nump))
  A = KK
  A=A.tocsr()

  F = np.zeros([nump,1])
  F = F.reshape(-1)

  # impose boundary conditions
  for i in range(len(boundary_left)):
    ib=boundary_left[i]
    A[ib,ib]=A[ib,ib]*1e9
    F[ib]=A[ib,ib]*bc_val_left

  for i in range(len(boundary_right)):
    ib=boundary_right[i]
    A[ib,ib]=A[ib,ib]*1e9
    F[ib]=A[ib,ib]*bc_val_right

  # solve linear equation systems
  h = spsolve(A,F,use_umfpack=True)


  # postprocessing: to compute Darcy velocity
  Fu = np.zeros([nump,1])
  Fv = np.zeros([nump,1])

  for ie in range(numt):
    em = t[ie]
    xy = np.zeros([3,2],dtype=float)
    he = np.zeros([3,1],dtype=float)
    fe = np.zeros([3,1],dtype=float)
    for ilp in range(3):
      xy[ilp][0]= p[em[ilp]][0]
      xy[ilp][1]= p[em[ilp]][1]
      he[ilp][0] = h[em[ilp]]
      fe[ilp]   = k[em[ilp]]

    K = np.zeros([3,3])
    Rx = np.zeros([3,1])
    Ry = np.zeros([3,1])
    for ig in range(3):
      L1 = Gp[ig][0]
      L2 = Gp[ig][1]
      W = Gw[ig]

      shape_function = np.array([[1-L1-L2, L1, L2]])
      deriv_shape_fun = np.array( [[-1, 1,0],[-1, 0, 1]])
      jacobian_matrix = np.dot(deriv_shape_fun,xy)
      det_jacob = np.linalg.det(jacobian_matrix)
      inv_jacob = np.linalg.inv(jacobian_matrix)
      deriv_jacob = np.dot(inv_jacob, deriv_shape_fun)

      kx=shape_function.dot(fe)
      kx=kx[0][0]
      ky=kx
      #kappa = np.array([[kx,0],[0,ky]])
      K  += W* np.dot(shape_function.T,  shape_function) * det_jacob
      Rx += W* (-kx)*np.dot(np.dot(shape_function.T,  deriv_jacob[[0]]), he) * det_jacob
      Ry += W* (-ky)*np.dot(np.dot(shape_function.T,  deriv_jacob[[1]]), he) * det_jacob

    for i in range(3):
      for j in range(3):
        mm = t[ie][i]
        nn = t[ie][j]
        si.append(mm)
        sj.append(nn)
        sk.append(K[i][j])

      Fu[mm][0]+= Rx[i][0]
      Fv[mm][0]+= Ry[i][0]

  A = sparse.coo_matrix((sk, (si, sj)), shape=(nump, nump))

  A=A.tocsr()

  u = spsolve(A,Fu,use_umfpack=True)
  v = spsolve(A,Fv,use_umfpack=True)

  uv=np.sqrt(np.multiply(u,u)+np.multiply(v,v))

  Hydraulic_head.append(h[observation_point[0]])
  Velocity.append(uv[observation_point[0]])
  print(" ")
  print("Realization:" ,re+1)
  print("The calculated hydraulic head at [x=50m, y=50m] is:", Hydraulic_head[re],"m")
  print("The calculated velocity at [x=50m, y=50m] is:", Velocity[re],"m/s")
```
::::

(2) Statistical analyse the recorded hydraulic head and velocity values:

::::{note icon=false} Statistical analyse the recorded hydraulic head and velocity values
```{code-cell} python
:tags: [remove-input]

#@title Statistical analyse the recorded hydraulic head and velocity values
fig,ax = plt.subplots(1, 1,figsize=(6,6))
xf=range(1,1+num_of_relizations)
plt.plot(xf,Hydraulic_head,'ro')
plt.xlabel('Realizations [-]',fontsize=18)
plt.ylabel('Observed hydraulic head [m]',fontsize=18)
plt.show()

print("The mean of the observed hydraulic head is:",np.mean(Hydraulic_head) )
print("The variance of the observed hydraulic head is:",np.var(Hydraulic_head) )
print("The min of the observed hydraulic head is:",np.min(Hydraulic_head) )
print("The max of the observed hydraulic head is:",np.max(Hydraulic_head) )


fig,ax = plt.subplots(1, 1,figsize=(6,6))
xf=range(1,1+num_of_relizations)
plt.plot(xf,Velocity,'bo')
plt.xlabel('Realizations [-]',fontsize=18)
plt.ylabel('Observed velocity magnitude [m/s]',fontsize=18)
plt.show()

print("The mean of the observed velocity magnitude is:",np.mean(Velocity) )
print("The variance of the observed velocity magnitude is:",np.var(Velocity) )
print("The min of the observed velocity magnitude is:",np.min(Velocity) )
print("The max of the observed velocity magnitude is:",np.max(Velocity) )
```
::::

# 4 Suggestions regarding to the illustration examples

(1) *Relax.* Run the above examples by youself;


(2) Try to run these examples with different input parameters, for example, to change the hydraulic conductivity values.

# References
Cvetkovic, V. D., and Shapiro, A. M. (1989), Solute advection in stratified formations, Water Resour. Res., 25( 6), 1283– 1289, doi:10.1029/WR025i006p01283.

Bear, J., Cheng, H.-D. Modeling Groundwater Flow and Contaminant Transport, Springer Netherlands, 2010. DOI: 10.1007/978-1-4020-6682-5 https://www.springer.com/gp/book/9781402066818
