class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :platform, :rented, :image
end
