import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ tittle: "", body: "" });

  const [showModalHome, setShowModalHome] = useState(false)
  const [showModalPet, setShowModalPet] = useState(false)
  const [showModalMadera, setShowModalMadera] = useState(false)

  return (
    <Context.Provider
      value={{
        showModal,
        modalContent,
        showModalHome,
        showModalPet,
        showModalMadera,
        setShowModal,
        setModalContent,
        setShowModalHome,
        setShowModalPet,
        setShowModalMadera
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
