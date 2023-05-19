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
          <Route path="disenoconsciente/" element={<Home />} className="bg-blanco"/>
          <Route path="disenoconsciente/prensa" element={<Prensa />} />
          <Route path="disenoconsciente/blog" element={<Blog />} />
          <Route path="disenoconsciente/directorio" element={<Directorio />} />
          <Route path="disenoconsciente/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
