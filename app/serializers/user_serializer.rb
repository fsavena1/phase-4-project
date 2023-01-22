class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :first_name, :last_name, :email, :avatar
  has_many :reviews
  has_many :nfts, through: :reviews
end
