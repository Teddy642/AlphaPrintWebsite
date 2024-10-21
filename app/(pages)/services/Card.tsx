"use client";
import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FiPlus } from "react-icons/fi";


import { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="mt-8 bg-white shadow-xl border-b-2 rounded-lg" >
      <div className=" p-5 md:p-0 rounded-t-lg  h-96 overflow-hidden ">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="object-cover h-[100%] w-[100%] rounded-t-lg"
        />
      </div>
      <div className=" mt-3 flex gap-20 items-center justify-center pl-4 pb-4" >
        <h1 className=" text-3xl font-bold text-black" >{title}</h1>
        
        <Accordion>
          <AccordionItem
            key="read"
            aria-label="Read More"
            indicator={<FiPlus />}
            title="Read More"
            className="text-black"
          >
            {description}
          </AccordionItem>
        </Accordion>
      

      </div>
      
    </div>
  );
};

export default Card;
