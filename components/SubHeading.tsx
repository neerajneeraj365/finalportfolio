type SubHeadingProps = {
  title: string;
};

const SubHeading = ({ title }: SubHeadingProps) => {
  return (
    <h4 className="scroll-m-20 text-xl font-normal tracking-tight">{title}</h4>
  );
};

export default SubHeading;
