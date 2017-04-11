Rails.application.routes.draw do
  root 'pages#index'
  get '/gallery' => 'pages#_gallery'
  get '/about' => 'pages#_about'
  get '/contact' => 'pages#_contact'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
