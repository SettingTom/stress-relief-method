Rails.application.routes.draw do
  get 'methods/index'
  root to: "methods#index"
  resources :methods, only: [:index]
end
