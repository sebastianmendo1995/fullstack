class Review < ApplicationRecord
    validates :title, :body, :rebooking, :space_id, :user_id, presence: true

    belongs_to :user
    belongs_to :space
end
