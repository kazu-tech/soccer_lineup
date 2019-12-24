Rails.application.routes.draw do
  root to: 'posts#index'
  resources :teams
  resources :posts
end
