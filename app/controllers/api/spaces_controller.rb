class Api::SpacesController < ApplicationController
    before_action :require_logged_in, except: [:index, :show]

    def new
        @space = Space.new
        render :new
    end

    def index
        @spaces = Space.all
        render :index
    end

    def show
        @space = Space.with_attached_photos.find(params[:id])
        if @space
            render :show
        else
            render json: @space.errors.full_messages, status: 404
        end
    end

    def create
        # debugger
        @space = Space.new(space_params)

        if @space.save
            render :show
        else
            render json: @space.errors.full_messages, status: 404
        end
    end

    def edit
        @space = Space.find(params[:id])
        render :edit
    end

    def update
        @space = Space.find(params[:id])
        
        if @space.update(space_params)
            redirect_to api_space_url(@space)
        else
            render json: @space.errors.full_messages, status: 422
        end
    end

    def destroy
        @space = Space.find(params[:id])
        if @space.destroy
            render :index
        else
            render plain: "You can't destroy what's not there"
        end
    end

    private
    def space_params
        params.require(:space).permit(:host_id,
            :address,
            :unit,
            :city,
            :state,
            :zip_code,
            :title,
            :description,
            :square_ft,
            :rules,
            :wifi,
            :access,
            :monday,
            :tuesday,
            :wednesday,
            :thursday,
            :friday,
            :saturday,
            :sunday,
            :open_time,
            :close_time,
            :notice,
            :price,
            :lat,
            :lng,
            photos: [],
            activity_ids: []
        )
    end
end
