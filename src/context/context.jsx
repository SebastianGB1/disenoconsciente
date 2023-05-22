import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ tittle: "", body: "" });

  const [showModalHome, setShowModalHome] = useState(false)
  const [showModalPet, setShowModalPet] = useState(false)
  const [showModalMadera, setShowModalMadera] = useState(false)
  const [showModalSostenibilidad, setShowModalSostenibilidad] = useState(false)
  const [showModalImpacto, setShowModalImpacto] = useState(false)

  return (
    <Context.Provider
      value={{
        showModal,
        modalContent,
        showModalHome,
        showModalPet,
        showModalMadera,
        showModalSostenibilidad,
        showModalImpacto,
        setShowModal,
        setModalContent,
        setShowModalHome,
        setShowModalPet,
        setShowModalMadera,
        setShowModalSostenibilidad,
        setShowModalImpacto
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
