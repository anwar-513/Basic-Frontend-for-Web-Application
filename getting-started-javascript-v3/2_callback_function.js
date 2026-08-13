// A callback is just a function passed into another function,
// to be run after some work is done.
function greetUser(name, callback) {
    console.log("Hi " + name + ", processing...");
    callback(); // runs the passed-in function
}

function sayDone() {
    console.log("Done!");
}

greetUser("Ali", sayDone);
// Output:
// Hi Ali, processing...
// Done!