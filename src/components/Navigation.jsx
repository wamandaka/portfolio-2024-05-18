import { useState, useEffect } from "react";
import { FaHome, FaFileCode, FaUser } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const dataNav = [
  {
    id: 1,
    name: "Home",
    url: "section1",
    animateDuration: "slower",
    icon: <FaHome />,
  },
  {
    id: 2,
    name: "About",
    url: "section2",
    animateDuration: "slow",
    icon: <FaUser />,
  },
  {
    id: 3,
    name: "Experience",
    url: "section3",
    animateDuration: "slow",
    icon: <MdWorkHistory />,
  },
  {
    id: 4,
    name: "Projects",
    url: "section4",
    animateDuration: "fast",
    icon: <FaFileCode />,
  },
  {
    id: 5,
    name: "Certificates",
    url: "section5",
    animateDuration: "faster",
    icon: <PiCertificateFill />,
  },
];

const Navigation = () => {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = dataNav.map((nav) => document.getElementById(nav.url));
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveLink(entry.target.id);
            }
          });
        },
        { threshold: 0.5 } // Adjust this value as needed
      );

      sections.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });

      return () => {
        sections.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      };
    };

    handleScroll();
  }, []);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="absolute text-white left-10 top-[40%] flex-col gap-5 hidden lg:flex">
      <ul className="menu bg-base-300 rounded-box">
        {dataNav.map((nav) => {
          const isActive = activeLink === nav.url;
          return (
            <li key={nav.id}>
              <a
                href={`#${nav.url}`}
                onClick={(e) => handleSmoothScroll(e, nav.url)}
                className={`text-sm font-medium ${
                  isActive ? "focus" : "text-white"
                } tooltip tooltip-right`}
                data-tip={nav.name}
              >
                <i className="text-xl">{nav.icon}</i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
