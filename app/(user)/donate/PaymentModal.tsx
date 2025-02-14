'use client'
import React from 'react'
import { Dialog } from 'primereact/dialog';
import FormInput from '@/components/common/Form';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { initPayment } from '@/components/common/init';
import { useRouter } from 'next/navigation';

function PaymentModal({amount,visible,setVisible}:{amount:any,visible:any,setVisible:any}) {
    const router = useRouter();
const formik = useFormik({
    initialValues: {
       name: "",
       phone: "",
       email: "",
       pancard: "",
    },
    validationSchema: Yup.object({
       name: Yup.string().required("Name is required"),
       phone: Yup.string().required("Phone number is required"),
       email: Yup.string().email("Invalid email address").notRequired(),
       pancard: Yup.string().notRequired(),
    }),
    
    onSubmit: async (values) => {
       console.log('Form values', values);
       localStorage.setItem('donardetails', JSON.stringify(values));
       try {
           const resp = await initPayment(amount);
       
           if (resp.success) {
             console.log('Payment initiated successfully:', resp);
             router.push(resp.data.instrumentResponse.redirectInfo.url); 
           } else {
             console.error('Payment initiation failed:', resp);
           }
       
         } catch (error) {
           console.error('Payment failed:', error);
         }
    },
  });
     console.log('amount',amount);
     
  return (
    <Dialog header="Donor Details"  draggable={false} visible={visible} className='Plus-Jakarta p-5 w-[90%] max-w-[500px] rounded-3xl bg-white' onHide={() => {if (!visible) return; setVisible(false); }}>
     <p className=''>
     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline-block mr-2 text-lime-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>
     Please provide the details below to receive your payment receipt.</p>
         <form onSubmit={formik.handleSubmit}
          className=""
        >
          <FormInput formik={formik} label='Name' name='name' placeholder='Name' />
          <FormInput formik={formik} label='Phone No' type='number' name='phone' placeholder='Phone No' />
          <FormInput formik={formik} label='Email' optional type='email' name='email' placeholder='Email' />
          <FormInput formik={formik} label='Pan Card No'  optional name='pancard' placeholder='Pan Card No' />
          <button type='submit' className='py-3 px-5 rounded-lg mt-5 w-full text-center bg-lime-600 text-white '>Pay <span className='font-semibold'>₹{amount}</span></button>
        </form>
</Dialog>
  )
}

export default PaymentModal
