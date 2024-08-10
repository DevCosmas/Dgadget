import { LiaShippingFastSolid } from 'react-icons/lia';
import { CiMoneyBill } from 'react-icons/ci';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { IoWalletOutline } from 'react-icons/io5';
import FeaturedProduct from './featureProd';

export default function MainSection() {
  return (
    <main className="py-12 px-6">
      <div className="w-full grid grid-cols-2 sm:flex sm:justify-between sm:items-center sm:mx-auto">
        <Service
          icon={LiaShippingFastSolid}
          h1={'Free Shipping'}
          p={'Free Shipping On All Orders'}
        />
        <Service
          icon={CiMoneyBill}
          h1={'Money Guarantee'}
          p={'30 days money chargeback'}
        />
        <Service
          icon={TfiHeadphoneAlt}
          h1={'Online Support 24/7'}
          p={'Technical Support 24/7'}
        />
        <Service
          icon={IoWalletOutline}
          h1={'Secure Payment'}
          p={'All card accepted'}
        />
      </div>
      {/* <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-4 sm:flex sm:justify-between sm:items-center sm:mx-auto">
        <Service
          icon={LiaShippingFastSolid}
          h1={'Free Shipping'}
          p={'Free Shipping On All Orders'}
        />
        <Service
          icon={CiMoneyBill}
          h1={'Money Guarantee'}
          p={'30 days money chargeback'}
        />
        <Service
          icon={TfiHeadphoneAlt}
          h1={'Online Support 24/7'}
          p={'Technical Support 24/7'}
        />
        <Service
          icon={IoWalletOutline}
          h1={'Secure Payment'}
          p={'All cards accepted'}
        />
      </div> */}

      <div className="bg-gray-50 px-2 rounded-md flex flex-col items-center justify-center">
        <h1 className="text-2xl mt-6 text-gray-600">New Arrival</h1>
        <FeaturedProduct />
      </div>

      {/* <div className="flip-container relative ">
        <div className="flip-inner absolute">
          <div className="flip-front absolute bg-green-500 text-slate-50">
            {' '}
            front
          </div>
          <div className="flip-back absolute text-slate-50 bg-black">back</div>
        </div>
      </div> */}
    </main>
  );
}

function Service({ icon: Icon, h1, p }) {
  return (
    <div className="flex items-center p-6 bg-white text-lg">
      <div className="text-3xl text-red-600">
        <Icon />
      </div>
      <div className="ml-4">
        <h1 className="text-xl font-bold text-gray-900">{h1}</h1>
        <p className="text-gray-600">{p}</p>
      </div>
    </div>
  );
}
