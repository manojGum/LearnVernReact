import React, { useState } from 'react'
import "./NewSubscription.css"
import FormSubscription from './FormSubscription'
const NewSubscription = (props) => {
  const [showForm, setShowForm]= useState(false)
  const onSaveHandler =(data)=>{
    const subscriptionData={...data, id:Math.random().toString()}
    props.onAddSubscription(subscriptionData)
  }
  const showFormHandler =()=>{
    setShowForm(!showForm)
  }
  return (
    <div className='new_subscription'>{showForm && <FormSubscription onSave={onSaveHandler} setShowForm={setShowForm}/>}
    <button type='button' onClick={showFormHandler}>{showForm?'Cancle':"Add New"}</button>
    </div>
  )
}

export default NewSubscription