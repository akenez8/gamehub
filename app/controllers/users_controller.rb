class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    def index
        render json: User.all, status: :ok
    end

    # def show
    #     render json: find_user, status: :ok
    # end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:name, :password, :password_confirmation)
    end

end