const About = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-white text-center h-screen">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-10">
          ABOUT ME
        </h1>
        <p className="text-sm font-medium tracking-[.35em] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500">
          EXPLORE NOW
        </p>
        <p className="text-sm md:text-lg font-medium mt-10 w-72 md:w-1/2 lg:w-[75%]">
         I'm a Computer Science graduate with hands-on experience in frontend web development. I’ve worked with React and Next.js to build responsive dashboards and an event ticketing platform. Passionate about creating clean, user-focused interfaces, I'm eager to keep growing as a frontend developer and contribute to impactful digital products.
        </p>
      </div>
    </>
  );
};

export default About;
