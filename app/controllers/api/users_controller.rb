class Api::UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def show
        @user = User.with_attached_photo.find(params[:id])
        if @user
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def edit
        @user = User.find(params[:id])
        render :edit
    end

    def update
        @user = User.find(params[:id])
        if @user.update_attributes(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user.destroy
            redirect_to users_url
        else
            render plain: "You can't destroy what's not there."
        end
    end

    private

    def user_params
        params.require(:user).permit(:email,
            :password,
            :first_name,
            :last_name,
            :phone_number, 
            :company_name,
            :job_title, 
            :photo
        )
    end
end
