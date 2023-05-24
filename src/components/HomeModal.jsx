import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from '../static/images/cerrarModal.png'
import { Context } from "../context/context";
import rec16 from '../static/images/recurso_16.png'
import rec17 from '../static/images/recurso_17.png'
import rec18 from '../static/images/recurso_18.png'
import rec19 from '../static/images/recurso_19.png'
import rec20 from '../static/images/recurso_20.png'
import rec21 from '../static/images/recurso_21.png'
import logo from '../static/images/recurso_24.png'
import variaciones2Logo from '../static/images/recurso_26.png'
import variacionesLogo from '../static/images/recurso_25.png'
import ilustraciones from '../static/images/recurso_27.png'
import degradados from '../static/images/recurso_28.png'
import imagenesIA from '../static/images/recurso_29.png'
import estrella from '../static/images/recurso_30.png'

export default function HomeModal() {
  const { showModalHome, setShowModalHome } = useContext(Context);

  const handleClose = () => {
    setShowModalHome(false);
  };
  return (
    <>
      <Modal open={showModalHome} onClose={handleClose}>
        <>
          <div className="my-1 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
            <div className="relative w-auto mx-auto max-w-medio sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-blanco outline-none focus:outline-none">
                {/*header*/}
                <button onClick={handleClose}>
                  <img
                    src={cerrar}
                    alt="Cerrar"
                    className="w-6 mt-6 mr-6 float-right"
                  />
                </button>
                <div className="flex justify-center p-5 ">
                  <h className="text-4xl font-cooper text-verde-oscuro relative z-20 mb-10">
                    Concepto gráfico
                  </h>
                </div>
                <p className="text-3xl font-cooper text-verde-oscuro mb-5 relative self-end mr-10 z-20">
                  Colores
                </p>
                <div className="relative p-6 flex-auto flex flex-row">
                  <div>
                    <p className="text-cafe font-raleway">
                      Colores principales
                    </p>
                    <div className="border-2 border-cafe w-48 md:w-96 lg:w-auto">
                      <div className="flex flex-row w-24 md:w-48 lg:w-1/2">
                        <img
                          src={rec16}
                          alt="#909bb9"
                        />
                        <img
                          src={rec17}
                          alt="#909bb9"
                        />
                      </div>
                      <div className="flex flex-row w-24 md:w-48 lg:w-65">
                        <img
                          src={rec19}
                          alt="#909bb9"
                        />
                        <img
                          src={rec20}
                          alt="#909bb9"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mx-5">
                    <p className="text-cafe font-raleway text-sm sm:text-base ">
                      Colores acento
                    </p>
                    <div className="border-2 border-cafe flex flex-row lg:w-auto lg:h-auto">
                      <div className="flex flex-col w-24 md:w-48 lg:w-65">
                        <img
                          src={rec18}
                          alt="#909bb9"
                        />
                        <img
                          src={rec21}
                          alt="#909bb9"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-3xl font-cooper text-verde-oscuro mb-16 relative self-end mr-10 mt-16 z-20 ">
                Tipografías
                </p>
                <div className="mx-5 mb-16">
                <h3 className="text-cafe font-raleway text-sm sm:text-base ">
                Tipografía principal (Logo)
                    </h3>
                    <h4 className="font-kiona my-10 text-xs md:text-base">
                    ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
                    <p className="float-right">Kiona Regular</p>
                    </h4>
                    <h4 className="font-kiona my-10">
                    abcdefghijklmnñopqrstuvwxyz
                    </h4>
                    <h4 className="font-kiona">1234567890.,-/*-+|</h4>
                </div>

                <div className="m-5 mb-16">
                <h3 className="text-cafe font-raleway text-sm sm:text-base ">
                Tipografía complementaria (Titulares) 
                    </h3>
                    <h4 className="font-cooper my-10 text-xs md:text-base">
                    ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
                    <p className="float-right text-xs md:text-base">Cooper Black</p>
                    </h4>
                    <h4 className="font-cooper my-10 text-xs md:text-base">
                    abcdefghijklmnñopqrstuvwxyz
                    </h4>
                    <h4 className="font-cooper text-xs md:text-base">1234567890.,-/*-+|</h4>
                </div>

                <div className="mx-5 ">
                <h3 className="text-cafe font-raleway text-sm sm:text-base ">
                Tipografía alterna (Textos de corridos y comunicación de la marca)  
                    </h3>
                </div>
                <div className="flex flex-row mx-5 justify-between mb-20">
                    <div className="flex flex-col">
                        <h1 className="font-kiona mt-10 text-xs md:text-base">ABCDEFGHIJKLMNÑOPQRSTUVWXYZ</h1>
                        <h2 className="font-raleway my-10">abcdefghijklmnñopqrstuvwxyz</h2>
                        <h3 className="font-raleway">1234567890.,-/*-+|</h3>
                    </div>
                    <div className="flex flex-col items-end justify-around">
                        <p className="font-raleway font-thin text-xs md:text-base">Raleway Thin</p>
                        <p className="font-raleway font-extralight text-xs md:text-base">Raleway Light</p>
                        <p className="font-raleway text-xs md:text-base">Raleway Regular</p>
                        <p className="font-raleway font-medium text-xs md:text-base">Raleway Medium</p>
                        <p className="font-raleway font-bold text-xs md:text-base">Raleway Bold</p>
                        <p className="font-raleway font-black text-xs md:text-base">Raleway Black</p>
                        <p className="font-raleway italic text-xs md:text-base">Raleway Italic</p>
                    </div>
                </div>
                <p className="text-3xl font-cooper text-verde-oscuro mb-5 relative self-end mr-10 z-20 ">
                Logo
                </p>
                <h3 className="text-cafe font-raleway text-sm sm:text-base mx-5 mb-9">
                Planimetría 
                    </h3>
                    <img src={logo} alt="logo" className="mx-16 sm:mx-44 md:mx-56 lg:mx-72"/>
                    <h3 className="text-cafe font-raleway text-sm sm:text-base mx-5  mt-16">
                Variaciones 
                    </h3>
                    <img src={variacionesLogo} alt="variaciones1" className="mx-5 sm:mx-10 md:mx-24 lg:mx-32 my-3 md:my-9"/>
                    <img src={variaciones2Logo} alt="variaciones2" className="mx-5 sm:mx-10 md:mx-24 lg:mx-32 my-3 md:my-9"/>
                
                    <p className="text-2xl md:text-3xl font-cooper text-verde-oscuro mb-5 relative self-end mr-10 mt-20 z-20 ">
                Elementos gráficos
                </p>
                <h3 className="text-cafe font-raleway text-sm sm:text-base mx-5">
                Ilustraciones de colores sólidos 
                    </h3>
                    <img src={ilustraciones} alt="ilustraciones" className="mx-5 sm:mx-10 md:mx-24 lg:mx-32 my-3 md:my-5"/>
                    <h3 className="text-cafe font-raleway text-sm sm:text-base mx-5 mt-9">
                    Puntos degradados 
                    </h3>
                    <img src={degradados} alt="degradados" className="mx-5 sm:mx-10 md:mx-24 lg:mx-32 my-3 md:my-5"/>
                    <div className="flex flex-row mx-5 mt-9">
                    <h3 className="text-cafe font-raleway text-sm sm:text-base ">
                    Imágenes generadas por IA 
                    </h3>
              <img src={estrella} alt="estrella" className="w-2 h-2 float-left"/>
                    </div>
                    <img src={imagenesIA} alt="IA" className="mx-5 sm:mx-10 md:mx-24 lg:mx-32 my-3 md:my-5"/>
                <div >
                
              <p className="text-black font-raleway text-xxs  mx-10 mt-9 mb-5">
              <img src={estrella} alt="estrella" className="w-2 h-2 float-left"/>
                Las imágenes son generadas por BlueWillow, un emocionante generador de imágenes por Inteligencia Artificial (IA) que ha revolucionado la forma en que se crea y se imagina el arte visual. Utilizando técnicas avanzadas de aprendizaje profundo, BlueWillow puede generar imágenes impresionantes, realistas y detalladas a partir de descripciones de texto. Esta poderosa herramienta utiliza una vasta cantidad de datos visuales previamente entrenados para comprender las sutilezas de la forma, el color, la textura y la composición, y luego traduce esas descripciones en imágenes impactantes. BlueWillow ha abierto nuevas fronteras creativas y ha permitido a artistas, diseñadores y creadores explorar posibilidades ilimitadas en el ámbito visual, ofreciendo una herramienta innovadora para la expresión artística y la comunicación visual.</p>
                </div>

              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
}
