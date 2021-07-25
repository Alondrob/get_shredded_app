class IngredientsController < ApplicationController

    def index
        recipe = Recipe.find(params[:recipe_id])
        render json: recipe.ingredients
    end
    

    def create
        ingredient = Ingredient.create(ingredient_params)
        if !ingredient.persisted?
            puts ingredient.errors.full_messages
            byebug
        end
        render json: ingredient
    end

    def update
            ingredient = Ingredient.find(params[:id])
            ingredient.update(ingredient_params)
            render json: ingredient
    end

     def destroy
        ingredient = Ingredient.find(params[:id])
        ingredient.destroy
        render json: {}
    end
    
    private

    def ingredient_params
        params.require(:ingredient).permit(
            :name, :weight, :carb, :protein, :fat, :recipe_id
        )
    end



end
