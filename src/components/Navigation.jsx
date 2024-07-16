import React, { useState } from "react";
import "animate.css";

const dataNav = [
  {
    id: 1,
    name: "Home",
    url: "section1",
    animateDuration: "faster",
  },
  {
    id: 2,
    name: "About",
    url: "section2",
    animateDuration: "fast",
  },
  {
    id: 3,
    name: "Project",
    url: "section3",
    animateDuration: "slow",
  },
  {
    id: 4,
    name: "Experience",
    url: "section4",
    animateDuration: "slower",
  },
];

const Navigation = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    setActiveLink(sectionId);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="absolute text-white left-10 top-[40%] flex-col gap-5 hidden lg:flex">
      {dataNav.map((nav) => {
        const isActive = activeLink === nav.url;
        return (
          <a
            href={`#${nav.url}`}
            key={nav.id}
            onClick={(e) => handleSmoothScroll(e, nav.url)}
            className={`text-sm font-medium hover:text-purple-500 animate__animated animate__fadeInLeft animate__${
              nav.animateDuration
            } ${isActive ? "text-purple-500" : "text-white"}`}
            // data-aos="fade-right"
            // data-aos-duration={nav.animateDuration}
          >
            {nav.name}
          </a>
        );
      })}
    </div>
  );
};

export default Navigation;
