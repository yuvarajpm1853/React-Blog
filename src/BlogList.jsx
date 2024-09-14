const BlogList = (props) => {
// * Now , it receives as props = { blogs : {}} *
// retreiving data from props
    const blogs = props.blogs;
    console.log(props);

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
