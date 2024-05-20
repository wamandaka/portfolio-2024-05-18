import React from "react";

const About = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-white text-center h-screen">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-10">
          ABOUT ME
        </h1>
        <p className="text-sm font-medium tracking-[.35em] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500">
          EXPLORE NOW
        </p>
        <p className="text-sm md:text-lg font-medium mt-10 w-72 md:w-1/2 lg:w-[75%]">
          I'm a Bachelor of Computer Science and a graduate from Binar Academy
          Bootcamp stack Backend Javascript. Having good knowladge and skill
          working with various frameworks and tools through my projects.
        </p>
        <p className="text-sm md:text-lg font-medium mt-7 w-72 md:w-1/2 lg:w-[75%]">
          I have experience in developing Landing Pages using ReactJS and
          developing API using ExpressJS. Currently, I'm seeking an opportunity
          to continue growing my skill set in the Full-Stack field.
        </p>
      </div>
    </>
  );
};

export default About;
