// import Logo from './logo';
// import { Link, useLocation } from 'react-router-dom';
// import { TbZoom, TbShoppingBag } from 'react-icons/tb';
// import { RxHamburgerMenu } from 'react-icons/rx';
// import { useState } from 'react';
// import { useCart } from '../context/cart';

// export default function Navigation() {
//   const location = useLocation();
//   const [isOpenMenu, setIsOpenMenu] = useState(false);
//   const { get_items } = useCart();
//   const cartLength = get_items().length;

//   function handleOpenMenu() {
//     setIsOpenMenu(!isOpenMenu);
//     console.log(isOpenMenu);
//   }

//   function activeLink(path) {
//     const { pathname } = location;
//     const currentPath = pathname.split('/')[1] || '/';
//     return path === currentPath ? 'text-slate-900 font-bold' : 'text-gray-500';
//   }

//   return (
//     <nav className="flex sticky border-b-4 border-orange-600 z-50 top-0 left-0 bottom-0 right-0 bg-white text-lg px-6 py-4 justify-between items-center">
//       <div className="flex text-lg px-6 py-2 lg:gap-8 md:gap-6 sm:gap-4 gap-2 capitalize items-center">
//         <Logo />
//         <Link
//           className={`${activeLink('/')} hidden md:block`}
//           to="/">
//           Home
//         </Link>
//         <Link
//           className={`${activeLink('shop')} hidden md:block`}
//           to="/shop">
//           Shop
//         </Link>
//         <Link
//           className={`${activeLink('about')} hidden md:block`}
//           to="/about">
//           About Us
//         </Link>
//         <Link
//           className={`${activeLink('blog')} hidden md:block`}
//           to="/blog">
//           Blog
//         </Link>
//         <Link
//           className={`${activeLink('contact')} hidden md:block`}
//           to="/contact">
//           Contact Us
//         </Link>
//       </div>
//       <div className="flex text-2xl px-6 py-2 lg:gap-8 md:gap-6 sm:gap-4 gap-2 capitalize items-center">
//         <Link
//           className={`text-lg sm:block hidden ${activeLink('login')}`}
//           to="/login">
//           Login
//         </Link>

//         <Link
//           className={`text-lg relative sm:block hidden ${activeLink('cart')}`}
//           to="/cart">
//           <TbShoppingBag className="text-xl" />
//           {cartLength > 0 && (
//             <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//               {cartLength}
//             </div>
//           )}
//         </Link>
//         <span
//           onClick={() => handleOpenMenu()}
//           className="cursor-pointer px-6 md:hidden">
//           <RxHamburgerMenu />
//         </span>
//       </div>

//       {isOpenMenu && (
//         <div className="absolute left-0 flex items-stretch justify-center right-0 bottom-0 top-0 h-dvh w-dvw">
//           <div
//             onClick={() => handleOpenMenu()}
//             className="text-slate-50  bg-slate-800 right-8 w-4/5">
//             <p className="hover:color-red-400">X</p>
//           </div>
//           <div className="h-full w-1/2 backdrop-blur-sm"></div>
//         </div>
//       )}
//     </nav>
//   );
// }

import Logo from './logo';
import { Link, useLocation } from 'react-router-dom';
import { TbShoppingBag } from 'react-icons/tb';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { useCart } from '../context/cart';
import Cookies from 'js-cookie';

export default function Navigation() {
  const location = useLocation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { get_items } = useCart();
  const cartLength = get_items().length;

  // Check if the token exists in the cookies
  const token = Cookies.get('token');
  const isLoggedIn = !!token;

  function handleOpenMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  function activeLink(path) {
    const { pathname } = location;
    const currentPath = pathname.split('/')[1] || '/';
    return path === currentPath ? 'text-slate-900 font-bold' : 'text-gray-500';
  }

  return (
    <nav className="flex sticky border-b-4 border-orange-600 z-50 top-0 left-0 bottom-0 right-0 bg-white text-lg px-6 py-4 justify-between items-center">
      <div className="flex text-lg px-6 py-2 lg:gap-8 md:gap-6 sm:gap-4 gap-2 capitalize items-center">
        <Logo />
        <Link
          className={`${activeLink('/')} hidden md:block`}
          to="/">
          Home
        </Link>
        <Link
          className={`${activeLink('shop')} hidden md:block`}
          to="/shop">
          Shop
        </Link>
        <Link
          className={`${activeLink('about')} hidden md:block`}
          to="/about">
          About Us
        </Link>
        <Link
          className={`${activeLink('blog')} hidden md:block`}
          to="/blog">
          Blog
        </Link>
        <Link
          className={`${activeLink('contact')} hidden md:block`}
          to="/contact">
          Contact Us
        </Link>
      </div>
      <div className="flex text-2xl px-6 py-2 lg:gap-8 md:gap-6 sm:gap-4 gap-2 capitalize items-center">
        <Link
          className={`text-lg sm:block hidden ${activeLink(
            isLoggedIn ? 'profile' : 'login'
          )}`}
          to={isLoggedIn ? '/profile' : '/login'}>
          {isLoggedIn ? 'LoggedIn' : 'Login'}
        </Link>

        <Link
          className={`text-lg relative ${activeLink('cart')}`}
          to="/cart">
          <TbShoppingBag className="text-xl" />
          {cartLength > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {cartLength}
            </div>
          )}
        </Link>
        <span
          onClick={handleOpenMenu}
          className="cursor-pointer px-6 md:hidden">
          <RxHamburgerMenu />
        </span>
      </div>

      {isOpenMenu && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-40 flex flex-col items-center justify-center">
          <div className="bg-white w-4/5 rounded-lg shadow-lg py-8 text-center">
            <button
              onClick={handleOpenMenu}
              className="absolute top-4 right-4 text-slate-900 font-bold">
              X
            </button>
            <Link
              className={`block py-2 ${activeLink('/')}`}
              to="/"
              onClick={handleOpenMenu}>
              Home
            </Link>
            <Link
              className={`block py-2 ${activeLink('shop')}`}
              to="/shop"
              onClick={handleOpenMenu}>
              Shop
            </Link>
            <Link
              className={`block py-2 ${activeLink('about')}`}
              to="/about"
              onClick={handleOpenMenu}>
              About Us
            </Link>
            <Link
              className={`block py-2 ${activeLink('blog')}`}
              to="/blog"
              onClick={handleOpenMenu}>
              Blog
            </Link>
            <Link
              className={`block py-2 ${activeLink('contact')}`}
              to="/contact"
              onClick={handleOpenMenu}>
              Contact Us
            </Link>
            <Link
              className={`block py-2 ${activeLink(
                isLoggedIn ? 'profile' : 'login'
              )}`}
              to={isLoggedIn ? '/profile' : '/login'}
              onClick={handleOpenMenu}>
              {isLoggedIn ? 'LoggedIn' : 'Login'}
            </Link>
            <Link
              className={`block py-2 ${activeLink('cart')}`}
              to="/cart"
              onClick={handleOpenMenu}>
              Cart {cartLength > 0 && `(${cartLength})`}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
