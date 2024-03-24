import React from "react";
import SubHeading from "./SubHeading";

const WhatIDo = () => {
  return (
    <div>
      <SubHeading title="What I Do" />
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        I am a professional who wears many hats in the world of website
        development. Imagine me as the architect, builder, and maintenance crew
        rolled into one for a digital project. My job revolves around creating
        websites or web applications from scratch or maintaining and upgrading
        existing ones.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        At the <span className="font-semibold">front end</span> of website
        development, My focus is on the user experience. I design how a website
        looks and feels, ensuring it's visually appealing, easy to navigate, and
        responsive across different devices like desktops, tablets, and
        smartphones. This involves using languages like HTML for content
        structure, CSS for styling, and JavaScript for interactivity. I use
        frameworks like React or NextJS to streamline the development process
        and create dynamic user interfaces.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        However, My work doesn't stop there. I am equally proficient in{" "}
        <span className="font-semibold">back-end </span>
        development. This involves building and maintaining the server-side of
        websites, where data is stored, processed, and retrieved. I work with
        databases like MongoDB, MySQL, or PostgreSQL to store information
        securely and efficiently. I use frameworks like Node.js and Express.js
        for server-side scripting. It allows me to write server-side code using
        JavaScript.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        I excel in seamlessly integrating front-end and back-end components,
        facilitating smooth data flow through APIs. I manage user
        authentication, data processing, and security measures & much more.
        Also, I optimize performance, monitoring server load and resolving
        issues to ensure scalability. As a problem-solver, I possess a
        comprehensive grasp of web technologies, essential for crafting
        functional and user-friendly digital solutions.
      </p>
    </div>
  );
};

export default WhatIDo;
