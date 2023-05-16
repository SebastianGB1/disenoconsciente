import React from "react";

function Home() {
  return (
    <div className="mx-32">
      <GradientNaranja />
      <GradientAzul />
      <ReTittle />
      <div className="mt-10">
        <p className="text-2xl font-bold text-verde-oscuro mb-5">
          ¿Qué es el diseño consciente?
        </p>
        <p className="z-20 font-raleway relative text-justify">
          Desde los principios del siglo XX la clase social que desempeñó un
          papel
          <img
            src="src/assets/Recurso 8.png"
            alt="Recurso 8"
            className="h-60 float-right m-2"
            />
          central en el crecimiento económico fue la clase media. Esta ha sido
          el caldo de cultivo de los profesionales y de aquellos que con su
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
        <div className="flex flex-row justify-center">
          <p className="text-2xl font-bold text-verde-oscuro mb-5 mr-2">
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
      <div className="flex flex-row justify-between my-10 z-20 relative">
        <img src="src/assets/Recurso 10.png" alt="renato" className="w-40 h-40"/>
        <img src="src/assets/Recurso 11.png" alt="Reinaldo" className="w-40 h-40"/>
        <img src="src/assets/Recurso 12.png" alt="Rebeca" className="w-40 h-40"/>
        <img src="src/assets/Recurso 13.png" alt="Regina" className="w-40 h-40"/>
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
        <GradientRosado/>
        <button className="bg-white py-3 px-8 mt-10 text-2xl rounded-xl font-raleway font-bold hover:bg-verde-oscuro hover:text-blanco">Concepto grafico</button>
    </div>
  );
}

function GradientNaranja() {
  return (
    <div className="h-96 w-96 gradient-naranja rounded-full absolute top-28 right-20 z-0"></div>
  );
}
function GradientAzul() {
  return (
    <div className="h-96 w-96 gradient-azul rounded-full absolute top-3/4 left-20 z-0"></div>
  );
}

function GradientRosado() {
  return (
    <div className="h-96 w-96 gradient-rosado rounded-full absolute top-100 right-20 z-0"></div>
  );
}

function ReTittle() {
  return (
    <div className="w-96 z-10 relative mt-3">
      <p className="font-raleway font-bold text-2xl">Diseñe, pero tambien...</p>
      <div className="flex flex-row">
        <p className="font-raleway text-9xl text-rosado ml-16">RE</p>
        <ul className="list-">
          <li className="text-left font-kiona font-bold">duzca</li>
          <li className="text-left font-kiona font-bold">utilice</li>
          <li className="text-left font-kiona font-bold">cicle</li>
          <li className="text-left font-kiona font-bold">cupere</li>
          <li className="text-left font-kiona font-bold">piense</li>
          <li className="text-left font-kiona font-bold">spete</li>
          <li className="text-left font-kiona font-bold">pita</li>
          <li className="text-left font-kiona font-bold">sponsabilicese</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
