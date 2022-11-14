class User < ApplicationRecord
    has_many :games
    has_many :rentals, through: :games
end
