import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../../static/images/cerrarModal.png";
import { Context } from "../../context/context";
import rec127 from "../../static/images/Recurso 127.png";
import rec129 from "../../static/images/Recurso 129.png";
import rec132 from "../../static/images/Recurso 132.png";
import descarga from "../../static/images/Recurso_descarga.png";
import location from "../../static/images/Recurso_location.png";
import contacto from "../../static/images/Recurso_contacto.png";

import pintura from "../../static/images/pintura.png";
import iluminacion from "../../static/images/iluminacion.png";
import hogar from "../../static/images/hogar.png";

import web from "../../static/images/Recurso_web.png";
import check from "../../static/images/Recurso_check.png";

import { LazyLoadImage } from "react-lazy-load-image-component";

const CardMaderas1 = () => {
  return (
    <div className="self-center">
      <div className="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-4xl mx-5 p-5 mb-16">
        <div className="flex flex-col justify-certer py-4 px-10">
          <h1 className="">INMUNIZAR</h1>
          <LazyLoadImage src={rec129} className="w-60 self-center" />
          <ol className="max-w-3xl space-y-5 list-none leading-8 text-justify font-raleway mb-8">
            <li>
              <div className="flex flex-row">
                <img src={descarga} className="w-10 h-10 mr-3" />
                <p>
                  <ul>
                    <li>
                      Madera inmunizada procesada en diferentes formas para usos
                      específicos:
                    </li>
                    <li>
                      Maderas Aserradas | Maderas Cilindrada | Madera para
                      Cercos | Postes para Energía
                    </li>
                  </ul>
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <img src={check} className="w-10 h-10 mr-3" />
                <p>
                  <ol>
                    <li className="list-item">
                      <p>- Círculo cerrado para toda la materia prima</p>
                    </li>
                    <li className="list-item">
                      <p>
                        - Tienen una política de NO a la deforestación. Por
                        ejemplo, por un árbol cortado, siembran uno nuevo. Todas
                        nuestra maderas provienen de reforestaciones de Pinos y
                        eucaliptos.
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        - La madera es un material renovable y mientras crece la
                        huella de carbono puede ser incluso negativa
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        - Al aumentarle la vida útil a la madera por más de 20
                        años, estamos evitando que nuevos árboles se corten,
                        disminuyendo así la presión sobre el bosque.
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
                <p>Transversal 49 # 35 - 250, Rionegro, Antioquia, Colombia</p>
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <img src={contacto} className="w-10 h-10 mr-3" />
                <ul>
                  <li>+57 4 322 72 70 Opción 1</li>
                  <li>ventasrionegro@inmunizar.com.co</li>
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
                      href="https://inmunizar.com.co"
                      target="_blank"
                      className="bg-naranja px-2 py-1 rounded-lg hover:bg-verde-claro hover:text-white"
                    >
                      click aquí
                    </a>
                  </li>
                  <li>
                    Y para saber más sobre su impacto de{" "}
                    <a
                      href="https://inmunizar.com.co/sitio/reforestacion/"
                      target="_blank"
                      className="bg-naranja px-2 py-1 rounded-lg hover:bg-verde-claro hover:text-white"
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

const CardMaderas2 = () => {
  return (
    <div className="self-center">
      <div className="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-4xl mx-5 p-5 mb-16">
        <div className="flex flex-col justify-certer py-4 px-10">
          <h1 className="">DURATEX</h1>
          <LazyLoadImage src={rec132} className="w-60 self-center" />
          <ol className="max-w-3xl space-y-5 list-none leading-8 text-justify font-raleway mb-8">
            <li>
              <div className="flex flex-row">
                <img src={descarga} className="w-10 h-10 mr-3" />

                <ul>
                  <li>
                    Paneles y tableros de maderas y materiales alternativos a la
                    madera
                  </li>
                  <li>
                    45 diseños diferentes para ambientar los diferentes diseños
                    que se desea crear
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
                        - Comprometidos con los clientes, procesos, productos y
                        servicios. Protegiendo el medio ambiente, cumpliendo con
                        los requerimientos del mercado y obteniendo un
                        rendimiento razonable.
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        - Diferentes certificaciones:
                        <ul className="list-inside list-disc">
                          <li>
                            FSC (miles de hectáreas de plantaciones forestales)
                          </li>
                          <li>
                            Compensación forestal (compensación de emisiones de
                            gases de efecto invernadero)
                          </li>
                          <li>
                            GPTW (alta confianza y culturas de alto rendimiento
                            en el lugar de trabajo, gracias a la satisfacción al
                            cliente y al compromiso con los empleados)
                          </li>
                          <li>Varios certificados ICONTEC.</li>
                        </ul>
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
                  Calle 16 # 55 - 129, Centro Comercial de Moda Outlet, piso 5,
                  Medellín
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <img src={contacto} className="w-10 h-10 mr-3" />
                <p>Visitar sitio web para contactar a la empresa</p>
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <img src={web} className="w-10 h-10 mr-3" />
                <ul>
                  <li>
                    Para más sobre la empresa de{" "}
                    <a
                      href="https://duratex.com.co/"
                      target="_blank"
                      className="bg-naranja px-2 py-1 rounded-lg hover:bg-verde-claro hover:text-white"
                    >
                      click aquí
                    </a>
                  </li>
                  <li>
                    Y para saber más sobre su impacto de{" "}
                    <a
                      href="https://duratex.com.co/certificaciones/"
                      target="_blank"
                      className="bg-naranja px-2 py-1 rounded-lg hover:bg-verde-claro hover:text-white"
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

export default function ModalMaderas() {
  const {
    showDicMaderas,
    salir,
    navigateToHogar,
    navigateToIluminacion,
    navigateToMaderas,
    navigateToPinturas,
  } = useContext(Context);

  const handleClose = () => {
    salir();
  };

  return (
    <>
      <Modal
        open={showDicMaderas}
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
                <LazyLoadImage src={rec127} className="w-65 md:w-80" />
              </div>
              <CardMaderas1 />
              <CardMaderas2 />
              <div className="flex flex-row justify-center mb-10">
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToPinturas}
                >
                  <LazyLoadImage src={pintura} />
                </button>
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToIluminacion}
                >
                  <LazyLoadImage src={iluminacion} />
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