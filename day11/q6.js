
const input = parseInt(process.argv[2]);

if (isNaN(input) || input < 1 || input > 5) {
    console.error("Error: Please enter a number between 1 and 5.");
    process.exit(1); 
}


for (let i = input; i >= 1; i--) {
    console.log("* ".repeat(i).trim());
}
