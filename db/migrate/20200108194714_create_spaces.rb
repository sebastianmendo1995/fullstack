class CreateSpaces < ActiveRecord::Migration[5.2]
  def change
    create_table :spaces do |t|
      t.integer :host_id, null: false
      t.string :address, null: false
      t.integer :unit, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip_code, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :square_ft, null: false
      t.string :rules, null: false
      t.string :wifi, null: false
      t.string :access
      t.boolean :monday, null: false
      t.boolean :tuesday, null: false
      t.boolean :wednesday, null: false
      t.boolean :thursday, null: false
      t.boolean :friday, null: false
      t.boolean :saturday, null: false
      t.boolean :sunday, null: false
      t.time :open_time, null: false
      t.time :close_time, null: false
      t.integer :notice, null: false

      t.timestamps
    end

    add_index :spaces, :host_id
  end
end
