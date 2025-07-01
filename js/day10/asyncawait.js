function getPosts() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log(response)
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

async function fetchData() {
    console.log("Fetching data...");

    try {
        const posts = await getPosts();
        console.log("Fetched posts:", posts);
    } catch (error) {
        console.error("Error:", error);
    }

    console.log("This runs after await is done");
}

console.log("This logs first");
fetchData();
