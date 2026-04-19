import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const currentUser = localStorage.getItem("currentuser");

  const handleLogout = () => {
    localStorage.removeItem("currentuser");
    setOpen(false);
    navigate("/Signup");
  };

  const navLinkClass =
    "px-3 py-1 rounded-md hover:text-pink-500 hover:bg-pink-50 transition font-medium text-gray-700";

  const count = JSON.parse(localStorage.getItem("wishlist") || "[]");

  return (
    <nav className="w-full bg-white shadow-md px-4 md:px-6 py-3 flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <span className="text-xl font-bold text-pink-500 flex items-center gap-2">
          <MdOutlineShoppingCart /> ShopX
        </span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className={navLinkClass}>Home</Link>
        <Link to="/About" className={navLinkClass}>About</Link>
        <Link to="/Product" className={navLinkClass}>Product</Link>

        {currentUser ? (
          <button onClick={handleLogout} className={navLinkClass}>
            Logout
          </button>
        ) : (
          <Link to="/Login" className={navLinkClass}>
            Login
          </Link>
        )}
      </div>

      {/* Right Section */}
      <div className="relative flex items-center">

        {/* Three Dots */}
        <button
          onClick={() => setOpen(true)}
          className="relative text-2xl text-gray-700"
        >
          <BsThreeDotsVertical />

          {count.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {count.length}
            </span>
          )}
        </button>

        {/* Dropdown */}
        {open && (
          <div
            className="absolute right-0 top-10 w-44 bg-white rounded-xl shadow-lg border p-2 flex flex-col gap-1 z-50"
            onMouseLeave={() => setOpen(false)} // 👈 close when mouse leaves dropdown
          >
            <Link
              to="/profile"
              className="px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setOpen(false)}
            >
              My Profile
            </Link>

            <Link
              to="/wishlist"
              className="px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setOpen(false)}
            >
              My Wishlist
            </Link>

            <Link
              to="/Cart"
              className="px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setOpen(false)}
            >
              My Cart
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;