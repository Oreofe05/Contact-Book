const contactList = document.querySelector(".contactList")
function addInfo() {
    contactList.innerHTML = ""
    const formDisplay = document.querySelector(".addForm")
    formDisplay.style.display = "block"
    const addDisplay = document.querySelector(".add")
    addDisplay.style.height = "25%"
}

function searchInfo() {
    contactList.innerHTML = ""
    const formDisplay = document.querySelector(".searchForm")
    formDisplay.style.display = "block"
    const searchDisplay = document.querySelector(".search")
    searchDisplay.style.height = "20%"
}


function deleteInfo() {
    contactList.innerHTML = ""
    const formDisplay = document.querySelector(".deleteForm")
    formDisplay.style.display = "block"
    const deleteDisplay = document.querySelector(".delete")
    deleteDisplay.style.height = "20%"

}
const contactBook = {}
function saveInfo(event) {
    event.preventDefault()
    const inputName = document.querySelector(".name").value
    const inputNumber = document.querySelector(".number").value

    if (inputName && inputNumber) {
        if (inputName in contactBook) {
            alert("name already exist!")
            const formDisplay = document.querySelector(".addForm")
            formDisplay.style.display = "none"
            const addDisplay = document.querySelector(".add")
            addDisplay.style.height = "6%"
            document.querySelector(".name").value = ""
            document.querySelector(".number").value = ""
        }
        else {
            contactBook[inputName] = inputNumber
            alert(`${inputName} saved!`)
            document.querySelector(".name").value = ""
            document.querySelector(".number").value = ""

            const formDisplay = document.querySelector(".addForm")
            formDisplay.style.display = "none"
            const addDisplay = document.querySelector(".add")
            addDisplay.style.height = "6%"

        }

    } else if (inputName) {
        alert("Enter contact number")
    } else if (inputNumber) {

        alert("Enter contact name")
    } else {
        alert(" Enter contact name and number ")
    }


}


function search(event) {
    event.preventDefault()
    contactList.innerHTML = ""
    const searchName = document.querySelector(".searchName").value

    if (searchName in contactBook) {
        const result = `Contact found!\n  Name: ${searchName}\n Phone Number: ${contactBook[searchName]}`
        alert(result)




    }
    else {
        alert("Name not found")
    }
    const searchNameSpace = document.querySelector(".searchName").value = ""

    const formDisplay = document.querySelector(".searchForm")
    formDisplay.style.display = "none"
    const searchDisplay = document.querySelector(".search")
    searchDisplay.style.height = "6%"
}

function deleteForm(event) {
    event.preventDefault()
    contactList.innerHTML = ""
    const searchName = document.querySelector(".deleteName").value

    if (searchName in contactBook) {
        delete contactBook[searchName]
        alert(`${searchName} deleted`)

    }
    else {
        alert("Name not found")
    }
    const searchNameSpace = document.querySelector(".deleteName").value = ""

    const formDisplay = document.querySelector(".deleteForm")
    formDisplay.style.display = "none"
    const searchDisplay = document.querySelector(".delete")
    searchDisplay.style.height = "6%"

}

function display() {


    for (const [names, numbers] of Object.entries(contactBook)) {
        const list = document.createElement("li")
        list.textContent = `${names} : ${numbers}`

        contactList.appendChild(list)
    }
    const displayForm = document.querySelector(".display")


}