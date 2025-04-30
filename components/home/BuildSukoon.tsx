import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FaBuilding, FaHandHoldingHeart } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GiHotMeal } from "react-icons/gi";
import { IoLibrary } from "react-icons/io5";
import { FaChildDress, FaComputer } from "react-icons/fa6";
import { TextAnimate } from "../ui/text-animate";
import Link from "next/link";

export const SukoonSection = () => {
  const waysToSupport = [
    {
      title: "Building Construction",
      description: "Help us build safe learning spaces",
      icon: <FaBuilding />,
    },
    {
      title: "Sponsor a Student",
      description: "Change a child's life through education",
      icon: <HiMiniUserGroup />,
    },
    {
      title: "Students' Meals",
      description: "Provide nutritious meals for better learning",
      icon: <GiHotMeal />,
    },
    {
      title: "Class Room & Library",
      description: "Fuel young minds with knowledge",
      icon: <IoLibrary />,
    },
    {
      title: "IT Lab",
      description: "Bridge the digital divide",
      icon: <FaComputer />,
    },
    {
      title: "Uniform",
      description: "Give the gift of dignity and belonging",
      icon: <FaChildDress />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-t from-lime-50 to-white relative overflow-hidden pb-72 md:pb-[350px]">
      <div className="max-w-6xl mx-auto px-7 relative z-[1]">
        <div className="text-center mb-12">
          <h6 className="Grotesque-font text-5xl md:text-6xl text-lime-700 font-semibold">
            {/* <StyledButton text=""/>  */}
            <TextAnimate animation="blurInUp" by="word">
              Let’s Build Sukoon
            </TextAnimate>
          </h6>
          <p
            data-aos="fade-up"
            className="text-zinc-500 text-center text-[16px] mt-5"
          >
            Your support helps us provide quality education, safe spaces, and
            essential resources to underprivileged children in North India —
            children who deserve every opportunity to dream, grow, and thrive.
            <b>You can be a part of the change by supporting Sukoon through any of the following:
            </b>
          </p>
        </div>
          {/* <p
            data-aos="fade-up" data-aos-delay="100"
            className="text-zinc-500 font-medium text-center text-[16px] mb-5"
          >
            You can be a part of the change by supporting Sukoon through any of the following:
          </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {waysToSupport.map((way, index) => (
            <div data-aos="fade-up" data-aos-delay={`${(index+2) * 100}`}
              key={index}
              className="flex gap-5 duration-300 bg-lime-100/60 rounded-2xl p-5"
            >
              <div>
                <div className="text-4xl text-lime-600 p-4 w-fit rounded-2xl bg-lime-200/70">{way.icon}</div>
              </div>
              <div className="flex flex-col justify-center">
                <h6 className="text-lime-700 text-xl font-semibold">{way.title}</h6>
                <p className="text-gray-600 text-sm">{way.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="700" className=" text-center pb-20 flex flex-col items-center justify-center rounded-xl ">
          {/* <p className="text-4xl font-semibold  text-lime-600 font-cascadia md:w-[900px]">
          <TextAnimate animation="blurInUp" by="word">
            "Education is the most powerful weapon which you can use to change the world."
            </TextAnimate>
            
          </p>
          <p className="mb-7 p-2 text-zinc-600 italic">
              — Nelson Mandela
            </p> */}

            {/* <p className="text-lg text-zinc-700 font-medium"> */}
            {/* Start Making a Difference Today */}
            <Link href="/donate" className="relative">
              <p className="inline-flex items-center bg-lime-500 ml-5 hover:bg-lime-600 text-white px-6 py-3 text-lg rounded-xl shadow-lg duration-300 hover:scale-[1.02]">
              <FaHandHoldingHeart className="mr-2 text-yellow-200" /> Donate Now
              </p>
            </Link>
            {/* </p> */}
        </div>
      </div>
      <img
        data-aos="fade-up"
        data-aos-delay={`800`}
        src="/image/Sukoon Front View Without Sky.png"
        className="h-[500px] -z-[0] md:w-full w-auto object-cover  md:object-bottom absolute bottom-0"
        alt=""
      />
    </section>
  );
};
