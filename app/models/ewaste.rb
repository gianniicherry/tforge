class Ewaste < ApplicationRecord
    belongs_to :user
    belongs_to :request
    belongs_to :category
end
