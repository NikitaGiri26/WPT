// var fact=1;
// function getFactorial(n){
//     for(var i=1;i<=n;i++){
//         fact=fact*i;

//     }
//     console.log(fact)
// }

// getFactorial(5)






function getFactorialImpl(choice = "FORLOOP") {

    function Fact1(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        console.log(`Factorial of ${n} using FORLOOP is: ${result}`);
        return result;
    }


    function Fact2(n) {
        if (n === 0 || n === 1) {
            console.log(`Factorial of ${n} using RECUR is: 1`);
            return 1;
        }
        const result = n * Fact2(n - 1);
        if (n === 3 || n === 5) {
            console.log(`Factorial of ${n} using RECUR is: ${result}`);
        }
        return result;
    }


    if (choice === "RECUR") {
        return Fact2;
    } else {
        return Fact1;
    }
}


let rv = getFactorialImpl("RECUR");
rv(3);

rv = getFactorialImpl();
rv(5);
