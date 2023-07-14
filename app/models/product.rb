class Product < ApplicationRecord
    has_many :ewastes
    belongs_to :brand
    
end
