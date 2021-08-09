const recipesContainer = () => document.querySelector('#recipes-container')
const newRecipeForm = () => document.querySelector('#new-recipe-form')



document.addEventListener("DOMContentLoaded", () => {
    
    RecipeApi.fetchAll()
    newRecipeForm().addEventListener('submit', RecipeApi.create)

    
})




// recipeContainer holds all the recipes on the html page
// we defined recipes-container id in the html file and in index.js we are storing
// this node in a variable that we named recipesContainer that finds data by calling the js method querySelector on the page ( document)
// the data we get back contains all the elements inside this div/node

