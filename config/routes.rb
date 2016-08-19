Rails.application.routes.draw do

  # root 'application#home'
  root 'posts#index'

  resources :posts

end
