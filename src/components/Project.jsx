import { FaReact, FaGithub, FaPlayCircle, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiAxios, SiExpress } from "react-icons/si";
import { NavLink, useNavigate } from "react-router-dom";

const dataProjects = [
  {
    id: 1,
    name: "Weather App",
    url: "https://wamandaka.github.io/react-app-weatherapp/",
    description:
      "Create a Weather App using ReactJS, TailwindCSS, Axios and OpenWeather API",
    technologies: [<FaReact />, <SiTailwindcss />, <SiAxios />],
    github: "https://github.com/wamandaka/react-app-weatherapp",
  },
  {
    id: 2,
    name: "Movie App React Native",
    url: "https://drive.google.com/drive/folders/1mG8-Gt8xBq7CVnYxAPK25sWrBw5fb7K5?usp=sharing",
    description:
      "Create a Movie App using React Native, TailwindCSS, Axios and TMDB API",
    technologies: [<FaReact />, <SiTailwindcss />, <SiAxios />],
    github: "https://github.com/wamandaka/react-native-movie-app-progate",
  },
  {
    id: 3,
    name: "Public API",
    url: "https://reverse1999-characters-kang-piscok.koyeb.app/",
    description: "Create a Public API (Reverse 1999 Character List)",
    technologies: [<FaNodeJs />, <SiExpress />],
    github: "https://github.com/wamandaka/reverse-1999-characters-api-fanmade",
  },
  {
    id: 4,
    name: "Slicing Saas Landing Page",
    url: "https://slicing-saas-landing-page.vercel.app/",
    description: "Slicing UI Landing Page with ReactJS and TailwindCSS",
    technologies: [<FaReact />, <SiTailwindcss />],
    github:
      "https://github.com/wamandaka/saas-landing-page-design-by-animaapp.com",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-4 mt-10 md:mx-20 ">
          {dataProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="card card-compact bg-base-300 lg:w-96 md:w-72 shadow-xl"
              >
                <div className="card-body">
                  <h2 className="card-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500 font-bold">
                    {project.name}
                  </h2>
                  <p className="text-start">{project.description}</p>
                  <div className="flex gap-2">
                    {project.technologies.map((tech, index) => {
                      return (
                        <div
                          key={index}
                          className="flex w-7 h-7 items-center justify-center bg-purple-700 rounded-md"
                        >
                          <span className="text-xl font-medium">{tech}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="card-actions mt-2">
                    <NavLink
                      to={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      Repository <FaGithub size={20} />
                    </NavLink>
                    <NavLink
                      to={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      Demo <FaPlayCircle size={20} />
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mb-16 mt-4">
          <NavLink to={"/projects"}>
            <p>See All Projects</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Project;
