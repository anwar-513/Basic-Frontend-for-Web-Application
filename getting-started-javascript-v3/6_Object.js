const book = {
  title: "Getting Started with JavaScript",
  author: {
    firstName: "Kyle",
    secondName: "Cook",
  },
  yearOfPublish: 2025,
  publish() {
    console.log("The book is publishing");
  },
};

book.publish(); // The book is publishing
