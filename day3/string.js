
//3) Declare Array with String Data display every element in uppercase format
// // (use prdefined methods of String)
console.log("Using for loop using predefined Uppercase")
a = ["niyati", "niki", "nachiket", "madhavi", "manav"]
for (var i = 0; i < a.length; i++) {
    console.log(a[i].toUpperCase());
}
console.log("--------------------------------")
console.log("Using for-each using predefined Lowercase")
a.forEach(element => console.log(element.toLowerCase()));
