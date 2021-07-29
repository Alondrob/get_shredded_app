walkthrough of recipeApi

RecipeApi talks to the backend => rails

lines 3-10
fetching the rails data through the url

then storing the data that we got from it on the variable res inside 
(res => res.json())  then after

we iterate over the array of recipes by calling recipes.forEach()

<!-- question: -->

where do the recipes var come from and what does it store?

=> itereating over the recipes and assiging recipeData(like a var inside a pipe in ruby)
we create with this variable an object  that we store in a const var recipe 

=> then we call the render function on this object