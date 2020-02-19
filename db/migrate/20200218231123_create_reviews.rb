class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.boolean :rebooking, null: false
      t.integer :rating, null: false
      t.integer :space_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :reviews, :space_id
    add_index :reviews, :user_id
  end
end
