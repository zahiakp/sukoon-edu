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
    <Dialog header="Donor Details" draggable={false} visible={visible} className='p-5 w-[90%] max-w-[500px] rounded-3xl bg-white' onHide={() => {if (!visible) return; setVisible(false); }}>
     
         <form onSubmit={formik.handleSubmit}
          className=""
        >
          <FormInput formik={formik} label='Name' name='name' placeholder='Name' />
          <FormInput formik={formik} label='Phone No' type='number' name='phone' placeholder='Phone No' />
          <FormInput formik={formik} label='Email (Optional)' type='email' name='email' placeholder='Email' />
          <FormInput formik={formik} label='Pan Card No (Optional)' name='pancard' placeholder='Pan Card No' />
          <button type='submit' className='py-3 px-5 rounded-lg mt-5 w-full text-center bg-lime-600 text-white '>Pay <span className='font-semibold'>₹{amount}</span></button>
        </form>
</Dialog>
  )
}

export default PaymentModal
