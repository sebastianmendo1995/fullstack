class RemoveIndexSpaceActivities < ActiveRecord::Migration[5.2]
  def change
    remove_index :space_activities, column: [:space_id, :activity_id]
    add_index :space_activities, [:activity_id, :space_id], unique: true
  end
end
