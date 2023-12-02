const submitPostReq = document.getElementById("submitFilter")
const inputLocation = document.getElementById("userLocationInput")
const inputDate = document.getElementById("userDateInput")
const statusMessage = document.getElementById("statusMessageText")

submitPostReq.addEventListener("click", async function () {
    let data = {
        "location": inputLocation.value,
        "date": inputDate.value, 
    }
    const response = await fetch("http://localhost:3000/filter", {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
    })
    const dataJSON = await response.json()
    if (dataJSON.length == 0){
        statusMessage.innerHTML = "None Found Under Those Parameters"
    }else{
        var results = JSON.stringify(dataJSON)
        var location2 = inputLocation.value
        var date = inputDate.value

        localStorage.setItem('location2', location2);
        localStorage.setItem('date', date);
        localStorage.setItem('results', results);
        document.location = "filter.html"
    }
    console.log(dataJSON)
});