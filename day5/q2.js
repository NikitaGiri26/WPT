// 2) with above concept use Math.max() method to display maximum number

function calculate(...a) {

  const sum = a.reduce((acc, val) => acc + val, 0);
  console.log("Sum of all values:", sum);


  const oddNumbers = a.filter(num => num % 2 !== 0);
  console.log("Odd numbers:", oddNumbers);


  const maxNumber = Math.max(...a);
  console.log("Maximum number:", maxNumber);
}


calculate(3, 8, 15, 22, 7, 10, 5);
