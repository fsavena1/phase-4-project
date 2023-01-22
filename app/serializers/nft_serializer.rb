class NftSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :price, :for_sale
  belongs_to :user 
  has_many :reviews 
end
