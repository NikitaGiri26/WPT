


function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
const args = process.argv.slice(2);
const num = parseInt(args[0], 10);

if (isNaN(num)) {
  console.error("Please provide a valid number as a command line argument.");
  process.exit(1);
}

try {
  const result = factorial(num);
  console.log(`Factorial of ${num} is ${result}`);
} catch (error) {
  console.error(error.message);
}
