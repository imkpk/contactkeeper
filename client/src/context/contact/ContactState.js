import React, { useReducer } from "react";
import uuid from "uuid";
import CotactContext from "./contactContext";
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

const ContactState = () => {
  const intialState = {
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
        name: "John Johnson",
        email: "John@gmail.com",
        phone: "111-111-1122",
        type: "personal"
      },
      {
        id: 3,
        name: "Irene Johnson",
        email: "irene@gmail.com",
        phone: "111-111-1123",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add Contact

  //delete Contact

  // /setCurrent Contact

  //cler Current Contact

  // Updata Contact

  //filter Contacts

  // clear Filter

  return (
    <CotactContext.Provider
      value={{
        contacts: state.contacts
      }}>
      {props.childern}
    </CotactContext.Provider>
  );
};

export default ContactState;
