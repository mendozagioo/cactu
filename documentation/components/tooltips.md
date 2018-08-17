---
layout: documentation
title: Tooltips
description: A simple way to show extra information on simple elements or components like buttons, anchors, labels, navs, etc.
group: components
toc: true
---


## Overview

Please, read the next information to use correct tooltips:

* A Cactu's tooltip is a simple way to show a little extra information.
* A Cactu's tooltip can not be used by another components that contains styles on `::before` and `::after`.
* A Cactu's tooltip with empty `data-tooltip` are never displayed.
* Doesn't need JS to use it.

## Examples

{% capture example %}
<p>


Lorem ipsum dolor sit amet, <a class="tooltip-top" href="#" data-tooltip="Lorem consectetur">consectetur</a> adipiscing elit. Aliquam lacinia, est ac viverra feugiat, neque mi faucibus magna, in sodales urna justo at dolor. Donec condimentum leo elit, vitae congue metus accumsan vel. Vestibulum lacus felis, luctus eget mi sed, egestas commodo orci. <a class="tooltip-top" href="#" data-tooltip="Lorem vel">Vestibulum vel</a> erat tellus. Pellentesque convallis commodo nisi scelerisque faucibus. Phasellus hendrerit nisl eget iaculis eleifend. Duis nisi ex, rutrum vel libero non, viverra lacinia dui. Nunc arcu mi, dignissim quis fermentum eget, posuere id ante. <a class="tooltip-top" href="#" data-tooltip="Lorem pellentesque">Pellentesque at</a> arcu odio. Integer efficitur lobortis urna ac molestie. Praesent mi ipsum, aliquam at sollicitudin nec, egestas quis sem. Curabitur sit amet faucibus ligula, porttitor pharetra velit. Donec sollicitudin justo id sem <a class="tooltip-top" href="#" data-tooltip="Lorem finibus">finibus</a> rutrum. Integer eu tortor massa.
</p>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<button class="tooltip-top" data-tooltip="Top">Tooltip on top</button>
<button class="tooltip-right" data-tooltip="Right">Tooltip on right</button>
<button class="tooltip-bottom" data-tooltip="Bottom">Tooltip on bottom</button>
<button class="tooltip-left" data-tooltip="Left">Tooltip on left</button>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav class="nav-horizontal">
  <a class="tooltip-top" href="#" data-tooltip="link 1">Link</a>
  <a class="tooltip-bottom" href="#" data-tooltip="link 2">Link</a>
  <a class="tooltip-top" href="#" data-tooltip="link 3">Link</a>
  <a class="disabled tooltip-bottom" href="#" data-tooltip="link 4">Link</a>
</nav>
{% endcapture %}
{% include example.html content=example %}  