const recipeFactory = (
  type,
  name,
  aspect,
  ingredients,
  skill,
  workstation,
  result,
  notes
) => {
  return { type, name, aspect, ingredients, skill, workstation, result, notes };
};

//Beverages
const chalice = recipeFactory(
  "Beverages",
  "Fragrant Chalice Tea",
  "Grail",
  "Chalice Flowers",
  "N/A",
  "Kitchens",
  ["Grail 2", "Nectar"],
  "Brew in Kitchen Range"
);
const honeyscar = recipeFactory(
  "Beverages",
  "Honeyscar Jasmine Tea",
  "Forge",
  "Honeyscar Flowers",
  "N/A",
  "Kitchens",
  ["Forge 2", "Rose", "Nectar"],
  "Brew in Kitchen Range"
);
const blueCrown = recipeFactory(
  "Beverages",
  "Blue Crown Tea",
  "Winter",
  "Blue Crown Flowers",
  "N/A",
  "Kitchens",
  ["Winter 2", "Sky 2"],
  "Brew in Kitchen Range"
);
const tisane = recipeFactory(
  "Beverages",
  "Witching Tisane",
  "Grail",
  "5 Grail",
  [
    "Orchids and Narcotics",
    "Leaves and Thorns",
    "Desires and Dissolutions",
    "The Great Signs and the Great Scars",
    "Sea Stories",
  ],
  "Any",
  ["Heart", "2 Grail"]
);
const cordials = recipeFactory(
  "Beverages",
  "Thirza's Cordials",
  "Nectar",
  "5 Nectar",
  [
    "Herbs and Infusions",
    "Coil and Chasm",
    "Spices and Savours",
    "Stone Stories",
    "Orchids and Narcotics",
  ],
  "Any",
  ["2 Moth", "2 Grail"]
);
const eigengrau = recipeFactory(
  "Beverages",
  "Eigengrau",
  "Winter",
  "5 Winter",
  [
    "Auroral Contemplations",
    "Sights and Sensations",
    "Quenchings and Quellings",
    "Inks of Containment",
    "Maggephene Mysteries",
    "Pearl and Tide",
  ],
  "Any",
  ["Winter", "Moon"]
);
const rubywise = recipeFactory(
  "Beverages",
  "Rubywise Ruin",
  "Grail",
  ["10 Grail", "Flower"],
  [
    "Desires and Dissolutions",
    "Orchids and Narcotics",
    "Applebright Euphonies",
    "Leaves and Thorns",
  ],
  ["Glassware", "Malachite", "Knot", "Calicite", "Dispensary", "Kitchens"],
  ["2 Rose", "2 Moth", "2 Nectar", "2 Heart", "4 Grail"]
);
const solomon = recipeFactory(
  "Beverages",
  "Solomon's Preparation",
  "Winter",
  ["10 Winter", "Flower"],
  [
    "Maggephene Mysteries",
    "Edicts Inviolable",
    "Sights and Sensations",
    "Ragged Crossroads",
    "Quenchings and Quellings",
    "Inks of Containment",
  ],
  ["Glassware", "Malachite", "Knot", "Calicite", "Dispensary", "Kitchens"],
  ["Moth", "Moon", "4 Winter"]
);
const leathy = recipeFactory(
  "Beverages",
  "Leathy",
  "Nectar",
  ["10 Nectar", "Beverage"],
  [
    "Rites of the Roots",
    "Herbs and Infusions",
    "Insects and Nectars",
    "Orchids and Narcotics",
    "Inks of Containment",
  ],
  "Any",
  ["2 Scale", "2 Nectar", "2 Grail", "4 Moth"]
);
const ascite = recipeFactory(
  "Beverages",
  "Sacrament Ascite",
  "Knock",
  ["15 Knock or Moon", "Glassfinger Toxin"],
  [
    "Serpents and Venoms",
    "Glassblowing and Vesselcrafting",
    "Door and Wall",
    "Solutions and Separations",
    "Horns and Ivories",
    "Edicts Liminal",
    "Stone Stories(with any liquid)",
  ],
  ["Kitchen Gaol", "Glassware"],
  ["6 Knock"]
);
const calicite = recipeFactory(
  "Beverages",
  "Sacrament Calicite",
  "Grail",
  ["15 Grail", "Rubywise Ruin"],
  [
    "Orchids and Narcotics",
    "Applebright Euphonies",
    "Leaves and Thorns",
    "Sea Stories",
    "Tridesma Hiera",
  ],
  ["Kitchens", "Glassware", "Chrysalis", "Dispensary", "Nocturnary"],
  "6 Grail"
);
const malachite = recipeFactory(
  "Beverages",
  "Sacrament Malachite",
  "Nectar",
  ["15 Nectar", "Pyrus Auricalcinus"],
  [
    "Drums and Dances",
    "Spices and Savours",
    "Leaves and Thorns",
    "Rites of the Roots",
    "Herbs and Infusions",
    "Coil and Chasm",
  ],
  "Kitchens",
  "6 Nectar"
);
const serpent = recipeFactory(
  "Beverages",
  "Serpent-Milk",
  "Edge",
  ["15 Edge or 15 Scale(Serpents and Venoms)", "Perinculate"],
  [
    "Sharps",
    "Meniscate Reflections",
    "Disciplines of the Scar",
    "Serpents and Venoms",
    "Sickle and Eclipse",
  ],
  ["Chrysalis", "Foundry"],
  ["2 Knock", "3 Scale", "6 Edge"]
);
const skinshuck = recipeFactory(
  "Beverages",
  "Skinshuck Mead",
  "Moth",
  ["15 Moth or 15 Moon(Insects and Nectars)", "Honey", "Cuckoo-Honey"],
  [
    "Solutions and Separations",
    "Edicts Liminal",
    "Sacra Limiae",
    "Rites of the Roots",
    "Resurgences and Emergences(cuckoo honey)",
    "Transformations and Liberations(cuckoo honey)",
    "Insects and Nectar(cuckoo honey)",
  ],
  "Kitchens",
  ["2 Scale", "2 Nectar", "2 Heart", "6 Moth"]
);

//Inks
const yewgall = recipeFactory(
  "Inks",
  "Yewgall Ink",
  "Nectar",
  "5 Nectar",
  [
    "Rites of the Roots",
    "Insects and Nectars",
    "Leaves and Thorns",
    "Putrefactions and Calcinations",
  ],
  "Any",
  ["2 Nectar"]
);
const perhibiate = recipeFactory(
  "Inks",
  "Perhibiate",
  "Heart",
  "5 Heart",
  ["Stitching and Binding", "Weaving and Knotworking", "Inks of Power"],
  "Any",
  ["Winter", "2 Lantern", "2 Scale", "2 Heart"]
);
const stargall = recipeFactory(
  "Inks",
  "Stargall Ink",
  "Sky",
  "5 Sky",
  ["Inks of Power", "Inks of Revelation", "Inks of Containment"],
  "Any",
  "2 Sky"
);
const catwink = recipeFactory(
  "Inks",
  "Catwink",
  "Moon",
  "5 Moon",
  [
    "Inks of Containment",
    "Sickle and Eclipse",
    "Sand Stories",
    "Putrefactions and Calcinations",
    "Edicts Inviolable",
  ],
  "Any",
  ["2 Moon", "2 Scale"]
);
const perinculate = recipeFactory(
  "Inks",
  "Perinculate",
  "Edge",
  [
    "10 Edge or 10 Winter(Putrefactions and Calcinations) or 10 Scale(Inks of Power)",
    "Leaf",
  ],
  [
    "Sickle and Eclipse",
    "Inks of Power",
    "Edicts Martial",
    "Disciplines of the Scar",
    "Putrefactions and Calcinations",
  ],
  ["Kitchens", "Glassware"],
  ["4 Edge", "4 Scale"]
);
const asimel = recipeFactory(
  "Inks",
  "Asimel",
  "Moon",
  [
    "10 Moon or 10 Winter(Ouranoscopy) or 10 Moth(Inks of Revelation)",
    "Liquid",
  ],
  [
    "Inks of Revelation",
    "Putrefactions and Calcinations",
    "Sea Stories",
    "Ouranoscopy",
    "Pearl and Tide",
  ],
  ["Chrysalis", "Dispensary", "Foundry", "Nocturnary"],
  ["3 Knock", "5 Moon"]
);
const houndsgall = recipeFactory(
  "Inks",
  "Houndsgall",
  "Scale",
  ["15 Scale", "Living Relic"],
  [
    "Inks of Containment",
    "Path and Pilgrim",
    "Horns and Ivories",
    "Pentiments and Precursors",
  ],
  [
    "Rowenarium",
    "Ascite",
    "Malachite",
    "Knot",
    "Calicite",
    "Catacombs",
    "Januarius",
    "Madrugad",
    "Watchman",
    "Solar",
    "Spire",
    "Tower-top",
  ],
  ["2 Heart", "5 Scale"]
);
const ashartine = recipeFactory(
  "Inks",
  "Ashartine",
  "Lantern",
  ["15 Lantern or 15 Sky(Anbary/Glassblowing)", "Ichor Vitreous"],
  [
    "Pyroglyphics",
    "Watchman's Paradoxes",
    "Glaziery and Lightsmithing",
    "Anbary and Lapidary",
    "Glassblowing and Vesselcrafting",
  ],
  ["Glassware"],
  ["2 Sky", "6 Lantern"]
);
const marakat = recipeFactory(
  "Inks",
  "Marakat",
  "Nectar",
  ["15 Nectar", "Leathy"],
  ["Insects and Nectars", "Inks of Power", "Tridesma Hiera"],
  [
    "Chrysalis",
    "Dispensary",
    "Kitchens",
    "Foundry",
    "Nocturnary",
    "Cage",
    "Calicite",
  ],
  ["7 Grail", "7 Knock", "7 Nectar"]
);
const nillycant = recipeFactory(
  "Inks",
  "Nillycant",
  "Winter",
  [
    "15 Winter",
    "Solomon's Preparation",
    "Glassfinger Toxin(with Ragged Crossroads)",
  ],
  ["Inks of Containment", "Sights and Sensations", "Ragged Crossroads"],
  [
    "Hearth: Hall of Voices",
    "Calicite",
    "Glassware",
    "Dispensary",
    "Foundry",
    "Nocturnary",
  ],
  ["7 Scale", "7 Winter", "7 Edge"]
);
const orpiment = recipeFactory(
  "Inks",
  "Orpiment Exultant",
  "Forge",
  ["15 Forge", "Iotic Essence"],
  ["Transformations and Liberations", "Inks of Power", "Anbary and Lapidary"],
  [
    "Foundry",
    "Glassware",
    "Condignator",
    "Oubliette Containment",
    "Kitchen Gaol",
  ],
  ["7 Heart", "7 Sky", "7 Forge"]
);
const porphyrine = recipeFactory(
  "Inks",
  "Porphyrine",
  "Rose",
  [
    "15 Rose or 15 Lantern(Auroral Contemplations)",
    "Ichor Auroral",
    "Lenten Rose(Pearl and Tide)",
  ],
  [
    "Auroral Contemplations",
    "Inks of Revelation",
    "Inks of Power",
    "Pearl and Tide",
    "Sand Stories",
  ],
  ["Glassware", "Knot", "Loggia"],
  ["7 Knock", "7 Moon", "7 Rose"]
);
const uzult = recipeFactory(
  "Inks",
  "Uzult",
  "Lantern",
  ["15 Lantern", "Xanthotic Essence"],
  [
    "Inks of Revelation",
    "Sacra Solis Invicti",
    "Watchman's Paradoxes",
    "Glaziery and Lightsmithing",
    "Anbary and Lapidary",
  ],
  ["Glassware", "Dispensary", "Foundry"],
  ["7 Lantern", "7 Moth", "7 Sky"]
);

//Memories
const thunderskin = recipeFactory(
  "Memories",
  "Thunderskin's Paean",
  "Heart",
  "10 Heart",
  ["Drums and Dances", "Strings and Songs"],
  "Instrument",
  ["Scale", "Grail", "Heart 4"],
  "Evolve via Preservation"
);
const nameday = recipeFactory(
  "Memories",
  "Nameday Riddle",
  "Moth",
  ["10 Moth", "Memory"],
  [
    "Sacra Limiae",
    "Edicts Liminal",
    "Solutions and Separations",
    "Rites of the Roots",
    "Weaving and Knotworking",
  ],
  "Any",
  ["2 Knock", "3 Moth"]
);
const moment = recipeFactory(
  "Memories",
  "Old Moment",
  "Scale",
  "10 Lantern or 10 Scale",
  [
    "Disciplines of the Scar",
    "Wolf Stories",
    "Coil and Chasm",
    "Horns and Ivories",
    "Path and Pilgrim",
  ],
  "Any",
  ["2 Moth", "2 Lantern", "4 Scale"],
  [
    "Can be obtained from Living Relic and Year-Tally",
    "Evolve via Preservation",
  ]
);
const torgue = recipeFactory(
  "Memories",
  "Torgue's Cleansing",
  "Edge",
  "5 Edge",
  [
    "Auroral Contemplations",
    "Disciplines of the Scar",
    "Meniscate Reflections",
    "Purifications and Exaltations",
    "Sharps",
  ],
  "Any",
  "2 Edge"
);
const winning = recipeFactory(
  "Memories",
  "Winning Move",
  "Edge",
  ["10 Edge", "Memory"],
  [
    "Sharps",
    "Disciplines of the Hammer",
    "Ragged Crossroads",
    "Auroral Contemplations",
    "Meniscate Reflections",
  ],
  "Any",
  "3 Edge",
  "Evolve via Illumination"
);
const ascendant = recipeFactory(
  "Memories",
  "Ascendant Harmony",
  "Sky",
  "10 Sky",
  [
    "Applebright Euphonies",
    "Bells and Brazieries",
    "Furs and Feathers",
    "Purifications and Exaltations",
    "Sky Stories",
    "Strings and Songs",
  ],
  "Instrument",
  ["2 Lantern", "4 Sky"],
  "Evolve via Birdsong"
);
const curious = recipeFactory(
  "Memories",
  "Curious Hunch",
  "Knock",
  ["10 Knock", "Memory"],
  ["Preliminal Meter", "The Great Signs and the Great Scars"],
  "Any",
  ["3 Moth", "3 Lantern", "3 Heart", "4 Knock"],
  ["Evolve via Nyctodromy", "Sea's Edge in numa", "Persistent"]
);
const didumos = recipeFactory(
  "Memories",
  "Didumos",
  "Sky",
  ["15 Sky", "Ascendant Harmony"],
  [
    "Ouranoscopy",
    "Sights and Sensations",
    "Bells and Brazieries",
    "Applebright Euphonies",
    "Sacra Limiae",
  ],
  "Any",
  ["3 Winter", "3 Knock", "3 Lantern", "Sky 6"],
  ["Evolve via Horomachistry", "Evolve via Hushery", "Persistent"]
);
const earth = recipeFactory(
  "Memories",
  "Earth-Sign",
  "Nectar",
  "N/A",
  ["De Ratio Quercuum", "Rapt in the King"],
  "Any",
  ["2 Scale", "2 Nectar"],
  ["Evolve via Skolekosophy", "Walk on the moor in numa", "Persistent"]
);
const quake = recipeFactory(
  "Memories",
  "Earthquake-name",
  "Scale",
  ["15 Scale", "15 Lantern(Disciplines of the Scar)", "Old Moment"],
  [
    "Coil and Chasm",
    "Hill and Hollow",
    "Stone Stories",
    "Wolf Stories",
    "Disciplines of the Scar",
  ],
  "Any",
  ["3 Forge", "6 Scale"],
  "Persistent"
);
const enduring = recipeFactory(
  "Memories",
  "Eduring Reflection",
  "Rose",
  ["10 Rose", "Memory"],
  ["Pearl and Tide", "Preliminal Meter", "Path and Pilgrim"],
  "Any",
  ["1 Heart", "1 Knock", "3 Rose"],
  ["Evolve via Nyctodromy", "Persistent", "Moor or Sea Caves in numa"]
);
const forbidden = recipeFactory(
  "Memories",
  "Forbidden Epic",
  "Edge",
  ["15 Moon", "Confounding Parable"],
  "Edicts Martial",
  "Any",
  ["4 Moon", "4 Rose", "6 Edge"],
  ["Evolve via Horomachistry", "Evolve via Birdsong"]
);
const hive = recipeFactory(
  "Memories",
  "Hive's Lament",
  "Nectar",
  "10 Nectar",
  "Drums and Dances",
  "Instrument",
  ["2 Moth", "2 Winter", "4 Nectar"],
  ["Evolve via Bosk", "Persistent"]
);
const horizon = recipeFactory(
  "Memories",
  "Horizon-Sight",
  "Rose",
  ["15 Rose", "Enduring Reflection"],
  ["Path and Pilgrim", "Preliminal Meter", "Sand Stories", "Sky Stories"],
  "Any",
  "Rose 4",
  ["Evolve via Hushery", "Persistent", "Stymphling", "Gull Colony in numa"]
);
const invincible = recipeFactory(
  "Memories",
  "Invincible Audacity",
  "Edge",
  ["15 Edge", "Winning Move"],
  ["Auroral Contemplations", "Disciplines of the Hammer", "Edicts Martial"],
  "Any",
  ["3 Forge", "3 Lantern", "6 Edge"],
  ["Evolve via Illumination", "Evolve via Ithastry", "Persistent"]
);
const occult = recipeFactory(
  "Memories",
  "Occult Scrap",
  "Rose",
  "N/A",
  "Yellowing Newspaper",
  "Any",
  ["2 Knock", "2 Moth", "2 Rose"],
  "Persistent"
);
const wound = recipeFactory(
  "Memories",
  "Old Wound",
  "Moon",
  "5 Moon",
  "Edicts Martial",
  "Any",
  ["1 Edge", "2 Moon", "3 Winter"],
  "Persistent"
);
const wind = recipeFactory(
  "Memories",
  "Wind-in-Waiting",
  "Sky",
  ["15 Sky", "Mazarine Fife"],
  [
    "Strings and Songs",
    "Sky Stories",
    "Sacra Solis Invicti",
    "Furs and Feathers",
  ],
  ["Gullscry", "Hermit", "Ambrose", "Reading Room", "Pale", "Telescope"],
  ["3 Moth", "3 Grail", "3 Scale", "6 Sky"],
  ["Evolve via Bosk", "Evolve via Birdsong", "Persistent"]
);
const wormwood = recipeFactory(
  "Memories",
  "Wormwood Dream",
  "Winter",
  [
    "10 Moon(Edicts Martial)",
    "Memory(Edicts Martial)",
    "15 Moon",
    "Stymphling",
  ],
  [
    "Edicts Martial",
    "Edicts Inviolable",
    "Rhyme and Remembrance",
    "Snow Stories",
    "Wolf Stories",
    "Sickle and Eclipse",
  ],
  "Any",
  ["3 Edge", "6 Moon", "6 Winter"],
  ["Evolve via Skolekosophy", "Evolve via Nyctodromy", "Persistent"]
);
const savage = recipeFactory(
  "Memories",
  "Savage Hymn",
  "Scale",
  ["5 Scale(Drums and Dances, Stone Stories)", "5 Nectar(Drums and Dances)"],
  ["Drums and Dances", "Stone Stories"],
  "Any",
  ["2 Scale", "2 Sky"]
);

// Tool
const mazarine = recipeFactory(
  "Devices",
  "Mazarine Fife",
  "Sky",
  ["10 Sky", "Wood"],
  ["Ouranoscopy", "Sacra Limiae", "Sacra Solis Invicti"],
  ["Gullscry", "Hermit", "Solar Altar"],
  "3 Sky",
  "Instrument"
);
const chronsichord = recipeFactory(
  "Devices",
  "Chronsichord",
  "Knock",
  ["15 Knock", "Gervinite", "15 Sky(Lockworks)", "Silver Wire(Lockworks)"],
  [
    "Lockworks and Clockworks",
    "Preliminal Meter",
    "Glassblowing and Vesselcrafting",
    "The Great Signs and the Great Scars",
    "Glaziery and Lightsmithing",
  ],
  "Any",
  ["Forge", "3 Winter", "6 Sky", "6 Knock"]
);
const mommet = recipeFactory(
  "Devices",
  "Pale Mommet",
  "Grail",
  ["10 Grail", "Fabric"],
  [
    "Pentiments and Precursors",
    "Resurgences and Emergences",
    "Sea Stories",
    "The Great Signs and the Great Scars",
    "Tridesma Hiera",
  ],
  "Loom in Servants' Hall",
  ["2 Heart", "2 Moth", "4 Grail"]
);
const flushed = recipeFactory(
  "Devices",
  "Flushed Mommet",
  "Grail",
  ["15 Grail", "Pale Mommet"],
  [
    "Pentiments and Precursors",
    "The Great Signs and the Great Scars",
    "Desires and Dissolutions",
    "Resurgences and Emergences",
    "Furs and Feathers",
  ],
  "Any",
  ["3 Moth", "3 Heart", "6 Grail"]
);
const dearday = recipeFactory(
  "Devices",
  "Dearday Lens",
  "Lantern",
  "5 Lantern or 5 Sky(Glassblowing and Glaziery)",
  [
    "Glaziery and Lightsmithing",
    "Pyroglyphics",
    "Disciplines of the Scar",
    "Glassblowing and Vesselcrafting",
  ],
  "Mainly Telescope",
  ["Forge", "Edge", "2 Sky", "2 Lantern"]
);

//Material

const ichorAuroral = recipeFactory(
  "Materials",
  "Ichor Auroral",
  "Lantern",
  "Rose 10(Auroral/Inks/Sand), Sky 10(Signs/Watchman's",
  [
    "Auroral Contemplations",
    "Inks of Power",
    "Sand Stories",
    "Sights and Sensations",
    "Watchman's Paradoxes",
  ],
  "Any that accepts Light",
  ["Lantern 4", "Rose 2"]
);

const iotic = recipeFactory(
  "Materials",
  "Iotic Essence",
  "Forge",
  "Forge 10, Liquid",
  [
    "Anbary and Lapidary",
    "Meniscate Reflections",
    "Pyroglyphics",
    "Spices and Savors",
    "Transformations and Liberations",
  ],
  "Glassware",
  ["Forge 5", "Lantern 3"]
);
const xanthotic = recipeFactory(
  "Materials",
  "Xanthotic Essence",
  "Lantern",
  "Lantern 10/Sky 10(Anbary and Lapidary), Liquid",
  [
    "Auroral Contemplations",
    "Purifications and Exaltations",
    "Pyroglyphics",
    "Transformations and Liberations",
    "Anbary and Lapidary",
  ],
  "Glassware",
  ["Lantern 5", "Knock 2", "Forge 2"],
  "Needed for Uzult"
);
const awakened = recipeFactory(
  "Materials",
  "Awakened Feather",
  "Sky",
  "5 Sky",
  [
    "Anbary and Lapidary",
    "Lockworks and Clockworks",
    "Stitching and Binding",
    "Sights and Sensations",
    "Sacra Limiae",
    "Furs and Feathers",
  ],
  "Any",
  ["Scale", "2 Sky"],
  "Considering makes Cheerful Ditty"
);
const gervinite = recipeFactory(
  "Materials",
  "Gervinite",
  "Knock",
  ["10 Knock", "Glass", "10 Sky(Glaziery)", "Metal(Glaziery)"],
  ["Lockworks and Clockworks", "Glaziery and Lightsmithing"],
  ["Dispensary(Lockworks)", "Any that accepts metal"],
  ["2 Rose", "4 Knock"],
  ["Found in Our Lady Beneath", "In weighty bedside candleholder"]
);
const labhitic = recipeFactory(
  "Materials",
  "Labhitic Tincture",
  "Edge",
  "5 Edge",
  [
    "Edicts Martial",
    "Disciplines of the Hammer",
    "Ragged Crossroads",
    "Sickle and Eclipse",
  ],
  "Any",
  ["Lantern", "2 Edge"]
);
const refulgin = recipeFactory(
  "Materials",
  "Refulgin",
  "Lantern",
  "5 Lantern",
  [
    "Purifications and Exaltations",
    "Transformations and Liberations",
    "Sacra Solis Invicti",
    "Inks of Revelation",
  ],
  "Any",
  "2 Lantern"
);
const tanglebrag = recipeFactory(
  "Materials",
  "Tanglebrag",
  "Moth",
  "5 Moth or 5 Lantern(Watchman's Paradoxes)",
  [
    "Edicts Liminal",
    "Resurgences and Emergences",
    "Rites of the Roots",
    "Weaving and Knotworking",
    "Watchman's Paradoxes",
  ],
  "Any",
  ["Lantern", "Nectar", "Scale", "2 Moth"]
);
const westcott = recipeFactory(
  "Materials",
  "Westcott's Compounds",
  "Forge",
  "5 Moth or 5 Forge(Pyro/Meniscate/Spices)",
  [
    "Sacra Limiae",
    "Pyroglyphics",
    "Solutions and Separations",
    "Pyroglyphics",
    "Meniscate Reflections",
    "Spices and Savours",
  ],
  "Any",
  ["Nectar", "Grail", "Lantern", "Moth", "2 Forge"]
);
const glassfinger = recipeFactory(
  "Materials",
  "Glassfinger Toxin",
  "Knock",
  "10 Knock or Scale",
  [
    "Door and Wall",
    "Edicts Liminal",
    "Solutions and Separations",
    "Surgeries and Exsanguinations",
    "Serpents and Venoms",
  ],
  "Glassware",
  ["2 Forge", "2 Lantern", "4 Knock"],
  "Thing and Liquid"
);

//Animals

const gull = recipeFactory(
  "Animals",
  "Pet Gull",
  "Sky",
  "N/A",
  "N/A",
  "N/A",
  ["Sky 2", "Heart"],
  "Evolve via Birdsong, Omen"
);

const viper = recipeFactory(
  "Animals",
  "Viper",
  "Knock 2/Scale 2 or Knock/Scale(Hungry)",
  "N/A",
  "N/A",
  "N/A",
  ["Earth-Sign(Nectar 2/Scale 2)"],
  ["Evolve via Skolekosophy", "Omen"]
);
const dog = recipeFactory(
  "Animals",
  "Dog",
  "Edge 2/Heart 2/Scale 2 or Edge/Heart/Scale(Hungry)",
  "N/A",
  "N/A",
  "N/A",
  ["Solace(Heart 2/Sky)"]
);
const living = recipeFactory(
  "Animals",
  "Living Relic",
  "Scale 4/Sky 2/Heart",
  "N/A",
  "N/A",
  "N/A",
  []
);

//Misc
const loss = recipeFactory(
  "Misc",
  "Loss",
  "Winter/Edge",
  "Discard anything at Sea's Edge",
  "N/A",
  "Sea's Edge",
  ["Edge", "Winter"]
);
const rumour = recipeFactory(
  "Misc",
  "Wind-Rumour",
  "Sky",
  "Talk to Gull",
  "N/A",
  "N/A",
  ["Heart", "2 Sky"],
  ["Evolve via Birdsong", "Omen"]
);
const scent = recipeFactory(
  "Misc",
  "Scent",
  "Nectar",
  "Paradise Palm/Red Practice Sword/Red Quarterstaff/Watchful Potted Plant",
  "N/A",
  "N/A",
  "Nectar"
);
const sight = recipeFactory(
  "Misc",
  "Sight",
  "Lantern",
  "Consider any bust",
  "N/A",
  "N/A",
  "Lantern"
);
const surmise = recipeFactory(
  "Misc",
  "Wild Surmise",
  "Lantern/Moth/Sky",
  "Consider Historywax Candle",
  "N/A",
  "N/A",
  ["3 Lantern", "3 Moth", "3 Sky"],
  "Evolve via Ithastry"
);
const taste = recipeFactory(
  "Misc",
  "Taste",
  "Grail",
  "Consume food or drink(preferably with grail aspect)",
  "N/A",
  "Grail"
);
const touch = recipeFactory(
  "Misc",
  "Touch",
  "Forge",
  "Consider comfort furniture",
  "N/A",
  "N/A",
  "Forge"
);
const sound = recipeFactory(
  "Misc",
  "Sound",
  "Heart",
  [
    "Consider House Key",
    "Consider avian pets",
    "Consider Moth/Knock furniture",
    "Renounce at Well",
  ],
  "N/A",
  "N/A",
  "Heart"
);

// Food

const dough = recipeFactory(
  "Food",
  "Dough",
  "Heart",
  ["Flour", "Butter/Milk", "Bowls"],
  "N/A",
  "Kitchens",
  ["Heart"]
);

const cakeBatter = recipeFactory(
  "Food",
  "Cake Batter",
  "Heart",
  ["Dough", "Egg"],
  "N/A",
  "Kitchens",
  ["Heart"]
);

const batter = recipeFactory(
  "Food",
  "Batter",
  "Heart/Edge",
  ["Flour", "Water(Mist also works)"],
  "N/A",
  "Kitchens",
  ["Edge", "Heart"]
);

const bread = recipeFactory(
  "Food",
  "Bread",
  "Heart",
  ["Dough"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Edge", "Forge", "Nectar"],
  "Side Dish"
);

const creamedSugar = recipeFactory(
  "Food",
  "Creamed Sugar",
  "N/A",
  ["Sugar", "Butter"],
  "N/A",
  "Kitchens",
  ["Heart"]
);

const meringue = recipeFactory(
  "Food",
  "Meringue",
  "Heart",
  ["Egg", "Sugar"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Grail", "Sky", "Winter"]
);

const dripping = recipeFactory(
  "Food",
  "Dripping",
  "Heart",
  ["Make Beef Joint", "Make Marinated Roast Beef"],
  "N/A",
  "Kitchens",
  ["Heart"]
);

const marinatedBeef = recipeFactory(
  "Food",
  "Marinated Beef",
  "Heart",
  ["Any Wine", "Beef"],
  "N/A",
  "Kitchens",
  ["Heart"]
);

const rosehipJam = recipeFactory(
  "Food",
  "Rosehip Jam",
  "Rose",
  ["Rosehip", "Sugar"],
  "N/A",
  "Kitchens",
  ["Rose 2", "Heart", "Nectar"]
);

const blackberryJam = recipeFactory(
  "Food",
  "Blackberry Jam",
  "Heart",
  ["Blackberries", "Sugar"],
  "N/A",
  "Kitchens",
  ["Heart", "Grail", "Nectar", "Rose"]
);

// First Course

const poachedMack = recipeFactory(
  "Food",
  "Poached Mackerel",
  "Grail/Heart/Moon",
  ["Mackerel"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Forge", "Moon"],
  "First Course"
);

const pilchardToast = recipeFactory(
  "Food",
  "Pilchards on Toast",
  "Heart",
  ["Crusty Bread", "Pilchards"],
  "N/A",
  "Kitchens",
  ["Heart", "Moon", "Nectar"],
  "First Course"
);

const leekSoup = recipeFactory(
  "Food",
  "Leek Soup",
  "Edge/Moon/Nectar",
  ["Leek", "Drippings"],
  "N/A",
  "Kitchens",
  ["Edge", "Moon", "Nectar"],
  "First Course"
);

const mackarelMonte = recipeFactory(
  "Food",
  "Mackarel Monte Carlo",
  "Heart",
  ["Mackerel", "Boiled Egg"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Moon", "Scale", "Sky"],
  "First Course"
);

const coldPheasant = recipeFactory(
  "Food",
  "Cold Pheasant with Grape Salad",
  "Grail",
  ["Grapes", "Pheasant"],
  "N/A",
  "Kitchens",
  ["Grail", "Heart", "Nectar", "Rose", "Sky"],
  "First Course"
);

const stuffedMarrow = recipeFactory(
  "Food",
  "Golden Stuffed Marrow",
  "Heart/Nectar",
  ["Golden Marrow", "Knife"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Nectar 2", "Lantern"],
  "First Course or Main Course"
);

const friedMushToast = recipeFactory(
  "Food",
  "Fried Mushrooms on Toast",
  "Heart",
  ["Mushrooms", "Crusty Bread", "Knife"],
  "N/A",
  "Kitchens",
  ["Heart", "Moon", "Nectar", "Scale"],
  "First Course"
);

const stuffedPale = recipeFactory(
  "Food",
  "Stuffed Pale Marrow",
  "Heart/Nectar",
  ["Pale Marrow", "Knife"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Nectar 2", "Winter"],
  "First Course or Main Course"
);

// Main Course

const mushpot = recipeFactory(
  "Food",
  "Mushroom and Potato Bake",
  "Heart/Moon/Nectar/Scale",
  ["Mushrooms", "Potatoes"],
  "N/A",
  "Kitchens",
  ["Heart", "Moon", "Nectar", "Scale"],
  "Main Course"
);

const kingsluck = recipeFactory(
  "Food",
  "Kingsluck Pie",
  "Not Rose or Edge",
  ["Seapie", "Pears"],
  "N/A",
  "Kitchens",
  [
    "Forge 2",
    "Grail 2",
    "Heart 2",
    "Knock",
    "Lantern",
    "Scale",
    "Moth",
    "Nectar",
  ],
  "Main Course"
);

const seapie = recipeFactory(
  "Food",
  "Sea Pie",
  "Forge",
  ["Beef", "Dough"],
  "N/A",
  "Kitchens",
  ["Forge"],
  "Main Course"
);

const roastBeef = recipeFactory(
  "Food",
  "Roast Beef",
  "Heart/Scale",
  ["Beef"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Scale 2", "Forge", "Lantern"],
  "Main Course"
);

const juggedPheasant = recipeFactory(
  "Food",
  "Jugged Pheasant",
  "Heart",
  ["Butter", "Pheasant"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Rose", "Scale", "Sky", "Edge", "Grail"],
  "Main Course"
);

const marinatedRoastBeef = recipeFactory(
  "Food",
  "Marinated Roast Beef",
  "Heart/Scale",
  ["Marinated Beef"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Scale 2", "Forge", "Grail", "Edge"],
  "Main Course"
);
const steamedVege = recipeFactory(
  "Food",
  "Steamed Spring Vegetable Pie",
  "Nectar/Heart",
  ["Sack of Vegetables", "Dough"],
  "N/A",
  "Kitchens",
  ["Nectar 2", "Heart 2", "Forge", "Rose"],
  "Main Course"
);

// Side Dish

const moly = recipeFactory(
  "Food",
  "Moly Au Jus",
  "Moon",
  ["Moly", "Butter", "Spices"],
  "N/A",
  "Kitchens",
  ["Moth 2", "Scale 2", "Hear 2", "Moon 2", "Nectar"],
  "Side Dish"
);

const onionRings = recipeFactory(
  "Food",
  "Onion Rings",
  "Heart",
  ["Basket of Onions", "Batter"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Grail", "Edge", "Nectar"],
  "Side Dish"
);

const chips = recipeFactory(
  "Food",
  "Game Chips",
  "Heart",
  ["Potatoes", "Dripping", "Knives"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Knock", "Forge", "Edge"],
  "Side Dish"
);

const yorkshire = recipeFactory(
  "Food",
  "Yorkshire Pudding",
  "Heart/Nectar",
  ["Dripping", "Batter"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Nectar"],
  "Side Dish"
);

const eggCroquette = recipeFactory(
  "Food",
  "Egg Croquettes",
  "Sky/Scale",
  ["Egg", "Crusty Bread"],
  "N/A",
  "Kitchens",
  ["Sky 2", "Scale 2", "Heart", "Forge", "Edge"],
  "Side Dish"
);

const roastPotatoes = recipeFactory(
  "Food",
  "Roast Potatoes",
  "Heart",
  ["Drippings", "Potatoes"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Grail", "Forge", "Edge"],
  "Side Dish"
);

// Pudding

const rosehipCake = recipeFactory(
  "Food",
  "Rosehip Jam Sponge Cake",
  "Heart/Rose",
  ["Rosehip Jam", "Cake Batter"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Rose"],
  "Pudding"
);

const fudge = recipeFactory(
  "Food",
  "Fudge",
  "Grail",
  ["Creamed Sugar"],
  "N/A",
  "Kitchens",
  ["Grail 3"],
  "Pudding"
);

const floatingIsland = recipeFactory(
  "Food",
  "Floating Island",
  "Grail/Heart",
  ["Milk", "Meringue"],
  "N/A",
  "Kitchens",
  ["Grail 2", "Heart 2", "Rose", "Sky"],
  "Pudding"
);

const pruneWhip = recipeFactory(
  "Food",
  "Prune Whip",
  "Grail/Heart",
  ["Egg", "Plums"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Grail", "Nectar"],
  "Pudding"
);

const applePie = recipeFactory(
  "Food",
  "Apple Pie",
  "Heart",
  ["Apples", "Dough", "Scales"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Nectar", "Grail", "Forge"],
  "Pudding"
);

const blackberryCake = recipeFactory(
  "Food",
  "Blackberry Jam Sponge Cake",
  "",
  ["Blackberry Jam", "Cake Batter"],
  "N/A",
  "Kitchens",
  ["Grail 2", "Heart 2", "Nectar", "Rose"],
  "Pudding"
);

const appleCharlotte = recipeFactory(
  "Food",
  "Apple Charlotte",
  "Grail",
  ["Apples", "Crusty Bread", "Spices"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Grail", "Nectar", "Rose"],
  "Pudding"
);

const pumpkinPie = recipeFactory(
  "Food",
  "Pumpkin Pie",
  "Forge",
  ["Pumpkin", "Dough", "Spices"],
  "N/A",
  "Kitchens",
  ["Forge", "Heart", "Nectar"],
  "Pudding or Main Course"
);

const stickyToffee = recipeFactory(
  "Food",
  "Sticky Toffee Pudding",
  "Heart/Grail",
  ["Crusty Bread", "Creamed Sugar"],
  "N/A",
  "Kitchens",
  ["Heart 2", "Grail 2"],
  "Pudding"
);

const recipeList = [
  dough,
  batter,
  cakeBatter,
  meringue,
  creamedSugar,
  dripping,
  marinatedBeef,
  rosehipJam,
  blackberryJam,
  bread,
  // first
  poachedMack,
  pilchardToast,
  leekSoup,
  mackarelMonte,
  coldPheasant,
  stuffedMarrow,
  friedMushToast,
  stuffedPale,
  // main
  mushpot,
  kingsluck,
  seapie,
  roastBeef,
  juggedPheasant,
  marinatedRoastBeef,
  steamedVege,
  // side
  moly,
  onionRings,
  chips,
  yorkshire,
  eggCroquette,
  roastPotatoes,
  // pudding
  rosehipCake,
  fudge,
  floatingIsland,
  pruneWhip,
  applePie,
  blackberryCake,
  appleCharlotte,
  pumpkinPie,
  stickyToffee,
  ichorAuroral,
  gull,
  iotic,
  earth,
  occult,
  torgue,
  savage,
  wound,
  nameday,
  ascendant,
  curious,
  enduring,
  hive,
  moment,
  winning,
  thunderskin,
  wormwood,
  didumos,
  forbidden,
  horizon,
  invincible,
  quake,
  wind,
  tisane,
  cordials,
  xanthotic,
  eigengrau,
  rubywise,
  yewgall,
  solomon,
  leathy,
  ascite,
  calicite,
  malachite,
  serpent,
  skinshuck,
  perhibiate,
  stargall,
  catwink,
  perinculate,
  asimel,
  houndsgall,
  ashartine,
  marakat,
  nillycant,
  orpiment,
  porphyrine,
  uzult,
  mazarine,
  chronsichord,
  mommet,
  flushed,
  dearday,
  awakened,
  gervinite,
  glassfinger,
  labhitic,
  refulgin,
  tanglebrag,
  westcott,
  loss,
  scent,
  sight,
  sound,
  taste,
  touch,
  surmise,
  rumour,
  viper,
  dog,
  chalice,
  honeyscar,
  blueCrown,
];

export default recipeList;
