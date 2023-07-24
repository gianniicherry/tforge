class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
        t.string "address"
        t.integer "value"
        t.integer "user_id"
      t.timestamps
    end
  end
end
