class Recipe < ApplicationRecord
    
    has_many :ingredients, dependent: :destroy
    has_many :reviews, dependent: :destroy

    validates :name, presence: true

    def total_calories
        self.ingredients.map {|ingredient| ingredient.calories}.sum
    end

end
