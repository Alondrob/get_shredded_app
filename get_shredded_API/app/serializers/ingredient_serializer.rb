class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :carb, :protein, :fat, :calories, :recipe_id
end
