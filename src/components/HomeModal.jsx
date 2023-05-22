import { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Context } from "../context/context";
import imagen1 from "../static/images/imagen1.png";
import { CardActions } from "@mui/material";

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
                    src="src/static/images/cerrarModal.png"
                    alt="Cerrar"
                    className="w-6 mt-6 mr-6 float-right"
                  />
                </button>
                <div className="flex justify-center p-5 ">
                  <h1 className="text-4xl font-bold text-verde-oscuro relative z-20 mb-10">
                    Concepto gráfico
                  </h1>
                </div>
                <p className="text-3xl font-bold text-verde-oscuro mb-5 relative self-end mr-10 z-20">
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
                          src="src/static/images/Recurso 16.png"
                          alt="#909bb9"
                        />
                        <img
                          src="src/static/images/Recurso 17.png"
                          alt="#909bb9"
                        />
                      </div>
                      <div className="flex flex-row w-24 md:w-48 lg:w-65">
                        <img
                          src="src/static/images/Recurso 19.png"
                          alt="#909bb9"
                        />
                        <img
                          src="src/static/images/Recurso 20.png"
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
                          src="src/static/images/Recurso 18.png"
                          alt="#909bb9"
                        />
                        <img
                          src="src/static/images/Recurso 21.png"
                          alt="#909bb9"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-3xl font-bold text-verde-oscuro mb-16 relative self-end mr-10 z-20 ">
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
                    ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
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
                    ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
                    </h4>
                    <h4 className="font-cooper text-xs md:text-base">1234567890.,-/*-+|</h4>
                </div>

                <div className="mx-5 ">
                <h3 className="text-cafe font-raleway text-sm sm:text-base ">
                Tipografía alterna (Textos de corridos y comunicación de la marca)  
                    </h3>
                </div>
                <div className="flex flex-row mx-5 justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-kiona mt-10 text-xs md:text-base">ABCDEFGHIJKLMNÑOPQRSTUVWXYZ</h1>
                        <h2 className="font-raleway my-10">abcdefghijklmnñopqrstuvwxyz</h2>
                        <h3 className="font-raleway ">1234567890.,-/*-+|</h3>
                    </div>
                    <div className="flex flex-col items-end justify-around">
                        <p className="font-raleway font-thin">Raleway Thin</p>
                        <p className="font-raleway font-extralight">Raleway Light</p>
                        <p className="font-raleway">Raleway Regular</p>
                        <p className="font-raleway font-medium">Raleway Medium</p>
                        <p className="font-raleway font-bold">Raleway Bold</p>
                        <p className="font-raleway font-black">Raleway Black</p>
                        <p className="font-raleway italic">Raleway Italic</p>

                    </div>
                </div>



              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
}
