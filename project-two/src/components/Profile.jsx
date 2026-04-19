import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentuser"));

  if (!user) {
    return <h2 className="text-center mt-10">Please Login First ❌</h2>;
  }

  const handleLogout = () => {
    localStorage.removeItem("currentuser");
    navigate("/login");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <div className="border p-4 rounded shadow">
        <p><b>Name:</b> {user.firstname} {user.lastname}</p>
        <p><b>Email:</b> {user.email}</p>
      </div>

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