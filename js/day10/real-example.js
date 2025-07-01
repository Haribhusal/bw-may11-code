function getPosts() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                if (!response.ok) {
                    reject("Failed to fetch posts");
                } else {
                    return response.json();
                }
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

console.log("Fetching data...");

getPosts()
    .then(posts => {
        console.log("Fetched posts:", posts);
    })
    .catch(error => {
        console.error("Error:", error);
    });

console.log("This logs first, before API responds");
