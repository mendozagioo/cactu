---
layout: documentation
title: Code
description: Documentation and examples for displaying inline and multiline blocks of code with Cactu.
group: elements
---


## Variables

| Name  | Type  | Value |
| ----- | ----- | ----- |
| `$code-color`      | <small>color</small>     | <span class="small-box" style="background:#ff3860"></span> `#ff3860` |
| `$code-background` | <small>color</small>     | <span class="small-box" style="background:#f5f5f5"></span> `#f5f5f5`          |
| `$code-font-size`  | <small>font-size</small> | `.85rem`           |
| `$code-padding`    | <small>padding</small>   | `.2rem .3rem`      |
| `$code-radius`     | <small>radius</small>    | `3rem`      |
| `$pre-color`       | <small>color</small>     | <span class="small-box" style="background:#212529"></span> `$gray-900`        |
| `$pre-background`  | <small>color</small>     | <span class="small-box" style="background:#f5f5f5"></span> `$code-background` |
| `$pre-padding`     | <small>padding</small>   | `1rem`             |
| `$pre-margin`      | <small>margin</small>    | `1rem`             |
| `$kbd-color`       | <small>color</small>     | <span class="small-box" style="background:#fff"></span> `$white`              |
| `$kbd-background`  | <small>color</small>     | <span class="small-box" style="background:#343a40"></span> `$gray-800`        |


## Inline code

Wrap inline snippets of code with `<code>`. Be sure to escape HTML angle brackets.

{% capture example %}
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
{% endcapture %}
{% include example.html content=example %}


## Code blocks

Use `<pre>` for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper rendering.

{% capture example %}
<pre>
  <code>
&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
  </code>
</pre>
{% endcapture %}
{% include example.html content=example %}


## Variables

For indicating variables use the `<var>` tag.

{% capture example %}
<var>e</var> = <var>m</var><var>c</var><sup>2</sup>
{% endcapture %}
{% include example.html content=example %}


## User input

Use the `<kbd>` to indicate input that is typically entered via keyboard.

{% capture example %}
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{% endcapture %}
{% include example.html content=example %}


## Sample output

For indicating sample output from a program use the `<samp>` tag.

{% capture example %}
<samp>You can put you code here</samp>
{% endcapture %}
{% include example.html content=example %}