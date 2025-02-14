'use client'
import React, { useState } from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import { HiCheckCircle } from "react-icons/hi";
import { FiArrowRight, FiArrowRightCircle } from "react-icons/fi";
import GratingModal from "./GratingModal";
import dynamic from "next/dynamic";
const AdmissionModal = dynamic(() => import("./AdmissionModal"), { ssr: false });
const AdmissionDiv: React.FC = () => {

  const [admissionModal,setAdmissionModal]= useState(false)
  const [greatingModal,setGreatingModal] = useState(false);

  return (
    <>
      <section className="bg-green-500 py-9">
        <main className="w-[85%] max-w-[1200px] mx-auto text-white ">
          <h6 className="Grotesque-font text-center text-5xl font-semibold">
            <TextAnimate animation="blurInUp" by="character">
              Sukoon Edu Village – Online Application Form
            </TextAnimate>
          </h6>
          <p className="text-center mt-3">
            Empowering the Future Through Quality Education
          </p>
        </main>
      </section>
      <section className="bg-white py-10 pb-20">
        <main className="w-[85%] max-w-[1200px] mx-auto flex justify-center flex-col">
          <p className="text-center mt-3">
            Welcome to the Sukoon Edu Village Online Application Portal. We
            invite students who have successfully completed the 6th grade to
            apply for our exclusive education program aimed at nurturing bright
            minds from underprivileged backgrounds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="text-left bg-green-50 border border-green-400 overflow-hidden rounded-2xl">
              <p className="py-3 px-5 bg-green-100 font-semibold">
                Eligibility Criteria
              </p>
              <div className="space-y-4 p-6">
                <div className="flex items-center">
                  <HiCheckCircle className="text-green-500 text-lg mr-2" />
                  <span className=" flex-1">
                    Students who have passed Class 6 from any recognized school.
                  </span>
                </div>
                <p className="flex items-center">
                  <HiCheckCircle className="text-green-500 text-lg mr-2" />
                  <span className=" flex-1">
                    Committed to pursuing quality education in a well-structured
                    and inspiring environment.
                  </span>
                </p>
              </div>
            </div>
            <div className="text-left bg-green-50 border border-green-400 overflow-hidden rounded-2xl">
              <p className="py-3 px-5 bg-green-100 font-semibold">
              Admission Process
              </p>
              <div className="space-y-4 p-6">
                <div className="flex items-center">
                 <span className="w-8 h-6 mr-3 text-sm flex items-center justify-center rounded-full bg-green-500 text-white font-semibold">01</span>
                  <span className=" flex-1">
                  Online Application Submission – Fill out the form below with accurate details.
                  </span>
                </div>
                <div className="flex items-center">
                 <span className="w-8 h-6 mr-3 text-sm flex items-center justify-center rounded-full bg-green-500 text-white font-semibold">02</span>
                  <span className=" flex-1">
                  Common Entrance Exam – The exam will be conducted in Uttar Pradesh, Delhi, Haryana, and Rajasthan at designated centers. Each state will have one exam center.
                  </span>
                </div>
                <div className="flex items-center">
                 <span className="w-8 h-6 mr-3 text-sm flex items-center justify-center rounded-full bg-green-500 text-white font-semibold">03</span>
                  <span className=" flex-1">
                  Selection & Interview – Shortlisted candidates will be called for further assessment and orientation.
                  </span>
                </div>
                
              </div>
            </div>
          </div>
          <button onClick={()=>setAdmissionModal(true)} className="py-3 px-6 rounded-lg gap-2 flex items-center mt-7 mx-auto bg-green-500 text-white font-semibold">
        Get an Admission<FiArrowRightCircle />

          </button>
        </main>
      </section>
      <AdmissionModal setVisible={setAdmissionModal} visible={admissionModal} setGreatingModal={setGreatingModal}/>
      {greatingModal && <GratingModal close={setGreatingModal}/>}
    </>
  );
};

export default AdmissionDiv;
