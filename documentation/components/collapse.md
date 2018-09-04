---
layout: documentation
title: Collapse
description: Documentation and examples for colapse.
group: components
toc: true
---


## Basic collapse

{% capture example %}
<div class="collapse">
  <input type="checkbox" id="collapse-1">
  <label class="button" for="collapse-1">
    Button collapse
  </label>
  <p class="collapse-container">
    Nulla maximus tempus pellentesque. Suspendisse malesuada risus erat, eget pretium mi rhoncus non. Duis a rutrum est, sit amet  egestas lorem. Integer fringilla, ex eget semper posuere, dui enim pharetra mi
  </p>
</div>
{% endcapture %}
{% include example.html content=example %}

If you are using JavaScript and need to use simplest collapse component, just toggle with JS `collapsed` class into `collapse-container` class.

{% capture example %}
<div id="basic-collapse" class="collapse">
  <button>
    Button collapse
  </button>
  <p class="collapse-container">
    Nulla maximus tempus pellentesque. Suspendisse malesuada risus erat, eget pretium mi rhoncus non. Duis a rutrum est, sit amet egestas lorem. Integer fringilla, ex eget semper posuere, dui enim pharetra mi
  </p>
</div>
{% endcapture %}
{% include example.html content=example %}


## Accordions

An accordion is a set of collapses components.
On Cactu are used this ways to get accordions:
* Only CSS:
  * Using `<input>` with `type="checkbox"` and `<label>`.
  * Using `<input>` with `type="radio"` and `<label>`.
* Using JS yourself.

### Only CSS

With `type="checkbox"` you can display all the sections of the accordion.

{% capture example %}
<div class="accordion">
  <section class="collapse">
    <input type="checkbox" id="accordion-1">
    <label for="accordion-1" class="header">
      Section 1
    </label>
    <div class="collapse-container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel purus ut sapien egestas rhoncus sed id odio. Maecenas ac malesuada nisi, ut luctus tortor.
      </p>
    </div>
  </section>
  <section class="collapse">
    <input type="checkbox" id="accordion-2">
    <label for="accordion-2" class="header">
      Section 2
    </label>
    <div class="collapse-container">
      <p>
        Nam malesuada non sapien eu porttitor. Quisque mattis rhoncus mauris sit amet luctus. Pellentesque aliquam neque eget nulla vehicula, vitae vehicula nisi suscipit.
      </p>
    </div>
  </section>
  <section class="collapse">
    <input type="checkbox" id="accordion-3">
    <label for="accordion-3" class="header">
      Section 3
    </label>
    <div class="collapse-container">
      <p>
        Ut iaculis ante sed nulla euismod, at malesuada libero tincidunt. Nulla laoreet dignissim mi, non viverra nisi porttitor.
      </p>
    </div>
  </section>
</div>
{% endcapture %}
{% include example.html content=example %}

With `type="radio"` just display section by section.

{% capture example %}
<div class="accordion">
  <section class="collapse">
    <input type="radio" id="accordion-r1" name="foo">
    <label for="accordion-r1" class="header">
      Section 1
    </label>
    <div class="collapse-container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel purus ut sapien egestas rhoncus sed id odio. Maecenas ac malesuada nisi, ut luctus tortor.
      </p>
    </div>
  </section>
  <section class="collapse">
    <input type="radio" id="accordion-r2" name="foo">
    <label for="accordion-r2" class="header">
      Section 2
    </label>
    <div class="collapse-container">
      <p>
        Nam malesuada non sapien eu porttitor. Quisque mattis rhoncus mauris sit amet luctus. Pellentesque aliquam neque eget nulla vehicula, vitae vehicula nisi suscipit.
      </p>
    </div>
  </section>
  <section class="collapse">
    <input type="radio" id="accordion-r3" name="foo">
    <label for="accordion-r3" class="header">
      Section 3
    </label>
    <div class="collapse-container">
      <p>
        Ut iaculis ante sed nulla euismod, at malesuada libero tincidunt. Nulla laoreet dignissim mi, non viverra nisi porttitor.
      </p>
    </div>
  </section>
</div>
{% endcapture %}
{% include example.html content=example %}

### With JS yourself

Again, if you are using JS and need to use simplest accordion component, just toggle with JS `collapsed` class into `collapse-container` class.

{% capture example %}
<div id="accordion-js" class="accordion">
  <section class="collapse">
    <header class="header">
      Section 1
    </header>
    <div class="collapse-container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel purus ut sapien egestas rhoncus sed id odio. Maecenas ac malesuada nisi, ut luctus tortor.
      </p>
    </div>
  </section>
  <section class="collapse">
    <header class="header">
      Section 2
    </header>
    <div class="collapse-container">
      <p>
        Nam malesuada non sapien eu porttitor. Quisque mattis rhoncus mauris sit amet luctus. Pellentesque aliquam neque eget nulla vehicula, vitae vehicula nisi suscipit.
      </p>
    </div>
  </section>
  <section class="collapse">
    <header class="header">
      Section 3
    </header>
    <div class="collapse-container">
      <p>
        Ut iaculis ante sed nulla euismod, at malesuada libero tincidunt. Nulla laoreet dignissim mi, non viverra nisi porttitor.
      </p>
    </div>
  </section>
</div>
{% endcapture %}
{% include example.html content=example %}