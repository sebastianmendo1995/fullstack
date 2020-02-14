class CreateSpaceActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :space_activities do |t|
      t.integer :space_id, null: false
      t.integer :activities_id, null: false

      t.timestamps
    end

    add_index :space_activities, :space_id
    add_index :space_activities, [:space_id, :activities_id]
  end
end
