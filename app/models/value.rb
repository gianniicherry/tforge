class Value < ApplicationRecord
    belongs_to :request
    has_many :ewastes, through: :requests 
end
