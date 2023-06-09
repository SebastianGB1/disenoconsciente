import {  useState } from "react";
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
import Rebecca from "../components/directorio/Rebecca";
import ModalMaderasReb from "../components/directorio/ModalMaderasReb";
import ModalVarios from "../components/directorio/ModalVarios";
import ModalPinturasReb from "../components/directorio/ModalPinturasReb";
import ModalEmpaques from "../components/directorio/ModalEmpaques";
import Regina from "../components/directorio/Regina";
import ModalLitografia from "../components/directorio/ModalLitografia";
import ModalPapeles from "../components/directorio/ModalPapeles";
import ModalEmpaquesRegina from "../components/directorio/ModalEmpaquesRegina";
import ModalMarca from "../components/directorio/ModalMarca";
import deg_azul from '../static/images/deg_azul.png'
import deg_cafe from '../static/images/deg_cafe.png'

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
      <GradientAzul/>
      <GradienteCafe/>
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
      ) : seleccion == "rebecca" ? (
        <Rebecca handleClose={irAInicio} />
      ) : seleccion == "regina" ? (
        <Regina handleClose={irAInicio}/>
      ) : null}
      {/* Renato */}
      <ModalMaderas />
      <ModalPinturas />
      <ModalIluminacion />
      <ModalHogar />
      {/* Reinaldo */}
      <ModalTelas />
      <ModalFibras />
      <ModalTranformacion />
      <ModalInsumos />
      {/* Rebecca */}
      <ModalMaderasReb />
      <ModalVarios />
      <ModalPinturasReb />
      <ModalEmpaques />
      {/* Regina */}
      <ModalLitografia/>
      <ModalPapeles/>
      <ModalEmpaquesRegina/>
      <ModalMarca/>
    </div>
  );
}

function GradientAzul() {
  return (
    <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-full md:top-10 right-40 z-0 ">
      <LazyLoadImage src={deg_azul} alt="azul" />
    </div>
  );
}

function GradienteCafe() {
  return (
    <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-full md:top-1/3 left-0 z-0 ">
      <LazyLoadImage src={deg_cafe} alt="azul" />
    </div>
  );
}

export default Directorio;
