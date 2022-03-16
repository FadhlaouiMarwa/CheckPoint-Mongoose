import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcontacts } from '../redux/actions/contact'


function ContactList() {
  const dispatch=useDispatch();
  const contacts=useSelector((state)=>state.contactReducer.contactList);
  const load=useSelector((state)=>state.contactReducer.load);
  useEffect(() => {
   dispatch(getcontacts());
    
  }, []);
  
  return (
    <div>
      <h5>Contact List</h5>
      {load? <p>Loading</p> :contacts?.map((el)=><h2>{el.email}</h2>)}
    </div>
  )
}

export default ContactList