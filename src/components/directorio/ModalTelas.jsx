import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../../static/images/cerrarModal.png";
import { Context } from "../../context/context";
import rec186 from "../../static/images/Recurso 186.png";
import rec193 from "../../static/images/Recurso 193.png";
import rec196 from "../../static/images/Recurso 196.png";
import rec198 from "../../static/images/Recurso 198.png";

import descarga from "../../static/images/Recurso_descarga.png";
import location from "../../static/images/Recurso_location.png";
import contacto from "../../static/images/Recurso_contacto.png";

import fibras from "../../static/images/fibras.png";
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
          <h1>BIOCUEROS</h1>
          <LazyLoadImage src={rec193} className="w-60 self-center" />
          <ol className="max-w-3xl space-y-5 list-none leading-8 text-justify font-raleway mb-8">
            <li>
              <div className="flex flex-row">
                <img src={descarga} className="w-10 h-10 mr-3" />
                <ul>
                  <li>
                  Cuero libre de cromo
                  </li>
                  <li>
                  Empresa familiar fundada en el año 2014. Nace desde el deseo y convicción de hacer posible una curtiembre sostenible en Colombia
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
                        - Cuero libre de sales de cromo en su proceso de curtición usando un 20% menos de agua comparado con el proceso tradicional de curtido de cuero
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        - Tienen su propia planta de producción, y también tienen planta de tratamiento de aguas residuales
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        - Se biodegradan de 3 a 5 años en condiciones de relleno sanitario
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        - Cuentan con excelente resistencia a la tracción, anclajes, flexión y frotes
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
                Contactarse con ellos para información de ubicación
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <img src={contacto} className="w-10 h-10 mr-3" />
                <ul>
                  <li>+57 300 204 8779</li>
                  <li>ventas@biocueros.com / servicioalcliente@biocueros.com</li>
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
                      href="https://biocueros.com/"
                      target="_blank"
                      className="bg-verde-claro px-2 py-1 rounded-lg hover:bg-naranja hover:text-white"
                    >
                      click aquí
                    </a>
                  </li>
                  <li>
                    Y para saber más sobre su impacto de{" "}
                    <a
                      href="https://biocueros.com/sostenibilidad/ "
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
            <h1>FABRICATO</h1>
            <LazyLoadImage src={rec196} className="w-60 self-center mb-5" />
            <ol className="max-w-3xl space-y-5 list-none leading-8 text-justify font-raleway mb-8">
              <li>
                <div className="flex flex-row">
                  <img src={descarga} className="w-10 h-10 mr-3" />
                  <ul>
                    <li>
                    Empresa dedicada a la fabricación y comercialización de productos textiles
                    </li>
                    <li>
                    Denim, driles, popelinas, jersey, piqué, burdas, interlock, rib, no tejidos. Línea vestuario y línea institucional (Salud, Industria, Comercial/Administrativo)
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
                          - Decenas de certificaciones avalando una producción sostenible y un aporte a la calidad ambiental, y a la economía responsable del territorio
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - 49% de la energía consumida proviene de fuentes renovables
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Todos sus vehículos de carga interna son eléctricos
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Todas las bolsas utilizadas para el empaque de los productos son provenientes de material recuperado
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
                  Carrera 50 # 38 - 320, Bello, Antioquia, Colombia
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <img src={contacto} className="w-10 h-10 mr-3" />
                  <ul>
                    <li>+57 (604) 448 35 00 / +57 (604) 501 17 51</li>
                    <li>contactenos@fabricato.com</li>
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
                        href="https://site.fabricato.com/"
                        target="_blank"
                        className="bg-verde-claro px-2 py-1 rounded-lg hover:bg-naranja hover:text-white"
                      >
                        click aquí
                      </a>
                    </li>
                    <li>
                      Y para saber más sobre su impacto de{" "}
                      <a
                        href="https://site.fabricato.com/sostenibilidad/"
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

  const Card3 = () => {
    return (
      <div className="self-center">
        <div className="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-4xl mx-5 p-5 mb-16">
          <div className="flex flex-col justify-certer py-4 px-10">
            <h1>LAFAYETTE</h1>
            <LazyLoadImage src={rec198} className="w-60 self-center mb-5" />
            <ol className="max-w-3xl space-y-5 list-none leading-8 text-justify font-raleway mb-8">
              <li>
                <div className="flex flex-row">
                  <img src={descarga} className="w-10 h-10 mr-3" />
                  <ul>
                    <li>
                    Telas para línea fashion, deco, sports, uniforme, digitex, entre otras
                    </li>
                    <li>
                    Compañía colombiana con más de 80 años de trayectoria en la industria textil, la cual ofrece soluciones superiores desde la innovación, vanguardia y tecnología
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
                          - Cuentan con informe de sostenibilidad, fundación Lafayette y política ambiental
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Elabora su propio hilo reciclado a partir de botellas PET
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Recogen un promedio diario de 800 m3 de aguas lluvia para incluir en el proceso de producción
                        </p>
                      </li>
                      <li className="list-item">
                        <p>
                          - Utilizan quemadores inteligentes que demandan un menor nivel de gas natural y que emiten niveles de óxido de nitrógeno, 44% por debajo de la norma ambiental
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
                  Carrera 52 # 14 – 30, Centro Empresarial Olaya Herrera, local 155
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <img src={contacto} className="w-10 h-10 mr-3" />
                  <ul>
                    <li>+57 (601) 294 8880 / +57 310 315 7004</li>
                    <li>servicioalcliente@lafayette.com</li>
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
                        href="https://lafayette.com/"
                        target="_blank"
                        className="bg-verde-claro px-2 py-1 rounded-lg hover:bg-naranja hover:text-white"
                      >
                        click aquí
                      </a>
                    </li>
                    <li>
                      Y para saber más sobre su impacto de{" "}
                      <a
                        href="https://lafayette.com/sostenibilidad/"
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

export default function ModalTelas() {
  const {
    showDicTelas,
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
        open={showDicTelas}
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
                <LazyLoadImage src={rec186} className="w-65 md:w-80" />
              </div>              
              <Card1 />
              <Card2/>
              <Card3/>
              <div className="flex flex-row justify-center mb-10">
                <button
                  className="w-20 h-20 md:w-40 md:h-40 mx-5 hover:p-3"
                  onClick={navigateToFibras}
                >
                  <LazyLoadImage src={fibras} />
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