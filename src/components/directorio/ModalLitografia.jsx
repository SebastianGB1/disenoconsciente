import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../../static/images/cerrarModal.png";
import { Context } from "../../context/context";
import rec315 from "../../static/images/Recurso 315.png";

import rec310 from "../../static/images/Recurso 310.png";
import rec311 from "../../static/images/Recurso 311.png";
import rec312 from "../../static/images/Recurso 312.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

export default function ModalLitografia() {
    const {
        showLitografia,
        salir,
        navigateToPapeles,
        navigateToEmpaquesRegina,
        navigateToMarca
      } = useContext(Context);

  const handleClose = () => {
    salir();
  };
  const nav = useNavigate();

  const navigateToContact = () => nav("/contacto");

  return (
    <>
      <Modal
        open={showLitografia}
        onClose={handleClose}
        className="overflow-auto py-10"
      >
        <>
          {/* <div className="my-1 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 "> */}
          <div className="relative mx-auto max-w-medio sm:max-w-2xl md:max-w-3xl lg:max-w-6xl">
            {/*content*/}
            <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-blanco outline-none focus:outline-none">
              {/*header*/}
              <button onClick={handleClose}>
                <LazyLoadImage
                  src={cerrar}
                  alt="Cerrar"
                  className="w-6 mt-6 mr-6 float-right"
                />
              </button>
              <div className="flex justify-center p-5 ">
                <LazyLoadImage src={rec315} className="w-65 md:w-80" />
              </div>
              <p className="self-center m-5">
                Para hacer parte del equipo RE, de{" "}
                <button
                  className="self-start bg-rosado font-raleway p-1 rounded-lg hover:bg-verde-claro hover:text-white"
                  onClick={navigateToContact}
                >
                  click aquí
                </button>
              </p>
              <div className="flex flex-row justify-center mb-10">
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToPapeles}
                >
                  <LazyLoadImage src={rec310} />
                </button>
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToEmpaquesRegina}
                >
                  <LazyLoadImage src={rec311} />
                </button>
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToMarca}
                >
                  <LazyLoadImage src={rec312} />
                </button>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
}
