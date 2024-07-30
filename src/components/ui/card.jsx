import React from "react";
import { FaGithub, FaPlayCircle, FaFigma } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CardList = (props) => {
  const { id, img, name, description, technologies, github, url, design } =
    props;
  return (
    <div>
      <div key={id} className="card card-compact bg-base-100 shadow-xl">
        <figure className="w-full h-32">
          <img
            src={img}
            alt={name}
            className="object-cover transition duration-500 hover:scale-125"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500 font-bold text-start truncate">
            {name}
          </h2>
          <p className="text-start">{description}</p>
          <div className="flex gap-2">
            {technologies.map((tech, index) => {
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

          <div className="card-actions mt-2 flex-nowrap gap-1">
            <NavLink
              to={github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white"
            >
              Repo <FaGithub size={17} />
            </NavLink>
            <NavLink
              to={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white"
            >
              Demo <FaPlayCircle size={17} />
            </NavLink>
            {design && (
              <NavLink
                to={design}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white"
              >
                Design <FaFigma size={17} />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
