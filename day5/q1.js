/* 1) declare function calculate(...a) 
    and display addition of data 
    display only odd numbers from given data 
    call calculate function with multiple parameters */


function calculate(...a) {

  const sum = a.reduce((acc, val) => acc + val, 0);
  console.log("Sum of all values:", sum);


  const oddNumbers = a.filter(num => num % 2 !== 0);
  console.log("Odd numbers:", oddNumbers);
}


calculate(3, 8, 15, 22, 7, 10, 5);
