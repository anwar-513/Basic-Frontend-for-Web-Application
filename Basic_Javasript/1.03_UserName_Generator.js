let firstName = "Anwar";
let lastName = "Ullah";
let dateOfBirth = "2007"

let userName = (firstName.toLowerCase() + "_" + lastName.toLowerCase() + dateOfBirth.slice(2))

if (userName.length < 6) {
    userName = userName + "_user";
}

console.log(userName)

