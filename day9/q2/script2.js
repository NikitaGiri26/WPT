 let allPosts = [];

    function loadPosts() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
          allPosts = data;
          displayPosts(allPosts);
        });
    }

    function displayPosts(posts) {
      const tbody = document.getElementById("postsBody");
      tbody.innerHTML = "";
      posts.forEach(post => {
        const row = `<tr><td>${post.id}</td><td>${post.title}</td></tr>`;
        tbody.innerHTML += row;
      });
    }

    function filterPosts() {
      const query = document.getElementById("searchInput").value.toLowerCase();
      const filtered = allPosts.filter(p => p.title.toLowerCase().includes(query));
      displayPosts(filtered);
    }