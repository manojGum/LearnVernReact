import React,{useContext} from "react";
import Subscription from "./Subscription";
import "./SubscriptionList.css";
import SubscriptionsContext from "../store/subscriptions-context";

const SubscriptionList = (props) => {
  const ctx=useContext(SubscriptionsContext)
  if (props.subscriptions.length === 0) {
    return <h3 className="list_no_data">No data found</h3>;
  }
  // return (
  //   <SubscriptionsContext.Consumer>
  //     {(ctx) => {
  //       <ul className="list">
  //         {ctx.subscriptionsList.map((subscription) => (
  //           <Subscription
  //             key={subscription.id}
  //             date={subscription.date}
  //             title={subscription.title}
  //             amount={subscription.amount}
  //           />
  //         ))}
  //       </ul>;
  //     }}
  //   </SubscriptionsContext.Consumer>
  // );
  return   <ul className="list">
  {ctx.subscriptionsList.map((subscription) => (
    <Subscription
      key={subscription.id}
      date={subscription.date}
      title={subscription.title}
      amount={subscription.amount}
    />
  ))}
</ul>;
};

export default SubscriptionList;
