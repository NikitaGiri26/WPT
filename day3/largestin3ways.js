// To Find max number from array write code in 3 ways as shown in lecture 

function max(a) {
    var max = a[0]
    for (var i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i]
        }
    }

    console.log("Max element is ", max)

}

function maxForEach(a) {
    let max = a[0];
    a.forEach(element => {
        if (element > max) {
            max = element;
        }
    });
    console.log("Maximum value is using ForEach:", max);

}
function findLargest(arr) {

    arr.sort((a, b) => a - b); 
    return arr[arr.length - 1]; 
}


a = [1, 54, 2, 7, 234]

max(a)
maxForEach(a)
result = findLargest(a)
console.log("Max using sort : ",result)

