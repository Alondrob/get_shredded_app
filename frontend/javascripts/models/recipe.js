
class Recipe {

    // how the static all =[] works 
    static all = []

    constructor( {id, name, image}){
        this.id = id
        this.name = name
        this.image = image

        Recipe.all.push(this)
    }
    // render function is in charge of displaying the name of the screen, in this case recipe name
    render() {
        const div = document.createElement('div')
        div.id = `recipe-${this.id}`
        div.classList.add('recipe')
        div.innerHTML = `
            <img src="${this.image}" alt="${this.name}" width="500" />
            <h3> <span data-recipe-id="${this.id}" class="recipe-name"> ${this.name} </span> </h3>
            <button type="button" data-recipe-id="${this.id}" class="add-ingredient-button"> Add Ingredient </button>
            <button type="button" data-recipe-id="${this.id}" class="delete-recipe-button"> Delete Recipe</button>
            <button type="button" data-recipe-id="${this.id}" class="add-review-button"> Write A Review </button>
            <button type="button" data-recipe-id="${this.id}" 
            class="get-review-button"> Get Reviews </button>
            <div class="reviews-container"></div>
            <div class="ingredients-container"></div>
            


        `
        recipesContainer().append(div)
        const span = document.querySelector(`#recipe-${this.id} .recipe-name`)
        span.addEventListener('click', Recipe.toggle)
        div.querySelector('.add-ingredient-button').addEventListener('click', this.addForm)
        div.querySelector('.delete-recipe-button').addEventListener('click', RecipeApi.delete)
        div.querySelector('.get-review-button').addEventListener('click', ReviewApi.fetchAll)
        div.querySelector('.add-review-button').addEventListener('click', this.addReviewForm)
        
        
    }

        addForm(event) {
            const recipeId = event.target.dataset.recipeId
            const container = document.querySelector(`#recipe-${recipeId}`)
            const formContainer = document.createElement('div')
            // we create classlist on formContainer variable to add class to an element
            // in order to target it , targeting it to manipualte it 
            formContainer.classList.add("form-container")
            if (container.querySelector('.new-ingredient-form')){
                return
            }
            formContainer.innerHTML = `
                <form class="new-ingredient-form">
                <input type="hidden" class="recipe-id" value="${recipeId}">
                    <label for="name"> name: </label>
                    <input type="text" class="name" name="name">
                      <label for="weight"> Weight: </label>
                    <input type="number" step="0.01" class="weight" name="weight">
                      <label for="carb"> Carb: </label>
                    <input type="number" step="0.01" class="carb" name="carb">
                      <label for="protein"> Protein: </label>
                    <input type="number" step="0.01" class="protein" name="protein">
                    <label for="fat"> Fat: </label>
                    <input type="number" step="0.01" class="fat" name="fat">
                    <input type="submit">
                </form>
            `
            container.append(formContainer)
            formContainer.querySelector(".new-ingredient-form").addEventListener("submit", IngredientApi.create)
        }

        addReviewForm(event) {
            const recipeId = event.target.dataset.recipeId
            const container = document.querySelector(`#recipe-${recipeId}`)
            const formContainer = document.createElement('div')
            // we create classlist on formContainer variable to add class to an element
            // in order to target it , targeting it to manipualte it 
            formContainer.classList.add("form-container")
            if (container.querySelector('.new-review-form')) {
                return
            }
            formContainer.innerHTML = `
                <form class="new-review-form">
                <input type="hidden" class="recipe-id" value="${recipeId}">
                    <label for="content"></label>
                    <textarea  rows="4" cols="50" class="content" name="content"></textarea>
                    <input type="submit">
                </form>
            `
            container.append(formContainer)
            formContainer.querySelector(".new-review-form").addEventListener("submit", ReviewApi.create)
        }







        static toggle(event) {
            const span = event.target 
            const recipeId = span.dataset.recipeId
            if (span.classList.contains("open")){
                span.classList.remove("open")
                const ingredientsContainer = document.querySelector(`#recipe-${recipeId} .ingredients-container`)
                ingredientsContainer.innerHTML = " "
                 const formContainer = document.querySelector(`#recipe-${recipeId} .form-container`)
                 if (formContainer) {
                     formContainer.remove()
                 }
            }
            else{
                span.classList.add("open")
                IngredientApi.fetchAll(recipeId)
            }
        }

}
