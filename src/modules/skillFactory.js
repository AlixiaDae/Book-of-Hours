const skillFactory = (name, principles, wisdoms, attunables) => {
    return { name, principles, wisdoms, attunables }
}

const anbary = skillFactory("Anbary and Lapidary", ["Sky", "Forge"], ["Horomachistry", "Ithastry"], ["Fet", "Phost"])
const applebright = skillFactory("Applebright Euphonies", ["Sky", "Grail"], ["Bosk", "Illumination"], ["Ereb", "Mettle"])
const auroral = skillFactory("Auroral Contemplations", ["Lantern", "Edge"], ["Illumination", "Nyctodromy"], ["Phost", "Fet"])
const bells = skillFactory("Bells and Brazieries", ["Forge", "Sky"], ["Horomachistry", "Ithastry"], ["Mettle", "Wist"])
const coil = skillFactory("Coil and Chasm", ["Scale", "Nectar"], ["Nyctodromy", "Skolekosophy"], ["Shapt", "Ereb"])
const desires = skillFactory("Desires and Dissolutions", ["Grail", "Moon"], ["Bosk", "Horomachistry"], ["Ereb", "Mettle"])
const hammer = skillFactory("Disciplines of the Hammer", ["Edge", "Forge"], ["Illumination", "Nyctodromy"], ["Mettle", "Shapt"])
const scar = skillFactory("Disciplines of the Scar", ["Edge", "Lantern"], ["Hushery", "Illumination"], ["Triss", "Phost"])
const door = skillFactory("Door and Wall", ["Knock", "Forge"], ["Horomachistry", "Nyctodromy"], ["Fet", "Shapt"])
const drums = skillFactory("Drums and Dances", ["Heart", "Nectar"], ["Bosk", "Horomachistry"], ["Heart", "Mettle"])
const inviolable = skillFactory("Edicts Inviolable", ["Heart", "Moon"], ["Horomachistry", "Preservation"], ["Mettle", "Chor"])
const liminal = skillFactory("Edicts Liminal", ["Moth", "Knock"], ["Nyctodromy", "Skolekosophy"], ["Fet", "Ereb"])
const martial = skillFactory("Edicts Martial", ["Moon", "Edge"], ["Horomachistry", "Illumination"], ["Mettle", "Phost"])
const fur = skillFactory("Furs and Feathers", ["Sky", "Scale"], ["Bosk", "Nyctodromy"], ["Heart", "Fet"])


const skillList = [anbary,applebright, auroral, bells, coil, desires, hammer, scar, door, drums, inviolable, liminal, martial, fur]

export default skillList