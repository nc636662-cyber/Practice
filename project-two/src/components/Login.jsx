import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const [login, setLogin] = useState(true);
  const [formdata,setformdata]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const handleclick = (e) => {
    e.preventDefault();
    setLogin(!login);
  };

const handlechange = (e) => {
  const { name, value } = e.target;
  console.log("name",name)
  console.log("valueee",value)

  setformdata((prev) => ({
    ...prev,        // purana data preserve karega
    [name]: value   // sirf changed field update karega
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const { firstname, lastname, email, password, confirmPassword } = formdata;

  // 🔹 LOGIN
  if (login) {
    if (!email || !password) {
      alert("Email and Password required");
      return;
    }

    // get all users
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    // console.log("saveeeeee",savedUsers[0].email)

    // find user with matching email & password
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

  // 🔹 SIGNUP
  if (!firstname || !lastname || !email || !password || !confirmPassword) {
    alert("All fields are required");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // get existing users
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // check if email already exists
  const emailExists = existingUsers.some((user) => user.email === email);
  if (emailExists) {
    alert("Email already registered");
    return;
  }

  // add new user
  existingUsers.push({ firstname, lastname, email, password });

  // save back to localStorage
  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("Signup successful");

  // switch to login
  setLogin(true);

  // clear form
  setformdata({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
};

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const { firstname, lastname, email, password, confirmPassword } = formdata;

//   // 🔹 LOGIN
//   if (login) {
//     if (!email || !password) {
//       alert("Email and Password required");
//       return;
//     }

//     const savedUser = JSON.parse(localStorage.getItem("user"));

//     if (
//       savedUser &&
//       savedUser.email === email &&
//       savedUser.password === password
//     ) {
//       alert("Login success ");
//        localStorage.setItem("currentuser", JSON.stringify(formdata));
//       navigate("/")
//     } else {
//       alert("Invalid credentials ");
//     }

//     return;
//   }

//   // 🔹 SIGNUP
//   if (!firstname || !lastname || !email || !password || !confirmPassword) {
//     alert("All fields are required");
//     return;
//   }

//   if (password !== confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   const existuser=JSON.parse(localStorage.getItem("users")) || [];
//   existuser.push(formdata)
//   // save user
//   localStorage.setItem("user", JSON.stringify(existuser));

//   alert("Signup successful ");

//   // switch to login
//   setLogin(true);
// };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          {login ? "Login" : "Signup"}
        </h1>

       
        {!login && (
          <>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              value={formdata.firstname}
              name="firstname"
              onChange={handlechange}
              className="w-full mt-1 mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

  
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
               value={formdata.lastname}
              name="lastname"
               onChange={handlechange}
              className="w-full mt-1 mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </>
        )}

        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
           value={formdata.email}
          name="email"
           onChange={handlechange}
          className="w-full mt-1 mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
           value={formdata.password}
          name="password"
           onChange={handlechange}
          className="w-full mt-1 mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {!login && (
          <>
            <label className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
             value={formdata.confirmPassword}
              type="password"
              name="confirmPassword"
               onChange={handlechange}
              className="w-full mt-1 mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </>
        )}

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          {login ? "Login" : "Signup"}
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          {login ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={handleclick}
            className="text-green-500 hover:text-green-600 font-semibold cursor-pointer"
          >
            {login ? "Signup" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;