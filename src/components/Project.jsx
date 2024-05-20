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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-4 mt-10 mb-20 md:mx-20 md:w-[70%]">
          <a
            href="https://wamandaka.github.io/react-app-weatherapp/"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <Card className="bg-transparent text-white">
              <CardHeader>
                <CardTitle>Weather App</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Create a Weather App using ReactJS, TailwindCSS, Axios and
                  OpenWeather API
                </p>
              </CardContent>
              <CardFooter className="flex justify-center items-center gap-2">
                <p className="border px-4 py-1 rounded-full">ReactJS</p>
                <p className="border px-4 py-1 rounded-full">TailwindCSS</p>
                <p className="border px-4 py-1 rounded-full">Axios</p>
              </CardFooter>
            </Card>
          </a>
          <a
            href="https://personal-website-ayaka.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <Card className="bg-transparent text-white">
              <CardHeader>
                <CardTitle>Personal Website</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Slicing UI Personal Website with ReactJS and TailwindCSS</p>
              </CardContent>
              <CardFooter className="flex justify-center items-center gap-2">
                <p className="border px-4 py-1 rounded-full">ReactJS</p>
                <p className="border px-4 py-1 rounded-full">TailwindCSS</p>
              </CardFooter>
            </Card>
          </a>
          <a
            href="https://reverse1999-characters-kang-piscok.koyeb.app/"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <Card className="bg-transparent text-white">
              <CardHeader>
                <CardTitle>Public API</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Create a Public API (Reverse 1999 Character List)</p>
              </CardContent>
              <CardFooter className="flex justify-center items-center gap-2">
                <p className="border px-4 py-1 rounded-full">NodeJS</p>
                <p className="border px-4 py-1 rounded-full">ExpressJS</p>
                <p className="border px-4 py-1 rounded-full">PostgreSQL</p>
              </CardFooter>
            </Card>
          </a>
          <a
            href="https://slicing-saas-landing-page.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <Card className="bg-transparent text-white">
              <CardHeader>
                <CardTitle>Landing Page</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Slicing UI Landing Page with ReactJS and TailwindCSS</p>
              </CardContent>
              <CardFooter className="flex justify-center items-center gap-2">
                <p className="border px-4 py-1 rounded-full">ReactJS</p>
                <p className="border px-4 py-1 rounded-full">TailwindCSS</p>
              </CardFooter>
            </Card>
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
