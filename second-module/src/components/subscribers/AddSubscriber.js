// import React, { useState } from "react";
// import Button from "../templates/Button";
// import Container from "../templates/Container";
// import "./AddSubscriber.css";
// import ErrorModal from "../templates/ErrorModal";
// const AddSubscriber = (props) => {
//   const [name, setName] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [error,setError]=useState()
//   const onNameChange = (events) => {
//     setName(events.target.value);
//   };
//   const onPincodeChange = (events) => {
//     setPincode(events.target.value);
//   };
//   const onSubmitHandler = (events) => {
//     events.preventDefault();
//     if(name.trim().length===0 || pincode.trim().length===0 || pincode.length<5 || pincode.length <5){
//         setError({title:'Invalid input', content:"please enter valid input"})
//         return
//     }
//     // console.log("updated value ",name,pincode)
// props.onAddSubscriber(name,pincode)
//     setName('')
//     setPincode('')
//   };
//   const onCloseHandler=()=>{
//     setError(null)
//   }
//   return (
//     <React.Fragment>
//        {error && <ErrorModal title={error.title} content={error.content} onClose={onCloseHandler}></ErrorModal>} 
//       <form onSubmit={onSubmitHandler}>
//         <Container className="input">
//           <label htmlFor="name">Name</label>
//           <input id="name" value={name} type="text" onChange={onNameChange}></input>
//           <label htmlFor="pincode">Pincode</label>
//           <input id="pincode" value={pincode} type="number" onChange={onPincodeChange}></input>
//           <Button type="submit">Save</Button>
//         </Container>
//       </form>
//     </React.Fragment>
//   );
// };

// export default AddSubscriber;

import './AddSubscriber.css';
import Container from '../templates/Container';
import Button from '../templates/Button';
import { useRef,useState,Fragment } from 'react';
import ErrorModal from '../templates/ErrorModal';
const AddSubscriber=(props)=>{

    const nameInputRef=useRef('');
    const pincodeInputRef=useRef('');
    const [name,setName]=useState('');
    const [pincode,setPincode]=useState('');
    const [error,setError]=useState();
    const onNameChange=(events)=>{
      setName(events.target.value)
    }
    const onPincodeChange =(events)=>{
      setPincode(events.target.value); 
    }
    const onSubmitHandler=(events)=>{
          events.preventDefault(); 
          if(nameInputRef.current.value.trim().length===0)
          {
            console.log('name input not validated') ;
            setError({title:'Invalid Name',content:'Name is the mandatory field. Please enter the name of subscriber.'}) 
            return
          }
          if(pincode.trim().length===0)
          {
              console.log('pincode input is not validated')
              setError({title:'Invalid Pincode',content:'Pincode is the mandatory field. Please enter the pincode of subscriber.'}) 
              return
          }
          if(pincode.length < 5 || pincode < 0 ){
             console.log('pincode value is not valid. It should be 5 digit number')
             setError({title:'Invalid Pincode',content:'Pincode should be 5 digit number. Please enter positive number as pincode.'}) 
             return
          }
          console.log('updated states',name,pincode);
          console.log('ref values',nameInputRef)
          props.onAddSubscriber(nameInputRef.current.value,pincode)
          // setName('');
          nameInputRef.current.value=''
          setPincode('');
    }
    const onCloseHandler=()=>{
      setError(null)
    }
    return (
      <Fragment>
          {error && <ErrorModal title={error.title} content={error.content} onClose={onCloseHandler}></ErrorModal>}
            <form onSubmit={onSubmitHandler} >
            <Container className="input">
            <label htmlFor="name">Name</label>
            <input ref={nameInputRef} id="name" type="text"></input>
            <label htmlFor="pincode">Pincode</label>
            <input  id="pincode" value={pincode} type="number" onChange={onPincodeChange}></input>
            <Button type="submit">Save</Button>
            </Container>
            </form>
      </Fragment>
    )
}
export default AddSubscriber;