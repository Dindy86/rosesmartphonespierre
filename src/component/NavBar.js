import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = ()=> {
  return(
    <header className="text-gray-600 body-font bg-indigo-800 text-white text-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-white text-lg">RoseSmartphones</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to ="/" className="mr-5 hover:text-gray-900 text-lg text-white">Inicio</Link>
          <Link to ="marca/Apple" className="mr-5 hover:text-gray-900 text-lg text-white">Apple</Link>
          <Link to ="marca/Samsung"className="mr-5 hover:text-gray-900 text-lg text-white">Samsung</Link>
          <Link to ="marca/Xiaomi" className="mr-5 hover:text-gray-900 text-lg text-white">Xiaomi</Link>
        </nav>
        <CartWidget/>
      </div>
    </header>
  )
}

export default NavBar;