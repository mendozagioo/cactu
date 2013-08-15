# coding: utf-8
$:.push File.expand_path("../lib", __FILE__)
require 'cactu/version'

Gem::Specification.new do |spec|
  spec.name          = "cactu"
  spec.version       = Cactu::VERSION
  spec.platform      = Gem::Platform::RUBY
  spec.authors       = ["Giovanni Mendoza", "José Guillermo"]
  spec.email         = ["mendozagioo@gmail.com", "jmemox@gmail.com"]
  spec.summary       = "Cactu is a CSS library to help us to create webs easily"
  spec.description   = "Cactu is a CSS library created to help any developer to create web pages very quickly and an easy way"
  spec.homepage      = "https://github.com/mendozagioo/cactu"
  spec.license       = "MIT"

  spec.rubyforge_project = "cactu"

  spec.files         = `git ls-files`.split("\n")
  spec.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  spec.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  spec.require_paths = ["lib"]

  spec.add_dependency('sass', '>= 3.2.0')
  spec.add_dependency('thor')

  spec.add_development_dependency "rake"
end
