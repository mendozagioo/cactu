---
layout: documentation
title: Buttons
description: Basic use for Buttons with a few classes.
group: components
toc: true
---


## Button group

{% capture example %}
<div class="button-group">
  <button>Left</button>
  <button>Middle</button>
  <button>Right</button>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="button-group">
  <button>Left</button>
  <button class="selected">Middle</button>
  <button>Right</button>
</div>
{% endcapture %}
{% include example.html content=example %}


## Button group vertical

{% capture example %}
<div class="button-group-vertical">
  <button>Left</button>
  <button>Middle</button>
  <button>Right</button>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="button-group-vertical">
  <button class="selected">Left</button>
  <button>Middle</button>
  <button>Right</button>
</div>
{% endcapture %}
{% include example.html content=example %}