class Api::MessagesController < ApplicationController

    before_action :find_conversation

    def index
        @messages = @conversation.messages
    end

    def new
        @message = @conversation.messages.new
        render :show
    end

    def create
        @message = @conversation.messages.new(message_params)
        if @message.save
            render :show
        end
    end

    private
    
    def find_conversation
        @conversation = Conversation.find(params[:conversation_id])
    end

    def message_params
        params.require(:message).permit(:body, :user_id)
    end

end
