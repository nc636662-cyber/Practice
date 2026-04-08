import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Product from "./components/Product";
import Footer from './components/Footer';
import Detail from "./components/Detail";
import ProtectRouting from "./Protect";
import Cart from "./components/Cart";
import CounterState from "./Use";
import Wishlist from "./components/Wishlist";
import Profile from "./components/Profile";
const App = () => {
  return (
  <>
  <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Product"element={<Product/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/count" element={<CounterState/>}/>
      <Route path="/Wishlist" element={<Wishlist/>}/>
      <Route path="/Profile" element={<Profile/>}/>
    </Routes>
    <Footer/>
      </div>
    </>
  );
};

export default App;