import "./App.css";
import Navbar from "./Components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Config/firebase";
import ContactCard from "./Components/ContactCard";
import useDisclouse from "./hooks/useDisclouse";
import AddAndUpdate from "./Components/AddAndUpdate";

function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "collection");
        const contactSnapshot = await getDocs(contactsRef);
        const contactList = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactList);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <FiSearch className="absolute ml-1 text-3xl text-white" />
            <input
              type="text"
              className=" h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
            />
          </div>
          <AiFillPlusCircle onClick={onOpen} className="cursor-pointer text-5xl text-white" />
        </div>
        <div className="mt-4 flex flex-col gap-3 bg-slate-600">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      {/* <AddAndUpdateContact onClose={onClose} isOpen={isOpen} /> */}
      <AddAndUpdate onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default App;
