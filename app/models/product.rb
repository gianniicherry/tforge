class Product < ApplicationRecord
    has_many :ewastes
    belongs_to :category
    
end
