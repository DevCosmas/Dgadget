import ShowCard from './showCard';

export default function HeroSection() {
  return (
    <div className="px-6 py-2">
      <ShowCard
        bg={'bg-gray-300'}
        h1={'wireless'}
        bgH1={'HeadPhone'}
        btn={'Shop Now'}
        p={'Beats Solo'}
        img={'../img/headphone.png'}
        btnClr={'bg-red-600 text-slate-50'}
        textClr={'text-slate-950'}
        animate={'animated-image'}
      />
    </div>
  );
}
