import './App.css';
import { useState } from 'react';
import AddSubscriber from './components/subscribers/AddSubscriber';
import SubscriberList from './components/subscribers/SubscriberList';
import Container from './components/templates/Container'
function App() {
  const [subscriberList,setSubscriberList] =useState([]);
  const onAddSubscriberHandler =(sname,spincode)=>{
    console.log(sname)
   setSubscriberList((prevState)=>
      {
        return [...prevState,{name:sname,pincode:spincode,id:Math.random().toString()}]}
      )
  }
  return (
    <Container>
      <AddSubscriber onAddSubscriber={onAddSubscriberHandler}></AddSubscriber>
      <SubscriberList list={subscriberList}></SubscriberList>
      </Container>
  );
}

export default App;
