import SubHeading from "@/components/SubHeading";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Blogs = () => {
  return (
    <div className="my-4 md:my-6 lg:my-8 space-y-6">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <SubHeading title="Blog 01" />
            <h1 className="scroll-m-20 text-6xl font-bold tracking-tight md:text-8xl">
              Why{" "}
              <span
                className={cn(
                  "scroll-m-20 text-6xl text-slate-400 font-semibold tracking-tight md:text-8xl"
                )}
              >
                Next.js
              </span>{" "}
              is better than react?
            </h1>
            <p className="leading-7 font-bold text-lg">Author: Neeraj</p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              SSR and SSG: Next.js comes with built-in support for Server-Side
              Rendering and Static Site Generation. This will allow for improved
              performance and SEO optimization with faster first-page loads than
              with React, which must be explicitly set up to handle these
              features.
              <br />
              <br />
              Automatic code splitting: Next.js automates the process of code
              splitting, making sure that an application only loads the code
              required for every page. Performance is improved by the reduction
              of payload delivered on request. Usually, this is an added
              configuration in a React-only setting.
              <br />
              <br />
              Simplified Routing: Next.js has file-system-based routing, so
              there is no need to set up routes. This makes it much easier to
              manage the placement and navigation between the pages. On the
              other hand, React often requires more libraries or configurations
              to route properly.
              <br />
              <br />
              Built-in API Routes: Next.js has in-built API routes through which
              the developer can write serverless functions in the same codebase.
              It helps to build the back-end functionality much more easily
              directly in your app than React provides.
              <br />
              <br />
              Production-Ready: Next.js has production optimization built-in
              with auto asset optimization, image optimization, serverless
              deployment options, and more. This significantly streamlines the
              development to production workflow, thereby increasing the
              performance and efficiency of an application which might otherwise
              be added via extra tools or configurations in a setup with just
              React.
              <br />
              <br />
              Better SEO by Default: Due to SSR and SSG, Next.js will enhance
              search engine optimization by returning pre-rendered HTML content
              to the crawler. It may be easier to implement in comparison with
              the setup of SEO considerations in a React application.
              <br />
              <br />
              Community and Ecosystem: Next.js comes with a growing community
              and ecosystem that extends the already comprehensive React
              ecosystem. This could also mean faster solutions for problems,
              many plugins at your disposal, and easier integration with already
              existing tools and libraries.
            </p>
            <br />
            <SubHeading title="Thankyou" />
          </CarouselItem>
          <CarouselItem>
            <SubHeading title="Blog 02" />
            <h1 className="scroll-m-20 text-6xl font-bold tracking-tight md:text-8xl">
              How to customize the{" "}
              <span
                className={cn(
                  "scroll-m-20 text-6xl text-slate-400 font-semibold tracking-tight md:text-8xl"
                )}
              >
                not found/404 page
              </span>{" "}
              in Next.js?
            </h1>
            <p className="leading-7 font-bold text-lg">Author: Neeraj</p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              To customize the not found/404 page in Next.js, you can use the
              not-found.tsx file in the app directory. If this file exists,
              Next.js will automatically use it as the custom not found/404
              page.
              <br />
              <br />
              Here&apos;s an example of how you can create a custom not
              found/404 page:
              <br />
              <br />
              1. Create a new file named not-found.tsx inside the app directory:
              Create not-found.tsx in the app directory.
              <br />
              <Image
                src="/notFound.png"
                alt="Code"
                height="300"
                width="300"
                className="flex items-center"
              />
              2. Customize the content of the Custom not-found/404 component
              based on your design and messaging preferences. Customize the
              content according to your preference.
              <br />
              <Image
                src="/notFoundPage.png"
                alt="Code"
                height="500"
                width="500"
                className="flex items-center"
              />
              3. Save the file. After creating this file, any time a user
              accesses a route that doesn&apos;t exist, Next.js will
              automatically render the content from not-found.tsx
            </p>
            <br />
            <SubHeading title="Thankyou" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Blogs;
