const recipesContainer = () => document.querySelector('#recipes-container')
const newRecipeForm = () => document.querySelector('#new-recipe-form')




document.addEventListener("DOMContentLoaded", () => 
{
    
    RecipeApi.fetchAll()
    newRecipeForm().addEventListener('submit', RecipeApi.create)
   
})




// function filterRecipes() {
//    Recipe.all.forEach(recipeCalories => 
//     { recipeCalories.totalCalories

//    const cal = recipeCalories.totalCalories

//    if cal > 2000
//    return cal

//    else
//    ""
   
// } 



// recipeContainer holds all the recipes on the html page
// we defined recipes-container id in the html file and in index.js we are storing
// this node in a variable that we named recipesContainer that finds data by calling the js method querySelector on the page ( document)
// the data we get back contains all the elements inside this div/node

// const month = [{ name: 'Jan', number: 1 }, { name: 'Dec', number: 12 }, { name: 'Oct', number: 10 }, { name: 'Mar', number: 3 }]
// var sortedMonths = month.sort(a, b => {
//     if (a.number < b.number) {
//         return -1
//     } else if (a.number > b.number) {
//         return 1
//     } else {
//         return 0
//     }
// })