class SpaceActivity < ApplicationRecord

    validates :activity_id, uniqueness: { scope: :space_id}

    belongs_to :activity
    belongs_to :space

    
    
end
