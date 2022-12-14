class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show]
    # , only: :create
    def index
        render json: User.all, status: :ok
    end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
        user = User.find_by(id: session[:user_id]) 
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end   

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:name, :password)
    end
end

