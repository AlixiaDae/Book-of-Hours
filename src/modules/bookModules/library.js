export default class Library{
    constructor() {
        this.books = []
    }

    setBooks(books) {
        this.books = books
    }

    getBooks() {
        return this.books
    }

    addBook(newBook) {
        if(this.books.find(book => book.name === newBook.name)) return
        this.books.push(newBook)
    }

    deleteBook(bookName) {
        this.books = this.books.filter(book => book.name !== bookName)
    }
}