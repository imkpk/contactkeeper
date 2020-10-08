import React, { useContext, useEffect, useRef } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  // /bring context

  const contactContext = useContext(ContactContext);

  //pull the contactcontext values by destructing them
  const { filterContacts, clearFilter, filtered } = contactContext;
  //initilize the ref atribute with useRef hook
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  }, [filtered]);

  //onchnge value
  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.targer.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        type='text'
        ref={text}
        placeholder='Filter Contacts'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
