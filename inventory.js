const DatabaseLoader5000 = function () {
    const db = localStorage.getItem("inventoryDatabase")
    return JSON.parse(db)
}

const HomeInventoryDatabase = {}

HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []
/**
 {
     furniture: [],
     crafts: [],
     electronics: []
 }
 */

const vintageInkwell = { name: "Vintage Ink Well", location: "Writing desk", description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing." }
const writingDesk = { name: "Shaker Writing Desk", location: "Bedroom", description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction." }
const television = { name: "Flat Screen", location: "Living Room", description: "Lets me watch movies." }

HomeInventoryDatabase.furniture.push(writingDesk)
HomeInventoryDatabase.crafts.push(vintageInkwell)
HomeInventoryDatabase.electronics.push(television)

const inventoryEl = document.querySelector("#my-inventory")

for (let type in HomeInventoryDatabase) {
    const currentTypeArray = HomeInventoryDatabase[type]

    currentTypeArray.forEach(itemInArray => {
        const itemSection = document.createElement("section")

        for (let prop in itemInArray) {
            const pComponent = document.createElement("p")
            pComponent.textContent = itemInArray[prop]
            itemSection.appendChild(pComponent)
            inventoryEl.appendChild(itemSection)
        }

    });
}

