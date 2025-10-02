// 2) Write a Program to use Different Array Library Functions using switch case


function performArrayOperation(arr, operation, value = null) {
    switch (operation) {
        case "push":
            arr.push(value);
            console.log(`After push():`, arr);
            break;

        case "pop":
            let popped = arr.pop();
            console.log(`After pop(): ${popped} removed, Array:`, arr);
            break;

        case "shift":
            let shifted = arr.shift();
            console.log(`After shift(): ${shifted} removed, Array:`, arr);
            break;

        case "unshift":
            arr.unshift(value);
            console.log(`After unshift(${value}):`, arr);
            break;

        case "sort":
            arr.sort();
            console.log(`After sort():`, arr);
            break;

        case "reverse":
            arr.reverse();
            console.log(`After reverse():`, arr);
            break;

        default:
            console.log("Invalid operation. Try push, pop, shift, unshift, sort, or reverse.");
    }
}

// Example usage



let myArray = [5, 2, 9];

performArrayOperation(myArray, "push", 7);      // Adds 7
performArrayOperation(myArray, "pop");          // Removes last
performArrayOperation(myArray, "unshift", 1);   // Adds 1 at start
performArrayOperation(myArray, "shift");        // Removes first
performArrayOperation(myArray, "sort");         // Sorts array
performArrayOperation(myArray, "reverse");      // Reverses array

