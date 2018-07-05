---
layout: documentation
title: Typography
description: All typography styles documentation, including headings, body text, and more.
group: elements
redirect_from:
  - /documentation/elements/
---


## Variables

| Name  | Type  | Value |
| ----- | ----- | ----- |
| `$headings-font-family` | <small>font-family</small> | `$font-family`      |
| `$headings-font-weight` | <small>font-weight</small> | `$font-weight-bold` |
| `$headings-color`   | <small>color</small>  | <span class="small-box" style="background:#343a40"></span> `$text-color`  |
| `$headings-margins` | <small>margin</small> | `1rem 0 .5rem` |
| `$h1-font-size` | <small>font-size</small> | `2.8125rem` |
| `$h2-font-size` | <small>font-size</small> | `2.125rem`  |
| `$h3-font-size` | <small>font-size</small> | `1.75rem`   |
| `$h4-font-size` | <small>font-size</small> | `1.5rem`    |
| `$h5-font-size` | <small>font-size</small> | `1.25rem`   |
| `$h6-font-size` | <small>font-size</small> | `1rem`      |


## Inline text elements

Styling for common inline HTML5 elements.

{% capture example %}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
<p>H<sub>2</sub>O</p>
<p>e = mc<sup>2</sup></p>
{% endcapture %}
{% include example.html content=example %}


## Address

{% capture example %}
<address>
  Unknow street,<br>
  Colima, Colima<br>
  28010, México
</address>
{% endcapture %}
{% include example.html content=example %}


## Abbreviations

{% capture example %}
<abbr title="Cascading Style Sheets">CSS</abbr>
{% endcapture %}
{% include example.html content=example %}


## Blockquotes

{% capture example %}
<blockquote>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
</blockquote>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<blockquote>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
  <cite>Author name</cite>
</blockquote>
{% endcapture %}
{% include example.html content=example %}


## Headings

All HTML headings, `<h1>` through `<h6>`, are available.

{% capture example %}
<h1>h1. Cactu heading</h1>
<h2>h2. Cactu heading</h2>
<h3>h3. Cactu heading</h3>
<h4>h4. Cactu heading</h4>
<h5>h5. Cactu heading</h5>
<h6>h6. Cactu heading</h6>
{% endcapture %}
{% include example.html content=example %}


## Alignment

Cactu has three different alignment classes: `text-left`, `text-centered` or `text-right`. By default all text always are at left.

{% capture example %}
<p class="text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<blockquote class="text-right">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
  <cite>Author name</cite>
</blockquote>
{% endcapture %}
{% include example.html content=example %}