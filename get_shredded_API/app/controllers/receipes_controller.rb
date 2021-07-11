class ReceipesController < ApplicationController

    def index
        receipes = Receipe.all
        render json: receipes
    end
end
