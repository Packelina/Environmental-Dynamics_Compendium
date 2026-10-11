---
numbering:
  enumerator: 4.%s
---

(sec-4-2)=
# 4.2. Basic concepts and definitions

The following section will introduce some important concepts, theory and terminology that are needed to understand the basics of hydrogeology. If you have very little previous knowledge of this subject, or want to refresh your knowledge, this chapter is a good place to start.

(sec-4-2-1)=
## 4.2.1. What is groundwater?

Groundwater defines the zone where the voids in the ground are fully saturated with water, and therefore it is also called the saturated zone. Above the groundwater is the vadose or unsaturated zone where the voids are partly filled with air. The border separating these two zones is called the water table.

In the field of hydrogeology one is often interested in the geological formations with capacity to hold and transmit water. A formation that yields significant quantities of water for economic use is called an aquifer. A formation with no or minimal amounts of water is referred to as an aquitard. When two aquifers are separated by a formation through which little or no water is flowing, it is called a confining formation or layer. We often distinguish between confined and unconfined aquifers. An unconfined aquifer is always in contact with the atmosphere, hence there are no layers closing off the water table, where as the confined aquifer is over-lain by a layer or formation through which very little or no groundwater can flow.

:::{figure} ../images/fig_aquifer_aquitard_simple_crosssection.jpg
:label: fig_aquifer_aquitard_simple_crosssection
:width: 400px
A much simplified geological cross-section showing an confined/unconfined aquifer separated by a confining layer called an aquitard.
:::

Since the intention of this text is to give an introduction to groundwater flow and solute transport, it is necessary to introduce some basic properties of the media through which the groundwater flows, i.e. soil properties.

(sec-4-2-2)=
## 4.2.2. Medium ability to transmit water, permeability and hydraulic conductivity

When discussing the capacity of a medium to transport water, we need a term to quantify this property; the permeability of a medium. The permeability is a property of the medium only and is independent of fluid properties.

Also the properties of the solute flowing through an aquifer will affect the flow characteristics. This is described by the fluid's viscosity. This property is affected by the temperature of the fluid. However, since the temperature variation of groundwater is fairly small, we often neglect these effects. Another issue is the affect of solutes. A high concentration of dissolved solids will increase the density of water and influence the viscosity as well. This is commonly neglected except for situations where concentration of dissolved solids are very high, e.g. when we look at special problems such as saltwater intrusion

Most often the groundwater properties are fairly constant, so we use a term that combines both the permeability of the medium as well as the viscosity of water. This term is called **Hydraulic Conductivity**. We will cover it in more detail when we talk about groundwater flow.

(sec-4-2-3)=
## 4.2.3. Heterogeneity - geology governs the flow of groundwater

Next we shall discuss the irregularity of a geologic formation, the material making up the formations and how it can influence the groundwater flow.

In most cases the subsurface is not regular. And even if it seems regular it depends on the considered scale of study. Looking at a geological cross-section one often finds a complex setup of different geological structures. A groundwater system on this scale is sometimes referred to as megascopic. The hydraulic conductivity of these different formations might vary and therefore influence the overall flow direction and velocity of groundwater. This irregularity of the subsurface can be referred to as **heterogeneity**.

:::{figure} ../images/fig_out_wash_plain_crosssection.jpg
:label: fig_out_wash_plain_crosssection
:width: 500px
A geological cross-section of an out-wash plain. Here the megascopic heterogeneity is clearly seen.
:::

If we look very close on the structure of a medium, close enough to study the pores and voids, we talk about the micro-scale. Also at this scale the medium shows irregular characteristics. However, here it is because pores are not evenly distributed. It can thus also be defined as heterogeneous.

The opposite to heterogeneous is **homogeneous**. A completely homogeneous situation is not very common; however, under some circumstances one may assume almost homogeneous conditions, e.g. for simple modeling aspects. This is for instance the case if we consider the scale between mega and micro, which is referred to as the macro scale. Here we look at a medium close enough to be in one homogeneous part of a formation but not to the point where the heterogeneous pore structure has any influence on our problem. At this scale one can assume homogeneous characteristics.

(sec-4-2-4)=
## 4.2.4. Anisotropic/isotropic conditions

We sometimes find that the hydraulic conductivity is different depending on the direction of the flow of the water through a medium. For example on a megascopic scale: in bedded sediments, the permeability might be larger in the direction parallel to the bedding than perpendicular to it. And on the micro scale some rock material might for example have a preferred orientation of cracks that leads to varying permeability depending on direction of flow through the medium. This is referred to as anisotropy. When the hydraulic conductivity is not affected by flow direction through the medium it is said to be isotropic.

(sec-4-2-5)=
## 4.2.5. Porous media

A geologic formation is made out of rock, sediments, etc. These materials are not solid, which is pretty obvious when talking about sand or gravel, but is also valid for rocks like granite. Here the major voids are made up of cracks and fractures that can yield water in larger quantities. The material making up the different geological formations is referred to as porous media. The porosity is a dimensionless quantity defined by the ratio of the volume of void space to the total volume of the medium,

:::{math}
n = \frac{V_{\text{volume voids}}}{V_{\text{total volume}}}
:::

One might think that the more voids a medium has the more water it would transmit. However, this is not always the case. First of all when dealing with groundwater we are interested in the pores through which water can flow, not enclosed voids. Secondly, very fine materials will prevent the movement of water through the pores due to surface tension. Even though for example clay has a high porosity, it allows only a minimal amount of water to be transmitted through it pores due to surface tension. The **effective porosity** is sometimes a better way to express the porosity property of a medium when dealing with groundwater. It is commonly denoted $\mathbf{n_{\mathrm{e}}}$ and describes the volume of voids that transmits water in relation to the total volume of the medium.
