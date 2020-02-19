class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.boolean :rebooking, null: false
      t.interger :rating, null: false
      t.interger :space_id, null: false
      t.interger :reviewer_id, null: false

      t.timestamps
    end
  end
end
