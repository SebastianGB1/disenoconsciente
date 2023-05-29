import { useContext, useState } from "react";
import renato from "../static/images/directorio_renato.png";
import reinaldo from "../static/images/directorio_reinaldo.png";
import rebecca from "../static/images/directorio_rebecca.png";
import regina from "../static/images/directorio_regina.png";
import cerrar from "../static/images/cerrarModal.png";
import { Context } from "../context/context";
import ModalMaderas from "../components/directorio/ModalMaderas";
import rec117 from "../static/images/Recurso 117.png";
import rec118 from "../static/images/Recurso 118.png";
import rec119 from "../static/images/Recurso 119.png";
import rec120 from "../static/images/Recurso 120.png";
import rec121 from "../static/images/Recurso 121.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Directorio() {
  

  const [seleccion, setSeleccion] = useState("");
  const irAInicio = () => {
    setSeleccion("");
  };

  return (
    <div className="mx-16 md:mx-32">
      {seleccion == "" ? (
        <Inicio setSeleccion={setSeleccion} />
      ) : seleccion == "renato" ? (
        <Renato handleClose={irAInicio} />
      ) : null}
      <ModalMaderas/>
    </div>
  );
}

const Inicio = ({ setSeleccion }) => {
  const estiloImg = "w-64 my-3 sm:w-72 md:w-80 lg:w-96 hover:p-5";
  const renatoClick = () => {
    setSeleccion("renato");
  };
  return (
    <>
      <p className="font-raleway text-left z-20">
        Elige los proveedores del área de diseño que deseas consultar
      </p>
      <div className="flex flex-col justify-between mt-10 z-20 relative items-center md:flex-row">
        <button onClick={renatoClick} className={estiloImg}>
          <img src={renato} alt="Renato" />
        </button>
        <button onClick={() => console.log("renato")} className={estiloImg}>
          <img src={reinaldo} alt="Renato" />
        </button>
        <button onClick={() => console.log("renato")} className={estiloImg}>
          <img src={rebecca} alt="Renato" />
        </button>
        <button onClick={() => console.log("renato")} className={estiloImg}>
          <img src={regina} alt="Renato" />
        </button>
      </div>
    </>
  );
};

const Renato = ({ handleClose }) => {
  const { setShowDicMaderas } = useContext(Context);
  return (
    <>
      <div className="flex flex-col">
        <button onClick={handleClose}>
          <p className="text-left font-raleway">Volver</p>
          {/* <LazyLoadImage src={volver} alt="Volver" className="w-6 mt-6 mr-6 float-right" /> */}
        </button>
        <LazyLoadImage src={rec117} className=" lg:w-96 self-center" />
        <p className="font-raleway my-10 text-le">
          Elige el insumo del cual necesitas buscar proveedores RE
        </p>
        <div className="flex flex-col justify-center z-20 relative items-center md:flex-row">
          <button onClick={()=>setShowDicMaderas(true)}>
            <LazyLoadImage
              src={rec118}
              alt="renato"
              className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
            />
          </button>
          <button>
            <LazyLoadImage
              src={rec119}
              alt="renato"
              className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
            />
          </button>
          <button>
            <LazyLoadImage
              src={rec120}
              alt="renato"
              className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
            />
          </button>
          <button>
            <LazyLoadImage
              src={rec121}
              alt="renato"
              className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Directorio;
