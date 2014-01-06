CactuApp::Application.routes.draw do
  root to: 'home#index'
  get 'usage/started', :to => 'usage#started'
  get 'usage/base', :to => 'usage#base'
  get 'usage/components', :to => 'usage#components'
end
