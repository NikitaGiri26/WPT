function loadPostById() {
  const postId = document.getElementById("postIdInput").value;

  if (!postId) {
    alert("Please enter a valid Post ID.");
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Post not found");
      }
      return response.json();
    })
    .then(post => {
      const tbody = document.getElementById("postsBody");
      tbody.innerHTML = `
        <tr>
          <td>${post.id}</td>
          <td>${post.title}</td>
        </tr>
      `;
    })
    .catch(error => {
      alert("Error: " + error.message);
      document.getElementById("postsBody").innerHTML = "";
    });
}
