class Ingredient < ApplicationRecord

    belongs_to :receipe

    validates :name, :weight, :carb, :protein, :fat, presence: true
    validate :macros_total_one_hundred

    private
    def macros_total_one_hundred
        if self.carb + self.protein + self.fat != 1.0
            errors.add(:base, "The macros should always add up to 100%")
        end
    end
end