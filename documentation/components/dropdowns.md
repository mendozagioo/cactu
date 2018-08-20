---
layout: documentation
title: Dropdowns
description: Basic use for Dropdowns with a few classes.
group: components
toc: true
---

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