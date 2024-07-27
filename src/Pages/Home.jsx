import { useEffect, useState, useRef } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Project from "../components/Project";
import StarrySky from "../components/StarrySky";
import Training from "../components/Training";
import Navigation from "../components/Navigation";
import { BsRocket } from "react-icons/bs";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSection1Visible, setIsSection1Visible] = useState(true);
  const section1Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSection1Visible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (section1Ref.current) {
      observer.observe(section1Ref.current);
    }

    return () => {
      if (section1Ref.current) {
        observer.unobserve(section1Ref.current);
      }
    };
  }, [section1Ref]);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    setIsAnimating(true);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Duration of the animation
  };

  return (
    <>
      <div className="relative">
        <StarrySky />
        <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-neutral-950 bg-[url('/src/assets/bg-pattern.png')] bg-auto bg-no-repeat lg:bg-cover bg-top">
          <Navigation />
          <section
            id="section1"
            ref={section1Ref}
            className="flex h-screen snap-start items-center justify-center"
          >
            <Hero />
          </section>
          <section
            id="section2"
            className="flex h-screen snap-start items-center justify-center"
          >
            <About />
          </section>
          <section
            id="section3"
            className="flex snap-start items-center justify-center"
          >
            <Project />
          </section>
          <section
            id="section4"
            className="flex snap-start items-center justify-center"
          >
            <Training />
          </section>
          <section
            id="section5"
            className="flex snap-end items-center justify-center"
          >
            <Footer />
          </section>
          {!isSection1Visible && (
            <a
              onClick={(e) => handleSmoothScroll(e, "section1")}
              className={`text-white text-sm font-medium ml-2 lg:hidden absolute right-5 bottom-16 ${
                isAnimating ? "animate-rocketAnimate" : ""
              }`}
            >
              <BsRocket size={40} />
            </a>
          )}
        </div>
      </div>
    </>
  );
}
