import React, {useState} from 'react'

const About = () => {
  const [count,setCount]=useState(0);
  const [string,setString]=useState(" ");

  let incre=()=>{
    setCount(count+1);
  }
  let addString=()=>{
    setString(string+"Kalikiri ");
  }

  return (
    <div>
      <button onClick={incre}>numbers</button>
      <h1>{count}</h1>

     <button onClick={addString}>Adding 'K'</button>
     <h2>{string}</h2>

    </div>
  )
}

export default About;