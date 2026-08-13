let balance = 15000;
let withdraw = 1240;
let remaining = 0;


const dailyLimit = 2000;

if(withdraw % 10 != 0)
        {
        console.log("Amount should be a divisible amount by 10... Invalid withdraw Entered");

    }
else if(withdraw > balance)
{
    console.log("Insuffecient Balance!!!")
}
else {
   remaining = balance - withdraw;
}

console.log("Balance:         " + balance)
console.log("Withdraw:        " + withdraw)
console.log("Remaining:       " + remaining)

