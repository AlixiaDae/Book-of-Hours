import Storage from "./modules/bookModules/storage.js"
import mainLibraryStorage from "./modules/mainLibraryStorage.js"
import recipeList from "./modules/recipeFactory.js"
import skillList from "./modules/skillFactory.js"
import memoryList from "./modules/memory.js"

//Local Storages

const storage = new Storage("hushhouse")

// DOM Functions
const contentBox = document.querySelector(".content")
const resetStorageBtn = document.querySelector(".reset")
const craftListEl = document.querySelector(".craft-list")
const aspectListEl = document.querySelector(".aspect-list")

resetStorageBtn.addEventListener("click", () => {
    localStorage.removeItem("hushhouse")
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

const skillTab = document.querySelector(".skills-tab")
skillTab.addEventListener("click", () => {
    createHeaders("skills")
    createSkillsTab(skillList, contentBox)
})

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
    
    const removeBook = document.createElement("span")
    removeBook.classList.add("fa-solid", "fa-square-minus", "fa-xl")
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
    
    bookNameContainer.append(bookName, addToStorage, removeBook)
    memoryNameContainer.appendChild(memoryName)
    skillNameContainter.appendChild(skillName)
    container.append(bookNameContainer, memoryNameContainer, skillNameContainter)
    box.appendChild(container)

    const plusMinus = document.querySelectorAll(".fa-solid")

    plusMinus.forEach(button => button.addEventListener("click", flash))

    addToStorage.addEventListener("click", () => {
        storage.addBook(bookObject)
    })

    removeBook.addEventListener("click", () => {
        storage.deleteBook(bookName.textContent)
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
    recipeTabs[0].classList.add("active")
    createHeaders("recipe")
    createCraftTab(recipeList, "Beverages", contentBox)
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
            if(Array.isArray(typeObject[i].workstation)) {
                work.textContent = typeObject[i].workstation.join(", ")
            } else {
                work.textContent = typeObject[i].workstation
            }
            const skill = document.createElement("div")
            if(Array.isArray(typeObject[i].skill)) {
                skill.textContent = typeObject[i].skill.join(", ")
            } else {
                skill.textContent = typeObject[i].skill
            }
            const ingredients = document.createElement("div")
            if(Array.isArray(typeObject[i].ingredients)) {
                ingredients.textContent = typeObject[i].ingredients.join(", ")
            } else {
                ingredients.textContent = typeObject[i].ingredients
            }
            const result = document.createElement("div")
            if(Array.isArray(typeObject[i].result)) {
                result.textContent = typeObject[i].result.join(", ")
            } else {
                result.textContent = typeObject[i].result
            }
            const notes = document.createElement("div")
            if(Array.isArray(typeObject[i].notes)) {
                notes.textContent = typeObject[i].notes.join(", ")
            } else {
                notes.textContent = typeObject[i].notes
            }
            container.append(name, aspect, work, skill, ingredients, result, notes)
            box.appendChild(container)
        }
    }
}

function createSkillsTab(list, box) {
    console.log(list)
    for(let i = 0; i < list.length; i++) {
        const container = document.createElement("div")
        container.classList.add("skill-grid")
        const name = document.createElement("div")
        name.textContent = list[i].name
        const principles = document.createElement("div")
        principles.textContent = list[i].principles.join(", ")

        const wisdomContainer = document.createElement("div")
        const wisdomOne = document.createElement("div")
        wisdomOne.textContent = list[i].wisdoms[0]
        const wisdomTwo = document.createElement("div")
        wisdomTwo.textContent = list[i].wisdoms[1]
        addClass([wisdomOne, wisdomTwo], "wisdom")

        const attunablesContainer = document.createElement("div")
        const atOne = document.createElement("div")
        atOne.textContent = list[i].attunables[0]
        const atTwo = document.createElement("div")
        atTwo.textContent = list[i].attunables[1]
        addClass([atOne, atTwo], "attunables")

        wisdomContainer.append(wisdomOne, wisdomTwo)
        attunablesContainer.append(atOne, atTwo)
        container.append(name, principles, wisdomContainer, attunablesContainer)
        box.appendChild(container)
    }
}

function addClass(list, type) {
    for(let i = 0; i < list.length; i++) {
    if(type === "wisdom") {
        switch(list[i].textContent) {
            case "Preservation" :
                list[i].classList.add("preser")
                break;
            case "Horomachistry" :
                list[i].classList.add("horo")
                break;
            case "Birdsong" :
                list[i].classList.add("bird")
                break;
            case "Ithastry" :
                list[i].classList.add("itha")
                break;
            case "Illumination" :
                list[i].classList.add("illu")
                break;
            case "Hushery" :
                list[i].classList.add("hushery")
                break;
            case "Nyctodromy" :
                list[i].classList.add("nycto")
                break;
            case "Skolekosophy" :
                list[i].classList.add("skole")
                break;
            case "Bosk" :
                list[i].classList.add("bosk")
                break;
        }
    } else if(type === "attunables") {
        switch(list[i].textContent) {
            case "Wist" : 
                list[i].classList.add("wist")
                break;
            case "Phost" :
                list[i].classList.add("phost")
                break;
            case "Health" :
                list[i].classList.add("health")
                break;
            case "Mettle" :
                list[i].classList.add("mettle")
                break;
            case "Trist" :
                list[i].classList.add("trist")
                break;
            case "Ereb" :
                list[i].classList.add("ereb")
                break;
            case "Fet" :
                list[i].classList.add("fet")
                break;
            case "Shapt" :
                list[i].classList.add("shapt")
                break;
            case "Chor" :
                list[i].classList.add("chor")
                break;
        }
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
        contentBox.textContent = ""
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
        notes.textContent = "Additional notes"

        header.append(rName, aspect, work, skillName, ingredients, results, notes)
        contentBox.appendChild(header)
    } else if(tabType === "skills") {
        aspectListEl.classList.remove("visible")
        craftListEl.classList.remove("visible")
        contentBox.textContent = ""
        const header = document.createElement("div")
        header.classList.add("skill-content-headers")
        const sName = document.createElement("div")
        sName.textContent = "Skill Name"
        const pName = document.createElement("div")
        pName.textContent = "Principles"
        const wName = document.createElement("div")
        wName.textContent = "Wisdoms"
        const attunables = document.createElement("div")
        attunables.textContent = "Attunable Elements"

        header.append(sName, pName, wName, attunables)
        contentBox.appendChild(header)
    }
}


// Util function for sorting books
// Sorts books alphabetically on Hush House tab
// Sorts the memories by degree and alphabetically on Aspect tab

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

                // ["lantern","foresight"] [1,2] aspect index => degree index

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

            // Sorts books with memories of 1 degree alphabetically

                listA.sort((a,b) => {
                    const ma = a.memoryName
                    const mb = b.memoryName
                    if(ma < mb) return -1
                    if(ma > mb) return 1
                    return 0
                })

            // Sorts books with memories of 2 degree alphabetically

                listB.sort((a,b) => {
                    const ma = a.memoryName
                    const mb = b.memoryName
                    if(ma < mb) return -1
                    if(ma > mb) return 1
                    return 0
                })

            
            // Sorts books with memories of 3 degree alphabetically

                listC.sort((a,b) => {
                    const ma = a.memoryName
                    const mb = b.memoryName
                    if(ma < mb) return -1
                    if(ma > mb) return 1
                    return 0
                })

            // Sorts books with memories of 4 and 5 degree alphabetically

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

//Util for activating tabs


function setActiveAspectButton(button) {
    aspectTabs.forEach(button => {
        if(button !== this) {
            button.classList.remove("active")
        }
    })
    button.classList.add("active")
}

function setActiveCraftButton(button) {
    recipeTabs.forEach(button => {
        if(button !== this) {
            button.classList.remove("active")
        }
    })
    button.classList.add("active")
}

// Listeners for activating tabs

aspectTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        setActiveAspectButton(tab)
    })
})

recipeTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        setActiveCraftButton(tab)
    })
})

hushTab.addEventListener("click", () => {
    aspectTabs.forEach(tab => 
        tab.classList.remove("active"))
})

hushTab.addEventListener("click", () => {
    recipeTabs.forEach(tab => {
        tab.classList.remove("active")
    })
})

craftTab.addEventListener("click", () => {
    aspectTabs.forEach(tab => {
        tab.classList.remove("active")
    })
})

skillTab.addEventListener("click", () => {
    aspectTabs.forEach(tab => {
        tab.classList.remove("active")
    })
})

skillTab.addEventListener("click", () => {
    recipeTabs.forEach(tab => {
        tab.classList.remove("active")
    })
})

