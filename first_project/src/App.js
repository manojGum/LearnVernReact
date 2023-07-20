import { useState } from 'react';
import Filter from './subscription/Filter';
import NewSubscription from './subscription/NewSubscription/NewSubscription';
import Subscription from './subscription/Subscription';
import Container from './teamplate/Container';

function App() {
  let subscription =[
    {
      id:1,
      date : (new Date('2022','03','12')),
      title :"Monthly Subscription",
      amount: '115.60'
    },
    {
      id:2,
      date : (new Date('2023','05','23')),
      title :"Monthly Subscription",
      amount: '120.60'
    },
    {
      id:3,
      date : (new Date('2024','02','19')),
      title :"Monthly Subscription",
      amount: '150.60'
    }
  ]
  const [filteredData, setFilteredData]=useState('2023')
const  addSubscriptionHandler=(data)=>{
    subscription.push(data)
    console.log(subscription)
  }
  const filterChangeHandler =(data)=>{
    setFilteredData(data)
    console.log("filter change handler",data)
  }
 
  return (
   <Container>
    <NewSubscription onAddSubscription={addSubscriptionHandler}/>
    <Filter onFilterChange={filterChangeHandler} selectedFilter={filteredData}/>
   <Subscription date={subscription[0].date} title={subscription[0].title} amount={subscription[0].amount}/>
   <Subscription date={subscription[1].date} title={subscription[1].title} amount={subscription[1].amount}/>
   <Subscription date={subscription[2].date} title={subscription[2].title} amount={subscription[2].amount}/>
   </Container>
  );
}

export default App;
