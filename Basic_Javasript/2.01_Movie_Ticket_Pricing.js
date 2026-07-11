
let age = 70;
let price

if(age < 150 && age > 60)
{
    price = 100;
    console.log("Ticket Price:     " + price)
    
}
else if(age > 0 && age < 20){
    price = 200;
    console.log("Ticket Price:     " + price)
}
else if(age < 60)
{
    price = 400;
    console.log("Ticket Price:     " + price)
}
else 
{
    console.log("Invalid Age!!!!")
}
