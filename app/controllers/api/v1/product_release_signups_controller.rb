class Api::V1::ProductReleaseSignupsController < ApplicationController
  def create
    product_release_signup = ProductReleaseSignup.create!(params)
    if product_release_signup
      render json: product_release_signup
    else
      render json: product_release_signup.errors
    end
  end
end
