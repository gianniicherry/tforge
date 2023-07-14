class Ewaste < ApplicationRecord
    belongs_to :user
    belongs_to :category
    belongs_to :brand
    belongs_to :product
    has_many :requests, through: :users
end
