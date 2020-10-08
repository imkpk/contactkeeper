import React, { useReducer } from "react";
import { uuid } from "uuid/dist/v4";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Jill Johnson",
      email: "jill@gmail.com",
      phone: "111-111-1111",
      type: "personal"
    },
    {
      id: 2,
      name: "Joseph Prince",
      email: "John@gmail.com",
      phone: "111-111-1122",
      type: "personal"
    },
    {
      id: 3,
      name: "Irene grace",
      email: "irene@gmail.com",
      phone: "111-111-1123",
      type: "professional"
    }
  ],
  current: null,
  filtered: null
};

const ContactState = (props) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact
  const addContact = (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // /setCurrent Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //cler Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Updata Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //filter Contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  // clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        clearCurrent
      }}>
      {props.childern}
    </ContactContext.Provider>
  );
};

export default ContactState;
