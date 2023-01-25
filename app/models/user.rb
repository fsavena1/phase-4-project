class User < ApplicationRecord
    has_many :reviews 
    has_many :nfts, through: :reviews
    has_many :nfts
    accepts_nested_attributes_for :nfts, :reviews
    
    has_secure_password 
end
