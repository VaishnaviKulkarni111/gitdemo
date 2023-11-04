const posts = [
    { title: 'post one'},
    { title: 'post two'}
];
function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}
function getPosts(){
    setTimeout(() =>{
        let output = ''
        posts.forEach((post, index) => {
            output += `${post.title}  `;
        });
        console.log(output)
    }, 1000)
}
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post)

            const error = false

            if(!error){ resolve}
            else {
                reject('Error')
            }
        }, 2000)
    })
}
function updateLastUserActivityTime(t){
    return new Promise((resolve, reject) =>{
        let today= new Date()
        let hr = addZero(today.getHours());
        let min = addZero(today.getMinutes());
        let sec = addZero(today.getSeconds());
    
        let current_time = `${hr}:${min}:${sec}`;
    
        console.log(current_time)
    })
    
}
function addZero(num){
    return num< 10? `0${num}` : num
}

Promise.all([createPost({title: 'Post Five'}), printPost(),  updateLastUserActivityTime()])





/* const posts = [
        { title: 'post one'},
        { title: 'post two'}
    ];

    function getPosts(){
        setTimeout(() =>{
            let output = ''
            posts.forEach((post, index) => {
                output += `${post.title}  `;
            });
            console.log(output)
        }, 1000)
    }

    function createPost(post, callback){
        setTimeout(() =>{
            posts.push(post);
            callback()
        })
    }
    createPost({title: 'post three'}, getPosts) */