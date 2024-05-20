import React from "react";
import pp from "../assets/pp.jpg";

const Hero = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-white text-center h-screen">
        <div className="w-32 h-32">
          <img src={pp} alt="" className="rounded-full" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-10 font-poppins">
          Hi, I'm Daka
        </h1>
        <p className="text-sm md:text-lg lg:text-xl font-medium">
          I do code &{" "}
          <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Chill
          </span>
        </p>
        <h2 className="text-lg md:text-xl lg:text-2xl font-medium mt-7 w-72 md:w-96 ">
          I have experience in developing Website using ReactJS, and API using
          ExpressJS.
        </h2>
        <div className="flex justify-center items-center gap-3">
          <a
            href="mailto:wamandaka122@gmail.com"
            className="border border-gray px-6 py-2 mt-10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1UByVaKSVwxuFtffr7aFORgSQFweYdrtH/view"
            target="_blank"
            rel="noreferrer"
            className="border border-gray px-4 py-2 mt-10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
