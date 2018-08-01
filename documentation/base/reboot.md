---
layout: documentation
title: Reboot
description: A collection of specific elements CSS to provide an elegant, consistent, and simple baseline to build upon.
group: base
toc: true
---


## Approach

Reboot builds upon Reset and Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some `<table>` styles for a simpler baseline and later provide simpler styles within the table component.
Here are our guidelines and reasons for choosing what to override in Reboot:
* Update some browser default values to use `rem` instead of `em` for scalable component spacing.
* Avoid `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of `margin` is a simpler mental model.
* For easier scaling across device sizes, block elements should use `rem` for `margin`.
* Keep declarations of font-related properties to a minimum, using inherit whenever possible.

## Reset

Some reset styles was taken of <a href="https://meyerweb.com/eric/tools/css/reset/" target="_blank">Reset</a>, where the author says: "The goal of a reset stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on".

## Page defaults

The `html` and `body` elements are updated to provide better page-wide defaults. More specifically:

* The `box-sizing` is globally set on every element including `*::before` and `*::after`, to `border-box`.
This ensures that the declared width of element is never exceeded due to padding or border.
* The base `font-size` is declared on the `<html>` and `<body>`, on `16px`. Browsers by default assume `1rem` as `16px`, if you want to change the base of `1rem`, you need to update the global variable: `$font-size`.
* The `<body>` also sets a global `font-family`, `line-height`, and `text-align`. This is inherited later by some form elements to prevent font inconsistencies.
* For safety, the `<body>` has a declared `background-color`, defaulting to `#fff`.


## Native font stack

For optimum text rendering on every device and OS. Read more about <a href="https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/" target="_blank">native font stacks in this <em>Smashing Magazine</em> article</a>.

{% highlight sass %}
$font-family-sans-serif:
  // Safari for OS X and iOS (San Francisco)
  -apple-system,
  // Chrome < 56 for OS X (San Francisco)
  BlinkMacSystemFont,
  // Windows
  "Segoe UI",
  // Android
  "Roboto",
  // Basic web fallback
  "Helvetica Neue", Arial, sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !default;
{% endhighlight %}

This `font-family` is applied to the `<body>` and automatically inherited globally. To switch the global `font-family`, update `$font-family` and recompile all Cactu.