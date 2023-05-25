import CardTelasPet from '../components/CardTelasPet'
import CardSustituyendoMadera from '../components/CardSustituyendoMadera'
import CardSostenible from '../components/CardSostenible'
import CardImpacto from '../components/CardImpacto'
import ModalTelasPet from '../components/ModalTelasPet'
import ModalMadera from '../components/ModalMadera'
import ModalSostenibilidad from '../components/ModalSostenibilidad'
import ModalImpacto from '../components/ModalImpacto'
import deg_rosado from '../static/images/deg_rosa.png'
import deg_azul from '../static/images/deg_azul.png'
import deg_naranja from '../static/images/deg_naranja.png'
import deg_verde from '../static/images/deg_verde_oscuro.png'

function Prensa() {
  return (
    <div className='flex flex-col items-center mb-20'>
      <CardTelasPet />
      <CardSustituyendoMadera/>
      <CardSostenible/>
      <CardImpacto/>
      <ModalTelasPet/>
      <ModalMadera/>
      <ModalSostenibilidad/>
      <ModalImpacto/>
      <GradientRosado/>
      <GradientAzul/>
      <GradientNaranja/>
      <GradientVerde/>
    </div>
  )
}

function GradientRosado() {
  return (
    <div className="h-80 w-80 lg:w-2/5 rounded-full absolute lg:top-0 lg:right-10 top-98 right-0 z-0">
      <img src={deg_rosado} alt="rosa" />
    </div>
  );
}
function GradientAzul() {
  return (
    <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-full md:top-3/4 lg:top-1/2 left-0 z-0 ">
      <img src={deg_azul} alt="azul" />
    </div>
  );
}

function GradientNaranja() {
  return (
    <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-105 md:top-3/4 lg:top-103 md:right-24 rigth-0 z-0">
      <img src={deg_naranja} alt="naranaja" />
    </div>
  );
}

function GradientVerde() {
  return (
    <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-102 md:top-3/4 lg:top-100 right-44 md:right-97 z-0 opacity-50">
      <img src={deg_verde} alt="verde" />
    </div>
  );
}


export default Prensa