
class Ingredient{

    static all = []

    constructor( {id, name, weight, carb, protein, fat, recipe_id}){
        this.id = id
        this.name = name
        this.weight = weight
        this.carb = carb
        this.protein = protein
        this.fat = fat
        this.recipeId = recipe_id

        Ingredient.all.push(this)
    }

    render(){

        if (document.querySelector(`#ingredient-${this.id}`)){
            return
        }
        const container = document.querySelector(`#recipe-${this.recipeId} .ingredients-container`)
        const div = document.createElement('div')
        div.id = `ingredient-${this.id}`
        div.classList.add('ingredient')
        div.innerHTML = `
           <p> name: ${this.name} </p>
           <p> weight: ${this.weight} </p>
           <p> carb: ${this.carb} </p>
           <p> protein: ${this.protein} </p>
           <p> fat: ${this.fat} </p>
        
        `
            container.append(div)
        
    }
        
}