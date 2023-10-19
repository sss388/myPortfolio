import Header from "@/app/components/Header";
import AboutMeSection from "@/app/components/sections/AboutMeSection";
import SkillSection from "@/app/components/sections/SkillSection";
import ProjectSection from "@/app/components/sections/ProjectSection";


export default function HomePage() {
  return (
    <div className="w-full h-full justify-center ">
        <Header/>
        <AboutMeSection/>
        <SkillSection/>
        <ProjectSection/>
    </div>
  )
}
