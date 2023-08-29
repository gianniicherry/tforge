class Category < ApplicationRecord
    attribute :name, :string
    attribute :brand, :string
    attribute :weight, :float

    has_many :ewastes
    has_many :requests, through: :ewastes
end
