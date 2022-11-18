class User < ApplicationRecord
    has_secure_password
    has_many :games
    has_many :rentals, through: :games, :dependent => :destroy
    validates :name, uniqueness: {case_sensitive: false}
end
