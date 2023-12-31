const inputName = document.getElementById("userLoginInput")
const inputPassword = document.getElementById("userPasswordInput")
const submitLoginReq = document.getElementById("submitTextLogin")
const statusMessage = document.getElementById("statusMessageText")
var x = ""

submitLoginReq.addEventListener("click", async function () {
    console.log("test")
    let data = {
        "username": inputName.value,
        "password": inputPassword.value, 
    }
    const response = await fetch("http://localhost:3000/login", {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
    })
    const dataJSON = await response.json()
    if (dataJSON.length == 0){
        statusMessage.innerHTML = "Failed to find a user with that information..."
    }else{
        var sharedValue = dataJSON[0].username;
        localStorage.setItem('sharedVariable', sharedValue);
        document.location = "welcome.html"
    }
    
});