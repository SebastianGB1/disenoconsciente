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

  //Directorio Reinaldo
  const [showDicTelas, setShowDicTelas] = useState(false);
  const [showDicFibras, setShowDicFibras] = useState(false);
  const [showDicTransformacion, setShowDicTransformacion] = useState(false);
  const [showDicInsumos, setShowDicInsumos] = useState(false);

  //Directorio Rebecca
  const [showMaderasRebecca, setShowMaderasRebecca] = useState(false);
  const [showDicVarios, setShowDicVarios] = useState(false);
  const [showPinturasRebecca, setShowPinturasRebecca] = useState(false);
  const [showDicEmpaques, setShowDicEmpaques] = useState(false);

  //Directorio Regina
  const [showLitografia, setShowLitografia] = useState(false);
  const [showPapeles, setShowPapeles] = useState(false);
  const [showEmpaquesRegina, setShowEmpaquesRegina] = useState(false);
  const [showMarca, setShowMarca] = useState(false);

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

  //Renato
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

  //Reinaldo
  const navigateToTelas = () => {
    setShowDicTelas(true);
    setShowDicFibras(false);
    setShowDicTransformacion(false);
    setShowDicInsumos(false);
  };

  const navigateToFibras = () => {
    setShowDicTelas(false);
    setShowDicFibras(true);
    setShowDicTransformacion(false);
    setShowDicInsumos(false);
  };

  const navigateToTransformacion = () => {
    setShowDicTelas(false);
    setShowDicFibras(false);
    setShowDicTransformacion(true);
    setShowDicInsumos(false);
  };

  const navigateToInsumos = () => {
    setShowDicTelas(false);
    setShowDicFibras(false);
    setShowDicTransformacion(false);
    setShowDicInsumos(true);
  };

  //Rebecca
  const navigateToMaderasRebecca = () => {
    setShowMaderasRebecca(true);
    setShowDicVarios(false);
    setShowPinturasRebecca(false);
    setShowDicEmpaques(false);
  };
  const navigateToVarios = () => {
    setShowMaderasRebecca(false);
    setShowDicVarios(true);
    setShowPinturasRebecca(false);
    setShowDicEmpaques(false);
  };
  const navigateToPinturasRebecca = () => {
    setShowMaderasRebecca(false);
    setShowDicVarios(false);
    setShowPinturasRebecca(true);
    setShowDicEmpaques(false);
  };
  const navigateToEmpaques = () => {
    setShowMaderasRebecca(false);
    setShowDicVarios(false);
    setShowPinturasRebecca(false);
    setShowDicEmpaques(true);
  };

  //Regina
  const navigateToLitografia = () => {
    setShowLitografia(true)
    setShowPapeles(false);
    setShowEmpaquesRegina(false);
    setShowMarca(false);
  };
  const navigateToPapeles = () => {
    setShowLitografia(false)
    setShowPapeles(true);
    setShowEmpaquesRegina(false);
    setShowMarca(false);
  };
  const navigateToEmpaquesRegina = () => {
    setShowLitografia(false)
    setShowPapeles(false);
    setShowEmpaquesRegina(true);
    setShowMarca(false);
  };
  const navigateToMarca = () => {
    setShowLitografia(false)
    setShowPapeles(false);
    setShowEmpaquesRegina(false);
    setShowMarca(true);
  };

  const salir = () => {
    setShowDicHogar(false);
    setShowDicIluminacion(false);
    setShowDicMaderas(false);
    setShowDicPinturas(false);
    setShowDicTelas(false);
    setShowDicFibras(false);
    setShowDicTransformacion(false);
    setShowDicInsumos(false);
    setShowMaderasRebecca(false);
    setShowDicVarios(false);
    setShowPinturasRebecca(false);
    setShowDicEmpaques(false);
    setShowLitografia(false)
    setShowPapeles(false);
    setShowEmpaquesRegina(false);
    setShowMarca(false);
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
        showDicTelas,
        showDicFibras,
        showDicTransformacion,
        showDicInsumos,
        showMaderasRebecca,
        showDicVarios,
        showPinturasRebecca,
        showDicEmpaques,
        showLitografia,
        showPapeles,
        showEmpaquesRegina,
        showMarca,
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
        setShowDicTelas,
        setShowDicFibras,
        setShowDicTransformacion,
        setShowDicInsumos,
        navigateToTelas,
        navigateToFibras,
        navigateToTransformacion,
        navigateToInsumos,
        setShowMaderasRebecca,
        setShowDicVarios,
        setShowPinturasRebecca,
        setShowDicEmpaques,
        navigateToMaderasRebecca,
        navigateToVarios,
        navigateToPinturasRebecca,
        navigateToEmpaques,
        setShowLitografia,
        setShowPapeles,
        setShowEmpaquesRegina,
        setShowMarca,
        navigateToLitografia,
        navigateToPapeles,
        navigateToEmpaquesRegina,
        navigateToMarca
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
