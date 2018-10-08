---
layout: documentation
title: Breadcrumbs
description: Documentation and examples for breadcrumbs.
group: components
toc: true
---


## Overview

Following a bit the <a href="https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html" target="_blank">Breadcrumb Design Pattern in WAI-ARIA</a>, Cactu decided to opt for a structure of numerical list, how is marked by the "good practices in breadcrumbs", in addition, the list structure allows us to cleanly separate each link without problems on hover events with the divider.

## Examples

{% capture example %}
<ol class="breadcrumb">
  <li><a href="#" class="active">Home</a></li>
</ol>

<ol class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#" class="active">Documents</a></li>
</ol>

<ol class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Documents</a></li>
  <li><a href="#" class="active">October</a></li>
</ol>
{% endcapture %}
{% include example.html content=example %}