import { TextAnimate } from "@/components/ui/text-animate";
import { AntAnchor } from "antd/es/anchor/Anchor";
import React, { Fragment } from "react";
import { IoMdArrowForward } from "react-icons/io";

function Projects() {
  const Projects = [
    {
      id: "Residential-Campus",
      name: "Sukoon Residential Campus",
      image: "Residential Campus (2).jpg",
      dis: "Sukoon Residential School is a premier institution dedicated to nurturing young minds from Grades 7 to 12 in a structured residential environment. Our campus is designed to provide a holistic educational experience that blends academic excellence, character development, and moral education. At Sukoon Residential School, we prepare students not just for exams but for life. Sukoon Residential School shapes tomorrow’s leaders—young individuals who think critically, act compassionately, and contribute meaningfully to society.",
      qus: "What Sets Us Apart?",
      items: [
        "Holistic Education",
        "Ethical Learning",
        "Secure & Nurturing Space",
        "Oxford Advantage Curriculum",
      ],
    },
    {
      id: "Village-School",
      name: "Sukoon Village School",
      image: "VILLAGE SCHOOL.webp",
      dis: "Sukoon Village School is a CBSE-affiliated institution that blends modern education with cultural preservation. We provide a high-quality learning experience from kindergarten to Grade 12, ensuring that students receive a strong academic foundation while staying connected to their roots. We integrate the cultural, environmental, and social aspects of the village into our curriculum, fostering a sense of pride and identity among students. Our goal is to empower students with critical thinking skills, creativity, and a problem-solving mindset. By blending tradition with modernity, Sukoon Village School prepares students for the global stage while preserving their unique cultural identities.",
      qus: "Our Unique Approach:",
      items: [
        "Culture-Integrated",
        "Personalized Learning",
        "Eco-Conscious",
        "Community-Driven",
      ],
    },
    {
      id: "Learning-Centres",
      name: "Sukoon Learning Centres",
      image: "Learning Centers Photo.webp",
      dis: "Sukoon Learning Centres are a beacon of hope for children in rural and underserved areas who face barriers to formal education. These centres provide flexible, inclusive, and foundational learning opportunities to ensure that every child, regardless of their circumstances, has access to education. Our primary focus is on literacy, numeracy, and social skills, empowering children with the tools they need to succeed. Recognizing that many children may not be able to attend full-time school due to economic hardships, family responsibilities, or lack of infrastructure, we offer supplementary education in key subjects. This helps bridge gaps in the traditional education system, ensuring that students stay engaged in learning. These centres serve as a stepping stone to formal education, opening doors for children who might otherwise be left behind. ",
      qus: "Key Features:",
      items: [
        "Basic Education for All",
        "Flexible Learning Programs",
        "Personal Development",
        "Bridge Learning",
      ],
    },
    {
      id: "Sukoon-Milan",
      name: "Sukoon Milan",
      image: "IMGtest_1824.JPG",
      dis: "Sukoon Milan is more than just a program—it’s our comprehensive social empowerment initiative that brings together skill development, livelihood support, community projects, and essential services for people in need. Rooted in the core values of unity, inclusivity, and sustainable growth, Sukoon Milan works to create opportunities that uplift individuals, strengthen communities, and empower society at large.",
      qus: "Key Projects Under Sukoon Milan",
      items: [
        "Skill Development Programs",
        "Youth & Women Empowerment",
        "Livelihood Projects",
        "Social Upliftment",
      ],
    },
  ];
  return (
    <>
      {Projects.map((project: any, i: number) => (
        <Fragment key={i}>
          <section id={project.id}
            className={`py-32 ${i % 2 == 1 ? "bg-lime-50" : "bg-white"}`}
          >
            <main
              className={`w-[90%] max-w-[1200px] mx-auto flex justify-center ${
                i % 2 == 1 ? "flex-row-reverse" : ""
              } gap-28`}
            >
              <div className="relative group/img" data-aos="fade-up" data-aos-delay="300">
                <div className="h-full w-80 z-[5] group-hover/img:scale-[1.02] duration-300 rounded-[40px] shadow-md overflow-hidden relative">
                  <img
                    src={`/image/${project.image}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-72 w-72 group-hover/img:-translate-y-[65%] duration-300 absolute top-[50%] -translate-y-[50%] translate-x-16 z-[1] opacity-15 rounded-[40px] shadow-md overflow-hidden">
                  <img
                    src={`/image/${project.image}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-72 w-72 group-hover/img:-translate-y-[35%] duration-300 absolute top-[50%] -translate-y-[50%] -translate-x-10 z-[1] opacity-15 rounded-[40px] shadow-md overflow-hidden">
                  <img
                    src={`/image/${project.image}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 gap-3 flex flex-col w-3/4">
                <h6 className="text-6xl Grotesque-font text-green-600 font-bold">
                  <TextAnimate animation="blurInUp" by="word">
                    {project.name}
                  </TextAnimate>
                </h6>
                <p className="" data-aos="fade-up" data-aos-delay="100">{project.dis}</p>
                <p className="font-semibold" data-aos="fade-up" data-aos-delay="200">{project.qus}</p>
                <div>
                  {project.items.map((item: any, ii: number) => (
                    <Fragment key={ii}>
                      <p data-aos="fade-up" data-aos-delay={(ii+3)*100} className="flex gap-3 items-center">
                        <IoMdArrowForward className="text-lime-600" />
                        {item}
                      </p>
                    </Fragment>
                  ))}
                </div>
              </div>
            </main>
          </section>
        </Fragment>
      ))}
    </>
  );
}

export default Projects;
