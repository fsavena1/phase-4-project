class Nft < ApplicationRecord
    validates :name, :image , :description, :price, presence: true
    validates :price, numericality: {greater_than: 0}
   
    validates :name, :image, uniqueness: true
    
    belongs_to :user 
    has_many :reviews 
    has_many :users, through: :reviews
end
