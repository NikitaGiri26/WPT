function loadText() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById("output").innerText = xhr.responseText;
    } else {
      document.getElementById("output").innerText = "Failed to load data.";
    }
  };

  xhr.onerror = function () {
    document.getElementById("output").innerText = "Error during request.";
  };

  xhr.send();
}
