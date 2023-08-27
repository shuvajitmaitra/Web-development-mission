function dataLoad() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dataDisplay(data));
}


function dataDisplay(posts) {
    const divContainer = document.getElementById('post-container');

    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <h2>User Id: ${post.userId}</h2>
        <h3>Title: ${post.title}</h3>
        <p><strong>Post description:</strong> ${post.body}</p>
        `;
        divContainer.appendChild(postDiv);
    }

}
dataLoad();