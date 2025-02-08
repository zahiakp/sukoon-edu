'use client';
import React from "react";
import { HiBadgeCheck, HiCheckCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import { RiCloseCircleFill } from "react-icons/ri";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Modal from "./Modal";
import FlickeringGrid from "@/components/ui/flickering-grid";

const PaymentSuccessUI = ({ paymentData }:{paymentData:any}) => {
  // Add defensive checks to ensure paymentData and its nested properties are defined
  

  const success = paymentData.success;
  const [visible, setVisible] = React.useState<any>(false);

  return (
    <>{success ? 
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1000px] bg-white rounded-3xl shadow-xl p-10 text-center z-10"
      >
        {/* Success Icon */}
        <div className="flex justify-center mt-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-3 bg-green-100 rounded-full"
          >
            <HiBadgeCheck className="text-9xl text-green-500" />
          </motion.div>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-5xl md:text-6xl Grotesque-font font-bold text-green-700 mt-6"
        >
          You're Making Dreams Come True
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className=" text-gray-600 mt-4 md:w-3/4 text-center mx-auto"
        >
          Incredible! Your donation has been received, and with it, you've
            just helped turn dreams into reality. Your generosity means more
            than just numbers – it means real change for real people. We're
            thrilled to have you as part of our mission. Get ready to see the
            magic your support creates!
        </motion.p>

        {/* Call to Action */}
        <div className="flex gap-3 items-center justify-center flex-wrap mt-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className=""
        >
          <button
            onClick={() => setVisible(true)}
            className="px-5 py-2 flex gap-1 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            <span className="hidden md:block">View</span>  Details
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className=""
        >
          <button
            // onClick={() => window.location.href = "/donate"}
            className="px-5 py-2 flex gap-1 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
          >
            <span className="hidden md:block">Download</span>  Reciept
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className=""
        >
          <button
            onClick={() => window.location.href = "/donate"}
            className="px-5 py-2 flex gap-1 bg-zinc-100  font-semibold rounded-lg hover:bg-zinc-200 transition duration-300"
          >
            Back <span className="hidden md:block">to Home</span>
          </button>
        </motion.div>
        
        </div>
      </motion.div>
    </div>:
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br  from-red-50 to-red-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 text-center"
      >
        {/* Success Icon */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-4 bg-red-50 rounded-full"
          >
            <RiCloseCircleFill className="text-8xl text-red-500" />
          </motion.div>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-3xl font-bold text-red-800 mt-6"
        >
          Payment Failed!
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className=" text-gray-600 mt-4"
        >
          Unfortunately, your payment could not be processed. Please try again.
        </motion.p>

        {/* Transaction Details */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 text-left bg-red-50 p-6 rounded-lg"
        >
          <div className="space-y-4">
            <div className="flex items-center">
              <HiCheckCircle className="text-red-500 mr-2" />
              <span className="font-semibold">Amount:</span>
              <span className="ml-2">₹{(amount / 100).toFixed(2)}</span>
            </div>
            <div className="flex items-center">
              <HiCheckCircle className="text-red-500 mr-2" />
              <span className="font-semibold">Transaction ID:</span>
              <span className="ml-2">{transactionId}</span>
            </div>
            <div className="flex items-center">
              <HiCheckCircle className="text-red-500 mr-2" />
              <span className="font-semibold">Payment Method:</span>
              <span className="ml-2 capitalize">
                {paymentInstrument.type} ({paymentInstrument.accountType})
              </span>
            </div>
            <div className="flex items-center">
              <HiCheckCircle className="text-red-500 mr-2" />
              <span className="font-semibold">Status:</span>
              <span className="ml-2 capitalize">{state.toLowerCase()}</span>
            </div>
          </div>
        </motion.div> */}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8"
        >
          <button
            onClick={() => window.location.href = "/donate"}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-3xl hover:bg-red-600 transition duration-300"
          >
            Try again
          </button>
        </motion.div>
      </motion.div>
    </div>
}     <Modal setVisible={setVisible} visible={visible} paymentData={paymentData}/>
    </>
  );
};

export default PaymentSuccessUI;