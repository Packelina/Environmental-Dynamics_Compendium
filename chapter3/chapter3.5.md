---
numbering:
  enumerator: 3.%s
kernelspec:
  name: python3
  display_name: Python 3
authors:
  - name:
      literal: " "
---

# Introduction
In this notebook, we will firstly demonstrate the linear relationship between the flow rate and hydraulic gradient of the Darcy's law, and then illustrate how to solve a 2D **saturated flow** problem: ***flow around a tunnel***. After that, we will show the Thiem solution for pumping test in a confined aquifer, and then illustrate how to solve 2D tracer transport problem: **spreading of contaminant from a landfill** and heat transport problem: **heat transfer in underground nuclear waste repository**.

Then we will present an interactive guide on solute contaminant transport with groundwater.

# 1 Darcy's Law
The flow rate through porous media is proportional to the head loss and inversely proportional to the length over
which the head loss. In 1D, the Darcy's law is expressed as

:::{math}
:enumerated: false
q=-K \frac{d h}{d x}
:::

where $q$ [L/T] is the specific discharge or simply the Darcy velocity, $K$ is the hydraulic conductivity, accounting for influencing factors such as the properties of the soil as well as the fluid (water).

In the following code and figure, we can see that the flow rate is a linear function of the head gradient:

::::{hint icon=false} Illustration of the linear relationship between flowrate and hydraulic gradient
:::{anywidget} ../javafiles/ch3_darcy_law_q_h.mjs
:::
::::

# 2 Groundwater Flow

## 2.1 Flow equation
From the lecture, we learnt how to derive groundwater flow equation by applying the Darcy's law to mass balance:

:::{math}
:enumerated: false
S_{\mathrm{s}} \frac{\partial h}{\partial t} = \frac{\partial }{\partial x}  K_{x} \frac{\partial h }{\partial x} + \frac{\partial }{\partial y}  K_{y} \frac{\partial h }{\partial y} + \frac{\partial }{\partial z}  K_{z} \frac{\partial h }{\partial z}
:::

where $h$ is water head [m], $S_\mathrm{s}$ is the specific storage [1/m] (volume of water stored or released per unit area when $h$ changes by one unit), $K_x$, $K_y$ and $K_z$ are the hydraulic conductivity [m/s] in $x$, $y$ and $z$ directions, respectively.

## 2.2 Transient flow
The following example illustrates how to solve a basic 2D groundwater flow problem by numerical simulation. In 2D, the above flow equation can be simplified as,

:::{math}
:enumerated: false
S_{\mathrm{s}} \frac{\partial h}{\partial t} = \frac{\partial }{\partial x}  K_{x} \frac{\partial h }{\partial x} + \frac{\partial }{\partial y}  K_{y} \frac{\partial h }{\partial y}
:::

We consider an confined aqufier with isotropic permeability. The domain size is 50 m in the length and 25 m in the height. Initially, the groundwater flows from the upstream (on the left-hand-side, the water head is 100 m) to the downstream (on the right-hand-side, the water head is 90 m) driven by natural hydraulic gradient (0.2). The specific storage $S_{\mathrm{s}} = 0.1$ 1/m and the hydraulic conductivity $K_x = K_y = 1 \times 10^{-7}$ m/s. Now we plan to build a tunnel in the center of this aqufier. The tunnel wall will be sealed by non-permeable materials. We want to know the evolution of groundwater flow in $1$ year after construction of the tunnel.

We simulate the groundwater flow process (using finite element method) in the following steps. You can run the code step by step, and using double click the **code cell** to open or hide the codes.

<!-- QUESTION: How to do when we load data from a .txt file? make python code available? -->
*(1) Define the physical parameters, including the hydraulic conductivity and specific storage coefficients, and the time stepping parameters*

::::{note icon=false} Input physical parameters
```{code-cell} python

#@title Input physical parameters
kx = 1e-7 # conductivity on x-directieon
ky = 1e-7 # conductivity on y-direction
s = 1e-1 # specific storage

# numerical parameters
seconds_per_year = 60*60*24*365 ; # seconds in 1 year
total_time = 1 *seconds_per_year # * year
dt = 0.1*seconds_per_year # each time step is 0.1 year. In total, there are 10 time steps.
```
::::

*(2) Load the mesh. The domain is discreted by triangular elements. Run the following code to download and show the mesh.*

::::{note icon=false} Load mesh
```{code-cell} python
:tags: [remove-input]
import matplotlib.tri as tri
import matplotlib.cm as cm
import matplotlib.pyplot as plt
import numpy as np
from pathlib import Path

# 1. Dynamically find the project root (where the 'chapter3' folder lives)
# This prevents crashes regardless of where GitHub executes the background code
current_dir = Path.cwd()
while not (current_dir / 'chapter3').exists():
    if current_dir == current_dir.parent:
        break # Safety stop if it hits the top of the hard drive
    current_dir = current_dir.parent

# 2. Build the guaranteed absolute paths
p_path = current_dir / 'chapter3' / 'data' / 'flow_tunnel_p.txt'
t_path = current_dir / 'chapter3' / 'data' / 'flow_tunnel_t.txt'

# 3. Load the data
p = np.loadtxt(p_path)
t = np.loadtxt(t_path, dtype='int32')

nump = np.shape(p)[0]
numt = np.shape(t)[0]
print('The node number is:', nump)
print('The element number is:', numt)
x = np.transpose(p[:, [0]])[0]
y = np.transpose(p[:, [1]])[0]

fig, ax = plt.subplots(1, 1, figsize=(10, 10))
plt.triplot(x, y, t)
plt.xlabel('x[m]', fontsize=18)
plt.ylabel('y[m]', fontsize=18)
plt.title('mesh', fontsize=18)

# boundary conditions
boundary_left = []; boundary_right = []; boundary_top = []; boundary_down = []; boundary_in = []
# left boundary points
for i in range(nump):
    if x[i] <= 1e-6:
        boundary_left.append(i)

    if x[i] >= 50 - 1e-6:
        boundary_right.append(i)

    if y[i] <= 1e-6:
        boundary_down.append(i)

    if y[i] >= 25 - 1e-6:
        boundary_top.append(i)

    d = np.sqrt((x[i] - 25)**2 + (y[i] - 12.5)**2)
    if x[i] >= 22.5 - 1e-6 and x[i] <= 27.5 + 1e-6 and y[i] >= 10 - 1e-6 and y[i] <= 12.5 + 1e-6 or d <= 2.5 + 1e-6:
        boundary_in.append(i)

bc_val_left = 100  # [m] head h = 10 m
bc_val_right = 90  # [m] head h = 9 m

plt.plot(x[boundary_left], y[boundary_left], 'ro')
plt.plot(x[boundary_right], y[boundary_right], 'go')
plt.plot(x[boundary_in], y[boundary_in], 'b.')
ax.set_aspect(aspect=1)
plt.show()
```
::::

*(3) Assign the initial condition before construction of the tunnel*

::::{note icon=false} Show the initial condition
```{code-cell} python
:tags: [remove-input]

#@title Show the initial condition
# initial condition
h00=np.zeros([nump,1],dtype=float)
for i in range(nump):
  h00[i] = bc_val_left - x[i] * (bc_val_left-bc_val_right)/50.0

fig,ax = plt.subplots(1, 1,figsize=(12,12))
#plt.triplot(x, y, t)
plt.tricontourf(x,y,h00.reshape(-1),levels=np.linspace(np.min(h00),np.max(h00),11), cmap=cm.coolwarm, extend ='both')
#plt.colorbar(format='%0.1f',shrink=0.42)

plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('initial water head before the tunnel extraction [m]',fontsize=18)
plt.colorbar(format='%0.1f',shrink=0.42)
ax.set_aspect(aspect=1)
plt.show()
```
::::

*(4) Solve the flow in time looping. We will get the water head evolution in 1 year after construction of the tunnel.*

:::::{card} Solve the initial condition
```{code-cell} python
:tags: [remove-input]
from scipy import sparse
from scipy.sparse.linalg import spsolve
import matplotlib.animation as animation
from IPython.display import HTML

# Gaussion points used for numerical integration
def quadrature_points():
    Gp =[[0.5, 0.5],[0.5, 0],[0, 0.5]]
    Gw =[1.0/6.0, 1.0/6.0, 1.0/6.0]
    return Gp,Gw

Gp,Gw = quadrature_points()

# 1. Pre-calculate the physics (do not plot yet)
h0 = h00
time_val = 0
n_step = int(total_time/dt)

# We will store the results for each frame in these lists
h_results = []
time_steps = []

for it in range(n_step):
    f = np.zeros([nump,1]) # load
    kappa = np.array([[kx,0],[0,ky]])

    si=[];sj=[]
    sk=[];sm=[]

    for ie in range(numt):
        em = t[ie]
        xy = np.zeros([3,2],dtype=float)
        for ilp in range(3):
            xy[ilp][0]= p[em[ilp]][0]
            xy[ilp][1]= p[em[ilp]][1]

        K = np.zeros([3,3])
        M = np.zeros([3,3])
        P = np.zeros([3,1])
        
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

            K += W* np.dot(np.dot(deriv_jacob.T , kappa),  deriv_jacob) * det_jacob
            M += W* s* np.dot(shape_function.T, shape_function) * det_jacob

        for i in range(3):
            for j in range(3):
                mm = t[ie][i]
                nn = t[ie][j]
                si.append(mm)
                sj.append(nn)
                sk.append(K[i][j]+M[i][j]/dt) 
                sm.append(M[i][j]/dt)

    A = sparse.coo_matrix((sk, (si, sj)), shape=(nump, nump))
    b = sparse.coo_matrix((sm, (si, sj)), shape=(nump, nump))
    A = A.tocsr()
    b = b.tocsr()

    F = b.dot(h0)
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
    h1 = spsolve(A,F,use_umfpack=True)

    h0 = h1.reshape(len(h1),1)
    time_val += dt
    
    # Save the data for this frame
    h_results.append(h1)
    time_steps.append(time_val)

# 2. CREATE THE ANIMATION PLAYER
fig, ax = plt.subplots(1, 1, figsize=(10, 8))

# Find global min and max so the colorbar stays consistent across all frames
h_min = np.min([np.min(h) for h in h_results])
h_max = np.max([np.max(h) for h in h_results])
levels = np.linspace(h_min, h_max, 11)

# Draw the initial colorbar once on the outside of the loop
initial_contour = ax.tricontourf(x, y, t, h_results[0], levels=levels, cmap=cm.coolwarm, extend='both')
fig.colorbar(initial_contour, ax=ax, format='%0.1f', shrink=0.42)

def animate(i):
    ax.clear()
    h_current = h_results[i]
    t_current = time_steps[i]
    
    # Redraw the contour for this specific frame
    ax.tricontourf(x, y, t, h_current, levels=levels, cmap=cm.coolwarm, extend='both')
    
    ax.set_xlabel('x [m]', fontsize=18)
    ax.set_ylabel('y [m]', fontsize=18)
    ax.set_title('water head [m], t = %.2f year' % (t_current/seconds_per_year), fontsize=18)
    ax.set_aspect('equal')

# Compile the frames into an animation object
ani = animation.FuncAnimation(fig, animate, frames=n_step, interval=400, blit=False)

# Prevent the static figure from displaying twice on the page
plt.close(fig)

# Display the interactive HTML5 video player!
HTML(ani.to_jshtml())
```

::: {attention icon=false} The source code
:class: dropdown

```python
#@title Solve the transcient flow process
from scipy import sparse
from scipy.sparse.linalg import dsolve

# Gaussion points used for numerical integration
def quadrature_points():
 Gp =[[0.5, 0.5],[0.5, 0],[0, 0.5]]
 Gw =[1.0/6.0, 1.0/6.0, 1.0/6.0]
 return Gp,Gw

Gp,Gw = quadrature_points()

# time loop
h0=h00
time = 0
n_step = int(total_time/dt )
for it in range(n_step):

  f = np.zeros([nump,1]) # load
  kappa = np.array([[kx,0],[0,ky]])

  si=[];sj=[]
  sk=[];sm=[]

  for ie in range(numt):
    em = t[ie]
    xy = np.zeros([3,2],dtype=float)
    for ilp in range(3):
       xy[ilp][0]= p[em[ilp]][0]
       xy[ilp][1]= p[em[ilp]][1]

    K = np.zeros([3,3])
    M = np.zeros([3,3])
    P = np.zeros([3,1])
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

      K += W* np.dot(np.dot(deriv_jacob.T , kappa),  deriv_jacob) * det_jacob
      M += W* s* np.dot(shape_function.T, shape_function) * det_jacob

    for i in range(3):
      for j in range(3):
        mm = t[ie][i]
        nn = t[ie][j]
        si.append(mm)
        sj.append(nn)
        sk.append(K[i][j]+M[i][j]/dt) #
        sm.append(M[i][j]/dt)

  #MM = sparse.coo_matrix((sk, (si, sj)), shape=(nump, nump))
  #KK = sparse.coo_matrix((sm, (si, sj)), shape=(nump, nump))
  #A = MM/dt + KK
  #b = MM/dt

  A = sparse.coo_matrix((sk, (si, sj)), shape=(nump, nump))
  b = sparse.coo_matrix((sm, (si, sj)), shape=(nump, nump))
  A=A.tocsr()
  b = b.tocsr()

  F = b.dot(h0)
  F=F.reshape(-1)

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
  h1 = dsolve.spsolve(A,F,use_umfpack=True)

  h0 = h1.reshape(len(h1),1)
  time += dt

  fig,ax = plt.subplots(1, 1,figsize=(12,12))
  #ax[0, 0].plt.triplot(x, y, t)
  plt.tricontourf(x,y,t,h1,levels=np.linspace(np.min(h1),np.max(h1),11), cmap=cm.coolwarm, extend ='both')
  plt.colorbar(format='%0.1f',shrink=0.42)

  plt.xlabel('x[m]',fontsize=18)
  plt.ylabel('y[m]',fontsize=18)
  plt.title('water head [m], t = %.2f year' %(time/seconds_per_year),fontsize=18)
  ax.set_aspect(aspect=1)
  plt.show()
```
:::
:::::

## 2.3 Steady-state flow
So far, we have solved the transcient flow process after construction of the tunnel.  If the storage is ignorable, the transient flow can be appriximated as steady-state flow. The flow equation can be simplified as,

:::{math}
:enumerated: false
\frac{\partial }{\partial x}  K_{x} \frac{\partial h }{\partial x} + \frac{\partial }{\partial x}  K_{y} \frac{\partial h }{\partial y} = 0
:::

We will show the **stead-state flow** in the following step:

::::{note icon=false} Solve the steady-state flow
```{code-cell} python
:tags: [remove-input]

#@title Solve the steady-state flow
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm
from scipy import sparse
from scipy.sparse.linalg import spsolve
from pathlib import Path

# input physical parameters
kx = 1e-7 # permeability on x-direction
ky = 1e-7 # permeability on y-direction

# mesh
import matplotlib
matplotlib.rc('xtick', labelsize=18)
matplotlib.rc('ytick', labelsize=18)
import matplotlib.tri as tri

# Dynamically find the project root to load data safely on GitHub
current_dir = Path.cwd()
while not (current_dir / 'chapter3').exists():
    if current_dir == current_dir.parent:
        break # Safety stop
    current_dir = current_dir.parent

p_path = current_dir / 'chapter3' / 'data' / 'flow_tunnel_p.txt'
t_path = current_dir / 'chapter3' / 'data' / 'flow_tunnel_t.txt'

p = np.loadtxt(p_path)
t = np.loadtxt(t_path, dtype='int32')

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
boundary_left=[];boundary_right=[];boundary_top=[];boundary_down=[];boundary_in=[]
# left boundary points
for i in range(nump):
  if x[i]<=1e-6:
    boundary_left.append(i)

  if x[i]>=50-1e-6:
    boundary_right.append(i)

  if y[i]<=1e-6:
    boundary_down.append(i)

  if y[i]>=25-1e-6:
    boundary_top.append(i)

  d=np.sqrt((x[i]-25)**2+(y[i]-12.5)**2)
  if x[i]>=22.5-1e-6 and x[i]<=27.5+1e-6 and y[i]>=10-1e-6 and y[i]<=12.5+1e-6 or d<=2.5+1e-6:
    boundary_in.append(i)

bc_val_left = 100 #[m] head h = 100 m
bc_val_right = 90 #[m] head h = 90 m
bc_val_in = 4 #[m] head h = 4 m

plt.plot(x[boundary_left],y[boundary_left],'ro')
plt.plot(x[boundary_right],y[boundary_right],'go')
plt.plot(x[boundary_in],y[boundary_in],'b.')
ax.set_aspect(aspect=1)
plt.show()

#
kappa = np.array([[kx,0],[0,ky]])

Gp =[[0.5, 0.5],[0.5, 0],[0, 0.5]]
Gw =[1.0/6.0, 1.0/6.0, 1.0/6.0]

si=[];sj=[]
sk=[];sm=[]
nt=0

for ie in range(numt):
  em = t[ie]
  xy = np.zeros([3,2],dtype=float)
  for ilp in range(3):
    xy[ilp][0]= p[em[ilp]][0]
    xy[ilp][1]= p[em[ilp]][1]

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

#for i in range(len(boundary_in)):
#  ib=boundary_in[i]
#  A[ib,ib]=A[ib,ib]*1e9
#  F[ib]=A[ib,ib]*bc_val_in


# solve linear equation systems
h = spsolve(A,F,use_umfpack=True)


fig,ax = plt.subplots(1, 1,figsize=(12,12))
#plt.triplot(x, y, t)
plt.tricontourf(x,y,t,h,levels=np.linspace(np.min(h),np.max(h),11), cmap=cm.coolwarm, extend ='both')
plt.colorbar(format='%0.1f',shrink=0.42)


plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('water head [m]',fontsize=18)
ax.set_aspect(aspect=1)
plt.show()
```
::::

From the solved water head, we can calculate the velocity by using the Darcy's law. The following step shows the calculated velocity field and quiver of the velocity vectors.

::::{note icon=false} Solve the velocity field
```{code-cell} python
:tags: [remove-input]

#@title Solve the velocity field
# postprocessing: to compute Darcy velocity
Fu = np.zeros([nump,1])
Fv = np.zeros([nump,1])

si=[];sj=[];sk=[]

for ie in range(numt):
  em = t[ie]
  xy = np.zeros([3,2],dtype=float)
  he = np.zeros([3,1],dtype=float)
  for ilp in range(3):
    xy[ilp][0]= p[em[ilp]][0]
    xy[ilp][1]= p[em[ilp]][1]
    he[ilp][0] = h[em[ilp]]


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

plt.tricontourf(x,y,t,uv,levels=np.linspace(0,np.max(uv),101), cmap=cm.coolwarm, extend ='both')
plt.colorbar(format='%0.1e',shrink=0.42)

#plt.quiver(x, y, u, v, pivot='mid')

plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('velocity magnitude sqrt(u^2+v^2) [m/s]',fontsize=18)
ax.set_aspect(aspect=1)
plt.show()


fig,ax = plt.subplots(1, 1,figsize=(12,12))

#plt.tricontourf(x,y,t,uv,levels=np.linspace(0,np.max(uv),101), cmap=cm.coolwarm, extend ='both')
#plt.colorbar(format='%0.1e',shrink=0.42)

plt.quiver(x, y, u, v, pivot='mid')

plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('velocity vectors',fontsize=18)
ax.set_aspect(aspect=1)
plt.show()
```
::::

# 3 Radial Flow in Pumping Test

In this example, we consider pumping test in a well, where the water is extracted at a constant rate and where equilibrium prevails. We assume that the
aquifer is confined (a bounding top end bottom formation), the geologic formations are horizontal and of infinite
horizontal extent, the aquifer is homogeneous and isotropic, groundwater flow is horizontal and Darcy's law is
valid.

:::{figure} ../images/fig_ex_landfill_pump.jpg
:width: 500px
:::

Two additional observation wells are constructed at a distance $r_1$ and $r_2$ from the pumping well. The observed water heads are $h_1$ and $h_2$ at $r_1$ and $r_2$, respectively. We want to determine the transmissivity ($T = K \cdot B$).

From the lecture, we learnt that the solution of the transmissivity is,

:::{math}
:enumerated: false
T = \frac{Q}{2 \pi (h_{2} -h_{1})} \log\left(\frac{r_2}{r_1}\right)
:::

::::{note icon=false} ✏️ **Exercise**
Calculate the transmissivity for the case when $Q = 1 \cdot 10^{-3}$ m{sup}`3`/s, $r_{1} = 5$ m, $r_{2} = 10$ m, $h_{1} = 6$ m, and $h_{2} = 12$ m:

:::{dropdown} Solution
```{code-cell} python
:tags: [remove-input]

import numpy as np
def well_pumping_T(Q,r1,r2,h1,h2):
  T=Q/(2*np.pi*(h2-h1))*np.log(r2/r1)
  return T

# e.g. Q=1e-3 m^3/s; r1=5m; r2=10m; h1=6m; h2=12m
T=well_pumping_T(Q=1e-3,r1=5,r2=10,h1=6,h2=12)
print('The transmissivity is',T, 'm^2/s')
```
:::
::::

::::{hint icon=false} Water head drawdown
:::{anywidget} ../javafiles/ch3_water_head_drawdown.mjs
:::
::::

# 4 Tracer (solute) Transport

## 4.1 Adevction Dispersion Retardation Equation
From the lecture, we learnt the general transport equation (Adevction Dispersion Retardation Equation, ADRE) written in 1D is

:::{math}
:enumerated: false
R \frac{\partial C}{\partial t} = D  \frac{\partial^{2} C }{\partial x^2} - v \frac{\partial C}{\partial x}  +S(C) = 0
:::

where $R$ is retardation factor; $C$ is the concentration; $D$ is the dispersion coefficient; $v$ is advective velocity or average pore velocity (Darcy's velocity $q$ divided by porosity $n$, i.e., $q/n$) and $S(C)$ is the sink/source term that could be a function of $C$.

In 2D, the ADRE is

:::{math}
:enumerated: false
R \frac{\partial C}{\partial t} = D_{x}  \frac{\partial^{2} C }{\partial x^2} +D_{y}  \frac{\partial^{2} C }{\partial y^2}- v_{x} \frac{\partial C}{\partial x} -v_{y} \frac{\partial C}{\partial y} +S(C) = 0
:::

where $D_x$ and $D_y$ are the dispersion coefficient in the $x$ and $y$ direction, respectively; and $v_x$ and $v_y$ are the advective velocity in the $x$ and $y$ direction, respectively.

## 4.2 Solute transport example
The following example illustrates how to solve a basic 2D transport problem by numerical simulation. We consider an aquifer illustrated by the figure shown below.

:::{figure} ../images/fig_notebook3_solute_transport_example.png
:label: fig_notebook3_solute_transport_example
:width: 500px
:::

The groundwater levels are 15 m and 5 m on the right-hand-side and the left-hand-side, respectively. The conductivity of the aquifer is $K_{x}=K_{y}=1 \cdot 10^{-5}$ m/s. The porosity is uniform in the aquifer with 0.1. Groundwater flow in the aquifer is assumed at steady-state. On the top right-hand-side corner, there is a channel suddenly filled with a tracer/contaminant with the concentration of 1 mol/m{sup}`3`. The dispersion coefficient is $D_{x}=D_{y} = 1 \cdot 10^{-8}$ m{sup}`2`/s. The retardation coefficient is 1 (e.g., non-sorbable). In this case, there is no sink or source that needs to be considered in the aquifer, *i.e.*, $S(C)=0$. There is an observation well at the outlet boundary on the right-hand-side. We need to simulate the tracer/contaminant transport with groundwater in the aquifer, to check the breakthrough in the observation well.

We will solve this tracer/contaminant transport problem in the following steps. You can run the code step by step, and using double click '**code cell**' to open or hide the codes.

*(1) Define physical parameters.*

::::{note icon=false} Input parameters
```{code-cell} python

# Solving the Advection-Dispersion Equation (ADE)
# physical parameters
kx = 1e-5 # conductivity on x-direction
ky = 1e-5 # conductivity on y-direction
Dx = 1.0e-6
Dy = 1.0e-6
C0 = 1;

# numerical parameters
seconds_per_day = 60*60*24 ; # seconds in 1 day
dt = 1.0*seconds_per_day # each time step is 1 day.
total_time = 60 *seconds_per_day # * day, in total, there are 60 time steps.
```
::::

*(2) Load mesh and set boundary conditions.*

::::{note icon=false} Load mesh
```{code-cell} python
:tags: [remove-input]

#@title Load mesh
# mesh
import matplotlib
matplotlib.rc('xtick', labelsize=18)
matplotlib.rc('ytick', labelsize=18)
import matplotlib.tri as tri
import matplotlib.cm as cm
import numpy as np
import matplotlib.pyplot as plt
from scipy import sparse
from scipy.sparse.linalg import spsolve
from pathlib import Path

# Dynamically find the project root to load data safely on GitHub
current_dir = Path.cwd()
while not (current_dir / 'chapter3').exists():
    if current_dir == current_dir.parent:
        break # Safety stop
    current_dir = current_dir.parent

p_path = current_dir / 'chapter3' / 'data' / 'transport_p.txt'
t_path = current_dir / 'chapter3' / 'data' / 'transport_t.txt'

p = np.loadtxt(p_path)
t = np.loadtxt(t_path, dtype='int32')
nump=np.shape(p)[0]
numt=np.shape(t)[0]
print('The node number is:', nump)
print('The element number is:', numt)
x=np.transpose(p[:,[0]])[0]
y=np.transpose(p[:,[1]])[0]

fig,ax = plt.subplots(1, 1,figsize=(12,12))
plt.triplot(x, y, t)
plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('mesh',fontsize=18)

# boundary conditions
boundary_left=[];boundary_right=[];boundary_top=[];boundary_down=[];boundary_c=[]

# left boundary points
for i in range(nump):
  if x[i]<=1e-6:
    boundary_left.append(i)

  if x[i]>=50-1e-6:
    boundary_right.append(i)

  if y[i]<=1e-6:
    boundary_down.append(i)

  if (y[i]>=13-1e-6 and x[i]<=2.5) or (y[i]>=15-1e-6 and x[i]>3) or (y[i]>=4*x[i]+3-1e-6 and (x[i]<=3 and x[i]>2.5)):
    boundary_top.append(i)

  if (y[i]>=13-1e-6 and x[i]<=2.5)  or (y[i]>=4*x[i]+3-1e-6 and (x[i]<=3 and x[i]>2.5)):
    boundary_c.append(i)


bc_val_left = 15.0 #[m] head h = 15 m
bc_val_top = 15.0 #[m] head h = 15 m
bc_val_right = 5.0 #[m] head h = 5 m
bc_val_c = 1.0 # c=1 mol/m^3

plt.plot(x[boundary_left],y[boundary_left],'ro')
plt.plot(x[boundary_top],y[boundary_top],'ro')
plt.plot(x[boundary_right],y[boundary_right],'go')

ax.set_aspect(aspect=1)
plt.show()

print("The red dots represent the boundary condition with water head 15m")
print("The green dots represent the boundary condition with water head 5m")
```
::::

*(3) Solve the steady-state groundwater flow field.*

::::{note icon=false} Solve (steady-state) flow field
```{code-cell} python
:tags: [remove-input]

#@title Solve (steady-state) flow field
#
kappa = np.array([[kx,0],[0,ky]])

Gp =[[0.5, 0.5],[0.5, 0],[0, 0.5]]
Gw =[1.0/6.0, 1.0/6.0, 1.0/6.0]

si=[];sj=[]
sk=[];sm=[]
nt=0

for ie in range(numt):
  em = t[ie]
  xy = np.zeros([3,2],dtype=float)
  for ilp in range(3):
    xy[ilp][0]= p[em[ilp]][0]
    xy[ilp][1]= p[em[ilp]][1]

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

for i in range(len(boundary_top)):
  ib=boundary_top[i]
  A[ib,ib]=A[ib,ib]*1e9
  F[ib]=A[ib,ib]*bc_val_top


# solve linear equation systems
h = spsolve(A,F,use_umfpack=True)


fig,ax = plt.subplots(1, 1,figsize=(15,15))
#plt.triplot(x, y, t)
plt.tricontourf(x,y,t,h,levels=np.linspace(np.min(h),np.max(h),20), cmap=cm.coolwarm, extend ='both')
plt.colorbar(format='%0.1f',shrink=0.3)


plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('water head [m]',fontsize=18)
ax.set_aspect(aspect=1)
plt.show()



# postprocessing: to compute Darcy velocity
Fu = np.zeros([nump,1])
Fv = np.zeros([nump,1])

si=[];sj=[];sk=[]

for ie in range(numt):
  em = t[ie]
  xy = np.zeros([3,2],dtype=float)
  he = np.zeros([3,1],dtype=float)
  for ilp in range(3):
    xy[ilp][0]= p[em[ilp]][0]
    xy[ilp][1]= p[em[ilp]][1]
    he[ilp][0] = h[em[ilp]]


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

fig,ax = plt.subplots(1, 1,figsize=(15,15))

plt.tricontourf(x,y,t,uv,levels=np.linspace(0,np.max(uv),101), cmap=cm.coolwarm, extend ='both')
plt.colorbar(format='%0.1e',shrink=0.3)

#plt.quiver(x, y, u, v, pivot='mid')

plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('velocity magnitude sqrt(u^2+v^2) [m/s]',fontsize=18)
ax.set_aspect(aspect=1)
plt.show()


fig,ax = plt.subplots(1, 1,figsize=(12,12))

#plt.tricontourf(x,y,t,uv,levels=np.linspace(0,np.max(uv),101), cmap=cm.coolwarm, extend ='both')
#plt.colorbar(format='%0.1e',shrink=0.42)

plt.quiver(x, y, u, v, pivot='mid')

plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('velocity vectors',fontsize=18)
ax.set_aspect(aspect=1)
plt.show()
```
::::

*(4) Solve the transport process.*

:::::{card} Solve the solute transport process
```{code-cell} python
:tags: [remove-input]
from scipy import sparse
from scipy.sparse.linalg import spsolve
import matplotlib.animation as animation
from IPython.display import HTML, display
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm

#@title Solve the solute transport process
# time loop for solute transport
D = np.array([[Dx,0],[0,Dy]])

Gp =[[0.5, 0.5],[0.5, 0],[0, 0.5]]
Gw =[1.0/6.0, 1.0/6.0, 1.0/6.0]

si=[];sj=[]
sk=[];sm=[]
nt=0

for ie in range(numt):
    em = t[ie]
    xy = np.zeros([3,2],dtype=float)
    eU = np.zeros([3,1],dtype=float)
    eV = np.zeros([3,1],dtype=float)
    for ilp in range(3):
        xy[ilp][0]= p[em[ilp]][0]
        xy[ilp][1]= p[em[ilp]][1]
        eU[ilp][0]= u[em[ilp]]
        eV[ilp][0]= v[em[ilp]]

    K = np.zeros([3,3])
    M = np.zeros([3,3])

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

        Um = np.dot(shape_function,eU)/0.1
        Vm = np.dot(shape_function,eV)/0.1
        Mat_UV = np.array( [[Um[0][0],0],[ 0, Vm[0][0]]])

        sf2 = np.concatenate((shape_function, shape_function))

        K += W* np.dot(np.dot(deriv_jacob.T , D),  deriv_jacob) * det_jacob + W * np.dot(np.dot(sf2.T , Mat_UV),  deriv_jacob) * det_jacob
        M += W* np.dot(shape_function.T , shape_function) * det_jacob

    for i in range(3):
        for j in range(3):
            mm = t[ie][i]
            nn = t[ie][j]
            si.append(mm)
            sj.append(nn)
            sk.append(K[i][j])
            sm.append(M[i][j])

KK = sparse.coo_matrix((sk, (si, sj)), shape=(nump, nump))
AK = KK
AK=AK.tocsr()

MM = sparse.coo_matrix((sm, (si, sj)), shape=(nump, nump))
AM = MM
AM=AM.tocsr()

KM = AM + dt * AK

# impose boundary conditions
for i in range(len(boundary_c)):
    ib=boundary_c[i]
    KM[ib,ib]=KM[ib,ib]*1e3

S = np.zeros([nump,1])

for i in range(len(boundary_c)):
    S[boundary_c[i]]=bc_val_c

Q = np.zeros([nump,1])
time = 0

# 1. SETUP STORAGE FOR ANIMATION
S_results = []
time_steps = []
BTC_time = [0]
BTC_c = [0]

# Save the initial condition (t=0)
S_results.append(S.copy().reshape(-1))
time_steps.append(time)

# 2. RUN THE PHYSICS LOOP (No plotting here!)
while time < total_time:
    Q = AM*S

    for i in range(len(boundary_c)):
        ib=boundary_c[i]
        Q[ib]=KM[ib,ib]*bc_val_c

    Snew  = spsolve(KM,Q,use_umfpack=True)

    S = Snew
    time = time + dt
    BTC_time.append(time/seconds_per_day)
    BTC_c.append(np.mean(S[boundary_right]))
    
    # Save frame data
    S_results.append(S.copy().reshape(-1))
    time_steps.append(time)


# 3. CREATE THE ANIMATION PLAYER
fig, ax = plt.subplots(1, 1, figsize=(10, 8))

# Static colorbar setup
levels = np.linspace(0, 1, 11)
initial_contour = ax.tricontourf(x, y, t, S_results[0], levels=levels, cmap=cm.coolwarm, extend='both')
fig.colorbar(initial_contour, ax=ax, format='%0.1f', shrink=0.42)

def animate(i):
    ax.clear()
    S_current = S_results[i]
    t_current = time_steps[i]
    
    # Redraw frame
    ax.tricontourf(x, y, t, S_current, levels=levels, cmap=cm.coolwarm, extend='both')
    
    ax.set_xlabel('x [m]', fontsize=18)
    ax.set_ylabel('y [m]', fontsize=18)
    ax.set_title('Concentration [mol/m^3], t = %.1f days' % (t_current/seconds_per_day), fontsize=18)
    ax.set_aspect('equal')

# Compile frames into animation
ani = animation.FuncAnimation(fig, animate, frames=len(S_results), interval=200, blit=False)

# Prevent static figure from displaying twice
plt.close(fig)

# Render the interactive video player
display(HTML(ani.to_jshtml()))
```

::: {attention icon=false} The source code
:class: dropdown

```python
#@title Solve the solute transport process
# time loop for solute transport
D = np.array([[Dx,0],[0,Dy]])

Gp =[[0.5, 0.5],[0.5, 0],[0, 0.5]]
Gw =[1.0/6.0, 1.0/6.0, 1.0/6.0]

si=[];sj=[]
sk=[];sm=[]
nt=0

for ie in range(numt):
  em = t[ie]
  xy = np.zeros([3,2],dtype=float)
  eU = np.zeros([3,1],dtype=float)
  eV = np.zeros([3,1],dtype=float)
  for ilp in range(3):
    xy[ilp][0]= p[em[ilp]][0]
    xy[ilp][1]= p[em[ilp]][1]
    eU[ilp][0]= u[em[ilp]]
    eV[ilp][0]= v[em[ilp]]

  K = np.zeros([3,3])
  M = np.zeros([3,3])

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

    Um = np.dot(shape_function,eU)/0.1
    Vm = np.dot(shape_function,eV)/0.1
    Mat_UV = np.array( [[Um[0][0],0],[ 0, Vm[0][0]]])

    sf2 = np.concatenate((shape_function, shape_function))

    K += W* np.dot(np.dot(deriv_jacob.T , D),  deriv_jacob) * det_jacob + W * np.dot(np.dot(sf2.T , Mat_UV),  deriv_jacob) * det_jacob
    M += W* np.dot(shape_function.T , shape_function) * det_jacob


  for i in range(3):
    for j in range(3):
      mm = t[ie][i]
      nn = t[ie][j]
      si.append(mm)
      sj.append(nn)
      sk.append(K[i][j])
      sm.append(M[i][j])

# dt = 1*24*3600 # 1 day

KK = sparse.coo_matrix((sk, (si, sj)), shape=(nump, nump))
AK = KK
AK=AK.tocsr()

MM = sparse.coo_matrix((sm, (si, sj)), shape=(nump, nump))
AM = MM
AM=AM.tocsr()

KM = AM + dt * AK

# impose boundary conditions
for i in range(len(boundary_c)):
  ib=boundary_c[i]
  KM[ib,ib]=KM[ib,ib]*1e3

S= np.zeros([nump,1])
#S = S.reshape(-1)

for i in range(len(boundary_c)):
  S[boundary_c[i]]=bc_val_c

Q = np.zeros([nump,1])
Snew=S
time = 0

fig,ax = plt.subplots(1, 1,figsize=(12,12))
  #ax[0, 0].plt.triplot(x, y, t)
plt.tricontourf(x,y,t,S.reshape(-1),levels=np.linspace(0,1,11), cmap=cm.coolwarm, extend ='both')
plt.colorbar(format='%0.1f',shrink=0.3)

plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('Concentration [mol/m^3], t = %.1f days' %(time/seconds_per_day),fontsize=18)
ax.set_aspect(aspect=1)
plt.show()

BTC_time=[0]
BTC_c=[0]
while time<total_time:
  Q = AM*S

  for i in range(len(boundary_c)):
    ib=boundary_c[i]
    Q[ib]=KM[ib,ib]*bc_val_c


  Snew  = spsolve(KM,Q,use_umfpack=True)

  S = Snew;
  time = time + dt
  BTC_time.append(time/seconds_per_day)
  BTC_c.append(np.mean(S[boundary_right]))


  fig,ax = plt.subplots(1, 1,figsize=(12,12))
  plt.tricontourf(x,y,t,S,levels=np.linspace(0,1,11), cmap=cm.coolwarm, extend ='both')
  plt.colorbar(format='%0.1f',shrink=0.3)
  plt.xlabel('x[m]',fontsize=18)
  plt.ylabel('y[m]',fontsize=18)
  plt.title('Concentration [mol/m^3], t = %.1f days' %(time/seconds_per_day),fontsize=18)
  ax.set_aspect(aspect=1)
  plt.show()
```
:::
:::::

*(5) Plot the breakthrough curve on the right-hand-side boundary.* It is evolution of the averaged concentration in the observation well with time.

::::{note icon=false} Breakthrough curve on the right-hand-side boundary
```{code-cell} python
:tags: [remove-input]
# Breakthrough curve on the right-hand-side boundary
# (averaged concentration in the observation well)

fig,ax = plt.subplots(1, 1,figsize=(8,4))
plt.plot(BTC_time,BTC_c)
plt.xlabel('Time [day]',fontsize=18)
plt.ylabel('Concentration [$mol/m^3$]',fontsize=18)
plt.show()
```
::::

# 5 Heat transfer in underground nuclear waste repository

Deep underground (> 400 m-500 m) geological disposal is widely agreed to be the best solution for final disposal of the high-level radioactive waste.  Analysis of thermal distribution in the underground repository and the surrounding rocks is important for the safety assessment.

From the lecture, we know that the governing equation for heat transfer is

:::{math}
:enumerated: false
c \rho \left( \frac{\partial T}{\partial t} + u \nabla T \right)= K \nabla^{2} T + Q
:::

where $T$ is the temperature, $u$ is the convective velocity (Darcy velocity divide the porosity), $c$ is the specific heat capacity, $\rho$ is the density, $Q$ is the heat sink/source term, and $K$ is the heat conductivity.

In this example, we will simulate the heat transfer process in a underground nuclear waste repository, where the heat released from a simplified single nuclear waste container. The following figure shows the concept of KBS-3 nuclear waste repository designed by the Swedish nuclear waste disposal program.

:::{figure} ../images/fig_notebook3_heat_transfer_nuclear_waste.png
:label: fig_notebook3_heat_transfer_nuclear_waste
:width: 500px
:::

Two simulation scenaiors will be conducted in this example, including

(1) Without background flow in the rock, i.e., $u=0$, so the heat transport prossess is purly conduction. The source term $Q=0$. The governing equation can be simplified as

:::{math}
:enumerated: false
c \rho  \frac{\partial T}{\partial t} = K \nabla^{2} T
:::

(2) With background flow in the rock,driven by the hydraulic gradient. In this case, we need to firstly solve the groundwater flow equation to obtain the flow velocity $u$ and then solve the heat transport equation. The equation for groundwater flow in saturated rock and the heat transport equation are   

:::{math}
:enumerated: false
\frac{\partial h}{\partial t} = K_{h} \nabla^{2} h
:::

:::{math}
:enumerated: false
c \rho \left( \frac{\partial T}{\partial t} + u \nabla T \right)= K \nabla^{2} T
:::

where $h$ is the hydraulic head and $K_h$ is the hydraulic conductivity.

Based on the designed concept, we build a 2D geometry model for the buffer zone, backfilled tunnel and the surrounding rock around the single nuclear waste container located at the center of the domain sized of 100 m $\times$ 100m, shown in the figure below. In this domain around the container, there are three types of materials, i.e., buffer zone, backfilled tunnel and the surrounding rock. For conducting numerical simulations, the geometry model is discretized by triangular mesh.

::::{note icon=false} Load the geometry model and mesh
```{code-cell} python
:tags: [remove-input]

#@title Load the geometry model and mesh
# mesh
import matplotlib
matplotlib.rc('xtick', labelsize=18)
matplotlib.rc('ytick', labelsize=18)
import matplotlib.tri as tri
import matplotlib.cm as cm
import numpy as np
import matplotlib.pyplot as plt
from scipy import sparse
from scipy.sparse.linalg import spsolve
from pathlib import Path

# Dynamically find the project root to load data safely on GitHub
current_dir = Path.cwd()
while not (current_dir / 'chapter3').exists():
    if current_dir == current_dir.parent:
        break # Safety stop
    current_dir = current_dir.parent

p_path = current_dir / 'chapter3' / 'data' / 'KBS_3_p.txt'
t_path = current_dir / 'chapter3' / 'data' / 'KBS_3_t.txt'
edge_path = current_dir / 'chapter3' / 'data' / 'KBS_3_e.txt'

p = np.loadtxt(p_path)
t = np.loadtxt(t_path, dtype='int32')
edge = np.loadtxt(edge_path, dtype='int32')

at=t[:,-1]
t=t[:,0:3]

nump=np.shape(p)[0]
numt=np.shape(t)[0]
print('The node number is:', nump)
print('The element number is:', numt)
x=np.transpose(p[:,[0]])[0]
y=np.transpose(p[:,[1]])[0]


fig,ax = plt.subplots(1, 1,figsize=(12,12))
plt.tripcolor(x, y, t,facecolors=at,edgecolors='w', cmap=cm.coolwarm) #,
plt.colorbar(format='%0.1f',shrink=0.75)
plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('Mesh [m]',fontsize=18)
ax.set_aspect(aspect=1)
plt.show()

# boundary conditions
boundary_left=[];boundary_right=[];boundary_top=[];boundary_down=[];boundary_c=[]

# left boundary points
for i in range(nump):
  if x[i]<=1e-6:
    boundary_left.append(i)

  if x[i]>=100-1e-6:
    boundary_right.append(i)

  if y[i]<=-550+1e-6:
    boundary_down.append(i)

  if (y[i]>=-450-1e-6 ):
    boundary_top.append(i)


for i in range(len(edge)):
  p1=edge[i,0]
  p2=edge[i,1]
  xm=(x[p1]+x[p2])/2
  ym=(y[p1]+y[p2])/2

  if xm<50.6 and xm>49.3 and ym>-507.5 and ym<-502:
    boundary_c.append([p1,p2])


#print(boundary_c)
bc_val_c = 1.0 # Q=1 W/m^2 heat flux
```
::::

Assuming that the surrounding rock is saturated with water and its porosity $\theta =0.001$, the effective values of the $c$, $\rho$ and $K$ can be simply take the weighted average from the values of rock and water, by $c_{\mathrm{e}} = (1-\theta)c_{\mathrm{r}} +\theta c_{\mathrm{w}}$, $\rho_{\mathrm{e}} = (1-\theta)\rho_{\mathrm{r}} +\theta \rho_{\mathrm{w}}$, and $K_{\mathrm{e}} = (1-\theta)K_{\mathrm{r}} +\theta K_{\mathrm{w}}$. For simplicity, the backfill materials and the bentonite buffer materials are assumed as dry, without any groundwater flow.

The parameters are list in the table below.

:::{table} Material Parameters
:class: adapt-widths

| Parameters | Rock | Groundwater | Backfilled material | Buffer material (Bentonite) |
| :--- | :---: | :---: | :---: | :---: |
| $c$ [J/(kg °C)] | 803 | 4200 | 800 | 800 |
| $\rho$ [kg/m{sup}`3`] | 2700 | 1000 | 2400 | 1570 |
| $K$ [W/(m °C)] | 2.77 - 3.46 | 0.65 | 0.3 | 0.3 |
| $K_{\mathrm{h}}$ [m/s] | 10{sup}`-12` - 10{sup}`-9` | - | - | - |
:::

::::{note icon=false} Input physical parameters
```{code-cell} python

#@title Input physical parameters

c_rock=803; c_water=4200; c_bf=800; c_bm=800

rho_rock=2700; rho_water=1000; rho_bf=2400; rho_bm=1570

K_heat_rock=2.77;K_heat_water=0.65; K_heat_bf=0.3; K_heat_bm=0.3;

K_hydro_rock=1e-9 # hydraulic conductivity

theta=0.001 # rock porosity

# numerical parameters
seconds_per_year = 60*60*24*365 ; # seconds in 1 year
total_time = 1e4 *seconds_per_year # * 10000 years
dt = 100*seconds_per_year # each time step is 100 year. In total, there are 1000 time steps.
```
::::

Initial temperature $T$ [°C] is given by,

:::{math}
:enumerated: false
T=6.0+0.012 \cdot z
:::

where $z$ is the depth. It means that the surface rock temperature is 6°C, in every 1 km underground, the temperature will increase 12°C.

::::{note icon=false} Initial temperature distribution
```{code-cell} python
:tags: [remove-input]

#@title Initial temperature distribution
# initial condition
T00=np.zeros([nump,1],dtype=float)
for i in range(nump):
  T00[i] = 6.0+0.012*np.abs(y[i])

fig,ax = plt.subplots(1, 1,figsize=(12,12))
plt.tricontourf(x,y,T00.reshape(-1),levels=np.linspace(np.min(T00),np.max(T00),101), cmap=cm.coolwarm, extend ='both')

plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title(r'Initial temperature distribution before the extraction $T (^{\circ} C)$',fontsize=18)
plt.colorbar(format='%0.1f',shrink=0.85)
ax.set_aspect(aspect=1)
plt.show()
```
::::

The nuclear waste will release heat which reduces with time. We assume that the heat flux released from the container is

:::{math}
:enumerated: false
q=q_{0} \cdot [0.769 \cdot \exp(-0.02 t) + 0.163 \cdot \exp(-0.002 t ) + 0.067 \cdot \exp( -0.0002 t)] 
:::

where $t$ is time in years after deposition, $q_0$ is the initial heat flux. Here we assume that $q_{0}=20$ W/m{sup}`2`

::::{note icon=false} Boundary condition: Heat flux from the nuclear waste container
```{code-cell} python
:tags: [remove-input]

#@title Boundary condition: heat flux from the nuclear waste container
import numpy as np
import matplotlib.pyplot as plt

q0=50
time=np.linspace(0.1,1e4,10001)
q=q0*(0.769*np.exp(-0.02*time)+0.163*np.exp(-0.002*time) +0.067*np.exp(-0.0002*time))

fig,ax = plt.subplots(1, 1,figsize=(10,6))
plt.plot(time,q,'ro-',lw=2)
plt.xlabel('Year [Y]',fontsize=18)
plt.ylabel('Heat flux $[W/m^2]$',fontsize=18)
ax.set_xscale('log')
#ax.set_yscale('log')
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.grid(True)
plt.show()
```
::::

**Firstly, we simulate  the case without background flow, i.e., pure conduction.**

:::::{card} Solve the heat conduction process
```{code-cell} python
:tags: [remove-input]

#@title Solve the heat conduction process
from scipy import sparse
from scipy.sparse.linalg import spsolve
import matplotlib.animation as animation
from IPython.display import HTML, display
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm

Gp =[[0.5, 0.5],[0.5, 0],[0, 0.5]]
Gw =[1.0/6.0, 1.0/6.0, 1.0/6.0]

si=[];sj=[]
sk=[];sm=[]
nt=0

for ie in range(numt):
    em = t[ie]
    ea = at[ie]
    xy = np.zeros([3,2],dtype=float)

    for ilp in range(3):
        xy[ilp][0]= p[em[ilp]][0]
        xy[ilp][1]= p[em[ilp]][1]

    if ea == 1: # saturated rock
        kd = (1.0-theta) * K_heat_rock + theta * K_heat_water
        rho_c = (1.0-theta) * (c_rock*rho_rock) + theta * (c_water*rho_water)
        kappa = np.array([[kd,0],[0,kd]])
    elif ea == 2: # backfilled material
        kd = K_heat_bf
        rho_c = c_bf*rho_bf
        kappa = np.array([[kd,0],[0,kd]])
    elif ea == 3: # bentonite buffer
        kd = K_heat_bm
        rho_c = c_bm*rho_bm
        kappa = np.array([[kd,0],[0,kd]])

    K = np.zeros([3,3])
    M = np.zeros([3,3])

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

        K += W* np.dot(np.dot(deriv_jacob.T , kappa),  deriv_jacob) * det_jacob
        M += W* rho_c * np.dot(shape_function.T, shape_function) * det_jacob

    for i in range(3):
        for j in range(3):
            mm = t[ie][i]
            nn = t[ie][j]
            si.append(mm)
            sj.append(nn)
            sk.append(K[i][j])
            sm.append(M[i][j])

KK = sparse.coo_matrix((sk, (si, sj)), shape=(nump, nump))
AK = KK
AK=AK.tocsr()

MM = sparse.coo_matrix((sm, (si, sj)), shape=(nump, nump))
AM = MM
AM=AM.tocsr()

KM = AM + dt * AK

# impose 1st type boundary conditions
for i in range(len(boundary_top)):
    ib=boundary_top[i]
    KM[ib,ib]=KM[ib,ib]*1e9

for i in range(len(boundary_down)):
    ib=boundary_down[i]
    KM[ib,ib]=KM[ib,ib]*1e9

# --- Animation Storage Setup ---
T_results = []
time_steps = []

T1=T00
time = 0

# Store initial state
T_results.append(T1.copy().reshape(-1))
time_steps.append(time)

# time loop
T0=T00
time = 0
n_step = int(total_time/dt )
for it in range(n_step):
    Q = np.zeros([nump,1])
    f = np.zeros([nump,1]) # load
    q = q0*(0.769*np.exp(-0.02*time/seconds_per_year)+0.163*np.exp(-0.002*time/seconds_per_year) +0.067*np.exp(-0.0002*time/seconds_per_year))

    # impose 2nd type boundary conditions
    for i in range(len(boundary_c)):
        p1=boundary_c[i][0]
        p2=boundary_c[i][1]
        d=np.sqrt( (x[p1]-x[p2])**2+(y[p1]-y[p2])**2 )
        f[p1]=f[p1]+0.5*q*d
        f[p2]=f[p2]+0.5*q*d

    Q = AM.dot(T0)  + f * dt

    # impose 1st type boundary conditions
    for i in range(len(boundary_top)):
        ib=boundary_top[i]
        Q[ib]=KM[ib,ib]*(6.0+0.012*450)

    for i in range(len(boundary_down)):
        ib=boundary_down[i]
        Q[ib]=KM[ib,ib]*(6.0+0.012*550)

    # Using spsolve directly to avoid deprecation warning
    T1  = spsolve(KM,Q,use_umfpack=True)
    T0 = T1.reshape(len(T1),1)
    time = time + dt

    # Store calculated data for this frame
    T_results.append(T1.copy().reshape(-1))
    time_steps.append(time)

# --- Generate the Video Player ---
fig = plt.subplots(figsize=(12, 12))[0]

def animate(i):
    # WIPE THE ENTIRE FIGURE CLEAN EVERY FRAME (prevents colorbar bugs)
    fig.clf()
    
    # Recreate the axes
    ax = fig.add_subplot(111)
    
    T_current = T_results[i]
    t_current = time_steps[i]
    
    # Calculate DYNAMIC levels for this specific frame
    levels = np.linspace(np.min(T_current), np.max(T_current), 11)
    
    # Draw the contour
    contour = ax.tricontourf(x, y, t, T_current, levels=levels, cmap=cm.coolwarm, extend='both')
    
    # Draw the new dynamically-scaled colorbar
    fig.colorbar(contour, ax=ax, format='%0.1f', shrink=0.85)
    
    ax.set_xlabel('x[m]', fontsize=18)
    ax.set_ylabel('z[m]', fontsize=18)
    ax.set_title(r'Temperature $T (^{\circ} C)$, t = %.1f year' % (t_current/seconds_per_year), fontsize=18)
    ax.set_aspect('equal')

ani = animation.FuncAnimation(fig, animate, frames=len(T_results), interval=200, blit=False)
plt.close(fig)

# Display the interactive player
display(HTML(ani.to_jshtml()))
```

::: {attention icon=false} The source code
:class: dropdown

```python
#@title Solve the heat conduction process

Gp =[[0.5, 0.5],[0.5, 0],[0, 0.5]]
Gw =[1.0/6.0, 1.0/6.0, 1.0/6.0]

si=[];sj=[]
sk=[];sm=[]
nt=0

for ie in range(numt):
  em = t[ie]
  ea = at[ie]
  xy = np.zeros([3,2],dtype=float)

  for ilp in range(3):
    xy[ilp][0]= p[em[ilp]][0]
    xy[ilp][1]= p[em[ilp]][1]


  if ea == 1: # saturated rock
    kd = (1.0-theta) * K_heat_rock + theta * K_heat_water
    rho_c = (1.0-theta) * (c_rock*rho_rock) + theta * (c_water*rho_water)

    kappa = np.array([[kd,0],[0,kd]])
  elif ea == 2: # backfilled material
    kd = K_heat_bf
    rho_c = c_bf*rho_bf
    kappa = np.array([[kd,0],[0,kd]])
  elif ea == 3: # bentonite buffer
    kd = K_heat_bm
    rho_c = c_bm*rho_bm
    kappa = np.array([[kd,0],[0,kd]])

  K = np.zeros([3,3])
  M = np.zeros([3,3])

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

    K += W* np.dot(np.dot(deriv_jacob.T , kappa),  deriv_jacob) * det_jacob
    M += W* rho_c * np.dot(shape_function.T, shape_function) * det_jacob


  for i in range(3):
    for j in range(3):
      mm = t[ie][i]
      nn = t[ie][j]
      si.append(mm)
      sj.append(nn)
      sk.append(K[i][j])
      sm.append(M[i][j])

KK = sparse.coo_matrix((sk, (si, sj)), shape=(nump, nump))
AK = KK
AK=AK.tocsr()

MM = sparse.coo_matrix((sm, (si, sj)), shape=(nump, nump))
AM = MM
AM=AM.tocsr()

KM = AM + dt * AK

# impose 1st type boundary conditions
for i in range(len(boundary_top)):
  ib=boundary_top[i]
  KM[ib,ib]=KM[ib,ib]*1e9


for i in range(len(boundary_down)):
  ib=boundary_down[i]
  KM[ib,ib]=KM[ib,ib]*1e9

T1=T00
time = 0

fig,ax = plt.subplots(1, 1,figsize=(12,12))
plt.tricontourf(x,y,t,T1.reshape(-1),levels=np.linspace(np.min(T1),np.max(T1),11), cmap=cm.coolwarm, extend ='both')
plt.colorbar(format='%0.1f',shrink=0.85)
plt.xlabel('x[m]',fontsize=18)
plt.ylabel('z[m]',fontsize=18)
plt.title('Temperature $T (^{\circ} C)$, t = %.1f year' %(time/seconds_per_year),fontsize=18)
ax.set_aspect(aspect=1)
plt.show()


# time loop
T0=T00
time = 0
n_step = int(total_time/dt )
for it in range(n_step):
  Q = np.zeros([nump,1])
  f = np.zeros([nump,1]) # load
  q = q0*(0.769*np.exp(-0.02*time/seconds_per_year)+0.163*np.exp(-0.002*time/seconds_per_year) +0.067*np.exp(-0.0002*time/seconds_per_year))

  # impose 2nd type boundary conditions
  for i in range(len(boundary_c)):
    p1=boundary_c[i][0]
    p2=boundary_c[i][1]
    d=np.sqrt( (x[p1]-x[p2])**2+(y[p1]-y[p2])**2 )
    f[p1]=f[p1]+0.5*q*d
    f[p2]=f[p2]+0.5*q*d

  Q = AM.dot(T0)  + f * dt

  # impose 1st type boundary conditions
  for i in range(len(boundary_top)):
    ib=boundary_top[i]
    Q[ib]=KM[ib,ib]*(6.0+0.012*450)

  for i in range(len(boundary_down)):
    ib=boundary_down[i]
    Q[ib]=KM[ib,ib]*(6.0+0.012*550)


  T1  = spsolve(KM,Q,use_umfpack=True)
  T0 = T1.reshape(len(T1),1)
  time = time + dt


  fig,ax = plt.subplots(1, 1,figsize=(12,12))
  plt.tricontourf(x,y,t,T1,levels=np.linspace(np.min(T1),np.max(T1),11), cmap=cm.coolwarm, extend ='both')
  plt.colorbar(format='%0.1f',shrink=0.85)
  plt.xlabel('x[m]',fontsize=18)
  plt.ylabel('z[m]',fontsize=18)
  plt.title('Temperature $T (^{\circ} C)$, t = %.1f year' %(time/seconds_per_year),fontsize=18)
  ax.set_aspect(aspect=1)
  plt.show()
```
:::
:::::

**In the next step, we consider the background water flow**

::::{note icon=false} Solve the steady-state groundwater flow
```{code-cell} python
:tags: [remove-input]

#@title Solve the steady-state groundwater flow
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm
from scipy import sparse
from scipy.sparse.linalg import spsolve


bc_val_left = 100 #[m] head h = 100 m
bc_val_right = 90 #[m] head h = 99 m


# input physical parameters
kx = K_hydro_rock #  K_h on x-direction
ky = K_hydro_rock #  K_h on y-direction

# mesh
import matplotlib
matplotlib.rc('xtick', labelsize=18)
matplotlib.rc('ytick', labelsize=18)
import matplotlib.tri as tri

kappa = np.array([[kx,0],[0,ky]])

Gp =[[0.5, 0.5],[0.5, 0],[0, 0.5]]
Gw =[1.0/6.0, 1.0/6.0, 1.0/6.0]

si=[];sj=[]
sk=[];sm=[]
nt=0

for ie in range(numt):
  em = t[ie]
  xy = np.zeros([3,2],dtype=float)
  for ilp in range(3):
    xy[ilp][0]= p[em[ilp]][0]
    xy[ilp][1]= p[em[ilp]][1]

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

#for i in range(len(boundary_in)):
#  ib=boundary_in[i]
#  A[ib,ib]=A[ib,ib]*1e9
#  F[ib]=A[ib,ib]*bc_val_in


# solve linear equation systems
h = spsolve(A,F,use_umfpack=True)


fig,ax = plt.subplots(1, 1,figsize=(12,12))
#plt.triplot(x, y, t)
plt.tricontourf(x,y,t,h,levels=np.linspace(np.min(h),np.max(h),11), cmap=cm.coolwarm, extend ='both')
plt.colorbar(format='%0.1f',shrink=0.85)
plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('water head [m]',fontsize=18)
ax.set_aspect(aspect=1)
plt.show()


# postprocessing: to compute Darcy velocity
Fu = np.zeros([nump,1])
Fv = np.zeros([nump,1])

si=[];sj=[];sk=[]

for ie in range(numt):
  em = t[ie]
  xy = np.zeros([3,2],dtype=float)
  he = np.zeros([3,1],dtype=float)
  for ilp in range(3):
    xy[ilp][0]= p[em[ilp]][0]
    xy[ilp][1]= p[em[ilp]][1]
    he[ilp][0] = h[em[ilp]]


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

uv=np.sqrt(np.multiply(u,u)+np.multiply(v,v)) / theta

fig,ax = plt.subplots(1, 1,figsize=(12,12))

plt.tricontourf(x,y,t,uv,levels=np.linspace(0,np.max(uv),101), cmap=cm.coolwarm, extend ='both')
plt.colorbar(format='%0.1e',shrink=0.85)
plt.xlabel('x[m]',fontsize=18)
plt.ylabel('y[m]',fontsize=18)
plt.title('velocity magnitude sqrt(u^2+v^2) [m/s]',fontsize=18)
ax.set_aspect(aspect=1)
plt.show()
```
::::

**Solve the heat transport process, include convection**

:::::{card} Solve the heat transport, including convention and conduction
```{code-cell} python
:tags: [remove-input]

#@title Solve the heat transport, including convention and conduction
from scipy import sparse
from scipy.sparse.linalg import spsolve
import matplotlib.animation as animation
from IPython.display import HTML, display
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm

Gp =[[0.5, 0.5],[0.5, 0],[0, 0.5]]
Gw =[1.0/6.0, 1.0/6.0, 1.0/6.0]

si=[];sj=[]
sk=[];sm=[]
nt=0

for ie in range(numt):
    em = t[ie]
    ea = at[ie]
    xy = np.zeros([3,2],dtype=float)
    eU = np.zeros([3,1],dtype=float)
    eV = np.zeros([3,1],dtype=float)
    for ilp in range(3):
        xy[ilp][0]= p[em[ilp]][0]
        xy[ilp][1]= p[em[ilp]][1]
        eU[ilp][0]= u[em[ilp]]
        eV[ilp][0]= v[em[ilp]]

    if ea == 1: # saturated rock
        kd = (1.0-theta) * K_heat_rock + theta * K_heat_water
        rho_c = (1.0-theta) * (c_rock*rho_rock) + theta * (c_water*rho_water)
        kappa = np.array([[kd,0],[0,kd]])
    elif ea == 2: # backfilled material
        kd = K_heat_bf
        rho_c = c_bf*rho_bf
        kappa = np.array([[kd,0],[0,kd]])
    elif ea == 3: # bentonite buffer
        kd = K_heat_bm
        rho_c = c_bm*rho_bm
        kappa = np.array([[kd,0],[0,kd]])

    K = np.zeros([3,3])
    M = np.zeros([3,3])

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

        Um = np.dot(shape_function,eU)
        Vm = np.dot(shape_function,eV)
        Mat_UV = np.array( [[Um[0][0],0],[ 0, Vm[0][0]]])

        sf2 = np.concatenate((shape_function, shape_function))

        K += W* np.dot(np.dot(deriv_jacob.T , kappa),  deriv_jacob) * det_jacob + W * rho_c/theta * np.dot(np.dot(sf2.T , Mat_UV),  deriv_jacob) * det_jacob
        M += W* rho_c * np.dot(shape_function.T, shape_function) * det_jacob

    for i in range(3):
        for j in range(3):
            mm = t[ie][i]
            nn = t[ie][j]
            si.append(mm)
            sj.append(nn)
            sk.append(K[i][j])
            sm.append(M[i][j])

KK = sparse.coo_matrix((sk, (si, sj)), shape=(nump, nump))
AK = KK
AK=AK.tocsr()

MM = sparse.coo_matrix((sm, (si, sj)), shape=(nump, nump))
AM = MM
AM=AM.tocsr()

KM = AM + dt * AK

# impose 1st type boundary conditions
for i in range(len(boundary_top)):
    ib=boundary_top[i]
    KM[ib,ib]=KM[ib,ib]*1e9

for i in range(len(boundary_down)):
    ib=boundary_down[i]
    KM[ib,ib]=KM[ib,ib]*1e9


# --- Animation Storage Setup ---
T_results = []
time_steps = []

T1=T00
time = 0

# Store initial state
T_results.append(T1.copy().reshape(-1))
time_steps.append(time)


# time loop
T0=T00
time = 0
n_step = int(total_time/dt )
for it in range(n_step):
    Q = np.zeros([nump,1])
    f = np.zeros([nump,1]) # load
    q = q0*(0.769*np.exp(-0.02*time/seconds_per_year)+0.163*np.exp(-0.002*time/seconds_per_year) +0.067*np.exp(-0.0002*time/seconds_per_year))

    # impose 2nd type boundary conditions
    for i in range(len(boundary_c)):
        p1=boundary_c[i][0]
        p2=boundary_c[i][1]
        d=np.sqrt( (x[p1]-x[p2])**2+(y[p1]-y[p2])**2 )
        f[p1]=f[p1]+0.5*q*d
        f[p2]=f[p2]+0.5*q*d

    Q = AM.dot(T0)  + f * dt

    # impose 1st type boundary conditions
    for i in range(len(boundary_top)):
        ib=boundary_top[i]
        Q[ib]=KM[ib,ib]*(6.0+0.012*450)

    for i in range(len(boundary_down)):
        ib=boundary_down[i]
        Q[ib]=KM[ib,ib]*(6.0+0.012*550)

    # Directly use spsolve
    T1  = spsolve(KM,Q,use_umfpack=True)
    T0 = T1.reshape(len(T1),1)
    time = time + dt

    # Store calculated data for this frame
    T_results.append(T1.copy().reshape(-1))
    time_steps.append(time)


# --- Generate the Video Player ---
fig = plt.subplots(figsize=(12, 12))[0]

def animate(i):
    # WIPE THE ENTIRE FIGURE CLEAN EVERY FRAME
    fig.clf()
    
    # Recreate the axes
    ax = fig.add_subplot(111)
    
    T_current = T_results[i]
    t_current = time_steps[i]
    
    # Calculate DYNAMIC levels for this specific frame
    levels = np.linspace(np.min(T_current), np.max(T_current), 11)
    
    # Draw the contour
    contour = ax.tricontourf(x, y, t, T_current, levels=levels, cmap=cm.coolwarm, extend='both')
    
    # Draw the dynamically-scaled colorbar attached to the fresh canvas
    fig.colorbar(contour, ax=ax, format='%0.1f', shrink=0.85)
    
    ax.set_xlabel('x[m]', fontsize=18)
    ax.set_ylabel('z[m]', fontsize=18)
    ax.set_title(r'Temperature $T (^{\circ} C)$, t = %.1f year' % (t_current/seconds_per_year), fontsize=18)
    ax.set_aspect('equal')

ani = animation.FuncAnimation(fig, animate, frames=len(T_results), interval=200, blit=False)
plt.close(fig)

# Display the interactive player
display(HTML(ani.to_jshtml()))
```

::: {attention icon=false} The source code
:class: dropdown

```python
#@title Solve the heat transport, including convention and conduction

Gp =[[0.5, 0.5],[0.5, 0],[0, 0.5]]
Gw =[1.0/6.0, 1.0/6.0, 1.0/6.0]

si=[];sj=[]
sk=[];sm=[]
nt=0

for ie in range(numt):
  em = t[ie]
  ea = at[ie]
  xy = np.zeros([3,2],dtype=float)
  eU = np.zeros([3,1],dtype=float)
  eV = np.zeros([3,1],dtype=float)
  for ilp in range(3):
    xy[ilp][0]= p[em[ilp]][0]
    xy[ilp][1]= p[em[ilp]][1]
    eU[ilp][0]= u[em[ilp]]
    eV[ilp][0]= v[em[ilp]]

  if ea == 1: # saturated rock
    kd = (1.0-theta) * K_heat_rock + theta * K_heat_water
    rho_c = (1.0-theta) * (c_rock*rho_rock) + theta * (c_water*rho_water)

    kappa = np.array([[kd,0],[0,kd]])
  elif ea == 2: # backfilled material
    kd = K_heat_bf
    rho_c = c_bf*rho_bf
    kappa = np.array([[kd,0],[0,kd]])
  elif ea == 3: # bentonite buffer
    kd = K_heat_bm
    rho_c = c_bm*rho_bm
    kappa = np.array([[kd,0],[0,kd]])

  K = np.zeros([3,3])
  M = np.zeros([3,3])

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

    Um = np.dot(shape_function,eU)
    Vm = np.dot(shape_function,eV)
    Mat_UV = np.array( [[Um[0][0],0],[ 0, Vm[0][0]]])

    sf2 = np.concatenate((shape_function, shape_function))

    K += W* np.dot(np.dot(deriv_jacob.T , kappa),  deriv_jacob) * det_jacob + W * rho_c/theta * np.dot(np.dot(sf2.T , Mat_UV),  deriv_jacob) * det_jacob

    M += W* rho_c * np.dot(shape_function.T, shape_function) * det_jacob


  for i in range(3):
    for j in range(3):
      mm = t[ie][i]
      nn = t[ie][j]
      si.append(mm)
      sj.append(nn)
      sk.append(K[i][j])
      sm.append(M[i][j])

KK = sparse.coo_matrix((sk, (si, sj)), shape=(nump, nump))
AK = KK
AK=AK.tocsr()

MM = sparse.coo_matrix((sm, (si, sj)), shape=(nump, nump))
AM = MM
AM=AM.tocsr()

KM = AM + dt * AK

# impose 1st type boundary conditions
for i in range(len(boundary_top)):
  ib=boundary_top[i]
  KM[ib,ib]=KM[ib,ib]*1e9


for i in range(len(boundary_down)):
  ib=boundary_down[i]
  KM[ib,ib]=KM[ib,ib]*1e9

T1=T00
time = 0

fig,ax = plt.subplots(1, 1,figsize=(12,12))
plt.tricontourf(x,y,t,T1.reshape(-1),levels=np.linspace(np.min(T1),np.max(T1),11), cmap=cm.coolwarm, extend ='both')
plt.colorbar(format='%0.1f',shrink=0.85)
plt.xlabel('x[m]',fontsize=18)
plt.ylabel('z[m]',fontsize=18)
plt.title('Temperature $T (^{\circ} C)$, t = %.1f year' %(time/seconds_per_year),fontsize=18)
ax.set_aspect(aspect=1)
plt.show()


# time loop
T0=T00
time = 0
n_step = int(total_time/dt )
for it in range(n_step):
  Q = np.zeros([nump,1])
  f = np.zeros([nump,1]) # load
  q = q0*(0.769*np.exp(-0.02*time/seconds_per_year)+0.163*np.exp(-0.002*time/seconds_per_year) +0.067*np.exp(-0.0002*time/seconds_per_year))

  # impose 2nd type boundary conditions
  for i in range(len(boundary_c)):
    p1=boundary_c[i][0]
    p2=boundary_c[i][1]
    d=np.sqrt( (x[p1]-x[p2])**2+(y[p1]-y[p2])**2 )
    f[p1]=f[p1]+0.5*q*d
    f[p2]=f[p2]+0.5*q*d

  Q = AM.dot(T0)  + f * dt

  # impose 1st type boundary conditions
  for i in range(len(boundary_top)):
    ib=boundary_top[i]
    Q[ib]=KM[ib,ib]*(6.0+0.012*450)

  for i in range(len(boundary_down)):
    ib=boundary_down[i]
    Q[ib]=KM[ib,ib]*(6.0+0.012*550)


  T1  = spsolve(KM,Q,use_umfpack=True)
  T0 = T1.reshape(len(T1),1)
  time = time + dt


  fig,ax = plt.subplots(1, 1,figsize=(12,12))
  plt.tricontourf(x,y,t,T1,levels=np.linspace(np.min(T1),np.max(T1),11), cmap=cm.coolwarm, extend ='both')
  plt.colorbar(format='%0.1f',shrink=0.85)
  plt.xlabel('x[m]',fontsize=18)
  plt.ylabel('z[m]',fontsize=18)
  plt.title('Temperature $T (^{\circ} C)$, t = %.1f year' %(time/seconds_per_year),fontsize=18)
  ax.set_aspect(aspect=1)
  plt.show()
```
:::
:::::

# 6 Interactive Guide on Solute Contaminant Transport with groundwater

This guide gives a brief introduction into solute transport modeling  with focus on the understanding of model parameters and the impacts of various processes and mechanisms on **solute transport with groundwater**. The general transport model is given, its components explained both traditionally and interactively using some analytical solutions. Provided solutions consist of various dimensions and contaminant source characteristics in order to describe different environmental conditions. This guide was established mostly with help of the textbooks by *Schnoor (1996)* and *Dominco and Schwartz (1998)*.

This guide may help you to understand the basic and underlying fundamentals of, and - with help of analytical examples - the meaning of solute transport models including the different processes and mechanisms in the dynamic-environmental **groundwater system**. This guide may also be used to solve parts of the Homework Assignment.

## 6.1 Transport equation and components
**Transport equation**

The general three-dimensional transport equation for solved contaminants is given as (*tensor notation*):

:::{math}
:enumerated: false
R \frac{\partial C}{\partial t}=-\frac{\partial}{x_i} (u_i \times C) + \frac{\partial}{x_i} \left(D_{ij} \frac{\partial C}{\partial x_j}\right) + r_m
:::

with:

$C$ : solute concentration [M/L{sup}`3`];

$t$ : time [T];

$i,j$ : $x, y, z$;

$u_i$ : water velocity in three dimensions [L/T];

$x_i,x_j$ : distance (longitudinal, lateral, and vertical) [L];

$D_{ij}$ : dispersion coefficient tensor [L{sup}`2`/T];

$R$ : retardation factor [-];

$r_m$ : reaction term including for example degradation and decay [M/(L{sup}`3` T)]

Assuming constant velocity and dispersion coefficients in both space and time, and $D_x$, $D_y$, $D_z$ as the main dispersion components, the general contaminant solute transport equation simplifies to:

:::{math}
:enumerated: false
R \frac{\partial C}{\partial t}=-\left(u_{x} \frac{\partial C}{x} +u_{y} \frac{\partial C}{y}+u_{z} \frac{\partial C}{z} \right) + \left(D_{x} \frac{\partial^{2} C}{\partial x^2} +D_{y} \frac{\partial^{2} C}{\partial y^2}+D_{z} \frac{\partial^{2} C}{\partial z^2}\right) + r_m
:::

**Transport equation components**

* ***Advection*** - transport by groundwater velocity, which is obtained from the solution of the flow equation (equation of continuity) that describes how and where the water is moving. Using Darcy's law values of the hydraulic conductivity, $K$, porosity, $n$, and hydraulic gradients may be used to obtain velocity values.

* ***Dispersion*** - one possibility to obtain dispersion coefficients $D_x$, $D_y$, $D_z$ (empirical values) may be to use tracer tests. Dispersion on the microscopic scale is caused by friction in pores, varying travel path lengths and pore sizes. Macroscopic dispersion is caused by variable permeability's of single layers inducing different velocities. Dispersion coefficients also includes diffusion.

* ***Diffusion*** - which normally can be neglected in field applications as the molecular diffusion coefficient $D^*$ is on the order of 10{sup}`-9` m{sup}`2`/s (dispersion coefficients $D_i$ are at least one order of magnitude higher). If diffusion must be considered the molecular diffusion coefficient $D^*$ and dispersivities $\alpha_x$, $\alpha_y$, $\alpha_z$ form dispersion coefficients $D_i = \alpha_{i}u_{i} + D^*$.

* ***Sorption (retardation)*** - Sorption processes are experimentally characterized and plotted as so-called isotherms that show the solute concentration versus the amount sorbed onto the solid. Sorption reactions are, however, mostly expressed using the dimensionless retardation factor $R$.

* ***Reactions*** - Reactions can be of complicated nature, however, in many cases we can assume a first order degradation reaction defined by the first-order degradation rate constant $k$.

### 6.1.1 Advection
Advective transport can be described as a plug-flow where mixing is absent. This implies that the solute contaminant moves passively with the same velocity as the groundwater, which is obtained by Darcy's law considering pores in the transport media. Advective transport is often used as a first approximation of the arrival time of a contaminant at a certain location.

The general three-dimensional solute transport by advection is given by following equation (*tensor notation*):

:::{math}
:enumerated: false
\frac{\partial C}{\partial t}=-\frac{\partial}{x_i} (u_{i} \times C)
:::

with:

$C$ : solute concentration [M/L{sup}`3`];

$t$ : time [T];

$i,j$ : $x, y, z$;

$u_i$ : water velocity in three dimensions [L/T];

From the equation it can be seen that the solute concentration at any distance from the source is a function of the initial solute concentration $C$ and the  water velocity $u_i$ only.


**Example**

Defining a one-dimensional example yielding $u_x$ as the only water velocity component and an **instantaneous source** of a solute contaminant in the soil, the assumed resulting concentration in the soil is $C_0 $ at $x = 0$ and $t = 0$, the equation above then gives the solute concentration as a function of time $t$ and advective velocity $u_x$ as shown below.

**Process characteristic parameter**: Advective pore water velocity $u_x$

<!-- NOTE: Maybe try with non dynamic scales -->
::::{hint icon=false} C(x,t) distribution on space
:::{anywidget} ../javafiles/ch3_contaminant_transport_advection_instantaneous.mjs
:::
::::

For **continuous source**:

::::{hint icon=false} C(x,t) distribution on space
:::{anywidget} ../javafiles/ch3_contaminant_transport_advection_continuous.mjs
:::
::::

**Conclusion**

Advection moves the solute with the velocity of the water, mixing and thus variations in the relative concentration over time are not considered. The plume movement can be characterized as a plug-flow with the advective front located at $x = u_{x} t$ and is therefore only dependent on the advective velocity and the initial contaminant concentration.

### 6.1.2 Dispersion/Diffusion

Dispersive transport describes the dilution or mixing of a solute due to different velocities of water, which is moving at rates that are both greater and smaller than the average advective velocity. Dispersion is observed on both the microscopic and the macroscopic scale.

In *porous media*, the three main reasons for the different velocities at the microscopic scale are friction in pores, varying travel path lengths and pore sizes. Macroscopic dispersion is caused by variable permeability's of single layers inducing different velocities. On a microscopic scale also a process independently from the water movement becomes important: diffusion describes the movement of a solute from an area of greater concentration to one of less concentration.

**Mass transport by dispersion/diffusion**

The general three-dimensional solute transport by dispersion/diffusion only is given by following equation (*tensor notation*):

:::{math}
:enumerated: false
\frac{\partial C}{\partial t}= \frac{\partial}{x_i} \left(D_{ij} \frac{\partial C}{\partial x_j}\right)
:::

with:

$C$ : solute concentration [M/L{sup}`3`];

$t$ : time [T];

$i,j$ : $x, y, z$;

$x_i$, $x_j$ : distance (longitudinal, lateral, and vertical) [L];

$D_{ij}$ : dispersion coefficient tensor [L{sup}`2`/T];

The empirical dispersion coefficients $D_{ij}$ is usually limited to $D_x$, $D_y$, $D_z$ as the main dispersion components and consist of the dynamic dispersivity $\alpha_i$ and diffusion coefficients $D^*$.

**Process characteristic parameter**: Dispersion coefficient $D_x$

**Conclusion**

The effect of dispersion is to cause a spreading of the dissolved contaminant around the center of the plume that is traveling with the advective velocity. This implies that the maximum concentration at the advective front is reduced as the total contaminant mass must be conserved (the areas of the different **breakthrough curve** (BTC) must be identical). The further means that some contaminant can arrive earlier and some later than the main contaminant plume. The amount of the spreading depends hereby on the contaminant properties and concentration gradients, and diffusion and mechanical mixing (dispersion), respectively. If diffusion is considered, some contaminant travels against the flow direction, i.e. contaminants may be found upstream of the contaminant source.

### 5.1.3 Retardation
Retardation commonly describes reversible sorption processes including adsorption, chemisorption, absorption, and ion exchange. Sorption is experimentally defined by measuring how much of a solute can be sorbed by a particular sediment, soil or rock type. Irreversible sorption can be expressed as a reaction of the soil matrix with solute particles and is therefore often included in the reaction term of the general three-dimensional solute transport equation.

**Mass transport with sorption**
The general three-dimensional solute transport considering retardation in addition to advection and dispersion is given by following equation (*tensor notation*):


:::{math}
:enumerated: false
R \frac{ \partial C}{\partial t}= \frac{\partial}{x_i} \left(D_{ij} \frac{\partial C}{\partial x_j}\right)
:::

with:

$C$ : solute concentration [M/L{sup}`3`];

$t$ : time [T];

$i,j$ : $x, y, z$;

$x_i$, $x_j$ : distance (longitudinal, lateral, and vertical) [L];

$D_{ij}$ : dispersion coefficient tensor [L{sup}`2`/T];

$R$ : retardation factor [-], which is alwarys greater or equals to 1, i.e., $R \ge 1$.

Sorption processes can experimentally be characterized and plotted with help of so-called isotherms that show the solute concentration versus the amount sorbed onto the solid.

**Process characteristic parameter**: retardation factor $R$

**Conclusion**

Sorption has the effect of **decreasing** the advective and dispersive parameter $u_x$ and $D_{ij}$. Therefore, contaminant breakthrough curves are delayed and narrower. At a retardation factor $R = 1$ arrival times are identically to pure advection-dispersion transport. In porous media, the extent of sorbed particles depends on soil matrix characteristics like porosity and specific surface area.

### 6.1.4 Reaction

Reaction, a term which sometimes is also used for irreversible sorption processes, includes among others biodegradation, hydrolysis, redox reactions, and volatilization. Reactions usually reduce the solute concentration but reactions may also increase the dissolved contaminant concentration in the water.

The general three-dimensional solute transport considering reactions in addition to all previous mechanisms is given by following equation:

:::{math}
:enumerated: false
R \frac{\partial C}{\partial t}=-\frac{\partial}{x_i} (u_{i} \times C) + \frac{\partial}{x_i} \left(D_{ij} \frac{\partial C}{\partial x_j}\right) + r_m 
:::

with

$C$ : solute concentration [M/L{sup}`3`];

$t$ : time [T];

$i,j$ : $x, y, z$;

$u_i$ : water velocity in three dimensions [L/T];

$x_i$, $x_j$ : distance (longitudinal, lateral, and vertical) [L];

$D_{ij}$ : dispersion coefficient tensor [L{sup}`2`/T];

$R$ : retardation factor [-];

$r_m$ : reaction term including for example degradation and decay [M/(L{sup}`3` T)]

Normally, kinetic reactions are assumed to be of first order and can therefore be characterized using a decay constant $k$. In order to describe more complex reactions approaches like Monod and Michaelis-Menten kinetic have to be used. A simple first order kinetic reaction is expressed by the term

:::{math}
:enumerated: false
r_{m}=-kC
:::

**Process characteristic parameter**: First order kinetic reaction constant $k$

**Conclusion**

Reactions such as degradation, radioactive decay, and precipitation decrease the concentration of solute in the plume but may not necessarily slow the rate of plume movement. How fast the contaminant concentration decreases depends on the solute characteristics and environmental conditions.

## 6.2 Analytical solutions

### 6.2.1 One-Dimensional (1D) Continuous Contaminant Source
The general three-dimensional solute transport equation can be solved analytically for one-dimension if simple boundary (BC) and initial conditions (IC) are assumed. For an continuous input of a solute contaminant at $x = 0$ starting at $t = 0$ these conditions may be defined as following:

* $C(0,t)=C_0$ for $t>0$
* $dC/dx=0$ for $x=\infty$
* $C(x,0)=0$ for $x\ge0$

which yields the solution (Schnoor 1996)

:::{math}
:enumerated: false
C(x,t)=\frac{C_0}{2} \exp\left(\frac{x(u_{x}-v)}{2D_x}\right) \operatorname{erfc}\left(\frac{Rx-vt}{2\sqrt{D_{x} R t}}\right) + \frac{C_0}{2} \exp\left(\frac{x(u_{x}+v)}{2D_x}\right) \operatorname{erfc}\left(\frac{Rx+vt}{2\sqrt{D_{x} R t}}\right)
:::

with $v=u_{x} \sqrt{1+ \frac{4kD_x}{u_{x}^{2}}}$
where $u_x$ is the longitudinal pore water velocity, $R$ the retardation factor, $C_0$ the continuous input concentration of the contaminant, $D_x$ the longitudinal dispersion coefficient and $k$ the first-order degradation rate constant.

::::{hint icon=false} C(x,t) distribution on space
:::{anywidget} ../javafiles/ch3_contamination_transport_solution_continuous_1D.mjs
:::
::::

### 6.2.2 One-Dimensional (1D) Instantaneous Contaminant Source
The general three-dimensional solute transport equation can be solved analytically for one-dimension if simple boundary (BC) and initial conditions (IC) are assumed. For an impulse input of a solute contaminant at $x = 0$ and $t = 0$ these conditions may be defined as following:

* $C(0,t)=0$ for $t>0$
* $C(0,0)=C_0$
* $dC/dx=0$ for $x=\infty$
* $C(x,0)=0$ for $x \ge 0$

which then yields the solution (Schnoor 1996)

:::{math}
:enumerated: false
C(x,t)=\frac{C_0 VR}{2A\sqrt{\pi D_{x}RT}} \exp\left[-\frac{(x-u_{x} t/R)^{2}}{4D_{x}t/R}\right] \exp(-kt/R)
:::

where $u_x$ is the longitudinal pore water velocity, $R$ the retardation factor, $C_0$ and $V$ the impulse input concentration and volume of the contaminant, $D_x$ the longitudinal dispersion coefficient, $k$ the first-order degradation rate constant and $A$ the cross-sectional flow area of contaminant input.

::::{hint icon=false} C(x,t) distribution on space
:::{anywidget} ../javafiles/ch3_contamination_transport_solution_instantaneous_1D.mjs
:::
:::: 

### 6.2.3 Two-Dimensional (2D) Continuous Contaminant Source
The general three-dimensional solute transport equation can be solved analytically for two-dimensions if simple boundary (BC) and initial conditions (IC) are assumed. For a continuous input of a solute contaminant at $x = 0$ and starting at $t = 0$ these conditions may be defined as following:

* $C(0,y,t)=C_0$ for $t>0$,$y \le Y$
* $dC/dx=0$ for $x=\infty$
* $dC/dy=0$ for $y=\infty$
* $C(x,y,0)=0$ for $x\gt0$, $y\gt0$

which then yields the solution (Domenico and Schwartz, 1998)

:::{math}
:enumerated: false
C(x,y,t) = \frac{C_0}{4} \exp\left[\frac{x u_x}{2D_x} \left(1-\sqrt{1+\frac{4kD_{x} R}{u_x}}\right)\right] \operatorname{erfc}\left(\frac{x-u_{x}tR\sqrt{1+\frac{4kD_{x}R}{u_{x}^{2}}}}{2\sqrt{D_xt/R}}\right) \left[ \operatorname{erf}\left(\frac{y+Y/2}{2\sqrt{D_y x/u_x}}\right) - \operatorname{erf}\left(\frac{y-Y/2}{2\sqrt{D_y x/u_x}}\right) \right]
:::

where $u_x$ is the longitudinal pore water velocity, $Y$ the width of the contaminant input, $C_0$ the input concentration of the contaminant, $D_x$ and $D_y$ the dispersion coefficient in $x$ and $y$ direction, and $k$ the first-order degradation rate constant.

**Example:** $u_x = 0.005$, $D_x=5e-4$, $D_y=1e-4$, $k=0.001$, $Y=0.5$, $R=1$

:::::{card} C(x,y,t) distribution on space
```{code-cell} python
:tags: [remove-input]

#@title C(x,y,t) distribution on space
import numpy as np
import matplotlib.pyplot as plt
from scipy.spatial import Delaunay
import matplotlib.cm as cm
import matplotlib.animation as animation
from IPython.display import HTML, display
from scipy.special import erf, erfc

# 1. Mesh Setup
x_vals = np.linspace(0, 10, 250)
y_vals = np.linspace(-2, 2, 100)
XX, YY = np.meshgrid(x_vals, y_vals)

x = XX.reshape(-1)
y = YY.reshape(-1)

# Optimized point creation for Delaunay
p = np.column_stack((x, y))
tri = Delaunay(p)
tm = tri.simplices.copy()

C0 = 1
ux = 0.005
Dx = 5e-4
Dy = 1e-4
k = 0.001
Y = 0.5
R = 1

# 2. Physics Pre-Calculation (Vectorized for maximum speed)
# Increased to 40 frames for a much smoother video!
tim = np.linspace(0.1, 3600, 40) 

A = np.sqrt(1 + 4*k*Dx*R/ux)
B = np.sqrt(1 + 4*k*Dx*R/ux/ux)

C_results = []
time_steps = []

# Safe x array to prevent division by zero at the x=0 boundary
x_safe = np.where(x == 0, 1e-10, x)

for t in tim:
    # Vectorized Math: Calculates all 25,000 points instantly!
    term1 = (C0 / 4) * np.exp((x * ux) / (2 * Dx) * (1 - A))
    term2 = erfc((x - ux * t * R * B) / (2 * np.sqrt(Dx * t / R)))
    term3 = erf((y + Y / 2) / (2 * np.sqrt(Dy * x_safe / ux))) - erf((y - Y / 2) / (2 * np.sqrt(Dy * x_safe / ux)))
    
    CC = term1 * term2 * term3
    
    C_results.append(CC)
    time_steps.append(t)

# 3. Create the Animation Player
fig, ax = plt.subplots(1, 1, figsize=(10, 8))

# Static colorbar (0 to 1) perfectly matches your original levels
levels = np.linspace(0, 1, 11)
initial_contour = ax.tricontourf(x, y, tm, C_results[0], levels=levels, cmap=cm.coolwarm, extend='both')
fig.colorbar(initial_contour, ax=ax, format='%0.1f', shrink=0.4)

def animate(i):
    ax.clear()
    CC_current = C_results[i]
    t_current = time_steps[i]
    
    ax.tricontourf(x, y, tm, CC_current, levels=levels, cmap=cm.coolwarm, extend='both')
    
    ax.set_xlabel('x [m]', fontsize=18)
    ax.set_ylabel('y [m]', fontsize=18)
    ax.tick_params(axis='both', which='major', labelsize=16)
    ax.set_title('Concentration [$kg/m^2$], t = %.2f hour' % (t_current / 3600), fontsize=18)
    ax.set_aspect('equal')

# Compile frames into animation
ani = animation.FuncAnimation(fig, animate, frames=len(C_results), interval=150, blit=False)

# Prevent static figure from displaying twice
plt.close(fig)

# Display the interactive player
display(HTML(ani.to_jshtml()))
```

::: {attention icon=false} The source code
:class: dropdown

```python
#@title C(x,y,t) distribution on space

import numpy as np
import math
import matplotlib.pyplot as plt
from ipywidgets import interactive, fixed
import ipywidgets as widgets
from scipy.spatial import Delaunay
import matplotlib.cm as cm
import matplotlib
from matplotlib import ticker

x = np.linspace(0,10,250)
y = np.linspace(-2,2,100)
XX, YY = np.meshgrid(x, y)

x=XX.reshape(np.size(XX),1)
y=YY.reshape(np.size(YY),1)
x=x.reshape(-1);y=y.reshape(-1)
p=np.zeros([np.size(XX),2])
for i in range(np.size(XX)):
  p[i][0]=x[i]
  p[i][1]=y[i]

tri = Delaunay(p)
tm=tri.simplices.copy()

C0=1


def cxyt(t,ux,Dx,Dy,k,R,Y):
  A=np.sqrt(1+4*k*Dx*R/ux)
  B=np.sqrt(1+4*k*Dx*R/ux/ux)


  CC=np.zeros([len(x),1])
  for i in range(len(x)):
    CC[i][0]=C0/4* np.exp(x[i]*ux/2/Dx*(1-A)) *math.erfc( (x[i]-ux*t*R*B)/(2*np.sqrt(Dx*t/R))) *(  math.erf( (y[i]+Y/2)/(2*np.sqrt(Dy*x[i]/ux))) - math.erf( (y[i]-Y/2)/(2*np.sqrt(Dy*x[i]/ux))) )

  fig,ax = plt.subplots(1, 1,figsize=(12,12))
  plt.tricontourf(x,y,tm,CC[:,0],levels=np.linspace(0,1,11), cmap=cm.coolwarm, extend ='both')
  plt.colorbar(format='%0.1f',shrink=0.4)


  plt.xlabel('x[m]',fontsize=18)
  plt.ylabel('y[m]',fontsize=18)
  plt.xticks(fontsize=16)
  plt.yticks(fontsize=16)
  plt.title('Concerntration [$kg/m^2$], t = %.2f hour' %(t/3600),fontsize=18)
  ax.set_aspect(aspect=1)
  plt.show()
  return CC




ux=0.005
Dx=5e-4
Dy=1e-4
k=0.001
Y=0.5
R=1

tim=np.linspace(0.1,3600,11)
for i in range(11):
  cxyt(tim[i],ux,Dx,Dy,k,R,Y)
```
:::
:::::

### 6.2.4 Two-Dimensional (2D) Instantaneous Contaminant Source

The general three-dimensional solute transport equation can be solved analytically for two-dimensions if simple boundary (BC) and initial conditions (IC) are assumed. For a impulse input of a solute contaminant at $x = 0$ and $t = 0$ these conditions may be defined as following:

* $C(0,0,t)=0$ for $t>0$
* $C(0,0,0)=M/V_0$, $V_0$ is the initial volume where the contaminat spill
* $dC/dx=0$ for $x=\infty$
* $dC/dy=0$ for $y=\infty$
* $C(x,y,0)=0$ for $x\gt0$, $y\gt0$

which then yields the solution (Domenico and Schwartz, 1998)

<!-- QUESTION: D_x instead of Dx? -->
:::{math}
:enumerated: false
C(x,y,t)=\frac{M}{4(\pi t)^{3/2} (DxDy)^{1/2}} \exp\left[-\frac{(x- u_{x}t)^2}{4D_{x}t} - \frac{y^2}{4D_{y}t} -kt \right]
:::

where $u_x$ is the longitudinal pore water velocity, $M$ the input mass of the contaminant, $D_x$ and $D_y$ the dispersion coefficients in $x$ and $y $direction, $k$ the first-order degradation rate constant.

**Example:** $u_x = 0.002$, $D_x=5e-5$, $D_y=1e-5$, $k=0.001$

:::::{card} C(x,y,t) distribution on space
```{code-cell} python
:tags: [remove-input]

#@title C(x,y,t) distribution on space
import numpy as np
import matplotlib.pyplot as plt
from scipy.spatial import Delaunay
import matplotlib.cm as cm
import matplotlib.animation as animation
from IPython.display import HTML, display

# 1. Mesh Setup
x_vals = np.linspace(0, 10, 250)
y_vals = np.linspace(-2, 2, 100)
XX, YY = np.meshgrid(x_vals, y_vals)

x = XX.reshape(-1)
y = YY.reshape(-1)

# Optimized point creation for Delaunay
p = np.column_stack((x, y))
tri = Delaunay(p)
tm = tri.simplices.copy()

M = 10
ux = 0.002
Dx = 5e-5
Dy = 2.5e-5
k = 0.001

# 2. Physics Pre-Calculation (Vectorized for maximum speed)
# Adjusted to 40 steps to fix the IndexError and create a smooth video
tim = np.linspace(0.1, 3600 * 1.2, 40)

C_results = []
time_steps = []

for t in tim:
    A = M / (4 * (np.pi * t)**1.5 * (Dx * Dy)**0.5)
    
    # Vectorized Math: Calculates all 25,000 points instantly without a slow 'for' loop!
    CC = A * np.exp(-(x - ux * t)**2 / (4 * Dx * t) - (y * y) / (4 * Dy * t) - k * t)
    
    C_results.append(CC)
    time_steps.append(t)

# 3. Create the Animation Player
fig = plt.subplots(figsize=(10, 8))[0]

def animate(i):
    # WIPE THE ENTIRE FIGURE CLEAN EVERY FRAME (prevents colorbar bugs)
    fig.clf()
    
    # Recreate the axes
    ax = fig.add_subplot(111)
    
    CC_current = C_results[i]
    t_current = time_steps[i]
    
    # Dynamic levels just like the original code (0 to current max)
    c_max = np.max(CC_current)
    if c_max == 0: c_max = 1e-10 # Safeguard against completely flat frames
        
    levels = np.linspace(0, c_max, 11)
    
    # Draw the contour
    contour = ax.tricontourf(x, y, tm, CC_current, levels=levels, cmap=cm.coolwarm, extend='both')
    
    # Draw the dynamically-scaled colorbar attached to the fresh canvas
    fig.colorbar(contour, ax=ax, format='%0.1e', shrink=0.4)
    
    ax.set_xlabel('x [m]', fontsize=18)
    ax.set_ylabel('y [m]', fontsize=18)
    ax.tick_params(axis='both', which='major', labelsize=16)
    
    # Fixed the 'Concerntration' typo here as well
    ax.set_title('Concentration [$kg/m^2$], t = %.2f hour' % (t_current / 3600), fontsize=18)
    ax.set_aspect('equal')

# Compile frames into animation
ani = animation.FuncAnimation(fig, animate, frames=len(C_results), interval=150, blit=False)

# Prevent static figure from displaying twice
plt.close(fig)

# Display the interactive player
display(HTML(ani.to_jshtml()))
```

::: {attention icon=false} The source code
:class: dropdown

```python
#@title C(x,y,t) distribution on space

import numpy as np
import math
import matplotlib.pyplot as plt
from ipywidgets import interactive, fixed
import ipywidgets as widgets
from scipy.spatial import Delaunay
import matplotlib.cm as cm
import matplotlib
from matplotlib import ticker

x = np.linspace(0,10,250)
y = np.linspace(-2,2,100)
XX, YY = np.meshgrid(x, y)

x=XX.reshape(np.size(XX),1)
y=YY.reshape(np.size(YY),1)
x=x.reshape(-1);y=y.reshape(-1)
p=np.zeros([np.size(XX),2])
for i in range(np.size(XX)):
  p[i][0]=x[i]
  p[i][1]=y[i]

tri = Delaunay(p)
tm=tri.simplices.copy()

M=10


def cxyt(t,ux,Dx,Dy,k):
  A=M/(4*(np.pi*t)**1.5 * (Dx*Dy)**0.5)



  CC=np.zeros([len(x),1])
  for i in range(len(x)):
    CC[i][0]= A*np.exp(-(x[i]-ux*t)**2/(4*Dx*t) - y[i]*y[i]/(4*Dy*t) - k*t)

  fig,ax = plt.subplots(1, 1,figsize=(12,12))
  plt.tricontourf(x,y,tm,CC[:,0],levels=np.linspace(0,np.max(CC),11), cmap=cm.coolwarm, extend ='both')
  plt.colorbar(format='%0.1e',shrink=0.4)


  plt.xlabel('x[m]',fontsize=18)
  plt.ylabel('y[m]',fontsize=18)
  plt.xticks(fontsize=16)
  plt.yticks(fontsize=16)
  plt.title('Concerntration [$kg/m^2$], t = %.2f hour' %(t/3600),fontsize=18)
  ax.set_aspect(aspect=1)
  plt.show()
  return CC


ux=0.002
Dx=5e-5
Dy=2.5e-5
k=0.001
tim=np.linspace(0.1,3600*1.2,11)
for i in range(50):
  cxyt(tim[i],ux,Dx,Dy,k)
```
:::
:::::

# 7 Suggestions regarding to the illustration examples
(1) *Relax.* Try to run these examples with different input parameters, for example, to change the hydraulic conductivity values.

(2) Understand mass transport processes in subsurface with groundwater.

# Open discussion
* What are the common or potential contaminants in the groundwater near your home or a place you are interested in?
* Do you have any suggestion to remedy the contaminated groundwater or reduce/stop the spreading of contaminants?

# References

* Bear, J., Cheng, H.-D. Modeling Groundwater Flow and Contaminant Transport, Springer Netherlands, 2010. DOI: 10.1007/978-1-4020-6682-5 https://www.springer.com/gp/book/9781402066818


* Smith, I.M.,  Griffiths, D. V., Margetts L. Programming the Finite Element Method, (5th Edition), London: John Wiley & Sons Ltd, 2014.



* SKB (2004) RD&D-Programme 2004. Programme for research, development and demonstration of methods for the management and disposal of nuclear waste, including social science research. TR-04-21, Svensk Kärnbränslehantering AB (SKB), Stockholm.


* SKB (2006) Long-term safety for KBS-3 repositories at Forsmark and Laxemar – a first evaluation: Main Report of the SR-Can project. TR-06-09, Svensk Kärnbränslehantering AB (SKB), Stockholm.


* Rutqvist J. and Tsang C.F. (2008) Review of SKB’s Work on Coupled THM Processes Within SR-Can: External review contribution in support of SKI’s and SSI’s review of SR-Can, SKI Report 2008:08.


* Dominco, P.A., Schwartz, F.W., 1998. Physical and Chemical Hydrogeology. 0-471-59762-7, Wiley.

* Schnoor, J.L., 1996. Environmental Modeling: Fate and Transport of Pollutants in Water, Air, and Soil, 0-471-12436-2, Wiley.

* van Genuchten, M.T., Alves, W. J., 1982. Analytical solutions of the one-dimensional convective-dispersive solute transport equation. USDA ARS Technical Bulletin Number 1661. U.S. Salinity Laboratory Riverside.

* O'Loughlin, EM; Bowmer, Kathleen H. Dilution and decay of aquatic herbicides in flowing channels. Journal of Hydrology. 1975; 26:217-35.
