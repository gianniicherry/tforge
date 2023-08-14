Rails.application.routes.draw do
  resources :values
  resources :requests do 
    resources :ewastes, only: [:index]
    get "/requestvalue", to: "values#estimate"
  end
  resources :ewastes
  resources :products
  resources :categories
  resources :users
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
