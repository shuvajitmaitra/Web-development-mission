function commentsLoad() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayComments(data))
}

function displayComments(comments) {
    const divContainer = document.getElementById('comments-container');
    for (const comment of comments) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('items')
        commentDiv.innerHTML = `
        <h3>Id: ${comment.id}</h3>
        <h2 class="name">Name: ${comment.name}</h2>
        <h3>Email: ${comment.email}</h3>
        <h3>Descriptions: ${comment.body}</h3>
        `;
        divContainer.appendChild(commentDiv);
    }
}
commentsLoad();