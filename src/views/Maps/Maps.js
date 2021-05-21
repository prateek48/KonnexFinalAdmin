import { Description } from "@material-ui/icons";
import React, { useState } from "react";

import "./Mps.css"



async function loginUser(credentials) {
  return fetch('https://application-imp.herokuapp.com/details', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export default function UserProfile() {
  const[topic,setTopic]=useState("");
  const[description,setDetail]=useState("");

  const handleSubmit = async e => {
    e.preventDefault();
   
      const token = await loginUser({
        topic,
        description
      });

    }
     
 
  return (
    
    <div class="wrapper fadeInDown">
  <div id="formContent">
  
    <h3 class="active"> Post Navigation Details </h3>
   
 
    <form onSubmit={handleSubmit}>
      <input type="text" id="login" class="fadeIn second" name="login" value={topic} onChange={e=>setTopic(e.target.value)} placeholder="Topic"></input>
      <input type="text" id="password" class="fadeIn third" name="login" value={description} onChange={e=>setDetail(e.target.value)} placeholder="Description"></input>
      <input type="submit" class="fadeIn fourth" value="Submit"></input>
    </form>

  
    <div id="formFooter">
      <a class="underlineHover" href="#">KONNEX</a>
    </div>

  </div>
</div>





    
  );
}
