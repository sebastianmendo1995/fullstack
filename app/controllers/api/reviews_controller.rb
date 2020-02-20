class Api::ReviewsController < ApplicationController
    # Do not forget to require_logged_in

    def index
        @reviews = Space.find(params[:space_id]).reviews
        render :index
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 404
        end
    end

    def edit
        @review = Review.find(params[:id])
        render :edit
    end

    def update
        @review = Review.find(params[:id])

        if @review
            @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy
            redirect_to api_space_url(@review.space_id)
        else
            render json: 'You can\'t destroy what\'s not there'
        end
    end

    private
    def review_params
        params.require(:review).permit(:title, :body, :rebooking, :rating, :space_id, :user_id)
    end

end
   