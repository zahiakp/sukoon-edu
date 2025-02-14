import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { HiCheckCircle } from 'react-icons/hi';

function GratingModal({close}:{close:any}) {
  return (
    <dialog id="my_modal_3" className="modal modal-open">
    <div className="modal-box">
      <form method="dialog">
        <button onClick={()=>close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <div className='flex items-center flex-col justify-center mt-5 gap-y-2'>
      <BsFillPatchCheckFill className='text-green-500 text-7xl'/>
      <h3 className="font-bold text-xl">Application Submitted Successfully!</h3>
      <p className="text-center text-sm">Thank you for submitting your application for admission. We have received your information and it is now being processed by our admissions team.</p>
   <div className='bg-green-100 rounded-xl w-full p-4 mt-3 gap-y-2 flex flex-col'>
<p className="flex items-baseline">
                  <HiCheckCircle className="text-green-500 text-lg mr-2" />
                  <span className="text-sm flex-1">
                  Our team will review your application and supporting documents
                  </span>
                </p>
   </div>
   <p className='text-sm'>For any queries, contact us at:</p>
<div className=''><p className='text-center'>Helpline: <span className='font-semibold'> +91 9567339806</span></p><p className='text-center'>Email: <span className='font-semibold'> sammuhammed9@gmail.com</span></p></div>
   </div> </div>
  </dialog>
  )
}

export default GratingModal
