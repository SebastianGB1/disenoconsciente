import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../static/images/cerrarModal.png";
import { Context } from "../context/context";
import fecha from "../static/images/fecha_renato.png";

import recurso33 from "../static/images/Recurso 33_soste.png";
import recurso35 from "../static/images/Recurso 35_madera.png";
import recurso34 from "../static/images/Recurso 34_soste.png";

import { useNavigate } from "react-router-dom";

export default function HomeModal() {
  const { showModalSostenibilidad, setShowModalSostenibilidad } =
    useContext(Context);

  const handleClose = () => {
    setShowModalSostenibilidad(false);
  };

  const nav = useNavigate();
  const navigateClick = () => nav("/disenoconsciente/directorio");
  return (
    <>
      <Modal open={showModalSostenibilidad} onClose={handleClose}>
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
                  <h className="text-md md:text-2xl font-cooper text-rosado relative z-20 mb-10">
                    Diseño sostenible en Medellín: Una guía para diseñadores
                    emergentes comprometidos y Responsables
                  </h>
                </div>
                <img src={fecha} alt="Fecha" className="w-52 md:w-60 mb-10" />
                <p className="leading-8 text-justify font-raleway">
                  Medellín es una ciudad colombiana que ha experimentado un auge
                  en la industria del diseño en los últimos años. Muchos
                  diseñadores emergentes están surgiendo en la ciudad y están
                  buscando formas de integrar la sostenibilidad en su trabajo.
                  La ciudad tiene una rica cultura y una gran variedad de
                  materiales locales que los diseñadores pueden utilizar para
                  crear diseños únicos y sostenibles.
                </p>
                <img
                  src={recurso33}
                  alt="Recurso 33"
                  className="mx-10 my-10 md:mx-52"
                />
                <h2 className="font-extrabold font-raleway mb-5">
                  Empezando en el diseño sostenible como diseñador emergente
                </h2>
                <ul className="max-w-3xl space-y-2 list-inside leading-8 text-justify font-raleway">
                  <li>
                    Educación y formación
                    <p>
                      Una de las primeras cosas que los diseñadores emergentes
                      pueden hacer para comenzar en el diseño sostenible es
                      educarse y capacitarse en el tema. Hay una gran cantidad
                      de recursos disponibles en línea, como cursos y programas
                      de capacitación, que pueden ayudar a los diseñadores a
                      comprender mejor los principios del diseño sostenible y
                      cómo aplicarlos en su trabajo. Adicionalmente, todas las
                      universidades que manejan programas de diseño en su oferta
                      académica, educan a los estudiantes mínimo en una materia
                      sobre la sostenibilidad. Además, los diseñadores pueden
                      buscar oportunidades de aprendizaje en Medellín, como
                      talleres y conferencias dictados en las diferentes
                      universidades de la ciudad, donde pueden aprender de otros
                      diseñadores y expertos en el campo.
                    </p>
                  </li>
                  <li>
                    Investigación de materiales sostenibles
                    <p>
                      Otra forma en que los diseñadores emergentes pueden
                      comenzar en el diseño sostenible es investigando y
                      utilizando materiales sostenibles en sus diseños. En
                      Medellín, hay muchos proveedores locales que se enfocan en
                      materiales sostenibles y ecológicos, como maderas
                      certificadas y fibras naturales. Los diseñadores también
                      pueden considerar el uso de materiales reciclados o
                      reutilizados, como el plástico reciclado y los materiales
                      de construcción reutilizados, para reducir su impacto
                      ambiental.
                    </p>
                  </li>
                  <img
                    src={recurso34}
                    alt="Recurso 34"
                    className="float-left w-40 md:w-60 mt-3 mr-3"
                  />
                  <li>
                    Diseño para la economía circular
                    <p>
                      Otra forma en que los diseñadores emergentes pueden
                      comenzar en el diseño sostenible es diseñando para la
                      economía circular. Esto significa diseñar productos y
                      servicios con la intención de mantener los materiales en
                      uso durante el mayor tiempo posible y reducir la cantidad
                      de residuos y contaminación que se generan. Los
                      diseñadores pueden hacer esto mediante el diseño de
                      productos que sean reparables y actualizables, utilizando
                      materiales reciclables y compostables, y diseñando para la
                      desmontabilidad y el reciclaje.
                    </p>
                  </li>
                </ul>

                <h2 className="font-extrabold font-raleway mb-5 mt-16">
                  Importancia de ser fiel a la ética y las inclinaciones propias
                </h2>
                <p className="mb-3 font-raleway text-justify leading-8">
                  Es importante que los diseñadores emergentes sean fieles a su
                  ética y sus inclinaciones personales al diseñar. Esto
                  significa que deben diseñar productos y servicios que estén
                  alineados con sus valores y su visión de un futuro sostenible.
                  Los diseñadores deben ser conscientes de la huella ambiental y
                  social de sus diseños y trabajar para minimizar su impacto
                  negativo. Al mismo tiempo, los diseñadores deben tener en
                  cuenta las necesidades de sus clientes y usuarios finales al
                  diseñar productos y servicios sostenibles. Es importante que
                  los productos sostenibles sean también accesibles, funcionales
                  y estéticamente atractivos para los usuarios finales.
                </p>

                <h2 className="font-extrabold font-raleway mb-5 mt-16">
                  Proveedores locales enfocados en la sostenibilidad
                </h2>
                <p className="mb-3 font-raleway text-justify leading-8">
                  <img
                    src={recurso35}
                    alt="Recurso 35"
                    className="float-right w-44 md:w-72 mt-3 ml-3"
                  />
                  Una de las mejores formas de comenzar en el diseño sostenible
                  es buscar y acudir a proveedores locales que se enfocan en
                  materiales sostenibles y ecológicos. Al hacer esto, los
                  diseñadores emergentes pueden asegurarse de que los materiales
                  que están utilizando en sus diseños provienen de fuentes
                  éticas y sostenibles. Además, trabajar con proveedores locales
                  también puede ayudar a apoyar la economía local, lo que a su
                  vez puede contribuir a la construcción de una comunidad más
                  sostenible en Medellín y en Colombia. Los proveedores locales
                  también pueden proporcionar una comprensión única de los
                  materiales y procesos de producción sostenibles, lo que puede
                  ayudar a los diseñadores emergentes a encontrar soluciones
                  innovadoras y creativas para sus diseños. Acudir a proveedores
                  locales que se enfocan en materiales sostenibles y ecológicos
                  puede ser una manera efectiva de comenzar a diseñar de manera
                  sostenible, mientras se apoya a la economía local y se fomenta
                  la innovación y la creatividad en la industria del diseño.
                </p>
                <button
                  onClick={navigateClick}
                  // href="/disenoconsciente/directorio"
                  className="self-start bg-rosado font-raleway p-1 rounded-lg"
                >
                  Ver directorio de proveedores
                </button>

                <h2 className="font-extrabold font-raleway mb-5 mt-16">
                  Conclusión
                </h2>
                <p className="mb-5 font-raleway text-justify leading-8 ">
                  Al adoptar prácticas de diseño sostenible, los diseñadores
                  pueden no solo reducir su impacto ambiental y social, sino
                  también crear diseños únicos y atractivos que satisfagan las
                  necesidades de los usuarios finales.
                </p>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
}
