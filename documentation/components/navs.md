---
layout: documentation
title: Navs
description: Documentation and examples for navs.
group: components
toc: true
---


## Nav horizontal

The navs components are built with flexbox and provide a strong foundation for building all types of navigation components.

You can use the `nav-horizontal` class with a simple structure or add the structure of `<ul> <li>`.

The bases `nav-[...]` components does not include any `active` state. It is beacause exist many ways to disign the active link selected, and you can modified your own `active` class having on a simple CSS code for navs.

{% capture example %}
<nav class="nav-horizontal">
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#" class="disabled">Disabled</a>
</nav>

<ul class="nav-horizontal">
  <li>
    <a href="#">Link</a>
  </li>
  <li>
    <a href="#">Link</a>
  </li>
  <li>
    <a href="#">Link</a>
  </li>
  <li>
    <a href="#" class="disabled">Disabled</a>
  </li>
</ul>
{% endcapture %}
{% include example.html content=example %}

### Horizontal algnment

Just adding flex justification like a class to the end of `nav-horizontal` class, you get aligned navs.
- `-start` (By default)
- `-center`
- `-end`
- `-around`
- `-between`
- `-evenly`

{% capture example %}
<nav class="nav-horizontal-center">
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#" class="disabled">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav class="nav-horizontal-end">
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#" class="disabled">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav class="nav-horizontal-around">
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#" class="disabled">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav class="nav-horizontal-between">
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#" class="disabled">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav class="nav-horizontal-evenly">
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#" class="disabled">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}


### Dropdown inside

{% capture example %}
<nav class="nav-horizontal">
  <a href="#">Link</a>
  <div class="dropdown">
    <input type="checkbox" id="drop-1-down">
    <label class="toggle" for="drop-1-down">
      Dropdown
    </label>
    <nav class="drop-menu">
      <a href="#">Link</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
    </nav>
  </div>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#" class="disabled">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}


## Nav vertical

This `nav-vertical` is adapts the container size.

{% capture example %}
<nav class="nav-vertical">
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#" class="disabled">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}


### Dropdown inside

{% capture example %}
<nav class="nav-vertical">
  <a href="#">Link</a>
  <div class="dropdown">
    <input type="checkbox" id="drop-2-down">
    <label class="toggle" for="drop-2-down">
      Dropdown
    </label>
    <nav class="drop-menu">
      <a href="#">Link</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
    </nav>
  </div>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#" class="disabled">Disabled</a>
</nav>
{% endcapture %}
{% include example.html content=example %}