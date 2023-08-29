class Category < ApplicationRecord
    attribute :name, :string
    attribute :brand, :string
    attribute :weight, :float
    attribute :price, :integer

    has_many :ewastes
    has_many :requests, through: :ewastes
end
