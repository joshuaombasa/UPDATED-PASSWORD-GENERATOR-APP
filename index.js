const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = ''

// console.log(passwordLengthInput)
// passwordLengthInput = parseInt(passwordLengthInput)

function getPassword() {
    const passwordLengthInput = document.getElementById("password-length-input").value
    for (let i = 0; i < passwordLengthInput; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        password += characters[randomNumber]
        
    }
    document.getElementById("password-area1").textContent = password
    document.getElementById("password-area2").textContent = password
    password = ''
}


const generatePasswordBtn = document.getElementById("generate-password-btn")
generatePasswordBtn.addEventListener("click", getPassword)