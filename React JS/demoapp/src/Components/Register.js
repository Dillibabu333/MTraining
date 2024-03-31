import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from ".//Register.module.css"


const Register = () => {
    const navigate = useNavigate()


    const [formData,setFormData] = useState({
        name:"",
        email:"",
        ph:"",
        password:"",
        birthdate:"",
        address:"",
        pincode:""
    })


    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.table("Registration completed",formData)
        setFormData({
            name:"",
            email:"",
            ph:"",
            password:"",
            birthdate:"",
            address:"",
            pincode:""
        })
        localStorage.setItem("formData" ,JSON.stringify(formData));
        alert("Thank you for Registration")
        navigate("/")
    }
   

  return (
    <div id={style.parent}>
      <h2>Register</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="">
          Name*
        </label>
        <br />
        <input className={style.inp} type="text" placeholder="Enter name" name="name" value={formData.name} required onChange={handleChange} />

        <br /><br />
        <label htmlFor="">
          Email*
        </label><br />
          <input className={style.inp} type="email" placeholder="Enter mail" name="email" value={formData.email} required onChange={handleChange} />
        <br /><br />
        <label htmlFor="">
          Phone No*
        </label><br />
          <input className={style.inp} type="tel" placeholder="Enter mobile number" name="ph" value={formData.ph} required onChange={handleChange} />
        <br /><br />
        <label htmlFor="">
          Password*
        </label><br />
          <input className={style.inp} type="password" placeholder="Enter password" name="password" value={formData.password} required onChange={handleChange} />
        <br /><br />
        <label for="">Date of Birth*</label>
        <br/>
        <input className={style.inp} type="date" placeholder="date of birth" name="date" value={formData.date}  required onChange={handleChange} />
        <br/><br/>
        <label for="">Adress*</label>
        <br/>
        <input className={style.inp} type="text" placeholder="Enter permanent address"  name="address" value={formData.address} required onChange={handleChange}/>
        <br/><br/>
        <label for="">Pincode*</label>
        <br/>
        <input className={style.inp}  type="number" placeholder="Enter pincode" name="pincode" value={formData.pincode} required onChange={handleChange}/>
        <br/><br/>
        <button className={style.btn} type="submit">Register</button>
    <br /><br />
<div id={style.login}>
    <span className={style.sp}>Already have an account ?</span>
    <Link className={style.link} to="/" >Login here</Link>
    </div>
      </form>
    </div>
  );
};


export default Register;