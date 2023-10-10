import Recipe from "./recipe.js";
import RecipeStorage from "./recipeStorage.js";
import Type from "./recipeType.js";
import RecipeBook from "./recipebook.js";

const recipeStorage = new RecipeStorage()

recipeStorage.addType(new Type("Devices"))
recipeStorage.addType(new Type("Materials"))

export default recipeStorage