import { useState } from "react";
// imported New Component
import BlogList from "./BlogList";
const Home = () => {
  
  const [blogs,setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
  return (
    <div className="home">
      {/* blog => dynamic var , title -> string */}
     <BlogList blogs={blogs} title="Am string"/>
      </div>
    );
  }
   
  export default Home;