import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from "./Login.module.css";
import Swal from 'sweetalert2';



const Login = () => {
    const navigate=useNavigate();

    const [formData,setFormData] =useState({
        email:"",
        password:""
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
        // console.table("Login sucessfully",formData)
        setFormData({
            email:"",
            password:""
        })
        var valid=localStorage.getItem("formData");
        valid=JSON.parse(valid);
        if(formData.email===valid.email && formData.password===valid.password){
            // alert("Login Successfully")
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: "Login Successfully"
            });
            navigate("/home")
        }
        else{
            // alert("Invalid Email/Password error");
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Invalid Email/Password error!",
            });

        }
    }
   

  return (
    <div id={style.parent}>
        <h2>Login</h2>
      <form className={style.form} onSubmit={handleSubmit}>
       
        <label htmlFor="">
          Email*
        </label>
        <br />
        <input className= {style.inp} type="email" name="email" value={formData.email} placeholder="Enter your mail"  required onChange={handleChange} />

       <br /><br />

        <label htmlFor="">
          Password*
        </label>
        <br />
        <input  className={style.inp} type="password" name="password" value={formData.password}placeholder="Enter your password"  required onChange={handleChange} />

        <br />
        <div id={style.forgot}>
                 <div>
                     <input type="checkbox"/>
                     <span className={style.sp}>Remember me</span>
                 </div>
                 <div>
                    <Link className={style.link} to={"/register"}>Forgot password ?</Link>
                 </div>
            </div>
            <br/><br/>
            <button className={style.btn} type="submit">Login</button>
            <br/><br />
            <div id={style.register}>
                <span className={style.sp}>Don't have an account ? </span>
                <Link className={style.link} to={"register"}>Register here</Link>
            </div>

      </form>
    </div>
  )
}

export default Login