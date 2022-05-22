Rails.application.routes.draw do
  get 'methods/index'
  root to: "methods#index"
  resources :methods, only: [:index]
  get 'gets1', to: 'methods#method1'
  get 'gets2', to: 'methods#method2'
end
