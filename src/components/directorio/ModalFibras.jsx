import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../../static/images/cerrarModal.png";
import { Context } from "../../context/context";

import rec168 from "../../static/images/Recurso 168.png";
import rec216 from "../../static/images/Recurso 216.png";
import rec206 from "../../static/images/Recurso 206.png";

import descarga from "../../static/images/Recurso_descarga.png";
import location from "../../static/images/Recurso_location.png";
import contacto from "../../static/images/Recurso_contacto.png";

import tela from "../../static/images/tela.png";
import transformacion from "../../static/images/transformacion.png";
import insumos from "../../static/images/insumos.png";


import web from "../../static/images/Recurso_web.png";
import check from "../../static/images/Recurso_check.png";

import { LazyLoadImage } from "react-lazy-load-image-component";



const Card1 = () => {
    return (
      <div className="self-center">
        <div className="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-4xl mx-5 p-5 mb-16">
          <div className="flex flex-col justify-certer py-4 px-10">
            <h1 className="">NATÚH</h1>
            <LazyLoadImage src={rec168} className="w-60 self-center" />
            <ol className="max-w-3xl space-y-5 list-none leading-8 text-justify font-raleway mb-8">
              <li>
                <div className="flex flex-row">
                  <img src={descarga} className="w-10 h-10 mr-3" />
                  <ul>
                    <li>
                    Telas hechas de fibra 100% sostenibles
                    </li>
                    <li>
                    Reusan sobrantes de confección que combinan con botellas PET posconsumo, dando vida a nuevos textiles que completan el ciclo de producción sostenible
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
                          - Generan más de 20 empleos directos y más de 60 indirectos
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Trabajan con las fundaciones Solidaridad por Colombia y La Casa de la Mujer, que benefician con empleo formal a madres cabeza de hogar y familias vulnerables de Medellín
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - La madera es un material renovable y mientras crece la huella de carbono puede ser incluso negativa
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Más de 30 toneladas de botellas PET y 90 toneladas de sobrantes de confección reciclados
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
                  Calle 1AA # 66 - 62, Medellín, Colombia
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <img src={contacto} className="w-10 h-10 mr-3" />
                  <ul>
                    <li>+57 314 739 9180 / +57 313 645 0301</li>
                    <li>ventas@ecohilandes.com</li>
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
                        href="https://natuh.co/"
                        target="_blank"
                        className="bg-verde-claro px-2 py-1 rounded-lg hover:bg-naranja hover:text-white"
                      >
                        click aquí
                      </a>
                    </li>
                    <li>
                      Y para saber más sobre su impacto de{" "}
                      <a
                        href="https://natuh.co/collections/telas-natuh"
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

const Card2 = () => {
    return (
      <div className="self-center">
        <div className="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-4xl mx-5 p-5 mb-16">
          <div className="flex flex-col justify-certer py-4 px-10">
            <h1>CASA CANNA</h1>
            <LazyLoadImage src={rec216} className="w-60 self-center mb-5" />
            <ol className="max-w-3xl space-y-5 list-none leading-8 text-justify font-raleway mb-8">
              <li>
                <div className="flex flex-row">
                  <img src={descarga} className="w-10 h-10 mr-3" />
                  <ul>
                    <li>
                    Telas hechas de fibra de cáñamo y blends con otras fibras naturales como el algodón orgánico o bamboo
                    </li>
                    <li>
                    Se han aliado con productores de fibras y telas sostenibles de todo el mundo para ofrecer una amplia gama de fibras y telas de cáñamo a los mercados éticos latinoamericanos que están en constante crecimiento
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
                          - Requieren poca agua
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - La fibra crece densamente, rinden mucha más fibra por hectárea que otras plantas textiles. El cáñamo es la fibra más sostenible del mercado
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Son 100% naturales, biodegradables y reciclables.
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Tela gentil con la tierra, no requieren pesticidas ni herbicidas químicos. Devuelve entre el 60% y el 70% de los nutrientes que toma de la tierra
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Tienen múltiples beneficios y son extremadamente amigables con el medio ambiente durante todo el proceso, desde el cultivo de la materia prima hasta la fabricación del producto final.
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
                  Carrera 4 # 7 - 115, Oficina 203, Cartagena, Colombia
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <img src={contacto} className="w-10 h-10 mr-3" />
                  <ul>
                    <li>Roberto Sanabria</li>
                    <li>+57 320 549 640</li>
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
                        href="https://www.cannacorpsas.com/"
                        target="_blank"
                        className="bg-verde-claro px-2 py-1 rounded-lg hover:bg-naranja hover:text-white"
                      >
                        click aquí
                      </a>
                    </li>
                    <li>
                      Y para saber más sobre su impacto de{" "}
                      <a
                        href="https://www.cannacorpsas.com/about-us"
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


export default function ModalFibras() {
  const {
    showDicFibras,
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
        open={showDicFibras}
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
                <LazyLoadImage src={rec206} className="w-65 md:w-80" />
              </div>              
              <Card1 />
              <Card2/>
              <div className="flex flex-row justify-center mb-10">
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToTelas}
                >
                  <LazyLoadImage src={tela} />
                </button>
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToTransformacion}
                >
                  <LazyLoadImage src={transformacion} />
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