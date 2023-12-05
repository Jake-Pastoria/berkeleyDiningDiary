const submitPostReq = document.getElementById("submitText")
const inputName = document.getElementById("userLoginInput")
const inputPassword = document.getElementById("userPasswordInput")
const statusMessage = document.getElementById("statusMessageText")

submitPostReq.addEventListener("click", async function () {
    let data = {
        "username": inputName.value,
        "password": inputPassword.value, 
    }
    const response = await fetch("http://localhost:3000/register", {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
    })
    const dataJSON = await response.json()
    if (dataJSON.message == "User Already Exists"){
        statusMessage.innerHTML = "User already exists..."
    }else{
        statusMessage.innerHTML = "Registered Successfully!"
        inputName.value = ""
        inputPassword.value = ""
    }
    console.log(dataJSON)
});