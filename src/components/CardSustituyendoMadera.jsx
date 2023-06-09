import { useContext } from "react";
import { Context } from "../context/context";
import telas_madera from "../static/images/img_madera.png";
import firma_rebeca from "../static/images/firma_rebeca.png";
import leer_mas from '../static/images/leer_mas.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function PrensaCard() {
  const { setShowModalMadera,  } = useContext(Context);

  const handleClick = () => {
    setShowModalMadera(true);
    
  };

  return (
    <div>
      <div className="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-5xl mx-5 p-5 mb-16 relative z-20">
        <div className="md:basis-105">
        <LazyLoadImage
          className="w-100"
          src={telas_madera}
          alt="Telas pet"
        />
        <LazyLoadImage
          className="object-cover md:h-auto w-3/4 mt-5"
          src={firma_rebeca}
          alt="Telas pet"
        />
        </div>
        <div className="flex flex-col justify-start p-4 text-left">
          <h1 className="mb-2 text-md font-raleway font-bold text-verde-claro">
          Sustituyendo la madera: ¿Vale la pena el cambio?
          </h1>
          <p className="mb-3 font-raleway text-justify leading-8 lg:w-97">
          La madera es un material ampliamente utilizado en la construcción y la fabricación de muebles debido a su versatilidad, durabilidad y belleza natural, también es utilizada para la fabricación de papel y productos de papel.  Sin embargo, su uso desmedido ha llevado a una deforestación acelerada, a la pérdida de importantes ecosistemas y a la disminución de la biodiversidad, un impacto negativo en el medio ambiente. En este sentido, se han desarrollado diferentes materiales alternativos a la madera, como los aglomerados, que buscan reducir este impacto. En este artículo, analizaremos en detalle los puntos positivos y negativos de estos materiales, así como su pertinencia en la sustitución de la madera en diferentes contextos.
          </p>
          <button onClick={handleClick}>
            <LazyLoadImage src={leer_mas} alt="leer_mas" className="float-right w-48 hover:bg-naranja rounded-lg px-3 pt-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
