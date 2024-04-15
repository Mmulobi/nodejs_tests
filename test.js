// This is a simple Node.js code test

// lets create a function that takes two arguments and returns their sum

function addNumbers(num1, num2) {
    return num1 + num2;
}


//lets test the add numbers function

console.log("Testing addNumbers function");
console.log("sume of 5 and 4: ", addNumbers(5, 4));
console.log("sume of 10 and 5: ", addNumbers(10, 5));
console.log('Sum of 50 and 90: ', addNumbers(50, 90));
console.log();


// lets create a function that takes a string as an argument and returns the reverse of the string

function reverseString(str) {
    return str.split('').reverse().join('');
}


//lets test the reverseString function

console.log("Testing reverseString Function: ");
console.log("Reverse of 'hello': ", reverseString('hello'));
console.log("reverse of 'Moses': ", reverseString('Moses'));
console.log("Reverse of 'fuck me': ", reverseString('code javascript'));
console.log("Reverse of 'beautiful': ", reverseString('beautiful'));
console.log("reverse of the array '123456': ", reverseString('123456'));
console.log();


// lets create a function that takes array of numbers as argument and returns the sum of the all the numbers in that particular array


function sumeArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// lets test the sumArray function
console.log("Testing sumArray function: ");
console.log("sume of [1, 2, 6, 8, 4]:", sumeArray([1, 2, 6, 8, 4]));
console.log("Sum of [-1, -2, -3, -5]: ", sumeArray([-1, -2, -3, -5]));
console.log("sume of empty array: ", sumeArray([]));
