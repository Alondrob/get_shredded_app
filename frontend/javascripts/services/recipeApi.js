
class RecipeApi {
    static fetchAll() {
        fetch('http://127.0.0.1:3000/receipes')
        .then(res => res.json())
            .then(recipes => recipes.forEach(recipeData => {
                const recipe = new Recipe(recipeData)
                recipe.render()
            }))
    }
}

  