import React from "react";

const Training = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-white text-center h-screen">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-10">
          TRAINING
        </h1>
        <p className="text-sm font-medium tracking-[.35em] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500">
          EXPLORE NOW
        </p>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10 text-start">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end">
              <time className="font-mono italic">May 2024 - Current</time>
              <div className="text-lg font-black">
                Mobile App Development React Native
              </div>
              <p className="mb-5">Digital Talent Scholarship x Progate</p>
            </div>
            <hr className="bg-gradient-to-br from-purple-500 to-orange-600" />
          </li>
          <li>
            <hr className="bg-gradient-to-br from-purple-500 to-orange-600" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end ">
              <time className="font-mono italic">Sep 2023 - Nov 2023</time>
              <div className="text-lg font-black">
                Bootcamp Backend Javascript
              </div>
              <p className="mb-5">Digital Talent Scholarship x Binar Academy</p>
            </div>
            <hr className="bg-gradient-to-br from-purple-500 to-orange-600" />
          </li>
          <li>
            <hr className="bg-gradient-to-br from-purple-500 to-orange-600" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end ">
              <time className="font-mono italic">Jun 2023 - Aug 2023 </time>
              <div className="text-lg font-black">IT Support</div>
              <p className="mb-5">Digital Talent Scholarship x Coursera</p>
            </div>
            <hr className="bg-gradient-to-br from-purple-500 to-orange-600" />
          </li>
          <li>
            <hr className="bg-gradient-to-br from-purple-500 to-orange-600" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end ">
              <time className="font-mono italic">Mar 2023 - Apr 2023</time>
              <div className="text-lg font-black">
                Intro to Front-end Web Developer
              </div>
              <p>Digital Talent Scholarship x Progate</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Training;
