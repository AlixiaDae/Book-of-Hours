export default class Book{
    constructor(name, memoryName, skillName) {
        this.name = name
        this.memoryName = memoryName
        this.skillName = skillName
    }

    setName(newName) {
        this.name = newName
    }

    setSkill(newName) {
        this.skillName = newName
    }

}