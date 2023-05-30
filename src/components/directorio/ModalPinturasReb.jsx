import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../../static/images/cerrarModal.png";
import { Context } from "../../context/context";
import rec286 from "../../static/images/Recurso 286.png";

import rec256 from "../../static/images/Recurso 256.png";
import rec258 from "../../static/images/Recurso 258.png";
import hogar from "../../static/images/hogar.png";
import madera from "../../static/images/Recurso 255.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

export default function ModalPinturas() {
    const {
        showPinturasRebecca,
        salir,
        navigateToMaderasRebecca,
        navigateToVarios,
        navigateToPinturasRebecca,
        navigateToEmpaques,
      } = useContext(Context);

  const handleClose = () => {
    salir();
  };
  const nav = useNavigate();

  const navigateToContact = () => nav("/contacto");

  return (
    <>
      <Modal
        open={showPinturasRebecca}
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
                <LazyLoadImage src={rec286} className="w-65 md:w-80" />
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
                  onClick={navigateToMaderasRebecca}
                >
                  <LazyLoadImage src={madera} />
                </button>
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToVarios}
                >
                  <LazyLoadImage src={rec256} />
                </button>
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToEmpaques}
                >
                  <LazyLoadImage src={rec258} />
                </button>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
}
