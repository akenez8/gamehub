class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :platform, :rented
end
