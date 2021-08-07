class Review {

    static all = []

    constructor({ id, content, recipe_id }) {

        this.id = id
        this.content = content
        this.recipeId = recipe_id


        Review.all.push(this)

    }


    render() {
        let div
        if (document.querySelector(`#review-${this.id}`)) {
            document.querySelector(`#review-${this.id}`).innerHTML = ""
            div = document.querySelector(`#review-${this.id}`)

        }
        else {
            div = document.createElement('div')
            div.id = `review-${this.id}`
            div.classList.add('review')
        }

        const container = document.querySelector(`#recipe-${this.recipeId} .reviews-container`)
        div.innerHTML = `
           <p>  ${this.content}&nbsp;&nbsp; 
                <button data-review-id="${this.id}" class="edit-review-button"> 
                    Edit Review 
                </button>
           </p>
       
           <div class="edit-form-container"> </div>
        
        `
        if (!document.querySelector(`#review-${this.id}`)) {
            // debugger
            container.append(div)
        }

      

        div.querySelector(".edit-review-button").addEventListener('click', Review.edit)
    }
    static edit(event) {
        const reviewId = event.target.dataset.reviewId
        const review = Review.findById(reviewId)
        review.renderEditForm()
    }

    static findById(id) {
        return Review.all.find(review => review.id === parseInt(id))
    }

    renderEditForm() {
        const editFormContainer = document.querySelector(`#review-${this.id} .edit-form-container`)
        editFormContainer.innerHTML = `
            <form class="edit-review-form" data-review-id="${this.id}">
                 <input type="hidden" class="recipe-id" value="${this.recipeId}">
                    <label for="content"> </label>
                    <textarea  rows="4" cols="50" class="content" name="content"> ${this.content} </textarea>
                    <input type="submit"/>
            </form>
           `
        const editReviewForm = editFormContainer.querySelector(".edit-review-form")
        editFormContainer.addEventListener("submit", ReviewApi.update)
    }

    set ({id, content, recipe_id}) {

        this.id = id
        this.content = content
        this.recipeId = recipe_id
    }
}
