class EwasteSerializer < ActiveModel::Serializer
  attributes :id, :name, :condition

  belongs_to :category 
end
