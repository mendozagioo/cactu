---
layout: documentation
title: Grid
description: Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to our configurable column system, seven default responsive tiers, Sass variables and mixins, and dozens of predefined classes.
group: layout
toc: true
---


## Overview

Cactu is built with flexbox and is fully responsive, also has two different ways to use the grid:
* Difining a max column grid (12 by default) and used it with `column-of-<num_column>` classes.
* Add the neccesary columns that you need.


## Defined column size

You can define the size of the column that you need, depending the `$maximun-columns` value, by default is on 12 columns:

<div class="highlight-example">
  <div class="columns">
    <div class="column-of-4 column-example">
      size of 4 columns
    </div>
    <div class="column-of-4 column-example">
      size of 4 columns
    </div>
    <div class="column-of-4 column-example">
      size of 4 columns
    </div>
  </div>
</div>

{% highlight html %}
<div class="container">
  <div class="columns">
    <div class="column-of-4">
      size of 4 columns
    </div>
    <div class="column-of-4">
      size of 4 columns
    </div>
    <div class="column-of-4">
      size of 4 columns
    </div>
  </div>
</div>
{% endhighlight %}

## Adjusted columns

You can add the necessary columns (`column`), and these will fit their container, which in this case is the `columns` class:

<div class="highlight-example">
  <div class="columns">
    <div class="column column-example">
      adjusted column
    </div>
    <div class="column column-example">
      adjusted column
    </div>
    <div class="column column-example">
      adjusted column
    </div>
  </div>
</div>

{% highlight html %}
<div class="container">
  <div class="columns">
    <div class="column">
      adjusted column
    </div>
    <div class="column">
      adjusted column
    </div>
    <div class="column">
      adjusted column
    </div>
  </div>
</div>
{% endhighlight %}


## Grid options

By default Cactu define the names of classes for columns (`column-of-<num_column>`) including the name for the small screen sizes (`tablet-column-of-<num_column>`, `cellphone-column-of-<num_column>`), but too, you can modified a little the name, for that consult the grid API documentation **(coming soon)**.

<table>
  <thead>
    <tr>
      <th></th>
      <th class="text-center">
        Cellphone
      </th>
      <th class="text-center">
        Cellphone-Tablet
      </th>
      <th class="text-center">
        Tablet
      </th>
      <th class="text-center">
        Small desktop
      </th>
      <th class="text-center">
        Medium desktop
      </th>
      <th class="text-center">
        Large desktop
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Container width</th>
      <td><small>&lt;576px</small></td>
      <td><small>576px-767px</small></td>
      <td><small>768px-959px</small></td>
      <td><small>960px-1199px</small></td>
      <td><small>1200px-1343</small></td>
      <td><small>1344+</small></td>
    </tr>
    <tr>
      <th>Class prefix</th>
      <td><code>.column-of-</code></td>
      <td><code>.cellphone-column-of-</code></td>
      <td><code>.tablet-column-of-</code></td>
      <td><code>.column-of-</code></td>
      <td><code>.column-of-</code></td>
      <td><code>.column-of-</code></td>
    </tr>
    <tr>
      <th>Gutter width</th>
      <td><small>30px (15px on each side of a column)</small></td>
      <td colspan="2"><small>20px (10px on each side of a column)</small></td>
      <td colspan="3"><small>30px (15px on each side of a column)</small></td>
    </tr>
    <tr>
      <th># default columns</th>
      <td colspan="6">12</td>
    </tr>
    <tr>
      <th>Nestable</th>
      <td colspan="6">Yes</td>
    </tr>
    <tr>
      <th>Column ordering</th>
      <td colspan="6">Yes</td>
    </tr>
  </tbody>
</table>

Watch more examples to use the [Cactu's grid]({{site.baseurl}}/examples/grid/)