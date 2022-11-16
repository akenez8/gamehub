class RentalsController < ApplicationController

    def index
        render json: Rental.all, status: :ok
    end

    def show
        render json: find_rental, status: :ok
    end

    def create
        rental = @user.rentals.create!(rental_params)
        render json: rental, status: :created
    end

    def destroy
        find_rental.destroy
        head :no_content
    end

    private

    def find_rental
        Rental.find(params[:id])
    end

    def rental_params
        params.permit(:user_id, :game_id)
    end
end
