Rails.application.routes.draw do
  root 'pages#index'
  get '/gallery' => 'pages#gallery'
  get '/about' => 'pages#about'
  get '/contact' => 'pages#contact'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
