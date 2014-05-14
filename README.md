# Cactu modificado

[![Gem Version](https://badge.fury.io/rb/cactu.png)](http://badge.fury.io/rb/cactu)

### A SASS library to create webs easily

Cactu is a SASS library created to help any developer to create web pages
very quickly and an easy way

## Installation

Add this into Gemfile:

    gem 'cactu'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install cactu

## Usage in Rails

Rename you `application.css` file to `application.css.scss`:

    mv app/assets/stylesheets/application.css app/assets/stylesheets/application.css.scss

Delete the sprocket directive in `application.css.scss`:

    *= require_tree .

Import Cactu to `application.css.scss` file:

    @import 'cactu';

## Usage in Sinatra

You can use [sinatra-asset-pipeline](http://github.com/kalasjocke/sinatra-asset-pipeline)
to precompile on fly the assets

Add this into Gemfile:

    gem 'cactu'

And then execute:

    $ bundle

Import cactu in your main SASS file:

    @import 'cactu';

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
