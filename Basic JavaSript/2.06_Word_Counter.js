let sentence = "I love programming.";

let words = sentence.split(" ");

let longestWord = words[0];

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}


console.log("The sentence contains " + words.length + " words.");
console.log("The longest word in the sentece: " + longestWord);