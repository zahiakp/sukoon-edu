// components/SocialShare.js
"use client"
import React from 'react';
import {FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon,LinkedinShareButton,LinkedinIcon,PinterestShareButton,PinterestIcon,EmailShareButton,EmailIcon, WhatsappShareButton, WhatsappIcon,} from 'react-share';
import { shareToWhatsApp } from './SharetoWhatsapp';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa6';
import { shareToFacebook } from './SharetoFacebook';

const SocialShare = ({ data }:{data:any}) => {
  return (
    <div className="social-share flex gap-2">
      {/* <FacebookShareButton url={data.url} title={data.title} hashtag="#yourhashtag">
        <FacebookIcon size={40} round />
      </FacebookShareButton> */}
            <button className='h-10 w-10 rounded-full text-[20px] flex items-center justify-center bg-[#4267B2] text-white' onClick={() => shareToFacebook(data)}><FaFacebookF  /></button>


      <TwitterShareButton url={data.url} title={data.title} via="yourTwitterHandle">
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      <LinkedinShareButton url={data.url} title={data.title} summary={data.body}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>

      <PinterestShareButton url={data.url} media={data.image} description={data.body}>
        <PinterestIcon size={40} round />
      </PinterestShareButton>

      <EmailShareButton url={data.url} subject={data.title} body={data.body}>
        <EmailIcon size={40} round />
      </EmailShareButton>
      {/* <WhatsappShareButton url={data.url} >
        <WhatsappIcon size={40} round></WhatsappIcon>
      </WhatsappShareButton> */}


      <button className='h-10 w-10 rounded-full text-2xl flex items-center justify-center bg-[#25D366] text-white' onClick={() => shareToWhatsApp(data)}><FaWhatsapp /></button>
    </div>
  );
};

export default SocialShare;
