class RequestSerializer < ActiveModel::Serializer
  attributes :id, :address1, :address2, :city, :state, :zip

  has_many :ewastes
  def ewastes
    object.ewastes.map do |ewaste|
      ewaste_hash = ewaste.attributes
      ewaste_hash[:category] = ewaste.category.attributes
      ewaste_hash
    end
  end
end
