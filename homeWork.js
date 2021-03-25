function homework(arr) {
    let i = 1;
    let A = arr[0];
    let sum = 0;
    let number = 0;
    while (A != arr[i]) {
        arr[i] = Number(arr[i]);
        console.log(arr[i]);
        sum += arr[i];
        number++;
        i++;
    }
    console.log(`${sum/number}`)
    console.log("Stanislav Bolyovski 18251421024")
}

homework([1, 2, 4, 5, 3, 7, 1, 4])