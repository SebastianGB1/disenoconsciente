import { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Context } from "../context/context";
import imagen1 from "../static/images/imagen1.png";
import { CardActions } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function PrensaModal() {
  const { showModal, modalContent, setShowModal } = useContext(Context);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalContent.tittle}
          </Typography>
          <img src={imagen1} alt="" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalContent.body}
          </Typography>
          <CardActions>
            <Button href="https://google.com">Ver mas</Button>
            <Button onClick={handleClose}>Cerrar</Button>
          </CardActions>
        </Box>
      </Modal>
    </>
  );
}
