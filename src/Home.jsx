const Home = () => {
  let name = "yuva";

  const changeName = ()=> name = "yuvaraj"
  return (
    <div className="home">
        <h2>Homepage</h2>
        <p>{name}</p>

        {/* changed name by clicking button */}
        {/* doesnt reflect on web page becoz var is not reactive */}
        <button onClick={changeName}> click top change name</button>
        <p>{name}</p>
        {/* if var printed , prints new value */}
        <button onClick={()=>console.log(name)}> click to print name</button>

      </div>
    );
  }
   
  export default Home;