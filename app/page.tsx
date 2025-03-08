import GetInTouch from "@/components/shared/getInTouch";
import MainSection from "@/components/shared/mainSection";
import MyProjects from "@/components/shared/myProjects";
import SkillSection from "@/components/shared/skillsSection";

export default function Home() {
  return (
    <section>
      <MainSection />
      <MyProjects />
      <div className="py-8" />
      <SkillSection />
      <div className="py-8" />
      <GetInTouch />
    </section>
  );
}
