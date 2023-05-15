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
        <Route path="/" element={<Home />} />
        <Route path="/prensa" element={<Prensa />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
