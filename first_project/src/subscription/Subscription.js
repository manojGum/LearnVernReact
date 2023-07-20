import React, { useState } from "react";
import "./Subscription.css"
import SubscriptionDate from "./SubscriptionDate";
import Container from "../teamplate/Container";

function Subscription(props) {
 const [title,setTitle] =useState(props.title)

const onClickHandler= ()=>{
  setTitle("Change Title")

}
    
    
  return (
    <Container className="subscription">
      {/* <div className="">{props.date.toDateString()}</div> */}
      <SubscriptionDate date={props.date}/>
      <h2 className="subscription_title">{title}</h2>
      <div className="subscription_price">{props.amount}</div>
      <button type="button" id="changeTitleButton" onClick={onClickHandler}>Change Title</button>
    </Container>
  );
}

export default Subscription;
