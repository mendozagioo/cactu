---
layout: documentation
title: Lists
description: Basic use for Lists with a few classes.
group: components
---


## Variables

| Name  | Type  | Value |
| ----- | ----- | ----- |
| `$white`    | <small>color</small> | <span class="small-box" style="background:#fff"></span> `#fff`    |
| `$gray-100` | <small>color</small> | <span class="small-box" style="background:#f8f9fa"></span> `#f8f9fa` |
| `$list-padding-left` | <small>padding</small> | `1.75rem !default` |
| `$list-item-padding` | <small>padding</small> | `.75rem 1.25rem` |
| `$list-item-border` | <small>border</small> | <span class="small-box" style="background:#dee2e6"></span> `1px solid $border-color` |
| `$list-item-background` | <small>color</small> | `transparent` |
| `$list-item-radius` | <small>radius</small> | `$radius` |
| `$list-item-interleaved` | <small>color</small> | <span class="small-box" style="background:#f5f5f5"></span> `$white-smoke` |


## Default lists

Using `<ul>` for dafeault lists.

{% capture example %}
<ul>
  <li>Lorem ipsum</li>
  <li>Sed eros nisi</li>
  <li>
    Cras dolor quam
    <ul>
      <li>First nesting</li>
      <li>
        Lorem ipsum
        <ul>
          <li>Secong nesting</li>
          <li>Lorem ipsum</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Lorem ipsum</li>
</ul>
{% endcapture %}
{% include example.html content=example %}


Using `<ol>` for dafeault lists.

{% capture example %}
<ol>
  <li>Lorem ipsum</li>
  <li>Sed eros nisi</li>
  <li>
    Cras dolor quam
    <ol>
      <li>First nesting</li>
      <li>
        Lorem ipsum
        <ol>
          <li>Secong nesting</li>
          <li>Lorem ipsum</li>
        </ol>
      </li>
    </ol>
  </li>
  <li>Lorem ipsum</li>
</ol>
{% endcapture %}
{% include example.html content=example %}


## List group

You don't need specify a child class.

{% capture example %}
<ul class="list-group">
  <li>Lorem ipsum</li>
  <li>Sed eros nisi</li>
  <li>Cras dolor quam</li>
  <li>Proin a erat eget massa</li>
</ul>
{% endcapture %}
{% include example.html content=example %}

You use `list-group` for any tag and create you own lists with any tag.

{% capture example %}
<p class="list-group">
  <a href="#">Sed blandit gravida est vel</a>
  <span>Lorem ipsum</span>
  <span>Cras dolor quam</span>
  <span>Proin a erat eget massa</span>
</p>
{% endcapture %}
{% include example.html content=example %}


## List group flush

{% capture example %}
<ul class="list-group-flush">
  <li>Lorem ipsum</li>
  <li>Sed eros nisi</li>
  <li>Cras dolor quam</li>
  <li>Proin a erat eget massa</li>
</ul>
{% endcapture %}
{% include example.html content=example %}


## List group interleaved

{% capture example %}
<ul class="list-group-interleaved">
  <li>Lorem ipsum</li>
  <li>Sed eros nisi</li>
  <li>Cras dolor quam</li>
  <li>Proin a erat eget massa</li>
  <li>nteger venenatis</li>
</ul>
{% endcapture %}
{% include example.html content=example %}