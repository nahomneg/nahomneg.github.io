const fibonacci= function(number) {
    if (number < 0){
        return fibonacci(-1 * number);
    }
    else if (number <= 2) {
        return 1;
    } else {
        return fibonacci(number-1) + fibonacci(number-2);
    }
}
console.log("Fibonacci of 33 is "+ fibonacci(33));
console.log("Fibonacci of -33 is "+ fibonacci(-33));