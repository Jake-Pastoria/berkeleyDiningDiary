const submitPostReq = document.getElementById("submitTextLogin")
const inputLocation = document.getElementById("userLocationInput")
const inputDate = document.getElementById("userDateInput")
const inputFoodItem = document.getElementById("userFoodItemInput")
const inputRating = document.getElementById("userRatingInput")
const statusMessage = document.getElementById("statusMessageText")

submitPostReq.addEventListener("click", async function () {
    let data = {
        "fooditem": inputFoodItem.value,
        "rating": inputRating.value,
        "location": inputLocation.value,
        "date": inputDate.value,
        "username": localStorage.getItem("sharedVariable")

    }
    const response = await fetch("http://localhost:3000/add", {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
    })
    console.log(response)
    // const dataJSON = await response.json()
    // if (dataJSON.message == "None Found Under Those Parameters"){
    //     statusMessage.innerHTML = "None Found Under Those Parameters"
    // }else{
    //     statusMessage.innerHTML = "Loading Filters!"
    // }
    // console.log(dataJSON)
});