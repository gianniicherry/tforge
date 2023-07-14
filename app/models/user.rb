class User < ApplicationRecord
    has_many :ewastes
    has_many :requests, through: :ewastes
end
