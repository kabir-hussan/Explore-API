function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postsContainer= document.getElementById('posts-container');
    for(const post of posts){
        console.log(post);
        const postDiv= document.createElement('div'); //create a div for all post
        postDiv.classList.add('post'); //create a class for all post
        postDiv.innerHTML=`
            <h2>${post.title}</h2>
            <h4>UserId: ${post.userId}</h4>
            <h4>Id: ${post.id}</h4>
            <p>${post.body}</p>
        `;

        postsContainer.appendChild(postDiv);
    }
}
loadPosts();