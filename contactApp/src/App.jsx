import "./App.css";
import Navbar from "./Components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import {collection, deleteDoc, getDocs} from "firebase/firestore"

function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () =>{
    try {
      const contactsRef = collection(db, "collection" );
      const contactSnapshot = await getDocs(contactsRef);
      console.log(contactSnapshot);
      const contactList = contactSnapshot.docs.map((docs)=> docs.data());
      console.log(contactList);
    } catch (error) {
      
    }
  };

  getContacts();

  }, [])
  

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar/>
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
          <FiSearch className="absolute ml-1 text-3xl text-white" />
            <input
              type="text"
              className=" h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
            />
          </div>
          <AiFillPlusCircle
            className="cursor-pointer text-5xl text-white"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
        </div>
      </div>
    </>
  );
}

export default App;
