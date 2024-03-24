"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import SubHeading from "@/components/SubHeading";

const Contact = () => {
  const handleSubmit = () => {};

  return (
    <section className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col gap-6 md:gap-8 my-8 lg:w-1/2">
        <SubHeading title="Contact Me." />
        <h1 className="scroll-m-20 text-6xl font-bold tracking-tight md:text-8xl">
          Say{" "}
          <span className="scroll-m-20 text-6xl text-slate-400 font-semibold tracking-tight md:text-8xl">
            Namaste
          </span>{" "}
          to me
        </h1>
        <p className="text-md text-slate-400 leading-7 [&:not(:first-child)]:mt-2">
          If the form doesn&apos;t work, Please contact me on{" "}
          <Link
            href="mailto:nikatwork365@gmail.com"
            className="underline text-blue-700"
          >
            nikatwork365@gmail.com
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-4">
            <input
              type="text"
              name="name"
              className="border-gray-200 border-b-2 h-10 bg-transparent outline-none"
              placeholder="John Smith"
            />
            <input
              type="email"
              name="email"
              className="border-gray-200 border-b-2 h-10 bg-transparent outline-none"
              placeholder="xyz@gmail.com"
            />
            <textarea
              name="message"
              id="textarea"
              rows={5}
              className="border-gray-200 border-b-2 bg-transparent outline-none resize-none"
              placeholder="Write your message..."
            />
            <SubHeading title="Under Maintenance...." />
            <Button
              className="flex justify-center items-center my-4 w-24"
              type="submit"
              size="lg"
              disabled={true}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
