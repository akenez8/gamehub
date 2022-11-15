class UsersController < ApplicationController

    def index
        render json: User.all, status: :ok
    end

    def show
        render json: find_user, status: :ok
    end

    def create
        render json: User.create!(user_params), status: :created
    end


    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:name, :password)
    end
end
