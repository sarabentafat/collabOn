import React, { useState } from "react";
import { login } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { Toast } from "../toasts"
import { CreateBusiness } from "../redux/slices/businessSlice";
const Login = () => {
  const dispatch = useDispatch();
  // State to manage user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleBusiness = () => {
    if (
      company == "" ||
      description == "" ||
      businessType == "" ||
      companysize == ""
    )
      console.log("zbi");
    dispatch(
      CreateBusiness({
        name: company,
        description,
        industry: businessType,
        CompanySize: companysize,
        owner: user._id,
      })
    );
  };
  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    if(email === "" || password === ""){
      Toast("Please fill all fields","error")
      return
    }
    dispatch(login({ email, password }));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
