// import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import {blogs} from '@/utils/data/blogs'
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/achievements";
import Skills from "./components/homepage/skills";
import TalksAndResearch from "./components/homepage/talkandresearch";
import Certifications from "./components/homepage/certification";


export default async function Home() {
 

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <TalksAndResearch/>
      <Education />
      <Certifications/>
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  )
};