const recipeFactory = (type, name, aspect, ingredients, skill, workstation, result) => {
    return { type, name, aspect, ingredients, skill, workstation, result}
}

//Beverages
const tisane = recipeFactory("Beverages", "Witching Tisane", "Grail", "N/A", ["Orchids and Narcotics", "Leaves and Thorns", "Desires and Dissolutions", "The Great Signs and the Great Scars", "Sea Stories"], "Any", ["Heart", "2 Grail"])
const cordials = recipeFactory("Beverages", "Thirza's Cordials", "Nectar", "N/A", ["Herbs and Infusions", "Coil and Chasm", "Spices and Savours", "Stone Stories",
"Orchids and Narcotics"], "Any", ["2 Moth", "2 Grail"])
const eigengrau = recipeFactory("Beverages", "Eigengrau", "Winter", "N/A", ["Auroral Contemplations", "Sights and Sensations",  "Quenchings and Quellings", "Inks of Containment", "Maggephene Mysteries", "Pearl and Tide"], "Any", ["Winter", "Moon"])
const rubywise = recipeFactory("Beverages", "Rubywise Ruin", "Grail", "Flower", ["Desires and Dissolutions", "Orchids and Narcotics", "Applebright Euphonies", "Leaves and Thorns"], ["Glassware", "Malachite", "Knot", "Calicite", "Dispensary", "Kitchens"], ["2 Rose", "2 Moth", "2 Nectar", "2 Heart", "4 Grail"])
const solomon = recipeFactory("Beverages", "Solomon's Preparation", "Winter", "Flower", ["Maggephene Mysteries", "Edicts Inviolable", "Sights and Sensations", "Ragged Crossroads", "Quenchings and Quellings", "Inks of Containment"], ["Glassware", "Malachite", "Knot", "Calicite", "Dispensary", "Kitchens"], ["Moth", "Moon", "4 Winter"])
const leathy = recipeFactory("Beverages", "Leathy", "Nectar", "N/A", ["Rites of the Roots", "Herbs and Infusions", "Insects and Nectars", "Orchids and Narcotics", "Inks of Containment"], "Any", ["2 Scale", "2 Nectar", "2 Grail", "4 Moth"])
const ascite = recipeFactory("Beverages", "Sacrament Ascite", "Knock", "Glassfinger Toxin", ["Serpents and Venoms", "Glassblowing and Vesselcrafting", "Door and Wall", "Solutions and Separations", "Horns and Ivories", "Edicts Liminal", "Stone Stories(with any liquid)"], ["Kitchen Gaol", "Glassware"], ["6 Knock"])
const calcite = recipeFactory("Beverages", "Sacrament Calcite", "Grail", "Rubywise Ruin", ["Orchids and Narcotics", "Applebright Euphonies", "Leaves and Thorns", "Sea Stories", "Tridesma Hiera"], ["Kitchens", "Glassware", "Chrysalis", "Dispensary", "Nocturnary"], "6 Grail")
const malachite = recipeFactory("Beverages", "Sacrament Malachite", "Nectar", "Pyrus Auricalcinus", ["Drums and Dances", "Spices and Savours", "Leaves and Thorns", "Rites of the Roots", "Herbs and Infusions", "Coil and Chasm"], "Kitchens", "6 Nectar")
const serpent = recipeFactory("Beverages", "Serpent-Milk", "Edge", "Perinculate", ["Sharps", "Meniscate Reflections", "Disciplines of the Scar", "Serpents and Venoms", "Sickle and Eclipse"], ["Chrysalis", "Foundry"], ["2 Knock", "3 Scale", "6 Edge"])
const skinshuck = recipeFactory("Beverages", "Skinshuck Mead", "Moth", "Honey", ["Solutions and Separations", "Edicts Liminal", "Sacra Limiae", "Rites of the Roots", "Resurgences and Emergences(cuckoo honey)", "Transformations and Liberations(cuckoo honey)", "Insects and Nectar(cuckoo honey)"], "Kitchens", ["2 Scale", "2 Nectar", "2 Heart", "6 Moth"])

//Inks
const yewgall = recipeFactory("Inks", "Yewgall Ink", "Nectar", "N/A", ["Rites of the Roots", "Insects and Nectars", "Leaves and Thorns", "Putrefactions and Calcinations"], "Any", ["2 Nectar"])
const perhibiate = recipeFactory("Inks", "Perhibiate", "Heart", "N/A", ["Stitching and Binding", "Weaving and Knotworking", "Inks of Power"], "Any", ["Winter", "2 Lantern", "2 Scale", "2 Heart"])
const stargall = recipeFactory("Inks", "Stargall Ink", "Sky", "N/A", ["Inks of Power", "Inks of Revelation", "Inks of Containment"], "Any", "2 Sky")
const catwink = recipeFactory("Inks", "Catwink", "Moon", "N/A", ["Inks of Containment", "Sickle and Eclipse", "Sand Stories", "Putrefactions and Calcinations", "Edicts Inviolable"], "Any", ["2 Moon", "2 Scale"])
const perinculate = recipeFactory("Inks", "Perinculate", "Edge", "Leaf", ["Sickle and Eclipse", "Inks of Power", "Edicts Martial", "Disciplines of the Scar", "Putrefactions and Calcinations"], ["Kitchens", "Glassware"], ["4 Edge", "4 Scale"])
const asimel = recipeFactory("Inks", "Asimel", "Moon", "Liquid", ["Inks of Revelation", "Putrefactions and Calcinations", "Sea Stories", "Ouranoscopy", "Pearl and Tide"], ["Chrysalis", "Dispensary", "Foundry", "Nocturnary"],["3 Knock", "5 Moon"])
const houndsgall = recipeFactory("Inks", "Houndsgall", "Scale", "Living Relic", ["Inks of Containment", "Path and Pilgrim", "Horns and Ivories", "Pentiments and Precursors"], ["Rowenarium", "Ascite", "Malachite", "Knot", "Calicite", "Catacombs", "Januarius", "Madrugad", "Watchman", "Solar", "Spire", "Tower-top"], ["2 Heart", "5 Scale"])
const ashartine = recipeFactory("Inks", "Ashartine", "Lantern", "Ichor Vitreous", ["Pyroglyphics", "Watchman's Paradoxes", "Glaziery and Lightsmithing", "Anbary and Lapidary", "Glassblowing and Vesselcrafting"], ["Glassware"], ["2 Sky", "6 Lantern"])
const marakat = recipeFactory("Inks", "Marakat", "Nectar", "Leathy", ["Insects and Nectars", "Inks of Power", "Tridesma Hiera"], ["Chrysalis", "Dispensary", "Kitchens", "Foundry", "Nocturnary", "Cage", "Calicite"], ["7 Grail", "7 Knock", "7 Nectar"])
const nillycant = recipeFactory("Inks", "Nillycant", "Winter", ["Solomon's Preparation", "Glassfinger Toxin(with Ragged Crossroads)"], ["Inks of Containment", "Sights and Sensations", "Ragged Crossroads"], ["Hearth: Hall of Voices", "Calicite", "Glassware", "Dispensary", "Foundry", "Nocturnary"], ["7 Scale", "7 Winter", "7 Edge"])
const orpiment = recipeFactory("Inks", "Orpiment Exultant", "Forge", "Iotic Essence", ["Transformations and Liberations", "Inks of Power", "Anbary and Lapidary"], ["Foundry", "Glassware", "Condignator", "Oubliette Containment", "Kitchen Gaol"], ["7 Heart", "7 Sky", "7 Forge"])
const porphyrine = recipeFactory("Inks", "Porphyrine", "Rose", "Ichor Auroral", ["Auroral Contemplations", "Inks of Revelation", "Inks of Power", "Pearl and Tide", "Sand Stories"], ["Glassware", "Rowenarium", "Loggia"], ["7 Knock", "7 Moon", "7 Rose"])
const uzult = recipeFactory("Inks", "Uzult", "Lantern", "Xanthotic Essence", ["Inks of Revelation", "Sacra Solis Invicti", "Watchman's Paradoxes", "Glaziery and Lightsmithing", "Anbary and Lapidary"], ["Glassware", "Dispensary", "Foundry"], ["7 Lantern", "7 Moth", "7 Sky"])

const recipeList = [tisane, cordials, eigengrau, rubywise, yewgall, solomon, leathy, ascite, calcite, malachite, serpent, skinshuck, perhibiate, stargall, catwink, perinculate, asimel, houndsgall, ashartine, marakat, nillycant, orpiment, porphyrine, uzult]
export default recipeList