import Library from "./library.js"
import Book from "./book.js"

export default class Storage {
    constructor(name) {
        this.name = name
    }
    
    saveBooks(data) {
        localStorage.setItem(this.name, JSON.stringify(data))
    }

    getBooksMenu() {
        const library = Object.assign(
            new Library(),
            JSON.parse(localStorage.getItem(this.name))
        )

        library.setBooks(
            library.getBooks().map(book => Object.assign(new Book(), book))
        )
        return library
    }

    addBook(bookObject) {
        const library = this.getBooksMenu()
        library.addBook(bookObject)
        this.saveBooks(library)
    }

    deleteBook(bookName) {
        const library = this.getBooksMenu()
        library.deleteBook(bookName)
        this.saveBooks(library)
    }

    formatBook(memoryName, chosenBook) {
        const library = this.getBooksMenu()
        library.formatBook(memoryName)
        this.saveBooks(library)
    }

    renameBook(oldBookName, newName) {
        const library = this.getBooksMenu()
        library.getBook(oldBookName).setName(newName)
        this.saveBooks(library)
    }

    renameMemory(bookName, newName) {
        const library = this.getBooksMenu()
        library.getBook(bookName).setMemory(newName)
        this.saveBooks(library)
    }

    renameSkill(bookName, newSkillName) {
        const library = this.getBooksMenu()
        library.getBook(bookName).setSkill(newSkillName)
        this.saveBooks(library)
    }
}