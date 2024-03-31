import React from 'react'
import Navbar from './Navbar'
import style from './Home.module.css'

const Home = () => {
  return (
    <div>
        <Navbar/>   
        
        <h1 className={style.home}>Home Page...</h1>
        
    </div>
  )
}

export default Home