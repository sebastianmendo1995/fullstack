class Review < ApplicationRecord
    validates :title, :body, :space_id, :user_id, presence: true
    validates :rebooking, inclusion:{ in: [true, false] }

    after_initialize { self.rebooking = false if self.rebooking.nil? }

    belongs_to :user
    belongs_to :space
end
