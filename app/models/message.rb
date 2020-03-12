class Message < ApplicationRecord

    validates :body, :conversation_id, :user_id, presence: true

    belongs_to :conversation
    belongs_to :user

    def message_time
        create_at.strftime("%m/%d/%y at %l:%M %p")
    end
end
