# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Recipe.destroy_all
Ingredient.destroy_all
Review.destroy_all

recipe = Recipe.create(name: 'spaghetti bolognese')
ingredients = Ingredient.create(name: 'Ground beef', weight: 70, carb: 0.05, protein: 0.65, fat: 0.30, recipe_id: recipe.id)
ingredients = Ingredient.create(name: 'Spaghetti', weight: 200, carb: 0.85, protein: 0.10, fat: 0.05, recipe_id: recipe.id)
review = Review.create(content: 'Great Dish!!', recipe_id: recipe.id)