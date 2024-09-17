import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // Router => makes page routing .  React App doesn't include page routing.
    <Router> 
      <div className="App">
      <Navbar />
      <div className="content">
           {/* Routes => Contains  all route where to move/load page*/}
        <Routes> 
          {/* Route -> contains path and an element holds an component */}
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;