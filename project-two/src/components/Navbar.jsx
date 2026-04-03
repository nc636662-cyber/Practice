import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SearchContext } from "../SearchContext";
import { IoSearchSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";


const Navbar = () => {
  const { search, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();
  const[open,setOpen]=useState(false)

  // Check if user is logged in
  const currentUser = localStorage.getItem("currentuser");

  const handleLogout = () => {
    localStorage.removeItem("currentuser"); // Remove user from localStorage
    navigate("/Signup"); // Redirect to Signup page after logout
  };

  const navLinkClass =
    "px-3 py-1 rounded-md hover:text-pink-500 hover:bg-pink-50 transition duration-300 font-medium text-gray-700";

  return (
    <nav className="w-full bg-white shadow-md px-4 md:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
    
      
      <Link to="/" className="flex items-center gap-2 flex-shrink-0">
        <span className="text-xl md:text-lg font-bold text-pink-500 whitespace-nowrap">
           <MdOutlineShoppingCart />ShopX
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 mt-2 md:mt-0">
        <Link to="/" className={navLinkClass}>
        Home
        </Link>
        <Link to="/About" className={navLinkClass}>
          About
        </Link>
        <Link to="/Product" className={navLinkClass}>
          Product
        </Link>
        {/* <Link to="/Cart" className={navLinkClass}>
        Cart
        </Link> */}


        {currentUser ? (
          <li
            onClick={handleLogout}
            className={`${navLinkClass} cursor-pointer list-none`}
          >
            Logout
          </li>
        ) : (
          <Link to="/Login" className={navLinkClass}>
            Login
          </Link>
        )}
      </div>
       <div className="relative w-full max-w-sm">
      <input
    type="search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search..."
    className="w-full pl-10 pr-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
  /><IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
      </div>
      <button
  onClick={() => setOpen(!open)}
  className="flex flex-col justify-center items-center gap-1 w-8 h-8"
>
  <Link to="#">  <BsThreeDotsVertical /></Link>
</button>
{open && (
  <div className="absolute right-4 top-14 w-44 bg-white rounded-xl shadow-lg border p-2 flex flex-col gap-1">

  <Link 
    to="/profile" 
    className="px-4 py-2 rounded-md hover:bg-gray-100 transition"
  >
    My Profile
  </Link>

  <Link 
    to="/Orders" 
    className="px-4 py-2 rounded-md hover:bg-gray-100 transition"
  >
    My Orders
  </Link>

  <Link 
    to="/wishlist" 
    className="px-4 py-2 rounded-md hover:bg-gray-100 transition"
  >
    My Wishlist
  </Link>
  <Link 
    to="/wishlist" 
    className="px-4 py-2 rounded-md hover:bg-gray-100 transition"
  >
    My Cart
  </Link>

</div>
)}
    </nav>
  );
};

export default Navbar;