Rails.application.routes.draw do
  get 'methods/index'
  root to: "methods#index"
  resources :methods, only: [:index]
  get 'gets1', to: 'methods#positive_memories'
  get 'gets2', to: 'methods#negative_dustbin'
  get 'gets3', to: 'methods#forehead_tapping'
  get 'gets4', to: 'methods#mindbus_technique'
  get 'gets5', to: 'methods#mental_clearbutton'
  get 'gets6', to: 'methods#fry_on_the_wall'
  get 'gets7', to: 'methods#mental_subtracting.html'
  get 'gets8', to: 'methods#fivesense_countdown'
end
