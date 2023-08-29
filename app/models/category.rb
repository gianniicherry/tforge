class Category < ApplicationRecord
    attribute :name, :string
    
    has_many :ewastes
    has_many :requests, through: :ewastes
end
