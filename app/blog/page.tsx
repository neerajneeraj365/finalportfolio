import SubHeading from "@/components/SubHeading";
import { cn } from "@/lib/utils";

const Blogs = () => {
  return (
    <div className="my-4 md:my-6 lg:my-8 space-y-6">
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
      <p className="leading-7 font-bold text-lg">
        Author: Neeraj
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        SSR and SSG: Next.js comes with built-in support for Server-Side
        Rendering and Static Site Generation. This will allow for improved
        performance and SEO optimization with faster first-page loads than with
        React, which must be explicitly set up to handle these features.
        <br />
        <br />
        Automatic code splitting: Next.js automates the process of code
        splitting, making sure that an application only loads the code required
        for every page. Performance is improved by the reduction of payload
        delivered on request. Usually, this is an added configuration in a
        React-only setting.
        <br />
        <br />
        Simplified Routing: Next.js has file-system-based routing, so there is
        no need to set up routes. This makes it much easier to manage the
        placement and navigation between the pages. On the other hand, React
        often requires more libraries or configurations to route properly.
        <br />
        <br />
        Built-in API Routes: Next.js has in-built API routes through which the
        developer can write serverless functions in the same codebase. It helps
        to build the back-end functionality much more easily directly in your
        app than React provides.
        <br />
        <br />
        Production-Ready: Next.js has production optimization built-in with auto
        asset optimization, image optimization, serverless deployment options,
        and more. This significantly streamlines the development to production
        workflow, thereby increasing the performance and efficiency of an
        application which might otherwise be added via extra tools or
        configurations in a setup with just React.
        <br />
        <br />
        Better SEO by Default: Due to SSR and SSG, Next.js will enhance search
        engine optimization by returning pre-rendered HTML content to the
        crawler. It may be easier to implement in comparison with the setup of
        SEO considerations in a React application.
        <br />
        <br />
        Community and Ecosystem: Next.js comes with a growing community and
        ecosystem that extends the already comprehensive React ecosystem. This
        could also mean faster solutions for problems, many plugins at your
        disposal, and easier integration with already existing tools and
        libraries.
      </p>
      <SubHeading title="Thankyou" />
    </div>
  );
};

export default Blogs;
