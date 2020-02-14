class AddCapacityToSpaces < ActiveRecord::Migration[5.2]
  def change
    add_column :spaces, :capacity, :integer
  end
end
