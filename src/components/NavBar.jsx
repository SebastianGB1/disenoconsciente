import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {useState} from 'react'
import banner from '../static/images/LOGO HEAD BANNER.png'

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false)

  const visibleMenu = "items-center md:justify-between w-full md:flex md:w-auto md:order-1"
  const noVisibleMenu = "items-center md:justify-between hidden w-full md:flex md:w-auto md:order-1 "

  const clickShowMenu=()=>{
    setShowMenu(!showMenu)
  }

  return (
    <>
<nav className="bg-verde-oscuro fixed w-full z-50 top-0 left-0 ">
  {/* <p className="mt-2 font-raleway text-4xl text-blanco">RE</p> */}
  <img src={banner} alt="Logo head banner" className="w-28 pt-3 px-3 mx-auto" />
  <div className="max-w-screen-xl flex flex-wrap items-center md:justify-center mx-auto pb-2">
  <div className="flex md:order-2">
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={clickShowMenu}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" ></path></svg>
      </button>
  </div>
  <div className={showMenu ? visibleMenu : noVisibleMenu} id="navbar-sticky">
    <ul className="flex flex-col md:p-0  font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <CustomLink to="disenoconsciente/" className="font-kiona" >INICIO</CustomLink>
      </li>
      <li>
        <CustomLink to="disenoconsciente/prensa">PRENSA</CustomLink>
      </li>
      <li>
        <CustomLink to="disenoconsciente/blog" >BLOG</CustomLink>
      </li>
      <li>
        <CustomLink to="disenoconsciente/directorio" >DIRECTORIO PROVEEDORES</CustomLink>
      </li>
      <li>
        <CustomLink to="disenoconsciente/contacto">CONTACTO</CustomLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  // const styleOpcion = "block py-2 pl-3 pr-4 text-blanco rounded hover:bg-blanco md:hover:bg-transparent md:hover:blanco md:p-0 md:dark:hover:text-rosado dark:text-blanco dark:hover:bg-blanco dark:hover:text-white md:dark:hover:bg-transparent dark:border-verde-oscuro"
  const styleOpcion = "text-blanco mt-2 hover:text-rosado font-cooper text-xs 2xl:text-md lg:mx-4 xl:mx-8"

  const styleSelected = "text-rosado  font-cooper text-xs 2xl:text-md lg:mx-4 xl:mx-8"



  return (
    <div className={isActive ? styleSelected : styleOpcion}>
      <Link to={to} {...props} className={isActive ? styleSelected : styleOpcion}>
        {children}
      </Link>
    </div>
  );
}
