import { useContext } from "react";
import { Context } from "../../context/context";
import rec117 from "../../static/images/Recurso 117.png";
import rec118 from "../../static/images/Recurso 118.png";
import rec119 from "../../static/images/Recurso 119.png";
import rec120 from "../../static/images/Recurso 120.png";
import rec121 from "../../static/images/Recurso 121.png";
import volver from '../../static/images/volver.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import rosado from '../../static/images/deg_rosa.png'
import verde_claro from '../../static/images/deg_verde_claro.png'


export default function Renato({ handleClose }) {
  const {
    navigateToMaderas,
    navigateToPinturas,
    navigateToHogar,
    navigateToIluminacion,
  } = useContext(Context);
  return (
    <>
      <div className="flex flex-col relative z-20">
        <button onClick={handleClose} className="h-16 w-40">
          <LazyLoadImage src={volver} alt="Volver" className=" float-left hover:p-3" />
        </button>
        <LazyLoadImage src={rec117} className=" lg:w-96 self-center" />
        <p className="font-raleway my-10 text-le">
          Elige el insumo del cual necesitas buscar proveedores RE
        </p>
        <div className="flex flex-col justify-center z-20 relative items-center md:flex-row">
          <button onClick={navigateToMaderas}>
            <LazyLoadImage
              src={rec118}
              alt="renato"
              className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
            />
          </button>
          <button onClick={navigateToPinturas}>
            <LazyLoadImage
              src={rec119}
              alt="renato"
              className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
            />
          </button>
          <button onClick={navigateToIluminacion}>
            <LazyLoadImage
              src={rec120}
              alt="renato"
              className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
            />
          </button>
          <button onClick={navigateToHogar}>
            <LazyLoadImage
              src={rec121}
              alt="renato"
              className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
            />
          </button>
        </div>
      </div>
      <GradientRosado/>
      <GradienteVerde/>
    </>
  );
}

function GradientRosado() {
  return (
    <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-full md:top-10 right-40 z-0 ">
      <LazyLoadImage src={rosado} alt="" />
    </div>
  );
}

function GradienteVerde() {
  return (
    <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-full md:top-1/3 left-0 z-0 ">
      <LazyLoadImage src={verde_claro} alt="" />
    </div>
  );
}
