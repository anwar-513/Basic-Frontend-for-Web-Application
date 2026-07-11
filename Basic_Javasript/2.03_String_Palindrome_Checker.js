function isPalidrome(tester) {
    let left = 0;
    let lastIndex = tester.length - 1
    let right = lastIndex
    while (left < right) {
        if (tester[left] === tester[right]) {
            return true;
        }
        else {
            left++;
            right--;
        }

    }
    return false;

}


let tester = "nan";

if (isPalidrome(tester)) {
    console.log("The given string '" + tester + "' is Palindrom.")
}
else {
    console.log("The given string '" + tester + "' is Not Palindrom.")
}