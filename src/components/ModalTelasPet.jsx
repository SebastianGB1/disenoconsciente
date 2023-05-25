import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../static/images/cerrarModal.png";
import { Context } from "../context/context";
import fecha_reinaldo from "../static/images/fecha_reinaldo.png";
import no_mas_botellas from '../static/images/no_mas_botellas.png'
import recurso22 from '../static/images/Recurso 22_pet.png'
import recurso23 from '../static/images/Recurso 23_pet.png'
import recurso24 from '../static/images/Recurso 24_pet.png'

export default function HomeModal() {
  const { showModalPet, setShowModalPet } = useContext(Context);

  const handleClose = () => {
    setShowModalPet(false);
  };
  return (
    <>
      <Modal open={showModalPet} onClose={handleClose} className="overflow-auto py-10">
        <>
          {/* <div className="my-1 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 "> */}
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
                  <h className="text-md md:text-2xl font-cooper text-naranja relative z-20 mb-10">
                    Telas PET: una opción innovadora y responsable, ¿o no?
                  </h>
                </div>
                <img
                  src={fecha_reinaldo}
                  alt="Fecha"
                  className="w-52 md:w-60 mb-10"
                />
                <p className="leading-8 text-justify font-raleway">
                <img src={no_mas_botellas} alt="No mas botellas" className="float-left w-44 md:w-60 m-3"/>
                  La moda sostenible se ha convertido en un tema de gran interés
                  para la industria textil y de la moda, así como para los
                  consumidores que buscan alternativas más amigables con el
                  medio ambiente. Una de estas alternativas son las telas PET,
                  estas son un tipo de tela sintética que se produce a partir de
                  botellas de plástico recicladas. La sigla PET significa
                  Polietileno Tereftalato, que es un tipo de plástico utilizado
                  comúnmente para fabricar botellas de agua, jugos y otros
                  envases. El proceso de producción de estas telas implica el
                  uso de tecnología avanzada que permite convertir las botellas
                  de plástico en fibras que se pueden tejer para crear telas. La
                  idea de reciclar estas botellas para producir telas es una
                  forma de reducir la cantidad de residuos plásticos en el medio
                  ambiente y fomentar la sostenibilidad.
                </p>
                <img src={recurso22} alt="Recurso 22" className="mx-16 my-10 md:mx-60"/>
                <h2 className="font-extrabold font-raleway mb-5">Ventajas de las telas PET</h2>
                <ul className="max-w-3xl space-y-2 list-disc list-inside leading-8 text-justify font-raleway">
                    <li>Sostenibilidad: La producción de telas PET es una forma de reciclar botellas de plástico y reducir la cantidad de residuos en el medio ambiente. También reduce la necesidad de producir más tela a partir de materiales no renovables.</li>
                    <li>Durabilidad: Las telas PET son muy duraderas y resistentes, lo que las hace ideales para la fabricación de prendas de ropa de alta calidad que duran mucho tiempo.</li>
                    <li>Resistencia al agua: Las telas PET son resistentes al agua y pueden secarse rápidamente, lo que las hace ideales para la ropa deportiva y los trajes de baño.</li>
                    <li>Fácil cuidado: Las telas PET son fáciles de cuidar y mantener, lo que las hace ideales para la ropa que se usa con frecuencia.</li>
                    <li>Variedad de estilos: Las telas PET se pueden producir en una variedad de estilos y diseños, lo que las hace ideales para la fabricación de prendas de ropa de moda.</li>
                </ul>

                <h2 className="font-extrabold font-raleway mb-5 mt-16">Desventajas de las telas PET</h2>
                <ul className="max-w-3xl space-y-2 list-disc list-inside leading-8 text-justify font-raleway">
                    <img src={recurso23} alt="Recurso 23" className="float-right w-32 md:w-52 mt-3 ml-3"/>
                    <li>Comodidad: Aunque las telas PET son duraderas, resistentes y fáciles de cuidar, su apariencia es similar a la del poliéster, lo que significa que tienen un aspecto más artificial y menos natural que las telas naturales, como el algodón y la seda. Pueden ser menos suaves al tacto y menos transpirables, lo que puede hacer que la ropa sea menos cómoda en climas cálidos.</li>
                    <li>Impacto ambiental: Aunque el reciclaje de botellas de plástico para producir telas PET es una forma de reducir los residuos en el medio ambiente, la producción y el transporte de estas telas también tienen un impacto ambiental requiriendo grandes cantidades de energía y agua. Además, si las telas PET se descartan después de su vida útil, todavía pueden tardar muchos años en descomponerse.</li>
                    <li>Limitaciones de color: Su disponibilidad en el mercado es limitada en cuanto al color debido a las características del proceso de producción. Por lo tanto, no se pueden producir telas PET en todos los colores disponibles para las telas naturales. </li>
                    <li>Salud humana y de la vía marina: Ya que las fibras de plástico pueden desprender microplásticos que pueden ser inhalados o ingeridos por los seres humanos. Pero también al ser lavadas estas prendas y el agua de la lavadora llega a los mares, los microplásticos podrían afectar directamente a los peces y demás organismos del mar, y al ser tan pequeños, no pueden ser recolectados.</li>
                </ul>
                <h2 className="font-extrabold font-raleway mb-5 mt-16">Conclusión</h2>
                <p className="mb-3 font-raleway text-justify leading-8 ">Las telas PET son una opción interesante 
                <img src={recurso24} alt="Recurso 24" className="float-left w-32 md:w-52 mt-3 mr-3"/>
                para la producción de prendas de alta calidad y con un enfoque sostenible, pero no son una solución perfecta, a pesar de sus limitaciones y desventajas, su uso puede ayudar a reducir la contaminación ambiental y a crear una industria de moda más responsable y consciente del medio ambiente. Para seguir explorando esta opción, es importante seguir investigando y desarrollando tecnologías más avanzadas para la producción de telas PET, así como fomentar el uso responsable de estas telas por parte de los consumidores y la industria de la moda.</p>
              </div>
            </div>
          {/* </div> */}
        </>
      </Modal>
    </>
  );
}
