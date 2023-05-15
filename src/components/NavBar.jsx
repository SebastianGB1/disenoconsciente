import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="header-bar">
      <div className="fila">
        <CustomLink to="/disenocisiente/" className="opcion">Inicio</CustomLink>
        <CustomLink to="/disenocisiente/prensa" className="opcion">Prensa</CustomLink>
        <CustomLink to="/disenocisiente/blog" className="opcion">Blog</CustomLink>
        <CustomLink to="/disenocisiente/directorio" className="opcion">Directorio</CustomLink>
        <CustomLink to="/disenocisiente/contacto" className="opcion">Contacto</CustomLink>
      </div>
    </nav>
  );
}

function CustomLink({to, children, ...props}){
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({path: resolvedPath.pathname, end:true})

return (
  <div className={isActive ? "selected" : "opcion"}>
    <Link to={to} {...props} className={isActive ? "selected" : "opcion"}>{children}</Link>
  </div>
)
}
