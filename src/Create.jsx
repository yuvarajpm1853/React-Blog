import { useState } from "react";
// no useHistory => replaced as useNavigate
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("yuvaraj");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author};
        setIsPending(true);

        fetch("http://localhost:8000/blogs",{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(blog)
        }).then(()=> 
            {
                setIsPending(false);
                // navigate(-1)
                navigate("/"); // redirects to home page
    })
    }
    return ( 
        <div className='create'>
            <h2>Add Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Blog Title :</label>
                <input type="text" id="title" required value={title} 
                    onChange={e=>setTitle(e.target.value)}/>
                <label htmlFor="body">Blog Body :</label>
                <textarea  id="body" required value={body}
                    onChange={e=>setBody(e.target.value)}></textarea>
                <label htmlFor="author">Blog Author : </label>
                <input type="text" id="author" required value={author}
                    onChange={e=>setAuthor(e.target.value)}/>
                    {!isPending && <button>Add Blog</button> }
                    {isPending && <button>Adding Blog..</button> }
            </form>
        </div>
     );
}
 
export default Create;