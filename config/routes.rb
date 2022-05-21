Rails.application.routes.draw do
  get 'methods/index'
  get 'gets', to: 'methods#method1'
  root to: "methods#index"
  resources :methods, only: [:index, :show]

end
