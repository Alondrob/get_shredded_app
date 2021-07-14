
class IngredientApi {

    static fetchAll(recipeId) {
        fetch(`http://127.0.0.1:3000/recipes/${recipeId}/ingredients`)
        .then(res => res.json())
        .then(ingredients => ingredients.forEach(ingredientData => {
            const ingredient = new Ingredient(ingredientData)
            ingredient.render()
        }))

    }       
}