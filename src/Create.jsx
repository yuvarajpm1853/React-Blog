import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("yuvaraj")
    return ( 
        <div className='create'>
            <h2>Add Blog</h2>
            <form action="">
                <label htmlFor="title">Blog Title :</label>
                <input type="text" id="title" required value={title} 
                    onChange={e=>setTitle(e.target.value)}/>
                <label htmlFor="body">Blog Body :</label>
                <textarea  id="body" required value={body}
                    onChange={e=>setBody(e.target.value)}></textarea>
                <label htmlFor="author">Blog Author : </label>
                <input type="text" id="author" required value={author}
                    onChange={e=>setAuthor(e.target.value)}/>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;