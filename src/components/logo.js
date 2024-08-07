import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link
      className=" font-bold text-2xl text-red-400"
      to={'/'}>
      DGadget
    </Link>
  );
}
