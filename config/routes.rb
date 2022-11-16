Rails.application.routes.draw do
  
  resources :rentals
  resources :games, only: [:index, :show, :create]
  resources :users, only: [:index, :create, :show]
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
