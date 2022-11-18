class RentalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id
  has_one :user
  has_one :game
end
