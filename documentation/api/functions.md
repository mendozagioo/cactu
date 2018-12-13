---
layout: documentation
title: Functions
description: Documentation and examples for functions.
group: api
redirect_from:
  - /documentation/api/
toc: true
---


## Colors

### Variables

| Name  | Type  | Value |
| ----- | ----- | ----- |
| `$theme-color-interval`      | <small>unitless</small> | `8%` |
| `$yiq-text-dark`             | <small>color</small>    | <span class="small-box" style="background:#343a40"></span> `$text-color` |
| `$yiq-text-light`            | <small>color</small>    | <span class="small-box" style="background:#fff"></span> `$white` |
| `$yiq-contrasted-threshold`  | <small>unitless</small> | `150` |


### theme-color-level

Returns the mix of a color with `black` or `white` depends of the `level` value passed, if the level is minor of `0`, the mix color will be with the `white`, if not, with `black`.

{% highlight sass %}
// requires    -> theme-color-level(required, optional)
// value-types -> theme-color-level(color, number)

@function theme-color-level($color, $level)
{% endhighlight %}

{% highlight sass %}
// Example to use

$p-background-color: #466cda;

p {
  background-color: theme-color-level($p-background-color, -2);
}

// Returns ->

p {
  background-color: #6484e0;
}
{% endhighlight %}

### color-yiq

Validates the passed color and return a dark (`$yiq-text-dark`) or light (`$yiq-text-light`) color. You can choose the dark or light color returned.

{% highlight sass %}
// requires    -> color-yiq(required, optional, optional)
// value-types -> color-yiq(color, color, color)

@function color-yiq($color, $dark, $light)
{% endhighlight %}

{% highlight sass %}
// Example to use

$button-background-color: #466cda;

button {
  color: color-yiq($button-background-color);
  background-color: $button-background-color;
}

// Returns ->

button {
  color: #fff;
  background-color: #466cda;
}
{% endhighlight %}


## Converters

### px-rem

Converter of pixels to `rem` values.

{% highlight sass %}
// requires    -> px-rem(required, optional)
// value-types -> px-rem(pixels, pixels)

@function px-rem($px, $rem)
{% endhighlight %}

{% highlight sass %}
// Example to use

section {
  margin: px-rem(10px);
}

// Returns ->

section {
  margin: 0.625rem;
}
{% endhighlight %}


### px-em

Converter of pixels to `em` values.

{% highlight sass %}
// requires    -> px-em(required, optional)
// value-types -> px-em(pixels, pixels)

@function px-em($px, $em)
{% endhighlight %}

{% highlight sass %}
// Example to use

section {
  margin: px-em(10px);
}

// Returns ->

section {
  margin: 0.625em;
}
{% endhighlight %}


## Strings

### str-replace

Replace a section string with the value passed.

{% highlight sass %}
// requires    -> str-replace(required, required, required)
// value-types -> str-replace(string, string, string)

@function str-replace($string, $search, $replace)
{% endhighlight %}

{% highlight sass %}
// Example to use

$main-section: str-replace("#home", "#", "%23");

// Returns ->

$main-section: "%23home";
{% endhighlight %}