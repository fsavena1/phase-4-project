class User < ApplicationRecord
    validates :user_name, :password_digest, presence: true
    validates :user_name, :email, uniqueness: true
    validates :password_digest, numericality: {:greater_than_or_equal_to 4}




    has_many :reviews 
    has_many :nfts, through: :reviews
    has_many :nfts
    accepts_nested_attributes_for :nfts, :reviews
    
    has_secure_password 
end
