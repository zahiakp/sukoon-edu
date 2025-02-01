import StyledButton from "@/components/common/StyledButton";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { IoMdArrowRoundForward } from "react-icons/io";
import { LuSchool } from "react-icons/lu";

function Features() {
  const FEATURES = [
    {
      title: "Academic Facilities",
      dis: "",
      items: [
        { image: "/svg/classroom.svg", label: "Futuristic Classrooms", dis: "" },
        { image: "/svg/lab.svg", label: "Cutting-Edge Labs", dis: "" },
        { image: "/svg/laibrary.svg", label: "Advanced Library", dis: "" },
      ],
    },
    {
      title: "Residential & Dining",
      dis: "",
      items: [
        { image: "/svg/hostel.svg", label: "Finest Hostels", dis: "" },
        { image: "/svg/foodcourt.svg", label: "Food Courts", dis: "" },
      ],
    },
    {
      title: "Recreational Spaces",
      dis: "",
      items: [
        { image: "/svg/sports.svg", label: "Sports Arenas", dis: "" },
        { image: "/svg/pool.svg", label: "swimming pools", dis: "" },
        { image: "/svg/fitness.svg", label: "fitness centers", dis: "" },
      ],
    },
    {
      title: "Health & Wellness",
      dis: "",
      items: [
        { image: "/svg/medical.svg", label: "Medical center and counseling services", dis: "" },
        { image: "/svg/yoga.svg", label: "Yoga and meditation rooms", dis: "" },
      ],
    },
    {
      title: "Safety & Security",
      dis: "",
      items: [
        { image: "/svg/24suppoer.svg", label: "24/7 surveillance and security", dis: "" },
        { image: "/svg/q&a.svg", label: "Emergency response team", dis: "" },
      ],
    },
    {
      title: "Green and Sustainable Campus",
      dis: "Sukoon’s campus is a thriving example of sustainable living.",
      items: [
        { image: "/svg/watermanage.svg", label: "Rainwater harvesting systems", dis: "" },
        { image: "/svg/solar.svg", label: "Solar energy infrastructure", dis: "" },
        {
          image: "/svg/organic.svg",
          label: "Lush green landscapes with organic gardens",
          dis: "",
        },
        {
          image: "/svg/waste.svg",
          label:
            "Waste management programs aligned with global green standards",
          dis: "",
        },
      ],
    },
  ];
  return (
    <>
      <div className="bg-green-500 py-8 relative group">
      <FlickeringGrid 
        className="z-0 absolute overflow-x-hidden inset-0 size-full"
        squareSize={14}
        gridGap={9}
        color="#ffffff"
        maxOpacity={0.1}
        flickerChance={0.5}
        height={800}
        width={2000}
      />
        <div className="w-full max-w-[1200px] mx-auto p-7 md:p-10 flex flex-col  items-center">
          <h6 className="Grotesque-font text-center  text-5xl md:text-7xl text-white font-semibold">
            {/* <StyledButton text="What our campus Offers" /> */}
            <TextAnimate animation="blurInUp" by="character">
            What our campus Offers
    </TextAnimate>
          </h6>
          <p className="mt-3 text-zinc-100 text-center">
            Our campus features comprehensive facilities designed to enhance the
            learning and living experience:
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 z-[2]">
            {/* -------------crad----------------- */}

            {/* <div key={i} className='flex cursor-pointer group/box flex-col border hover:-translate-y-1 duration-300 hover:shadow-lg bg-lime-50 border-lime-500 overflow-hidden rounded-2xl'>
                    <p className='w-full justify-center duration-300 translate-x-2 group-hover/box:translate-x-0 py-5 flex items-center gap-2'>{feature.title} <IoMdArrowRoundForward className='text-lime-600 opacity-0 duration-300 -translate-x-4 group-hover/box:opacity-100  group-hover/box:translate-x-0'/>
                    </p>
                    <p className='text-[12px] px-7 pb-7'>{feature.dis}</p>
                    </div> */}
            {/* ------------------------------ */}
          </div>
          {/* <a href="/donate" className="flex items-center gap-2 hover:gap-3 duration-300 p-2 px-5 rounded-xl w-fit text-sm bg-lime-500 text-white mt-4">Yes! I want to help<IoMdArrowForward />
                </a> */}
        </div>
      </div>
      {FEATURES.map((feature: any, i: number) => (
        <div className={`${i%2==1?"bg-white":"bg-green-50"}  py-8 pb-14 relative group`}>
          <div className="w-full max-w-[1200px] mx-auto p-7 md:p-10 flex flex-col  items-center">
            <h6 className="Grotesque-font text-5xl md:text-6xl text-green-600 font-semibold text-center">
            <TextAnimate animation="blurInUp" by="word">{feature.title}</TextAnimate>
            </h6>
            <p data-aos="fade-up" className="mt-3 text-center">
              {feature.dis}
            </p>
            <div className={`mt-10 grid grid-cols-1 w-full md:w-fit md:grid-cols-${feature.items.length} gap-4 z-[2]`}>
                {feature.items.map((item:any,ii:number)=>(
                     <div data-aos="fade-up" data-aos-delay={`${ii+2}00`} key={ii} className={`flex md:min-w-[250px] w-full md:w-fit relative cursor-pointer after:h-[6px] after:bg-green-500 after:absolute after:bottom-0 after:w-0 hover:after:w-full after:duration-300 group/box items-center justify-center flex-col border hover:-translate-y-1 duration-300 hover:shadow-lg ${i%2==0?"bg-white border-green-400":"bg-green-50/50 border-green-500"} p-7 px-10 overflow-hidden rounded-2xl`}>
                        {/* <LuSchool  className="text-7xl text-lime-600"/> */}
              <img src={item.image} alt="" className="h-32"/>

                    <p className='text-center mt-3 font-medium'>{item.label}
                    </p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Features;
