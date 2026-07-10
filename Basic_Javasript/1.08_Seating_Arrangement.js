let rows = 5;
let coloms = 8;
let line = "";

for(let i = 1; i <= rows; i++)
{
    for(let j = 1; j <= coloms; j++)
    {
        line = line +  (" " + String.fromCharCode(64+ i) + j)
    }
}


console.log(line);

