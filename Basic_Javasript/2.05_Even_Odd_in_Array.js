const numbers = [2,4,5,6,8,12,22,12,121,13,16,64,33,87];
let even = 0;
let odd = 0;

for(let i = 0; i < numbers.length; i++)
{
    if(numbers[i] % 2 == 0)
    {
        even++;
    }
    else 
    {
        odd++
    }
}

console.log("The total even in number in the Array is: " + even);
console.log("The total odd in number in the Array is: " + odd);