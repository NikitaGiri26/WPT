function loadTextFile(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          reject("Failed to fetch file");
        }
        return response.text();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

document.getElementById("loadBtn").addEventListener("click", () => {
  loadTextFile("data.txt")
    .then(content => {
      document.getElementById("output").textContent = content;
    })
    .catch(error => {
      document.getElementById("output").textContent = "Error: " + error;
    });
});
