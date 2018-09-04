---
layout: documentation
title: Paginations
description: Documentation and examples for paginations component, usually used for indicate a series of related content exists across multiple pages.
group: components
toc: true
---


## Overview

Cactu's paginations components are a block of connected links, making links hard to miss and easily scalable. Paginations are simple to use and you can choose a simple navigation structure `<nav>` or a list structure `<ul><li>`.


## Simple pagination

Two different structures to get the same result.

{% capture example %}
<nav class="pagination">
  <a href="#">Previous</a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">Next</a>
</nav>

<ul class="pagination">
  <li><a href="#">Previous</a></li>
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">Next</a></li>
</ul>
{% endcapture %}
{% include example.html content=example %}


## Active and disabled states

The `active` or `disabled` class should set on `<a>` tag. The `active` class it's only a simple desing propose, you define your own desing. The `disabled` class, try to disable the link functionality of `<a>` tag.

{% capture example %}
<nav class="pagination">
  <a class="disabled" href="#">Previous</a>
  <a class="active" href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">Next</a>
</nav>

<ul class="pagination">
  <li><a class="disabled" href="#">Previous</a></li>
  <li><a class="active" href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">Next</a></li>
</ul>
{% endcapture %}
{% include example.html content=example %}


## Alignment

Just add `-center` or `-end` class on `pagination` class to align this component.

{% capture example %}
<nav class="pagination-center">
  <a href="#">Previous</a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">Next</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav class="pagination-end">
  <a href="#">Previous</a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">Next</a>
</nav>
{% endcapture %}
{% include example.html content=example %}