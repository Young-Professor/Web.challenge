import './App.css';
import { useState } from 'react';
import Menu from './Components/Menus'
import Home from './Pages/Home';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  const [shoes, setShoes]=useState(null)
  const handleDelete=()=>{
    setShoes(null)
    // setCartItems([{shoes:null}]);
  }
  return (
    <Router>
    <div className='w-full flex flex-col items-center justify-center mb-10'>
      <div className='w-6/6 sm:w-5/6 md:w-4/6'>
      <Menu shoes={shoes} handleDelete={handleDelete} />
      <Home setShoes={setShoes} />
      </div>
    </div>
    </Router>
  );
}

export default App;
