import { useContext } from "react";
import { Context } from "../../context/context";
import rec254 from '../../static/images/Recurso 254.png'
import rec255 from '../../static/images/Recurso 255.png'
import rec256 from '../../static/images/Recurso 256.png'
import rec257 from '../../static/images/Recurso 257.png'
import rec258 from '../../static/images/Recurso 258.png'
import volver from '../../static/images/volver.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import cafe from '../../static/images/deg_cafe.png'
import naranaja from '../../static/images/deg_naranja.png'


export default function Rebecca ({ handleClose }) {
    const { navigateToMaderasRebecca, navigateToVarios, navigateToPinturasRebecca, navigateToEmpaques } = useContext(Context);
    return (
      <>
        <div className="flex flex-col relative z-20">
        <button onClick={handleClose} className="h-16 w-40">
          <LazyLoadImage src={volver} alt="Volver" className=" float-left hover:p-3" />
        </button>
          <LazyLoadImage src={rec254} className=" lg:w-96 self-center" />
          <p className="font-raleway my-10 text-le">
            Elige el insumo del cual necesitas buscar proveedores RE
          </p>
          <div className="flex flex-col justify-center z-20 relative items-center md:flex-row">
            <button onClick={navigateToMaderasRebecca}>
              <LazyLoadImage
                src={rec255}
                alt="rebecca"
                className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
              />
            </button>
            <button onClick={navigateToVarios}>
              <LazyLoadImage
                src={rec256}
                alt="rebecca"
                className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
              />
            </button>
            <button onClick={navigateToPinturasRebecca}>
              <LazyLoadImage
                src={rec257}
                alt="rebecca"
                className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
              />
            </button>
            <button onClick={navigateToEmpaques}>
              <LazyLoadImage
                src={rec258}
                alt="rebecca"
                className="w-40 h-40 my-3 md:w-52 md:h-52 mx-10 hover:p-5"
              />
            </button>
          </div>
        </div>
        <GradienteCafe/>
        <GradienteNaranja/>
      </>
    );
  };

  function GradienteCafe() {
    return (
      <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-full md:top-20 right-0 z-0 ">
        <LazyLoadImage src={cafe} alt="" />
      </div>
    );
  }

  function GradienteNaranja() {
    return (
      <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-full md:top-1/3 right-97 z-0 ">
        <LazyLoadImage src={naranaja} alt="" />
      </div>
    );
  }