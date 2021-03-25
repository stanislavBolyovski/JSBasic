function cinema(type, rows, columns) {
    rows = Number(rows);
    columns = Number(columns);
    let sum;
    if (type == "Premiere") {
        sum = rows * columns * 12;
    } else if (type == "Normal") {
        sum = rows * columns * 7.5;
    } else if (type == "Discount") {
        sum = rows * columns * 5;
    }
    console.log(`${sum.toFixed(2)} leva`);
}

function summerOutfit(degrees, daytime) {
    degrees = Number(degrees);
    let outfit, shoes;
    if (daytime == "Morning") {
        if ((degrees >= 10) && (degrees <= 18)) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if ((degrees > 18) && (degrees <= 24)) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (daytime == "Afternoon") {
        if ((degrees >= 10) && (degrees <= 18)) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if ((degrees > 18) && (degrees <= 24)) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (degrees >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else if (daytime == "Evening") {
        if ((degrees >= 10) && (degrees <= 18)) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if ((degrees > 18) && (degrees <= 24)) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

function flowers(type, num, budget) {
    num = Number(num);
    bodget = Number(budget);
    let sum;
    if (type == "Roses") {
        sum = num * 5;
        if (num > 80) {
            sum = sum - (sum * 0.1);
        }
    } else if (type == "Dahlias") {
        sum = num * 3.8;
        if (num > 90) {
            sum = sum - (sum * 0.15);
        }
    } else if (type == "Tulips") {
        sum = num * 2.8;
        if (num > 80) {
            sum = sum - (sum * 0.15);
        }
    } else if (type == "Narcissus") {
        sum = num * 3;
        if (num < 120) {
            sum = sum + (sum * 0.15);
        }
    } else if (type == "Gladiolus") {
        sum = num * 2.5;
        if (num < 80) {
            sum = sum + (sum * 0.2);
        }
    }

    if ((budget - sum) >= 0) {
        console.log(`Hey, you have a great garden with ${num} ${type} and ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`)
    }
}