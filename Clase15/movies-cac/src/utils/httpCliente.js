const API= "https://api.themoviedb.org/3"

export const get = (path)=>{
    return fetch (API+path,{
        headers:{
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDMxMDU3YmJmMzcwZWE4MWZhM2RlMTBlYzU0MTVhYiIsInN1YiI6IjY0MjRmMDdjOTYwY2RlMDA3NzExOGNlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yDxNhYnGcpe953pO0opGwY-geqh5mgAi3WWcCvgj9WU",
            "Content-Type": "application/json;charset=utf-8",
        }
    }).then((results)=>results.json())
}