class User < ApplicationRecord
    has_many :games
    has_many :rentals, through: :games
    validates :name, uniqueness: {case_sensitive: false}
end
