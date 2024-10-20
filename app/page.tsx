

import About from "./(pages)/about/page";
import Contacts from "./(pages)/contacts/page";
import Hero from "./(pages)/Home/page";

import WebsiteLayout from "./(pages)/layout";
import Partners from "./(pages)/partners/page";
import Projects from "./(pages)/projects/page";
import ServicesPage from "./(pages)/services/page";

export default function Home() {
  return (
    
    <WebsiteLayout>
      <Hero/>
      <ServicesPage/>
      <About/>
      <Partners/>
      <Projects/>
    </WebsiteLayout>
    
  );
}
