import Logo from './logo';
import { Link, useLocation } from 'react-router-dom';
import { TbZoom, TbShoppingBag } from 'react-icons/tb';

export default function Navigation() {
  const location = useLocation();

  function activeLink(path) {
    const { pathname } = location;
    const currentPath = pathname.split('/')[1] || '/';
    return path === currentPath ? 'text-slate-900 font-bold' : 'text-gray-500';
  }

  return (
    <nav className="flex text-lg px-6 py-4 justify-between items-center">
      <div className="flex text-lg px-6 py-2 lg:gap-8 md:gap-6 sm:gap-4 gap-2 capitalize items-center">
        <Logo />
        <Link
          className={activeLink('/')}
          to="/">
          Home
        </Link>
        <Link
          className={activeLink('shop')}
          to="/shop">
          Shop
        </Link>
        <Link
          className={activeLink('about')}
          to="/about">
          About Us
        </Link>
        <Link
          className={activeLink('blog')}
          to="/blog">
          Blog
        </Link>
        <Link
          className={activeLink('contact')}
          to="/contact">
          Contact Us
        </Link>
      </div>
      <div className="flex text-2xl px-6 py-2 lg:gap-8 md:gap-6 sm:gap-4 gap-2 capitalize items-center">
        <Link
          className={`text-lg ${activeLink('login')}`}
          to="/login">
          Login
        </Link>
        <TbZoom />
        <TbShoppingBag />
      </div>
    </nav>
  );
}
