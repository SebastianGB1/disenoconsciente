import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../../static/images/cerrarModal.png";
import { Context } from "../../context/context";
import rec127 from "../../static/images/Recurso 127.png";
import rec129 from "../../static/images/Recurso 129.png";
import descarga from "../../static/images/Recurso_descarga.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ModalRenato() {
  const { showDicMaderas, setShowDicMaderas } = useContext(Context);

  const handleClose = () => {
    setShowDicMaderas(false);
  };
  return (
    <>
      <Modal
        open={showDicMaderas}
        onClose={handleClose}
        className="overflow-auto py-10"
      >
        <>
          {/* <div className="my-1 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 "> */}
          <div className="relative mx-auto max-w-medio sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
            {/*content*/}
            <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-blanco outline-none focus:outline-none">
              {/*header*/}
              <button onClick={handleClose}>
                <LazyLoadImage
                  src={cerrar}
                  alt="Cerrar"
                  className="w-6 mt-6 mr-6 float-right"
                />
              </button>
              <div className="flex justify-center p-5 ">
                <LazyLoadImage src={rec127} className="w-65 md:w-80" />
              </div>
              <CardMaderas1/>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
}

const CardMaderas1 = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-5xl mx-5 p-5 mb-16">
        <div className="flex flex-col justify-certer py-4 px-10">
          <h1 className="">INMUNIZAR</h1>
          <LazyLoadImage src={rec129} className="w-60 self-center"/>
          <ol className="max-w-3xl space-y-2 list-none list-image-[url(src/static/images/Recurso_descarga.png)] leading-8 text-justify font-raleway mb-16">
                  <li>
                    <p>
                    {/* <img src={descarga} className="float-left "/> */}
                      Estos materiales pueden ser menos duraderos que la madera
                      sólida y pueden requerir más mantenimiento a lo largo del
                      tiempo para mantener su integridad estructural y
                      apariencia estética.
                    </p>
                  </li>
                  <li>
                    Propensos a la deformación
                    <p>
                      O al pandeo, pueden tener limitaciones en su uso en
                      comparación con la madera. Por ejemplo, no son adecuados
                      para su uso en aplicaciones donde se requiere una gran
                      resistencia a la humedad o a los cambios de temperatura,
                      ya que pueden hincharse o deformarse con el tiempo. Esto
                      puede ser un problema en aplicaciones estructurales o de
                      soporte, donde la integridad del material es crucial para
                      la seguridad y el rendimiento del proyecto.
                    </p>
                  </li>
                  <li>
                    Calidad estética
                    <p>
                      Una de las principales desventajas de los aglomerados es
                      que tienen una menor calidad estética que la madera. Esto
                      se debe a que los aglomerados se fabrican a partir de
                      partículas de madera en lugar de tablas macizas, lo que
                      significa que no tienen una veta natural ni un aspecto
                      visual tan atractivo como la madera.
                    </p>
                  </li>
                </ol>
        </div>
      </div>
    </div>
  );
};
