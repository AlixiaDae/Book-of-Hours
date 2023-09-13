export default class Recipe {
    constructor(name, aspect, ingredients, skill, workstation, result, notes = "") {
        this.name = name
        this.aspect = aspect
        this.ingredients = ingredients
        this.skill = skill
        this.workstation = workstation
        this.result = result
        this.notes = notes
    }
}