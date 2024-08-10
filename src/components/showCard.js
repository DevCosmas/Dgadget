import { Link } from 'react-router-dom';

export default function ShowCard({
  txtClr,
  bg,
  bgH1,
  h1,
  p,
  btn,
  img,
  btnClr,
  imgWidth = 'w-80 left-50 right-0 bottom-0 top-0',
  animate = null,
}) {
  return (
    <div
      className={`relative rounded-md h-96 flex gap-2 flex-col justify-center px-11 py-8  ${bg}`}>
      <p className={`font-bold text-sm capitalize ${txtClr}`}>{p}</p>
      <h1 className={`font-bold text-4xl capitalize ${txtClr}`}>{h1}</h1>

      <h1 className="from-slate-100 to-slate-50 bg-gradient-to-r bg-clip-text text-transparent lg:font-extrabold w-full lg:w-90 font-bold uppercase text-5xl lg:text-8xl">
        {bgH1}
      </h1>
      <Link
        className={`${btnClr} w-40 mt-8 text-sm rounded-full px-2 py-2 flex items-center justify-center `}
        to={'/shop'}>
        {btn}
      </Link>
      <div className={`absolute ${imgWidth} `}>
        <img
          src={img}
          alt={bgH1}
          className={animate}
        />
      </div>
    </div>
  );
}
