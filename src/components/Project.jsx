import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const dataProjects = [
  {
    id: 1,
    name: "Weather App",
    url: "https://wamandaka.github.io/react-app-weatherapp/",
    description:
      "Create a Weather App using ReactJS, TailwindCSS, Axios and OpenWeather API",
    technologies: [
      { name: "ReactJS", color: "blue" },
      { name: "TailwindCSS", color: "red" },
      { name: "Axios", color: "text-red-500" },
    ],
  },
  {
    id: 2,
    name: "REST API Todo List",
    url: "https://github.com/wamandaka/cdp-mock-test",
    description:
      "Create a REST API Todo List Application for Mock Technical Test",
    technologies: [
      { name: "NodeJS", color: "text-green-700" },
      { name: "ExpressJS", color: "text-yellow-500" },
      { name: "PostgreSQL", color: "text-blue-800" },
    ],
  },
  {
    id: 3,
    name: "Public API",
    url: "https://reverse1999-characters-kang-piscok.koyeb.app/",
    description: "Create a Public API (Reverse 1999 Character List)",
    technologies: [
      { name: "NodeJS", color: "text-green-700" },
      { name: "ExpressJS", color: "text-yellow-500" },
      { name: "PostgreSQL", color: "text-blue-800" },
    ],
  },
  {
    id: 4,
    name: "Slicing Saas Landing Page",
    url: "https://slicing-saas-landing-page.vercel.app/",
    description: "Slicing UI Landing Page with ReactJS and TailwindCSS",
    technologies: [
      { name: "ReactJS", color: "text-blue-500" },
      { name: "TailwindCSS", color: "text-green-500" },
      { name: "daisyUI", color: "text-pink-500" },
    ],
  },
];

const Project = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-white text-center md:h-screen">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-10">
          PROJECTS
        </h1>
        <p className="text-sm font-medium tracking-[.35em] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500">
          EXPLORE NOW
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-4 mt-10 mb-20 md:mx-20 md:w-[90%] lg:w-[60%]">
          {dataProjects.map((project) => {
            return (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className=""
                key={project.id}
              >
                <Card className="bg-transparent group text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-orange-500 group-hover:transition-all group-hover:duration-300 pb-1 group-hover:ease-in">
                      {project.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center items-center gap-2">
                    {project.technologies.map((technology, index) => {
                      return (
                        <p
                          key={index}
                          className={`border px-4 py-1 rounded-full hover:text-${technology.color}-500`}
                        >
                          {technology.name}
                        </p>
                      );
                    })}
                  </CardFooter>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
