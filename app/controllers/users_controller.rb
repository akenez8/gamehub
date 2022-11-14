class UsersController < ApplicationController

    def index
        render json: User.all, status: :ok
    end

    def create
        render json: User.create!(user_params), status: :created
    end

    private

    def user_params
        params.permit(:name, :password)
    end
end
