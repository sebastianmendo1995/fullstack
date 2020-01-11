class Activity < ApplicationRecord

    validates :name, presence: true, uniqueness: true

    has_many :space_activities,
        primary_key: :id,
        foreign_key: :activities_id,
        class_name: :SpaceActivity

    has_many :spaces,
        through: :space_activities,
        source: :space
    
end
