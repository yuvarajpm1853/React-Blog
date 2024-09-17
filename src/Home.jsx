import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  
  const [blogs,setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false)
  
  const deleteBlog = id =>{
    let newblog = blogs.filter(blog => blog.id != id);
    setBlogs(newblog);
  }

  
  useEffect(()=>{
    
   setTimeout(()=>{
    fetch("http://localhost:8000/blogs")
   .then(res =>{
    // console.log(res);
    if (!res.ok){ // resp obj has key ok , if false 
      throw Error("Could not able to connect to the Server")
    }
    return res.json(); 
   })
   .then(data => {setBlogs(data);
   setIsPending(false);
  })
  .catch(err => 
    {
      // console.log(err.message);
      setError(err.message); // catches and set value for var
      setIsPending(false);
   })
},1000) 
},[]) 
  
  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div>Loading..</div>}
     {blogs && <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog}/>}
    </div>
    );
  }
   
  export default Home;