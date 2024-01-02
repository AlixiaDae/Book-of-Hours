const memoryFactory = (memoryName, aspect, degree) => {
    return { memoryName, aspect, degree }
}

const regret = memoryFactory("regret", ["forge", "winter"], [1,2])
const foresight = memoryFactory("foresight", ["lantern", "forge"], [1,2])
const revelation = memoryFactory("revelation", ["lantern"], [2])
const satisfaction = memoryFactory("satisfaction", ["heart", "grail"], [1,2])
const solace = memoryFactory("solace", ["sky", "heart"], [1,2])
const cheerful = memoryFactory("cheerful ditty", ["sky", "heart"], [1,2])
const gossip = memoryFactory("gossip", ["grail", "rose"], [1,2])
const beguiling = memoryFactory("beguiling melody", ["grail", "sky"], [2,2])
const fear = memoryFactory("fear", ["edge", "scale"], [1,2])
const contradiction = memoryFactory("contradiction", ["moon", "edge"], [1,2])
const stolen = memoryFactory("a stolen secret", ["knock", "moon"], [1,2])
const salt = memoryFactory("salt", ["knock","moon","winter"], [1,1,1])
const secret = memoryFactory("a secret threshold", ["knock", "rose"], [2,1])
const pattern = memoryFactory("pattern", ["forge", "knock"], [1,2])
const intuition = memoryFactory("intuition", ["rose", "moon"], [2,2])
const confounding = memoryFactory("confounding parable", ["rose","moon","sky"], [2,2,2])
const hindsight = memoryFactory("hindsight", ["scale", "winter"], [1,2])
const storm = memoryFactory("storm", ["sky","heart"], [2,2])
const impulse = memoryFactory("impulse", ["nectar", "moth"], [1,2])
const earth = memoryFactory("earth-sign", ["nectar"], [2])
const bittersweet = memoryFactory("bittersweet certainty", ["lantern", "winter"], [1,2])
const torgue = memoryFactory("torgue's cleansing", ["edge"], [2])
const nameday = memoryFactory("nameday riddle", ["knock","moth"], [2,3])
const winning = memoryFactory("winning move", ["edge"], [3])
const curious = memoryFactory("curious hunch",["heart", "lantern", "moth", "knock"], [3,3,3,4])
const old = memoryFactory("old moment", ["lantern", "moth", "scale"], [2,2,4])
const wistful = memoryFactory("wistful air", ["rose", "sky"], [2,2])
const savage = memoryFactory("savage hymn", ['scale', 'sky'], [2,2])
const sun = memoryFactory("numen: the sun's weakness", ['lantern', 'grail', 'moth'], [5,5,5])
const merciless = memoryFactory("numen: merciless alteration", ['edge', 'forge', 'grail'], [5,5,5])
const inescapable = memoryFactory("numen: inescapable confinement", ['knock', 'scale', 'winter'], [5,5,5])
const weaving = memoryFactory("numen: weaving the world", ['heart', 'moon', 'nectar'], [5,5,5])
const lost = memoryFactory("numen: that old lost music", ['rose', 'scale', 'sky'], [5,5,5])
const counterfeit = memoryFactory("numen: the great counterfeit", ['lantern', 'moon', 'nectar'], [5,5,5])
const final = memoryFactory("numen: a final understanding", ['rose', 'sky', 'winter'], [5,5,5])
const loop = memoryFactory("numen: loopholes", ['knock', 'moon', 'moth'], [5,5,5])

const memoryList = [regret, foresight, revelation, satisfaction, solace, cheerful, gossip, beguiling, fear, contradiction, stolen, salt, secret, pattern, intuition, confounding, hindsight, storm, impulse, earth, bittersweet, torgue, nameday, winning, curious, old, wistful, savage, sun, merciless, inescapable, weaving, lost, counterfeit, final, loop]

export default memoryList