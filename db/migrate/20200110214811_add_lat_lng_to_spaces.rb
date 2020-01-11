class AddLatLngToSpaces < ActiveRecord::Migration[5.2]
  def change
    add_column :spaces, :lat, :float
    add_column :spaces, :lng, :float

  end
end
