import Storage from "./bookModules/storage.js";
import Book from "./bookModules/book.js";
import Library from "./bookModules/library.js";

const mainLibraryStorage = new Storage("mainLibrary");

const mainLibrary = new Library();

const bookArray = [
  new Book("The Ivory Book", "regret", "Quenchings and Quellings"),
  new Book("The Book of Cinders", "foresight", "Pyroglyphics"),
  new Book("A Journey to the Grove", "satisfaction", "Orchids and Narcotics"),
  new Book("A Light in the Inkwell", "revelation", "Inks of Revelation"),
  new Book(
    "The Locksmith's Dream: A Light Throught The Keyhole",
    "revelation",
    "Lockworks and Clockworks"
  ),
  new Book(
    "The Locksmith's Dream: Portions and Proportions",
    "confounding parable",
    "Lockworks and Clockworks"
  ),
  new Book(
    "The Locksmith's Dream: Stolen Reflections",
    "revelation",
    "Watchman's Paradoxes"
  ),
  new Book("The Locksmith's Dream: Trespasses", "impulse", "Edicts Liminal"),
  new Book("A Pale Lady and a Prince of Wine", "salt", "Sea Stories"),
  new Book("A Second Glory", "hindsight", "Snow Stories"),
  new Book("A Seventh Voice", "confounding parable", "Preliminal Meter"),
  new Book("A Shape In Smoke", "revelation", "Pyroglyphics"),
  new Book(
    "A true and complete accounting of the asclepian mysteries of the roots of the house",
    "impulse",
    "Weaving and Knotworking"
  ),
  new Book("A True History of Valentine Dewulf", "fear", "Furs and Feathers"),
  new Book(
    "Advice on Containment",
    "pattern",
    "Glassblowing and Vessel Crafting"
  ),
  new Book(
    "Against the Sisterhood of the Knot and the Foulness of their Depraved Customs",
    "intuition",
    "Sky Stories"
  ),
  new Book("Against Vitruvius", "pattern", "Lockworks and Clockworks"),
  new Book("An Exorcist's Field Manual", "contradiction", "Edicts Martial"),
  new Book("An Impertinent Vitulation", "satisfaction", "Leaves and Thorns"),
  new Book("An Introduction to Histories", "hindsight", "Snow Stories"),
  new Book("Annals of St Brandan's", "regret", "Inks of Containment"),
  new Book("As the Sun His Course", "contradiction", "Sickle and Eclipse"),
  new Book("Ascite Supplications", "impulse", "Stone Stories"),
  new Book("Bancroft Diaries", "foresight", "Pyroglyphics"),
  new Book("Black Nephrite", "fear", "Wolf Stories"),
  new Book(
    "By Their Marks Shall Ye Know Them",
    "pattern",
    "Surgeries and Exsanguinations"
  ),
  new Book("Calcite Supplications", "satisfaction", "Tridesma Hiera"),
  new Book(
    "Cardea's Delight",
    "pattern",
    "The Great Signs and the Great Scars"
  ),
  new Book("Chione at Abydos", "regret", "Snow Stories"),
  new Book("Collected Hush House Lectures", "intuition", "Sickle and Eclipse"),
  new Book("Colours in the Liver", "revelation", "Resurgences and Emergences"),
  new Book(
    "Commandments For the Preservation of All that Exists",
    "satisfaction",
    "Stitching and Binding"
  ),
  new Book("Cucurbit Prisoner Records 1927", "impulse", "Insects and Nectars"),
  new Book("Cucurbit Prisoner Records 1928", "salt", "Hill and Hollow"),
  new Book(
    "Damascene Traditions of the House of Lethe",
    "impulse",
    "Sacra Limiae"
  ),
  new Book("De Bellis Murorum", "contradiction", "Disciplines of the Scar"),
  new Book("De Horis Book 1", "impulse", "Rites of the Roots"),
  new Book("De Horis Book 2", "foresight", "Disciplines of the Hammer"),
  new Book("De Horis Book 3", "contradiction", "Disciplines of the Scar"),
  new Book(
    "A Catalogue of Uncharted Pleasures",
    "satisfaction",
    "Orchids and Narcotics"
  ),
  new Book("Each Flame His Fuel", "revelation", "Glaziery and Lightsmithing"),
  new Book(
    "The Elations of Limentinus",
    "pattern",
    "The Great Signs and the Great Scars"
  ),
  new Book("Ettery After", "hindsight", "Inks of Containment"),
  new Book("Eva's Treasury", "foresight", "Anbary and Lapidary"),
  new Book(
    "Exercises in the Continuity of Self",
    "hindsight",
    "Rhyme and Remembrance"
  ),
  new Book("Exorcism for Girls", "fear", "Sickle and Eclipse"),
  new Book("Fekri's Herbrary", "satisfaction", "Herbs and Infusions"),
  new Book("From History to Eternity", "intuition", "Inks of Revelation"),
  new Book("Glimmerings", "bittersweet certainty", "Sights and Sensations"),
  new Book("Gospel of Nicodemus", "revelation", "Sacra Solis Invicti"),
  new Book("Gospel of Zacchaeus", "a stolen secret", "Horns and Ivories"),
  new Book(
    "Honey: The Comprehensive Guide",
    "contradiction",
    "Insects and Nectars"
  ),
  new Book("Hunting Journals of Bryan Dewulf", "fear", "Furs and Feathers"),
  new Book("In the Malleary", "foresight", "Anbary and Lapidary"),
  new Book(
    "Inaam, Kapipiginlupir, Garkie, Cryppys",
    "foresight",
    "Transformations and Liberations"
  ),
  new Book("It Is Written", "confounding parable", "Inks of Power"),
  new Book("Journal of Thomas Dewulf", "salt", "Ouranoscopy"),
  new Book("Journal of Walter Dewulf", "foresight", "Door and Wall"),
  new Book("Just Verse", "pattern", "Preliminal Meter"),
  new Book("Key of Night", "fear", "Pentiments and Precursors"),
  new Book(
    "Kitling Ripe and the Moldywarp's Grave(and Other Stories)",
    "impulse",
    "Resurgences and Emergences"
  ),
  new Book("Kitling Ripe's Tasty Treats", "satisfaction", "Spices and Savours"),
  new Book("Lady Eva's Repose", "regret", "Rhyme and Remembrance"),
  new Book("Larquebine Codex", "salt", "Sea Stories"),
  new Book(
    "Letters from a Fugitive",
    "confounding parable",
    "Path and Pilgrim"
  ),
  new Book("Letters to Necessity", "revelation", "Inks of Revelation"),
  new Book("Malachite Supplications", "impulse", "Tridesma Hiera"),
  new Book(
    "Musgrave's Sketches",
    "bittersweet certainty",
    "Sights and Sensations"
  ),
  new Book(
    "Nyn's Cages(Bruges Text, Illuminated)",
    "hindsight",
    "Quenchings and Quellings"
  ),
  new Book("Oblations in Iron", "hindsight", "Inks of Containment"),
  new Book(
    "Observations on the Peacock Door",
    "contradiction",
    "Sickle and Eclipse"
  ),
  new Book(
    "Old Coppernose and the Softer Metal",
    "foresight",
    "Bells and Brazieries"
  ),
  new Book("On Imperfections", "pattern", "Glassblowing and Vesselcrafting"),
  new Book(
    "On Matthias and the Amethyst Imago: Loss",
    "a stolen secret",
    "Solutions and Separations"
  ),
  new Book(
    "On Matthias and the Amethyst Imago: Pursuit",
    "gossip",
    "Desires and Dissolutions"
  ),
  new Book("On Resonance", "foresight", "Bells and Brazieries"),
  new Book("On the White", "regret", "Quenchings and Quellings"),
  new Book(
    "On Thirstlies, Ivories and Lovelies",
    "impulse",
    "Resurgences and Emergences"
  ),
  new Book(
    "On What is Contained by Silver",
    "pattern",
    "Glassblowing and Vesselcrafting"
  ),
  new Book(
    "One Hundred And Eight",
    "confounding parable",
    "Pentiments and Precursors"
  ),
  new Book("One Thousand Threads", "fear", "Tridesma Hiera"),
  new Book(
    "Operations of a Certain Finality",
    "hindsight",
    "Putrefactions and Calcinations"
  ),
  new Book("Perugian Diaries", "cheerful ditty", "Strings and Songs"),
  new Book("Rapt in the King", "earth-sign", "Drums and Dances"),
  new Book("Seven Faces of Icarus", "fear", "Furs and Feathers"),
  new Book("Seven Shards", "hindsight", "Disciplines of the Hammer"),
  new Book(
    "Snare of the Tree: Collected Proverbs of Aunt Mopsy",
    "confounding parable",
    "Applebright Euphonies"
  ),
  new Book("Stolen Histories", "fear", "Coil and Chasm"),
  new Book("Sunrise Awakenings", "revelation", "Auroral Contemplations"),
  new Book(
    "The Alloy of the White Rose",
    "revelation",
    "Purifications and Exaltations"
  ),
  new Book("The Amalgam of the Red Rose", "foresight", "Meniscate Reflections"),
  new Book("The Barrowchild's Elegies", "regret", "Rhyme and Remembrance"),
  new Book("The Beekeeper's Ends", "impulse", "Insects and Nectars"),
  new Book("The Berrybook", "satisfaction", "Leaves and Thorns"),
  new Book(
    "The Black Book of Brittany",
    "bittersweet certainty",
    "Inks of Containment"
  ),
  new Book("The Book of Centipede", "intuition", "Sand Stories"),
  new Book("The Burning Woman", "foresight", "Transformations and Liberations"),
  new Book("The Carbonek Schism", "hindsight", "Sacra Limiae"),
  new Book("The Ceaseless Tantra", "impulse", "Weaving and Knotworking"),
  new Book("The Chandler's Wish", "foresight", "Inks of Revelation"),
  new Book("The Concursim Diaries", "intuition", "Path and Pilgrim"),
  new Book("The Crossing to Noon", "salt", "Sea Stories"),
  new Book("The Deaths of the Moon", "salt", "Snow Stories"),
  new Book("The Debate of Seven Cups", "impulse", "Solutions and Separations"),
  new Book(
    "The Devoured Tantra",
    "confounding parable",
    "Applebright Euphonies"
  ),
  new Book("The Fallen Cross", "regret", "Ouranoscopy"),
  new Book("The Fire Circle Tantra", "intuition", "Solutions and Separations"),
  new Book("The Five Letters on Memory", "regret", "Rhyme and Remembrance"),
  new Book("The Flayed Tantra", "storm", "Maggephene Mysteries"),
  new Book("The Geminiad 2", "satisfaction", "Pentiments and Precursors"),
  new Book("Green Jasper Tablet", "impulse", "Rites of the Roots"),
  new Book(
    "The High Traditions of the Noble Endeavour",
    "foresight",
    "Disciplines of the Hammer"
  ),
  new Book("The Hissing Key", "hindsight", "Serpents and Venoms"),
  new Book("The History of Inks", "intuition", "Inks of Power"),
  new Book("The Humours of a Gentleman", "gossip", "Sky Stories"),
  new Book(
    "The Incandescent Tantra",
    "foresight",
    "Transformations and Liberations"
  ),
  new Book(
    "The Instruments of the Heart",
    "cheerful ditty",
    "Drums and Dances"
  ),
  new Book(
    "The Intimations of Skin",
    "beguiling melody",
    "Desires and Dissolutions"
  ),
  new Book("The Iron Book", "foresight", "Disciplines of the Hammer"),
  new Book("The Kerisham Portolan", "gossip", "Sea Stories"),
  new Book("The Known Unknown Tantra", "revelation", "Watchman's Paradoxes"),
  new Book("The Leonine Tantra", "fear", "Edicts Martial"),
  new Book(
    "The Lion and the Glass",
    "revelation",
    "Glaziery and Lightsmithing"
  ),
  new Book("The Mirror of Melancthe", "solace", "Sights and Sensations"),
  new Book("The Moon's Egg", "confounding parable", "Pearl and Tide"),
  new Book("The Morphy Codex", "beguiling melody", "Tridesma Hiera"),
  new Book(
    "The Most Sorrowful End of the Lady Nonna",
    "impulse",
    "Herbs and Infusions"
  ),
  new Book(
    "The Orchid Transfigurations: A Birth",
    "satisfaction",
    "Resurgences and Emergences"
  ),
  new Book(
    "The Orchid's Transfigurations: A Feast",
    "intuition",
    "Desires and Dissolutions"
  ),
  new Book("The Other Eye of the Serpent", "pattern", "Anbary and Lapidary"),
  new Book("The Other Line", "confounding parable", "Preliminal Meter"),
  new Book("The Queen's Turn", "salt", "Hill and Hollow"),
  new Book("The Queens of the Rivers", "gossip", "Path and Pilgrim"),
  new Book("The Radical Measure", "pattern", "Preliminal Meter"),
  new Book("The Radical Measure(Glossed)", "pattern", "Preliminal Meter"),
  new Book(
    "The Raptures of Forculus",
    "pattern",
    "The Great Signs and the Great Scars"
  ),
  new Book("The Red Book of Brittany", "satisfaction", "Inks of Power"),
  new Book("The Republic of Teeth", "intuition", "Serpents and Venoms"),
  new Book(
    "The Rose of Nuriel",
    "satisfaction",
    "The Great Signs and Great Scars"
  ),
  new Book("The Rose of Waznei", "revelation", "Auroral Contemplations"),
  new Book("The Scar in the Sky", "regret", "Quenchings and Quellings"),
  new Book("The Secret Colors", "revelation", "Sickle and Eclipse"),
  new Book(
    "The Serenity of the Blackwood",
    "confounding parable",
    "Sacra Limiae"
  ),
  new Book("The Shadow in the Stair", "impulse", "Coil and Chasm"),
  new Book(
    "The Six Letters on Necessity",
    "foresight",
    "Transformations and Liberations"
  ),
  new Book(
    "The Skeleton Songs",
    "beguiling melody",
    "Resurgences and Emergences"
  ),
  new Book("The Sky, The Soul", "foresight", "Pyroglyphics"),
  new Book("The Sun's Lament", "fear", "Ragged Crossroads"),
  new Book(
    "The Temptations of Architecture",
    "a secret threshold",
    "Door and Wall"
  ),
  new Book("The Thirsting Tantra", "satisfaction", "Orchids and Narcotics"),
  new Book(
    "The Three and the Three(Kerisham Manuscript)",
    "intuition",
    "Edicts Inviolable"
  ),
  new Book(
    "The Three and the Three(Vatican Manuscript)",
    "intuition",
    "Edicts Inviolable"
  ),
  new Book("The Time of Division", "pattern", "Surgeries and Exsanguinations"),
  new Book("The Tripled Heart", "intuition", "Tridesma Hiera"),
  new Book(
    "The Twelve Letters on Consequence",
    "regret",
    "Putrefactions and Calcinations"
  ),
  new Book("The Twin Serpent Tantra", "pattern", "Edicts Liminal"),
  new Book("The Viennese Conundra", "fear", "Wolf Stories"),
  new Book(
    "The Vinzant Inscriptions",
    "foresight",
    "Transformations and Liberations"
  ),
  new Book("The White Book of Brittany", "hindsight", "Ragged Crossroads"),
  new Book("The Wind's Ruin", "beguiling melody", "Applebright Euphonies"),
  new Book("The Wonderful Shape", "satisfaction", "Tridesma Hiera"),
  new Book(
    "The World Does Not Weep",
    "hindsight",
    "Putrefactions and Calcinations"
  ),
  new Book(
    "Those Indignities Perpetrated by the Deceitful Fraternity of Obliviates",
    "contradiction",
    "Ragged Crossroads"
  ),
  new Book("Those Who Do Not Sleep", "storm", "Surgeries and Exsanguinations"),
  new Book("Three Flowers Hath the Tree", "gossip", "Leaves and Thorns"),
  new Book("Travelling at Night Vol 1", "impulse", "Edicts Liminal"),
  new Book("Travelling at Night Vol 2", "solace", "Sights and Sensations"),
  new Book("Travelling at Night Vol 3", "pattern", "Door and Wall"),
  new Book("Two Wombs, One Heart", "satisfaction", "Stitching and Binding"),
  new Book("Ud Rocashaas", "impulse", "Stone Stories"),
  new Book("Victory of Crowns", "contradiction", "Sharps"),
  new Book("Vinzant's Minglings", "foresight", "Bells and Brazieries"),
  new Book("Wainscot Histories", "contradiction", "Auroral Contemplations"),
  new Book(
    "Warming Draughts to Uplift the Heart",
    "impulse",
    "Herbs and Infusions"
  ),
  new Book("What Does Not Bark", "storm", "Edicts Inviolable"),
  new Book("World Despoil'd", "solace", "Maggephene Mysteries"),
  new Book("Ambrosial!", "impulse", "Spices and Savours"),
  new Book("Singlefoot Songs", "savage hymn", "Hill and Hollow"),
  new Book("Apollo and Marsyas", "storm", "Surgeries and Exsanguinations"),
  new Book("The Sea Does Not Regret", "salt", "Pearl and Tide"),
  new Book("The Treatise On Underplaces", "fear", "Horns and Ivories"),
  new Book(
    "The War of the Roads, 1451- 1551",
    "foresight",
    "Meniscate Reflections"
  ),
  new Book("A Manual for Departure", "a secret threshold", "Door and Wall"),
  new Book("An Almanac of Entrances", "a secret threshold", "Edicts Liminal"),
  new Book(
    "An Investigation of a Foundered Country",
    "a stolen secret",
    "Hill and Hollow"
  ),
  new Book("Book of Miah", "intuition", "Sand Stories"),
  new Book("Book of True Blood", "fear", "Meniscate Reflections"),
  new Book("Lake Fucino Recordings", "beguiling melody", "Drums and Dances"),
  new Book("Medusa's Lament", "fear", "Horns and Ivories"),
  new Book("Nyn's Cages(Avignon Text)", "hindsight", "Edicts Liminal"),
  new Book(
    "On Matthias and the Amethyst Imago: Transformation",
    "impulse",
    "Spices and Savours"
  ),
  new Book(
    "On the Matter and the Deeds of Serpents",
    "a secret threshold",
    "Edicts Liminal"
  ),
  new Book("Opening the Sky", "cheerful ditty", "Strings and Songs"),
  new Book("Opus Magnus Caeruleum", "foresight", "Pyroglyphics"),
  new Book("The Ascendant", "contradiction", "Edicts Martial"),
  new Book("The Geminiad 3", "beguiling melody", "Resurgences and Emergences"),
  new Book("The Road to Janus", "pattern", "Door and Wall"),
  new Book("The Rose of Hypatia", "solace", "Weaving and Knotworking"),
  new Book(
    "The Sun Disfigured",
    "numen: the sun's weakness",
    "Applebright Euphonies"
  ),
  new Book("The Tantra of Worms", "fear", "Coil and Chasm"),
  new Book(
    "Twenty-Six Enticements, Seven Torments",
    "impulse",
    "Resurgences and Emergences"
  ),
  new Book("Prophecies of Glory", "revelation", "Watchman's Paradoxes"),
  new Book("Letters to My Successor", "revelation", "Inks of Revelation"),
  new Book(
    "The Watchful Tantra",
    "revelation",
    "Purifications and Exaltations"
  ),
  new Book(
    "The Locksmith's Dream: Incursus",
    "confounding parable",
    "Glaziery and Lightsmithing"
  ),
  new Book("The Encircling Tantra", "fear", "Horns and Ivories"),
  new Book("De Motu Corporum Vetitorum", "storm", "Ouranoscopy"),
  new Book("Notes on Bindings", "solace", "Stitching and Binding"),
  new Book("Unhatched Hymns", "savage hymn", "Sacra Solis Invicti"),
  new Book("Sunset Celia and the End of Days", "foresight", "Sacra Limiae"),
  new Book("On the Winding Stair", "pattern", "Door and Wall"),
  new Book("The Open Head", "revelation", "Disciplines of the Scar"),
  new Book(
    "The Admonitory Automata Project",
    "foresight",
    "Lockworks and Clockworks"
  ),
  new Book("The Deeds of the Scarred Captain", "fear", "Sharps"),
  new Book(
    "The Account of Kanishk at the Spider's Door",
    "a stolen secret",
    "Sharps"
  ),
  new Book(
    "Kopralith Omphalos",
    "numen: weaving the world",
    "Weaving and Knotworking"
  ),
  new Book(
    "The Sevenfold Slaying of the Seven-Coiled",
    "fear",
    "Disciplines of the Scar"
  ),
  new Book(
    "The Turquoise Hand",
    "numen: that old lost music",
    "Pentiments and Precursors"
  ),
  new Book("In Memory of Gods", "hindsight", "Ragged Crossroads"),
  new Book(
    "Shuritic Book of Suns",
    "numen: the great counterfeit",
    "Sacra Solis Invicti"
  ),
  new Book("Recordings from the Althiban Abyss", "fear", "Stone Stories"),
  new Book("The Geminiad 1", "solace", "Weaving and Knotworking"),
  new Book("The Silver Book", "impulse", "Edicts Liminal"),
  new Book("The Book of Thrones", "contradiction", "Auroral Contemplations"),
  new Book("The Focus of Amber", "revelation", "Glaziery and Lightsmithing"),
  new Book(
    "A Descent of the Shell",
    "foresight",
    "Purifications and Exaltations"
  ),
  new Book(
    "Towards a Fundamental Aesthetic: Second Edition",
    "numen: a final understanding",
    "Sights and Sensations"
  ),
  new Book("Sunset Passages", "revelation", "Sacra Solis Invicti"),
  new Book("Nix Abolix", "fear", "Wolf Stories"),
  new Book("The Grand Passage of the Hours", "pattern", "Door and Wall"),
  new Book(
    "The Manner In Which The Alchemist Was Spared",
    "foresight",
    "Anbary and Lapidary"
  ),
  new Book("Five Creations", "gossip", "Resurgences and Emergences"),
  new Book(
    "Isaac of Karth's History of the Shadowless Kings",
    "confounding parable",
    "Sand Stories"
  ),
  new Book("Serpent-Root", "numen: loopholes", "Rites of the Roots"),
  new Book("An Echo of Silence", "impulse", "Sacra Limiae"),
  new Book("Deaths and their Evasions", "a stolen secret", "Edicts Liminal"),
  new Book("Codex Acephali", "regret", "Snow Stories"),
  new Book(
    "A Novel Method for Invocation and Contrition",
    "confounding parable",
    "Preliminal Meter"
  ),
  new Book("Velletri Interviews", "a stolen secret", "Edicts Inviolable"),
  new Book(
    "The Invisible Opera(Unfinished Recording)",
    "cheerful ditty",
    "Strings and Songs"
  ),
  new Book("Enchiridion Tragularis", "intuition", "Serpents and Venoms"),
  new Book(
    "The Messenger Awaiting Her Destination",
    "pattern",
    "Door and Wall"
  ),
  new Book("The Origins of Hours", "confounding parable", "Sacra Limiae"),
  new Book(
    "The Sun's Design",
    "numen: the paths of the sun",
    "Watchman's Paradoxes"
  ),
  new Book(
    "The Orchid Transfigurations: Noon",
    "solace",
    "Maggephene Mysteries"
  ),
  new Book("To a Pale Lady", "salt", "Pearl and Tide"),
  new Book("The Shaven Lock Tantra", "impulse", "Rites of the Roots"),
  new Book("Skin of Silver", "fear", "Disciplines of the Hammer"),
  new Book(
    "Oghkor Oghkor Tissilak Oghkor",
    "pattern",
    "The Great Signs and the Great Scars"
  ),
  new Book(
    "Towards A Fundamental Aesthetic",
    "numen: inescapable confinement",
    "Glassblowing and Vesselcrafting"
  ),
  new Book("White Jade Tablet", "impulse", "Rites of the Roots"),
  new Book(
    "The High Mysteries of the Innermost Chamber of our Church Solar",
    "revelation",
    "Sacra Solis Invicti"
  ),
  new Book("How the End Will Begin", "fear", "Ragged Crossroads"),
  new Book("Experiment Beyond Sight", "revelation", "Edicts Inviolable"),
  new Book("The Songs of the Carapace Cross", "pattern", "Edicts Liminal"),
  new Book(
    "The Book of Dissolution",
    "foresight",
    "Transformations and Liberations"
  ),
  new Book(
    "The Sky in the Scar",
    "numen: back into balance",
    "Sickle and Eclipse"
  ),
  new Book(
    "A Child's Treasury of Golden Afternoons",
    "numen: merciless alteration",
    "Sharps"
  ),
  new Book("Amiranis Beteli", "numen: the bells of ys", "Bells and Brazieries"),
  new Book(
    "The Writing on the Wall",
    "numen: the irresistible feast",
    "Spices and Savours"
  ),
  new Book("A Tower Rises", "confounding parable", "Preliminal Meter"),
  new Book(
    "The Dream of the Conspiracy of the Lower Skies",
    "gossip",
    "The Great Signs and the Great Scars"
  ),
  new Book("The Book of the White Cat", "revelation", "Watchman's Paradoxes"),
  new Book("The Book of Masks", "impulse", "Weaving and Knotworking"),
  new Book("The Carmine Petal: Revised", "foresight", "Disciplines of Hammer"),
  new Book("De Ratio Quercuum", "earth-sign", "Rites of the Roots"),
];

bookArray.forEach((book) => mainLibraryStorage.addBook(book));

export default mainLibraryStorage;
