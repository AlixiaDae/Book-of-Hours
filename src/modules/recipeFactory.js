const recipeFactory = (type, name, aspect, ingredients, skill, workstation, result, notes = "") => {
    return { type, name, aspect, ingredients, skill, workstation, result, notes}
}

//Beverages
const tisane = recipeFactory("Beverages", "Witching Tisane", "Grail", "N/A", ["Orchids and Narcotics", "Leaves and Thorns", "Desires and Dissolutions", "The Great Signs and the Great Scars", "Sea Stories"], "Any", ["2 Grail", "Heart"])
const cordials = recipeFactory("Beverages", "Thirza's Cordials", "Nectar", "N/A", ["Herbs and Infusions", "Coil and Chasm",
"Spices and Savours", "Stone Stories",
"Orchids & Narcotics"], "Any", ["2 Moth", "2 Grail"])
const yewgall = recipeFactory("Inks", "Yewgall Ink", "Nectar", "N/A", ["Rites of the Roots", "Insects & Nectars", "Leaves & Thorns", "Putrefactions and Calcinations"], "Any", ["2 Nectar"])

const recipeList = [tisane, cordials, yewgall]
export default recipeList