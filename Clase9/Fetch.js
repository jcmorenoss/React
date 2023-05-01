const getNamefetch = (idPost) => {
try{
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(res=>{
        //console.log(res);
        return res.json()
    })
    .then(post=>{ //post=res.json
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res=>{
            return res.json();
        })
        .then(user=>{
            document.write(`${user.name} escribio el post ${idPost} y su titulo es ${post.title} y vive en ${user.address.city}`);
        })
    })
}catch(error){

}
}
getNamefetch(40)