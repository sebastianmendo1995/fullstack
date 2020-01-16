class Activity < ApplicationRecord

    validates :name, presence: true, uniqueness: true

    has_many :space_activities,
        dependent: :destroy,
        inverse_of: :activity

    has_many :spaces,
        through: :space_activities,
        source: :space
    
end
