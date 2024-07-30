import Footer from "@/components/Footer";
import StarrySky from "@/components/StarrySky";
import {
  FaReact,
  FaGithub,
  FaPlayCircle,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiAxios,
  SiExpress,
  SiJavascript,
} from "react-icons/si";
import { NavLink, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import SkeletonCard from "@/components/ui/skeleton-card";
import PCuaca from "../assets/prakiraan-cuaca.png";
import MovieApp from "../assets/movie-app.jpg";
import PublicAPI from "../assets/public-api.png";
import SlicingSaas from "../assets/slicing-saas.png";
import Portfoliov1 from "../assets/portfolio-v1.png";
import Portfoliov2 from "../assets/portfolio-v2.png";
import Portfoliov3 from "../assets/portfolio-v3.png";
import Portfoliov4 from "../assets/portfolio-v4.png";
import PortfolioMareta from "../assets/portfolio-mareta.png";
import PortfolioAyaka from "../assets/portfolio-ayaka.png";
import TodoList from "../assets/todolist.png";
import CardList from "@/components/ui/card";

const CardListLazy = lazy(() => import("@/components/ui/card"));

const dataProjects = [
  {
    id: 1,
    name: "Weather App",
    url: "https://wamandaka.github.io/react-app-weatherapp/",
    description:
      "Create a Weather App using ReactJS, TailwindCSS, Axios and OpenWeather API",
    technologies: [<FaReact />, <SiTailwindcss />, <SiAxios />],
    github: "https://github.com/wamandaka/react-app-weatherapp",
    img: PCuaca,
  },
  {
    id: 2,
    name: "Movie App React Native",
    url: "https://drive.google.com/drive/folders/1mG8-Gt8xBq7CVnYxAPK25sWrBw5fb7K5?usp=sharing",
    description:
      "Create a Movie App using React Native, TailwindCSS, Axios and TMDB API",
    technologies: [<FaReact />, <SiTailwindcss />, <SiAxios />],
    github: "https://github.com/wamandaka/react-native-movie-app-progate",
    img: MovieApp,
  },
  {
    id: 3,
    name: "Public API",
    url: "https://reverse1999-characters-kang-piscok.koyeb.app/",
    description: "Create a Public API (Reverse 1999 Character List)",
    technologies: [<FaNodeJs />, <SiExpress />],
    github: "https://github.com/wamandaka/reverse-1999-characters-api-fanmade",
    img: PublicAPI,
  },
  {
    id: 4,
    name: "Slicing Saas Landing Page",
    url: "https://slicing-saas-landing-page.vercel.app/",
    description: "Slicing UI Landing Page with ReactJS and TailwindCSS",
    technologies: [<FaReact />, <SiTailwindcss />],
    github:
      "https://github.com/wamandaka/saas-landing-page-design-by-animaapp.com",
    img: SlicingSaas,
    design:
      "https://www.figma.com/design/rhNqIevZzQRXkqq7nP9qaQ/SaaS-Landing-Page-Template---Landing-Page-Template-ready-to-export-to-HTML---Landing-page-for-SaaS-(Community)?node-id=0-1&t=yUz1IrmSbvCbDKfu-0",
  },

  {
    id: 5,
    name: "My Personal Website v1",
    url: "https://wamandaka.github.io/",
    description: "First time i create my personal website using TailwindCSS",
    technologies: [<FaHtml5 />, <SiJavascript />, <SiTailwindcss />],
    github: "https://github.com/wamandaka/portfolio-daka-tailwindcss",
    img: Portfoliov1,
  },
  {
    id: 6,
    name: "My Personal Website v2",
    url: "https://portfolio-daka-v2.vercel.app/",
    description: "Create a Personal Website with ReactJS and TailwindCSS",
    technologies: [<FaReact />, <SiTailwindcss />],
    github: "https://github.com/wamandaka/portfolio-daka-cra",
    img: Portfoliov2,
  },

  {
    id: 7,
    name: "My Personal Website v3",
    url: "https://portfolio-daka-v3.vercel.app/",
    description: "Create a Personal Website with ReactJS and TailwindCSS",
    technologies: [<FaReact />, <SiTailwindcss />],
    github: "https://github.com/wamandaka/portfolio-2023-12-29",
    img: Portfoliov3,
    design:
      "https://www.figma.com/file/EHmCPk7tnF2IwvgYhgf4PD/Web-Developer-Portfolio---Personal-Site-(Community)?type=design&node-id=266%3A771&mode=design&t=eeZyizxjFhh6vGpV-1",
  },

  {
    id: 8,
    name: "My Personal Website v4",
    url: "https://wamandaka.vercel.app/",
    description: "Create a Personal Website with ReactJS and TailwindCSS",
    technologies: [<FaReact />, <SiTailwindcss />],
    github: "https://github.com/wamandaka/portfolio-2024-05-18",
    img: Portfoliov4,
  },
  {
    id: 9,
    name: "React TodoList",
    url: "https://react-todo-app-wamandaka.vercel.app/",
    description: "Create a TodoList Website with ReactJS and TailwindCSS",
    technologies: [<FaReact />, <SiTailwindcss />],
    github: "https://github.com/wamandaka/react-todo-app",
    img: TodoList,
  },
  {
    id: 10,
    name: "Personal Website Mareta",
    url: "https://personal-web-mareta.vercel.app/",
    description: "Create a Personal Website with ReactJS and TailwindCSS",
    technologies: [<FaReact />, <SiTailwindcss />],
    github:
      "https://github.com/wamandaka/slicing-ui-personal-web-designed-by-mareta",
    img: PortfolioMareta,
    design:
      "https://www.figma.com/design/f6jQZZ2LAApH8n5SGC42F3/Design?node-id=0-1&t=D1sexCs86xek6yZe-0",
  },
  {
    id: 11,
    name: "Personal Website Ayaka",
    url: "https://personal-website-ayaka.vercel.app/",
    description: "Create a Personal Website with ReactJS and TailwindCSS",
    technologies: [<FaReact />, <SiTailwindcss />],
    github: "https://github.com/wamandaka/personal-website-ayaka",
    img: PortfolioAyaka,
    design: "",
  },
];

const MoreProject = () => {
  return (
    <div className="bg-neutral-950 px-4 bg-[url('/src/assets/bg-pattern.png')] bg-auto bg-no-repeat lg:bg-cover bg-top bg-fixed relative">
      <StarrySky />
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-10">
          PROJECTS
        </h1>
        <p className="text-sm font-medium tracking-[.35em] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500">
          EXPLORE NOW
        </p>
        <div className="breadcrumbs text-sm text-white">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-4 my-10">
          {dataProjects.map((project) => {
            return (
              <div key={project.id}>
                <Suspense fallback={<SkeletonCard />}>
                  <CardListLazy key={project.id} {...project}></CardListLazy>
                </Suspense>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MoreProject;
