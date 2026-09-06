// TASK 1 
function welcomeUser() {
    alert("Welcome to my site");
}

welcomeUser();

let userName = prompt("Enter your name");
alert("Welcome " + userName);

let Arrays = [
    [80, 75, 85],
    [90, 94, 91],
    [60, 67, 15],
    [40, 85, 55]
];

for (let i = 0; i < Arrays.length; i++) {

    let sum = 0;

    for (let j = 0; j < Arrays[i].length; j++) {
        sum += Arrays[i][j];
    }

    let average = sum / Arrays[i].length;
    let grade;

    switch (grade) {
        case average >= 85:
            grade = "A"
            break;

        case average >= 70:
            grade = "B"
            break;

        case average >= 50:
            grade = "C"
            break;

        default:
            grade = "f"
            break;
    }


    // if (average >= 85) {
    //     grade = "A";
    // }
    // else if (average >= 70) {
    //     grade = "B";
    // }
    // else if (average >= 50) {
    //     grade = "C";
    // }
    // else {
    //     grade = "F";
    // }


    console.log(
        "Class " + (i + 1) +
        " Average = " + average +
        ", Grade = " + grade
    );
}