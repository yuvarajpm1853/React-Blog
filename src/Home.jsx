const Home = () => {
  
  const runOnceDeafult = (word) => console.log(word);
  // Simply added event Object in fn paramaneters
  const clickSayHii = (e) => console.log("Hii",e);
  const eventwithparam = (name,e) => console.log(name,e.target);

  return (
    <div className="home">
        <h2>Homepage</h2>
        
        <button onClick={runOnceDeafult("default")}> default</button>
        <button onClick={()=>runOnceDeafult("Clicked")}> Click </button>
<br />
        {/* Runs when user clicks */}
        {/* No declaration event obj */}
        <button type="button" onClick={clickSayHii}>Hii with no event obj</button>
  
        {/* declaration event obj */}
        <button type="button" onClick={(e)=>eventwithparam("event Object",e)}>with event obj</button>
      </div>
    );
  }
   
  export default Home;