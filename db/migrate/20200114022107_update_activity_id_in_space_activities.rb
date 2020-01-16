class UpdateActivityIdInSpaceActivities < ActiveRecord::Migration[5.2]
  def change
    rename_column :space_activities, :activities_id, :activity_id
  end
end
