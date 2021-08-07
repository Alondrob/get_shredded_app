
class IngredientApi {

    static fetchAll(recipeId) {
        fetch(`http://127.0.0.1:3000/recipes/${recipeId}/ingredients`)
        .then(res => res.json())
        .then(ingredients => ingredients.forEach(ingredientData => {
            const ingredient = new Ingredient(ingredientData)
            // console.log(ingredient)
            ingredient.renderIngredient()
        }))

    }
    
    static create(event) {
        event.preventDefault()
        const form = event.target
        const data = {
            ingredient: {
                name: form.querySelector(".name").value,
                recipe_id: form.querySelector(".recipe-id").value,
                weight: form.querySelector(".weight").value,
                carb: form.querySelector(".carb").value,
                protein: form.querySelector(".protein").value,
                fat: form.querySelector(".fat").value
            }
        }
        form.reset()
        fetch("http://127.0.0.1:3000/ingredients", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json())
            .then(ingredientData => {
                const ingredient = new Ingredient(ingredientData)
                ingredient.render()
            } )
    }
    static delete(event) {
        const deleteButton = event.target
        const ingredientId = deleteButton.dataset.ingredientId
        document.querySelector(`#ingredient-${ingredientId}`).remove()
        fetch(`http://127.0.0.1:3000/ingredients/${ingredientId}`, {
            method: 'delete'
        })
    }
    static update(event) {

        event.preventDefault()
      
        const form = event.target
        const ingredientId = form.dataset.ingredientId
        const data = {
            ingredient: {
                name: form.querySelector(".name").value,
                recipe_id: form.querySelector(".recipe-id").value,
                weight: form.querySelector(".weight").value,
                carb: form.querySelector(".carb").value,
                protein: form.querySelector(".protein").value,
                fat: form.querySelector(".fat").value
            }
        }
        form.remove()
        fetch(`http://127.0.0.1:3000/ingredients/${ingredientId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(ingredientData => {
                const ingredient = Ingredient.findById(ingredientData.id)
                ingredient.set(ingredientData)
                ingredient.render()
            })

    }

    
}