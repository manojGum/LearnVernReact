import { useState } from 'react';
import Filter from './subscription/Filter';
import NewSubscription from './subscription/NewSubscription/NewSubscription';
// import Subscription from './subscription/Subscription';
import Container from './teamplate/Container';
import SubscriptionList from './subscription/SubscriptionList';
import SubscriptionChart from './subscription/SubscriptionChart';
const INITIAL_SUBSCRIPTION = [
  {
    id:1,
    date : (new Date('2022','03','12')),
    title :"Monthly Subscription",
    amount: '115.60'
  },
  {
    id:2,
    date : (new Date('2023','05','23')),
    title :"yearly Subscription",
    amount: '120.60'
  },
  {
    id:3,
    date : (new Date('2024','02','19')),
    title :"quatraly Subscription",
    amount: '150.60'
  }
]

function App() {
 const [subscriptions, setSubscriptions] =useState(INITIAL_SUBSCRIPTION)
 const [filteredYear, setFilteredYear]=useState('2023')
const  addSubscriptionHandler=(data)=>{
    // subscriptions.push(data)
    // console.log(subscriptions)
    setSubscriptions([data,...subscriptions])
  }
  const filterSubscriptions=subscriptions.filter((item)=>{
    return item.date.getFullYear().toString()===filteredYear
  })
  const filterChangeHandler =(data)=>{
    setFilteredYear(data)
    console.log("filter change handler",data)
  }
 
  // let containt = <h2>No Data Found</h2>
  // if(filterSubscriptions.length !== 0){
  //   containt = filterSubscriptions.map(subscription=> <Subscription key={subscription.id} date={subscription.date} title={subscription.title} amount={subscription.amount} />)
  // }
  return (
   <Container>
    <NewSubscription onAddSubscription={addSubscriptionHandler}/>
    <Filter onFilterChange={filterChangeHandler} selectedFilter={filteredYear}/>
    <SubscriptionChart filterSubscriptions= {filterSubscriptions} />
   
   {/* <Subscription date={subscription[0].date} title={subscription[0].title} amount={subscription[0].amount}/>
   <Subscription date={subscription[1].date} title={subscription[1].title} amount={subscription[1].amount}/>
   <Subscription date={subscription[2].date} title={subscription[2].title} amount={subscription[2].amount}/> */}

    {/* {filterSubscriptions.map(subscription=> <Subscription key={subscription.id} date={subscription.date} title={subscription.title} amount={subscription.amount} />)} */}

    {/* {filterSubscriptions.length === 0 ? <h2>No Data Found</h2>:filterSubscriptions.map(subscription=> <Subscription key={subscription.id} date={subscription.date} title={subscription.title} amount={subscription.amount} />)} */}

    {/* {filterSubscriptions.length === 0  &&  <h2>No Data Found</h2>}
    {filterSubscriptions.length !== 0  &&  filterSubscriptions.map(subscription=> <Subscription key={subscription.id} date={subscription.date} title={subscription.title} amount={subscription.amount} />)} */}

    {/* {containt} */}
    <SubscriptionList  subscriptions={filterSubscriptions} />
   </Container>
  );
}

export default App;
