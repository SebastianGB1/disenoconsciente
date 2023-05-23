import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../static/images/recurso 15.png";
import { Context } from "../context/context";

export default function HomeModal() {
  const { showDetailTincion, setShowDetailTincion} = useContext(Context);

  const handleClose = () => {
    setShowDetailTincion(false);
  };
  return (
    <>
      <Modal open={showDetailTincion} onClose={handleClose} className="overflow-auto py-10">
        <>
          {/* <div className="my-10 md:m-20 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 "> */}
            <div className="relative mx-auto max-w-medio sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full px-5 md:px-20 bg-blanco outline-none focus:outline-none">
                {/*header*/}
                <button onClick={handleClose}>
                  <img
                    src={cerrar}
                    alt="Cerrar"
                    className="w-6 mt-6 float-right"
                  />
                </button>
                
                  <h className="text-md md:text-2xl text-center font-cooper text-naranja relative z-20 mb-5">
                  Desde la tinción manual hasta la producción industrial:
El proceso de coloración y su impacto ambiental
                  </h>
                  <p className="mb-5 font-raleway text-justify leading-8">
                  Últimamente hemos estado pensando sobre la coloración de los materiales y como este tipo de técnicas ancestrales se han transformado para un mundo totalmente industrializado. Desde el diseño de modas, gráfico, de espacios, de producto o cualquier otro diseño, el conocimiento de este proceso es importante. Pero hablemos un poco del impacto ambiental que este trae. Cuéntanos qué sabes sobre el tema de tintas / pinturas en tú ámbito y como estás pueden ser tratadas en su impacto al medio ambiente. (Para leer más sobre la coloración durante la historia y en los diferentes tipos de sustratos da <a href="#" className="bg-rosado px-2 py-1 rounded-lg">click aquí</a>)
                  </p>
                <input type="text" placeholder="Añadir un comentario…" className="placeholder-cafe rounded-3xl h-16 my-3 placeholder:-translate-y-4 placeholder:translate-x-5"/>
                <button className="bg-azul self-center p-2 rounded-xl text-white m-5 text-2xl">Publicar {">"}</button>
              </div>
            </div>
          {/* </div> */}
        </>
      </Modal>
    </>
  );
}
