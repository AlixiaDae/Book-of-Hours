import Recipe from "./recipe.js";
import RecipeStorage from "./recipeStorage.js";
import Type from "./recipeType.js";
import RecipeBook from "./recipebook.js";

const recipeStorage = new RecipeStorage()

function addRecipe(type, name, aspect, ingredients, skill, workstation, result, notes) {
    const newRecipe = new Recipe(name, aspect, ingredients,skill, workstation, result, notes)
    recipeStorage.addRecipe(type, newRecipe)
}
recipeStorage.addType(new Type("Devices"))
recipeStorage.addType(new Type("Materials"))

export default recipeStorage