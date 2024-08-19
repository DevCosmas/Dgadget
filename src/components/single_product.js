import { FaEyeSlash } from 'react-icons/fa';
import API_URL from '../constant/api';
import { Link } from 'react-router-dom';
import { CiStar } from 'react-icons/ci';
import { useCart } from '../context/cart';

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useState } from 'react';

// export default function SingleProductcomp({ product, close }) {
//   const [qty, setQty] = useState(1);
//   function handleQtyIncrease(e) {
//     e.preventDefault();
//     setQty((prev) => prev + 1);
//   }
//   function handleQtyDecrease(e) {
//     e.preventDefault();
//     if (qty <= 1) {
//       setQty(1);
//     } else {
//       setQty((prev) => prev - 1);
//     }
//   }
//   return (
//     <div className=" px-4 sm:px-0 fixed left-0 right-0 bottom-0 top-0 h-dvh z-50 backdrop-blur-sm flex items-center justify-center">
//       <div className=" w-full sm:w-4/5 mx-auto bg-slate-50 rounded-md py-4 px-4 min-h-70">
//         <div className="flex justify-between px-4 py-2">
//           <Link
//             className=" font-bold text-2xl text-red-400"
//             to={'/'}>
//             DGadget
//           </Link>
//           <FaEyeSlash
//             onClick={close}
//             className="right-30 cursor-pointer hover:text-red-500"
//           />
//         </div>
//         <div className="flex-col flex md:flex-row sm:items-start py-2  gap-6 mt-4  ">
//           <span className="sm:w-1/2 w-full">
//             <div>
//               <img
//                 src={`${API_URL}/images/${product.image}`}
//                 alt={product.name}
//               />
//             </div>
//           </span>
//           <span className="sm:w-1/2 w-full">
//             <h2 className="font-bold text-2xl uppercase mb-2">
//               {product.name}
//             </h2>
//             <p>{product.description}</p>

//             <div className="py-8 ">
//               <ReviewStar />
//             </div>
//             <p className="text-green-600 text-3xl font-bold">
//               $ {product.price}
//             </p>
//             <div>
//               <span className="bg-white flex items-center shadow-sm rounded-md mt-4 gap-4 justify-between py-2 px-4 text-xl min-w-60">
//                 <p
//                   className="py-4 cursor-pointer text-4xl"
//                   onClick={(e) => handleQtyDecrease(e)}>
//                   -
//                 </p>
//                 <input
//                   value={qty}
//                   type="text"
//                   className="border w-40 text-center py-4 font-bold"
//                 />

//                 <p
//                   onClick={(e) => handleQtyIncrease(e)}
//                   className="py-4 cursor-pointer text-4xl">
//                   +
//                 </p>
//               </span>
//             </div>
//             <div className="w-full flex items-center justify-center py-8 ">
//               <button className="bg-green-500 w-4/5 text-center py-2 text-slate-50">
//                 Add to Cart
//               </button>
//             </div>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default function SingleProductcomp({ product, close }) {
//   const [qty, setQty] = useState(1);

//   return (
//     <>
//       <div className="fixed inset-0 z-50 bg-black bg-opacity-50 z-40"></div>
//       <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
//         <div className="bg-slate-50 rounded-md shadow-lg w-full sm:w-4/5 max-w-screen-lg p-4 animate-fade-in-down">
//           <div className="flex justify-between items-center mb-6">
//             <Link
//               className="font-bold text-2xl text-red-400"
//               to={'/'}>
//               DGadget
//             </Link>
//             <FaEyeSlash
//               onClick={close}
//               className="text-xl cursor-pointer hover:text-red-600 transition-colors"
//               aria-label="Close"
//             />
//           </div>
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="md:w-1/2 flex justify-center">
//               <img
//                 src={`${API_URL}/images/${product.image}`}
//                 alt={product.name}
//                 className="w-full h-auto max-w-xs object-cover rounded-lg"
//               />
//             </div>
//             <div className="md:w-1/2">
//               <h2 className="font-bold text-2xl uppercase mb-2">
//                 {product.name}
//               </h2>
//               <p className="text-gray-700 mb-4">{product.description}</p>

//               <div className="py-4">
//                 <ReviewStar rating={product.rating || 4.5} />
//               </div>
//               <p className="text-green-600 text-3xl font-bold mb-4">
//                 ${product.price}
//               </p>
//               <div className="flex items-center gap-4 mb-6">
//                 <button
//                   className="text-4xl px-4 py-2 bg-white border rounded-md"
//                   onClick={() => setQty(Math.max(1, qty - 1))}
//                   aria-label="Decrease quantity">
//                   -
//                 </button>
//                 <input
//                   type="text"
//                   value={qty}
//                   onChange={(e) => setQty(Number(e.target.value))}
//                   className="w-16 text-center font-bold border rounded-md py-2"
//                   aria-label="Quantity"
//                 />
//                 <button
//                   className="text-4xl px-4 py-2 bg-white border rounded-md"
//                   onClick={() => setQty(qty + 1)}
//                   aria-label="Increase quantity">
//                   +
//                 </button>
//               </div>
//               <button className="bg-green-500 hover:bg-green-600 transition-colors text-white font-bold w-full sm:w-4/5 py-3 rounded-md text-center">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default function SingleProductcomp({ product, close }) {
//   const [qty, setQty] = useState(1);

//   return (
//     <>
//       {/* Backdrop */}
//       <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

//       {/* Modal */}
//       <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
//         <div className="bg-slate-50 rounded-md shadow-lg w-full sm:w-4/5 max-w-screen-lg p-4 animate-fade-in-down">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-6">
//             <Link
//               className="font-bold text-2xl text-red-400"
//               to={'/'}>
//               DGadget
//             </Link>
//             <FaEyeSlash
//               onClick={close}
//               className="text-xl cursor-pointer hover:text-red-600 transition-colors"
//               aria-label="Close"
//             />
//           </div>

//           {/* Content */}
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="md:w-1/2 flex justify-center">
//               <img
//                 src={`${API_URL}/images/${product.image}`}
//                 alt={product.name}
//                 className="w-full h-auto max-w-xs object-cover rounded-lg"
//               />
//             </div>
//             <div className="md:w-1/2">
//               <h2 className="font-bold text-2xl uppercase mb-2">
//                 {product.name}
//               </h2>
//               <p className="text-gray-700 mb-4">{product.description}</p>

//               <div className="py-4">
//                 <ReviewStar rating={product.rating || 4.5} />
//               </div>
//               <p className="text-green-600 text-3xl font-bold mb-4">
//                 ${product.price}
//               </p>
//               <div className="flex items-center gap-4 mb-6">
//                 <button
//                   className="text-4xl px-4 py-2 bg-white border rounded-md"
//                   onClick={() => setQty(Math.max(1, qty - 1))}
//                   aria-label="Decrease quantity">
//                   -
//                 </button>
//                 <input
//                   type="text"
//                   value={qty}
//                   onChange={(e) => setQty(Number(e.target.value))}
//                   className="w-16 text-center font-bold border rounded-md py-2"
//                   aria-label="Quantity"
//                 />
//                 <button
//                   className="text-4xl px-4 py-2 bg-white border rounded-md"
//                   onClick={() => setQty(qty + 1)}
//                   aria-label="Increase quantity">
//                   +
//                 </button>
//               </div>
//               <button className="bg-green-500 hover:bg-green-600 transition-colors text-white font-bold w-full sm:w-4/5 py-3 rounded-md text-center">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default function SingleProductcomp({ product, close, add_to_cart }) {
  const [qty, setQty] = useState(1);
  // const { add_to_cart } = useCart();
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto">
        <div className="bg-slate-50 rounded-md shadow-lg w-full sm:w-4/5 max-w-screen-lg p-4 max-h-screen overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <Link
              className="font-bold text-2xl text-red-400"
              to={'/'}>
              DGadget
            </Link>
            <FaEyeSlash
              onClick={close}
              className="text-xl cursor-pointer hover:text-red-600 transition-colors"
              aria-label="Close"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 flex justify-center">
              <img
                src={`${API_URL}/images/${product.image}`}
                alt={product.name}
                className="w-full h-auto max-w-xs object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-bold text-2xl uppercase mb-2">
                {product.name}
              </h2>
              <p className="text-gray-700 mb-4">{product.description}</p>

              <div className="py-4">
                <ReviewStar rating={product.rating || 4.5} />
              </div>
              <p className="text-green-600 text-3xl font-bold mb-4">
                ${product.price}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <button
                  className="text-4xl px-4 py-2 bg-white border rounded-md"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  aria-label="Decrease quantity">
                  -
                </button>
                <input
                  type="text"
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="w-16 text-center font-bold border rounded-md py-2"
                  aria-label="Quantity"
                />
                <button
                  className="text-4xl px-4 py-2 bg-white border rounded-md"
                  onClick={() => setQty(qty + 1)}
                  aria-label="Increase quantity">
                  +
                </button>
              </div>
              <button
                onClick={add_to_cart(product)}
                className="bg-green-500 hover:bg-green-600 transition-colors text-white font-bold w-full sm:w-4/5 py-3 rounded-md text-center">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ReviewStar({ rating = 4.5 }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = Math.floor(5 - rating);

  return (
    <div className="flex items-center gap-4">
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar
          key={`full-${index}`}
          className="text-yellow-500"
        />
      ))}

      {halfStar && <FaStarHalfAlt className="text-yellow-500" />}

      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar
          key={`empty-${index}`}
          className="text-yellow-500"
        />
      ))}
    </div>
  );
}
