import { useContext, useState } from "react";
import renato from "../static/images/directorio_renato.png";
import reinaldo from "../static/images/directorio_reinaldo.png";
import rebecca from "../static/images/directorio_rebecca.png";
import regina from "../static/images/directorio_regina.png";
import ModalMaderas from "../components/directorio/ModalMaderas";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ModalPinturas from "../components/directorio/ModalPinturas";
import ModalIluminacion from "../components/directorio/ModalIluminacion";
import ModalHogar from "../components/directorio/ModalHogar";

import Renato from "../components/directorio/Renato";
import Reinaldo from "../components/directorio/Reinaldo";
import ModalTelas from "../components/directorio/ModalTelas";
import ModalFibras from "../components/directorio/ModalFibras";
import ModalTranformacion from "../components/directorio/ModalTransformacion";
import ModalInsumos from "../components/directorio/ModalInsumos";

const Inicio = ({ cambio }) => {
  const estiloLazyLoadImage = "w-64 my-3 sm:w-72 md:w-80 lg:w-96 hover:p-5";
  const renatoClick = () => {
    cambio("renato");
  };
  const reinaldoClick = () => {
    cambio("reinaldo");
  };
  const rebeccaClick = () => {
    cambio("rebecca");
  };
  const reginaClick = () => {
    cambio("regina");
  };
  return (
    <>
      <p className="font-raleway text-left z-20">
        Elige los proveedores del área de diseño que deseas consultar
      </p>
      <div className="flex flex-col justify-between mt-10 z-20 relative items-center md:flex-row">
        <button onClick={renatoClick} className={estiloLazyLoadImage}>
          <LazyLoadImage src={renato} alt="Renato" />
        </button>
        <button onClick={reinaldoClick} className={estiloLazyLoadImage}>
          <LazyLoadImage src={reinaldo} alt="Renato" />
        </button>
        <button onClick={rebeccaClick} className={estiloLazyLoadImage}>
          <LazyLoadImage src={rebecca} alt="Renato" />
        </button>
        <button onClick={reginaClick} className={estiloLazyLoadImage}>
          <LazyLoadImage src={regina} alt="Renato" />
        </button>
      </div>
    </>
  );
};

function Directorio() {
  const [seleccion, setSeleccion] = useState("");
  const irAInicio = () => {
    setSeleccion("");
  };

  return (
    <div className="mx-16 md:mx-32">
      {seleccion == "" ? (
        <Inicio cambio={setSeleccion} />
      ) : seleccion == "renato" ? (
        <Renato handleClose={irAInicio} />
      ) : seleccion == "reinaldo" ? (
        <Reinaldo handleClose={irAInicio} />
      ) : null}
      {/* Renato */}
      <ModalMaderas />
      <ModalPinturas />
      <ModalIluminacion />
      <ModalHogar />
      {/* Reinaldo */}
      <ModalTelas />
      <ModalFibras/>
      <ModalTranformacion/>
      <ModalInsumos/>
    </div>
  );
}

export default Directorio;
