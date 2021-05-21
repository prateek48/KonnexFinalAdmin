import React, { useState } from "react";

import "./Mps.css"



async function loginUser(credentials) {
  return fetch('https://nodejs-bug-and-announcement.herokuapp.com/announcements/', {
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
   
      loginUser({
        Subject:topic,
        Description:description
      });

    }
     
 
  return (
    
    <div className="wrapper fadeInDown">
  <div id="formContent">
  
    <h3 className="active"> Post Announcement </h3>
   
 
    <form onSubmit={handleSubmit}>
      <input type="text" id="login" className="fadeIn second" name="login" value={topic} onChange={e=>setTopic(e.target.value)} placeholder="Title"></input>
      <input type="text" id="password" className="fadeIn third" name="login" value={description} onChange={e=>setDetail(e.target.value)} placeholder="Description"></input>
      <input type="submit" className="fadeIn fourth" value="Submit"></input>
    </form>

  
    <div id="formFooter">
      <a className="underlineHover" href="#">KONNEX</a>
    </div>

  </div>
</div>





    
  );
}
