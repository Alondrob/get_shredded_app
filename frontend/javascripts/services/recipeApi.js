class RecipeApi {
    static fetchAll() {
        fetch('http://127.0.0.1:3000/recipes')
        .then(response => response.json())
         .then(recipes => recipes.forEach(recipeData => {
             
             const recipe = new Recipe(recipeData)
             recipe.renderRecipes()}
        
             ))
       
    }



    static create(event) 
    { 
        event.preventDefault()
        const form = event.target
        // const form = document.querySelector('#new-recipe-form')
        const data = {
            recipe: {
                name: form.querySelector(".name").value,
                image: form.querySelector(".image").value,
                instructions: form.querySelector(".instructions").value
            }
        }
        newRecipeForm().reset()
        fetch('http://127.0.0.1:3000/recipes', {
            method: 'post', 
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(recipeData => {
            const recipe = new Recipe(recipeData)
            recipe.renderRecipes()
        })
    }

        static delete(event) {
            const deleteButton = event.target
            const recipeId = deleteButton.dataset.recipeId 
            document.querySelector(`#recipe-${recipeId}`).remove()
            fetch(`http://127.0.0.1:3000/recipes/${recipeId}`, {
                method: 'delete'
            })
        }
        
}



