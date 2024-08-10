import Logo from './logo';
import { Link, useLocation } from 'react-router-dom';
import { TbZoom, TbShoppingBag } from 'react-icons/tb';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

export default function Navigation() {
  const location = useLocation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleOpenMenu() {
    setIsOpenMenu(!isOpenMenu);
    console.log(isOpenMenu);
  }

  function activeLink(path) {
    const { pathname } = location;
    const currentPath = pathname.split('/')[1] || '/';
    return path === currentPath ? 'text-slate-900 font-bold' : 'text-gray-500';
  }

  return (
    <nav className="flex sticky z-50 top-0 left-0 bottom-0 right-0 bg-white text-lg px-6 py-4 justify-between items-center">
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
          className={`text-lg sm:block hidden ${activeLink('login')}`}
          to="/login">
          Login
        </Link>
        <TbZoom />
        <TbShoppingBag />
        <span
          onClick={() => handleOpenMenu()}
          className="cursor-pointer px-6 md:hidden">
          <RxHamburgerMenu />
        </span>
      </div>

      {isOpenMenu && (
        <div className="absolute left-0 flex items-stretch justify-center right-0 bottom-0 top-0 h-dvh w-dvw">
          <div
            onClick={() => handleOpenMenu()}
            className="text-slate-50  bg-slate-800 right-8 w-4/5">
            <p className="hover:color-red-400">X</p>
          </div>
          <div className="h-full w-1/2 backdrop-blur-sm"></div>
        </div>
      )}
    </nav>
  );
}
