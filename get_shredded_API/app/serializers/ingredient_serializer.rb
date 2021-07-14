class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :carb, :protein, :fat, :recipe_id
end
