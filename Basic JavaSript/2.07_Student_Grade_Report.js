let students = [
    { name: "Ali", marks: 92 },
    { name: "Sara", marks: 81 },
    { name: "Ahmed", marks: 73 },
    { name: "Ayesha", marks: 65 },
    { name: "Bilal", marks: 48 }
];

for (let i = 0; i < students.length; i++) {

    if (students[i].marks >= 90) {
        students[i].grade = "A";
    }
    else if (students[i].marks >= 80) {
        students[i].grade = "B";
    }
    else if (students[i].marks >= 70) {
        students[i].grade = "C";
    }
    else if (students[i].marks >= 60) {
        students[i].grade = "D";
    }
    else {
        students[i].grade = "F";
    }

    console.log(
        "Name:  " + students[i].name +
        "   Marks: " + students[i].marks +
        "   Grade: " + students[i].grade
    );
}