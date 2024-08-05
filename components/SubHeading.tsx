import { Separator } from "./ui/separator";

type SubHeadingProps = {
  title: string;
};

const SubHeading = ({ title }: SubHeadingProps) => {
  return (
    <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">{title}</h4>
  );
};

export default SubHeading;
