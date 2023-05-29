import { useContext } from "react";
import Modal from "@mui/material/Modal";
import cerrar from "../../static/images/cerrarModal.png";
import { Context } from "../../context/context";
import rec117 from '../../static/images/Recurso 117.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ModalRenato() {
  const { showRenatoModal, setShowRenatoModal } = useContext(Context);

  const handleClose = () => {
    setShowRenatoModal(false);
  };
  return (
    <>
      <Modal
        open={showRenatoModal}
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
            
             <LazyLoadImage src={rec117}/>
              </div>
                
             
            </div>
          </div>
          {/* </div> */}
        </>
      </Modal>
    </>
  );
}
