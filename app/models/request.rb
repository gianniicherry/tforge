class Request < ApplicationRecord
    validates :address1, presence:true
    validates :city, presence:true
    validates :state, presence:true
    validates :zip, length: { is: 5 }
    validates :user_id, presence:true
    
    belongs_to :user
    has_many :ewastes
    has_many :categories, through: :ewastes
end
