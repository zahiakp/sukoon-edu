"use client";
import React, { useEffect, useState } from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import { HiCheckCircle } from "react-icons/hi";
import { FiArrowRight, FiArrowRightCircle } from "react-icons/fi";
import GratingModal from "./GratingModal";
import dynamic from "next/dynamic";
import { HiMiniArrowRight } from "react-icons/hi2";
const AdmissionModal = dynamic(() => import("./AdmissionModal"), {
  ssr: false,
});
const AdmissionDiv: React.FC = () => {
  const [admissionModal, setAdmissionModal] = useState(false);
  const [greatingModal, setGreatingModal] = useState(false);
const [screenRatio, setScreenRatio] = useState('web');

useEffect(() => {
  const updateScreenRatio = () => {
    setScreenRatio(window.innerWidth <= 640 ? 'phone' : 'web');
  };

  updateScreenRatio();
  window.addEventListener('resize', updateScreenRatio);

  return () => {
    window.removeEventListener('resize', updateScreenRatio);
      }});
  return (
    <>
      <section className="bg-green-500 py-9">
        <main className="w-[85%] max-w-[1200px] mx-auto text-white ">
          <h6 className="Grotesque-font text-center text-5xl font-semibold">
            <TextAnimate animation="blurInUp" by={screenRatio=='phone'?"word":"character"}>
              Sukoon – Online Application Form
            </TextAnimate>
          </h6>
          <p className="text-center mt-3">
            Take the first step toward a brighter future!
          </p>
        </main>
      </section>
      <section className="bg-white py-10 pb-20">
        <main className="w-[85%] max-w-[1200px] mx-auto flex justify-center flex-col">
          <p className="text-center mt-3">
            Welcome to Sukoon's admission portal! Students who have completed
            Grade 5 or Grade 6 are invited to apply for our program, designed to nurture
            bright minds from underprivileged backgrounds
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
                 <span className='font-semibold'> Academic Requirement: </span>Must have completed 5th and 6th Grade from a recognized school.
                  </span>
                </div>
                <p className="flex items-center">
                  <HiCheckCircle className="text-green-500 text-lg mr-2" />
                  <span className=" flex-1">
                  <span className='font-semibold'>Commitment :</span> Must be motivated to learn and contribute positively to society.

                  </span>
                </p>
                <p className="flex items-center">
                  <HiCheckCircle className="text-green-500 text-lg mr-2" />
                  <span className=" flex-1">
                  <span className='font-semibold'>Background :</span> Preference is given to students from economically and socially disadvantaged backgrounds.
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
                  <span className="w-8 h-6 mr-3 text-sm flex items-center justify-center rounded-full bg-green-500 text-white font-semibold">
                    01
                  </span>
                  <span className=" flex-1">
                   <span className="font-semibold">Apply Online</span> – Fill out the form below with
                    accurate details.
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-8 h-6 mr-3 text-sm flex items-center justify-center rounded-full bg-green-500 text-white font-semibold">
                    02
                  </span>
                  <span className=" flex-1">
                    <span className="font-semibold">Sukoon Entrance Test (SET)</span> – Conducted in Uttar Pradesh, Delhi, Haryana, and Rajasthan at designated centres (one per state). Exam details, including syllabus and center locations, will be shared via email

                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-8 h-6 mr-3 text-sm flex items-center justify-center rounded-full bg-green-500 text-white font-semibold">
                    03
                  </span>
                  <span className=" flex-1">
                    <span className="font-semibold">Selection & Interview</span> – Shortlisted students will be invited for an interview and orientation.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setAdmissionModal(true)}
            className="py-3 px-6 rounded-lg gap-2 flex items-center mt-7 mx-auto bg-green-500 text-white font-semibold"
          >
            Apply Now
            <HiMiniArrowRight />
          </button>
        </main>
      </section>
      <AdmissionModal
        setVisible={setAdmissionModal}
        visible={admissionModal}
        setGreatingModal={setGreatingModal}
      />
      {greatingModal && <GratingModal close={setGreatingModal} />}
    </>
  );
};

export default AdmissionDiv;
