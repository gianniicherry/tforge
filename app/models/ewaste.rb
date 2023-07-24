class Ewaste < ApplicationRecord
    belongs_to :user
    belongs_to :request
    has_many :products
    has_one :categories, through: products
end
