//importation

import ContactList from "../../components/ContactList";
import { FAIL_CONTACTS, GET_CONTACTS, LOAD_CONTACTS } from "../actionsTypes/contact"

//initialeState
const initiale={
    contactList:[],
    error:null,
    load:false
}

//pure function
const contactReducer=(state=initiale,{type,payload})=>
{
    switch(type){
        case LOAD_CONTACTS:
            return{...state,load:true};
        case GET_CONTACTS:
            return{...state,load:false,contactList:ContactList.payload};
        case FAIL_CONTACTS:
            return {...state,load:false,error:payload};
        default:
            return state;
    }
}

export default contactReducer