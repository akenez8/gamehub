class RentalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id, :day
  has_one :user
  has_one :game
end
