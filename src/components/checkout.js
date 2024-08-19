// import React, { useState } from 'react';
// import axios from 'axios';
// import { PaystackButton as PaystackCheckoutButton } from 'react-paystack';
// import QRCode from 'qrcode';
// import API_URL from '../constant/api';
// import WALLET from '../constant/wallet';

// const CheckoutModal = ({ onClose, cartItems, totalAmount }) => {
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
//   const [billingDetails, setBillingDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     phone: '',
//   });
//   const [qrCodeUrl, setQrCodeUrl] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [qrModalVisible, setQrModalVisible] = useState(false);
//   const [transactionVerified, setTransactionVerified] = useState(false);
//   const [txRef, setTxref] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBillingDetails({ ...billingDetails, [name]: value });
//   };

//   const handlePayment = async (method) => {
//     setSelectedPaymentMethod(method);
//     if (method === 'solana') {
//       setLoading(true);
//       try {
//         const response = await axios.post(`${API_URL}/tx/generate-qr`, {
//           message: 'Payment for order',
//           price: totalAmount,
//           wallet: WALLET,
//           label: 'Order Payment',
//         });
//         console.log(response);
//         const qrCodeDataUrl = await QRCode.toDataURL(response.data.newURL);
//         setQrCodeUrl(qrCodeDataUrl);
//         setTxref(response.data.ref);
//         setQrModalVisible(true); // Show the QR code modal
//       } catch (error) {
//         console.error('Error generating QR code:', error.response);
//       }
//       setLoading(false);
//     }
//   };

//   const handleSuccess = (response) => {
//     console.log('Payment successful:', response);
//   };

//   const handleError = (error) => {
//     console.log('Payment error:', error);
//     // Handle error here
//   };

//   const verifyTransaction = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `${API_URL}/tx/verify-tx?reference=${txRef}`
//       );
//       console.log(response);
//       if (response.status === 200) {
//         setTransactionVerified(true);
//         alert('Transaction Verified Successfully!');
//       } else {
//         alert('Transaction Verification Failed!');
//       }
//     } catch (error) {
//       console.error('Error verifying transaction:', error);
//       alert('Error verifying transaction.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center overflow-y-scroll justify-center z-50"
//       onClick={onClose}>
//       <div
//         className="bg-white rounded-lg my-11 mt-11 shadow-lg w-full max-w-3xl overflow-x-auto"
//         onClick={(e) => e.stopPropagation()}>
//         <div className="p-6">
//           <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

//           <div className="mb-6">
//             <h4 className="text-lg font-semibold mb-2">Cart Items</h4>
//             {cartItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex justify-between mb-2">
//                 <span>
//                   {item.name} (x{item.quantity})
//                 </span>
//                 <span>${item.price * item.quantity}</span>
//               </div>
//             ))}
//           </div>

//           <div className="mb-6">
//             <div className="flex justify-between font-semibold">
//               <span>Total Amount:</span>
//               <span>${totalAmount}</span>
//             </div>
//           </div>

//           <div className="mb-6">
//             <h4 className="text-lg font-semibold mb-2">Billing Details</h4>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={billingDetails.name}
//                   onChange={handleInputChange}
//                   className="border border-gray-300 rounded-md p-2 w-full"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={billingDetails.email}
//                   onChange={handleInputChange}
//                   className="border border-gray-300 rounded-md p-2 w-full"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={billingDetails.address}
//                   onChange={handleInputChange}
//                   className="border border-gray-300 rounded-md p-2 w-full"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Phone Number</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={billingDetails.phone}
//                   onChange={handleInputChange}
//                   className="border border-gray-300 rounded-md p-2 w-full"
//                   required
//                 />
//               </div>
//             </form>
//           </div>

//           <div className="mb-6">
//             <h4 className="text-lg font-semibold mb-2">Payment Method</h4>
//             <div className="flex space-x-4 overflow-x-auto">
//               <button
//                 onClick={() => handlePayment('paystack')}
//                 className={`w-32 py-2 px-4 rounded-md ${
//                   selectedPaymentMethod === 'paystack'
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-200'
//                 }`}>
//                 Paystack
//               </button>
//               <button
//                 onClick={() => handlePayment('solana')}
//                 className={`w-32 py-2 px-4 rounded-md ${
//                   selectedPaymentMethod === 'solana'
//                     ? 'bg-green-600 text-white'
//                     : 'bg-gray-200'
//                 }`}>
//                 SolanaPay
//               </button>
//             </div>
//           </div>

//           <div className="flex justify-end space-x-4">
//             <button
//               onClick={onClose}
//               className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200">
//               Cancel
//             </button>
//             {selectedPaymentMethod === 'paystack' && (
//               <PaystackCheckoutButton
//                 text="Pay with Paystack"
//                 amount={totalAmount * 100} // Amount in kobo (100 kobo = 1 Naira)
//                 email={billingDetails.email}
//                 onSuccess={handleSuccess}
//                 onError={handleError}
//                 publicKey="your-paystack-public-key" // Replace with your Paystack public key
//               />
//             )}
//             {selectedPaymentMethod === 'solana' &&
//               !loading &&
//               !qrModalVisible && (
//                 <button
//                   onClick={() => handlePayment('solana')}
//                   className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200">
//                   Pay with SolanaPay
//                 </button>
//               )}
//           </div>
//         </div>
//       </div>

//       {qrModalVisible && (
//         <div
//           className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
//           onClick={() => setQrModalVisible(false)}>
//           <div
//             className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md"
//             onClick={(e) => e.stopPropagation()}>
//             <h4 className="text-lg font-semibold mb-4">Scan to Pay</h4>
//             {qrCodeUrl ? (
//               <>
//                 <img
//                   src={qrCodeUrl}
//                   alt="QR Code"
//                   className="w-full h-auto mb-4"
//                 />
//                 <button
//                   onClick={verifyTransaction}
//                   className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
//                   Verify Transaction
//                 </button>
//               </>
//             ) : (
//               <p>Loading QR code...</p>
//             )}
//             <button
//               onClick={() => setQrModalVisible(false)}
//               className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutModal;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PaystackButton as PaystackCheckoutButton } from 'react-paystack';
import QRCode from 'qrcode';
import API_URL from '../constant/api';
import WALLET from '../constant/wallet';
import { useCart } from '../context/cart';

const CheckoutModal = ({ onClose, cartItems, totalAmount }) => {
  const { clear_cart } = useCart();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [txRef, setTxref] = useState('');
  const [loading, setLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isQRCodeVisible, setIsQRCodeVisible] = useState(false); // New state for QR code visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const handlePayment = async (method) => {
    setSelectedPaymentMethod(method);
    if (method === 'solana') {
      setLoading(true);
      try {
        const response = await axios.post(`${API_URL}/tx/generate-qr`, {
          message: 'Payment for order',
          price: totalAmount,
          wallet: WALLET,
          label: 'Order Payment',
        });

        const qrCodeDataUrl = await QRCode.toDataURL(response.data.newURL);
        setQrCodeUrl(qrCodeDataUrl);
        setTxref(response.data.ref);
        setIsQRCodeVisible(true);
      } catch (error) {
        console.error('Error generating QR code:', error.response);
      }
      setLoading(false);
    }
  };

  const handleSuccess = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/tx/verify-tx?reference=${txRef}`
      );
      if (response.status === 200) {
        setVerificationStatus('success');
        clear_cart();
        setTimeout(() => {
          window.location.href = '/shop';
        }, 3000);
      }
    } catch (error) {
      console.error('Error verifying transaction:', error);
      setVerificationStatus('error');
    }
  };

  const handleError = (error) => {
    console.log('Payment error:', error);
    setVerificationStatus('error');
  };

  const handleQRCodeClose = () => {
    setIsQRCodeVisible(false);
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-3xl overflow-x-auto"
        onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Cart Items</h4>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mb-2">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <div className="flex justify-between font-semibold">
              <span>Total Amount:</span>
              <span>${totalAmount}</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Billing Details</h4>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={billingDetails.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={billingDetails.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={billingDetails.address}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={billingDetails.phone}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
            </form>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Payment Method</h4>
            <div className="flex space-x-4">
              <button
                onClick={() => handlePayment('paystack')}
                className={`w-32 py-2 px-4 rounded-md ${
                  selectedPaymentMethod === 'paystack'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200'
                }`}>
                Paystack
              </button>
              <button
                onClick={() => handlePayment('solana')}
                className={`w-32 py-2 px-4 rounded-md ${
                  selectedPaymentMethod === 'solana'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200'
                }`}>
                SolanaPay
              </button>
            </div>
          </div>

          {/* QR Code Popup */}
          {isQRCodeVisible && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-2">Scan to Pay</h4>
                <img
                  src={qrCodeUrl}
                  alt="QR Code"
                  className="w-full h-auto"
                />
                <span className="flex flew-wrap gap-2 items-center">
                  <button
                    onClick={handleSuccess}
                    className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200">
                    Verify Transaction
                  </button>
                  <button
                    onClick={handleQRCodeClose}
                    className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200">
                    Close
                  </button>
                </span>
              </div>
            </div>
          )}

          {verificationStatus && (
            <div
              className={`mt-6 p-4 rounded-md text-white ${
                verificationStatus === 'success' ? 'bg-green-600' : 'bg-red-600'
              }`}>
              {verificationStatus === 'success'
                ? 'Payment successful! Redirecting to the store...'
                : 'There was an error verifying your payment. Please try again.'}
            </div>
          )}

          <div className="flex justify-end space-x-4 mt-6">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200">
              Cancel
            </button>
            {selectedPaymentMethod === 'paystack' && (
              <PaystackCheckoutButton
                text="Pay with Paystack"
                amount={totalAmount * 100}
                email={billingDetails.email}
                onSuccess={handleSuccess}
                onError={handleError}
                publicKey="your-paystack-public-key"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
