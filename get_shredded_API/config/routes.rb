Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :reviews
  resources :ingredients, except: [:index]
  resources :recipes do 
    resources :ingredients, only: [:index]
  end

end