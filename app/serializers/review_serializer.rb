class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :likes, :user
  has_one :user
  has_one :nft
end
