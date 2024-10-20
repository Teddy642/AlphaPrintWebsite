import React, { FC } from "react";
import Image from "next/image";

interface Props {
  imageSrc: string;
  name: string;
}

const PartnerLogos: FC<Props> = ({ imageSrc, name }) => {
  return (
    <div>
      <Image src={imageSrc} alt={name} width={200} height={200} />
    </div>
  );
};

export default PartnerLogos
