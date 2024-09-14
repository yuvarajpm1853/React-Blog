const BlogList = (props) => {
    // (props) or ({blogs,title})
    const blogs = props.blogs;
    const title = props.title;
    console.log(title);

    return ( 
        <div className="blog-List">
         {/* loops over array */}
         {blogs.map(blog => 
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>Wriiten by {blog.author}</p>
            </div>
          )}
          </div>
        )
}
 
export default BlogList;
