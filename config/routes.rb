Rails.application.routes.draw do
  
  resources :rentals
  resources :games, only: [:index, :show, :create]
  resources :users, only: [:index, :create, :show]
  # Routing logic: fallback requests for React Router.
  post "/signup", to: "users#create" # in App.js 
  get "/me", to: "users#show" # in App.js
  post "/login", to: "sessions#create" # in Login.js
  delete "/logout", to: "sessions#destroy" # in Navbar.js
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
