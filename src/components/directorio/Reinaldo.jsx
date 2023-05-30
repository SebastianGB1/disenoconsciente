import { useContext } from "react";
import { Context } from "../../context/context";
import rec175 from '../../static/images/Recurso 175.png'
import rec176 from '../../static/images/Recurso 176.png'
import rec177 from '../../static/images/Recurso 177.png'
import rec178 from '../../static/images/Recurso 178.png'
import rec179 from '../../static/images/Recurso 179.png'
import volver from '../../static/images/volver.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import verde from '../../static/images/deg_verde_oscuro.png'
import cafe from '../../static/images/deg_cafe.png'



export default function Reinaldo ({ handleClose }) {
    const { navigateToTelas, navigateToFibras, navigateToTransformacion, navigateToInsumos } = useContext(Context);
    return (
      <>
        <div className="flex flex-col relative z-20">
        <button onClick={handleClose} className="h-16 w-40">
          <LazyLoadImage src={volver} alt="Volver" className=" float-left hover:p-3" />
        </button>
          <LazyLoadImage src={rec175} className=" lg:w-96 self-center" />
          <p className="font-raleway my-10 text-le">
            Elige el insumo del cual necesitas buscar proveedores RE
          </p>
          <div className="flex flex-col justify-center z-20 relative items-center md:flex-row">
            <button onClick={navigateToTelas}>
              <LazyLoadImage
                src={rec176}
                alt="reinaldo"
                className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
              />
            </button>
            <button onClick={navigateToFibras}>
              <LazyLoadImage
                src={rec177}
                alt="reinaldo"
                className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
              />
            </button>
            <button onClick={navigateToTransformacion}>
              <LazyLoadImage
                src={rec178}
                alt="reinaldo"
                className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
              />
            </button>
            <button onClick={navigateToInsumos}>
              <LazyLoadImage
                src={rec179}
                alt="reinaldo"
                className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
              />
            </button>
          </div>
        </div>
        <GradienteVerde/>
        <GradienteCafe/>
      </>
    );
  };


  
function GradienteVerde() {
  return (
    <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-full md:top-1/3 right-0 z-0 ">
      <LazyLoadImage src={verde} alt="" />
    </div>
  );
}

  
function GradienteCafe() {
  return (
    <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-full md:top-10 left-0 z-0 ">
      <LazyLoadImage src={cafe} alt="" />
    </div>
  );
}