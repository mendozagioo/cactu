---
layout: documentation
title: Contents
description: Watch what’s included in Cactu and the way to manage the Cactu's source.
group: getting-started
toc: true
---


## Overview

Cactu was created with two different principles: **elements** and **components**.

An **element** is a HTML tag that can be implemented without the help of other tags, such as: buttons `<button>`, images `<img>`, anchors `<a>`, paragraphs `<p>`, etc.

The **componenets**, are formed from two or more elements, for example, navigations `<nav><a></a></nav>`, tables `<table><thead></thead>...</table>`, lists `<ul><li></li></ul>`, etc.


## Source code

Cactu has been built on <a href="https://sass-lang.com/" target="_blank">Sass</a> with `.scss` extension.

{% highlight plaintext %}
cactu/
├── scss/
│   ├── base/
|   |   ├── _blocks.scss
|   |   ├── _global-variables.scss
|   |   ├── _reboot.scss
│   ├── components/
|   |   ├── _alerts.scss
|   |   ├── _buttons.scss
|   |   ├── _collapse.scss
|   |   ├── _dropdowns.scss
|   |   ├── _forms.scss
|   |   ├── _grids.scss
|   |   ├── _lists.scss
|   |   ├── _modals.scss
|   |   ├── _navbars.scss
|   |   ├── _navs.scss
|   |   ├── _paginations.scss
|   |   ├── _tables.scss
|   |   ├── _tooltips.scss
│   ├── elements/
|   |   ├── _button.scss
|   |   ├── _code.scss
|   |   ├── _icon.scss
|   |   ├── _image.scss
|   |   ├── _typography.scss
│   ├── functions/
|   |   ├── _colors.scss
|   |   ├── _strings.scss
│   ├── mixins/
|   |   ├── _alerts.scss
|   |   ├── _breakpoints.scss
|   |   ├── _buttons.scss
|   |   ├── _forms.scss
|   |   ├── _grid.scss
|   |   ├── _hover.scss
|   |   ├── _icons.scss
|   |   ├── _navbar.scss
|   |   ├── _positions.scss
|   |   ├── _transition.scss
│   ├── itilities/
|   |   ├── _classes.scss
|   |   ├── _syntax.scss
└── cactu.scss
{% endhighlight %}


## Precompiled code

Cactu just precompile the normal CSS file `cactu.css`, and the minified `cactu.min.css`. All the files are precompile here (`base/, components/, elements/ and utilities/`), together with `functions/` ans `mixins/`.

{% highlight plaintext %}
cactu/
├── css/
│   ├── cactu.css
│   ├── cactu.min.css
{% endhighlight %}


## Essentials

Cactu has the essential files wich are inside of:

{% highlight plaintext %}
cactu/
├── scss/
│   ├── base/
│   ├── functions/
│   ├── mixins/
│   ├── itilities/
└── cactu.scss
{% endhighlight %}

With that, you can create your own elements and components.