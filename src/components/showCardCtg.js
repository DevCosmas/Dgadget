import { Link } from 'react-router-dom';

export default function ShowCardCategory({
  txtClr,
  bg,
  bgH1,
  h1,
  p,
  btn,
  img,
  btnClr,
  videoSrc,
  imgWidth = 'w-80 left-50 right-0 bottom-0 top-0',
  animate = null,
  span = null,
  lgSpan = null,
}) {
  return (
    <Link
      to={'/shop'}
      className={`flip-container relative ${span}  ${lgSpan}`}>
      <div className={`${bg} flip-inner `}>
        <div className="flip-front relative rounded-md h-96 flex gap-2 flex-col justify-center items-start px-11 py-8 ">
          <p className={`font-bold text-sm text-left capitalize ${txtClr}`}>
            {p}
          </p>
          <h1 className={`font-bold text-2xl capitalize ${txtClr}`}>{h1}</h1>
          <h1 className="bg-gradient-to-r from-slate-100 opacity-50 to-slate-50 bg-clip-text text-transparent lg:font-extrabold w-full lg:w-90 font-bold uppercase text-4xl lg:text-5xl">
            {bgH1}
          </h1>
          <Link
            className={`${btnClr} w-40 mt-8 text-sm rounded-full px-2 py-2 flex items-center justify-center `}
            to={'/shop'}>
            {btn}
          </Link>
          <div className={`absolute ${imgWidth} scale-75  sm:scale-100`}>
            <img
              src={img}
              alt={bgH1}
              className={animate}
            />
          </div>
        </div>
        <div className="flip-back relative">
          <video
            controls
            autoPlay
            muted
            className="w-full h-full object-cover">
            <source
              src={videoSrc}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Link>
  );
}
