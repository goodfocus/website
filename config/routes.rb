Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'product_release_signups/create'
    end
  end
  root 'signup_page#index'
  get '/*path' => 'signup_page#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
