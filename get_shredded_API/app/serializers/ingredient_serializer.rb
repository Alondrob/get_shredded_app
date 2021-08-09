class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :carb, :protein, :fat, :calories, :recipe_id, :time


  def time
    Time.use_zone("America/New_York"){object.created_at.strftime("%m-%d-%Y")}
  end

end
