import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../Config/firebase"


const AddAndUpdate = ({isOpen, onClose }) => {

    const addContact = async (contact) => {
        try {
          const contactRef = collection(db, "contacts");
          await addDoc(contactRef, contact);
          onClose();
          toast.success("Contact Added Successfully");
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose} >
        <Formik
        initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          } 
          >
        <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border" />
              <div className=" text-xs text-red-500">
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="h-10 border" />
              <div className=" text-xs text-red-500">
              </div>
            </div>

            <button className="self-end border bg-orange px-3 py-1.5">
              {isUpdate ? "update" : "add"} contact
            </button>
          </Form>
        </Formik>
        </Modal>
    </div>
  )
}

export default AddAndUpdate