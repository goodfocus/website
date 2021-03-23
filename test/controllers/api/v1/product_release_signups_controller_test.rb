require "test_helper"

class Api::V1::ProductReleaseSignupsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_v1_product_release_signups_create_url
    assert_response :success
  end
end
