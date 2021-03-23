class Api::V1::ProductReleaseSignupsController < ApplicationController
  before_action :sanitize_params

  def create
    product_release_signup = ProductReleaseSignup.create!(product_release_signup_params)
    if product_release_signup
      render json: product_release_signup
    else
      render json: product_release_signup.errors
    end
  end

private
  def sanitize_params
    params[:email] = params[:email].downcase
  end

  def product_release_signup_params
    params.permit(:email)
  end
end
