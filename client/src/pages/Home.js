import React from "react";
import ContactFilter from "../conponents/contacts/ContactFilter";
import ContactForm from "../conponents/contacts/ContactForm";
import Contacts from "../conponents/contacts/Contacts";

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />{" "}
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};
export default Home;
