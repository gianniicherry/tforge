class Category < ApplicationRecord
    
    
    
    has_many :products
    has_many :ewastes, through: :products
    
end
