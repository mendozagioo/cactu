---
layout: documentation
title: Button
description: Desciption
group: elements
---


## Variables

| Name  | Type  | Value |
| ----- | ----- | ----- |
| `$button-font-weight` | <small>font-weight</small> | `$font-weight-normal` |
| `$button-transition` | <small>transition</small> | `$transition-all` |
| `$button-padding-y` | <small>padding</small> |  `.375rem` |
| `$button-padding-x` | <small>padding</small> | `.75rem` |
| `$button-font-size` | <small>font-size</small> |   `1rem` |
| `$button-line-height` | <small>unitless</small> | `$line-height` |
| `$button-border-radius` | <small>radius</small> | `$radius` |
| `$button-color` | <small>color</small> | <span class="small-box" style="background:#343a40"></span> `$text-color` |
| `$button-background` | <small>color</small> | <span class="small-box" style="background:#e9ecef"></span> `$gray-200` |
| `$button-border` | <small>border</small> | `$border-width solid transparent` |
| `$button-hover-background` | <small>color</small> | <span class="small-box" style="background:#cbd3da"></span> `darken($button-background, 10%)` |
| `$button-focus-box-shadow` | <small>unitless</small> | `0 0 0 $outline-width darken($button-background, 20%)` |
| `$button-disabled-opacity` | <small>opacity</small> | `.57` |
| `$button-active-box-shadow` | <small>unitless</small> | `inset 0 3px 5px rgba($black, .125)` |


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