import React from "react";
import { useState } from "react";
import style from ".//Register.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {



  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phno: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server
      console.log("Form Data:", formData);
      await axios.post("http://localhost:5000/register", formData);
     
      alert("Register successfully.");
      navigate("/");
    } catch (error) {
      // console.error(error.response.data);
      window.alert(`Error: ${error.response.data.error}`);
    }
  };

  return (
    <div id={style.parent}>
      <h2>Register</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="firstName">FirstName*</label>
        <br />
        <input
          className={style.inp}
          type="text"
          placeholder="Enter name"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          autoComplete="firstName"
          required
          onChange={handleChange}
        />

        <br />
        <br />
        <label htmlFor="lastName">Lastname*</label>
        <br />
        <input
          className={style.inp}
          type="text"
          placeholder="Enter name"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          autoComplete="lastName"
          required
          onChange={handleChange}
        />

        <br />
        <br />
        <label htmlFor="email">Email*</label>
        <br />
        <input
          className={style.inp}
          type="email"
          placeholder="Enter mail"
          id="email"
          name="email"
          value={formData.email}
          autoComplete="email"
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="phno">Phone No*</label>
        <br />
        <input
          className={style.inp}
          type="tel"
          placeholder="Enter mobile number"
          id="phno"
          name="phno"
          value={formData.phno}
          autoComplete="phno"
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="gender" className={style.gender}>
          Gender*
        </label>
        <br />
        <div className={style.radio}>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            required
            onChange={handleChange}
          />
          <label htmlFor="male" className={style.male}>
            Male
          </label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            required
            onChange={handleChange}
          />
          <label htmlFor="male" className={style.female}>
            Female
          </label>
          <input
            type="radio"
            id="others"
            name="gender"
            value="others"
            checked={formData.gender === "others"}
            required
            onChange={handleChange}
          />
          <label htmlFor="male" className={style.others}>
            Others
          </label>
        </div>

        <br />
        <label htmlFor="password">Password*</label>
        <br />
        <input
          className={style.inp}
          type="password"
          placeholder="Enter password"
          id="password"
          name="password"
          value={formData.password}
          autoComplete="current-password"
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <button className={style.btn} type="submit">
          Register
        </button>
        <br />
        <br />
        <div id={style.login}>
          <span className={style.sp}>Already have an account ?</span>
          <Link className={style.link} to="/">
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
