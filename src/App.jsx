import NavBar from "./Components/NavBar";
import HeroSection from './Sections/HeroSection';
import MessageSection from "./Sections/MessageSection";
import FlavorSection from "./Sections/FlavorSection";
import NutritionSection from "./Sections/NutritionSection";
import BenefitSection from "./Sections/BenefitSection";
import TestimonialSection from "./Sections/TestimonialSection";
import FooterSection from "./Sections/FooterSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const App = () => {
  useGSAP(() =>{
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
 
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />

          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App
