import React, {useEffect, useState} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
// import {uuid} from "uuidv4";

function App() {

  // //rendering a list 
  // const contacts = [
  //   {
  //     id :"1",
  //     name : "Dipesh",
  //     email : "malvia@gmail.com",
  //   },
  //   {
  //     id : "2",
  //     name : "Nikesh",
  //     email : "nicks@gmail.com",
  //   }
  // ];
  //instead of the above we are using react hooks 
  //hooks are used to use states in our functional component

  const LOCAL_STORAGE_KEY = "contacts";  
  const [contacts,setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts,contact]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) =>{
      return contact.id!=id;
    });
    setContacts(newContactList);
  }

  useEffect(() =>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  },[]);
  
  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  

  return (
    <div className="ui contianer">
      <Header />
       <AddContact addContactHandler ={addContactHandler} />
       {/*passing the above list using props
        here, contacts = {contacts} so, contacts array is 
        passed inside {} and the other one is the name of 
        the props
        */}
       <ContactList contacts = {contacts} getContactId = {removeContactHandler}/> 
    </div>
  );
}

export default App;

//Components - independent and reusable 
//             piece of code that runs on its own 