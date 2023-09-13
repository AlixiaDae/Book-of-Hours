export default class Type {
    constructor(name) {
        this.name = name
        this.recipes = []
    }

    setRecipes(recipes) {
        this.recipes = recipes
    }

    getRecipes() {
        return this.recipes
    }

    addRecipe(recipeObject) {
        if(this.recipes.find(recipe => recipe.name === recipeObject.name)) return
        this.recipes.push(recipeObject)
    }

    deleteRecipe(recipeName) {
        this.recipes = this.recipes.filter(recipe => recipe.name !== recipeName)
    }
}
