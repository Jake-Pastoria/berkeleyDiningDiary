const container = document.getElementById("filterResultsContainer")
const text2 = document.getElementById("findFilterText2")

var retrievedResults = JSON.parse(localStorage.getItem('results'))

location2 = localStorage.getItem("location2")
date = localStorage.getItem("date")

text2.textContent = "Results for " + location2 + " on " + date

for (let index = 0; index < retrievedResults.length; index = index + 1) {
    console.log(retrievedResults[index])
    const entryUsername = retrievedResults[index].username
    const entryFoodItem = retrievedResults[index].fooditem
    const entryRating = retrievedResults[index].rating + "/10"

    const listElement = document.createElement("div")

    listElement.style.display = "flex"
    

    const listFoodItemElement = document.createElement("div")
    const listUsernameElement = document.createElement("div")
    const listRatingElement = document.createElement("div")

    listFoodItemElement.textContent = entryFoodItem
    listUsernameElement.textContent = entryUsername
    listRatingElement.textContent = entryRating

    listFoodItemElement.style.backgroundColor = "white"
    listUsernameElement.style.backgroundColor = "white"
    listRatingElement.style.backgroundColor = "white"

    listFoodItemElement.style.borderRadius = "15px"
    listUsernameElement.style.borderRadius = "15px"
    listRatingElement.style.borderRadius = "15px"

    listFoodItemElement.style.width = "475px"
    listUsernameElement.style.width = "390px"
    listRatingElement.style.width = "130px"

    listFoodItemElement.style.height = "50px"
    listUsernameElement.style.height = "50px"
    listRatingElement.style.height = "50px"

    listFoodItemElement.style.marginTop = "15px"
    listUsernameElement.style.marginTop = "15px"
    listRatingElement.style.marginTop = "15px"

    listFoodItemElement.style.marginLeft = "40px"
    listUsernameElement.style.marginLeft = "30px"
    listRatingElement.style.marginLeft = "30px"
    
    listFoodItemElement.style.textAlign = "center"
    listUsernameElement.style.textAlign = "center"
    listRatingElement.style.textAlign = "center"

    listFoodItemElement.style.alignItems = "center"
    listUsernameElement.style.alignItems = "center"
    listRatingElement.style.alignItems = "center"


    listElement.appendChild(listFoodItemElement)
    listElement.appendChild(listUsernameElement)
    listElement.appendChild(listRatingElement)

    container.appendChild(listElement)
    

}

