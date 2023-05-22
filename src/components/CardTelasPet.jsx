import { useContext } from "react";
import { Context } from "../context/context";
import telas_pet from "../static/images/img_telas_pet.png";
import firma_reinaldo from "../static/images/firma_reinaldo.png";
import leer_mas from '../static/images/leer_mas.png'

export default function PrensaCard() {
  const { setShowModalPet, showModalPet } = useContext(Context);

  const handleClick = () => {
    setShowModalPet(true);
  };

  return (
    <div>
      <div class="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-5xl mx-5 p-5 mb-16">
        <div className="md:basis-105">
        <img
          className="w-100"
          src={telas_pet}
          alt="Telas pet"
        />
        <img
          className="object-cover md:h-auto w-3/4 mt-5"
          src={firma_reinaldo}
          alt="Telas pet"
        />
        </div>
        <div className="flex flex-col justify-start p-4 text-left">
          <h1 class="mb-2 text-md font-raleway font-bold text-naranja">
            Telas PET: una opción innovadora y responsable, ¿o no?
          </h1>
          <p class="mb-3 font-raleway text-justify leading-8 lg:w-97">
            ¿Te has preguntado alguna vez qué sucede con las botellas de
            plástico después de que las utilizamos? ¿Sabías que existe una
            alternativa sostenible que permite reciclar estas botellas y
            convertirlas en telas? Estamos hablando de las telas PET, una opción
            innovadora que ha comenzado a ser utilizada por la industria textil
            y de la moda en su búsqueda por una producción más sostenible y
            responsable con el medio ambiente. Sin embargo, como ocurre con la
            mayoría de las opciones, el uso de telas PET también tiene puntos
            positivos y negativos que deben ser analizados cuidadosamente. En
            esta sección, exploraremos en detalle los beneficios y limitaciones
            de las telas PET, así como su impacto en la moda sostenible. A
            través de esta reflexión, esperamos ayudarte a tomar una decisión
            más informada sobre el uso de telas PET en tu propia producción de
            moda sostenible.
          </p>
          <button onClick={handleClick}>
            <img src={leer_mas} alt="leer_mas" className="float-right w-44" />
          </button>
        </div>
      </div>
    </div>
  );
}
