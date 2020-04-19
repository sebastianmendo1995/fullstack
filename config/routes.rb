Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  
  namespace :api, defaults: { format: :json } do
    resources :users
    
    devise_for :users, :controllers => { 
      :omniauth_callbacks => "omniauth_callbacks" 
    }
    
    resources :spaces do 
      resources :reviews, only: [:index, :create]
    end

    resources :activities, only: [:index, :show]

    resources :reviews, only: [:update, :destroy]

    resource :session, only: [:create, :destroy]

    resources :conversations, only: [:index, :create] do
      resources :messages, only: [:index, :new, :create]
    end

  end
  
end

