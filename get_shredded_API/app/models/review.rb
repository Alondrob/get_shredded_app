class Review < ApplicationRecord

    belongs_to :receipe
    validates :content, presence: true
end
