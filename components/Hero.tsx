import { cn } from "@/lib/utils";
import SubHeading from "./SubHeading";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="my-4 md:my-6 lg:my-8 space-y-6">
      <SubHeading title="Hello, I'm Neeraj." />
      <h1 className="scroll-m-20 text-6xl font-bold tracking-tight md:text-8xl">
        a Full Stack{" "}
        <span
          className={cn(
            "scroll-m-20 text-6xl text-slate-400 font-semibold tracking-tight md:text-8xl"
          )}
        >
          Developer
        </span>{" "}
        with a passion for building web apps
      </h1>

      <div className="flex items-center justify-start md:justify-center gap-4">
        <Button asChild>
          <Link href="/Resume.pdf" target="_blank">
            Resume
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/blog" target="_blank">
            Read my Blogs <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="flex items-center justify-center">
        <Image src="/WebDev.jpg" alt="Image" height="1000" width="1300" className="rounded-xl" />
      </div>
    </div>
  );
};

export default Hero;
