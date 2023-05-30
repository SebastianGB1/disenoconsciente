import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../../static/images/cerrarModal.png";
import { Context } from "../../context/context";
import rec245 from "../../static/images/Recurso 245.png";
import rec352 from "../../static/images/Recurso 352.png";


import descarga from "../../static/images/Recurso_descarga.png";
import location from "../../static/images/Recurso_location.png";
import contacto from "../../static/images/Recurso_contacto.png";

import rec309 from "../../static/images/Recurso 309.png";
import rec310 from "../../static/images/Recurso 310.png";
import rec311 from "../../static/images/Recurso 311.png";

import web from "../../static/images/Recurso_web.png";
import check from "../../static/images/Recurso_check.png";

import { LazyLoadImage } from "react-lazy-load-image-component";



const Card1 = () => {
    return (
      <div className="self-center">
        <div className="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-4xl mx-5 p-5 mb-16">
          <div className="flex flex-col justify-certer py-4 px-10">
            <h1 className="">CREATUM</h1>
            <LazyLoadImage src={rec245} className="w-60 self-center mb-5" />
            <ol className="max-w-3xl space-y-5 list-none leading-8 text-justify font-raleway mb-8">
              <li>
                <div className="flex flex-row">
                  <img src={descarga} className="w-10 h-10 mr-3" />
                  <ul>
                    <li>
                    Empresa dedicada al diseño y manufactura aplicados a los sectores de la confección, marroquinería, calzados y publicitarios
                    </li>
                    <li>
                    Marquillas | etiquetas | herrajes | suelas de caucho | apliques | accesorios en general
                    </li>
                    <li>
                    Hay que tener en cuenta que solo manejan grandes volúmenes de pedidos 
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
                          - 1100 metros cúbicos de agua se recirculan mensualmente
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Sistema de extracción y lavado de gases en la planta galvánica
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Tienen algunos cauchos que vienen del coco, y otros que son reciclados de todas las producciones que hacen
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Los apliques de PVC, todos son certificados y libres de Ftalatos
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
                  Calle 78D sur # 47G - 16, Sabaneta, Antioquia, Colombia
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <img src={contacto} className="w-10 h-10 mr-3" />
                  <ul>
                    <li>+57 (604) 448 2299</li>
                    <li>servicioalclientecreatum@creatum.com.co </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <img src={web} className="w-10 h-10 mr-3" />
                  <ul>
                    <li>
                      Para más sobre la empresa de{" "}
                      <a
                        href="https://www.creatum.com.co/"
                        target="_blank"
                        className="bg-azul px-2 py-1 rounded-lg hover:bg-naranja hover:text-white"
                      >
                        click aquí
                      </a>
                    </li>
                    <li>
                      Y para saber más sobre su impacto de{" "}
                      <a
                        href="https://www.creatum.com.co/sustentables/"
                        target="_blank"
                        className="bg-azul px-2 py-1 rounded-lg hover:bg-naranja hover:text-white"
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


export default function ModalMarca() {
  const {
    showMarca,
    salir,
    navigateToLitografia,
    navigateToPapeles,
    navigateToEmpaquesRegina,
    navigateToMarca
  } = useContext(Context);

  const handleClose = () => {
    salir();
  };

  return (
    <>
      <Modal
        open={showMarca}
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
                <LazyLoadImage src={rec352} className="w-65 md:w-80" />
              </div>              
              <Card1 />
              <div className="flex flex-row justify-center mb-10">
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToLitografia}
                >
                  <LazyLoadImage src={rec309} />
                </button>
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
              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
}