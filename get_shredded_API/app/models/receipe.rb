class Receipe < ApplicationRecord
    
    has_many :ingredients, dependent: :destroy
    has_many :reviews, dependent: :destroy

    validates :name, presence: true

end
