import React from "react";

const Experince = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-white text-center h-screen">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-10">
          EXPERIENCE
        </h1>
        <p className="text-sm font-medium tracking-[.35em] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500">
          EXPLORE NOW
        </p>
        <div className="lg:flex text-start justify-between mt-10 items-end space-y-3 w-72 md:w-[75%]">
          <h1 className="text-2xl">
            <span className="font-bold">Mendix Developer Internship</span> at Merkle Innovation
          </h1>
          <p>APR 2024 - JUL 2024, JAKARTA</p>
        </div>
        <div className="lg:text-start mt-10 text-start text-sm md:text-lg w-72 md:w-[75%]">
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Develope a Contract Monitoring System using Mendix Studio Pro
            </li>
            <li>Design User Interface for App within Mendix Studio Pro</li>
            <li>
              Established data relationships between entities using a domain
              model in Mendix Studio Pro, fostering data integrity and
              facilitating seamless information flow.
            </li>
            <li>
              Utilized microflows to automate data capture, transfer, and
              deletion processes, optimizing efficiency and data integrity.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experince;
