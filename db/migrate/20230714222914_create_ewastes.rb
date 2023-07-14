class CreateEwastes < ActiveRecord::Migration[7.0]
  def change
    create_table :ewastes do |t|

      t.timestamps
    end
  end
end
