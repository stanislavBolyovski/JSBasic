function from1To100() {
    for (let i = 1; i < 101; i++) {
        console.log(i);
    }

}

function fromNto1(n) {
    n = Number(n);
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}

function stopBy3(n) {
    n = Number(n);
    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}

function textToString(num) {
    num = num.toString();

    for (let i = 0; i < num.length; i++) {
        console.log(num[i]);
    }
}

function vowels(text) {
    text = text.toString();
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case "a":
                sum += 1
                break;
            case "e":
                sum += 2
                break;
            case "i":
                sum += 3
                break;
            case "o":
                sum += 4
                break;
            case "u":
                sum += 5
                break;
        }
    }
    console.log(sum);
}

function sumOfDigits(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}

function devisibleBy9(from, to) {
    from = Number(from);
    to = Number(to);
    let sum = 0;
    let sameLane = "";

    for (let i = from; i <= to; i++) {
        if (i % 9 == 0) {
            sum += i;
            sameLane = sameLane + i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(sameLane);
}

devisibleBy9(100, 200)