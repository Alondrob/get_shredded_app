class Ingredient < ApplicationRecord

    belongs_to :recipe

    validates :name, :weight, :carb, :protein, :fat, presence: true
    validate :macros_total_one_hundred

    def calories
        # 100 0.2 protein 0.5 carbs 0.3 fat
        # 0.2*100*4 + 0.5*100*4 + 0.3 *100 * 9
        (self.weight * self.carb * 4) + (self.weight * self.protein * 4) + (self.weight * self.fat * 9)
    end

    private
    def macros_total_one_hundred
        if (self.carb + self.protein + self.fat).round(6) != 1.0
            errors.add(:base, "The macros should always add up to 100%")
        end
    end
end

# weight = 200
# carb = 0.4
# fat = 0.5
# protein = 0.1

# (.4 * 200 * 4) + .5*200*9 +.1*200*4
