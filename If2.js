function race(first, second, third) {

    let sum = first + second + third;

    let min = Math.floor(sum / 60);
    let seconds = sum % 60;

    if (seconds < 10) {
        console.log(`${min}:0${seconds}`)
    } else {
        console.log(`${min}:${seconds}`)
    }
}

function bonusPoints(points) {
    points = Number(points);
    let bonus = 0;

    if (points > 1000) {
        bonus = points * 0.1;
    } else if (points > 100) {
        bonus = points * 0.2;
    } else if (points <= 100) {
        bonus = bonus + 5;
    }


    if (points % 2 === 0) {
        bonus = bonus + 1;
    } else if (points % 10 === 5) {
        bonus = bonus + 2;
    }

    console.log(bonus);
    console.log(bonus + points);

}

function speedInfo(speed) {
    speed = Number(speed);

    if (speed > 1000) {
        console.log('extremely fast');
    } else if (speed > 150) {
        console.log('ultra fast');
    } else if (speed > 50) {
        console.log('fast');
    } else if (speed > 10) {
        console.log('average');
    } else {
        console.log('slow')
    }
}

function meterCalculator(num, from, to) {
    num = Number(num);
    let result;


    if (from === 'mm') {
        if (to === "cm") {
            result = num / 10;
        } else if (to === "m") {
            result = num / 1000;
        }
    } else if (from === 'cm') {
        if (to === "mm") {
            result = num * 10;
        } else if (to === "m") {
            result = num / 100;
        }

    } else {
        if (to === "cm") {
            result = num * 100;
        } else if (to === "mm") {
            result = num * 1000;
        }
    }

    console.log(result.toFixed(3));
}

function timeAfter15(hour, minute) {
    hour = Number(hour);
    minute = Number(minute);
    minute += 15;
    if (minute >= 60) {
        hour += 1;
        minute -= 60;
    }
    if (hour === 24) {
        hour = 0;
    }

    if (minute < 10) {
        console.log(`${hour}:0${minute}`);
    } else {
        console.log(`${hour}:${minute}`);
    }
}


function moive(budget, numStatists, priceStatist) {
    budget = Number(budget);
    numStatists = Number(numStatists);
    priceStatist = Number(priceStatist);

    decoration = budget * 0.1;
    let outfit = numStatists * priceStatist;
    let discout = 0;

    if (numStatists > 150) {
        discout = outfit * 0.1;
        outfit -= discout;
    }
    let finalPrice = outfit + decoration;
    let moneyLeft = budget - finalPrice;

    if (budget - finalPrice >= 0) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(moneyLeft).toFixed(2)} leva left.`);
    } else {
        moneyLeft *= -1
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(moneyLeft).toFixed(2)} leva more.`);
    }
}

function recordSwimming(record, distance, speed) {

    record = Number(record);
    distance = Number(distance);
    speed = Number(speed);

    ivanTime = distance * speed;
    let slow = (distance / 15) * 12.5;
    let totalTime = ivanTime + slow;
    let difference = record - totalTime;


    if (record > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        difference *= -1
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`)
    }

}

function scholarship(income, averageGrades, minSalary) {

    let socialScholarship;
    let gradesScholarship;

    if (income > minSalary && averageGrades < 5.5) {
        console.log('You cannot get a scholarship!');
    } else if (income >= minSalary || averageGrades >= 5.5) {
        socialScholarship = minSalary * 0.35;
        gradesScholarship = averageGrades * 25;
        if (socialScholarship > gradesScholarship) {
            console.log(`You get a Social scholarship ${socialScholarship} BGN`)
        } else {
            console.log(`You get a scholarship for excellent results ${gradesScholarship} BGN`)
        }
    }
}