const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];


function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPosts(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        posts.push(post);

        const error = false;

        if(!error){
            resolve();
        } else{
            reject('Error something went wrong')
        }
    }, 2000);
});
}

// createPosts({title: 'Post three', body: 'This is post three'}).then(getPosts).catch(err => console.log(err));


// const promise1 = Promise.resolve('Hello World');
// const promise2 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// const promise3 = 10;

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values));


//Async/Await

// async function init(){
//     await createPosts({title: 'Post three', body: 'This is post three'});
//     getPosts();
// }

// init();

//Async/await with fetch

async function getUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}

getUsers();