import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [user, setUser] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentuser"));
    if (storedUser) {
      setUser(storedUser);
      setImage(storedUser.profileImage || "");
    }
  }, []);

  if (!user) {
    return <h2 className="text-center mt-10">Please Login First ❌</h2>;
  }

  // Open file picker manually
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const updatedUser = {
          ...user,
          profileImage: reader.result,
        };

        setImage(reader.result);
        setUser(updatedUser);
        localStorage.setItem("currentuser", JSON.stringify(updatedUser));
      };

      reader.readAsDataURL(file);
    }
  };

  // Remove image
  const handleRemoveImage = () => {
    const updatedUser = {
      ...user,
      profileImage: "",
    };

    setImage("");
    setUser(updatedUser);
    localStorage.setItem("currentuser", JSON.stringify(updatedUser));
  };

  const handleLogout = () => {
    localStorage.removeItem("currentuser");
    navigate("/login");
  };

  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      {/* Image Box */}
      <div
        onClick={handleImageClick}
        className="w-32 h-32 rounded-full border cursor-pointer overflow-hidden flex items-center justify-center bg-gray-100 hover:opacity-80"
      >
        {image ? (
          <img
            src={image}
            alt="profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-3xl">+</span>
        )}
      </div>

      {/* Hidden Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Remove Button */}
      {image && (
        <button
          onClick={handleRemoveImage}
          className="mt-3 text-red-500"
        >
          Remove Image
        </button>
      )}

      {/* User Info */}
      <div className="border p-4 rounded shadow w-full max-w-md text-center mt-4">
        <p><b>Name:</b> {user.firstname} {user.lastname}</p>
        <p><b>Email:</b> {user.email}</p>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;