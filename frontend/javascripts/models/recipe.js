
class Recipe {

    static all = []

    constructor( {id, name}){
        this.id = id
        this.name = name

        Recipe.all.push(this)

    }
    render() {
        const div = document.createElement('div')
        div.id = `recipe-${this.id}`
        div.classList.add('recipe')
        div.innerHTML = `
            <h3> ${this.name} </h3>
        `
        recipesContainer().append(div)
    }
}
{/* <div id="recipe-1" >
    <h3>Spaghettti</h3>
</div> */}
