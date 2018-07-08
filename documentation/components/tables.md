---
layout: documentation
title: Tables
description: Basic use for tables with a few classes.
group: components
---


## Variables

| Name  | Type  | Value |
| ----- | ----- | ----- |
| `$white`    | <small>color</small> | <span class="small-box" style="background:#fff"></span> `#fff`    |


## Default table

{% capture example %}
<table>
  <thead>
    <tr>
      <th>Lorem</th>
      <th>Ipsum</th>
      <th>Dolor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem ipsum dolor sit amet</td>
      <td>Curabitur varius scelerisque libero</td>
      <td>Vestibulum ante ipsum primis</td>
    </tr>
    <tr>
      <td>Aliquam viverra</td>
      <td>Curabitur pretium porttitor orci</td>
      <td>Orci varius natoque penatibus</td>
    </tr>
    <tr>
      <td>Mauris eget justo</td>
      <td>Vestibulum et convallis eros</td>
      <td>Fusce dapibus metus quis</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}


## Tables flush

{% capture example %}
<table class="table-flush">
  <thead>
    <tr>
      <th>Lorem</th>
      <th>Ipsum</th>
      <th>Dolor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem ipsum dolor sit amet</td>
      <td>Curabitur varius scelerisque libero</td>
      <td>Vestibulum ante ipsum primis</td>
    </tr>
    <tr>
      <td>Aliquam viverra</td>
      <td>Curabitur pretium porttitor orci</td>
      <td>Orci varius natoque penatibus</td>
    </tr>
    <tr>
      <td>Mauris eget justo</td>
      <td>Vestibulum et convallis eros</td>
      <td>Fusce dapibus metus quis</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}


## Interleaved tables

{% capture example %}
<table class="table-interleaved">
  <thead>
    <tr>
      <th>Lorem</th>
      <th>Ipsum</th>
      <th>Dolor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem ipsum dolor sit amet</td>
      <td>Curabitur varius scelerisque libero</td>
      <td>Vestibulum ante ipsum primis</td>
    </tr>
    <tr>
      <td>Aliquam viverra</td>
      <td>Curabitur pretium porttitor orci</td>
      <td>Orci varius natoque penatibus</td>
    </tr>
    <tr>
      <td>Mauris eget justo</td>
      <td>Vestibulum et convallis eros</td>
      <td>Fusce dapibus metus quis</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<table class="table-flush-interleaved">
  <thead>
    <tr>
      <th>Lorem</th>
      <th>Ipsum</th>
      <th>Dolor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem ipsum dolor sit amet</td>
      <td>Curabitur varius scelerisque libero</td>
      <td>Vestibulum ante ipsum primis</td>
    </tr>
    <tr>
      <td>Aliquam viverra</td>
      <td>Curabitur pretium porttitor orci</td>
      <td>Orci varius natoque penatibus</td>
    </tr>
    <tr>
      <td>Mauris eget justo</td>
      <td>Vestibulum et convallis eros</td>
      <td>Fusce dapibus metus quis</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}


## Borderless table

{% capture example %}
<table class="table-borderless">
  <thead>
    <tr>
      <th>Lorem</th>
      <th>Ipsum</th>
      <th>Dolor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem ipsum dolor sit amet</td>
      <td>Curabitur varius scelerisque libero</td>
      <td>Vestibulum ante ipsum primis</td>
    </tr>
    <tr>
      <td>Aliquam viverra</td>
      <td>Curabitur pretium porttitor orci</td>
      <td>Orci varius natoque penatibus</td>
    </tr>
    <tr>
      <td>Mauris eget justo</td>
      <td>Vestibulum et convallis eros</td>
      <td>Fusce dapibus metus quis</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}