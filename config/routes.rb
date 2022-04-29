Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/", to: "home#index"

  # login
  get "users/new"
  get "users/register"
  post 'users/sign_in'
  post 'users/sign_up'
  delete 'users/logout'

  # post
  post "/post/create", to: "posts#create"

  # comment
  post "/comment/create/:post_id", to: "comments#create"

  #likes
  post "/like/:post_id", to: "likes#create"
  delete "/like/:post_id", to: "likes#destroy"

  # profile
  get "/profile", to: "profiles#index"

  # google
  get '/auth/google_oauth2/callback', to: 'users#omniauth'
end
