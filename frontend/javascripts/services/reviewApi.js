
class ReviewApi {

    static fetchAll(event) {
        const recipeId = event.target.dataset.recipeId
        fetch(`http://127.0.0.1:3000/recipes/${recipeId}/reviews`)
            .then(res => res.json())
            .then(reviews => reviews.forEach(reviewData => {
                const review = new Review(reviewData)
                // console.log(ingredient)
                review.render()
            }))   
    }
    static create(event) {
        event.preventDefault()
        const form = event.target
        const data = {
            review: {
                content: form.querySelector(".content").value,
                recipe_id: form.querySelector(".recipe-id").value
            }
        }
        form.remove()
        fetch("http://127.0.0.1:3000/reviews", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(reviewData => {
                const review = new Review(reviewData)
                review.render()
            })}


    static update(event) {
        event.preventDefault()
        const form = event.target
        const reviewId = form.dataset.reviewId
        const data = {
            review: {
                content: form.querySelector(".content").value,
                recipe_id: form.querySelector(".recipe-id").value
            }
        }
        form.remove()
        fetch(`http://127.0.0.1:3000/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(reviewData => {
                const review = Review.findById(reviewData.id)
                review.set(reviewData)
                review.render()
            })
    }

}