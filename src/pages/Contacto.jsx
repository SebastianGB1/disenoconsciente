import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import rec371 from "../static/images/Recurso 371.png";
import rec372 from "../static/images/Recurso 372.png";
import rec373 from "../static/images/Recurso 373.png";
import rec374 from "../static/images/Recurso 374.png";
import estrella from "../static/images/estrella.png";

function Contacto() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center font-raleway mx-5 md:mx-32">
        <div className="flex flex-col justify-start md:basis-96 text-left md:mr-44">
          <h1 className="text-2xl font-bold mb-5">Ponte en contacto con RE</h1>
          <ul className="list-outside text-left items space-y-5">
            <li>
              Si eres un proveedor, te identificas como consciente y quieres
              aparecer en nuestro directorio, envíanos un correo para agendar
              una reunión y podamos concretar los detalles de la participación
            </li>
            <li>
              Si eres una persona particular, diseñador o no, y tienes alguna
              opinión o idea sobre el contenido que se presenta en RE tampoco
              dudes en contactarnos para poder compartirlo con la comunidad
            </li>
            <li>
              Y por último, si quieres estar en contacto con un área en
              específico con alguna inquietud sobre la consciencia o sobre el
              diseño en específico, comunícate con el personaje que mejor te
              pueda ayudar/asesorar
            </li>
          </ul>
        </div>
        <div className="flex flex-col basis-96 mt-10 md:mt-0">
          <LazyLoadImage src={rec371} className="my-5" />
          <LazyLoadImage src={rec372} className="my-5" />
          <LazyLoadImage src={rec373} className="my-5" />
          <div>
            <LazyLoadImage src={rec374} className="mt-5" />
            <LazyLoadImage src={estrella} className="float-right w-5" />
          </div>
        </div>
      </div>
      <p className="mx-auto w-4/5 text-justify md:w-1/2 font-raleway my-10">
        En RE estamos dispuestos y felices de crear y agrandar esta comunidad
        mediante la divulgación pero también mediante la comunicación, denos el
        gusto de atenderlo, esperamos con ansias tu correo
      </p>
      <div className="mx-auto flex items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-4xl p-5 mb-16 ">
        <div className="flex flex-row md:px-20">
          <img src={estrella} className="w-5 h-5 mr-3" />
          <p className="text-justify font-raleway text-cafe">
            Todos los datos de contacto que se presentaron anteriormente son
            ficticios y creados con propósitos académicos. Para comunicarse con
            los creadores de re, escribir al correo salomepm1712@hotmail.com o
            contactarse directamente con el número +57 3197061559
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
