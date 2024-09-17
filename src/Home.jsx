import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  
  const [blogs,setBlogs] = useState(null);
const [isPending, setIsPending] = useState(true);
  const deleteBlog = id =>{
    let newblog = blogs.filter(blog => blog.id != id);
    setBlogs(newblog);
  }

  // using useEffect to fetch data 
  useEffect(()=>{
    // using setTimeout => makes user wait and loads data smoothly
   setTimeout(()=>{
    fetch("http://localhost:8000/blogs")
   .then(res =>{
    return res.json(); // to json foprmat
   })
   .then(data => setBlogs(data)); // now , setting resp data to var
   setIsPending(false);}
  ,1000) // loads data wioth one sec delay
},[]) 
  
  return (
    <div className="home">
      {/* displays an waiting msg */}
      {isPending && <div>Loading..</div>}
     {blogs && <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog}/>}
    </div>
    );
  }
   
  export default Home;