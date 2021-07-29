class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :recipe_id
end
