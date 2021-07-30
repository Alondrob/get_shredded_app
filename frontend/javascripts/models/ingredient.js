
class Ingredient{

    static all = []

    constructor( {id, name, weight, carb, protein, fat, calories, recipe_id}) {
        this.id = id
        this.name = name
        this.weight = weight
        this.carb = carb
        this.protein = protein
        this.fat = fat
        this.calories = calories
        this.recipeId = recipe_id

        Ingredient.all.push(this)
    }

    render() {
        let div
        if (document.querySelector(`#ingredient-${this.id}`)){
            document.querySelector(`#ingredient-${this.id}`).innerHTML = ""
            div = document.querySelector(`#ingredient-${this.id}`)
            
        }
        else {
            div = document.createElement('div')
            div.id = `ingredient-${this.id}`
            div.classList.add('ingredient')
        }



        const container = document.querySelector(`#recipe-${this.recipeId} .ingredients-container`)
        div.innerHTML = `
           <p> name: ${this.name}&nbsp;&nbsp; <button data-ingredient-id="${this.id}" class="edit-ingredient-button"> Edit Ingredient </button><button data-ingredient-id="${this.id}" class="delete-ingredient-button"> Remove Ingredient </button>
           
           </p>
           <p> weight: ${this.weight} </p>
           <p> carb: ${this.carb} </p>
           <p> protein: ${this.protein} </p>
           <p> fat: ${this.fat} </p>
           <div class="edit-form-container"> </div>
        
        `
        if (!document.querySelector(`#ingredient-${this.id}`))
             {
            container.append(div)
       }
           
        div.querySelector(".delete-ingredient-button").addEventListener('click', IngredientApi.delete)

        div.querySelector(".edit-ingredient-button").addEventListener('click', Ingredient.edit )
        
        
    }
        renderEditForm() {
           const editFormContainer = document.querySelector(`#ingredient-${this.id} .edit-form-container`)
           editFormContainer.innerHTML = `
            <form class="edit-ingredient-form" data-ingredient-id="${this.id}">
                 <input type="hidden" class="recipe-id" value="${this.recipeId}">
                    <label for="name"> name: </label>
                    <input type="text" class="name" name="name" value="${this.name}"/>
                      <label for="weight"> Weight: </label>
                    <input type="number" step="0.01" class="weight" name="weight" value="${this.weight}"/>
                      <label for="carb"> Carb: </label>
                    <input type="number" step="0.01" class="carb" name="carb" value="${this.carb}"/>
                      <label for="protein"> Protein: </label>
                    <input type="number" step="0.01" class="protein" name="protein" value="${this.protein}"/>
                    <label for="fat"> Fat: </label>
                    <input type="number" step="0.01" class="fat" name="fat" value="${this.fat}"/>
                    <input type="submit"/>
            </form>
           `
           const editIngredientForm = editFormContainer.querySelector(".edit-ingredient-form")
           editFormContainer.addEventListener("submit", IngredientApi.update)
        }

        static findById(id) {
            return Ingredient.all.find(ingredient => ingredient.id === parseInt(id))
        }

    set({ id, name, weight, carb, protein, fat, calories, recipe_id }) {
            this.id = id
            this.name = name
            this.weight = weight
            this.carb = carb
            this.protein = protein
            this.fat = fat
            this.calories = calories 
            this.recipeId = recipe_id

        }

        static edit(event) {
            const ingredientId = event.target.dataset.ingredientId
            const ingredient = Ingredient.findById(ingredientId)
            ingredient.renderEditForm()
        }
}