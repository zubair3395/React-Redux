import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddItem from './components/AddItem';
function App() {
  return (
    <div>
      <BrowserRouter>
       
   
      <Routes> 
        <Route path="/" element={<ShoppingCart/>}/>
        <Route path='/addcart' element={<AddItem/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
