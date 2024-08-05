import Hero from "@/components/Hero";
import MileStone from "@/components/Milestone";
import MyProjects from "@/components/MyProjects";
import WhatIDo from "@/components/WhatIDo";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <WhatIDo /> */}
      <MyProjects />
      <MileStone />
    </div>
  );
}
