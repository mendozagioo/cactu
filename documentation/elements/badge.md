---
layout: documentation
title: Badge
description: Documentation and examples for basic style on badge element.
group: elements
toc: true
---


## Simple badge

{% capture example %}
<span class="badge">Badge</span>
{% endcapture %}
{% include example.html content=example %}


## Examples

{% capture example %}
<!-- Inside a heading -->
<h4>Example heading <span class="badge">New</span></h4>

<!-- Inside a button -->
<button>Notifications <span class="badge">5</span></button>
{% endcapture %}
{% include example.html content=example %}


## Pill badge

{% capture example %}
<span class="badge-pill">Badge</span>
{% endcapture %}
{% include example.html content=example %}


## Link badge

{% capture example %}
<!-- Link badge -->
<a href="#" class="badge">Badge</a>
<!-- Link badge pill -->
<a href="#" class="badge-pill">Badge</a>
{% endcapture %}
{% include example.html content=example %}