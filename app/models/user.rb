class User < ApplicationRecord
    validates :user_name, :email, :password,  presence: true
 
    validates :user_name, :email, uniqueness: true
   
    validates :password, length: {minimum: 4}

    has_many :reviews 
    has_many :nfts, through: :reviews
    has_many :nfts
    accepts_nested_attributes_for :nfts, :reviews
    
    has_secure_password 
end
