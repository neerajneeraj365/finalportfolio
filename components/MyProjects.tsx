import SubHeading from "@/components/SubHeading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDown, BookText, Bug, UserRound } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "My Portfolio 1.0",
    description:
      "Crafted with precision and creativity, my portfolio website showcases my expertise and passion in a captivating digital canvas.",
    icon: <UserRound size={40} />,
    livelink: "https://neerajportfolio-eight.vercel.app/",
    tags: [
      {
        name: "NextJS",
        color: "bg-slate-200",
      },
      {
        name: "MongoDB",
        color: "bg-green-200",
      },
      {
        name: "Tailwind",
        color: "bg-blue-200",
      },
    ],
  },
  {
    name: "My Portfolio 2.0",
    description:
      "Crafted with precision and creativity, my portfolio website showcases my expertise and passion in a captivating digital canvas.",
    icon: <UserRound size={40} />,
    livelink: "#",
    tags: [
      {
        name: "NextJS",
        color: "bg-slate-200",
      },
      {
        name: "MongoDB",
        color: "bg-green-200",
      },
      {
        name: "Tailwind",
        color: "bg-blue-200",
      },
    ],
  },
  {
    name: "Issue Tracker",
    description:
      "With our platform, users can effortlessly create, manage, and track any type of issue, whether it's a bug, feature request, or task.",
    icon: <Bug size={40} />,
    livelink: "https://issuetracker-kappa.vercel.app",
    tags: [
      {
        name: "NextJS",
        color: "bg-slate-200",
      },
      {
        name: "MongoDB",
        color: "bg-green-200",
      },
      {
        name: "Tailwind",
        color: "bg-blue-200",
      },
    ],
  },
  {
    name: "Blog Website",
    description:
      "A blog website for mental health care. Take control of your mind while reading their articles and quotes of the day",
    icon: <BookText size={40} />,
    livelink: "https://blackhole-pi.vercel.app",
    tags: [
      {
        name: "NextJS",
        color: "bg-slate-200",
      },
      {
        name: "MongoDB",
        color: "bg-green-200",
      },
      {
        name: "Tailwind",
        color: "bg-blue-200",
      },
      {
        name: "Prisma",
        color: "bg-purple-200",
      },
    ],
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
    <div className="mt-2">
      <SubHeading title="My Projects" />
      <div className="flex flex-col flex-wrap justify-between md:flex-row my-4 gap-y-4 gap-x-4">
        {projects.map((project, index) => (
          <Link
            href={project.livelink}
            className="cursor-pointer"
            target="_blank"
            key={index}
          >
            <Card className="h-[225px] lg:w-[340px] transition ease-in-out delay-100 hover:scale-105 duration-300 hover:shadow-md">
              <CardHeader>
                <div className="">{project.icon}</div>
                <CardTitle className="underline">{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex gap-x-1 text-xs dark:text-black">
                  {project.tags?.map((tag, index) => (
                    <p
                      key={index}
                      className={`rounded-xl w-fit px-2 py-1 ${tag.color}`}
                    >
                      {tag.name}
                    </p>
                  ))}
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
