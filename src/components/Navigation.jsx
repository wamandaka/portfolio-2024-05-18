import React from "react";
import "animate.css";

const dataNav = [
  {
    id: 1,
    name: "Home",
    url: "section1",
    aosDuration: 1000,
  },
  {
    id: 2,
    name: "About",
    url: "section2",
    aosDuration: 1500,
  },
  {
    id: 3,
    name: "Project",
    url: "section3",
    aosDuration: 2000,
  },
  {
    id: 4,
    name: "Training",
    url: "section4",
    aosDuration: 2500,
  },
];

const Navigation = () => {
  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="absolute text-white left-10 top-[40%] flex-col gap-5 hidden lg:flex">
      {dataNav.map((nav) => {
        return (
          <a
            href={nav.url}
            key={nav.id}
            onClick={(e) => handleSmoothScroll(e, nav.url)}
            className="text-white text-sm font-medium hover:text-purple-500"
            data-aos="fade-right"
            data-aos-duration={nav.aosDuration}
          >
            {nav.name}
          </a>
        );
      })}
    </div>
  );
};

export default Navigation;
