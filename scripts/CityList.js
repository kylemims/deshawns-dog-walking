import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvt) => {
        const cityTarget = clickEvt.target

        if (cityTarget.dataset.type === "city") {

            window.alert(`${cityTarget.dataset.walkername} is serving this city.`)
        }

    }
)

export const cityList = () => {
    let citiesHTML = `<ol>`

    for (const walker of walkers) {
        citiesHTML += `<li data-type="city" data-walkername="${walker.name}">${walker.city}</li>`
    
    }
    citiesHTML += `</ol>`
    
    return citiesHTML
}

