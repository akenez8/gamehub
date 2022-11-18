class RentalsController < ApplicationController
    skip_before_action :authorize
    
    def index
        render json: Rental.all, status: :ok
    end

    def show
        Rental.find({user_id: params[:id]})
        render json: find_rental, status: :ok
    end

    def create
        rental = Rental.create!(rental_params)
        render json: rental, status: :created
    end

    def update
        rental = find_rental
        rental.update(params.permit(:day))
        render json: rental, status: :accepted
    end

    def destroy
        find_rental.destroy
        head :no_content
    end

    private

    def find_rental
        Rental.find_by(id: params[:id])
    end

    def rental_params
        params.permit(:user_id, :game_id, :day)
    end
end
