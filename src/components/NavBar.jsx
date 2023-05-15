import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="header-bar">
      <div className="fila">
        <CustomLink to="/" className="opcion">Inicio</CustomLink>
        <CustomLink to="/prensa" className="opcion">Prensa</CustomLink>
        <CustomLink to="/blog" className="opcion">Blog</CustomLink>
        <CustomLink to="/directorio" className="opcion">Directorio</CustomLink>
        <CustomLink to="/contacto" className="opcion">Contacto</CustomLink>
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
