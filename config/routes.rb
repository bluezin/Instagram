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
  get '/posts', to: "posts#index", format: "json"
  post "/post/create", to: "posts#create", format: "json"

  # comment
  post "/comment/create/:post_id", to: "comments#create", format: "json"

  #likes
  post "/like/:post_id", to: "likes#create"
  delete "/like/:post_id", to: "likes#destroy"

  # profile
  get "/profile", to: "profiles#index"

  # google
  get '/auth/google_oauth2/callback', to: 'users#omniauth'

  # search
  get '/search/:search_id', to: 'search#index'
  post '/search/:search_id', to: 'search#search_results'
end
