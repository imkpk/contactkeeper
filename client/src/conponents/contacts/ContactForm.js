import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });
  //bring the context
  const contactContext = useContext(ContactContext);
  //desctuct the values from context.provider
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  //mount the current value else set it to the default
  useEffect(() => {
    if (current != null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
    // return () => {};
  }, [contactContext]);

  const { name, email, phone, type } = contact;
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === "personal"}
      />{" "}
      Personal{" "}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === "professional"}
      />
      Professional
      <div>
        <input
          type='submit'
          value={current ? "Update Contact" : "Add Contact"}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
