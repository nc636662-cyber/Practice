import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);

  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleclick = (e) => {
    e.preventDefault();
    setLogin(!login);
  };

  const handlechange = (e) => {
    const { name, value } = e.target;

    setformdata((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, email, password, confirmPassword } = formdata;

    // LOGIN
    if (login) {
      if (!email || !password) {
        alert("Email and Password required");
        return;
      }

      const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

      const existingUser = savedUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (existingUser) {
        alert("Login success");
        localStorage.setItem("currentuser", JSON.stringify(existingUser));
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
      return;
    }

    // SIGNUP
    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = existingUsers.some((user) => user.email === email);
    if (emailExists) {
      alert("Email already registered");
      return;
    }

    existingUsers.push({ firstname, lastname, email, password });
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Signup successful");

    setLogin(true);

    setformdata({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-3xl shadow-xl space-y-4 transition-all duration-300"
      >

        <h1 className="text-3xl font-bold text-center text-gray-800">
          {login ? "Welcome Back " : "Create Account "}
        </h1>

        {/* Signup Fields */}
        {!login && (
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formdata.firstname}
              onChange={handlechange}
              className="p-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formdata.lastname}
              onChange={handlechange}
              className="p-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>
        )}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formdata.email}
          onChange={handlechange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formdata.password}
          onChange={handlechange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
        />

        {/* Confirm Password */}
        {!login && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formdata.confirmPassword}
            onChange={handlechange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        )}

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 active:scale-95 transition"
        >
          {login ? "Login" : "Signup"}
        </button>

        {/* Toggle */}
        <p className="text-center text-sm text-gray-500">
          {login ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={handleclick}
            className="ml-1 text-green-500 font-semibold cursor-pointer hover:underline"
          >
            {login ? "Signup" : "Login"}
          </span>
        </p>

      </form>
    </div>
  );
};

export default Login;