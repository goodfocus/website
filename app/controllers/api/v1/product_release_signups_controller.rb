class Api::V1::ProductReleaseSignupsController < ApplicationController
  def create
    product_release_signup = ProductReleaseSignup.create!(product_release_signup_params)
    if product_release_signup
      render json: product_release_signup
    else
      render json: product_release_signup.errors
    end
  end

private
  def product_release_signup_params
    params.permit(:email)
  end
end
