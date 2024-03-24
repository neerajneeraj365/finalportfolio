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
              Databases <br />
              Deployment <br />
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="lg:w-[340px]">
          <CardHeader>
            <CardTitle>💼 Technical Skills</CardTitle>
            <CardDescription>
              Design tools:- Figma, Adobe XD <br />
              Languages:- HTML, CSS, JavaScript <br />
              Frameworks:- Front-end: React, Next & Back-end: Node, Express{" "}
              <br />
              Databases:- MongoDB, SQL, Firebase <br />
              Libraries:- Material UI, Shadcn UI, Ant Design <br />
              Version control:- Git <br />
              Deployment:- Vercel, AWS, Azure <br />
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default About;
