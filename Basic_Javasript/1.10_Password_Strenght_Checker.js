let password = "Qias11112"

let upperCase = false
let lowerCase = false
let leastCharacters = 8;


let length = password.length


for (let i = 0; i < length; i++) {
    if (password.charCodeAt(i) > 64 && password.charCodeAt(i) < 92) {
        if (password[i] === password[i].toUpperCase()) {
            upperCase = true
        }
    }
    if (password.charCodeAt(i) > 96 && password.charCodeAt(i) < 123) {
        if (password[i] === password[i].toLowerCase()) {
            lowerCase = true
        }
    }
}


if (length >= 8 && upperCase && lowerCase) {
    console.log("Strong Password")
}
else if (length >= 8 && upperCase && !lowerCase) {
    console.log("Medium Pasword")
}
else if (length >= 8 && !upperCase && lowerCase) {
    console.log("Medium Pasword")
}
else {
    console.log("Weak password")
}
