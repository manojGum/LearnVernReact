import React, { useState } from 'react'
import "./FormSubscription.css"
const FormSubscription = (props) => {
    const [isValid, setIsValid]=useState(true)
    // first approch
    // const [userTitle, setUserTitle]= useState()
    // const [userDate, setUserDate]= useState()
    // const [userAmount, setUserAmount]= useState()
      // second approch
    const [ form , setForm] = useState({userTitle:"",userDate:"",userAmount:""})
    const titleChangeHandler = (events) =>{
        // first approch
    //    setUserTitle(events.target.value)
    // second approch
    // setForm({...form,userTitle:events.target.value})
    // third approch
    if(events.target.value.trim().length>0){
        setIsValid(true)
    }
    setForm((prevState)=>{
        return {...form,userTitle:events.target.value}
    })

    }
    const dateChangeHandler = (events)=>{
        // first approch
        // setUserDate(events.target.value)
          // second approch
        // setForm({...form,userDate:events.target.value})
        // third approch
        setForm((prevState)=>{
            return {...form,userDate:events.target.value}
        })
    }
    const AmountChangeHandler = (events)=>{
        // first approch
        // setUserAmount(events.target.value)
          // second approch
        // setForm({...form,userAmount:events.target.value})
        // third approch
        setForm((prevState)=>{
            return {...form,userAmount:events.target.value}
        })
    }

    const submitHandler = (events) =>{
        events.preventDefault()
        if(form.userTitle.trim().length===0){
            setIsValid(false)
            return
        }
        const subscription={title:form.userTitle, amount:form.userAmount, date: new Date(form.userDate)}
        props.onSave(subscription)
        console.log("form submit",subscription)
        props.setShowForm(false)
    }

  return (
    <form onSubmit={submitHandler}> 
        <div className='new_subscription_controls'>
            <div className={`new_subscription_control ${!isValid? 'invalid':""}`}>
                <label style={{color:!isValid?'red':'black'}}>title</label>
                <input type='text' style={{borderColor:!isValid?'red':'black'}} onChange={titleChangeHandler} value={form.userTitle}></input>
            </div>
            <div className='new_subscription_control'>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler} value={form.userDate}></input>
            </div>
            <div className='new_subscription_control'>
                <label>Amount</label>
                <input type='text' onChange={AmountChangeHandler} value={form.userAmount}></input>
            </div>
        </div>
        <div className='new_subscription_actions'>
            <button type='submit'>Add Subscription</button>
        </div>
    </form>
  )
}

export default FormSubscription