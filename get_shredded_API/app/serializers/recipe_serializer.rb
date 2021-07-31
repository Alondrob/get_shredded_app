class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :instructions, :total_calories
end
