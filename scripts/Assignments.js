import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities() // ✅ FIXED: Added parentheses

// Function to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    return allWalkers.find(walker => walker.id === pet.walkerId)
}

// Function to find the city assigned to a walker
const findCity = (walker, allCities) => {
    return allCities.find(city => city.id === walker.cityId)
}

export const assignments = () => {
    let assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const walkerCity = findCity(currentPetWalker, cities) // ✅ Use helper to get city

        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${walkerCity.name}
            </li>
        `
    }

    assignmentHTML += "</ul>"
    return assignmentHTML
}