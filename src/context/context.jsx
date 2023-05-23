import { createContext, useState } from "react";
import {supabase} from '../supabase/client'

export const Context = createContext();

export function ContextProvider(props) {
  const [showModal, setShowModal] = useState(false);
  

  const [showModalHome, setShowModalHome] = useState(false)
  const [showModalPet, setShowModalPet] = useState(false)
  const [showModalMadera, setShowModalMadera] = useState(false)
  const [showModalSostenibilidad, setShowModalSostenibilidad] = useState(false)
  const [showModalImpacto, setShowModalImpacto] = useState(false)
  const [showDetailPet, setShowDetailPet] = useState(false)
  const [showDetailTincion, setShowDetailTincion] = useState(false)

  const [comentariosPet, setComentariosPet] = useState([])
  const [comentariosTincion, setComentariosTincion] = useState([])

  const getComentariosPet= async ()=>{
    const result = await supabase.from("comentarios_pet").select('*')
    setComentariosPet(result.data)
  }

  const getComentariosTincion= async ()=>{
    const result = await supabase.from("comentarios_tincion").select('*')
    setComentariosTincion(result.data)
  }

  return (
    <Context.Provider
      value={{
        showModal,
        showModalHome, 
        showModalPet,
        showModalMadera,
        showModalSostenibilidad,
        showModalImpacto,
        showDetailPet,
        showDetailTincion,
        comentariosPet,
        comentariosTincion,
        setShowModal,
        setShowModalHome,
        setShowModalPet,
        setShowModalMadera,
        setShowModalSostenibilidad,
        setShowModalImpacto,
        setShowDetailPet,
        setShowDetailTincion,
        getComentariosPet
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
