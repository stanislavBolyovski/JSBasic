function lastOn7() {
    for (let i = 7; i < 1000; i++) {
        if (i % 10 == 7) {
            console.log(i);
        }
    }
}

function multipication(num) {
    num = Number(num);
    for (let i = 1; i < 11; i++) {
        let result = i * num;
        console.log(`${i} * ${num} = ${result}`)
    }
}

function leapYears(yearFrom, yearTo) {
    yearFrom = Number(yearFrom);
    yearTo = Number(yearTo);
    for (let i = yearFrom; i <= yearTo; i += 4) {
        console.log(i, i)
    }
}

function factorial(num) {
    num = Number(num);
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = i * result;
    }
    console.log(result);
}

function numberOfWords(text) {
    text = text.toString();
    let words = 1;
    for (let i = 0; i <= text.length; i++) {
        if (text[i] == " ") {
            words += 1;
        }
    }
    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words.`);
    } else {
        console.log(`The message was send successfully!`);
    }
}
numberOfWords("Hello world, how are u")