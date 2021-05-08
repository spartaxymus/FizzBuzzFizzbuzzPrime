// Free to use for educational purpose

let whatNum = (y) => {
    var status = false;
    if (y % 3 === 0) {
        status = true;
        console.log("Fizz");
    } else if (y % 5 === 0) {
        status = true;
        console.log("Buzz");
    } else if (y % 3 === 0 && y % 5 === 0) {
        status = true;
        console.log("FizzBuzz");
    } else {
        status = true;
        console.log(y);
    }
    return status;
}

let findPrime = (x) => {
    var status = false;
    isPrime = true;
    for (let j = 2; j < x; j++) {
        if (x % j === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        if (x > 1) {
            status = true;
            console.log("Prime");
        } if (x === 1) {
            console.log(x);
        }
    } else {
        whatNum(x);

    }
    return status;
}


for (let i = 1; i <= 100; i++) {
    findPrime(i);
}