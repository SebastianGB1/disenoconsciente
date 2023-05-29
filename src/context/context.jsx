import { createContext, useState } from "react";
import { supabase } from "../supabase/client";

export const Context = createContext();

export function ContextProvider(props) {
  const [showModal, setShowModal] = useState(false);

  const [showModalHome, setShowModalHome] = useState(false);
  const [showModalPet, setShowModalPet] = useState(false);
  const [showModalMadera, setShowModalMadera] = useState(false);
  const [showModalSostenibilidad, setShowModalSostenibilidad] = useState(false);
  const [showModalImpacto, setShowModalImpacto] = useState(false);
  const [showDetailPet, setShowDetailPet] = useState(false);
  const [showDetailTincion, setShowDetailTincion] = useState(false);

  //Directorio Renato
  const [showDicMaderas, setShowDicMaderas] = useState(false);
  const [showDicPinturas, setShowDicPinturas] = useState(false);
  const [showDicIluminacion, setShowDicIluminacion] = useState(false);
  const [showDicHogar, setShowDicHogar] = useState(false);

  const [comentariosPet, setComentariosPet] = useState([]);
  const [comentariosTincion, setComentariosTincion] = useState([]);

  const getComentariosPet = async () => {
    const result = await supabase.from("comentarios_pet").select("*");
    setComentariosPet(result.data);
  };

  const getComentariosTincion = async () => {
    const result = await supabase.from("comentarios_tincion").select("*");
    setComentariosTincion(result.data);
  };

  const navigateToPinturas = () => {
    setShowDicHogar(false);
    setShowDicIluminacion(false);
    setShowDicMaderas(false);
    setShowDicPinturas(true);
  };

  const navigateToIluminacion = () => {
    setShowDicHogar(false);
    setShowDicIluminacion(true);
    setShowDicMaderas(false);
    setShowDicPinturas(false);
  };

  const navigateToHogar = () => {
    setShowDicHogar(true);
    setShowDicIluminacion(false);
    setShowDicMaderas(false);
    setShowDicPinturas(false);
  };

  const navigateToMaderas = () => {
    setShowDicHogar(false);
    setShowDicIluminacion(false);
    setShowDicMaderas(true);
    setShowDicPinturas(false);
  };

  const salir = () => {
    setShowDicHogar(false);
    setShowDicIluminacion(false);
    setShowDicMaderas(false);
    setShowDicPinturas(false);
  };

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
        showDicMaderas,
        showDicPinturas,
        showDicIluminacion,
        showDicHogar,
        setShowModal,
        setShowModalHome,
        setShowModalPet,
        setShowModalMadera,
        setShowModalSostenibilidad,
        setShowModalImpacto,
        setShowDetailPet,
        setShowDetailTincion,
        getComentariosPet,
        getComentariosTincion,
        setShowDicMaderas,
        setShowDicPinturas,
        setShowDicIluminacion,
        setShowDicHogar,
        navigateToMaderas,
        navigateToHogar,
        navigateToIluminacion,
        navigateToPinturas,
        salir,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
