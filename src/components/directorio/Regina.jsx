import { useContext } from "react";
import { Context } from "../../context/context";
import rec309 from '../../static/images/Recurso 309.png'
import rec308 from '../../static/images/Recurso 308.png'

import rec310 from '../../static/images/Recurso 310.png'
import rec311 from '../../static/images/Recurso 311.png'
import rec312 from '../../static/images/Recurso 312.png'

import volver from '../../static/images/volver.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import verde_oscuro from '../../static/images/deg_verde_oscuro.png'
import verde_claro from '../../static/images/deg_verde_claro.png'
import cafe from '../../static/images/deg_cafe.png'


export default function Regina ({ handleClose }) {
    const { navigateToLitografia, navigateToPapeles, navigateToEmpaquesRegina, navigateToMarca } = useContext(Context);
    return (
      <>
        <div className="flex flex-col relative z-20">
        <button onClick={handleClose} className="h-16 w-40">
          <LazyLoadImage src={volver} alt="Volver" className=" float-left hover:p-3" />
        </button>
          <LazyLoadImage src={rec308} className=" lg:w-96 self-center" />
          <p className="font-raleway my-10 text-le">
            Elige el insumo del cual necesitas buscar proveedores RE
          </p>
          <div className="flex flex-col justify-center z-20 relative items-center md:flex-row">
            <button onClick={navigateToLitografia}>
              <LazyLoadImage
                src={rec309}
                alt="rebecca"
                className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
              />
            </button>
            <button onClick={navigateToPapeles}>
              <LazyLoadImage
                src={rec310}
                alt="rebecca"
                className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
              />
            </button>
            <button onClick={navigateToEmpaquesRegina}>
              <LazyLoadImage
                src={rec311}
                alt="rebecca"
                className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
              />
            </button>
            <button onClick={navigateToMarca}>
              <LazyLoadImage
                src={rec312}
                alt="rebecca"
                className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
              />
            </button>
          </div>
        </div>
        <GradienteVerdeOscuro/>
        <GradienteVerdeClaro/>
        <GradienteVerdeCafe/>
      </>
    );
  };

  function GradienteVerdeOscuro() {
    return (
      <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-full md:top-0 right-0 z-0 ">
        <LazyLoadImage src={verde_oscuro} alt="" />
      </div>
    );
  }

  function GradienteVerdeClaro() {
    return (
      <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-full md:top-44 left-0 z-0 ">
        <LazyLoadImage src={verde_claro} alt="" />
      </div>
    );
  }

  function GradienteVerdeCafe() {
    return (
      <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-full md:top-96 left-0 md:left-96 z-0 ">
        <LazyLoadImage src={cafe} alt="" />
      </div>
    );
  }