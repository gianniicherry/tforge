class CreateEwastes < ActiveRecord::Migration[7.0]
  def change
    create_table :ewastes do |t|
      t.string "condition"
      t.integer "user_id"
      t.integer "request_id"
      t.timestamps
    end
  end
end
