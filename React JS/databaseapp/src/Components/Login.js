import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form Data:', formData); // Log the form data
      // Send login data to backend
      const response = await axios.post('http://localhost:5000/login', formData);

      if (response.data.success) {
        // Successful login
        // Show alert on successful login
        alert('Login successful!');

        // Redirect to dashboard or any other desired page
        navigate('/home');
      } else {
        // Unsuccessful login
        setError(response.data.error);
      }
    } catch (err) {
        console.error('Error:', err.response.data); // Log the error response details
      
        if (err.response.data.message) {
          // Show the specific error message from the server in the alert
          alert(err.response.data.message);
        } else {
          // If no specific message, show a generic error message
          alert('An error occurred');
        }
      }

  };

  return (
    <div id={style.parent}>
      <h2>Login</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email*</label>
        <br />
        <input
          className={style.inp}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Enter your mail"
          required
          autoComplete="email"
          onChange={handleChange}
        />

        <br />
        <br />

        <label htmlFor="password">Password*</label>
        <br />
        <input
          className={style.inp}
          type="password"
          name="password"
          id="password"
          value={formData.password}
          placeholder="Enter your password"
          required
          autoComplete="current-password"
          onChange={handleChange}
        />

        <br />
        <div id={style.forgot}>
          <div>
            <input type="checkbox" />
            <span className={style.sp}>Remember me</span>
          </div>
          <div>
            <Link className={style.link} to={"/register"}>
              Forgot password ?
            </Link>
          </div>
        </div>
        <br />
        <br />
        <button className={style.btn} type="submit">
          Login
        </button>
        <br />
        <br />
        <div id={style.register}>
          <span className={style.sp}>Don't have an account ? </span>
          <Link className={style.link} to={"register"}>
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
