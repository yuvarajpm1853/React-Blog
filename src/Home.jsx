const Home = () => {
  
  const runOnceDeafult = () => console.log("Welcome");
  const clickSayHii = () => console.log("Hii");
  return (
    <div className="home">
        <h2>Homepage</h2>
         {/* below fn runs only one time when page gets laoded */}
         {/* becoz parenthesis with fn name */}
        <button onClick={runOnceDeafult()}> Click  wishes again</button>

        {/* Runs when user clicks */}
        <button type="button" onClick={clickSayHii}>Click here to say "Hi"</button>
      </div>
    );
  }
   
  export default Home;