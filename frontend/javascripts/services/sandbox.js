// function sortRecipes() {
//     let recipes = Recipe.all
//     if (sortButton().classList.contains('open')) {
//         sortButton().classList.remove('open')
//         recipes = recipes.sort((a, b) => {
//             if (a.totalCalories < b.totalCalories) {
//                 return -1
//             }
//             else if (a.totalCalories > b.totalCalories) {
//                 return 1
//             }
//             else {
//                 return 0
//             }
//         })
//     }
//     else {
//         sortButton().classList.add('open')
//         recipes = recipes.sort((a, b) => {
//             if (a.totalCalories < b.totalCalories) {
//                 return 1
//             }
//             else if (a.totalCalories > b.totalCalories) {
//                 return -1
//             }
//             else {
//                 return 0
//             }
//         })
//     }

//     recipesContainer().innerHTML = ""
//     recipes.forEach(recipe => {
//         recipe.renderRecipes()
//     })
// }



//FILTER

// function filterRecipes() {

//     const recipes = Recipe.all.filter(recipe => recipe.totalCalories >= 2000)

//     recipesContainer().innerHTML = ""
//     recipes.forEach(recipe => recipe.renderRecipes())
// }


