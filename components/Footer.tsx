import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {

    const currentYear = new Date().getFullYear(); 
  return (
    <section className="max-w-7xl mx-auto mt-24 border-t-2 ">
      <div className="pt-12">
        <div className="flex justify-center">
          <Image
            src={"/logo2.png"}
            alt={"logo"}
            width={200}
            height={200}
            className=""
          />
        </div>

        <div className="flex gap-2 justify-center items-center pt-8">
          <FaPhone fill="orange" size={25} />
          <Link href="tel:+255713278988" className="opacity-[0.8] text-black">+255 713278988</Link>
        </div>
        <div className="flex gap-2 justify-center items-center pt-2">
          <FaPhone fill="orange" size={25} />
          <Link href="tel:+255756577194" className="opacity-[0.8] text-black">+255 756577194</Link>
        </div>
        <div className="flex gap-2 justify-center items-center pt-3 ">
          <AiOutlineMail fill="orange" size={25} />
          <Link href="mailto:alphaprint@gmail.com" className="opacity-[0.8] text-black">
            alphaprintinnovations@gmail.com
          </Link>
        </div>
      </div>
      <div className="w-[100%] bg-orange-400/90 h-96 rounded-lg mt-6">
        <div className=" relative w-[95%] mx-auto flex gap-2 justify-center items-center p-6 md:pt-20">
          <GrLocation className="w-[20px] h-[20px] absolute left-0 md:left-40 top-7 md:top-20"  />
          <p className="opacity-[0.8]">
            Boma Street, Moshi near Kilimanjaro Hospital Aroma Cafee
            Restaurant and BM Coach , Kilimanjaro bus offices Tanzania
          </p>
        </div>
        <div className="border-t-2 border-black border-opacity-[0.5] mt-4 md:mt-14 w-[80%] mx-auto" ></div>
        <div className="flex gap-5 mx-auto md:gap-16 items-center justify-center pt-10">
          <Link href={"/"} className="underline opacity-[0.8]">Home</Link>
          <Link href={"/about"} className="underline opacity-[0.8]" >About</Link>
          <Link href={"/services"} className="underline opacity-[0.8]" >Services</Link>
          <Link href={"/pricing"} className="underline opacity-[0.8]">Pricing</Link>
          <Link href={"/contacts"} className="underline opacity-[0.8]">Contacts</Link>
        </div>
        <div>
            <p className="text-center mt-10 opacity-[0.8]">&copy; {currentYear} AlphaPrintInnovations. All Rights Reserved.</p>
        </div>
        <div className="flex gap-8 mt-6 justify-center" >
            <Link href={'https://www.instagram.com/alphaprint_innovations'}>
            <BsInstagram size={30} className="opacity-[0.8]" />
            </Link>
            <Link href={'https://www.facebook.com/Alphaprint innovations'}>
            <MdFacebook size={32} className="opacity-[0.8]" />
            </Link>
            <Link href={'https://www.twitter.com/Alphaprint_in'}>
            <FaXTwitter size={30} className="opacity-[0.8]" />
            </Link>

        </div>
      </div>
    </section>
  );
};

export default Footer
