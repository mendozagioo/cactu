---
layout: documentation
title: Button
description: Documentation and examples for basic style on button element.
group: elements
toc: true
---


## Normal button

{% capture example %}
<button type="button">Button</button>
{% endcapture %}
{% include example.html content=example %}


## Disabled button

{% capture example %}
<button type="button" disabled>Disabled</button>
{% endcapture %}
{% include example.html content=example %}


## Focused button

{% capture example %}
<button class="focus" type="button">Focused</button>
{% endcapture %}
{% include example.html content=example %}


## Active button

{% capture example %}
<button class="active" type="button">Activated</button>
{% endcapture %}
{% include example.html content=example %}