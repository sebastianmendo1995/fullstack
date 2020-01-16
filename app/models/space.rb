class Space < ApplicationRecord

    validates :host_id, :title, :address, :unit, :city, :state, :zip_code, :square_ft, :wifi, :notice, :open_time, :close_time, :capacity, :price, presence: true
    validates :rules, presence: true,  length: { minimum: 100 }
    validates :description, presence: true,  length: { minimum: 280 }
    validates :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday, inclusion: { in: [true, false]}
    validates :lat, :lng, presence: true
    validates :activities, presence: { message: 'must have at least one activity' }

    validate :ensure_photos

    has_many_attached :photos

    def ensure_photos
        if self.photos.length < 4
            errors[:photos] << "Must attached at least 4 photos"
        end
    end

    has_many :space_activities,
        dependent: :destroy,
        inverse_of: :space

    has_many :activities,
        through: :space_activities,
        source: :activity

    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
    end

end
