class Rental < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :game, dependent: :destroy
  validates :game, uniqueness: true
end
