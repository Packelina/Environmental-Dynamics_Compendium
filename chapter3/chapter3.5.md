---
numbering:
  enumerator: 2.%s
kernelspec:
  name: python3
  display_name: Python 3
authors:
  - name:
      literal: " "
---

# Introduction

We firstly illustrate the shear dispersion in a river. Then we illustrate the analytical solution for solute/contaminant transport in a stream with and without decay. The main purpose of these examples is to help our uderstanding of the *advection*, *dispersion* and *decay* processes in the context of mass trasnport in streams/rivers.  

# 1. Illustration of shear dispersion in a river

Here is a video showing tracer test in a river: 
:::{iframe} https://www.youtube.com/embed/jmKLyMac8jk
:width: 100%
:::

## 1.1. Lateral cross-section
In the lateral cross-section, the dispersion mainly caused by the velocity difference and diffusion. The following figure illustrates the dispersion in the lateral cross-section of a river:

:::{figure} ../images/fig_notebook2_dispersion_lateral.png
:label: fig_notebook2_dispersion_lateral
:width: 600px
:::

Assuming the lateral cross-section is retangular, the laminar flow velocity profile has analytical solution, which is the same as  laminar flow between homogeneous fractures illustrated in the {ref}`Chapter 1 General Principles<sec-1>`. The analytical solution is

:::{math}
:enumerated: false
u(y) = \frac{1}{2 \mu} \frac{d p}{d x} [y^{2}-(w/2)^2]
:::

where $w$ is the river width, $y$ is the coordniate along the width, and $\frac{d p}{d x}$ is the hydraulic gradient.

In this example, we uniformly release 5 000 particles and calculate the lateral-averaged concentration along the flow direction. Then we count the number of particles in each small sections along the river length x. The **probability density function** of the particles represents the concentration distribution!

(1) First step, we show pure **advection** caused dispersion:

:::::{card} Advection caused dispersion in the lateral cross-section
```{code-cell} python
:tags: [remove-input]

import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from IPython.display import HTML, display

# 1. Setup Parameters
dpdx = -5e-7
w = 2
mu = 1e-3
L = 150
num_of_particles = 5000
dt = 3600
D = 1e-4

# Initial arrays
y0 = np.linspace(-w/2, w/2, num_of_particles)
uy = 1/(2*mu) * dpdx * (np.square(y0) - (w/2)**2)
x0 = 0*y0 + 10

# 2. Create the Figure layout (slightly scaled down to fit standard web pages nicely)
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5))

# Setup Left Graph (Scatter)
particles, = ax1.plot(x0, y0, 'b.', markersize=2)
ax1.set_xlim(0, L)
ax1.set_ylim(-w/2, w/2)
ax1.set_xlabel('x [m]', fontsize=14)
ax1.set_ylabel('y [m]', fontsize=14)
title1 = ax1.set_title('particle location, Time = 0.0', fontsize=14)

# Setup Right Graph (Histogram)
# We will draw the histogram dynamically inside the animation function

# 3. The Animation Update Function
def animate(i):
    # i is the frame number (0 to 100)
    current_time = i * dt
    
    # Move particles (skipping frame 0 so the initial state stays at x=10)
    if i > 0:
        s = np.random.normal(0, 1, num_of_particles)
        # Using your original math (keeping the 0* dispersion multiplier)
        x0[:] += uy * dt + 0*s * np.sqrt(2*D * dt)

    # Update Left Graph
    particles.set_data(x0, y0)
    title1.set_text(f'particle location, Time = {current_time:.1f}')

    # Update Right Graph (Clear and redraw histogram for new data)
    ax2.clear()
    ax2.axis([0, L, 0, 1])
    ax2.hist(x0, bins=10, density=True, facecolor='g', alpha=0.75)
    ax2.set_title(f'Concentration, Time = {current_time:.1f}', fontsize=14)
    ax2.set_xlabel('x [m]', fontsize=14)
    ax2.set_ylabel('y [m]', fontsize=14)

# 4. Compile the Animation
# We want 100 frames (360000 / 3600 = 100 steps)
anim = FuncAnimation(fig, animate, frames=101, interval=101)

# Prevent the static empty figure from showing up under the video player
plt.close()

# 5. Display the Matplotlib Video Player UI!
display(HTML(anim.to_jshtml()))
```

::: {attention icon=false} The source code
:class: dropdown

```python
#@title Advection caused dispersion in the lateral cross-section
import numpy as np
import matplotlib.pyplot as plt

dpdx=-5e-7
w=2
mu=1e-3
L=150
num_of_particles=5000

y=np.linspace(-w/2,w/2,num_of_particles)

D=1e-4
uy=1/(2*mu)*dpdx*(np.square(y)-(w/2)**2)

y0=y;x0=0*y0+10

fig, (ax1, ax2) = plt.subplots(1, 2,figsize=(24,6))
ax1.axis ( [ 0, L, -w/2, w/2 ] )
ax1.plot(x0,y0,'b.')
title_string = ( 'particle location , Time = %1f' % ( 0 )  )
ax1.set_title ( title_string,fontsize = 18.0 )
ax1.set_xlabel ( 'x [m]',fontsize = 18.0 )
ax1.set_ylabel ( 'y [m]',fontsize = 18.0 )
ax1.tick_params(labelsize=18)

ax2.axis ( [ 0, L, 0, 1 ] )
ax2.hist(x0, 1, density=True, facecolor='g', alpha=0.75)
title_string = ( 'Concentration, Time = %1f' % ( 0 )  )
ax2.set_title ( title_string ,fontsize = 18.0)
ax2.set_xlabel ( 'x [m]',fontsize = 18.0 )
ax2.set_ylabel ( 'y [m]',fontsize = 18.0 )
ax2.tick_params(labelsize=18)
plt.show()

mu, sigma = 0, 1 # mean and standard deviation
#s = np.random.normal(mu, sigma, num_of_particles)
dt=3600
for it in range(0,360000,dt):
  s = np.random.normal(mu, sigma, num_of_particles)
  x0 += uy*dt + 0*s*np.sqrt(2*D*dt)

  fig, (ax1, ax2) = plt.subplots(1, 2,figsize=(24,6))
  ax1.axis ( [ 0, L, -w/2, w/2 ] )
  #ax1.fill_between ( x, 0, h_array[:,it] )
  ax1.plot(x0,y0,'b.')
  title_string = ( 'particle location , Time = %1f' % ( it+dt )  )
  ax1.set_title ( title_string,fontsize = 18.0 )
  ax1.set_xlabel ( 'x [m]',fontsize = 18.0 )
  ax1.set_ylabel ( 'y [m]',fontsize = 18.0 )
  ax1.tick_params(labelsize=18)

  ax2.axis ( [ 0, L, 0, 1 ] )
  ax2.hist(x0, 10, density=True, facecolor='g', alpha=0.75)
  title_string = ( 'Concentration, Time = %1f' % ( it+dt )  )
  ax2.set_title ( title_string ,fontsize = 18.0)
  ax2.set_xlabel ( 'x [m]',fontsize = 18.0 )
  ax2.set_ylabel ( 'y [m]',fontsize = 18.0 )
  ax2.tick_params(labelsize=18)

  plt.show()
```
:::
::::: 

(2) Diffusion

:::::{card} Diffusion caused dispersion in the lateral cross-section
```{code-cell} python
:tags: [remove-input]

import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from IPython.display import HTML, display

# 1. Setup Parameters
dpdx = -5e-7
w = 2
mu_viscosity = 1e-3  # Renamed to avoid conflict with random.normal mean
L = 150
num_of_particles = 5000
D = 1e-4

dt = 3600
total_time = 360000
num_frames = int(total_time / dt)

# 2. Initial State Setup
y0 = np.linspace(-w/2, w/2, num_of_particles)
x0 = np.full(num_of_particles, 75.0)

# Advection term (kept 0 in the update step, but retaining the equation for context)
uy = 1 / (2 * mu_viscosity) * dpdx * (np.square(y0) - (w/2)**2)

# 3. Figure and Axis Initialization
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(24, 6))

# Initialize Scatter Plot (ax1)
ax1.set_xlim(0, L)
ax1.set_ylim(-w/2, w/2)
scatter_plot, = ax1.plot(x0, y0, 'b.')
ax1.set_xlabel('x [m]', fontsize=18)
ax1.set_ylabel('y [m]', fontsize=18)
ax1.tick_params(labelsize=18)
title1 = ax1.set_title('Particle location, Time = 0.0', fontsize=18)

# Initialize Histogram (ax2)
ax2.set_xlim(0, L)
ax2.set_ylim(0, 0.15)
ax2.set_xlabel('x [m]', fontsize=18)
ax2.set_ylabel('y [m]', fontsize=18)
ax2.tick_params(labelsize=18)
title2 = ax2.set_title('Concentration, Time = 0.0', fontsize=18)

# Create the initial histogram layout with 150 bins
n, bins, hist_patches = ax2.hist(x0, bins=150, range=(0, L), density=True, facecolor='g', alpha=0.75)

# 4. Animation Update Function
def update(frame):
    global x0
    time = (frame + 1) * dt
    
    # Calculate random diffusion step
    mu_stat, sigma_stat = 0, 1
    s = np.random.normal(mu_stat, sigma_stat, num_of_particles)
    
    # Update positions (Notice: advection uy is multiplied by 0 here)
    x0 += 0 * uy * dt + s * np.sqrt(2 * D * dt)
    
    # Update scatter plot data
    scatter_plot.set_xdata(x0)
    title1.set_text(f'Particle location, Time = {time:.1f}')
    
    # Update histogram bar heights
    n_new, _ = np.histogram(x0, bins=150, range=(0, L), density=True)
    for patch, height in zip(hist_patches, n_new):
        patch.set_height(height)
        
    title2.set_text(f'Concentration, Time = {time:.1f}')
    
    return scatter_plot, title1, title2

# 5. Build and Display the Animation
anim = FuncAnimation(fig, update, frames=num_frames, blit=False, interval=100)

# Close the static plot window so it doesn't duplicate underneath the video
plt.close(fig)

# Render the widget
display(HTML(anim.to_jshtml()))
```

::: {attention icon=false} The source code
:class: dropdown

```python
#@title Diffusion caused dispersion in the lateral cross-section
import numpy as np
import matplotlib.pyplot as plt

dpdx=-5e-7
w=2
mu=1e-3
L=150
num_of_particles=5000

y=np.linspace(-w/2,w/2,num_of_particles)

D=1e-4
uy=1/(2*mu)*dpdx*(np.square(y)-(w/2)**2)

y0=y;x0=0*y0+75

fig, (ax1, ax2) = plt.subplots(1, 2,figsize=(24,6))
ax1.axis ( [ 0, L, -w/2, w/2 ] )
ax1.plot(x0,y0,'b.')
title_string = ( 'particle location , Time = %1f' % ( 0 )  )
ax1.set_title ( title_string,fontsize = 18.0 )
ax1.set_xlabel ( 'x [m]',fontsize = 18.0 )
ax1.set_ylabel ( 'y [m]',fontsize = 18.0 )
ax1.tick_params(labelsize=18)

ax2.axis ( [ 0, L, 0, 1 ] )
ax2.hist(x0, 1, density=True, facecolor='g', alpha=0.75)
title_string = ( 'Concentration, Time = %1f' % ( 0 )  )
ax2.set_title ( title_string ,fontsize = 18.0)
ax2.set_xlabel ( 'x [m]',fontsize = 18.0 )
ax2.set_ylabel ( 'y [m]',fontsize = 18.0 )
ax2.tick_params(labelsize=18)
plt.show()

mu, sigma = 0, 1 # mean and standard deviation
#s = np.random.normal(mu, sigma, num_of_particles)
dt=3600
for it in range(0,360000,dt):
  s = np.random.normal(mu, sigma, num_of_particles)
  x0 += 0*uy*dt + s*np.sqrt(2*D*dt)

  fig, (ax1, ax2) = plt.subplots(1, 2,figsize=(24,6))
  ax1.axis ( [ 0, L, -w/2, w/2 ] )
  #ax1.fill_between ( x, 0, h_array[:,it] )
  ax1.plot(x0,y0,'b.')
  title_string = ( 'particle location , Time = %1f' % ( it+dt )  )
  ax1.set_title ( title_string,fontsize = 18.0 )
  ax1.set_xlabel ( 'x [m]',fontsize = 18.0 )
  ax1.set_ylabel ( 'y [m]',fontsize = 18.0 )
  ax1.tick_params(labelsize=18)

  ax2.axis ( [ 0, L, 0, 0.15 ] )
  ax2.hist(x0, 150, density=True, facecolor='g', alpha=0.75)
  title_string = ( 'Concentration, Time = %1f' % ( it+dt )  )
  ax2.set_title ( title_string ,fontsize = 18.0)
  ax2.set_xlabel ( 'x [m]',fontsize = 18.0 )
  ax2.set_ylabel ( 'y [m]',fontsize = 18.0 )
  ax2.tick_params(labelsize=18)

  plt.show()
```
:::
::::: 

(3) Advection + diffusion cause dispersion in the lateral cross-section

:::::{card} Advection + diffusion caused dispersion in the lateral cross-section
```{code-cell} python
:tags: [remove-input]

import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from IPython.display import HTML, display

# 1. Setup Parameters
dpdx = -5e-7
w = 2
mu_viscosity = 1e-3  # Renamed to avoid conflict
L = 150
num_of_particles = 5000
D = 1e-4

dt = 36000  # Note: Larger time step from your new script
total_time = 360000
num_frames = int(total_time / dt)

# 2. Initial State Setup
y0 = np.linspace(-w/2, w/2, num_of_particles)
x0 = np.full(num_of_particles, 10.0)  # Starts at x = 10

# Advection term (Active this time!)
uy = 1 / (2 * mu_viscosity) * dpdx * (np.square(y0) - (w/2)**2)

# 3. Figure and Axis Initialization
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(24, 6))

# Initialize Scatter Plot (ax1)
ax1.set_xlim(0, L)
ax1.set_ylim(-w/2, w/2)
scatter_plot, = ax1.plot(x0, y0, 'b.')
ax1.set_xlabel('x [m]', fontsize=18)
ax1.set_ylabel('y [m]', fontsize=18)
ax1.tick_params(labelsize=18)
title1 = ax1.set_title('Particle location, Time = 0.0', fontsize=18)

# Initialize Histogram (ax2)
ax2.set_xlim(0, L)
ax2.set_ylim(0, 0.15)
ax2.set_xlabel('x [m]', fontsize=18)
ax2.set_ylabel('y [m]', fontsize=18)
ax2.tick_params(labelsize=18)
title2 = ax2.set_title('Concentration, Time = 0.0', fontsize=18)

# Create the initial histogram layout with 150 bins
n, bins, hist_patches = ax2.hist(x0, bins=150, range=(0, L), density=True, facecolor='g', alpha=0.75)

# 4. Animation Update Function
def update(frame):
    global x0
    time = (frame + 1) * dt
    
    # Calculate random diffusion step
    mu_stat, sigma_stat = 0, 1
    s = np.random.normal(mu_stat, sigma_stat, num_of_particles)
    
    # Update positions (Advection is now added: uy * dt)
    x0 += uy * dt + s * np.sqrt(2 * D * dt)
    
    # Update scatter plot data
    scatter_plot.set_xdata(x0)
    title1.set_text(f'Particle location, Time = {time:.1f}')
    
    # Update histogram bar heights
    n_new, _ = np.histogram(x0, bins=150, range=(0, L), density=True)
    for patch, height in zip(hist_patches, n_new):
        patch.set_height(height)
        
    title2.set_text(f'Concentration, Time = {time:.1f}')
    
    return scatter_plot, title1, title2

# 5. Build and Display the Animation
anim = FuncAnimation(fig, update, frames=num_frames, blit=False, interval=200)

# Close the static plot window
plt.close(fig)

# Render the interactive widget
display(HTML(anim.to_jshtml()))
```

::: {attention icon=false} The source code
:class: dropdown

```python
#@title Advection + diffusion caused dispersion in the lateral cross-section
import numpy as np
import matplotlib.pyplot as plt

dpdx=-5e-7
w=2
mu=1e-3
L=150
num_of_particles=5000

y=np.linspace(-w/2,w/2,num_of_particles)

D=1e-4
uy=1/(2*mu)*dpdx*(np.square(y)-(w/2)**2)

y0=y;x0=0*y0+10

fig, (ax1, ax2) = plt.subplots(1, 2,figsize=(24,6))
ax1.axis ( [ 0, L, -w/2, w/2 ] )
ax1.plot(x0,y0,'b.')
title_string = ( 'particle location , Time = %1f' % ( 0 )  )
ax1.set_title ( title_string,fontsize = 18.0 )
ax1.set_xlabel ( 'x [m]',fontsize = 18.0 )
ax1.set_ylabel ( 'y [m]',fontsize = 18.0 )
ax1.tick_params(labelsize=18)

ax2.axis ( [ 0, L, 0, 1 ] )
ax2.hist(x0, 1, density=True, facecolor='g', alpha=0.75)
title_string = ( 'Concentration, Time = %1f' % ( 0 )  )
ax2.set_title ( title_string ,fontsize = 18.0)
ax2.set_xlabel ( 'x [m]',fontsize = 18.0 )
ax2.set_ylabel ( 'y [m]',fontsize = 18.0 )
ax2.tick_params(labelsize=18)
plt.show()

mu, sigma = 0, 1 # mean and standard deviation
#s = np.random.normal(mu, sigma, num_of_particles)
dt=36000
for it in range(0,360000,dt):
  s = np.random.normal(mu, sigma, num_of_particles)
  x0 += uy*dt + s*np.sqrt(2*D*dt)

  fig, (ax1, ax2) = plt.subplots(1, 2,figsize=(24,6))
  ax1.axis ( [ 0, L, -w/2, w/2 ] )
  #ax1.fill_between ( x, 0, h_array[:,it] )
  ax1.plot(x0,y0,'b.')
  title_string = ( 'particle location , Time = %1f' % ( it+dt )  )
  ax1.set_title ( title_string,fontsize = 18.0 )
  ax1.set_xlabel ( 'x [m]',fontsize = 18.0 )
  ax1.set_ylabel ( 'y [m]',fontsize = 18.0 )
  ax1.tick_params(labelsize=18)

  ax2.axis ( [ 0, L, 0, 0.15 ] )
  ax2.hist(x0, 150, density=True, facecolor='g', alpha=0.75)
  title_string = ( 'Concentration, Time = %1f' % ( it+dt )  )
  ax2.set_title ( title_string ,fontsize = 18.0)
  ax2.set_xlabel ( 'x [m]',fontsize = 18.0 )
  ax2.set_ylabel ( 'y [m]',fontsize = 18.0 )
  ax2.tick_params(labelsize=18)

  plt.show()
```
:::
:::::

## 1.2. Vertical cross-section

Similarly, the dispersion in the verticla cross-section also caused by the vertical velocity difference and molecular diffusion. The following figure illustrates the dispersion in the vertical cross-section of a river:

:::{figure} ../images/fig_notebook2_longitudinal_dispersion.png
:label: fig_notebook2_longitudinal_dispersion
:width: 600px
:::

Assuming the flow depth is constant, the laminar flow velocity profiles are more complicated than that in the lateral cross-section. The solution of velocity field and the 'boundary thickness' is a classical problem in fluid mechanics, named as 'boundary layer theory', which is illustrated in the following figure:

:::{figure} ../images/fig_notebook2_boundary_layer_theory.png
:label: fig_notebook2_boundary_layer_theory
:width: 600px
:::

Here we only focus on illustration of the vertical shear dispersion, so we use the average turbulent log-velocity profile (from Socolofsky and Jirka, 2005)

:::{math}
:enumerated: false
u(z)=<u>+\frac{u_*}{\kappa}(1+ \ln(z/h))
:::

where $<u>$ is the mean velocity, $\kappa$ is the von Karman constant (taking 0.4). $u_*$ is shear velocity, for uniform open channel flow, $u_*=\sqrt {ghS}$, $S$ is the channel slope.

Assuming $h=0.3m$, $S=0.0005$, flow rate $Q=1$ m{sup}`3`/s, the velocity profile is:

::::{note icon=false} Vertical velocity profile
```{code-cell} python
:tags: [remove-input]

#@title Vertical velocity profile
import numpy as np
w=10
h=0.3
S=0.0005
kappa=0.4
g=9.8
Q=1
A=w*h
um=Q/A
us=np.sqrt(g*h*S)

z=np.linspace(0.005,h,100)
uz=um+us/kappa*(1+np.log(z/h))

fig, ax = plt.subplots(1, 1,figsize=(8,6))
plt.plot(uz,z,lw=2)
plt.xlabel('length x [m]',fontsize=18)
plt.ylabel('Vertical velocity [m/s]',fontsize=18)
plt.xticks(fontsize=16)
plt.yticks(fontsize=16)
plt.show()
```
::::

We release 5 000 particles and calculate the depth-averaged concentration along the flow direction:

:::::{card} Shear dispersion in the vertical cross-section
```{code-cell} python
:tags: [remove-input]

import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from IPython.display import HTML, display

# 1. Setup Parameters
# ⚠️ IMPORTANT: These four variables were missing from the snippet. 
# Update them to match the correct values for your lesson!
w = 10
h = 0.3
S = 0.0005
kappa = 0.4
g = 9.8
Q = 1

# Calculated Parameters
A = w * h
um = Q / A
us = np.sqrt(g * h * S)

D = 6.4e-2
L = 200
num_of_particles = 5000

dt = 30
total_time = 360
num_frames = int(total_time / dt)

# 2. Initial State Setup
# Particles distributed vertically from near the bed (0.005) to the surface (h)
z = np.linspace(0.005, h, num_of_particles)
y0 = z
x0 = np.full(num_of_particles, 1.0)  # Starts at x = 1

# Logarithmic velocity profile for vertical shear
uz = um + (us / kappa) * (1 + np.log(z / h))

# 3. Figure and Axis Initialization
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(24, 6))

# Initialize Scatter Plot (ax1)
ax1.set_xlim(0, L)
ax1.set_ylim(0, h)
scatter_plot, = ax1.plot(x0, y0, 'b.')
ax1.set_xlabel('x [m]', fontsize=18)
ax1.set_ylabel('y [m]', fontsize=18) 
ax1.tick_params(labelsize=18)
title1 = ax1.set_title('Particle location, Time = 0.0', fontsize=18)

# Initialize Histogram (ax2)
ax2.set_xlim(0, L)
ax2.set_ylim(0, 0.15)
ax2.set_xlabel('x [m]', fontsize=18)
ax2.set_ylabel('y [m]', fontsize=18)
ax2.tick_params(labelsize=18)
title2 = ax2.set_title('Concentration, Time = 0.0', fontsize=18)

# Create the initial histogram layout with 150 bins
n, bins, hist_patches = ax2.hist(x0, bins=150, range=(0, L), density=True, facecolor='g', alpha=0.75)

# 4. Animation Update Function
def update(frame):
    global x0
    time = (frame + 1) * dt
    
    # Calculate random diffusion step
    mu_stat, sigma_stat = 0, 1
    s = np.random.normal(mu_stat, sigma_stat, num_of_particles)
    
    # Update positions using the vertical velocity profile (uz)
    x0 += uz * dt + s * np.sqrt(2 * D * dt)
    
    # Update scatter plot data
    scatter_plot.set_xdata(x0)
    title1.set_text(f'Particle location, Time = {time:.1f}')
    
    # Update histogram bar heights
    n_new, _ = np.histogram(x0, bins=150, range=(0, L), density=True)
    for patch, height in zip(hist_patches, n_new):
        patch.set_height(height)
        
    title2.set_text(f'Concentration, Time = {time:.1f}')
    
    return scatter_plot, title1, title2

# 5. Build and Display the Animation
anim = FuncAnimation(fig, update, frames=num_frames, blit=False, interval=200)

# Close the static plot window
plt.close(fig)

# Render the interactive widget
display(HTML(anim.to_jshtml()))
```

::: {attention icon=false} The source code
:class: dropdown

```python
#@title Shear dispersion in the vertical cross-section

D=6.4e-2
L=200
num_of_particles=5000

z=np.linspace(0.005,h,num_of_particles)
uz=um+us/kappa*(1+np.log(z/h))
y0=z
x0=0*y0+1
fig, (ax1, ax2) = plt.subplots(1, 2,figsize=(24,6))
ax1.axis ( [ 0, L, 0, h ] )
ax1.plot(x0,y0,'b.')
title_string = ( 'particle location , Time = %1f' % ( 0 )  )
ax1.set_title ( title_string,fontsize = 18.0 )
ax1.set_xlabel ( 'x [m]',fontsize = 18.0 )
ax1.set_ylabel ( 'y [m]',fontsize = 18.0 )
ax1.tick_params(labelsize=18)

ax2.axis ( [ 0, L, 0, 1 ] )
ax2.hist(x0, 1, density=True, facecolor='g', alpha=0.75)
title_string = ( 'Concentration, Time = %1f' % ( 0 )  )
ax2.set_title ( title_string ,fontsize = 18.0)
ax2.set_xlabel ( 'x [m]',fontsize = 18.0 )
ax2.set_ylabel ( 'y [m]',fontsize = 18.0 )
ax2.tick_params(labelsize=18)
plt.show()

mu, sigma = 0, 1 # mean and standard deviation
#s = np.random.normal(mu, sigma, num_of_particles)
dt=30
for it in range(0,360,dt):
  s = np.random.normal(mu, sigma, num_of_particles)
  x0 += uz*dt + s*np.sqrt(2*D*dt)

  fig, (ax1, ax2) = plt.subplots(1, 2,figsize=(24,6))
  ax1.axis ( [ 0, L, 0, h ] )
  #ax1.fill_between ( x, 0, h_array[:,it] )
  ax1.plot(x0,y0,'b.')
  title_string = ( 'particle location , Time = %1f' % ( it+dt )  )
  ax1.set_title ( title_string,fontsize = 18.0 )
  ax1.set_xlabel ( 'x [m]',fontsize = 18.0 )
  ax1.set_ylabel ( 'y [m]',fontsize = 18.0 )
  ax1.tick_params(labelsize=18)

  ax2.axis ( [ 0, L, 0, 0.15 ] )
  ax2.hist(x0, 150, density=True, facecolor='g', alpha=0.75)
  title_string = ( 'Concentration, Time = %1f' % ( it+dt )  )
  ax2.set_title ( title_string ,fontsize = 18.0)
  ax2.set_xlabel ( 'x [m]',fontsize = 18.0 )
  ax2.set_ylabel ( 'y [m]',fontsize = 18.0 )
  ax2.tick_params(labelsize=18)

  plt.show()
```
:::
::::: 

# 2. Formulating a distributed mass balance for a stream

From the lecture (compendium), we know that the distributed mass balance in a stream is the **advection-dispersion equation (ADE)**:

:::{math}
:enumerated: false
\frac{\partial C}{\partial t} = -v\frac{\partial C}{\partial x} + D \frac{\partial^2 C}{\partial x^2}
:::

In this exercise, we would like to illustrated the analytical solutions again in the context of mass transport in streams/rivers.

**Analytical solutions**:

## 2.1. Instantaneous injection in the infinite domain $x \in [-\infty,\infty ]$

:::{math}
:enumerated: false
C(t,x)=\frac{M}{2A\sqrt{\pi D t}} \exp \left[-\frac{(x-vt)^{2}}{4Dt} \right]
:::

::::{hint icon=false} Concentration distribution on space at different time
:::{anywidget} ../javafiles/ch2_concentration_distribution_diff_t.mjs
:::
::::

::::{hint icon=false} Concentration distribution on time for different locations
:::{anywidget} ../javafiles/ch2_concentration_distribution_diff_loc.mjs
:::
::::

## 2.2. Continuous injection in the semi-finite domain $x \in [0,\infty ]$

:::{math}
:enumerated: false
C(t,x)=\frac{C_0}{2} \operatorname{erfc}\left[\frac{x-vt}{2\sqrt{D t}}\right] + \frac{C_0}{2} \exp\left(-\frac{vt}{D}\right) \operatorname{erfc}\left[\frac{x+vt}{2\sqrt{D t}}\right]
:::

where $\operatorname{erfc}(x)=1-\frac{2}{\sqrt \pi} \int _{0}^{x} e^{-\xi^2} d\xi$ is the *Complementary Error Function*.

::::{hint icon=false} Concentration distribution on space
:::{anywidget} ../javafiles/ch2_concentration_distribution_space.mjs
:::
::::

::::{hint icon=false} Concertration distribution on time for different locations
:::{anywidget} ../javafiles/ch2_concentration_distribution_time_diff_loc.mjs
:::
::::

For the case with mass lost from the water on its way downstream due to biogeochemical reactions, such as plant uptake and denitrification. Thus we have an internal sink. It is common to model this retention of nitrate along a stream as a first-order decay reaction.
The equation is

:::{math}
:enumerated: false
\frac{\partial C}{\partial t} = -v\frac{\partial C}{\partial x} + D \frac{\partial^2 C}{\partial x^2} -\lambda C 
:::

where $\lambda$ is the constant decay rate [T{sup}`-1`]

**Analytical solutions:**

## 2.3. Steady state solution for continuous injection in the semi-finite domain $x \in [0,\infty ]$

:::{math}
:enumerated: false
C(x)=\frac{c_0}{\sqrt{1+\frac{4\lambda D}{v^2}}} \exp\left[\frac{vx}{2D}(1-\sqrt{1+\frac{4\lambda D}{v^2}})\right]
:::

::::{hint icon=false} Concentration distribution on space
:::{anywidget} ../javafiles/ch2_concentration_distribution_space_cont_semi.mjs
:::
::::

## 2.4. Continuous injection

:::{math}
:enumerated: false
C(x,t)=\frac{c_0}{2} \exp\left(-\frac{\lambda x}{v}\right) \operatorname{erfc}\left(\frac{(x-vt)(1+\frac{2\lambda D}{v^2})}{2\sqrt{Dt}}\right)
:::

::::{hint icon=false} Concentration distribution on space
:::{anywidget} ../javafiles/ch2_concentration_distribution_space_cont.mjs
:::
::::

::::{note icon=false} Erfc(1.2)
```{code-cell} python
:tags: [remove-input]

import math
print(math.erfc(1.2))
```
::::

::::{hint icon=false} Concentration distribution on time for different locations
:::{anywidget} ../javafiles/ch2_concentration_distribution_time_diff_loc_cont.mjs
:::
::::


## 2.5. Continuous injection for duration $\tau$

:::{math}
:enumerated: false
C(x,t)=\frac{c_0}{2} \exp\left(-\frac{\lambda x}{v}\right) \left[\operatorname{erfc}\left(\frac{(x-vt)(1+\frac{2\lambda D}{v^2})}{2\sqrt{Dt}}\right)-\operatorname{erfc}\left(\frac{(x-v(t-\tau))(1+\frac{2\lambda D}{v^2})}{2\sqrt{D(t-\tau)}}\right)\right]
:::

::::{hint icon=false} Concentration distribution on space
:::{anywidget} ../javafiles/ch2_concentration_distribution_space_cont_duration.mjs
:::
::::

::::{hint icon=false} Concentration distribution on time for different locations
:::{anywidget} ../javafiles/ch2_concentration_distribution_time_diff_loc_cont_duration.mjs
:::
::::

# 3. Suggestions regarding to the illustration examples
(1) Relax. Run these examples with different parameter values to understand the sensivity of each parameter, $v, D, \lambda, \tau$.


(2) Reflect on lecture notes, think and ask questions if you have.


# Open question for thinking/discussion:

* is it safe to release contaminated water from Japan's Fukushima nuclear plant into Pacific Ocean?

:::{card} 📰 BBC News: Fukushima Water Release
:link: https://www.bbc.com/news/world-asia-54658379

Click here to read the full article analyzing the safety and environmental impact of releasing the contaminated water.
:::

<!-- NOTE: Put in another video maybe-->

* If let you to evalute the safety, what kind of information do you want to know?

* Do you have any suggestion to Tokyo Electric Power Company (the owner of Fukushima nuclear plant) to deal with the contaminated water and soils?


# References
<!-- FIXME: So it does not recognize the doi -->
* HUGO B. FISCHER, E. JOHN LIST, ROBERT C.
Y. KOH, JÖRG IMBERGER, NORMAN H. BROOKS, Mixing in Inland and Coastal Waters, Academic Press, 1979. https://doi.org/10.1016/C2009-0-22051-4 


* Scott A. Socolofsky & Gerhard H. Jirka, Special Topics in Mixing and Transport Processes in the Environment. 2005. https://ceprofs.civil.tamu.edu/ssocolofsky/OCENx89/Downloads/Book/Socolofsky_Jirka.pdf


* https://www.ludlow.org/news/id/33271/dye-study-in-the-ohio-river.aspx


* Dominco, P.A., Schwartz, F.W., 1998. Physical and Chemical Hydrogeology. 0-471-59762-7, Wiley.

* Schnoor, J.L., 1996. Environmental Modeling: Fate and Transport of Pollutants in Water, Air, and Soil, 0-471-12436-2, Wiley.

* van Genuchten, M.T., Alves, W. J., 1982. Analytical solutions of the one-dimensional convective-dispersive solute transport equation. USDA ARS Technical Bulletin Number 1661. U.S. Salinity Laboratory Riverside.

* O'Loughlin, EM; Bowmer, Kathleen H. Dilution and decay of aquatic herbicides in flowing channels. Journal of Hydrology. 1975; 26:217-35.


* John N. Smith, Robin M. Brown, William J. Williams, Marie Robert, Richard Nelson, S. Bradley Moran, Fukushima radioactivity transport to North America,
Proceedings of the National Academy of Sciences Feb 2015, 112 (5) 1310-1315; DOI: 10.1073/pnas.1412814112, https://www.pnas.org/content/112/5/1310

