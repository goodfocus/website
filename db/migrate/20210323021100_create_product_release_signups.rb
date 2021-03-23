class CreateProductReleaseSignups < ActiveRecord::Migration[6.1]
  def change
    create_table :product_release_signups do |t|
      t.string :email, unique: true

      t.timestamps
    end
  end
end
