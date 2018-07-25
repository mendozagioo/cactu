---
layout: documentation
title: Alerts
description: Documentation and examplesd for alerts.
group: components
redirect_from:
  - /documentation/components/
toc: true
---


| Name  | Type  | Value |
| ----- | ----- | ----- |
`$alert-padding` | <small>padding</small> | `1rem` |
`$alert-radius` | <small>radius</small> | `$radius` |
`$alert-background-level` | <small>unitless</small> | `-10` |
`$alert-border-level` | <small>unitless</small> | `-9` |
`$alert-color-level` | <small>unitless</small> | `6` |
`$alert-color-base` | <small>color</small> | <span class="small-box" style="background:#dee2e6"></span> `$gray-300` |
`$alert-background` | <small>color</small> | <span class="small-box" style="background:#f8f9fa"></span> `theme-color-level($alert-color-base, $alert-background-level)` |
`$alert-border` | <small>color</small> | <span class="small-box" style="background:#f6f7f8"></span> `theme-color-level($alert-color-base, $alert-border-level)` |
`$alert-color` | <small>color</small> | <span class="small-box" style="background:#737678"></span> `theme-color-level($alert-color-base, $alert-color-level)` |


## Simple alert

{% capture example %}
<p class="alert">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
{% endcapture %}
{% include example.html content=example %}


## Alert with link

Exist two different ways to get links on alerts, simple link and with a special color.

{% capture example %}
<p class="alert">
  You need to go this <a href="#">link</a>.
</p>
{% endcapture %}
{% include example.html content=example %}

Using the class `alert-link` on anchor element.

{% capture example %}
<p class="alert">
  You need to go this <a href="#" class="alert-link">link</a>.
</p>
{% endcapture %}
{% include example.html content=example %}


## Additional content

Alerts can also contain additional HTML elements like headings, paragraphs and dividers.

{% capture example %}
<div class="alert">
  <h4>Lorem ipsum dolor sit amet</h4>
  <p>
    Sed eget neque facilisis, congue sem non, pretium lacus. Donec eleifend elit nec leo tempor faucibus. Nulla non turpis quis sapien tristique congue.
  </p>
  <hr>
  <p>Aliquam nec nibh sodales, faucibus ipsum sed, feugiat lacus.</p>
</div>
{% endcapture %}
{% include example.html content=example %}


## Dismissing

For dismiss any alert inline, you need to add the class `hidden` to the `alert-dismissible` class with your favorite JS library o your JS framework.

{% capture example %}
<div class="alert-dismissible">
  <strong>Lorem ipsum!</strong> Mauris vel scelerisque orci, non pellentesque justo.
  <button type="button" class="close">
    <span>&times;</span>
  </button>
</div>
{% endcapture %}
{% include example.html content=example %}