let isRegistered = true;
let isEmailValid = true;
let isBanned = false;

if(isBanned)
{
    console.log("The account is banned");
}
else if( !isEmailValid)
{
    console.log("Invalid Email");
}
else if(!isRegistered)
{
    console.log("Account is not registered")
}
else{
    console.log("Login Succeful")
}
