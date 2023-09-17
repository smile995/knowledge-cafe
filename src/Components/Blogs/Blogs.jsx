import { useEffect } from "react";
import { useState } from "react";
// import blogs from '../../../public/blog.json'

const Blogs = () => {
    const [blogs, setBlogs]=useState([]);
    
    useEffect(()=>{
        fetch ('data.json')
    .then (res=>res.json())
    .then (data=>console.log(data))
    },[]);

    return (
        <div>
            <h1>connected</h1>
        </div>
    );
};

export default Blogs;