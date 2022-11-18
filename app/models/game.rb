class Game < ApplicationRecord
    has_many :users 
    has_many :rentals, through: :users, :dependent => :destroy
end
