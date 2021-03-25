function clock() {
    for (let i = 0; i <= 23; i++) {
        for (let j = 0; j <= 59; j++) {
            console.log(`${i}:${j}`);
        }
    }
}

function multipicationTable() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i*j}`);
        }
    }
}

function combinations(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            for (let k = 0; k <= n; k++) {
                if (i + j + k == n) {
                    sum += 1;
                }
            }
        }
    }
    console.log(sum);
}

function twoNumbers(arr) {
    arr[0] = Number(arr[0]);
    arr[1] = Number(arr[1]);
    arr[2] = Number(arr[2]);
    let found = false;
    let combinations = 0;
    for (i = arr[0]; i <= arr[1]; i++) {
        if (found) {
            break;
        }
        for (j = arr[0]; j <= arr[1]; j++) {
            combinations += 1;
            if (i + j == arr[2]) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${i+j})`);
                found = true;
            }
        }
    }
    if (!found) {
        console.log(`${combinations} combinations - neither equals ${arr[2]}`);
    }
}


function traveling(arr) {
    let i = 0;
    let destination;
    let sum = 0;
    while (arr[i] != "End") {
        destination = arr[i++];
        arr[i] = Number(arr[i]);
        let neededSum = arr[i++];
        while (sum <= neededSum) {
            arr[i] = Number(arr[i]);
            sum += arr[i++];
        }
        sum = 0;
        console.log(`Going to ${destination}!`);
    }
}

function building(arr) {
    let floors = Number(arr[0]);
    let rooms = Number(arr[1]);
    let result = "";
    for (i = floors; i > 0; i--) {
        for (j = 0; j < rooms; j++) {
            if (i == floors) {
                result += `L${i}${j} `;
            } else if (i % 2 == 0) {
                result += `O${i}${j} `;
            } else {
                result += `A${i}${j} `;
            }
        }
        console.log(result);
        result = ''
    }
}

function cinemaTickets(arr) {
    let i = 0;
    let freeSpace = 0;
    let standard = 0;
    let kid = 0;
    let student = 0;
    let bought = 0;
    let total = 0;
    let currentMovie = arr[i++];

    while (currentMovie != 'Finish') {
        freeSpace = Number(arr[i++]);
        while (true) {
            if (arr[i] == "standard") {
                i++;
                standard += 1;
                bought += 1;
            } else if (arr[i] == 'kid') {
                i++;
                kid += 1;
                bought += 1;
            } else if (arr[i] == "student") {
                i++;
                student += 1;
                bought += 1;
            }
            if (arr[i] == "End") {
                i++;
                break;
            } else if (bought == freeSpace) {
                break;
            }
        }

        let percent = (bought / freeSpace) * 100;
        console.log(`${currentMovie} - ${percent.toFixed(2)}% full.`);
        currentMovie = arr[i++];
        total += bought;
        bought = 0;
    }
    console.log(`Total tickets: ${total}`);
    console.log(`${((student/total)*100).toFixed(2)}% student tickets.`);
    console.log(`${((standard/total)*100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid/total)*100).toFixed(2)}% kids tickets.`)
}


function tournament(arr) {
    let i = 0;
    let currentTournament;
    let curretRace;
    let totalRaised = 0;
    let won = 0;
    let todayRaised = 0;
    let daysWon = 0;
    let daysLost = 0;
    let lost = 0;
    let days = Number(arr[i++]);
    while (days != 0) {
        currentTournament = arr[i];
        while (currentTournament != 'Finish') {
            i++;
            if (arr[i] == 'win') {
                todayRaised += 20;
                won += 1;
                i++;
            } else if (arr[i] == 'lose') {
                lost += 1;
                i++;
            }

            currentTournament = arr[i];
        }
        if (won > lost) {
            todayRaised *= 1.1;
            daysWon += 1;
        } else {
            daysLost += 1;
        }
        totalRaised += todayRaised;
        todayRaised = 0;
        days -= 1;
        i++;
    }
    if (daysWon > daysLost) {
        totalRaised *= 1.2
        console.log(`You won the tournament! Total raised money: ${totalRaised.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalRaised.toFixed(2)}`)
    }
}

function sumPrime(arr) {
    let i = 0;
    let prime;
    let primeSum = 0;
    let nonPrimeSum = 0;
    while (arr[i] != 'stop') {
        arr[i] = Number(arr[i]);
        if (arr[i] < 0) {
            console.log(`Number is negative.`);
            i++;
            continue;
        }
        for (let j = 1; j < arr[i]; j++) {

            if (j * j == arr[i]) {
                prime = true;
                primeSum += arr[i];
                break;
            } else {
                prime = false;
            }
        }
        if (!prime) {
            nonPrimeSum += arr[i];
        }
        i++;
    }
    console.log(`Sum of all prime numbers is: ${nonPrimeSum}`);
    console.log(`Sum of all non prime numbers is: ${primeSum}`);
}