import React, { PropsWithChildren } from 'react';
import Nav from '../common/Nav';
import Footer from '../common/Footer';
import { RiWhatsappFill } from 'react-icons/ri';
import { IoMdCall } from 'react-icons/io';
import AOSClient from '../common/AOS';

interface UserLayoutProps {}

const UserLayout: React.FC<PropsWithChildren<UserLayoutProps>> = (props) => {
  return (
    <main>
        <Nav/><AOSClient/>
        <div>{props.children}</div>
        <a target="_blank" href="https://wa.me/+919645900096?text=Hello%20Sukoon%20Edu%20Village" className="p-[6px] rounded-full fixed bottom-7 z-[2] right-7 shadow-xl bg-[#25D366] text-white text-4xl">
        <RiWhatsappFill />
        </a>
        <a target="_blank" href="tel:+919645900096" className="p-[10px] rounded-full fixed bottom-7 z-[2] left-7 shadow-xl bg-blue-500 text-white text-2xl">
        <IoMdCall />
        </a>
        <Footer/>
      
    </main>
  );
};

export default UserLayout;
