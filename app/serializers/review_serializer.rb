class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :likes, :user_id
  has_one :user
  has_one :nft
end
