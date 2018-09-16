---
layout: documentation
title: Download
description: Download Cactu to get the compiled CSS, source code, or include it with your favorite package managers like npm or RubyGems.
group: getting-started
toc: true
---


## Compiled CSS

Download ready-to-use compiled code for **Cactu v{{ site.current_ruby_version }}** to easily drop into your project.

<a class="button button-principal" href="https://github.com/mendozagioo/cactu/releases/download/v{{ site.current_ruby_version }}/cactu-{{ site.current_ruby_version }}-css.zip">Download</a>


## Source files

Compile Cactu with your own asset pipeline by downloading our source Sass. This option requires some additional tooling:

* Sass compiler (Libsass or Ruby Sass is supported) for compiling your CSS.
* Autoprefixer for CSS vendor prefixing.


<a class="button button-principal" href="https://github.com/mendozagioo/cactu/archive/master.zip">Download</a>


## Package managers

Pull in Cactu’s source files into nearly any project with some of the most popular package managers. No matter the package manager, Cactu will **require a Sass compiler** and **Autoprefixer** for a setup that matches our official compiled versions.


### npm

Install Cactu with npm:

{% highlight sh %}
npm install cactu
{% endhighlight %}


### RubyGems

Install Cactu in your Ruby apps using Bundler (recommended) and RubyGems by adding the following line to your Gemfile:

{% highlight ruby %}
gem 'cactu', '~> {{ site.current_ruby_version }}'
{% endhighlight %}

Alternatively, if you’re not using Bundler, you can install the gem by running this command:

{% highlight sh %}
gem install cactu -v {{ site.current_ruby_version }}
{% endhighlight %}