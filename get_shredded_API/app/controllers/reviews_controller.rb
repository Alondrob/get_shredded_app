class ReviewsController < ApplicationController

    def index
        recipe = Recipe.find(params[:recipe_id])
        
        render json: recipe.reviews
    end



    def create
        review = Review.create(review_params)
        render json: review
    end

    def update
        review = Review.find(params[:id])
        review.update(review_params)
        render json: review
    end




    private

    def review_params
        params.require(:review).permit(:content, :recipe_id)
    end

end
