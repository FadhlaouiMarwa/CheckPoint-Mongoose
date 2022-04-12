import { FAIL_CONTACTS, GET_CONTACTS, LOAD_CONTACTS } from "../actionsTypes/contact"
import axios from "axios"

export const getcontacts = () => async (dispatch)=>
{
    dispatch ({type:LOAD_CONTACTS})
    try {
        let result= await axios.get("/api/contacts/")
        dispatch ({type: GET_CONTACTS ,payload:result.data})
    } catch (error) {
        dispatch ({type: FAIL_CONTACTS ,payload:error.reponse})
    }
}

export const addcontact=(newContact)=>async(dispatch)=>
{
    try {
        await axios.post("/api/contacts/",newContact)
        dispatch (getcontacts())
        
    } catch (error) {
        dispatch({type:FAIL_CONTACTS,payload:error.reponse})
        
    }
}

export const deletecontact=(id)=>async(dispatch)=>
{
    try {
        await axios.delete(`/api/contacts/dele/${id}`)
        dispatch (getcontacts())

    } catch (error) {
        dispatch({type:FAIL_CONTACTS,payload:error.reponse})

        
    }
}