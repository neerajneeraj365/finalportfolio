import SubHeading from "@/components/SubHeading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bug, UserRound } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "My Portfolio 1.0",
    description:
      "Crafted with precision and creativity, my portfolio website showcases my expertise and passion in a captivating digital canvas.",
    icon: <UserRound size={40} />,
    livelink: "https://neerajportfolio-eight.vercel.app/",
  },
  {
    name: "My Portfolio 2.0",
    description:
      "Crafted with precision and creativity, my portfolio website showcases my expertise and passion in a captivating digital canvas.",
    icon: <UserRound size={40} />,
    livelink: "#",
  },
  {
    name: "Issue Tracker",
    description:
      "With our platform, users can effortlessly create, manage, and track any type of issue, whether it's a bug, feature request, or task.",
    icon: <Bug size={40} />,
    livelink: "/comingsoon",
  },
  // {
  //   name: "Issue Tracker",
  //   description:
  //     "With our platform, users can effortlessly create, manage, and track any type of issue, whether it's a bug, feature request, or task. ",
  //   icon: <Bug size={40} />,
  // },
  // {
  //   name: "Issue Tracker",
  //   description:
  //     "With our platform, users can effortlessly create, manage, and track any type of issue, whether it's a bug, feature request, or task. ",
  //   icon: <Bug size={40} />,
  // },
  // {
  //   name: "Issue Tracker",
  //   description:
  //     "With our platform, users can effortlessly create, manage, and track any type of issue, whether it's a bug, feature request, or task. ",
  //   icon: <Bug size={40} />,
  // },
];

const MyProjects = () => {
  return (
    <div className="">
      <SubHeading title="Projects." />
      <div className="flex flex-col flex-wrap justify-between md:flex-row my-4 gap-y-4 gap-x-4">
        {projects.map((project, index) => (
          <Link
            href={project.livelink}
            className="cursor-pointer transition ease-in-out delay-100 hover:scale-105 duration-300"
            target="_blank"
            key={index}
          >
            <Card className="h-[220px] lg:w-[340px]">
              <CardHeader>
                <div className="">{project.icon}</div>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex gap-x-1 text-xs dark:text-black">
                  <p className="bg-red-200 w-fit rounded-xl py-1 px-2">
                    NextJS
                  </p>
                  <p className="bg-green-200 w-fit rounded-xl py-1 px-2">
                    MongoDB
                  </p>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
