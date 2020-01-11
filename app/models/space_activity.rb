class SpaceActivity < ApplicationRecord

    validates :space_id, :activities_id, presence: true

    belongs_to :activity,
        primary_key: :id,
        foreign_key: :activities_id,
        class_name: :Activity

    belongs_to :space,
        primary_key: :id,
        foreign_key: :space_id,
        class_name: :Space

end
