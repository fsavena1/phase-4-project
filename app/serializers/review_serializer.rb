class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :likes
  has_one :user
  has_one :nft
end
