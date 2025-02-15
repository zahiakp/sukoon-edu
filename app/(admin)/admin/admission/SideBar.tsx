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
import { TbRosetteDiscountCheckFilled, TbUserFilled } from 'react-icons/tb';
import { HiCheckCircle, HiOutlineDownload } from 'react-icons/hi';
import { fillPdfTemplate } from '@/app/(user)/donate/[id]/ReciptGenrator';
import { FiArrowDown, FiCheckCircle } from "react-icons/fi";
import { formatDate } from '@/components/common/DateConvert';
import { ROOT_URL } from '@/components/data/func';
import { fetchFile } from './func';



export function SideBar({visibleRight,setVisibleRight,trans}:{visibleRight:any,setVisibleRight:any,trans:any}) {
    const [loading,setLoading] =useState(false)
    const [isLoading, setIsLoading] = React.useState(false);
    const handleFillPdf = async () => {
        setIsLoading(true);
        try {
          await fillPdfTemplate(trans={...trans,date:formatDate(trans?.created_at)});
        } catch (error) {
          console.error("Error filling PDF:", error);
        } finally {
          setIsLoading(false);
        }
      };


      const handleDownload = async (fileUrl: string,folder:string) => {
        setLoading(true);
        try {
          const response = await fetchFile(fileUrl,folder);

        if (!response) {
            throw new Error(`Failed to download file`);
        }

        const link = document.createElement('a');
        link.href = response;
        link.setAttribute('download', fileUrl); // Set the filename for download
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(response);
        } catch (error) {
          console.error('Error downloading file:', error);
        } finally {
          setLoading(false);
        }
      };

  return (
    <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className='prime-sidebar Plus-Jakarta'>
        {loading ? <Spinner/> :   
        <>    <div className=' bg-white px-8 w-full flex flex-col items-center'>
            <div className='relative h-32 w-32 bg-lime-100 overflow-hidden rounded-full outline-2 outline-lime-700 flex items-center justify-center -outline-offset-2'>
            {trans?.photo !== "" ? <img src={`${ROOT_URL}uploads/photo/${trans?.photo}`} className='h-full w-full object-cover' alt="" />:<TbUserFilled className='text-lime-500 text-7xl'/>
          }
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
                  <SingleCell label={'Date of Birth'} data={trans?.dob}/>
                  <SingleCell label={'Email'} data={trans?.email}/>
                  <SingleCell label={'Gender'} data={trans?.gender}/>
                  <SingleCell label={'Address'} data={trans?.address}/>
                  <SingleCell label={'Guardian Name'} data={trans?.guardianName}/>
                  </div>
                  </div>
                  <div
                   className="p-5 rounded-2xl mt-3 bg-green-50 w-full border border-green-300"
                >
                  <div className="space-y-2">
                  <SingleCell label={'Recent School'} data={trans?.recentSchool}/>
                  <SingleCell label={'School Address'} data={trans?.schoolAddress}/>
                  <SingleCell label={'Passing Year'} data={trans?.passingYear}/>
                  <SingleCell label={'Exam Center'} data={trans?.examCenter}/>
                   
                  </div>
                </div>
                <div className='p-3 px-5 rounded-2xl mt-3 bg-gradient-to-br from-lime-500 flex justify-between items-center to-green-600 w-full'>
                  <div className='text-white'>
                    <p className='font-semibold'>Passport-size Photo</p>
                    <p className='text-sm text-lime-200'>{trans?.photo}</p>
                  </div>
                    <div onClick={()=>handleDownload(trans?.photo,'photo')} className='h-10 w-10 rounded-lg bg-green-500/80 cursor-pointer text-white flex items-center justify-center'><HiOutlineDownload className='text-xl'/></div>
                </div>
               {trans?.marksheet!==""&& <div className='p-3 px-5 rounded-2xl mt-3 bg-gradient-to-br from-lime-500 flex justify-between items-center to-green-600 w-full'>
                  <div className='text-white'>
                    <p className='font-semibold'>Class 6 Marksheet/Certificate</p>
                    <p className='text-sm text-lime-200'>{trans?.marksheet}</p>
                  </div>
                    <div onClick={()=>handleDownload(trans?.marksheet,'marksheet')} className='h-10 w-10 rounded-lg bg-green-500/80 cursor-pointer text-white flex items-center justify-center'><HiOutlineDownload className='text-xl'/></div>
                </div>}
                <div className='p-3 px-5 rounded-2xl mt-3 bg-gradient-to-br from-lime-500 flex justify-between items-center to-green-600 w-full'>
                  <div className='text-white'>
                    <p className='font-semibold'>ID Proof (Aadhaar/Birth Certificate)</p>
                    <p className='text-sm text-lime-200'>{trans?.certificate}</p>
                  </div>
                    <div onClick={()=>handleDownload(trans?.certificate,'certificate')} className='h-10 w-10 rounded-lg bg-green-500/80 cursor-pointer text-white flex items-center justify-center'><HiOutlineDownload className='text-xl'/></div>
                </div>
        {/* <div className='my-10 flex gap-3'>
          <p aria-label="Auto Transaction" className='tooltip p-2 px-5 bg-green-50 text-green-600 uppercase text-sm font-semibold flex items-center gap-2 rounded-3xl border border-green-500'><FiCheckCircle className='text-lg'/>{trans?.type}</p>
          <button onClick={handleFillPdf} className='hover:shadow-md duration-300 p-2 px-7 rounded-3xl bg-gradient-to-tr from-green-500 border border-green-500 to-green-400 text-center font-semibold text-white'>
            Download Receipt 
            </button> 
          </div> */}
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