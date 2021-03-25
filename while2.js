function oldBooks(arr) {
    let i = 1;
    let booksChecked = 0;
    while (arr[i] !== 'No More Books') {
        booksChecked += 1;
        i += 1;
        if (arr[0] == arr[i]) {
            console.log(`You checked ${booksChecked} and found it`);
        }
    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksChecked} books.`);
}


function examPreparation(arr) {
    let i = 0;
    let cuurentGrade = Number(arr[i++]);
    let currentProblem = arr[i++];
    let badGrades = 0;
    let gradesNumber = 0;
    let sum = 0;
    while (currentProblem !== "Enough") {

        if (cuurentGrade <= 4) {
            badGrades++;
            if (badGrades == arr[0]) {
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        }
        cuurentGrade = Number(arr[i++]);
        currentProblem = arr[i++];
        gradesNumber++;
        sum += cuurentGrade;
    }
    if (badGrades < arr[0]) {
        i -= 3;
        currentProblem = arr[i]
        console.log(`Average score: ${(sum/gradesNumber).toFixed(2)}`);
        console.log(`Number of problems: ${gradesNumber}`);
        console.log(`Last problem: ${currentProblem}`);
    }
}

function vacation(arr) {
    let i = 0;
    let spendDays = 0;
    let days = 0;
    let currentOpperation = "";
    let sumNeeded = Number(arr[i++]);
    let money = Number(arr[i++]);
    while (money < sumNeeded) {
        currentOpperation = arr[i++];
        let currentSum = Number(arr[i++]);
        days++;
        if (currentOpperation == "spend") {
            money -= currentSum;
            if (money < 0) {
                money = 0;
            }
        } else {
            money += currentSum;
        }
        if (currentOpperation == "spend") {
            spendDays++;
            if (spendDays == 5) {
                break;
            }
        } else if (currentOpperation == "save") {
            spendDays = 0;
        }
    }
    if (spendDays == 5) {
        console.log(`You can't save the money.`);
        console.log(`${days}`);

    } else {
        console.log(`You saved the money for ${days} days.`);
    }
}

function steps(arr) {
    let i = 0;
    let steps = 0;
    let currentSteps = arr[i];


    while (steps < 10000) {
        currentSteps = arr[i];
        if (currentSteps == "Going home") {
            i++;
            currentSteps = Number(arr[i]);
            steps += currentSteps;
            break;
        } else {
            currentSteps = Number(arr[i++])
            steps += currentSteps;
        }

    }
    if (steps >= 10000) {
        console.log(`Goal reached! Good job!
        ${steps - 10000} steps over the goal!
        `)
    } else {
        console.log(`${10000-steps} more steps to reach goal.`)
    }

}