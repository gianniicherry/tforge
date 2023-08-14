class Ewaste < ApplicationRecord
    validates :name, presence:true
    validates :condition, presence:true
    validates :user_id, presence:true
    validates :request_id, presence:true
    validates :category_id, presence:true
    validate :acceptable_image
    
    belongs_to :user
    belongs_to :request
    belongs_to :category
    has_one_attached :image

    def acceptable_image
        return unless image.attached?
      
        unless image.blob.byte_size <= 3.megabyte
          errors.add(:image, "is too big")
        end
      end
    
end
