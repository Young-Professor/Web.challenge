import './App.css';
import { useState } from 'react';
import Menu from './Components/Menus'
import Home from './Pages/Home';
function App() {
  const [items, setItem] = useState(0);
  return (
    <div className='w-full flex flex-col items-center justify-center mb-10'>
      <div className='w-6/6 sm:w-5/6 md:w-4/6'>
      <Menu items={items} />
      <Home setItem={setItem} />
      </div>
    </div>
  );
}

export default App;
