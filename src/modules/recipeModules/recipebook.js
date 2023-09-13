import Type from "./recipeType.js"

export default class RecipeBook {
    constructor() {
        this.book = []
        this.book.push(new Type("Inks"))
        this.book.push(new Type("Beverages"))
        this.book.push(new Type("Memories"))
        this.book.push(new Type("Marks"))
        this.book.push(new Type("Misc"))
    }

    addType(typeObject) {
        if(this.book.find(type => type.name === typeObject.name)) return
        this.book.push(typeObject)
    }
    
    deleteType(typeName) {
        this.book = this.book.filter(type => type.name !== typeName)
    }

    setTypes(book) {
        this.book = book
    }

    getTypes() {
        return this.book
    }

    getType(typeName) {
        return this.book.find(type => type.name === typeName)
    }
}