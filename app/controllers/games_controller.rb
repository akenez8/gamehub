class GamesController < ApplicationController

    def index
        render json: Game.all, status: :ok
    end

    def show
        render json: find_game, status: :ok
    end

    def create
        render json: Game.create!(game_params), status: :created
    end

    private

    def find_game
        Game.find(params[:id])
    end

    def game_params
        params.permit(:title, :platform, :rented)
    end
end
