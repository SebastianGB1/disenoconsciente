import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Prensa from "./pages/Prensa";
import Blog from "./pages/Blog";
import Directorio from "./pages/Directorio";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <>
      <NavBar />
      <div className="mt-32">
        <Routes>
          <Route path="disenoconsiente/" element={<Home />} className="bg-blanco"/>
          <Route path="disenoconsiente/prensa" element={<Prensa />} />
          <Route path="disenoconsiente/blog" element={<Blog />} />
          <Route path="disenoconsiente/directorio" element={<Directorio />} />
          <Route path="disenoconsiente/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
