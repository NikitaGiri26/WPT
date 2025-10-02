function displayCurrentDate(times) {
    for (let i = 0; i < times; i++) {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); 
        const year = now.getFullYear();
        console.log(`${day}-${month}-${year}`);
    }
}


displayCurrentDate(5);
