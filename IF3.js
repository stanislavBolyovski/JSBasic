function dayOfWeek(num) {
    num = Number(num);
    switch (num) {
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;

        default:
            console.log('Error');
            break;
    }
}


function workDay(day) {

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;

        default:
            console.log('Error');
            break;
    }
}

function animalType(animal) {
    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;

        default:
            console.log("unknown");
            break;
    }
}

function personTitles(age, gender) {
    age = Number(age);

    if (gender == "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log('Master');
        }
    } else {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log('Miss');
        }
    }
}

function smallShop(product, city, num) {
    num = Number(num);
    let sum;
    if (city == "Sofia") {
        if (product == "coffee") {
            sum = num * 0.5;
            console.log(sum);
        } else if (product == "water") {
            sum = num * 0.8;
            console.log(sum);
        } else if (product == "beer") {
            sum = num * 1.2;
            console.log(sum);
        } else if (product == "sweets") {
            sum = num * 1.45;
            console.log(sum);
        } else {
            sum = num * 1.6;
            console.log(sum);
        }
    } else if (city == "Plovdiv") {
        if (product == "coffee") {
            sum = num * 0.4;
            console.log(sum);
        } else if (product == "water") {
            sum = num * 0.7;
            console.log(sum);
        } else if (product == "beer") {
            sum = num * 1.15;
            console.log(sum);
        } else if (product == "sweets") {
            sum = num * 1.30;
            console.log(sum);
        } else {
            sum = num * 1.5;
            console.log(sum);
        }
    } else {
        if (product == "coffee") {
            sum = num * 0.45;
            console.log(sum);
        } else if (product == "water") {
            sum = num * 0.7;
            console.log(sum);
        } else if (product == "beer") {
            sum = num * 1.1;
            console.log(sum);
        } else if (product == "sweets") {
            sum = num * 1.35;
            console.log(sum);
        } else {
            sum = num * 1.55;
            console.log(sum);
        }
    }
}

function numInRange(num) {
    num = Number(num);
    if ((num >= -100) && (num <= 100) && (num != 0)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

function workingDays(hour, day) {
    hour = Number(hour);
    if (day == 'Sunday') {
        console.log('closed');
    } else if ((hour >= 10) && (hour <= 18)) {
        console.log('open');
    }
}

function cinema(day) {

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            console.log(12);
            break;
        case "Wednesday":
        case "Thursday":
            console.log(14);
            break;
        case "Saturday":
        case "Sunday":
            console.log(16);
            break;
        default:
            break;
    }
}

function fruitOrVeggie(name) {

    switch (name) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log('fruit');
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
            break;
    }
}

function invalidNumber(num) {

    if ((100 <= num) && (num <= 200) || (num == 0)) {

    } else {
        console.log("invalid")
    }

}


function fruitShop(product, day, num) {
    let sum;
    num = Number(num);
    if ((day == "Saturday") || (day == "Sunday")) {
        if (product == "banana") {
            sum = 2.7 * num;
        } else if (product == "apple") {
            sum = 1.25 * num;
        } else if (product == "orange") {
            sum = 0.9 * num;
        } else if (product == "grapefruit") {
            sum = 1.6 * num;
        } else if (product == "kiwi") {
            sum = 3 * num;
        } else if (product == "pineapple") {
            sum = 5.6 * num;
        } else if (product == "grapes") {
            sum = 4.2 * num;
        } else {
            console.log("error");
        }
    } else if ((day == "Monday") || (day == "Tuesday") || (day == "Wednesday") || (day == "Thursday") || (day == "Friday")) {
        if (product == "banana") {
            sum = 2.5 * num;
        } else if (product == "apple") {
            sum = 1.2 * num;
        } else if (product == "orange") {
            sum = 0.85 * num;
        } else if (product == "grapefruit") {
            sum = 1.45 * num;
        } else if (product == "kiwi") {
            sum = 2.7 * num;
        } else if (product == "pineapple") {
            sum = 5.5 * num;
        } else if (product == "grapes") {
            sum = 3.85 * num;
        } else {
            console.log("error");
        }

    } else {
        console.log('error');
    }
    if (sum > 0) {
        console.log(sum.toFixed(2));
    }
}


function commission(city, sales) {
    sales = Number(sales);
    let bonus;
    if (city == 'Sofia') {
        if ((0 <= sales) && (sales <= 500)) {
            bonus = sales * 0.05;
        } else if ((500 < sales) && (sales <= 1000)) {
            bonus = sales * 0.07;
        } else if ((1000 < sales) && (sales <= 10000)) {
            bonus = sales * 0.08;
        } else if (sales > 10000) {
            bonus = sales * 0.12;
        }
    } else if (city == 'Varna') {
        if ((0 <= sales) && (sales <= 500)) {
            bonus = sales * 0.045;
        } else if ((500 < sales) && (sales <= 1000)) {
            bonus = sales * 0.075;
        } else if ((1000 < sales) && (sales <= 10000)) {
            bonus = sales * 0.1;
        } else if (sales > 10000) {
            bonus = sales * 0.13;
        }
    } else if (city == 'Plovdiv') {
        if ((0 <= sales) && (sales <= 500)) {
            bonus = sales * 0.055;
        } else if ((500 < sales) && (sales <= 1000)) {
            bonus = sales * 0.08;
        } else if ((1000 < sales) && (sales <= 10000)) {
            bonus = sales * 0.12;
        } else if (sales > 10000) {
            bonus = sales * 0.145;
        }
    } //else {
    // console.log('error');
    //}
    if (bonus > 0) {
        console.log(bonus.toFixed(2));
    } else {
        console.log('error');
    }
}