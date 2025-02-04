import StyledButton from "@/components/common/StyledButton";
import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";

function FounderNote() {
  return (
    <div className="w-full py-10">
      <section className="w-[85%] overflow-hidden max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 md:gap-20">
        <div className=" flex flex-col gap-3 justify-start mt-24">
          <h6 className="Grotesque-font text-5xl !leading-[25px] md:text-6xl text-zinc-500 font-medium">
          Founder's <TextAnimate animation="blurInUp" by="character" className="text-6xl  text-lime-600 font-semibold">Message</TextAnimate>
          </h6>
          <div data-aos='fade-up'  data-aos-delay='100' className="h-28 w-28 max-w-[85%] rounded-[30px] overflow-hidden border-t-4 mt-5 border border-lime-600"><img className="h-full w-full object-cover" src="/image/ptsaqafi.jpg" alt="" /></div>
        <p data-aos='fade-up' data-aos-delay='300' className="font-semibold text-lg mt-3 !leading-5">PT Muhammed <br />
        <span className="mt-5 font-normal text-base">
        Founder, Sukoon Edu Foundation</span></p>
        </div>
        <div className="">
        <BiSolidQuoteLeft className="text-8xl text-lime-800/10 hidden md:block"/>

          <p>
          <p data-aos='fade-up' data-aos-delay='400' > Once, I had the opportunity to visit a government school in a remote
          village in Haryana. Over 500 students were enrolled, but fewer than 50
          regularly attended classes. The classrooms, devoid of any facilities,
          sat empty, with just a few teachers idling away. This was the state of
          the school. The teachers’ heartfelt plea, “Can you help us bring the
          children back to school?”, deeply saddened me.</p><br/>

          <p data-aos='fade-up' data-aos-delay='500' > According to reports, in the 2024-25 academic year alone, 31,068
          students dropped out of school in Haryana. These are not students who
          failed their exams, but children who decided not to pursue education
          anymore—just in one year. Isn’t that shocking? Yet, this is the harsh
          reality of rural areas. The reasons are many, with poverty being the
          primary one. Recently, I met a thirteen-year-old boy who had to work
          in a barber shop after the death of his father. Similarly, countless
          innocent children are forced to work on farms, in workshops, and in
          factories for meagre wages. Devoid of hope for the future, they have
          no destiny even to dream big. </p><br/>


          <p data-aos='fade-up' data-aos-delay='600' > As a solution, we began establishing learning centres in some
          villages. Our sole aim was to help children from these villages attend
          nearby government schools. Through these centres, we were able to
          provide nutritious meals and basic education tailored to their
          respective classes, even if on a small scale. However, most schools in
          villages lack even basic infrastructure: no toilets, no benches, and
          classrooms where children sit on the floor to study.</p><br/>


          <p data-aos='fade-up' data-aos-delay='700' > This realization led us to envision a more comprehensive solution—a
          residential school system for underprivileged children from various
          states. We are now transforming this vision into reality in the
          village of Andhaka, Haryana, where we have already acquired land and
          are preparing to begin construction. </p><br/>


          <p data-aos='fade-up' data-aos-delay='800' > At Sukoon Edu Foundation, we believe that every child deserves the
          opportunity to dream big and achieve their potential. Our residential
          school will not just provide education—it will offer a nurturing
          environment where children can grow, learn, and thrive without the
          barriers that poverty often creates. Many children are waiting for
          such a chance. </p><br/>


          <p data-aos='fade-up' data-aos-delay='900' > Together, we can bring about significant change. Please continue to
          support us with your help and suggestions. </p><br/>
          </p>
        </div>
      </section>
      
    </div>
  );
}

export default FounderNote;
