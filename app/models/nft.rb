class Nft < ApplicationRecord

    validates :name,  presence: true
    validates :image ,  presence: true
    validates :description,  presence: true
    validates :price,  presence: true
    validates :for_sale,  presence: true


    validates :name, uniqueness: true
    validates :image, uniqueness: true
    
   

    belongs_to :user 
    has_many :reviews 
    has_many :users, through: :reviews
end
