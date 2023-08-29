class Category < ApplicationRecord
    attribute :name, :string
    attribute :brand, :string

    has_many :ewastes
    has_many :requests, through: :ewastes
end
