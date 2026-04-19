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

    // 🔐 LOGIN
    if (login) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        alert("Invalid credentials ❌");
        return;
      }

      localStorage.setItem("currentuser", JSON.stringify(user));
      alert("Login Successful ✅");
      navigate("/profile");
      return;
    }

    // 🆕 SIGNUP
    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      alert("All fields required ❌");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exist = users.find((u) => u.email === email);
    if (exist) {
      alert("User already exists ❌");
      return;
    }

    const newUser = { firstname, lastname, email, password };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ auto login
    localStorage.setItem("currentuser", JSON.stringify(newUser));

    alert("Signup Successful ✅");
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-96 space-y-3"
      >
        <h1 className="text-2xl font-bold text-center">
          {login ? "Login" : "Signup"}
        </h1>

        {!login && (
          <>
            <input
              name="firstname"
              placeholder="First Name"
              onChange={handlechange}
              className="w-full p-2 border"
            />
            <input
              name="lastname"
              placeholder="Last Name"
              onChange={handlechange}
              className="w-full p-2 border"
            />
          </>
        )}

        <input
          name="email"
          placeholder="Email"
          onChange={handlechange}
          className="w-full p-2 border"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlechange}
          className="w-full p-2 border"
        />

        {!login && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handlechange}
            className="w-full p-2 border"
          />
        )}

        <button className="w-full bg-green-500 text-white p-2">
          {login ? "Login" : "Signup"}
        </button>

        <p className="text-center text-sm">
          {login ? "No account?" : "Already have account?"}
          <span
            onClick={handleclick}
            className="text-blue-500 ml-1 cursor-pointer"
          >
            {login ? "Signup" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;