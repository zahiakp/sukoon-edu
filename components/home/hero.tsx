'use client'
import React, { useEffect, useState } from "react";
import WordPullUp from "../ui/word-pull-up";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import StyledButton from "../StyledButton";

function Hero() {
  const [show,setShow] = useState(true)
const SLIDES = [
  {title:"Where knowledge meets the heart of the village.",image:"banner.jpg",phoneImg:'img1_potrait.jpg',dis:""},
  {title:"Where knowledge meets the heart of the village.",image:"11.jpg",phoneImg:'11.jpg',dis:""},
  {title:"Stories that shape lives.",image:"HP4A5440.jpg",phoneImg:'HP4A5440.jpg',dis:""},
  {title:"Stories that shape lives.",image:"IMG_1830test.JPG",phoneImg:'IMG_1830test.JPG',dis:""},
]
console.log("Show state:", show);
useEffect(() => {
  setTimeout(() => {
    setShow(true);
  }, 500); 
}, []);

const [screenRatio, setScreenRatio] = useState('web');

useEffect(() => {
  const updateScreenRatio = () => {
    setScreenRatio(window.innerWidth <= 640 ? 'phone' : 'web');
  };

  updateScreenRatio();
  window.addEventListener('resize', updateScreenRatio);

  return () => {
    window.removeEventListener('resize', updateScreenRatio);
  };
}, []);
const pagination = {
  clickable: true,
  renderBullet: function (index:any, className:any) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
};
  return (
    <div className="overflow-hidden h-[650px]">
 
<Swiper
  className="w-full"
  id="swiper"
  modules={[Autoplay,Pagination]}
  onInit={(swiper) => {
    setShow(true);
  }}
  onSlideChange={() => {
    setShow(false);
  }}
  onSlideChangeTransitionEnd={() => {
    setShow(true);
  }}
  pagination={true}
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  }}
  loop={true}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
>
  {SLIDES.map((slide: any, i: number) => (
    <SwiperSlide key={i}>
      <div
        className={`w-[100%] h-[650px] bg-gradient-to-br from-[#7ed56f]/80 to-[#28b485]/80 bg-cover bg-center flex items-center justify-start px-[10%]`}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0)), url(/image/${screenRatio=='phone' ? slide.phoneImg : slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
          <WordPullUp words={slide.title} className="text-6xl w-full md:w-2/4 text-white Grotesque-font group leading-[55px] md:text-8xl md:leading-[80px] md:text-left font-normal" show={show ? 'show' : "hidden"} />
      </div>
    </SwiperSlide>
  ))}
</Swiper>


    {/*  <div className="w-[70%] max-w-[1200px] mx-auto h-full text-[110px] leading-[90px] text-white justify-center flex flex-col items-start">
      <WordPullUp
      className="md:w-[60%] Grotesque-font font-medium text-left tracking-[-0.02em] text-7xl leading-[60px] md:text-[130px] md:leading-[100px]"
      words="Stories  that  shape  lives"
    />
        <p className="text-base text-lime-100 md:w-[55%] mt-10">Welcome to Sukoon Edu Village, nestled in the heart of Andhaka Village. A sanctuary of harmony and
learning, we nurture young minds through education and the universal language of love.</p>
      </div>
      <img src="/image/Logo strock.png" alt="" className="absolute -bottom-52 right-[15%] h-[350px] md:h-[500px]"/> */}
    </div>
  );
}

export default Hero;
