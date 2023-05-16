import {useContext} from "react";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Context } from "../context/context";
import imagen1 from "../static/images/imagen1.png";

export default function PrensaCard() {
  const { setShowModal, setModalContent } =
    useContext(Context);

 const handleClick = () => {
    setShowModal(true);
    setModalContent({ tittle: "Prueba", body: "Se supone que aca va descripcion mas larga del articulo. El boton \"Ver mas\" reenvia a google por ahora" });
  };

  return (
    <div>
      <Card sx={{ maxWidth: 800 }} className="card"> 
        <div className="card-row">
          <CardActionArea
            onClick={handleClick}
          >
            <CardMedia
              component="img"
              height="140"
              image={imagen1}
              alt="imagen1"
            />
            {/* <img src={imagen1} alt="img" /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Articulo
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                laboriosam facilis, consequuntur eveniet amet obcaecati
                reiciendis explicabo ad architecto. Saepe, laudantium quos?
                Deleniti velit cupiditate provident minus, veritatis voluptatum
                tenetur.
              </Typography>
            </CardContent>
          </CardActionArea>
        </div>
        {/* <CardActions>
            <Button size="small" color="primary" href='http://google.com'>
              Ver más
            </Button>
          </CardActions> */}
      </Card>
    </div>
  );
}
