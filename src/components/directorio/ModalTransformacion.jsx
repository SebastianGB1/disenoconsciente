import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../../static/images/cerrarModal.png";
import { Context } from "../../context/context";
import rec230 from "../../static/images/Recurso 230.png";
import rec223 from "../../static/images/Recurso 223.png";


import descarga from "../../static/images/Recurso_descarga.png";
import location from "../../static/images/Recurso_location.png";
import contacto from "../../static/images/Recurso_contacto.png";

import tela from "../../static/images/tela.png";
import fibras from "../../static/images/fibras.png";
import insumos from "../../static/images/insumos.png";


import web from "../../static/images/Recurso_web.png";
import check from "../../static/images/Recurso_check.png";

import { LazyLoadImage } from "react-lazy-load-image-component";



const Card1 = () => {
    return (
      <div className="self-center">
        <div className="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-4xl mx-5 p-5 mb-16">
          <div className="flex flex-col justify-certer py-4 px-10">
            <h1 className="">ARTEXTIL</h1>
            <LazyLoadImage src={rec230} className="w-60 self-center mb-5" />
            <ol className="max-w-3xl space-y-5 list-none leading-8 text-justify font-raleway mb-8">
              <li>
                <div className="flex flex-row">
                  <img src={descarga} className="w-10 h-10 mr-3" />
                  <ul>
                    <li>
                    Empresa dedicada a la transformación textil
                    </li>
                    <li>
                    Producto: Textiles
                    </li>
                    <li>
                    Servicio: Estampación, tintorería, acabados 
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <img src={check} className="w-10 h-10 mr-3" />
                  <p>
                    <ol>
                      <li className="list-item">
                        <p>
                          - Aire: Chimeneas, combustible de gas y carbón (en las claderas para generar vapor). Tecnología para controlar las emisiones
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Piso: Seguimiento de todos los residuos
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Agua: Recirculación de aguas para todo el proceso productivo, por medio también de aguas residuales
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Tiene varios beneficios para el personal como “Educarte” una universidad de la empresa
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Fundación “Comparte”
                        </p>
                      </li>
                      <li className="list-item">
                        <p>- Y más</p>
                      </li>
                    </ol>
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <img src={location} className="w-10 h-10 mr-3" />
                  <p>
                  Calle 72 # 42 – 26, Capricentro, Itagüí, Antioquia, Colombia
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <img src={contacto} className="w-10 h-10 mr-3" />
                  <p>+57 (604) 473 9590 / +57 310 236 4623</p>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <img src={web} className="w-10 h-10 mr-3" />
                  <ul>
                    <li>
                      Para más sobre la empresa de{" "}
                      <a
                        href="https://www.artextil.com.co/"
                        target="_blank"
                        className="bg-verde-claro px-2 py-1 rounded-lg hover:bg-naranja hover:text-white"
                      >
                        click aquí
                      </a>
                    </li>
                    <li>
                      Y para saber más sobre su impacto de{" "}
                      <a
                        href="https://www.artextil.com.co/ser-mas-consciente"
                        target="_blank"
                        className="bg-verde-claro px-2 py-1 rounded-lg hover:bg-naranja hover:text-white"
                      >
                        click aquí
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  };


export default function ModalTranformacion() {
  const {
    showDicTransformacion,
    salir,
    navigateToTelas,
    navigateToFibras,
    navigateToTransformacion,
    navigateToInsumos
  } = useContext(Context);

  const handleClose = () => {
    salir();
  };

  return (
    <>
      <Modal
        open={showDicTransformacion}
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
                <LazyLoadImage src={rec223} className="w-65 md:w-80" />
              </div>              
              <Card1 />
              <div className="flex flex-row justify-center mb-10">
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToTelas}
                >
                  <LazyLoadImage src={tela} />
                </button>
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToFibras}
                >
                  <LazyLoadImage src={fibras} />
                </button>
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToInsumos}
                >
                  <LazyLoadImage src={insumos} />
                </button>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
}