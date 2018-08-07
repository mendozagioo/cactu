---
layout: documentation
title: Image
description: Documentation and examples for basic style on image element.
group: elements
toc: true
---


## Variables

| Name  | Type  | Value |
| ----- | ----- | ----- |
| `$image-padding`    | <small>padding</small> | `.25rem` |
| `$image-radius`     | <small>radius</small>  | `$radius` |
| `$image-border`     | <small>unitless</small>  | `$border-base` |
| `$image-background` | <small>color</small>   | <span class="small-box" style="background:#fff"></span> `$white` |


## Basic image

<div class="highlight-example">
  <img data-src="holder.js/200x200" alt="Basic image">
</div>

{% highlight html %}
<img src="..." alt="Basic image">
{% endhighlight %}


## Expanded image

Expand the image adding the class `image-expanded`.

<div class="highlight-example">
  <img data-src="holder.js/100px250" class="image-expanded" alt="Expanded image">
</div>

{% highlight html %}
<img src="..." class="image-expanded" alt="Expanded image">
{% endhighlight %}


## Image with edge

Use the class `image-edge` to set edge the image.

<div class="highlight-example">
  <img data-src="holder.js/200x200" class="image-edge" alt="Image with edge">
</div>

{% highlight html %}
<img src="..." class="image-edge" alt="Image with edge">
{% endhighlight %}


<script src="/assets/js/holder.min.js"></script>

## Figure

<div class="highlight-example">
  <figure class="figure">
    <img src="holder.js/400x300" alt="A figure example">
    <figcaption>A figure example</figcaption>
  </figure>
</div>

{% highlight html %}
<figure class="figure">
  <img src="..." alt="A figure example">
  <figcaption>A figure example</figcaption>
</figure>
{% endhighlight %}


<script src="/assets/js/holder.min.js"></script>