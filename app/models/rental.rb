class Rental < ApplicationRecord
  belongs_to :user
  belongs_to :game
  validates :game, uniqueness: true
end
