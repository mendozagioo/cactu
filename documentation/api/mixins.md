---
layout: documentation
title: Mixins
description: Documentation and examples for mixins.
group: api
toc: true
---


## Alerts

### alert-theme

Returns thems for alert components.

{% highlight sass %}
// requires    -> alert-theme(required, required, required)
// value-types -> alert-theme(color, color, color)

@mixin alert-theme($background, $border, $color)
{% endhighlight %}

{% highlight sass %}
// Example to use

$alert-required-background: #f6c8cd;
$alert-required-border: #c61a2d;
$alert-required-color: #ec6673;

.alert-required {
  @include alert-theme($alert-required-background, $alert-required-border, $alert-required-color);
}

// Returns ->

.alert-required {
  color: #ec6673;
  border: 1px solid #c61a2d;
  background-color: #f6c8cd;
}

.alert-required hr {
  background-color: #af1728;
}

.alert-required .alert-link {
  color: black;
}
{% endhighlight %}


## Badges

### badge-theme

Returns thems for badge components.

{% highlight sass %}
// requires    -> badge-theme(required)
// value-types -> badge-theme(color)

@mixin badge-theme($background)
{% endhighlight %}

{% highlight sass %}
// Example to use

.badge-required {
  @include badge-theme(#f6c8cd);
}

// Returns ->

.badge-required {
  color: #343a40;
  background-color: #f6c8cd;
}

.badge-required[href]:hover, .badge-required[href]:focus {
  color: #343a40;
  background-color: #ef9ca5;
}
{% endhighlight %}


## Breakpoints

### breakpoint-min

Returns the content in a min-width media query.

{% highlight sass %}
// requires    -> breakpoint-min(required)
// value-types -> breakpoint-min(size)

@mixin breakpoint-min($min-size)
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-min(500px) {
  .content {
    margin: 2rem;
  }
}

// Returns ->

@media screen and (min-width: 500px) {
  .content {
    margin: 2rem;
  }
}
{% endhighlight %}


### breakpoint-max

Returns the content in a max-width media query.

{% highlight sass %}
// requires    -> breakpoint-max(required)
// value-types -> breakpoint-max(size)

@mixin breakpoint-max($max-size)
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-max(499px) {
  .content {
    margin: .5rem;
  }
}

// Returns ->

@media screen and (max-width: 499px) {
  .content {
    margin: .5rem;
  }
}
{% endhighlight %}


### breakpoint-between

Returns the content between a minimum-size and maximum-size media query.

{% highlight sass %}
// requires    -> breakpoint-between(required, required)
// value-types -> breakpoint-between(size, size)

@mixin breakpoint-between($min-size, $max-size)
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-between(500px, 767px) {
  .content {
    margin: 3rem;
  }
}

// Returns ->

@media (min-width: 500px) and (max-width: 767px) {
  .content {
    margin: 3rem;
  }
}
{% endhighlight %}


### breakpoint-mobile-min

Returns the content in min-device-width media query.

{% highlight sass %}
// requires    -> breakpoint-mobile-min(required)
// value-types -> breakpoint-mobile-min(size)

@mixin breakpoint-mobile-min($min-size)
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-mobile-min(320px) {
  .content {
    margin: 1rem;
  }
}

// Returns ->

@media only screen and (min-device-width: 320px) {
  .content {
    margin: 1rem;
  }
}
{% endhighlight %}


### breakpoint-mobile-max

Returns the content in max-device-width media query.

{% highlight sass %}
// requires    -> breakpoint-mobile-max(required)
// value-types -> breakpoint-mobile-max(size)

@mixin breakpoint-mobile-max($max-size)
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-mobile-max(320px) {
  .content {
    margin: 1rem;
  }
}

// Returns ->

@media only screen and (max-device-width: 320px) {
  .content {
    margin: 1rem;
  }
}
{% endhighlight %}


### breakpoint-mobile-between

Returns the content between min-device-width and max-device-width media query.

{% highlight sass %}
// requires    -> breakpoint-mobile-between(required, required)
// value-types -> breakpoint-mobile-between(size, size)

@mixin breakpoint-mobile-between($min-size, $max-size)
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-mobile-between(321px, 767px) {
  .content {
    margin: 1rem;
  }
}

// Returns ->

@media only screen and (min-device-width: 321px) and (max-device-width: 767px) {
  .content {
    margin: 1rem;
  }
}
{% endhighlight %}


### breakpoint-cellphone

Returns the content in a max-width `$cellphone-size - 1px` media query.

{% highlight sass %}
// requires    -> breakpoint-cellphone
// value-types -> breakpoint-cellphone

@mixin breakpoint-cellphone
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-cellphone {
  .content {
    margin: .5rem;
  }
}

// Returns ->

@media screen and (max-width: 575px) {
  .content {
    margin: .5rem;
  }
}
{% endhighlight %}


### breakpoint-cellphone-tablet

Returns the content between a minimum-size and maximum-size media query, but with the specific min, and max size: `576px - 767px`.

{% highlight sass %}
// requires    -> breakpoint-cellphone-tablet
// value-types -> breakpoint-cellphone-tablet

@mixin breakpoint-cellphone-tablet
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-cellphone-tablet {
  .content {
    margin: 3rem;
  }
}

// Returns ->

@media (min-width: 576px) and (max-width: 767px) {
  .content {
    margin: 3rem;
  }
}
{% endhighlight %}


### breakpoint-tablet

Returns the content between a minimum-size and maximum-size media query, but with the specific min, and max size: `768px - 959px`.

{% highlight sass %}
// requires    -> breakpoint-tablet
// value-types -> breakpoint-tablet

@mixin breakpoint-tablet
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-tablet {
  .content {
    margin: 3rem;
  }
}

// Returns ->

@media (min-width: 768px) and (max-width: 959px) {
  .content {
    margin: 3rem;
  }
}
{% endhighlight %}


### breakpoint-small-desktop

Returns the content between a minimum-size and maximum-size media query, but with the specific min, and max size: `960px - 1199px`.

{% highlight sass %}
// requires    -> breakpoint-small-desktop
// value-types -> breakpoint-small-desktop

@mixin breakpoint-small-desktop
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-small-desktop {
  .content {
    margin: 3rem;
  }
}

// Returns ->

@media (min-width: 960px) and (max-width: 1199px) {
  .content {
    margin: 3rem;
  }
}
{% endhighlight %}


### breakpoint-medium-desktop

Returns the content between a minimum-size and maximum-size media query, but with the specific min, and max size: `1200px - 1343px`.

{% highlight sass %}
// requires    -> breakpoint-medium-desktop
// value-types -> breakpoint-medium-desktop

@mixin breakpoint-medium-desktop
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-medium-desktop {
  .content {
    margin: 3rem;
  }
}

// Returns ->

@media (min-width: 1200px) and (max-width: 1343px) {
  .content {
    margin: 3rem;
  }
}
{% endhighlight %}


### breakpoint-large-desktop

Returns the content in a min-width media query, but with the specific size: `1344px`.

{% highlight sass %}
// requires    -> breakpoint-large-desktop
// value-types -> breakpoint-large-desktop

@mixin breakpoint-large-desktop
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-large-desktop {
  .content {
    margin: 2rem;
  }
}

// Returns ->

@media screen and (min-width: 1344px) {
  .content {
    margin: 2rem;
  }
}
{% endhighlight %}


### breakpoint-cellphone-medium-desktop

Returns the content between a minimum-size and maximum-size media query, but with the specific min, and max size: `576px - 1199px`.

{% highlight sass %}
// requires    -> breakpoint-cellphone-medium-desktop
// value-types -> breakpoint-cellphone-medium-desktop

@mixin breakpoint-cellphone-medium-desktop
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-cellphone-medium-desktop {
  .content {
    margin: 3rem;
  }
}

// Returns ->

@media (min-width: 576px) and (max-width: 1199px) {
  .content {
    margin: 3rem;
  }
}
{% endhighlight %}


## Buttons

### button-size

Returns specific sizes for a button, with optionals 5 values to choose.

{% highlight sass %}
// requires    -> button-size(optional, optional, optional, optional, optional)
// value-types -> button-size(size, size, size, size, radius)

@mixin button-size($padding-y, $padding-x, $font-size, $line-height, $border-radius)
{% endhighlight %}

{% highlight sass %}
// Example to use

.button-hight-font {
  @include button-size($font-size: 2rem);
}

// Returns ->

.button-hight-font {
  padding: .375rem .75rem;
  font-size: 2rem;
  line-height: 1.5;
  border-radius: 4px;
}
{% endhighlight %}


### button-theme

Returns a theme color for a button.

{% highlight sass %}
// requires    -> button-theme(required)
// value-types -> button-theme(color)

@mixin button-theme($background)
{% endhighlight %}

{% highlight sass %}
// Example to use

.button-error {
  @include button-theme(red);
}

// Returns ->

.button-error {
  color: #fff;
  background-color: red;
}

.button-error:hover {
  color: #fff;
  background-color: #cc0000;
}

.button-error:focus, .button-error.focus {
  color: #fff;
  -webkit-box-shadow: 0 0 0 0.125rem #b30000;
  box-shadow: 0 0 0 0.125rem #b30000;
}

.button-error.disabled:hover, .button-error.disabled:focus, .button-error:disabled:hover, .button-error:disabled:focus {
  color: #fff;
  background-color: red;
}

.button-error:not(:disabled):not(.disabled):active, .button-error:not(:disabled):not(.disabled).active {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  background-color: #cc0000;
}

.button-error:not(:disabled):not(.disabled):active:focus, .button-error:not(:disabled):not(.disabled).active:focus {
  -webkit-box-shadow: 0 0 0 0.125rem #b30000, inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: 0 0 0 0.125rem #b30000, inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
{% endhighlight %}


### button-outline

Returns a outline theme color for a button.

{% highlight sass %}
// requires    -> button-outline(required)
// value-types -> button-outline(color)

@mixin button-outline($color)
{% endhighlight %}

{% highlight sass %}
// Example to use

.button-outline-error {
  @include button-outline(red);
}

// Returns ->

.button-outline-error {
  color: red;
  border-color: red;
  background-color: transparent;
}

.button-outline-error:hover {
  color: #fff;
  border-color: red;
  background-color: red;
}

.button-outline-error:focus, .button-outline-error.focus {
  color: red;
  -webkit-box-shadow: 0 0 0 0.125rem #ff9999;
  box-shadow: 0 0 0 0.125rem #ff9999;
}

.button-outline-error:focus:hover, .button-outline-error.focus:hover {
  color: #fff;
}

.button-outline-error.disabled:hover, .button-outline-error.disabled:focus, .button-outline-error:disabled:hover, .button-outline-error:disabled:focus {
  color: red;
  background-color: transparent;
}

.button-outline-error:not(:disabled):not(.disabled):active, .button-outline-error:not(:disabled):not(.disabled).active {
  color: #fff;
  background-color: red;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.button-outline-error:not(:disabled):not(.disabled):active:focus, .button-outline-error:not(:disabled):not(.disabled).active:focus {
  -webkit-box-shadow: 0 0 0 0.125rem #ff9999, inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: 0 0 0 0.125rem #ff9999, inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
{% endhighlight %}


## Forms

### input-focus

Returns style for focus input interaction.

{% highlight sass %}
// requires    -> input-focus(required)
// value-types -> input-focus(color)

@mixin input-focus($color)
{% endhighlight %}

{% highlight sass %}
// Example to use

.input-error {
  &:focus {
    @include input-focus(red);
  }
}

// Returns ->

.input-error:focus {
  border-color: red;
  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.075), 0 0 0 0.125rem rgba(255, 0, 0, 0.25);
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.075), 0 0 0 0.125rem rgba(255, 0, 0, 0.25);
}
{% endhighlight %}


### input-validation-state

Returns style for different states (for example: `valid` or `invalid`) on `input`s, `select`s and `textarea`s.

{% highlight sass %}
// requires    -> input-validation-state(required, required)
// value-types -> input-validation-state(string, color)

@mixin input-validation-state($state, $color)
{% endhighlight %}

{% highlight sass %}
// Example to use

.form-users {
  @include input-validation-state("valid", #5ee189);
}

// Returns ->

.form-users input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="file"]).valid,
.form-users select.valid,
.form-users textarea.valid {
  border: 1px solid #5ee189;
}

.form-users input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="file"]).valid:focus,
.form-users select.valid:focus,
.form-users textarea.valid:focus {
  border-color: #5ee189;
  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.075), 0 0 0 0.125rem rgba(94, 225, 137, 0.25);
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.075), 0 0 0 0.125rem rgba(94, 225, 137, 0.25);
}
{% endhighlight %}


### validation-states

Returns style for different states (for example: `valid` or `invalid`) on `input`s, `select`s, `textarea`s, `radio` class and `checkbox` class.

{% highlight sass %}
// requires    -> validation-states(required, required)
// value-types -> validation-states(string, color)

@mixin validation-states($state, $color)
{% endhighlight %}

{% highlight sass %}
// Example to use

.form-users {
  @include validation-states("valid", #5ee189);
}

// Returns ->

.form-users input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="file"]).valid,
.form-users select.valid,
.form-users textarea.valid {
  border: 1px solid #5ee189;
}

.form-users input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="file"]).valid:focus,
.form-users select.valid:focus,
.form-users textarea.valid:focus {
  border-color: #5ee189;
  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.075), 0 0 0 0.125rem rgba(94, 225, 137, 0.25);
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.075), 0 0 0 0.125rem rgba(94, 225, 137, 0.25);
}

.form-users .form-group .valid-feedback {
  color: #5ee189;
}

.form-users .form-group .checkbox.valid,
.form-users .form-group .radio.valid {
  color: #5ee189;
}
{% endhighlight %}


## Grids

### make-specific-columns

Create columns with a specific width in percentage. You can define the inicial name for your columns.

{% highlight sass %}
// requires    -> make-specific-columns(optional, optional)
// value-types -> make-specific-columns(string, numeric)

@mixin make-specific-columns($name, $total-columns)
{% endhighlight %}

{% highlight sass %}
// Example to use

@include breakpoint-cellphone {
  @include make-specific-columns('small', 5);
}

// Returns ->

@media screen and (max-width: 575px) {
  .small-column-of-1 {
    width: 20%;
  }
  .small-column-of-2 {
    width: 40%;
  }
  .small-column-of-3 {
    width: 60%;
  }
  .small-column-of-4 {
    width: 80%;
  }
  .small-column-of-5 {
    width: 100%;
  }
}
{% endhighlight %}


## Hovers

### hover-focus

Add `:hover` and `:focus` to the content passed.

{% highlight sass %}
// requires    -> hover-focus
// value-types -> hover-focus

@mixin hover-focus
{% endhighlight %}

{% highlight sass %}
// Example to use

.no-link {
  ...
  @include hover-focus {
    text-decoration: none;
    color: inherit;
  }
}

// Returns ->

.no-link {
  ...
}
.no-link:hover, .no-link:focus {
  text-decoration: none;
  color: inherit;
}
{% endhighlight %}


### hover-focus-active

Add `:hover`, `:focus` and `:active` to the content passed.

{% highlight sass %}
// requires    -> hover-focus-active
// value-types -> hover-focus-active

@mixin hover-focus-active
{% endhighlight %}

{% highlight sass %}
// Example to use

.no-link {
  ...
  @include hover-focus-active {
    text-decoration: none;
    color: inherit;
  }
}

// Returns ->

.no-link {
  ...
}
.no-link:hover, .no-link:focus, .no-link:active {
  text-decoration: none;
  color: inherit;
}
{% endhighlight %}


## Icons

### triangle-icon

Create a icon triangle only with css.

{% highlight sass %}
// requires    -> triangle-icon(optional, optional)
// value-types -> triangle-icon(size, string)
// optional strings: 'down', 'up', 'left', 'right'

@mixin triangle-icon($size, $direction)
{% endhighlight %}

{% highlight sass %}
// Example to use

[class*="drop-d-icon-"] {
  color: red;
}
.drop-d-icon-down {
  @include triangle-icon;
}
.drop-d-icon-up {
  @include triangle-icon($direction: 'up');
}

// Returns ->

[class*="drop-d-icon-"] {
  color: red;
}

.drop-d-icon-down {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
}

.drop-d-icon-up {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid;
}
{% endhighlight %}


## Navbars

### navbar-theme

Returns the complete theme for our navbar component, you can change the theme of Cactu navbar indicating the `color` and `theme`.

{% highlight sass %}
// requires    -> navbar-theme(optional, optional)
// value-types -> navbar-theme(color, string)

@mixin navbar-theme($base-color, $theme)
{% endhighlight %}

{% highlight sass %}
// Example to use

.navbar-dark {
  @include navbar-theme(#393934, 'dark');
}

// Returns ->

.navbar-dark {
  border-bottom: 1px solid #343430;
  background: #393934;
}

.navbar-dark * {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-dark *:hover, .navbar-dark *:focus {
  color: rgba(255, 255, 255, 0.7);
}

.navbar-dark *.active {
  color: #fff;
}

.navbar-dark .navbar-brand {
  color: #fff;
}

.navbar-dark .navbar-toggler {
  background-color: transparent;
}

.navbar-dark .navbar-toggler:focus {
  -webkit-box-shadow: 0 0 0 0.125rem #111110;
  box-shadow: 0 0 0 0.125rem #111110;
}

.navbar-dark .disabled {
  color: rgba(255, 255, 255, 0.3);
}

.navbar-dark .disabled:hover, .navbar-dark .disabled:focus {
  color: rgba(255, 255, 255, 0.3);
}
{% endhighlight %}


## Positions

### sticky-top

Returns the styles for a sticky position on top.

{% highlight sass %}
// requires    -> sticky-top(optional)
// value-types -> sticky-top(numeric)

@mixin sticky-top($zindex)
{% endhighlight %}

{% highlight sass %}
// Example to use

.main-menu-top {
  @include sticky-top;
}

// Returns ->

.main-menu-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
}
{% endhighlight %}


## Transitions

### transition

Returns the transitions passed.

{% highlight sass %}
// requires    -> transition(required)
// value-types -> transition(set of transitions)

@mixin transition($transition...)
{% endhighlight %}

{% highlight sass %}
// Example to use

.main-menu-top {
  ..
  @include transition(color .4s ease-in-out, text-decoration .4s ease-in-out);
}

// Returns ->

.main-menu-top {
  ...
  -webkit-transition: color 0.4s ease-in-out, -webkit-text-decoration 0.4s ease-in-out;
  transition: color 0.4s ease-in-out, -webkit-text-decoration 0.4s ease-in-out;
  transition: color 0.4s ease-in-out, text-decoration 0.4s ease-in-out;
  transition: color 0.4s ease-in-out, text-decoration 0.4s ease-in-out, -webkit-text-decoration 0.4s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
  .main-menu-top {
    -webkit-transition: none;
    transition: none;
  }
}
{% endhighlight %}