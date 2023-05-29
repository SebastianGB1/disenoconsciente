import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../static/images/cerrarModal.png";
import { Context } from "../context/context";
import fecha from "../static/images/fecha_rebeca.png";
import recurso27 from "../static/images/Recurso 27_madera.png";
import recurso28 from "../static/images/Recurso 28_madera.png";
import recurso29 from "../static/images/Recurso 29_madera.png";
import recurso30 from "../static/images/Recurso 30_madera.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function HomeModal() {
  const { showModalMadera, setShowModalMadera } = useContext(Context);

  const handleClose = () => {
    setShowModalMadera(false);
  };
  return (
    <>
      <Modal open={showModalMadera} onClose={handleClose} className="overflow-auto py-10">
        <>
          {/* <div className="my-1 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 "> */}
            <div className="relative w-auto mx-auto max-w-medio sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full px-5 md:px-20 bg-blanco outline-none focus:outline-none">
                {/*header*/}
                <button onClick={handleClose}>
                  <LazyLoadImage
                    src={cerrar}
                    alt="Cerrar"
                    className="w-6 mt-6 float-right"
                  />
                </button>
                <div className="flex justify-center p-5 ">
                  <h className="text-md md:text-2xl font-cooper text-verde-claro relative z-20 mb-10">
                    Sustituyendo la madera: ¿Vale la pena el cambio?
                  </h>
                </div>
                <LazyLoadImage src={fecha} alt="Fecha" className="w-52 md:w-60 mb-10" />
                <p className="leading-8 text-justify font-raleway mb-16">
                  <LazyLoadImage
                    src={recurso27}
                    alt="Recurso 27"
                    className="float-right w-44 md:w-72 m-3"
                  />
                  Los aglomerados son paneles que se fabrican a partir de la
                  mezcla de partículas de madera y resinas sintéticas y se
                  someten a altas temperaturas y presiones para crear un
                  material fuerte y resistente. A diferencia de la madera
                  natural, los aglomerados se fabrican a partir de materiales
                  reciclados y residuos de madera, lo que los convierte en una
                  alternativa más sostenible. Además, estos paneles pueden
                  fabricarse en diferentes tamaños, formas y acabados, lo que
                  los hace altamente versátiles. Además de los aglomerados,
                  existen otros materiales alternativos a la madera, como el MDF
                  (Medium Density Fiberboard), el HDF (High Density Fiberboard),
                  el OSB (Oriented Strand Board) y el contrachapado de bambú.
                  Todos estos materiales se fabrican a partir de partículas de
                  madera y resinas, y tienen características y propiedades
                  similares a las de la madera natural.
                </p>
                <h2 className="font-extrabold font-raleway mb-5">
                  Puntos positivos de los materiales alternativos a la madera
                </h2>
                <ol className="max-w-3xl space-y-2 list-decimal list-inside leading-8 text-justify font-raleway mb-10">
                  <li>
                    Son más económicos:
                    <p>
                      Uno de los principales beneficios de los materiales
                      alternativos a la madera es su precio. Debido a que se
                      fabrican a partir de residuos y materiales reciclados, su
                      producción es más económica que la de la madera natural.
                      Además, estos materiales se pueden fabricar en grandes
                      cantidades y en diferentes tamaños y formas, lo que los
                      hace ideales para la producción en masa.
                    </p>
                  </li>
                  <li>
                    Son más sostenibles
                    <p>
                      La producción de materiales alternativos a la madera tiene
                      un menor impacto ambiental que la tala de bosques para la
                      obtención de madera. Además, el uso de residuos y
                      materiales reciclados reduce la cantidad de desechos en
                      los vertederos y contribuye a la reducción de la huella de
                      carbono.
                    </p>
                  </li>
                  <li>
                    Son más estables
                    <p>
                      Los materiales alternativos a la madera son menos
                      susceptibles a la deformación y al agrietamiento que la
                      madera natural, lo que los hace ideales para la
                      fabricación de muebles y otros elementos decorativos.
                      Además, estos materiales tienen una mayor resistencia al
                      agua y a la humedad, lo que los hace ideales para su uso
                      en zonas húmedas o cerca de fuentes de agua.
                    </p>
                  </li>
                  <LazyLoadImage
                    src={recurso28}
                    alt="Recurso 22"
                    className="my-16 mx-auto w-72"
                  />
                  <li>
                    Mayor aprovechamiento de los recursos
                    <p>
                      El proceso de fabricación de los aglomerados utiliza menos
                      madera que el proceso de producción de la madera aserrada,
                      ya que se pueden utilizar partículas de madera de menor
                      calidad que no serían adecuadas para otros usos. Esto
                      significa que se puede obtener una mayor cantidad de
                      material utilizable a partir de la misma cantidad de
                      madera.
                    </p>
                  </li>
                </ol>

                <h2 className="font-extrabold font-raleway mb-5">
                  Puntos negativos de los materiales alternativos a la madera
                </h2>
                <ol className="max-w-3xl space-y-2 list-decimal list-inside leading-8 text-justify font-raleway mb-16">
                  <li>
                    Durabilidad estructural
                    <p>
                      Estos materiales pueden ser menos duraderos que la madera
                      sólida y pueden requerir más mantenimiento a lo largo del
                      tiempo para mantener su integridad estructural y
                      apariencia estética.
                    </p>
                  </li>
                  <li>
                    Propensos a la deformación
                    <p>
                      O al pandeo, pueden tener limitaciones en su uso en
                      comparación con la madera. Por ejemplo, no son adecuados
                      para su uso en aplicaciones donde se requiere una gran
                      resistencia a la humedad o a los cambios de temperatura,
                      ya que pueden hincharse o deformarse con el tiempo. Esto
                      puede ser un problema en aplicaciones estructurales o de
                      soporte, donde la integridad del material es crucial para
                      la seguridad y el rendimiento del proyecto.
                    </p>
                  </li>
                  <li>
                    Calidad estética
                    <p>
                      Una de las principales desventajas de los aglomerados es
                      que tienen una menor calidad estética que la madera. Esto
                      se debe a que los aglomerados se fabrican a partir de
                      partículas de madera en lugar de tablas macizas, lo que
                      significa que no tienen una veta natural ni un aspecto
                      visual tan atractivo como la madera.
                    </p>
                  </li>
                  <li>
                    Impacto ambiental
                    <p>
                      Aunque los aglomerados utilizan menos madera que la madera
                      aserrada, su producción puede tener un impacto negativo en
                      el medio ambiente. En particular, la resina sintética
                      <LazyLoadImage
                        src={recurso29}
                        alt="Recurso 29"
                        className="mr-3 w-44 md:w-72 float-left"
                      />
                      utilizada en la producción de aglomerados puede contener
                      compuestos químicos que pueden ser dañinos para la salud
                      humana y el medio ambiente si no se gestionan
                      adecuadamente. Además, la producción de aglomerados
                      también puede requerir grandes cantidades de energía y
                      generar emisiones de gases de efecto invernadero y otros
                      contaminantes.
                    </p>
                  </li>
                  <li>
                    Descomposición y emisiones tóxicas
                    <p>
                      Algunos materiales alternativos a la madera pueden ser más
                      propensos a la descomposición o la descomposición química
                      en comparación con la madera natural. Esto puede ser un
                      problema en áreas donde el clima es húmedo o hay una
                      exposición constante a la lluvia y la humedad. También,
                      los materiales alternativos a la madera tienen la
                      posibilidad de crear emisiones tóxicas o peligrosas
                      durante la fabricación, el uso o la eliminación del
                      material. Por ejemplo, algunas alternativas a la madera
                      pueden contener compuestos químicos dañinos o tener
                      emisiones tóxicas en condiciones de alta temperatura o
                      combustión.
                    </p>
                  </li>
                </ol>
                <h2 className="font-extrabold font-raleway mb-5">
                  ¿Amerita y es pertinente el uso de aglomerados en lugar de la
                  madera?
                </h2>
                <p className="leading-8 text-justify font-raleway mb-5">
                  A pesar de las ventajas y desventajas mencionadas
                  anteriormente, la respuesta a esta pregunta depende de las
                  circunstancias específicas de cada caso. En general, los
                  aglomerados pueden ser una buena opción en situaciones donde
                  se requiere una alta resistencia y durabilidad, y donde el
                  costo es un factor importante. Sin embargo, en algunos casos,
                  la madera puede ser una mejor opción en términos de estética,
                  durabilidad a largo plazo y sostenibilidad ambiental. Es
                  importante tener en cuenta que, independientemente del
                  material utilizado, es esencial que se gestione adecuadamente
                  y se produzca de manera sostenible para minimizar el impacto
                  en el medio ambiente. Además, es importante considerar el
                  ciclo de vida completo de los materiales, desde su producción
                  hasta su disposición final, para evaluar su verdadero impacto
                  ambiental.
                </p>
                <LazyLoadImage
                  src={recurso30}
                  alt="Recurso 30"
                  className="mx-auto w-72 md:w-96"
                />
                <h2 className="font-extrabold font-raleway mb-5 mt-16">
                  Conclusiones
                </h2>
                <p className="mb-10 font-raleway text-justify leading-8">
                  En resumen, los aglomerados son un material alternativo a la
                  madera que presenta ciertas circunstancias en comparación con
                  la madera, ofrecen algunas ventajas en términos de costo,
                  uniformidad y disponibilidad, pero tienen sus desventajas
                  importantes que deben tenerse en cuenta al considerar su uso
                  en lugar de la madera natural. Si bien son más económicos y
                  resistentes que la madera, pueden tener una menor calidad
                  estética y un mayor impacto ambiental si no se gestionan
                  adecuadamente. En última instancia, la elección entre la
                  madera y los aglomerados dependerá de las necesidades de cada
                  proyecto, de la aplicación específica y de la capacidad de
                  producir de manera sostenible el material seleccionado. Se
                  debe realizar una evaluación cuidadosa de los pros y los
                  contras de cada opción antes de tomar una decisión final.
                </p>
              </div>
            </div>
          {/* </div> */}
        </>
      </Modal>
    </>
  );
}
