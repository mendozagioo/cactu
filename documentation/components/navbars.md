---
layout: documentation
title: Navbars
description: Basic use for Navbar using only CSS, completely simple, resposive and interactive.
group: components
toc: true
---


## How it works

A navbar can be used inside a grid or outside it and just with CSS or changing classes with JS. By default has not paddings (the class `navbar`) and with width expanded (100%), this means is adaptable always to any container, for this reason, navbar component could be outside or inside the grid. However, if you nedd a expanded navbar, please use the `navbar-expanded` class, this class set needed padding to adapt the component to any screen size.

Here’s what you need to know before getting started with the navbar:

* Outside grid need use the `navbar` class out of grid.
* Inside the `container` class grid but outside of `column` class, to get the require wrapping.
* If you need a navbar expanded, you don't need to add another class, just need to add `-expanded` to the same class `navbar`. Example: `navbar-expanded`.
* Just need CSS to collapse the navigation on small screens, but, you can collapse the navigation adding classes with JS.

Watch the <a href="/examples/navbars" target="_blank">examples of navbars</a> to choose the optimal cofiguration.

The next exampe show how we can use a navbar outside grid and only using CSS.

{% capture example %}
<div class="navbar">
  <div class="container">
    <div class="column">
      <a class="navbar-brand" href="#">Brand</a>
      <input type="checkbox" id="navbar-1">
      <label class="button navbar-toggler" for="navbar-1">
        <i class="menu-icon"></i>
      </label>
      <nav>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#" class="disabled">Disabled</a>
      </nav>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

The same navbar but now using JS.

{% capture example %}
<div class="navbar">
  <div class="container">
    <div class="column">
      <a class="navbar-brand" href="#">Brand</a>
      <button class="navbar-toggler">
        <i class="menu-icon"></i>
      </button>
      <nav>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </nav>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## With Dropdown

{% capture example %}
<div class="navbar-expanded">
  <a class="navbar-brand" href="#">Brand</a>
  <button class="navbar-toggler">
    <i class="menu-icon"></i>
  </button>
  <nav>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <div class="dropdown">
      <span class="toggle">
        Dropdown
      </span>
      <nav class="drop-menu">
        <a href="#">Lorem ipsum</a>
        <a href="#">Maecenas</a>
        <hr class="drop-separator">
        <a href="#">Quisque eleifend</a>
      </nav>
    </div>
    <a href="#">Link 4</a>
  </nav>
</div>
{% endcapture %}
{% include example.html content=example %}


## Lateral navigation

To add a lateral navigation, you just add a new `nav` label with the `navigation-end` class.

{% capture example %}
<div class="navbar-expanded">
  <a class="navbar-brand" href="#">Brand</a>
  <button class="navbar-toggler">
    <i class="menu-icon"></i>
  </button>
  <nav>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </nav>
  <nav class="navigation-end">
    <div class="dropdown">
      <span class="toggle">
        Dropdown
      </span>
      <nav class="drop-menu">
        <a href="#">Lorem ipsum</a>
        <a href="#">Maecenas</a>
        <hr class="drop-separator">
        <a href="#">Quisque eleifend</a>
      </nav>
    </div>
    <button>Download</button>
  </nav>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="navbar-expanded">
  <a class="navbar-brand" href="#">Brand</a>
  <button class="navbar-toggler">
    <i class="menu-icon"></i>
  </button>
  <nav>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </nav>
  <nav class="navigation-end">
    <form class="navbar-search">
      <input type="search">
      <button type="submit">Search</button>
    </form>
  </nav>
</div>
{% endcapture %}
{% include example.html content=example %}