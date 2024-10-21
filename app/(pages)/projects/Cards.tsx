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
    <div className='bg-white shadow-xl  md:p-0 rounded-lg border-t-[1px]' >
        <Image
        src={imgSource}
        alt={name}
        width={600}
        height={600}
        className='h-[150px] w-[150px] md:h-[200px] md:w-[200px] '
        />
         </div>
       
       
    </>
    
  )
}

export default ProjectCards
        