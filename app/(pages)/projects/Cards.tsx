import React from 'react'
import Image from 'next/image'
import {FC} from 'react'

interface CardsProps{
    imgSource : string,
    name : string

}

const ProjectCards:FC<CardsProps> = ({imgSource , name}) => {
  return (
    <>
    <div className='bg-white shadow-xl rounded-lg border-t-[1px]' >
        <Image
        src={imgSource}
        alt={name}
        width={600}
        height={600}
        />
         </div>
       
       
    </>
    
  )
}

export default ProjectCards
        