import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()


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

    for (const city of cities) {
        const cityWalkers = walkers.filter(walker => walker.cityId === city.id)

        if (cityWalkers.length > 0) {
            const walkerName = cityWalkers[0].name

            citiesHTML += `<li data-type="city" data-walkername="${walkerName}">${city.name}</li>`
        }
    }

    citiesHTML += "</ol>"
    return citiesHTML
}