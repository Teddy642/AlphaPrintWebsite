import React from 'react'
import ProjectCards from './Cards'


const Cards =[
    {
        imgSource:"/mockup1.png",
        name:"Shoulder Straps"
    },
    {
        imgSource:"/mockup2.png",
        name:"Buttons"
    },
    {
        imgSource:"/mockup3.png",
        name:"Signage Cars"
    },
    {
        imgSource:"/mockup4.png",
        name:"Mugs"
    },
    {
        imgSource:"/mockup14.png",
        name:"Caps"
    },
    {
        imgSource:"/mockup8.png",
        name:"Customized Bracelets"
    },
    {
        imgSource:"/mockup11.png",
        name:"Customized Tshirts"
    },
    {
        imgSource:"/mockup12.png",
        name:"Rollup Banners"
    },
    {
        imgSource:"/mockup13.png",
        name:"Bags"
    },
    {
        imgSource:"/mockup6.png",
        name:"Flash Printing"
    }
]

const Projects = () => {
  return (
    <section className='max-w-5xl mx-auto mt-20 md:mt-36'>
        <h1 className=' text-3xl md:text-5xl text-center text-black/65'>Our Project Samples</h1>
        <div className='grid grid-cols-3 gap-5 mt-5 p-3 md:p-0 md:mt-20'>
            {Cards.map((Card, index)=>(
                <ProjectCards
                 key={index} 
                 imgSource={Card.imgSource} 
                 name={Card.name}
                 />
            ))}
          
        </div>

    </section>


  )
}

export default Projects