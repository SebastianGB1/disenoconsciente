import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../static/images/recurso 15.png";
import { Context } from "../context/context";
import fecha from "../static/images/fecha_regina.png";

import recurso39 from "../static/images/recurso 39_impacto.png";
import recurso41 from "../static/images/Recurso 41_impacto.png";
import recurso42 from "../static/images/Recurso 42_impacto.png";
import recurso43 from "../static/images/Recurso 43_impacto.png";
import recurso40 from "../static/images/recurso 40_impacto.png";

export default function HomeModal() {
  const { showModalImpacto, setShowModalImpacto } = useContext(Context);

  const handleClose = () => {
    setShowModalImpacto(false);
  };
  return (
    <>
      <Modal open={showModalImpacto} onClose={handleClose}>
        <>
          <div className="my-1 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
            <div className="relative w-auto mx-auto max-w-medio sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
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
                <div className="flex justify-center p-5 ">
                  <h className="text-md md:text-2xl font-cooper text-azul relative z-20 mb-10">
                    El impacto del color en el diseño sostenible
                  </h>
                </div>
                <img src={fecha} alt="Fecha" className="w-52 md:w-60 mb-10" />
                <p className="leading-8 text-justify font-raleway mb-16">
                  <img
                    src={recurso39}
                    alt="Recurso 39"
                    className="float-left w-44 md:w-60 mt-2 mr-3"
                  />
                  La coloración de los materiales es una parte integral del
                  diseño en todas sus áreas, desde la moda hasta la
                  arquitectura. El color puede comunicar emociones y
                  sentimientos, y puede ser una forma poderosa de contar
                  historias a través del diseño. Sin embargo, la forma en que se
                  ha logrado la coloración de los materiales ha cambiado
                  significativamente a lo largo del tiempo, especialmente con la
                  industrialización de la producción de bienes y la creciente
                  preocupación por el impacto ambiental.
                </p>
                <h2 className="font-extrabold font-raleway mb-5">
                  Un poco de historia de los pigmentos
                </h2>
                <p className="max-w-3xl space-y-2 list-inside leading-8 text-justify font-raleway">
                  Antes de la industrialización, la coloración de los materiales
                  se lograba a través de técnicas ancestrales. Los tintes
                  naturales se obtenían de plantas, animales e incluso
                  minerales. Las técnicas de teñido, pintura
                  <img
                    src={recurso40}
                    alt="Recurso 40"
                    className="float-right w-44 md:w-60 ml-3"
                  />
                  y otros métodos de coloración se desarrollaron a lo largo de
                  miles de años, y se transmitían de generación en generación.
                  Estas técnicas ancestrales eran muy específicas y detalladas,
                  y se adaptaban a los recursos y la cultura de cada lugar. Sin
                  embargo, con la llegada de la producción industrial, la
                  coloración de los materiales se volvió más uniforme y
                  predecible, pero a menudo menos sostenible. Los tintes y
                  pigmentos sintéticos se volvieron más populares debido a su
                  facilidad de uso y costos más bajos.
                </p>

                <h2 className="font-extrabold font-raleway mb-5 mt-16">
                  Impacto de industrialización en los tintes
                </h2>
                <p className="mb-3 font-raleway text-justify leading-8">
                  Los tintes y pigmentos sintéticos se han vuelto cada vez más
                  populares debido a su facilidad de uso y a su costo
                  relativamente bajo en comparación con los tintes y pigmentos
                  naturales. Sin embargo, la producción y el uso de tintes y
                  pigmentos sintéticos tienen un impacto ambiental significativo
                  y preocupante, especialmente si no se manejan adecuadamente.
                  Los tintes y pigmentos sintéticos a menudo contienen
                  sustancias químicas tóxicas y persistentes que pueden ser
                  perjudiciales para la salud humana y el medio ambiente. La
                  producción de estos productos químicos también puede generar
                  grandes cantidades de desechos tóxicos y contribuir a la
                  contaminación del aire, el agua y el suelo.
                  <img
                    src={recurso41}
                    alt="Recurso 41"
                    className="w-60 mx-auto md:w-72 mb-10 mt-5"
                  />
                  Además, los tintes y pigmentos sintéticos a menudo se producen
                  utilizando combustibles fósiles y otros recursos no
                  renovables, lo que contribuye a la huella de carbono de la
                  industria textil y de otros sectores del diseño. En respuesta
                  a esto, ha habido un movimiento hacia la sostenibilidad,
                  muchos diseñadores y fabricantes han comenzado a explorar
                  opciones de coloración más sostenibles y crean un mayor
                  interés en los tintes y pigmentos naturales y en técnicas de
                  teñido y pigmentación más sostenibles.
                </p>

                <h2 className="font-extrabold font-raleway mb-5 mt-16">
                  Coloración sostenible
                </h2>
                <p className="mb-3 font-raleway text-justify leading-8">
                  El interés en los tintes naturales ha llevado a un
                  resurgimiento en el uso de técnicas ancestrales de coloración,
                  como el teñido con índigo, que ha sido utilizado durante
                  <img
                    src={recurso42}
                    alt="Recurso 42"
                    className="float-right w-44 md:w-72 ml-3"
                  />
                  siglos en todo el mundo. La popularidad de los tintes
                  naturales también ha llevado a una mayor exploración y
                  descubrimiento de tintes naturales, que utilizan materiales
                  como la cáscara de nuez o la cebolla para obtener colores
                  vibrantes y duraderos, también diferentes plantas y otros
                  materiales que pueden ser utilizados para producir una amplia
                  gama de colores. Además, la búsqueda de alternativas
                  sostenibles ha llevado al desarrollo de nuevas tecnologías,
                  como la biofabricación, que utiliza microorganismos para
                  producir pigmentos y tintes naturales de manera más eficiente
                  y con un menor impacto ambiental. Los procesos de coloración
                  también se han vuelto más cuidadosos en cuanto al uso de
                  recursos, y se están desarrollando nuevas técnicas para hacer
                  que la coloración sea más eficiente y menos dañina para el
                  medio ambiente, estas iniciativas también están fomentando la
                  colaboración entre diseñadores, fabricantes y científicos,
                  quienes trabajan juntos para encontrar soluciones más
                  sostenibles en la coloración de materiales.
                </p>

                <h2 className="font-extrabold font-raleway mb-5 mt-16">
                  Conclusión
                </h2>
                <p className="mb-10 font-raleway text-justify leading-8 ">
                    <img src={recurso43} alt="Recurso 43" className="float-left w-44 md:w-72 mr-3 mt-2"/>
                La coloración de los materiales es un aspecto importante del diseño que ha evolucionado significativamente a lo largo del tiempo. Aunque la industrialización ha hecho que la coloración sea más uniforme y predecible, también ha tenido un impacto ambiental significativo. Sin embargo, el enfoque hacia la sostenibilidad en la coloración de los materiales ha llevado a la exploración de opciones más naturales y menos dañinas para el medio ambiente. Los diseñadores deben ser conscientes de las prácticas sostenibles y responsables en la elección de los materiales y las técnicas de coloración, al seguir desarrollando nuevas técnicas y abrazar los métodos ancestrales, podemos lograr una coloración sostenible y hermosa en el diseño, considerando la vida útil de los productos que diseñan y cómo se pueden reciclar o reutilizar, en lugar de simplemente desecharse después de su uso.
                </p>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
}
