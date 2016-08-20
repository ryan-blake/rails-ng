Rails.application.routes.draw do

  resources :spots, only: [:index, :create, :destroy], defaults: {format: :json}
    root "spots#index"

  # root 'application#home'

end
