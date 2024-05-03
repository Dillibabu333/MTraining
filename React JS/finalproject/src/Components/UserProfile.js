import React from 'react'
import "./UserProfile.css"

const UserProfile = () => {
  var username=JSON.parse(localStorage.getItem("formData"))
  username=username.name;
  var mail=JSON.parse(localStorage.getItem("formData"))
  mail=mail.email;
  return (
    <div id="uparent">
   
        <h3  className="username">{username}</h3>
        <h3 className="mail">{mail}</h3><br />
        <hr />
        <br />
        <a className="logout" href="/">Logout</a>
      </div>
  
  )
}

export default UserProfile;