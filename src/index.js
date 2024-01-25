import Storage from "./modules/bookModules/storage.js"
import Book from "./modules/bookModules/book.js"
import memoryList from "./modules/memory.js"
import recipeStorage from "./modules/recipeModules/localRecipes.js"
import Recipe from "./modules/recipeModules/recipe.js"
import mainLibraryStorage from "./modules/mainLibraryStorage.js"
import recipeList from "./modules/recipeFactory.js"

//Local Storages

const storage = new Storage("hushhouse")

// DOM Functions
const aspectList = ["Lantern", "Forge", "Edge", "Winter", "Heart", "Grail", "Knock", "Rose", "Scale", "Moon", "Sky", "Nectar", "Moth", "Numen"]
const workStationList = ["Unsure","Desk with corresponding aspect", "Barber's Chair", "Windlit Workbench", "Morgue", "Glassware", "Foundry", "Morgue", "Dispensary", "Practice Equipment", "Kitchens", "Loom", "Instrument"]

addOptions(memoryList, document.getElementById("memoryName"), "memory")
addOptions(aspectList, document.getElementById("aspectName"), "aspect")
addOptions(workStationList, document.getElementById("workStation"), "work")
const contentBox = document.querySelector(".content")
addOptions(recipeStorage.getRecipesMenu().book.map(i => i.name), document.getElementById("type"), "type")

const addBookBtn = document.querySelector(".add-book")
const resetStorageBtn = document.querySelector(".reset")
const bookFormBox = document.querySelector(".book-form")
const submitBtn = document.getElementById("submit")
const craftListEl = document.querySelector(".craft-list")
const aspectListEl = document.querySelector(".aspect-list")

addBookBtn.addEventListener("click", () => {
    recipeFormBox.classList.remove("visible")
    bookFormBox.classList.toggle("visible")
})

resetStorageBtn.addEventListener("click", () => {
    localStorage.removeItem("hushhouse")
    loadHush()
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const bookNameInput = document.getElementById("bookName")
    const skillNameInput = document.getElementById("skill")
    const memoryNameInput = document.querySelector("select")
    const checkBookIn = document.getElementById("addNow")
    
    if(bookNameInput.value === "") return
    if(skillNameInput.value === "") return
    const newBook = new Book(bookNameInput.value, memoryNameInput.value, skillNameInput.value)

    mainLibraryStorage.addBook(newBook)
    if(checkBookIn.checked) storage.addBook(newBook)
    bookNameInput.value = ""
    skillNameInput.value = ""
    loadHush()
})

const aspectTabs = document.querySelectorAll(".aspect-tab")
aspectTabs.forEach(tab => 
    tab.addEventListener("click", () => {{
        createHeaders("tabs")
        const tabName = tab.textContent
        const list = sortBookList(tabName)
        for(let i = 0; i < list.length; i++) {
            createAspectTab(list[i], tabName, contentBox)
        }
    }
}))

function createAspectTab(bookObject, tabName, box) {
    const memory = memoryList.find(mem => mem.memoryName === bookObject.memoryName)
    const index = memory.aspect.findIndex(asp => asp === tabName.toLowerCase())

    const container = document.createElement("div")
    container.classList.add("container-grid")
    const bookName = document.createElement("div")
    bookName.classList.add("book")
    bookName.textContent = bookObject.name
    const memoryName = document.createElement("div")
    memoryName.textContent = bookObject.memoryName.charAt(0).toUpperCase() + bookObject.memoryName.slice(1)
    const degreeGiven = document.createElement("div")
    degreeGiven.textContent = memory.degree[index]
    const skillName = document.createElement("div")
    skillName.classList.add("skill")
    skillName.textContent = bookObject.skillName

    container.append(bookName, memoryName, degreeGiven, skillName)
    box.appendChild(container)
}

const hushTab = document.querySelector(".hush-tab")

hushTab.addEventListener("click", loadHush)

function loadHush() {
    if(craftListEl.classList.contains("visible")) craftListEl.classList.remove("visible")
    aspectListEl.classList.add("visible")
    createHeaders("hush")
    const sortedList = sortBookList("hush")
    for(let i = 0; i < sortedList.length; i++) {
        createHushTab(sortedList[i], contentBox)
    }
}

function createHushTab(bookObject, box) {
    const container = document.createElement("div")
    container.classList.add("hush-container-grid")
    const addToStorage = document.createElement("span")
    addToStorage.classList.add("fa-solid", "fa-square-plus", "fa-xl")
    
    const deleteBook = document.createElement("span")
    deleteBook.classList.add("fa-solid", "fa-square-xmark", "fa-xl")
    const bookNameContainer = document.createElement("div")
    bookNameContainer.classList.add("book")
    const bookName = document.createElement("p")
    bookName.setAttribute("contenteditable", "true")
    bookName.textContent = bookObject.name
    const memoryNameContainer = document.createElement("div")
    memoryNameContainer.classList.add("memory")
    const memoryName = document.createElement("p")
    memoryName.textContent = bookObject.memoryName.charAt(0).toUpperCase() + bookObject.memoryName.slice(1)
    memoryName.setAttribute("contenteditable", "true")
    const skillNameContainter = document.createElement("div")
    skillNameContainter.classList.add("skill")
    const skillName = document.createElement("p")
    skillName.setAttribute("contenteditable", "true")
    skillName.textContent = bookObject.skillName
    
    bookNameContainer.append(bookName, addToStorage, deleteBook)
    memoryNameContainer.appendChild(memoryName)
    skillNameContainter.appendChild(skillName)
    container.append(bookNameContainer, memoryNameContainer, skillNameContainter)
    box.appendChild(container)

    const plusMinus = document.querySelectorAll(".fa-solid")

    plusMinus.forEach(button => button.addEventListener("click", flash))

    addToStorage.addEventListener("click", () => {
        storage.addBook(bookObject)
    })

    deleteBook.addEventListener("click", () => {
        mainLibraryStorage.deleteBook(bookName.textContent)
        loadHush()
    })

    bookName.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            mainLibraryStorage.renameBook(bookObject.name, bookName.innerText)
            e.preventDefault()
            bookName.blur()
        }
    })

    memoryName.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            mainLibraryStorage.renameMemory(bookObject.name, memoryName.innerText.toLowerCase())
            e.preventDefault()
            memoryName.blur()
        }
    })

    skillName.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            mainLibraryStorage.renameSkill(bookObject.name, skillName.innerText)
            e.preventDefault()
            skillName.blur()
        }
    })
}

const craftTab = document.querySelector(".craft-tab") 
craftTab.addEventListener("click", () => {
    if(aspectListEl.classList.contains("visible")) aspectListEl.classList.remove("visible")
    craftListEl.classList.add("visible")
    contentBox.textContent = ""
})

const recipeTabs = document.querySelectorAll(".recipe-tab")
recipeTabs.forEach(tab => 
    tab.addEventListener("click", () => {
        createHeaders("recipe")
        const tabName = tab.textContent
        createCraftTab(recipeList, tabName, contentBox)
    })
)

function createCraftTab(typeObject, tabName, box) {
    for(let i = 0; i < typeObject.length; i++) {
        if(typeObject[i].type === tabName) {
            const container = document.createElement("div")
            container.classList.add("recipe-grid")
            const name = document.createElement("div")
            name.classList.add("name")
            name.textContent = typeObject[i].name
            const aspect = document.createElement("div")
            aspect.textContent = typeObject[i].aspect
            const work = document.createElement("div")
            work.textContent = typeObject[i].workstation
            const skill = document.createElement("div")
            skill.textContent = typeObject[i].skill.join(", ")
            const ingredient = document.createElement("div")
            const result = document.createElement("div")
            result.textContent = typeObject[i].result.join(", ")
            const notes = document.createElement("div")
            notes.classList.add("notes")
            notes.textContent = typeObject[i].notes
            container.append(name, aspect, work, skill, ingredient, result, notes)
            box.appendChild(container)
        }
    }
}


function createHeaders(tabType) {
    if(tabType === "tabs") {
        contentBox.textContent = ""
        const header = document.createElement("div")
        header.classList.add("content-headers")
        const bName = document.createElement("div")
        bName.textContent = "Book Name"
        const mName = document.createElement("div")
        mName.textContent = "Memory Name"
        const dGiven = document.createElement("div")
        dGiven.textContent = "Degree Given"
        const sName = document.createElement("div")
        sName.textContent = "Skill Name"

        header.append(bName, mName, dGiven, sName)
        contentBox.appendChild(header)
    } else if(tabType === "hush") {
        contentBox.textContent = ""
        const header = document.createElement("div")
        header.classList.add("hush-content-headers")
        const bName = document.createElement("div")
        bName.textContent = "Book Name"
        const mName = document.createElement("div")
        mName.textContent = "Memory Name"
        const sName = document.createElement("div")
        sName.textContent = "Skill Name"
    
        header.append(bName, mName, sName)
        contentBox.appendChild(header)
    } else if(tabType === "recipe") {
        contentBox.textContent =""
        const header = document.createElement("div")
        header.classList.add("craft-content-headers")
        const rName = document.createElement("div")
        rName.textContent = "Recipe Name"
        const aspect = document.createElement("div")
        aspect.textContent = "Main Aspect"
        const work = document.createElement("div")
        work.textContent = "Work Station"
        const skillName = document.createElement("div")
        skillName.textContent = "Skill Name"
        const ingredients = document.createElement("div")
        ingredients.textContent = "Ingredients"
        const results = document.createElement("div")
        results.textContent = "Aspects given"
        const notes = document.createElement("div")
        notes.textContent = "Additional Notes"

        header.append(rName, aspect, work, skillName, ingredients, results,notes)
        contentBox.appendChild(header)
    }
}

//Util for select element

function addOptions(list, element, type) {
    if(type === "memory") {
        const sortedList = list.sort((a,b) => {
            const ma = a.memoryName
            const mb = b.memoryName
            if(ma < mb) return -1
            if(ma > mb) return 1
            return 0
        }) 
        for(let i = 0; i < sortedList.length; i++) {
            const name = sortedList[i].memoryName
            const option = document.createElement("option")
            option.textContent = name.charAt(0).toUpperCase() + name.slice(1)
            option.setAttribute("value", name)
            element.appendChild(option)
        }
    } 
    
}


// Util function for sorting books
// Sorts books alphabetically on Hush House tab
// Sorts books by degree then the memories alphabetically on Aspect tab

function sortBookList(tabName) {
    if(tabName !== "hush" && tabName !== "numen") {
        const list = []
        const listA = []
        const listB = []
        const listC = []
        const listD = []

        // Creates list that consists of the memories with an aspect that equals to tabName
        const memory = memoryList.filter(mem => mem.aspect.includes(tabName.toLowerCase()))
        for(let i = 0; i < storage.getBooksMenu().books.length; i++) {
            const book = storage.getBooksMenu().books[i]

            // Checks if a book's memory is in created list

            if(memory.map(mem => mem.memoryName).includes(book.memoryName)) {
                const bookMemory = memoryList.find(mem => mem.memoryName === book.memoryName)

                // ["lantern","foresight"] [1,2] aspect index === degree index

                const index = bookMemory.aspect.findIndex(asp => asp === tabName.toLowerCase())
                if(bookMemory.degree[index] === 4 || bookMemory.degree[index] === 5) {
                    listD.push(book)
                } else if(bookMemory.degree[index] === 3) {
                    listC.push(book)
                } else if(bookMemory.degree[index] === 2) {
                    listB.push(book)
                } else {
                    listA.push(book)
                }
            }
        }

                listA.sort((a,b) => {
                    const ma = a.memoryName
                    const mb = b.memoryName
                    if(ma < mb) return -1
                    if(ma > mb) return 1
                    return 0
                })

                listB.sort((a,b) => {
                    const ma = a.memoryName
                    const mb = b.memoryName
                    if(ma < mb) return -1
                    if(ma > mb) return 1
                    return 0
                })

                listC.sort((a,b) => {
                    const ma = a.memoryName
                    const mb = b.memoryName
                    if(ma < mb) return -1
                    if(ma > mb) return 1
                    return 0
                })

                listD.sort((a,b) => {
                    const ma = a.memoryName
                    const mb = b.memoryName
                    if(ma < mb) return -1
                    if(ma > mb) return 1
                    return 0
                })

            listA.forEach(item => list.push(item))
            listB.forEach(item => list.push(item))
            listC.forEach(item => list.push(item))
            listD.forEach(item => list.push(item))
            return list
    } else {
            const sortedList = mainLibraryStorage.getBooksMenu().books.sort((a,b) => {
            let ba = a.name.toLowerCase() 
            let bb = b.name.toLowerCase()
            if(ba < bb) return -1
            if(ba > bb) return 1
            return 0
        })
            return sortedList
    }
}

//Util for flash animation

function flash(e) {
    e.target.classList.add("flash")
    setTimeout(function() {
        e.target.classList.remove("flash")
    }, 0.03)
}

//TEMP TODO ADD RECIPES

