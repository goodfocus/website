Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'product_release_signups/create'
    end
  end
  root 'single_page_app#index'
  get '/*path' => 'single_page_app#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
