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
          <Route path="/" element={<Home />} className="bg-blanco"/>
          <Route path="/prensa" element={<Prensa />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/directorio" element={<Directorio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
