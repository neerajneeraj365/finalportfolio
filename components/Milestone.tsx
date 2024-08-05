import { Backpack, GraduationCap, University } from "lucide-react";
import SubHeading from "./SubHeading";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const educations = [
  {
    name: "PGDM in Cloud Data Management",
    institution: "Conestoga College - Kitchener, CA",
    duration: "May 2023 - Aug 2024",
    icon: <GraduationCap size={20} />,
    livelink: "https://www.conestogac.on.ca/",
    desc: "Relevant Coursework: AWS, SharePoint, WordPress, M365, Figma",
  },
  {
    name: "Bachelor's of Computer Science",
    institution: "Dayananda Sagar University - Bangalore, IN",
    duration: "Aug 2018 - Aug 2022",
    icon: <University size={20} />,
    livelink: "https://dsu.edu.in/",
    desc: "Relevant Coursework: DSA, AI, ML, Databases, Application Development, Software Design and Development",
  },
  {
    name: "XII Standard",
    institution: "Rishikul Vidyapeeth - Sonepat, IN",
    duration: "Apr 2017 - Mar 2018",
    icon: <Backpack size={20} />,
    livelink: "https://www.rishikulvidyapeeth.edu.in/",
    desc: "Relevant Coursework: Physics, Chemistry, Mathematics, Physical Education",
  },
];

const MileStone = () => {
  return (
    <div className="mt-2">
      <SubHeading title="My Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
        {educations.map((education, index) => (
          <Card className="border-dashed" key={index}>
            <CardHeader className="gap-2">
              <div>{education.icon}</div>
              <Link
                href={education.livelink}
                target="_blank"
                className="hover:underline"
              >
                <CardTitle>{education.name}</CardTitle>
              </Link>
              <CardDescription>
                {education.institution} <br />[{education.duration}]<br />
                {education.desc}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MileStone;
