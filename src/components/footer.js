import { Link } from 'react-router-dom';
import { LuFacebook } from 'react-icons/lu';
import { CgInstagram, CgMail } from 'react-icons/cg';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 mt-11 text-lg text-slate-50 py-10 px-8 min-h-10">
      <div className="flex flex-col gap-8 sm:grid-cols-4 sm:grid">
        <form>
          <Link to={'/'}>
            <h1 className="text-4xl capitalize font-bold text-red-400">
              DGadget Online Store
            </h1>
          </Link>

          <label className="flex flex-col gap-4 items-start justify-center">
            <input
              placeholder="Email"
              className="outline-none bg-transparent border-b-2 py-4 px-2"
            />
            <button className="water-ring-button relative flex border rounded-full px-6 py-2">
              Subscribe
            </button>
            <p className="font-thin text-gray-300">
              Get monthly updates and free resources.
            </p>
          </label>
        </form>
        <div>
          <h2 className="text-2xl mb-4 capitalize ">Contact Us</h2>
          <span className="flex flex-col text-gray-300 gap-2 items-start justify-center">
            <p>Phone: +1 (0) 000 0000 001</p>
            <p>Email: yourmail@example.com</p>
            <p>Address: 1234 Street Name City, AA 99999</p>
          </span>

          <div className=" flex items-center justify-start gap-2 mt-6">
            <IconWrapper icon={LuFacebook} />
            <IconWrapper icon={CgInstagram} />
            <IconWrapper icon={FaXTwitter} />
            <IconWrapper icon={CgMail} />
            <IconWrapper icon={FaTiktok} />
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-4 capitalize ">Quick Link</h2>
          <span className="flex flex-col text-gray-300 gap-2 items-start justify-center">
            <p>About Us</p>
            <p>Blog Post</p>
            <p>New Arrivals</p>
          </span>
        </div>
        <div>
          <h2 className="text-2xl mb-4 capitalize ">Recent</h2>
          <span className="flex flex-col text-gray-300 gap-2 items-start justify-center">
            <p>Catalog</p>
            <p>Laptops</p>
            <p>Gaming console</p>
          </span>
        </div>
      </div>
    </footer>
  );
}

function IconWrapper({ icon: Icon }) {
  return (
    <Link to={'/'}>
      <span className="flex items-center w-auto h-auto rounded-full  justify-center py-2 px-2 border border-gray-400">
        <Icon />
      </span>
    </Link>
  );
}
