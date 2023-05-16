import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ tittle: "", body: "" });

  return (
    <Context.Provider
      value={{
        showModal,
        modalContent,
        setShowModal,
        setModalContent
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
