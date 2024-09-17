import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  
  const [blogs,setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
  const [ name, setName ]= useState("yuva");

  const deleteBlog = id =>{
    let newblog = blogs.filter(blog => blog.id != id);
    setBlogs(newblog);
  }

  // using useEffect to fetch data 
  useEffect(()=>{
   fetch("http://localhost:8000/blogs")
   .then(res =>{
    return res.json(); // to json foprmat
   })
   .then(data => setBlogs(data)) // now , setting resp data to var
  },[]) 
  
  return (
    <div className="home">
     <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog}/>
     <button onClick={()=>setName("yuvaraj")}>change name</button>
     <p>{ name }</p>
    </div>
    );
  }
   
  export default Home;