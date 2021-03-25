function piramyd(n) {
    let current = 1;
    let flag = false;
    let currentLine = '';
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                flag = true;
                break;
            }
            currentLine += current + " ";
            current++;
        }
        console.log(currentLine);
        currentLine = "";
        if (false) {
            break;
        }
    }
}


function oddEvenSum(arr) {
    let from = Number(arr[0]);
    let to = Number(arr[1]);
    let toDigits;
    let toString;
    let position = 1;
    let odd = 0;
    let even = 0;
    let output = "";
    while (from <= to) {
        toString = from.toString();
        position = 1;
        odd = 0;
        even = 0;
        for (let i = 0; i < toString.length; i++) {
            toDigits = Number(toString[i]);
            if (position % 2 == 0) {
                even += toDigits;
            } else {
                odd += toDigits;
            }
            position++;
        }
        from++;
        if (odd == even) {
            output += toString + ' ';
        }

    }
    console.log(`${output}`);
}

oddEvenSum(["100000",
    "100050"
])