import { useEffect } from "react";

const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const deleteBlog = props.deleteBlog;
// useEffect -> works on all component.
// Runs when page gets rendered . Here, data gets changed -> useState. runs many tines
    useEffect(()=>console.log("hii"))

    return ( 
        <div className="blog-List">
        <h2>{ title }</h2>
         {blogs.map(blog => 
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>Wriiten by {blog.author}</p>
              <button onClick={()=>deleteBlog(blog.id)}>Delete </button>
              
            </div>
          )}
          <p>Refresh page to bring-back data</p>
          </div>
        )
}
 
export default BlogList;
