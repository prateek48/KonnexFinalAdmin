import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function TypographyPage() {
  const[suggestion,setSuggestion]=useState("");
  useEffect(()=>
  {
    

     
      fetch('https://application-imp.herokuapp.com/improvement', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          
        },
        body: JSON.stringify()
      })
        .then(data => data.json())
        .then(user1=>setSuggestion(user1)).then(   console.log(suggestion.data));
  

    
      
  },[]);
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Suggestions</h4>
        <p className={classes.cardCategoryWhite}>
        
        </p>
      </CardHeader>
      <CardBody>
      {
        suggestion.data&&suggestion?suggestion.data.map((x,index)=>(
        
          <div className={classes.typo} key={index}>
          <div className={classes.note}>{x.topic}</div>
          <h3>{x.detail}</h3>
        </div>

        )):
          <div className={classes.typo}>
          <div className={classes.note}>Loading......</div>
          <h3></h3>
        </div>

      }
        
       
       
       

      
      </CardBody>
    </Card>
  );
}
