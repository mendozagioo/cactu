---
layout: documentation
title: Introduction
description: Cactu has been created to make webs easily, fast, and with the minimal styles to be customized and to be able to scale it up what you want.
group: getting-started
redirect_from:
  - /documentation/
  - /documentation/getting-started/
toc: true
---

## Quick start

To begin quickly using Cactu, you need to download the compiled CSS file of our [git repository](https://github.com/mendozagioo/cactu/tree/master/css), but with that, you doesn't have the opportunity to custom any element or component, unless you rewrite the styles that you need.

Using a package manager or need to download the source files? Head to the [downloads page]({{ site.baseurl }}/documentation/getting-started/download/).


## Starter template

Minimal HTML5 standards that you need to begin using Cactu. Your pages should look like this:

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no">
    
    <!-- Path of Cactu compiled -->
    <link rel="stylesheet" href="<cactu_path>.min.css">
    
    <title>Title here!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
{% endhighlight %}

That’s all you need for overall page requirements. Head to the [layout documentation]({{ site.baseurl }}/documentation/layout/overview/) to start laying out your site’s content and components.


## Important globals

Cactu needs some important global styles and configurations that you should take into account when using it, some of them are:
* HTML5 doctype
* Responsive meta tag
* Box sizing
* Reboot


### HTML5 doctype

requires the use of the HTML5 doctype. Without it, you’ll see some incomplete styling

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}


### Responsive meta tag

Cactu is developed mobile first, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no">
{% endhighlight %}


### Box sizing

For more straightforward sizing in CSS, we use the global `box-sizing` with value `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

{% highlight css %}
*, ::after, ::before {
  box-sizing: border-box;
}
{% endhighlight %}


### Reboot

For improved cross-browser rendering, we use mostly [Bootstap's reboot]({{ site.baseurl }}/documentation/base/reboot/) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.