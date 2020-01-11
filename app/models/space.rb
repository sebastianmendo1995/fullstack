class Space < ApplicationRecord

    validates :host_id, :title, :address, :unit, :city, :state, :zip_code, :square_ft, :wifi, :notice, :open_time, :close_time,  :price,presence: true
    validates :rules, presence: true,  length: { minimum: 100 }
    validates :description, presence: true,  length: { minimum: 280 }
    validates :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday, inclusion: { in: [true, false]}
    validates :lat, :lng, presence: true

    validate :ensure_photos

    has_many_attached :photos

    def ensure_photos
        if self.photos.length < 4
            errors[:photos] << "Must attached at least 4 photos"
        end
    end

    has_many :space_activities,
        primary_key: :id,
        foreign_key: :space_id,
        class_name: :SpaceActivity

    has_many :activities,
        through: :space_activities,
        source: :activity

end
