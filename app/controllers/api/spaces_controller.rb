class Api::SpacesController < ApplicationController
    before_action :require_logged_in, except: [:index, :show]

    def new
        @space = Space.new
        render :new
    end

    def index
        spaces = bounds ? Space.in_bounds(bounds) : Space.all

        if params[:maxCapacity]
            spaces = spaces.where(capacity: capacity_range)
        end
        
        if params[:maxPrice]
            spaces = spaces.where(price: price_range) 
        end

        @spaces = spaces.with_attached_photos.page(params[:page])
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

    def bounds
        params[:bounds]
    end

    def capacity_range
        (0..params[:maxCapacity].to_i)
    end

    def price_range
        (0..params[:maxPrice].to_i)
    end

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
            :capacity,
            photos: [],
            activity_ids: []
        )
    end
end
