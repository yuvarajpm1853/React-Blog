import { useState } from "react";

const Home = () => {
  // makes var as reactive
  const [name,setName] = useState("yuva")
  return (
    <div className="home">
        <h2>Homepage</h2>
        <p>{name}</p>

        {/* changed name by clicking button */}
        {/* now it reflect on web page becoz var is  reactive */}
        <button onClick={()=>setName("Yuvaraj")}> click top change name</button>

      </div>
    );
  }
   
  export default Home;