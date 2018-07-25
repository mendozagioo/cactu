---
layout: documentation
title: Buttons
description: Basic use for Buttons with a few classes.
group: components
toc: true
---


## Variables

| Name  | Type  | Value |
| ----- | ----- | ----- |
| `$button-first-radius` |  <span>radius</span> | `$radius 0 0 $radius` |
| `$button-last-radius` | <span>radius</span> | `0 $radius $radius 0` |
| `$vertical-button-first-radius` | <span>radius</span> | `$radius $radius 0 0` |
| `$vertical-button-last-radius` |  <span>radius</span> | `0 0 $radius $radius` |
| `$button-background-selected` | <span>color</span> | <span class="small-box" style="background:#cbd3da"></span> `darken($gray-200, 10%)` |

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