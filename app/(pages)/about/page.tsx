import React from "react";
import Image from "next/image";


const About = () => {
  return (
    <section className="mt-24 max-w-7xl mx-auto" >
        <div>
            <h1 className=" text-5xl text-center md:text-start md:text-7xl font-bold text-black/65" >WHO WE ARE</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 mt-10 md:mt-16 gap-2">
       
        <div className="col-span-3">
            <div className="flex flex-col gap-4 text-lg md:text-md px-3 md:p-0 ">
            <p className="font-semibold">
            Based in Moshi Kilimanjaro , we are a premier one-stop custom Design
            Print and Brand Company proudly serving Tanzania. We Print on
            Digital Press, Large Format , Offset Embroidery , DTF Printing and
            Promotion Items
          </p>
          <p>
            Our Print and Promo experts are ready to turn you to a well known
            product and service provider across Tanzania. Top quality custom
            printer with friendly skilled proffesionals. Look no further but
            ALPHAPRINT INNOVATIONS
          </p>
          <p className="opacity-[0.5]" >
            We will work with you hand in hand with commitment to exceed your
            expectation . Alphaprint Innovations is a solution driven company
            that succesfully connects brands with customers. Other companies
            simply provide products, we provide intergrated Solutions that
            deliver your message change perceptions and drive sales. Think of us
            yourfull service agency with no consultation fees.
          </p>

            </div>
         
        </div>
        <div className=" hidden md:block col-span-3 relative">
          <Image
            src={"/manprinting.png"}
            alt="image"
            width={550}
            height={550}
            className="absolute right-0"
          />
        </div>
      </div>

        </div>
         
    </section>
  );
};

export default About;
