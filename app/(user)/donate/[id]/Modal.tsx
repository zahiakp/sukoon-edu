import React from 'react'
import { Dialog } from 'primereact/dialog';
import { HiCheckCircle } from 'react-icons/hi';
import { motion } from "framer-motion";

function Modal({visible,setVisible,paymentData}:{visible: any, setVisible: any,paymentData:any}) {
    const transactionId = paymentData?.data?.data?.transactionId || 'N/A';
      const amount = paymentData?.data?.data?.amount || 0;
      const state = paymentData?.data?.data?.state || 'N/A';
      const paymentInstrument = paymentData?.data?.data?.paymentInstrument || { type: 'N/A', accountType: 'N/A' };
  return (
    <Dialog header="Transaction Details" draggable={false} visible={visible} style={{ width: '40vw'}} className='p-5 rounded-3xl bg-white' onHide={() => {if (!visible) return; setVisible(false); }}>
     
         <div
          className="text-left bg-green-50 p-4 rounded-lg"
        >
          <div className="space-y-4">
            <div className="flex items-center">
              <HiCheckCircle className="text-green-500 mr-2" />
              <span className="font-semibold">Amount:</span>
              <span className="ml-2">₹{(amount / 100).toFixed(2)}</span>
            </div>
            <div className="flex items-center">
              <HiCheckCircle className="text-green-500 mr-2" />
              <span className="font-semibold">Transaction ID:</span>
              <span className="ml-2">{transactionId}</span>
            </div>
            <div className="flex items-center">
              <HiCheckCircle className="text-green-500 mr-2" />
              <span className="font-semibold">Payment Method:</span>
              <span className="ml-2 capitalize">
                {paymentInstrument.type} ({paymentInstrument.accountType})
              </span>
            </div>
            <div className="flex items-center">
              <HiCheckCircle className="text-green-500 mr-2" />
              <span className="font-semibold">Status:</span>
              <span className="ml-2 capitalize">{state.toLowerCase()}</span>
            </div>
          </div>
        </div>
</Dialog>
  )
}

export default Modal
