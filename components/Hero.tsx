import { cn } from "@/lib/utils";
import SubHeading from "./SubHeading";

const Hero = () => {
  return (
    <div className="my-4 md:my-6 lg:my-8 space-y-2">
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
    </div>
  );
};

export default Hero;
