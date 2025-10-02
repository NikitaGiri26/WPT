function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


const args = process.argv.slice(2);

if (args.length !== 10) {
    console.log("Please provide exactly 10 numbers as command line arguments.");
    process.exit(1);
}

const numbers = args.map(Number);

let sumEven = 0;
let sumEvenIndex = 0;
let sumPrime = 0;

numbers.forEach((num, index) => {
    if (num % 2 === 0) {
        sumEven += num;
    }

    if (index % 2 === 0) {
        sumEvenIndex += num;
    }

    if (isPrime(num)) {
        sumPrime += num;
    }
});

console.log("Sum of even numbers:", sumEven);
console.log("Sum of numbers at even indices:", sumEvenIndex);
console.log("Sum of prime numbers:", sumPrime);
