import Link from "next/link";
import React from "react";

const ComingSoonPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 w-full h-[80vh] justify-center items-center ">
        <p className="text-3xl md:text-4xl lg:text-6xl font-semibold">
          Coming Soon...
        </p>
        <Link href="/" className="underline">
          Back to HomePage
        </Link>
      </div>
    </div>
  );
};

export default ComingSoonPage;
