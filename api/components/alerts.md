---
layout: api
title: Alerts
description: Documentation and examples for alerts.
group: components
redirect_from:
  - /api/components/
toc: true
---


## Variables

| Name  | Type  | Value |
| ----- | ----- | ----- |
`$alert-padding` | <small>padding</small> | `1rem` |
`$alert-radius` | <small>radius</small> | `$radius` |
`$alert-background-level` | <small>unitless</small> | `-10` |
`$alert-border-level` | <small>unitless</small> | `-9` |
`$alert-color-level` | <small>unitless</small> | `6` |
`$alert-color-base` | <small>color</small> | <span class="small-box" style="background:#f8f852"></span> `$yellow` |
`$alert-background` | <small>color</small> | <span class="small-box" style="background:#fefedc"></span> `theme-color-level($alert-color-base, $alert-background-level)` |
`$alert-border` | <small>color</small> | <span class="small-box" style="background:#f9f96e"></span> `theme-color-level($alert-color-base, $alert-border-level)` |
`$alert-color` | <small>color</small> | <span class="small-box" style="background:#81812b"></span> `theme-color-level($alert-color-base, $alert-color-level)` |