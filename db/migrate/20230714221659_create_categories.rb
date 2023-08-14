class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string "name"
      t.string "brand"
      t.float "weight"
      t.integer "price"


      t.timestamps
    end
  end
end
