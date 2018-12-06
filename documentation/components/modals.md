---
layout: documentation
title: Modals
description: Use this Cactu's component to dialogs, notification, or for what you consider necessary.
group: components
toc: true
---


## Variables

| Name  | Type  | Value |
| ----- | ----- | ----- |
| `$modal-background` | <small>color</small> | <span class="small-box" style="background:rgba(0, 0, 0, .7)"></span> `rgba(0, 0, 0, .7)` |
| `$modal-content-width` | <small>width</small> | `500px` |
| `$modal-content-margin` | <small>margin</small> | `2rem auto auto` |
| `$modal-content-radius` | <small>radius</small> | `$radius` |
| `$modal-content-background` | <small>color</small> | <span class="small-box" style="background:#fff"></span> `$white` |
| `$modal-content-transition` | <small>unitless</small> | `all .35s ease-in-out` |
| `$modal-close-size` | <small>size</small> | `30px` |
| `$modal-close-gap` | <small>size</small> | `-25px` |
| `$modal-close-color` | <small>color</small> | <span class="small-box" style="background:#fff"></span> `$white` |
| `$modal-close-radio` | <small>radius</small> | `50%` |
| `$modal-close-background` | <small>color</small> | <span class="small-box" style="background:rgba(30, 30, 30, .8)"></span> `rgba(30, 30, 30, .8)` |
| `$modal-close-background-hover` | <small>color</small> | <span class="small-box" style="background:rgba(0, 0, 0, 1)"></span> `rgba(0, 0, 0, 1)` |
| `$modal-close-icon-size` | <small>size</small> | `1.25rem` |


## How it works

Please read the next considerations for our modal components:
* Modals are built just with HTML amd CSS. They’re positioned over everything else in the document and remove scroll from the `<html>` so that modal content scrolls instead.
* Only supports one modal window at a time.
* Modals use `position: fixed`, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You’ll likely run into issues when nesting a `modal` within another fixed element.
* To show the modal, you neeed to add the `active` class to the `modal` or `modal-vertical` class and add the `clipped` class to the `<html>` tag.
* Use the `close` class like a trigger to hide the modal.
* To hide the modal with the "backdrop", add the `modal` class like a trigger to hide the modal, but be carefull with the `modal-content` class, for this, add a `event.stopPropagation()`.
* You can use the modal launchers of any ways that you want. For example:
  - Set a `<button>` tag adding the `modal-launcher` class and add a `data-target="#simple-modal"`.
  - Add the same ID set on `data-target` of the launcher like the ID of modal component.
  - With you JS library or framework prefered, identify the launcher clicked to add the `active` class on the necesary `modal` class.


## Simple modal example

<div class="highlight-example">
  <button class="modal-launcher" data-target="#simple-modal">Launch simple modal</button>
</div>

{% highlight html %}
<!-- Modal launcher -->
<button class="modal-launcher" data-target="#simple-modal">Launch simple modal</button>

<!-- Modal -->
<div id="simple-modal" class="modal">
  <div class="modal-content">
    <button class="close"><span>&times;</span></button>
    <section class="modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies nunc, eu faucibus lorem. Curabitur fermentum rutrum semper.
      </p>
    </section>
  </div>
</div>
{% endhighlight %}


## Modal card example

<div class="highlight-example">
  <button class="modal-launcher" data-target="#modal-card">Launch modal card</button>
</div>

{% highlight html %}
<!-- Modal launcher -->
<button class="modal-launcher" data-target="#modal-card">Launch modal card</button>

<!-- Modal -->
<div id="modal-card" class="modal">
  <div class="modal-content">
    <button class="close"><span>&times;</span></button>
    <header class="modal-header">
      <h4>Modal title</h4>
    </header>
    <section class="modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies nunc, eu faucibus lorem. Curabitur fermentum rutrum semper.
      </p>
    </section>
    <footer class="modal-footer">
      <button class="close">Close</button>
    </footer>
  </div>
</div>
{% endhighlight %}


## Modal centered example

To get a modal vertically centered, you just add `-center` class to the `modal` class.

<div class="highlight-example">
  <button class="modal-launcher" data-target="#modal-centered">Launch modal centered</button>
</div>

{% highlight html %}
<!-- Modal launcher -->
<button class="modal-launcher" data-target="#modal-centered">Launch modal centered</button>

<!-- Modal -->
<div id="modal-centered" class="modal-center">
  <div class="modal-content">
    <button class="close"><span>&times;</span></button>
    <header class="modal-header">
      <h4>Modal title</h4>
    </header>
    <section class="modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies nunc, eu faucibus lorem. Curabitur fermentum rutrum semper.
      </p>
    </section>
    <footer class="modal-footer">
      <button class="close">Close</button>
    </footer>
  </div>
</div>
{% endhighlight %}


<!--
---- All modal examples
---- ======================================= 
--->
<!--
---- Simple modal
--->
<div id="simple-modal" class="modal">
  <div class="modal-content">
    <button class="close"><span>&times;</span></button>
    <section class="modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies nunc, eu faucibus lorem. Curabitur fermentum rutrum semper.
      </p>
    </section>
  </div>
</div>


<!--
---- Modal card
--->
<div id="modal-card" class="modal">
  <div class="modal-content">
    <button class="close"><span>&times;</span></button>
    <header class="modal-header">
      <h4>Modal title</h4>
    </header>
    <section class="modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies nunc, eu faucibus lorem. Curabitur fermentum rutrum semper.
      </p>
    </section>
    <footer class="modal-footer">
      <button class="close">Close</button>
    </footer>
  </div>
</div>

<!--
---- Modal centered
--->
<div id="modal-centered" class="modal-center">
  <div class="modal-content">
    <button class="close"><span>&times;</span></button>
    <header class="modal-header">
      <h4>Modal title</h4>
    </header>
    <section class="modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies nunc, eu faucibus lorem. Curabitur fermentum rutrum semper.
      </p>
    </section>
    <footer class="modal-footer">
      <button class="close">Close</button>
    </footer>
  </div>
</div>