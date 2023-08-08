class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
        t.string "address1"
        t.string "address2"
        t.string "city"
        t.string "state"
        t.integer "zip"
        t.integer "user_id"
      t.timestamps
    end
  end
end
