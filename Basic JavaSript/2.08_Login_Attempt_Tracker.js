const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let password = "anwar11";
let failedAttempt = 0;
let attempts = 0;

rl.question("Enter your name: ", function (name) {
  console.log("Hello,", name);

  login();
});

function login() {
  rl.question("Enter password: ", function (input) {
    attempts++;

    if (input === password) {
      console.log("Login Successful");
      console.log("Attempts:", attempts);
      rl.close();
      return;
    }

    failedAttempt++;
    console.log("Wrong Password!");

    if (failedAttempt >= 3) {
      console.log("Account Locked!");
      console.log("Attempts:", attempts);
      rl.close();
      return;
    }

    login();
  });
}
