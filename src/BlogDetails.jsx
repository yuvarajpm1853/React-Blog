import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const url = "http://localhost:8000/blogs/"+ id;
    const navigate = useNavigate();

    const {data:blog,isPending, error} = useFetch(url);
    const DeleteBlog = () => {
        fetch(url,{
            method : 'DELETE'
        }).then(()=>navigate("/"))
    }
    return ( 
        <div className="blog-details">
        { isPending && <div>Loading</div> }
        {error && <div>{error}</div> }
        { blog && <article>
            <h2>{blog.title}</h2>
                <p>Wriiten by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={DeleteBlog}>Delete Blog</button>
        </article> }
        </div>
     );
}
 
export default BlogDetails;