import React from "react";
import Card from "./Card";


const cards = [
  {
    title: "Printing",
    description:
      "Enhance your event or business with high-quality printed materials, including eye-catching brochures, vibrant fliers, bold posters, and elegant wedding cards. Perfect for promotions, invitations, or sharing important information, these printed pieces are customized to reflect your unique style and message, ensuring maximum impact.",
    imageSrc: "/bronchure.jpg",
  },
  {
    title: "Embroidery",
    description:
      "We embroide a variety of items such as  T-shirts, sweaters, caps, hoodies, jackets and more.Whether for promotional purposes, uniforms, or personal style, embroidered designs offer durability and a sophisticated finish. ",
    imageSrc: "/tshirt.webp",
  },
  {
    title: "Signage",
    description:
      "Signage on cars, jars, bottles, and other objects helps businesses increase visibility and communicate their brand identity creatively.Vehicle signage on cars and delivery trucks offer mobile advertising, while signage on jars, bottles, and containers customizes product packaging, making it unique and professional",
    imageSrc: "/car.jpg",
  },
  {
    title: "Design",
    description:
      "We design logos , business cards ,posters, flyers, bronchures, invitations ,stickers , labels , social media graphics and much more.Our creative designs enables you to establish a strong brand identity and enhance customer engagement.They help businesses differentiate themselves in a competitive market, making their products or services more recognizable and appealing to consumers.",
    imageSrc: "/designs.jpg",
  },
  {
    title: "DTF Printing",
    description:
      "DTF printing is done on Banners. It produces  high-quality graphics on various materials, allowing businesses to create eye-catching displays that effectively communicate their brand message. They are durable and hence ideal for both indoors and outdoors",
    imageSrc: "/dtf.jpg",
  },
  {
    title: "Branding",
    description:
      "Branding is crucial for businesses as it creates a unique identity that sets them apart from competitors, fostering customer loyalty and trust. A strong brand communicates a company's values, mission, and personality, making it easier for consumers to recognize and connect with its products or services.",
    imageSrc: "/branding.jpg",
  },
];

const ServicesPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20" id="services">
      <div className="text-black text-5xl text-center md:text-start  md:text-7xl font-bold ">
        <h1 className="text-black/65 text-4xl md:text-6xl" >WHAT WE DO</h1>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
