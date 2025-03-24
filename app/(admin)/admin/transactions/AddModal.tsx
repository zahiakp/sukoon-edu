'use client'
import React from 'react'
import { Dialog } from 'primereact/dialog';
import FormInput from '@/components/common/Form';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useRouter } from 'next/navigation';
import { uploadTransaction } from '@/app/(user)/donate/[id]/func';
import { showMessage } from '@/components/common/CusToast';
import { getRelativeTime } from '@/components/common/DateConvert';

function AddModal({visible,setVisible,fetch}:{visible:any,setVisible:any,fetch:any}) {
    const router = useRouter();
    const generateUniqueReceiptNo = () => {
      return "REC" + Date.now() + Math.floor(Math.random() * 1000);
    };
const formik = useFormik({
  initialValues: {
     name: "",
     email: "",
     phone: "",
     pancard: "",
     receiptNo: generateUniqueReceiptNo(),
     amount: "",
     transactionId: "",
     merchantId: "",
     modeOfPayment: "",
     paymentStatus: "",
     currency: "",
     type:"manual",
     date: "",
  },
  validationSchema: Yup.object({
     name: Yup.string().required("Name is required"),
     phone: Yup.string().required("Phone number is required"),
     email: Yup.string().email("Invalid email address"),
     amount: Yup.string().required("Amount is required").matches(/^\d+(\.\d+)?$/, "Amount must be a number"),
     transactionId: Yup.string().required("Transaction Id is required"),
     modeOfPayment: Yup.string().required("Mode of Payment is required"),
     paymentStatus: Yup.string().required("Payment Status is required"),
     currency: Yup.string().required("Currency Id is required"),
  }),
  
  onSubmit: async (values) => {
    
    try {
        const resp = await uploadTransaction(values);
    
        if (resp.success) {
          console.log('Transaction Added successfully:', resp);
          showMessage('Transaction Added successfully', 'success');
          setVisible(false)
          fetch()
        } else {
          console.error('Transaction adding failed:', resp);
          showMessage('Transaction adding failed', 'error');
        }
    
      } catch (error) {
        console.error('adding failed:', error);
        showMessage('adding failed', 'error');
      }
  },
})
     
     
  return (
    <Dialog header="Recipt Details" draggable={false} visible={visible} className='p-5 w-[90%] max-w-[500px] rounded-3xl bg-white' onHide={() => {if (!visible) return; setVisible(false); }}>
     
         <form onSubmit={formik.handleSubmit}
          className=""
        ><div className='max-h-[400px] overflow-y-auto' id='addmodal'>
          <FormInput formik={formik} label='Name' name='name' placeholder='Name' />
          <FormInput formik={formik} label='Phone No' type='number' name='phone' placeholder='Phone No' />
          <FormInput formik={formik} label='Email (Optional)' type='email' name='email' placeholder='Email' />
          <FormInput formik={formik} label='Pan Card No (Optional)' name='pancard' placeholder='Pan Card No' />
          <FormInput formik={formik} label='Amount'  name='amount' placeholder='Amount' />
          <FormInput formik={formik} label='Transaction Id' name='transactionId' placeholder='Transaction Id' />
          <FormInput formik={formik} label='Merchant Id (Optional)' name='merchantId' placeholder='Merchant Id' />
          <FormInput formik={formik} label='Mode of Payment' name='modeOfPayment' placeholder='Mode of Payment' />
          <FormInput formik={formik} label='Payment Status' name='paymentStatus' placeholder='Payment Status' />
          <FormInput formik={formik} label='Currency' name='currency' placeholder='Currency' />
          </div>
          <button type='submit' className='py-3 px-5 rounded-lg mt-5 w-full text-center bg-lime-600 text-white font-semibold'>Add Details<span className='font-semibold'></span></button>
        </form>
</Dialog>
  )
}

export default AddModal
