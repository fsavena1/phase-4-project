class Nft < ApplicationRecord

    validates :name, :image, :description, :price, :for_sale, presence: true
    validates :name, :image, :description, :price, :for_sale, uniqueness: true
   

    belongs_to :user 
    has_many :reviews 
    has_many :users, through: :reviews
end
