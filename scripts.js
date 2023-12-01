const submitPostReq = document.getElementById("submitText")
const inputName = document.getElementById("userLoginInput")
const inputPassword = document.getElementById("userPasswordInput")

submitPostReq.addEventListener("click", async function () {
    let data = {
        "username": inputName.value,
        "password": inputPassword.value, 
    }
    await fetch("http://localhost:3000/register", {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
    })
});
