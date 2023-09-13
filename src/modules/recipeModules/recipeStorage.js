import Recipe from "./recipe.js"
import RecipeBook from "./recipebook.js"
import Type from "./recipeType.js"

export default class RecipeStorage {
    saveRecipes(data) {
        localStorage.setItem("recipeStorage", JSON.stringify(data))
    }
    getRecipesMenu() {
        const recipeStorage = Object.assign(
            new RecipeBook(),
            JSON.parse(localStorage.getItem("recipeStorage"))
        )
        
        recipeStorage.setTypes(
            recipeStorage.getTypes()
            .map(type => Object.assign(
                new Type(), type
            ))
        )

        recipeStorage.getTypes()
        .forEach(type => 
            type.setRecipes(
                type.getRecipes().map(
                    recipe => Object.assign(new Recipe, recipe)
                )
            ))
        return recipeStorage
    }

    addType(typeObject) {
        const recipeStorage = this.getRecipesMenu()
        recipeStorage.addType(typeObject)
        this.saveRecipes(recipeStorage)
    }

    deleteType(typeName) {
        const recipeStorage = this.getRecipesMenu()
        recipeStorage.deleteType(typeName)
        this.saveRecipes(recipeStorage)
    }

    addRecipe(typeName, recipeObject) {
        const recipeStorage = this.getRecipesMenu()
        recipeStorage.getType(typeName).addRecipe(recipeObject)
        this.saveRecipes(recipeStorage)
    }

    deleteRecipe(typeName, recipeName) {
        const recipeStorage = this.getRecipesMenu()
        recipeStorage.getType(typeName).deleteRecipe(recipeName)
        this.saveRecipes(recipeStorage)
    }
}