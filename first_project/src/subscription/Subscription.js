import React from "react";
import "./Subscription.css"
import SubscriptionDate from "./SubscriptionDate";
import Container from "../teamplate/Container";

function Subscription(props) {

    
    
  return (
    <Container className="subscription">
      {/* <div className="">{props.date.toDateString()}</div> */}
      <SubscriptionDate date={props.date}/>
      <h2 className="subscription_title">{props.title}</h2>
      <div className="subscription_price">{props.amount}</div>
    </Container>
  );
}

export default Subscription;
