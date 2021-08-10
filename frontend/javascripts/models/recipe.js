
class Recipe {

    // how the static all =[] works 
    static all = []

    constructor({ id, name, image, total_calories, instructions }) {
        this.id = id
        this.name = name
        this.image = image
        this.totalCalories = total_calories
        this.instructions = instructions

        Recipe.all.push(this)
    }
    // render function is in charge of displaying the name of the screen, in this case recipe name
    renderRecipes() {
        const divElm = document.createElement('div')
        divElm.id = `recipe-${this.id}`
        divElm.classList.add('recipe')
        divElm.innerHTML = `
           <h3 > 
                <span data-recipe-id="${this.id}" class="recipe-name">
                    ${this.name} => Calories:  ${this.totalCalories}
                </span>
            </h3>
          
        `
        if (this.image) {
            divElm.innerHTML += `<img src="${this.image}" alt="${this.name}"  class="recipe-image" /><br>`
            //call it a class and target it in the css
        }
        divElm.innerHTML += `
            
           
            <button type="button" data-recipe-id="${this.id}" class="add-ingredient-button"> 
                Add Ingredient
            </button>

            <button type="button" data-recipe-id="${this.id}" class="delete-recipe-button">
                Delete Recipe
            </button>

            <button type="button" data-recipe-id="${this.id}" class="add-review-button">
                 Write A Review 
            </button>

            <button type="button" data-recipe-id="${this.id}" class="get-review-button">
                Get Reviews
            </button>

            <button type="button" data-recipe-id="${this.id}" class="show-instructions-button">
                Instructions
            </button>

            <div class="reviews-container"></div>
            <!-- comment changed -->
            <div class="ingredients-container" > </div>
            <div class="instructions-container"></div>
            
            <!-- <div class="ingredients-container" style="display:none"></div> -->


        `
        recipesContainer().append(divElm)
        const spanElm = document.querySelector(`#recipe-${this.id} .recipe-name`)
        spanElm.addEventListener('click', Recipe.toggle)
        divElm.querySelector('.add-ingredient-button').addEventListener('click', this.addForm)
        divElm.querySelector('.delete-recipe-button').addEventListener('click', RecipeApi.delete)
        divElm.querySelector('.get-review-button').addEventListener('click', ReviewApi.fetchAll)
        divElm.querySelector('.add-review-button').addEventListener('click', this.addReviewForm)
        divElm.querySelector('.show-instructions-button').addEventListener('click', this.showInstructions)


    }

    addForm(event) {
        const recipeId = event.target.dataset.recipeId
        const container = document.querySelector(`#recipe-${recipeId}`)
        const formContainer = document.createElement('div')
        // we create classlist on formContainer variable to add class to an element
        // in order to target it , targeting it to manipualte it 
        formContainer.classList.add("form-container")
        if (container.querySelector('.new-ingredient-form')) {
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

    // GO BACK AFETR GOING OVER INGREDIENTS
    // Consider using CSS element.style.display = none / block
    // instead of innerHTML changes.
    static toggle(event) {
        const spanElm = event.target 
        const recipeId = spanElm.dataset.recipeId
        if (spanElm.classList.contains("open")){
            spanElm.classList.remove("open")
            const ingredientsContainer = document.querySelector(`#recipe-${recipeId} .ingredients-container`)
            ingredientsContainer.innerHTML = " "
             const formContainer = document.querySelector(`#recipe-${recipeId} .form-container`)
             if (formContainer) {
                 formContainer.remove()
             }
        }
        else{
            spanElm.classList.add("open")
            IngredientApi.fetchAll(recipeId)
        }
    }

 



    static findById(id) {
        return Recipe.all.find(recipe => recipe.id === parseInt(id))
    }


    showInstructions(event) {
        const recipeId = event.target.dataset.recipeId
        const recipe = Recipe.findById(recipeId)
        const recipeContainer = document.querySelector(`#recipe-${recipeId}`)
        const instructionsContainer = recipeContainer.querySelector('.instructions-container')
        if (instructionsContainer.classList.contains('open')) {
            instructionsContainer.classList.remove('open')
            instructionsContainer.innerHTML = ""
        } else {
            instructionsContainer.classList.add('open')
            instructionsContainer.innerHTML = `
                    <p class="recipe-instruction">
                        ${recipe.instructions} 
                    </p>
                `
        }


    }
}
