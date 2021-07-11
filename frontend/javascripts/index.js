const recipesContainer = () => document.querySelector('#recipes-container')

document.addEventListener("DOMContentLoaded", () => {
    RecipeApi.fetchAll()
})