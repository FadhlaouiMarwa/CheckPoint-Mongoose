import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addcontact } from '../redux/actions/contact'

function Add() {
  const dispatch=useDispatch()
  const [newcontact, setNewContact] = useState({name:"",email:"",phone:""})
  const handlechange=(e)=>{setNewContact({...newcontact,[e.target.name]:[e.target.value]})}
  const handleAdd=()=>{dispatch(addcontact(newcontact))}

  return (
    <div style={{padding:50}}>
      <div style={{padding:20}}>
      <label>Name: </label>
      <input type="text" placeholder='enter your name here' name="name" onChange={handlechange}/>
      </div>
      <div style={{padding:20}}>
      <label>Email: </label>
      <input type="email" placeholder='enter your email here' name="email" onChange={handlechange}/>
      </div>
      <div style={{padding:20}}>
      <label>Phone: </label>
      <input type="number" placeholder='enter your phone number here' name="phone" onChange={handlechange}/>
      </div>
    <Button style={{width:400,height:50}} onClick={handleAdd}>Valider l'ajout du contact </Button>
    </div>
  )
}

export default Add