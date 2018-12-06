---
layout: documentation
title: Dropdowns
description: Basic use for Dropdowns with a few classes.
group: components
toc: true
---


## Variables

| Name  | Type  | Value |
| ----- | ----- | ----- |
| `$dropdown-menu-border` | <small>unitless</small> | `$border-base` |
| `$dropdown-item-padding` | <small>padding</small> | `.3125rem 1rem` |
| `$dropdown-menu-top` | <small>unitless</small> | `1.625rem + .75rem + .125rem` |
| `$drop-dow-open-shadow` | <small>unitless</small> | `0 0 0 $outline-width darken($gray-200, 20%)` |
| `$triangle-width` | <small>width</small> | `5px` |
| `$triangle-transition` | <small>unitless</small> | `transform .1s ease-in-out` |
| `$drop-menu-min-width` | <small>min-width</small> | `12.5rem` |
| `$drop-menu-padding` | <small>padding</small> | `.5rem 0` |
| `$drop-menu-radius` | <small>radius</small> | `$radius` |
| `$drop-menu-color` | <small>color</small> | <span class="small-box" style="background:#343a40"></span> `$text-color` |
| `$drop-menu-background` | <small>color</small> | <span class="small-box" style="background:#fff"></span> `$white` |
| `$drop-menu-transition` | <small>unitless</small> | `color $speed ease-in-out, background-color $speed ease-in-out` |
| `$drop-active-color` | <small>color</small> | <span class="small-box" style="background:#343a40"></span> `$text-color` |
| `$drop-active-background` | <small>color</small> | <span class="small-box" style="background:#e9ecef"></span> `$gray-200` |
| `$separator-color` | <small>color</small> | <span class="small-box" style="background:#dee2e6"></span> `$border-color` |


## Overview

Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive without JavaSctipt, instead, is used the radio button with `:checked` pseudo class to display the toggleable list.


## Dropdown

{% capture example %}
<div class="dropdown">
  <input type="checkbox" id="drop-1-down">
  <label class="button toggle" for="drop-1-down">
    Dropdown button
  </label>
  <nav class="drop-menu">
    <a href="#">Lorem ipsum dolor</a>
    <a href="#" class="drop-active">Pellentesque nibh</a>
    <a href="#">Maecenas at dapibus</a>
    <hr class="drop-separator">
    <a href="#">Quisque eleifend</a>
  </nav>
</div>
{% endcapture %}
{% include example.html content=example %}

Changing classes with JS.

{% capture example %}
<div class="dropdown">
  <button class="toggle">
    Dropdown button
  </button>
  <nav class="drop-menu">
    <a href="#">Lorem ipsum dolor</a>
    <a href="#" class="drop-active">Pellentesque nibh</a>
    <a href="#">Maecenas at dapibus</a>
    <hr class="drop-separator">
    <a href="#">Quisque eleifend</a>
  </nav>
</div>
{% endcapture %}
{% include example.html content=example %}


{% capture example %}
<div class="dropdown">
  <input type="checkbox" id="drop-1-1-down">
  <label class="button toggle" for="drop-1-1-down">
    Dropdown button
  </label>
  <nav class="drop-menu">
    <a href="#">Lorem ipsum dolor</a>
    <a href="#">Pellentesque nibh</a>
    <a href="#">Maecenas at dapibus</a>
    <hr class="drop-separator">
    <a href="#">Quisque eleifend</a>
    <hr class="drop-separator">
    <div class="drop-item">
      <p>You can insert <strong>any type of content</strong></p>
    </div>
  </nav>
</div>
{% endcapture %}
{% include example.html content=example %}


## Dropup

{% capture example %}
<div class="dropup">
  <input type="checkbox" id="drop-1-top">
  <label class="button toggle" for="drop-1-top">
    Dropup button
  </label>
  <nav class="drop-menu">
    <a href="#">Lorem ipsum dolor</a>
    <a href="#">Pellentesque nibh</a>
    <a href="#">Maecenas at dapibus</a>
  </nav>
</div>
{% endcapture %}
{% include example.html content=example %}


## Dropright

{% capture example %}
<div class="dropright">
  <input type="checkbox" id="drop-1-right">
  <label class="button toggle" for="drop-1-right">
    Dropright button
  </label>
  <nav class="drop-menu">
    <a href="#">Lorem ipsum dolor</a>
    <a href="#">Pellentesque nibh</a>
    <a href="#">Maecenas at dapibus</a>
  </nav>
</div>
{% endcapture %}
{% include example.html content=example %}


## Dropleft

{% capture example %}
<div class="dropleft">
  <input type="checkbox" id="drop-1-left">
  <label class="button toggle" for="drop-1-left">
    Dropleft button
  </label>
  <nav class="drop-menu">
    <a href="#">Lorem ipsum dolor</a>
    <a href="#">Pellentesque nibh</a>
    <a href="#">Maecenas at dapibus</a>
  </nav>
</div>
{% endcapture %}
{% include example.html content=example %}