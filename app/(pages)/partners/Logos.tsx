import React, { FC } from "react";
import Image from "next/image";

interface Props {
  imageSrc: string;
  name: string;
}

const PartnerLogos: FC<Props> = ({ imageSrc, name }) => {
  return (
    <div className="pl-5" >
      <Image src={imageSrc} alt={name} width={200} height={200} className="h-[160px] w-[160px] md:h-[150px] md:w-[150px]" />
    </div>
  );
};

export default PartnerLogos
