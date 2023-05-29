import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../../static/images/cerrarModal.png";
import { Context } from "../../context/context";
import rec152 from "../../static/images/Recurso 152.png";

import pintura from "../../static/images/pintura.png";
import iluminacion from "../../static/images/iluminacion.png";
import hogar from "../../static/images/hogar.png";
import madera from "../../static/images/madera.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

export default function ModalIluminacion() {
  const {
    showDicIluminacion,
    salir,
    navigateToHogar,
    navigateToIluminacion,
    navigateToMaderas,
    navigateToPinturas,
  } = useContext(Context);

  const handleClose = () => {
    salir();
  };
  const nav = useNavigate();

  const navigateToContact = () => nav("/contacto");

  return (
    <>
      <Modal
        open={showDicIluminacion}
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
                <LazyLoadImage src={rec152} className="w-65 md:w-80" />
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
                  onClick={navigateToMaderas}
                >
                  <LazyLoadImage src={madera} />
                </button>
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToPinturas}
                >
                  <LazyLoadImage src={pintura} />
                </button>
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToHogar}
                >
                  <LazyLoadImage src={hogar} />
                </button>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
}
