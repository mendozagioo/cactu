---
layout: documentation
title: Overview
description: Build your own layout like you want, define the number of columns for you grid with our powerfull Cactu's grid system, and more.
group: layout
toc: true
---


## Containers

Containers are the wrapper of grid, these are **required when using our default grid system**. Cactu has two different containers:
* `container`: With the `width` depending of screen size.
* `container-expanded`: With the `width` expanded `100%`.


### Normal container


<div class="highlight-example">
  <div class="container-example"></div>
</div>

{% highlight html %}
<div class="container">
  <!-- Content here -->
</div>
{% endhighlight %}


### Container expanded

<div class="highlight-example">
  <div class="container-expanded-example"></div>
</div>

{% highlight html %}
<div class="container-expanded">
  <!-- Content here -->
</div>
{% endhighlight %}


## Responsive breakpoints

Cactu has been developed with mobile-first on mind, we use a handful of media queries to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on exacly sized of viewport widths and allow us to scale up elements as the viewport changes.

Cactu primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.

{% highlight scss %}
// Extra small devices (max 575px)
@media (max-width: 575px) { ... }

// Cellphone devices (between 576px to 767px)
@media (min-width: 576px) and (max-width: 767px) { ... }

// Tablet devices (between 768px to 959px)
@media (min-width: 768px) and (max-width: 959px) { ... }

// Small desktop screens (between 960px to 1199px)
@media (min-width: 960px) and (max-width: 1199px) { ... }

// Medium desktop screens (between 1200px to 1343px)
@media (min-width: 1200px) and (max-width: 1343px) { ... }

// Medium desktop screens (min 1344px and up)
@media (min-width: 1344px) { ... }
{% endhighlight %}

Please consult the API documentation (coming soon) to customize and use the Cactu's breakpoints.


## Z-index

Some Cactu's components utilize z-index, the CSS property that helps control layout by providing a third axis to arrange content.

These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. We need a standard set of these across our layered components: tooltips, popovers, navbars, dropdownsand modals; so we can be reasonably consistent in the behaviors.

Below shows the z-index for some Cactu's components:

{% highlight scss %}
// Global variable
$zindex-top:      1000 !default;

// Components
dropdowns:        10
navbars:          100
modal-backdrops:  1000
tooltips:         1000
{% endhighlight %}