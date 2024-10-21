import Link from "next/link";

const Hero = () => {
    return (
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/machine.jpg")' }}  >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Innovative Solutions Elevating Your <span className="text-orange-400/90">Brand & Impact</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-6">
         Our mission is turning your creative vision into reality. From bold visual displays to intricate designs, our services are tailored to help you stand out and connect with your audience in meaningful ways.
          </p>
          <Link href="/projects" className="px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-md">
         Our Projects
          </Link>
        </div>
      </div>
    );
  };
  
  export default Hero;
  