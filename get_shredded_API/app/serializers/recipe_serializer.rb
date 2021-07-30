class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :total_calories
end
