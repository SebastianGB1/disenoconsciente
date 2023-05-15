import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Prensa from "./pages/Prensa";
import Blog from "./pages/Blog";
import Directorio from "./pages/Directorio";
import Contacto from "./pages/Contacto";
import "@fontsource/raleway";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/disenocisiente/" element={<Home />} />
        <Route path="/disenocisiente/prensa" element={<Prensa />} />
        <Route path="/disenocisiente/blog" element={<Blog />} />
        <Route path="/disenocisiente/directorio" element={<Directorio />} />
        <Route path="/disenocisiente/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
