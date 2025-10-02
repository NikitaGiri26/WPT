
console.log("program started");


process.nextTick(() => {
    console.log("1st process.nextTick");
});

Promise.resolve().then(() => {
    console.log("1st Promise.then");
});


setTimeout(() => {
    console.log("1st setTimeout");
}, 0);


setImmediate(() => {
    console.log("1st setImmediate");
});
