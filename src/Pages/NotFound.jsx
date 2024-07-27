import StarrySky from "@/components/StarrySky";
import NotFoundIllustration from "../assets/undraw_page_not_found_re_e9o6.svg";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="grid h-screen place-content-center bg-neutral-950 px-4 bg-[url('/src/assets/bg-pattern.png')] bg-auto bg-no-repeat lg:bg-cover bg-top">
      <StarrySky />
      <div className="text-center">
        <img
          className="mx-auto h-36 w-auto"
          src={NotFoundIllustration}
          alt="Workflow"
        />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We can't find that page.</p>
        <button
          onClick={() => navigate("/")}
          className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white mt-5"
        >
          {" < "}Back to Home
        </button>
      </div>
    </div>
  );
};

export default Notfound;
