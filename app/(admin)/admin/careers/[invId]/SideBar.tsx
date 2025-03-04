'use client'
import React, {useState } from 'react'
import { Sidebar } from "primereact/sidebar";
import Link from 'next/link';
import { LiaIdCardSolid } from "react-icons/lia";
import { IoCallOutline } from 'react-icons/io5';
import { PiAddressBook } from 'react-icons/pi';
import { GrLocation } from "react-icons/gr";
import Spinner from '@/components/common/Spinner';
import { TbRosetteDiscountCheckFilled, TbUserFilled } from 'react-icons/tb';
import { HiCheckCircle, HiOutlineDownload } from 'react-icons/hi';
import { fillPdfTemplate } from '@/app/(user)/donate/[id]/ReciptGenrator';
import { FiArrowDown, FiCheckCircle } from "react-icons/fi";
import { formatDate } from '@/components/common/DateConvert';
import { ROOT_URL } from '@/components/data/func';
import { fetchFile } from '../../admission/func';



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
console.log(trans);

  return (
    <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className='prime-sidebar Plus-Jakarta'>
        {loading ? <Spinner/> :   
        <>    <div className=' bg-white px-8 w-full flex flex-col items-center'>
            <div className='relative h-32 w-32 bg-lime-100 overflow-hidden rounded-full outline-2 outline-lime-700 flex items-center justify-center -outline-offset-2'>
            <TbUserFilled className='text-lime-500 text-7xl'/>
          
            </div>
        
        <p className='text-2xl text-green-600 font-bold mt-5'>{trans?.name}</p>
        <div
                  className="p-5 rounded-2xl mt-4 bg-green-50 w-full border border-green-300"
                >
                  <div className="space-y-2">
                  <SingleCell label={'Phone No'} data={trans?.contact}/>
                  <SingleCell label={'Email'} data={trans?.email}/>
                  <SingleCell label={'Place'} data={trans?.place}/>
                  </div>
                  </div>
                 {trans?.comment!==""&& <div
                  className="p-5 rounded-2xl mt-4 bg-green-50 w-full border border-green-300 relative"
                > <div className='absolute -top-[10px] bg-green-600 py-1 px-3 rounded-3xl text-[10px] uppercase text-white'>Comment</div>
                  <div className="space-y-2">
                  <p className='w-full'>{trans?.comment}</p>
                  </div>
                  </div>}
                <div className='p-3 px-5 rounded-2xl mt-3 bg-gradient-to-br from-lime-500 flex justify-between items-center to-green-600 w-full'>
                  <div className='text-white'>
                    <p className='font-semibold'>CV</p>
                    <p className='text-sm text-lime-200'>{trans?.cv}</p>
                  </div>
                    <div onClick={()=>handleDownload(trans?.cv,'CVs')} className='h-10 w-10 rounded-lg bg-green-500/80 cursor-pointer text-white flex items-center justify-center'><HiOutlineDownload className='text-xl'/></div>
                </div>
               
       
    </div>
   
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