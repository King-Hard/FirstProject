import Navbar from "./Components/Navbar"
import HeroSection from './Sections/HeroSection'
import MessageSection from "./Sections/MessageSection"
import FlavorSection from "./Sections/FlavorSection"
import NutritionSection from "./Sections/NutritionSection"
import BenefitsSection from "./Sections/BenefitsSection"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const App = () => {
  useGSAP(() =>{
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    })
  })
 
  return (
    <main>
      <Navbar/>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection/>
          <MessageSection/>
          <FlavorSection/>
          <NutritionSection/>
          <BenefitsSection/>
          <div className="h-dvh border border-red-600"/>
        </div>
      </div>
    </main>
  )
}

export default App