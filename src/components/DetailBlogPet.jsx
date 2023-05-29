import { useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../static/images/cerrarModal.png";
import { Context } from "../context/context";
import ListaComentarios from "./ListaComentarios";
import { supabase } from "../supabase/client";
import TextareaAutosize from 'react-textarea-autosize';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function DetailBlogPet() {
  const { showDetailPet, setShowDetailPet, getComentariosPet, comentariosPet } =
    useContext(Context);

  const [comentario, setComentario] = useState("");

  const handleClose = () => {
    setShowDetailPet(false);
  };

  const addComentario = async () => {
    if (comentario.length > 0) {
      const { data, error } = await supabase
        .from("comentarios_pet")
        .insert([{ comentario: comentario }]);
      setComentario("");
      getComentariosPet();
    } else {
      alert("Debe ingresar un comentario");
    }
  };

  const handerTiping = (e) => {
    setComentario(e.target.value);
  };

  return (
    <div>
      <Modal
        open={showDetailPet}
        onClose={handleClose}
        className="overflow-auto py-10"
      >
        <>
          {/* <div className="my-10 overflow-x-hidden overflow-y-auto fixed inset-0 border z-50 "> */}
          <div className="relative mx-auto max-w-medio sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
            {/*content*/}
            <div className="rounded-3xl shadow-lg relative flex flex-col w-full px-5 md:px-20 bg-blanco">
              {/*header*/}
              <button onClick={handleClose}>
                <LazyLoadImage
                  src={cerrar}
                  alt="Cerrar"
                  className="w-6 mt-6 float-right"
                />
              </button>

              <h className="text-md md:text-2xl text-center font-cooper text-verde-claro relative z-20 mb-5">
                Las telas PET en la moda: ¿Un paso hacia la sostenibilidad?
              </h>
              <p className="mb-5 font-raleway text-justify leading-8 p-2 md:p-0">
                El día de hoy hablaremos de las telas PET en el mundo de la moda
                y como desde el diseño tenemos o no el conocimiento de todo lo
                que éstas conllevan, tanto consecuencias positivas como
                negativas. Queremos saber qué opinan ustedes de este moderno
                recurso para la revolución de la industria de la moda. (Para
                leer un artículo y tener mayor información sobre las ventajas y
                desventajas de las telas PET de{" "}
                <a href="#" className="bg-rosado px-2 py-1 rounded-lg hover:bg-verde-claro hover:text-white">
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
              <button
                onClick={addComentario}
                className="bg-azul font-bold self-center p-2 rounded-xl text-blanco m-5 text-2xl hover:bg-verde-oscuro"
              >
                publicar {">"}
              </button>
              <ListaComentarios comentarios={comentariosPet} />
            </div>
          </div>
          {/* </div> */}
        </>
      </Modal>
    </div>
  );
}
