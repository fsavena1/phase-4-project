class User < ApplicationRecord
    has_many :reviews 
    has_many :nfts, through: :reviews 
    
    has_secure_password 
end
