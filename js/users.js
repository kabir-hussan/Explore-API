function multipleUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    const ul= document.getElementById('users-list');
    for(const user of data){
        // const ul= document.getElementById('users-list');
        const li= document.createElement('li');
        li.innerText= user.name;
        ul.appendChild(li);
    }
}