import { useContext , useState} from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../static/images/cerrarModal.png";
import { Context } from "../context/context";
import TextareaAutosize from 'react-textarea-autosize';
import {supabase} from '../supabase/client'
import ListaComentarios from '../components/ListaComentarios'

export default function HomeModal() {
  const { showDetailTincion, setShowDetailTincion, getComentariosTincion, comentariosTincion } = useContext(Context);

  const [comentario, setComentario] = useState("")

  const handleClose = () => {
    setShowDetailTincion(false);
  };

  const addComentario = async () => {
    if (comentario.length > 0) {
      const { data, error } = await supabase
        .from("comentarios_tincion")
        .insert([{ comentario: comentario }]);
      setComentario("");
      getComentariosTincion();
    } else {
      alert("Debe ingresar un comentario");
    }
  };

  const handerTiping = (e) => {
    setComentario(e.target.value);
  };
  return (
    <>
      <Modal
        open={showDetailTincion}
        onClose={handleClose}
        className="overflow-auto py-10"
      >
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
                Desde la tinción manual hasta la producción industrial: El
                proceso de coloración y su impacto ambiental
              </h>
              <p className="mb-5 font-raleway text-justify leading-8">
                Últimamente hemos estado pensando sobre la coloración de los
                materiales y como este tipo de técnicas ancestrales se han
                transformado para un mundo totalmente industrializado. Desde el
                diseño de modas, gráfico, de espacios, de producto o cualquier
                otro diseño, el conocimiento de este proceso es importante. Pero
                hablemos un poco del impacto ambiental que este trae. Cuéntanos
                qué sabes sobre el tema de tintas / pinturas en tú ámbito y como
                estás pueden ser tratadas en su impacto al medio ambiente. (Para
                leer más sobre la coloración durante la historia y en los
                diferentes tipos de sustratos da{" "}
                <a href="#" className="bg-rosado px-2 py-1 rounded-lg">
                  click aquí
                </a>
                )
              </p>
              <TextareaAutosize
                onChange={(e) => {
                  handerTiping(e);
                }}
                type="text"
                placeholder="Añadir un comentario…"
                className="placeholder-cafe block p-2.5 w-full text-sm  rounded-lg"
                value={comentario}
              />
              <button className="bg-azul self-center p-2 rounded-xl text-blanco m-5 font-bold text-2xl" onClick={addComentario}>
                publicar {">"}
              </button>
              <ListaComentarios comentarios={comentariosTincion} />
            </div>
          </div>
          {/* </div> */}
        </>
      </Modal>
    </>
  );
}
