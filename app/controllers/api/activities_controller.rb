class Api::ActivitiesController < ApplicationController

    def index
        @activities = Activity.all
        render :index
    end

    def show
        @activity = Activity.find(params[:id])
        if @activity
            render :show
        else
            render json: @activity.errors.full_messages, status: 404
        end
    end

end
