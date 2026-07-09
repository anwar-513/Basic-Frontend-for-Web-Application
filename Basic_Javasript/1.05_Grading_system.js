let marks = 80

if(marks < 0 || marks > 100)
{
    console.log("Invalid marks!!!!")
}
else if(marks < 60)
{
    console.log("Failed!!!")
}
else if(marks < 65)
{
    console.log("C")
}
else if(marks < 72)
{
    console.log("C+")
}
else if(marks < 80)
{
    console.log("B")
}
else if(marks < 87)
{
    console.log("B+")
}
else if(marks < 91)
{
    console.log("A")
}
else {
    console.log("A+")
}
