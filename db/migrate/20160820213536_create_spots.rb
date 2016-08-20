class CreateSpots < ActiveRecord::Migration
  def change
    create_table :spots do |t|
      t.string :title
      t.text :description
      t.integer :length
      t.integer :width
      t.integer :depth
      t.boolean :land

      t.timestamps null: false
    end
  end
end
