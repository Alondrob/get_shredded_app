const recipesContainer = () => document.querySelector('#recipes-container')
const newRecipeForm = () => document.querySelector('#new-recipe-form')
document.addEventListener("DOMContentLoaded", () => {
    RecipeApi.fetchAll()
    newRecipeForm().addEventListener('submit', RecipeApi.create )
})