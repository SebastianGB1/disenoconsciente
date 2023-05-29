import { useContext } from "react";
import { Context } from "../context/context";
import LazyLoadImage_impacto from "../static/images/img_impacto.png";
import firma_regina from "../static/images/firma_regina.png";
import leer_mas from '../static/images/leer_mas.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function PrensaCard() {
  const { setShowModalImpacto } = useContext(Context);

  const handleClick = () => {
    setShowModalImpacto(true);
  };

  return (
    <div>
      <div className="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-5xl mx-5 p-5 mb-16 relative z-20">
        <div className="md:basis-105">
        <LazyLoadImage
          className="w-100"
          src={LazyLoadImage_impacto}
          alt="Telas pet"
        />
        <LazyLoadImage
          className="object-cover md:h-auto w-3/4 mt-5"
          src={firma_regina}
          alt="Telas pet"
        />
        </div>
        <div className="flex flex-col justify-start p-4 text-left">
          <h1 className="mb-2 text-md font-raleway font-bold text-azul">
          El impacto del color en el diseño sostenible
          </h1>
          <p className="mb-3 font-raleway text-justify leading-8 lg:w-97">
          El color es un elemento fundamental en el diseño. Desde la elección de la paleta de colores hasta la forma en que se aplican los pigmentos en los diferentes materiales, el color es capaz de evocar emociones, transmitir mensajes y transformar cualquier diseño en algo único y especial. A lo largo de la historia, los seres humanos han utilizado diferentes técnicas para obtener pigmentos y tintes naturales con los que colorear sus creaciones. Sin embargo, con la llegada de la industrialización, estas técnicas han sido transformadas para adaptarse a un mundo cada vez más productivo y en el que la sostenibilidad se ha convertido en una preocupación fundamental. En este artículo, exploraremos la historia de la coloración de los materiales y cómo las técnicas ancestrales se han transformado para un mundo totalmente industrializado, destacando la importancia de la sostenibilidad en la producción de colores y cómo los diseñadores pueden adoptar prácticas más sostenibles en su trabajo, mientras crean productos atractivos y visualmente impactantes en sus diferentes áreas.
          </p>
          <button onClick={handleClick}>
            <LazyLoadImage src={leer_mas} alt="leer_mas" className="float-right w-48 hover:bg-naranja rounded-lg px-3 pt-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
