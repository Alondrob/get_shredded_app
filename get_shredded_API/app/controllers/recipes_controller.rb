class RecipesController < ApplicationController

    def index
        recipes = Recipe.includes(:ingredients)
        render json: recipes
    end

    def create
        recipe = Recipe.create(recipe_params)
        render json: recipe
    end

    def destroy
        recipe = Recipe.find(params[:id])
        recipe.destroy
        render json: {}
    end



    private
    
    def recipe_params
        params.require(:recipe).permit(:name, :image)
    end
end
