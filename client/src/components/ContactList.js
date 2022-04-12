import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcontacts } from '../redux/actions/contact'
import ContactCard from './ContactCard';


function ContactList() {
  const dispatch=useDispatch();
  const Contact=useSelector(state=>state.contactReducer.contactList)
  console.log(Contact)
  const load=useSelector((state)=>state.contactReducer.load);
  useEffect(() => {
   dispatch(getcontacts());
  }, [dispatch]);
  
  return (
    <div>
      <h5>Contact List</h5>
      <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
      {load ? <p>Loading</p> : 
      Contact?.map((el)=> <ContactCard liste={el} key={el._id} />)}
      </div>
    </div>
  )
}

export default ContactList