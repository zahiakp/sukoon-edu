'use client'
import React, {useState } from 'react'
import { Sidebar } from "primereact/sidebar";
import Link from 'next/link';
import { LiaIdCardSolid } from "react-icons/lia";
import { IoCallOutline } from 'react-icons/io5';
import { PiAddressBook } from 'react-icons/pi';
import { GrLocation } from "react-icons/gr";
import Spinner from '@/components/common/Spinner';
import DeleteItem from './Delete';
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb';
import { HiCheckCircle } from 'react-icons/hi';
import { fillPdfTemplate } from '@/app/(user)/donate/[id]/ReciptGenrator';
import { FiArrowDown, FiCheckCircle } from "react-icons/fi";
import { formatDate } from '@/components/common/DateConvert';



export function SideBar({visibleRight,setVisibleRight,trans}:{visibleRight:any,setVisibleRight:any,trans:any}) {
    const [loading,setLoading] =useState(false)
    const [isLoading, setIsLoading] = React.useState(false);
    const handleFillPdf = async () => {
        setIsLoading(true);
        try {
          await fillPdfTemplate(trans={...trans,date:formatDate(trans?.date)});
        } catch (error) {
          console.error("Error filling PDF:", error);
        } finally {
          setIsLoading(false);
        }
      };
  return (
    <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className='prime-sidebar Plus-Jakarta'>
        {loading ? <Spinner/> :   
        <>    <div className='rounded-xl bg-white px-8 w-full flex flex-col items-center'>
            <div className='relative w-full flex items-center flex-col justify-center font-bold text-6xl pb-7 gap-2 border-b '>
              <TbRosetteDiscountCheckFilled className='text-green-500 text-9xl'/>
              {/* <img src="/svg/check-mark.svg" alt="" className='h-40'/> */}
            ₹ {trans?.amount}
            <p className='absolute font-normal -bottom-4 text-zinc-500 text-sm bg-zinc-100 px-4 py-1 rounded-3xl'>{trans?.transactionId}</p>
            </div>
        
        <p className='text-2xl text-green-600 font-bold mt-5'>{trans?.name}</p>
        {/* <div className='px-7 py-5 rounded-2xl mt-4 bg-green-50 w-full'>
        <p className='text-sm text-green-600'>Personal Details</p>

<SingleCell icon={<LiaIdCardSolid className='text-2xl'/>} data={`#cst${trans?.id}`}/>
<SingleCell icon={<IoCallOutline className='text-xl'/>} data={trans?.phone}/>
<SingleCell icon={''} data={trans?.customer_dob}/>
<SingleCell icon={<GrLocation className='text-xl'/>} data={trans?.pancard}/>
<SingleCell icon={<PiAddressBook className='text-xl'/>} data={trans?.pancard}/>
        </div> */}
        <div
                  className="p-5 rounded-2xl mt-4 bg-green-50 w-full border border-green-300"
                >
                  <div className="space-y-2">
                  <SingleCell label={'Phone No'} data={trans?.phone}/>
                  {trans?.email && <SingleCell label={'Email'} data={trans?.email}/>}
                  {trans?.pancard && <SingleCell label={'Pan Card'} data={trans?.pancard}/>}
                  <SingleCell label={'Date'} data={formatDate(trans?.date)}/>
                  </div>
                  </div>
                  <div
                   className="p-5 rounded-2xl mt-3 bg-green-50 w-full border border-green-300"
                >
                  <div className="space-y-2">
                  <SingleCell label={'Receipt No'} data={trans?.receiptNo}/>
                  {trans?.merchantId && <SingleCell label={'Merchant Id'} data={trans?.merchantId}/>}
                  <SingleCell label={'Payment Method'} data={trans?.modeOfPayment}/>
                  <SingleCell label={'Payment Status'} data={trans?.paymentStatus}/>
                  <SingleCell label={'Currency'} data={trans?.currency||"INR"}/>
                   
                  </div>
                </div>
        <div className='my-10 flex gap-3'>
          <p aria-label="Auto Transaction" className='tooltip p-2 px-5 bg-green-50 text-green-600 uppercase text-sm font-semibold flex items-center gap-2 rounded-3xl border border-green-500'><FiCheckCircle className='text-lg'/>{trans?.type}</p>
          <button onClick={handleFillPdf} className='hover:shadow-md duration-300 p-2 px-7 rounded-3xl bg-gradient-to-tr from-green-500 border border-green-500 to-green-400 text-center font-semibold text-white'>
            Download Receipt 
            </button> 
          </div>
    </div>
    {/* <div>
        <p className='text-blue-500'>Recent Orders</p>
       {orders?.map((item:any,index:number)=>(<div key={index} className='p-4 rounded-xl bg-white my-3 grid grid-cols-4 text-center'>
        <p>order#{item?.invoice_id}</p><p>{convertToDDMMYYYY(item?.invoice_createdAt)}</p><p className='p-1 px-3 rounded-3xl border border-blue-500 text-blue-500 w-fit uppercase text-sm'>{item?.invoice_status}</p>
        <p className='font-semibold'>₹ {item?.total_amount}</p>
       </div>))}
    </div> */}
    </>}
            </Sidebar>
  )
}



export function SingleCell({label,data}:{label:any,data:any}) {
  return(
    <div className="flex items-center flex-wrap">
                      <HiCheckCircle className="text-green-500 mr-2 text-xl" />
                      <span className="font-semibold">{label}:</span>
                      <span className="ml-2">{data}</span>
                    </div>
  )
}