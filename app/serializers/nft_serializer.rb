class NftSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :price, :for_sale
end
