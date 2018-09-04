---
layout: documentation
title: Browsers & devices
description: A look at the browsers and devices that are supported by Cactu, bearing in mind the limitations of some.
group: getting-started
toc: true
---


## Supported browsers

Cactu support all major browsers and platforms. On windows **we support Internet Explorer 10-11 and Microsoft Edge**.

To have better support with the new CSS standards among browsers, we use **autoprefixer** when precompiling styles. Anyway, below we show a small comparative table of the Cactu support on mobiles and desktop.


### Mobile devices

|   | Chrome | Firefox | Safari | Android Browser & WebView | Microsoft Edge |
| - | ------ | ------- | ------ | ------------------------- | -------------- |
| **Android** | <span class="ok-text">Supported</span> | <span class="ok-text">Supported</span>  | <span class="disabled">N/A</span>  | <span class="ok-text">Android v5.0+ supported</span>  | <span class="ok-text">Supported</span>  |
| **iOS** | <span class="ok-text">Supported</span>  | <span class="ok-text">Supported</span>  | <span class="ok-text">Supported</span>  | <span class="disabled">N/A</span>  | <span class="ok-text">Supported</span>  |
| **Windows 10 mobile** | <span class="disabled">N/A</span> | <span class="disabled">N/A</span>  | <span class="disabled">N/A</span>  | <span class="disabled">N/A</span>  | <span class="ok-text">Supported</span>  |


### Desktop browsers

|   | Chrome | Firefox | Safari | Internet Explorer | Microsoft Edge | Opera |
| - | ------ | ------- | ------ | ----------------- | -------------- | ----- |
| **Mac** | <span class="ok-text">Supported</span> | <span class="ok-text">Supported</span>  | <span class="ok-text">Supported</span> | <span class="disabled">N/A</span>  | <span class="disabled">N/A</span> | <span class="ok-text">Supported</span>  |
| **Windows** | <span class="ok-text">Supported</span>  | <span class="ok-text">Supported</span>  | <span class="error-text">Not supported</span> | <span class="ok-text">Supported, IE10+</span>  | <span class="ok-text">Supported</span> | <span class="ok-text">Supported</span> |

Cactu should look and behave well enough in Chromium and Chrome for Linux, Firefox for Linux, and Internet Explorer 9, though they are not officially supported.


## Internet Explorer

Internet Explorer 10+ is supported; IE9 and down is not. Please be aware that some CSS3 properties and HTML5 elements are not fully supported in IE10, or require prefixed properties for full functionality. Visit <a href="https://caniuse.com/" target="_blank">Can I use…</a> for details on browser support of CSS3 and HTML5 features.