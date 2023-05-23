import letraRE from "../static/images/Recurso 6.png";
import imagen8 from "../static/images/Recurso 8.png";
import renato from "../static/images/Recurso 10.png";
import reinaldo from "../static/images/Recurso 11.png";
import rebeca from "../static/images/Recurso 12.png";
import regina from "../static/images/Recurso 13.png";
import { Context } from "../context/context";
import { useContext } from "react";
import HomeModal from "../components/HomeModal";
import deg_naranja from "../static/images/deg_naranja.png";
import deg_azul from "../static/images/deg_azul.png";
import deg_rosado from "../static/images/deg_rosa.png";

function Home() {
  const { setShowModalHome } = useContext(Context);

  const handleClic = () => {
    setShowModalHome(true);
  };

  return (
    <div className="mx-10 md:mx-20 lg:mx-48 mb-20">
      <HomeModal />
      <GradientNaranja />
      <GradientAzul />
      <ReTittle />
      <div className="my-32">
        <p className="text-2xl font-bold font-cooper text-verde-oscuro mb-5 relative z-20">
          ¿Qué es el diseño consciente?
        </p>
        <img
          src={imagen8}
          alt="Recurso 8"
          className="h-44 lg:h-56  float-right m-2"
        />
        <p className="z-20 font-raleway relative text-justify">
          Desde los principios del siglo XX la clase social que desempeñó un
          papel central en el crecimiento económico fue la clase media. Esta ha
          sido el caldo de cultivo de los profesionales y de aquellos que con su
          esfuerzo han contribuido al desarrollo de la sociedad industrial. Así
          pues, no hay mejor forma de estudiar las consecuencias del consumismo
          que a través de un comportamiento desencadenado por las decisiones y
          comportamientos de los consumidores. Pero aún más importante que el
          consumidor, podríamos hablar de las personas que están detrás de esta
          cadena de producción; en especial hablamos del diseñador. Este, mucho
          antes de tener el producto físico, hizo un análisis permitiendo
          comprender las verdaderas necesidades del mercado. Comienzan a existir
          alternativas que, aunque van de la mano, se diferencian de la
          sostenibilidad, y es el diseño consciente. Ese proceso ético de las
          empresas antes de crear un producto pensando en el cambio, teniendo en
          cuenta que cada uno de nosotros debe empezar a vivir una vida más
          coherente con sus ideales y su ética. De hecho, el reto ya no es
          cambiar el mundo, es cambiarnos a nosotros mismos y ver si la suma de
          todos logra el cambio global.
        </p>
      </div>
      <div className="mt-20">
        <div className="flex flex-row justify-center relative z-20">
          <p className="text-2xl font-bold text-verde-oscuro font-cooper mb-5 mr-2">
            ¿Qué es
          </p>
          <p className="text-2xl font-raleway text-verde-oscuro">RE</p>
          <p className="text-2xl font-bold text-verde-oscuro mb-5">?</p>
        </div>
        <p className="z-20 font-raleway relative text-justify">
          Este proyecto tiene como objetivo promover la adopción del diseño
          consciente, y los múltiples beneficios que este enfoque puede traer
          para empresas grandes y pequeñas, así como para la sociedad, la
          economía y el medio ambiente en general. Para lograr esto, se ha
          creado una página web que presenta la información de manera clara y
          amigable para los usuarios, pero que también tiene un diseño atractivo
          y moderno para capturar la atención de la audiencia. Apoyando esta
          idea, están Renato (diseñador de espacios), Reinaldo (diseñador de
          modas), Rebecca (diseñadora de producto) y Regina (diseñadora
          gráfica), los personajes de RE que ayudarán a guiarnos en la lectura
          de los temas.
        </p>
      </div>
      <div className="flex flex-col justify-between my-10 z-20 relative items-center md:flex-row md:my-20">
        <img
          src={renato}
          alt="renato"
          className="w-40 h-40 my-3 md:w-52 md:h-52"
        />
        <img
          src={reinaldo}
          alt="Reinaldo"
          className="w-40 h-40 my-3 md:w-52 md:h-52"
        />
        <img
          src={rebeca}
          alt="Rebeca"
          className="w-40 h-40 my-3 md:w-52 md:h-52"
        />
        <img
          src={regina}
          alt="Regina"
          className="w-40 h-40 my-3 md:w-52 md:h-52"
        />
      </div>
      <p className="z-20 font-raleway relative text-justify">
        El diseño consciente forma parte de un movimiento cada vez más creciente
        y necesario de sensibilización social, ecológica, económica y
        espiritual: cada vez somos más los diseñadores, emprendedores y empresas
        que luchamos y trabajamos por construir un mundo más responsable, más
        justo, más sostenible o más empoderado. Todavía no es una tendencia
        completamente adoptada, pero nuestro proyecto busca cambiar esto,
        trabajando en colaboración con empresas y marcas locales y nacionales
        para crear una comunidad consciente en el Área Metropolitana y los
        alrededores. Esta es la mejor manera de asegurar el éxito del proyecto,
        y de garantizar que la adopción del diseño consciente se convierta en
        una práctica común y sostenible en el futuro.
      </p>

      <GradientRosado />
      <button
        className="bg-white py-3 px-8 mt-10 text-2xl rounded-xl font-raleway font-bold hover:bg-verde-oscuro hover:text-blanco"
        onClick={handleClic}
      >
        Concepto gráfico
      </button>
    </div>
  );
}

function GradientNaranja() {
  return (
    <div className="h-80 w-80 lg:w-1/3 rounded-full absolute lg:top-28 lg:right-20 top-56 right-0 z-0">
      <img src={deg_naranja} alt="naranja" />
    </div>
  );
}
function GradientAzul() {
  return (
    <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-full md:top-3/4 lg:top-1/2 left-0 z-0">
      <img src={deg_azul} alt="azul" />
    </div>
  );
}

function GradientRosado() {
  return (
    <div className="h-80 w-80 rounded-full absolute top-102 right-0 lg:top-100 lg:right-20 z-0">
      <img src={deg_rosado} alt="rosado" />
    </div>
  );
}

function ReTittle() {
  const textStyle = "text-left font-raleway font-bold text-xs lg:text-base";
  return (
    <div className="z-10 relative">
      <p className="font-raleway font-bold text-left text-2xl lg:text-4xl mb-1">
        Diseñe, pero tambien...
      </p>

      <div className="flex flex-row">
        <img
          src={letraRE}
          alt="RE"
          className="h-32 md:h-32 lg:h-44 lg:mt-2 mr-2"
        />
        <ul>
          <li className={textStyle}>duzca</li>
          <li className={textStyle}>utilice</li>
          <li className={textStyle}>cicle</li>
          <li className={textStyle}>cupere</li>
          <li className={textStyle}>piense</li>
          <li className={textStyle}>spete</li>
          <li className={textStyle}>pita</li>
          <li className={textStyle}>sponsabilicese</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
