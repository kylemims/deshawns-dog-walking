import { getWalkers } from "./database.js"

const walkerData = getWalkers()

document.addEventListener(
    "click",
    (clickEvent)  => {
        const whatWasClickedOn = clickEvent.target

        if (whatWasClickedOn.dataset.type === "walker") {
            window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`)

        }

    }
)


export const walkers = () => {
    let walkerHTML = `<ul>`

    for (const walker of walkerData) {
        walkerHTML += `<li data-id="${walker.id}"
                            data-city="${walker.city}"
                            data-type="walker"
                                >${walker.name}
                        </li>`
    }

    walkerHTML += `</ul>`
    return walkerHTML

}