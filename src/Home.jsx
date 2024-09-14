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

  // useEffect dependencies => 2nd params. 1st params=> fn
  // useEffect(()=>{console.log("Ran when page loads 1st time ")},[]) // runs only one time 
  
  // runs also when specific dynamic var value changed
  useEffect(()=>{
    console.log("Var value gets chanegd");
  console.log(name);},[name]) 
  
  return (
    <div className="home">
     <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog}/>
     <button onClick={()=>setName("yuvaraj")}>change name</button>
     <p>{ name }</p>
    </div>
    );
  }
   
  export default Home;