---
layout: documentation
title: Code
description: Documentation and examples for displaying inline and multiline blocks of code with Cactu.
group: elements
toc: true
---


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