import ShowCardCategory from './showCardCtg';

export default function Category() {
  return (
    <div className="px-6 py-3 overflow-x-hidden mt-6 mb-11 pb-6">
      <h1 className="my-4 text-xl font-semibold text-gray-500">
        Featured Category
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ShowCardCategory
          bg="bg-slate-950"
          h1="with"
          p="Enjoy"
          bgH1="Earphone"
          span="col-span-1"
          btn="Shop Now"
          img="../img/earphone.png"
          btnClr="bg-red-600 text-slate-50"
          txtClr="text-slate-50"
          videoSrc={'../vid/ear-piece.mp4'}
        />
        <ShowCardCategory
          bg="bg-yellow-400"
          h1="wear"
          p="New"
          span="col-span-1"
          bgH1="Gadget"
          btn="Shop Now"
          img="../img/watch.png"
          btnClr="bg-slate-200 text-yellow-600"
          txtClr="text-slate-50"
          imgWidth="w-full left-1/2 right-0 bottom-0 top-0"
          videoSrc={'../vid/watch.mp4'}
        />
        <ShowCardCategory
          videoSrc={'../vid/laptop1.mp4'}
          bg="bg-red-600"
          h1="Trends"
          span="col-span-1"
          lgSpan="lg:col-span-2"
          p="Play"
          bgH1="Laptops"
          btn="Shop Now"
          img="../img/laptops.png"
          btnClr="bg-slate-200 text-red-600"
          imgWidth="w-60 left-70 right-0 bottom-0 top-20"
          txtClr="text-slate-50"
        />
        <ShowCardCategory
          bg="bg-slate-300"
          span="col-span-1"
          lgSpan="lg:col-span-2"
          h1="Gaming"
          p="Best"
          bgH1="Console"
          btn="Shop Now"
          img="../img/console.png"
          btnClr="bg-red-600 text-slate-50"
          imgWidth="w-80 left-70 right-0 bottom-0 top-20"
          txtClr="text-slate-950"
          videoSrc={'../vid/console.mp4'}
        />
        <ShowCardCategory
          bg="bg-green-600"
          h1="Game"
          span="col-span-1"
          p="Play"
          bgH1="Oculus"
          btn="Shop Now"
          img="../img/vr.png"
          btnClr="bg-slate-50 text-green-600"
          imgWidth="w-60 left-70 right-0 bottom-0 top-25"
          txtClr="text-slate-50"
          videoSrc={'../vid/vr.mp4'}
        />
        <ShowCardCategory
          bg="bg-blue-600"
          h1="Amazon"
          p="New"
          bgH1="Speaker"
          span="col-span-1"
          btn="Shop Now"
          img="../img/speaker.png"
          btnClr="bg-slate-50 text-blue-600"
          txtClr="text-slate-50"
          imgWidth="w-full left-70 right-0 bottom-0 top-25"
          videoSrc={'../vid/speaker.mp4'}
        />
      </div>
    </div>
  );
}
