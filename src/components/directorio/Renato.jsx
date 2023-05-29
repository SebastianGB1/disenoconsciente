import { useContext } from "react";
import { Context } from "../../context/context";
import rec117 from "../../static/images/Recurso 117.png";
import rec118 from "../../static/images/Recurso 118.png";
import rec119 from "../../static/images/Recurso 119.png";
import rec120 from "../../static/images/Recurso 120.png";
import rec121 from "../../static/images/Recurso 121.png";
import { LazyLoadImage } from "react-lazy-load-image-component";


export default function Renato({ handleClose }) {
  const {
    navigateToMaderas,
    navigateToPinturas,
    navigateToHogar,
    navigateToIluminacion,
  } = useContext(Context);
  return (
    <>
      <div className="flex flex-col">
        <button onClick={handleClose}>
          <p className="text-left font-raleway">Volver</p>
          {/* <LazyLoadImage src={volver} alt="Volver" className="w-6 mt-6 mr-6 float-right" /> */}
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
    </>
  );
}
