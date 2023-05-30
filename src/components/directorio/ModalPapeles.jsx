import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../../static/images/cerrarModal.png";
import { Context } from "../../context/context";

import rec330 from "../../static/images/Recurso 330.png";
import rec323 from "../../static/images/Recurso 323.png";

import descarga from "../../static/images/Recurso_descarga.png";
import location from "../../static/images/Recurso_location.png";
import contacto from "../../static/images/Recurso_contacto.png";

import rec309 from "../../static/images/Recurso 309.png";
import rec311 from "../../static/images/Recurso 311.png";
import rec312 from "../../static/images/Recurso 312.png";


import web from "../../static/images/Recurso_web.png";
import check from "../../static/images/Recurso_check.png";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Card1 = () => {
  return (
    <div className="self-center">
      <div className="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-4xl mx-5 p-5 mb-16">
        <div className="flex flex-col justify-certer py-4 px-10">
          <h1 className="">DISPAPELES</h1>
          <LazyLoadImage src={rec330} className="w-60 self-center mb-5" />
          <ol className="max-w-3xl space-y-5 list-none leading-8 text-justify font-raleway mb-8">
            <li>
              <div className="flex flex-row">
                <img src={descarga} className="w-10 h-10 mr-3" />
                <ul>
                  <li>Papeles y cartulinas | Tecnología e industria gráfica</li>
                  <li>
                  Industria con más de 50 años brindando soluciones integrales para la industria gráfica y el mercado institucional y empresarial
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
                        - Tienen diferentes programas de manejo ambiental como gestión integral de residuos sólidos, ahorro y eficiencia de energía, y el uso eficiente de ahorro de agua 
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        - También manejan políticas para la gestión integral y salud en el trabajo
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        - Además de hablar abiertamente sobre la relación papeles – medio ambiente
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        - Productos fabricados con recursos renovables, como el bagazo de caña de azúcar, fibra vegetal y tecnologías que fomentan el uso eficiente de los recursos como el papel, tintas y energía
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
                <p>Bodega: Carrera 51 # 14 - 229, Av. Guayabal, Medellín, Antioaquia, Colombia</p>
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <img src={contacto} className="w-10 h-10 mr-3" />
                <ul>
                  <li>+57 (604) 444 6011</li>
                  <li>bodega@dispapeles.com  </li>
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
                      href="https://dispapeles.com/"
                      target="_blank"
                      className="bg-azul px-2 py-1 rounded-lg hover:bg-naranja hover:text-white"
                    >
                      click aquí
                    </a>
                  </li>
                  <li>
                    Y para saber más sobre su impacto de{" "}
                    <a
                      href="https://dispapeles.com/responsabilidad-social-y-ambiental/"
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

export default function ModalPapeles() {
  const {
    showPapeles,
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
        open={showPapeles}
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
                <LazyLoadImage src={rec323} className="w-65 md:w-80" />
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
