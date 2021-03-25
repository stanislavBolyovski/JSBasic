function homeWork(arr) {
    let i = 0;
    let sum = 1;
    while (arr[i] != 0) {
        sum *= arr[i++];
    }
    console.log("Stanislav Bolyovski 18251421024");
    console.log(sum);
}

homeWork([
    2, 3, 4, 0
])