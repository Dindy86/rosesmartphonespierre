import CartWidget from "./CartWidget";

const NavBar = ()=> {
  return(
    <header className="text-gray-600 body-font bg-indigo-800 text-white text-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-white text-lg">RoseSmartphones</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-gray-900 text-lg">Inicio</a>
          <a href="/" className="mr-5 hover:text-gray-900 text-lg">Iphone</a>
          <a href="/"className="mr-5 hover:text-gray-900 text-lg">Samsung</a>
          <a href="/" className="mr-5 hover:text-gray-900 text-lg">Xiaomi</a>
        </nav>
        <CartWidget/>
      </div>
    </header>
  )
}

export default NavBar;