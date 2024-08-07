import ShowCard from './showCard';
import ShowCardCategory from './showCardCtg';

export default function Category() {
  return (
    <div className="px-6 py-3 overflow-x-hidden mt-6 mb-11 pb-6">
      <h1 className="my-4 text-xl text-gray-500">Featured Category</h1>
      <div className="grid grid-cols-4 gap-4">
        <ShowCardCategory
          bg={'bg-slate-950'}
          h1={'with'}
          p={'Enjoy'}
          bgH1={'Earphone'}
          btn={'shop now'}
          img={'../img/earphone.png'}
          btnClr={'bg-red-600 text-slate-50'}
          txtClr={'text-slate-50'}
        />
        <ShowCardCategory
          bg={'bg-yellow-400'}
          h1={'wear'}
          p={'New'}
          bgH1={'gadget'}
          btn={'shop now'}
          img={'../img/watch.png'}
          btnClr={'bg-slate-200 text-yellow-600'}
          txtClr={'text-slate-50'}
          imgWidth="w-full left-1/2 right-0 bottom-0 top-0"
        />
        <ShowCardCategory
          bg={'bg-red-600'}
          h1={'Trends'}
          span={'col-span-2'}
          p={'play'}
          bgH1={'Laptops'}
          btn={'shop now'}
          img={'../img/laptops.png'}
          btnClr={'bg-slate-200 text-red-600'}
          imgWidth="w-60 left-70 right-0 bottom-0 top-20"
          txtClr={'text-slate-50'}
        />
      </div>
      <div className="grid mt-2 grid-cols-4 gap-4">
        <ShowCardCategory
          bg={'bg-slate-300'}
          span={'col-span-2'}
          h1={'gaming'}
          p={'best'}
          bgH1={'console'}
          btn={'shop now'}
          img={'../img/console.png'}
          btnClr={'bg-red-600 text-slate-50'}
          imgWidth="w-80 left-70 right-0 bottom-0 top-20"
          txtClr={'text-slate-950'}
        />
        <ShowCardCategory
          bg={'bg-green-600'}
          h1={'game'}
          p={'play'}
          bgH1={'Oculus'}
          btn={'shop now'}
          img={'../img/vr.png'}
          btnClr={'bg-slate-50 text-green-600'}
          imgWidth="w-60 left-70 right-0 bottom-0 top-25"
          txtClr={'text-slate-50'}
        />
        <ShowCardCategory
          bg={'bg-blue-600'}
          h1={'Amazon'}
          p={'New'}
          bgH1={'Speaker'}
          btn={'shop now'}
          img={'../img/speaker.png'}
          btnClr={'bg-slate-50 text-blue-600'}
          txtClr={'text-slate-50'}
          imgWidth="w-full left-70 right-0 bottom-0 top-25"
        />
      </div>
    </div>
  );
}
