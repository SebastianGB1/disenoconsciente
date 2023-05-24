import { useContext } from "react";
import { Context } from "../context/context";
import ver from "../static/images/Recurso 4_blog.png";

export default function CardBlogPet() {
  const { setShowDetailPet, setShowDetailTincion, getComentariosPet, getComentariosTincion } = useContext(Context);

  const handleClickPet = () => {
    setShowDetailPet(true);
    getComentariosPet()
  };

  const handleClickTincion = () => {
    setShowDetailTincion(true);
    getComentariosTincion();
  };

  return (
    <div>
      <div className="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-5xl mx-5 p-5 mb-16">
        <div className="text-left">
          <h1 className="mb-2 text-md font-raleway font-bold text-cafe">
            Hablemos sobre…
          </h1>
          <p className="mb-3 font-raleway text-justify leading-8 lg:w-97">
          Las telas PET en la moda: ¿Un paso hacia la sostenibilidad?
          </p>
        </div>
          <button onClick={handleClickPet}>
            <img src={ver} alt="leer_mas" className="w-28 ml-5" />
          </button>
        </div>
        <div className="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-5xl mx-5 p-5 mb-16">
        <div className="text-left">
          <h1 className="mb-2 text-md font-raleway font-bold text-azul">
            Hablemos sobre…
          </h1>
          <p className="mb-3 font-raleway text-justify leading-8 lg:w-97">
          Desde la tinción manual hasta la producción industrial: El proceso de coloración y su impacto ambiental
          </p>
        </div>
          <button onClick={handleClickTincion}>
            <img src={ver} alt="leer_mas" className="w-28 ml-5" />
          </button>
        </div>
    </div>
  );
}
