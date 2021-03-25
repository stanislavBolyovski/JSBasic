function oddOrEven(num) {
    num = Number(num);
    if (num % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

function between100And200(num) {
    num = Number(num);
    if (num < 100) {
        console.log("Less than 100");
    } else if (num <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}

function password(pass) {
    if (pass == 's3cr3t!P@ssw0rd') {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}

function area(type, a, b) {

    let area = Number;

    if (type == "square") {
        area = Math.pow(a, 2);
    } else if (type == "rectangle") {
        area = a * b;
    } else if (type == "circle") {
        area = Math.PI * Math.pow(a, 2);
    } else if (type == "triangle") {
        area = a * b / 2;
    }
    (area).toFixed(3);
    let final = area.toFixed(3);
    console.log(final);
}

function toyShop(price, numPuzzles, numDolls, numBears, numMinions, numTruks) {
    price = Number(price);
    let discount = 0;
    let puzzle = 2.6 * numPuzzles;
    let doll = 3 * numDolls;
    let bear = 4.1 * numBears;
    let minion = 8.2 * numMinions;
    let truck = 2 * numTruks;

    let sum = puzzle + doll + bear + minion + truck;

    let count = numTruks + numMinions + numBears + numDolls + numPuzzles

    if (count >= 50) {
        discount = sum - (sum * 0.75);
    }

    let finalPrice = sum - discount;
    let rent = finalPrice - (finalPrice * 0.9);
    finalPrice -= rent;
    let result = (price - finalPrice).toFixed(2);



    if (price <= finalPrice) {
        console.log(`Yes! ${(-1*result).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${result} lv needed.`)
    }
}
toyShop(40.8, 20, 25, 30, 50, 10);
toyShop(320, 8, 2, 5, 5, 1);