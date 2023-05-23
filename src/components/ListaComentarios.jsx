import React, { useEffect, useContext } from "react";
import { Context } from "../context/context";

export default function ListaComentarios() {
  const { comentariosPet } = useContext(Context);

  return comentariosPet.map((comentario) => {
    return(
        <div className="flex justify-center">
            <ComentarioCard comentario={comentario}></ComentarioCard>
        </div>
    ) 
  });
}
const ComentarioCard = ({ comentario }) => {
  return (
    
      <div className="flex flex-col bg-white rounded-3xl max-w-sm shadow-2xl md:max-w-md mx-5 p-5 mb-3 w-full">
        <p className="font-raleway">{comentario.comentario}</p>
        <br />
        {/* <hr /> */}
        <span className="font-raleway text-xxs text-right">{comentario.created_at.substring(0,10)}</span>
    
    </div>
  );
};
