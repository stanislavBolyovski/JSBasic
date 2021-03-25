function stop(str) {
    let i = 0;
    while (true) {
        if (str[i] == "Stop") {
            break;
        } else {
            console.log(str[i]);
            i++;
        }
    }
}

function password(arr) {
    arr = Number(arr);
    let name = arr[0];
    let password = arr[1];
    let data;
    let i = 2;
    while (data !== password) {
        data = arr[i];
        i++;
    }
    console.log(`Welcome ${name}!`);
}

function sumOfRow(arr) {
    let start = Number(arr[0]);
    let sum = 0;
    let i = 1;
    while (arr[0] > sum) {
        let currentNum = Number(arr[i]);
        sum += currentNum;
        i++
    }
    console.log(sum);
}

function sequence(n) {
    let k = 1;
    while (k <= n) {
        console.log(k);
        k = 2 * k + 1;
    }
}

function accountBalance(arr) {

    let total = 0;
    let i = 0;
    while (arr[i] !== "NoMoreMoney") {
        let currentSum = Number(arr[i])
        if (arr[i] < 0) {
            console.log('Invalid operation!');
            break;
        } else {
            total += currentSum;
            i++;
            console.log(`Increase: ${currentSum.toFixed(2)}`);
        }

    }
    console.log(`Total: ${total.toFixed(2)}`);
}

function biggestNumber(arr) {
    let i = 0;
    let max = Number.MIN_SAFE_INTEGER;
    while (arr[i] !== 'Stop') {
        arr[i] = Number(arr[i]);
        if (arr[i] > max) {
            max = arr[i];
        }
        i++;
    }
    console.log(max);
}



function minNumber(arr) {
    let i = 0;
    let min = Number.MAX_SAFE_INTEGER;
    while (arr[i] !== 'Stop') {
        arr[i] = Number(arr[i]);
        if (arr[i] < min) {
            min = arr[i];
        }
        i++;
    }
    console.log(min);
}

function graduation(arr) {
    let grade = 0;
    let sum = 0;
    let i = 1;
    let average = 0;
    let fail = 0;
    arr[i] = Number(arr[i]);
    while (grade <= 12) {

        if (arr[i] <= 4) {
            fail += 1;
            i++;
            if (fail > 1) {
                grade += 1;
                break;
            }
        } else {
            grade++;
            sum += arr[i];
            i++;
        }
    }
    average = sum / grade;
    if (fail > 1) {
        console.log(`${arr[0]} has been excluded at ${grade} grade`);
    } else {
        console.log(`${arr[0]} graduated. Average grade: ${average}`);
    }
}


function moving(arr) {
    let x = arr[0];
    let y = arr[1];
    let z = arr[2];
    let sum = 0;
    let i = 3;
    let space = x * y * z;
    while (arr[i] !== 'Done') {
        arr[i] = Number(arr[i]);
        sum += arr[i];
        i++;
        if (space < sum) {
            console.log(`No more free space! You need ${sum - space} Cubic meters more.`);
            break;
        }
    }
    if (space > sum) {
        console.log(`${space-sum} Cubic meters left.`);
    }
}