class Category < ApplicationRecord
    has_many :ewastes
    has_many :requests, through: :ewastes
end
