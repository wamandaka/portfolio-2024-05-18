import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Project from "./components/Project";
import StarrySky from "./components/StarrySky";
import Training from "./components/Training";

export default function App() {
  return (
    <>
      <div className="relative">
        <StarrySky />
        <div className="max-h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-black bg-[url('./assets/bg-pattern.svg')] bg-auto bg-no-repeat lg:bg-cover bg-top">
          <section
            id="section1"
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
            className="flex snap-start items-center justify-center"
          >
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}
