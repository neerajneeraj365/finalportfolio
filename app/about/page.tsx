import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SubHeading from "@/components/SubHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | NN",
  description: "I am Full Stack Developer",
};

const About = () => {
  return (
    <div className="my-4 md:my-6 lg:my-8 space-y-8">
      <SubHeading title="About Me." />
      <h1 className="scroll-m-20 text-6xl font-bold tracking-tight md:text-8xl">
        Get to{" "}
        <span className="scroll-m-20 text-6xl text-slate-400 font-semibold tracking-tight md:text-8xl">
          know
        </span>{" "}
        me
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Currently, studying in the{" "}
        <Link
          href="https://www.conestogac.on.ca/about"
          className="underline text-yellow-600"
          target="_blank"
        >
          Conestoga College
        </Link>{" "}
        PGDM in Cloud Data Management and learning new technologies. I am a
        highly motivated and enthusiastic Full Stack Developer with a strong
        passion for React/Next. I enjoy building web apps with different
        technologies.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I will study your business requirements, build them, and bring them into
        the real world. With six months of hands-on experience, I bring
        enthusiasm and a solid foundation in both front-end and back-end
        technologies to the table. Also, with a fresh perspective and a robust
        understanding of design principles, my commitment extends to translating
        your business requirements into compelling, real-world user experiences.
      </p>
      <div className="flex flex-col md:flex-row gap-y-4 gap-x-4">
        <Card className="lg:w-[340px]">
          <CardHeader>
            <CardTitle>🖥️ Area of Expertise</CardTitle>
            <CardDescription>
              UI/UX Design <br />
              Responsive Web Development <br />
              Front-end Development <br />
              Backend Development <br />
              API Development and Integration <br />
              SEO <br />
              Databases <br />
              Deployment <br />
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="lg:w-[340px]">
          <CardHeader>
            <CardTitle>💼 Technical Skills</CardTitle>
            <CardDescription>
              <span className="font-bold">Design tools:-</span> Figma,
              Balsamiq <br />
              <span className="font-bold">Languages:-</span> HTML, CSS,
              JavaScript, TypeScript <br />
              <span className="font-bold">Frameworks:-</span> Front-end: React,
              Next & Back-end: Node, Express <br />
              <span className="font-bold">Databases:-</span> MongoDB, PlanetScale, SQL,
               <br />
              <span className="font-bold">Libraries:-</span> Material UI, Shadcn
              UI, Ant Design <br />
              <span className="font-bold">Version control:-</span> Git <br />
              <span className="font-bold">Deployment:-</span> Vercel, AWS{" "}
              <br />
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="lg:w-[340px]">
          <CardHeader>
            <CardTitle>⏳ Soft Skills</CardTitle>
            <CardDescription>
              <span className="font-bold">Leadership:-</span> Decision making,
              Mentoring, Planning <br />
              <span className="font-bold">Communication:-</span> Active
              listening, Presentation <br />
              <span className="font-bold">Teamworking:-</span> Problem solving,
              Critical thinking
              <br />
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default About;
