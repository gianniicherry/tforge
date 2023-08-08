class Brand < ApplicationRecord
    belongs_to :category
    has_many :ewastes
    has_many :products
end
