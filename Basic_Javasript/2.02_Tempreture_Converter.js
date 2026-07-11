
function celsiusToFahrenheit (cel)
{
    let fohrenheit = (9/5) * cel + 32
    return fohrenheit;
}

for(let i = 1; i <= 10; i++)
{
    console.log(celsiusToFahrenheit(i*10))
}


    console.log(celsiusToFahrenheit(37).toFixed(2))