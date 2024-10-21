import React from "react";
import PartnerLogos from "./Logos";


const Partners = () => {
  
    const logos = [
        { 
            imageSrc : "/temesalogo.jpg" ,
            name :"logo1"
        },
        { 
            imageSrc : "/joshfeedlogo.png" ,
            name :"logo2"
        },
        { 
            imageSrc : "/DigoTechlogo.png" ,
            name :"logo4"
        },
        { 
            imageSrc : "/Mhclogo.png" ,
            name :"logo6"
        },
        { 
            imageSrc : "/kcmclogo.jpg" ,
            name :"logo9"
        },
       
        { 
            imageSrc : "/BergaLogo.png" ,
            name :"logo3"
        },
       
        { 
            imageSrc : "/Klmlogo.png" ,
            name :"logo5"
        },
      
        { 
            imageSrc : "/selighotellogo.png" ,
            name :"logo7"
        },
        { 
            imageSrc : "/Sunkinglogo.png" ,
            name :"logo8"
        },
        { 
            imageSrc : "/Technologo.png" ,
            name :"logo9"
        },
       
      

    ]

  return (
    <section className="max-w-7xl mx-auto mt-20 flex flex-col gap-12">
      <h1 className="text-center text-3xl font-semibold mt-4 text-black/65">Our partners</h1>
      <p className="text-center text-black p-3 md:p-0 " >We are trusted by leading businesses across various industries, helping them elevate their brand visibility with customized print and branding solutions.</p>

      <div className=" grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
        {logos.map((logo, index)=>(
            <PartnerLogos
            key={index}
            imageSrc={logo.imageSrc}
            name={logo.name}
            
            />
        ))}

      </div>
    </section>
  );
};

export default Partners;
