import { NavLink } from "react-router-dom";

const SkeletonCard = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl w-72 h-80">
      <figure className="skeleton w-full h-32"></figure>
      <div className="card-body">
        <h2 className="skeleton card-title h-4 w-28"></h2>
        <p className="skeleton text-start"></p>
        <div className="flex gap-2">
          <div className="skeleton flex w-7 h-7 items-center justify-center  rounded-md"></div>
          <div className="skeleton flex w-7 h-7 items-center justify-center  rounded-md"></div>
          <div className="skeleton flex w-7 h-7 items-center justify-center  rounded-md"></div>
        </div>

        <div className="card-actions mt-2 flex-nowrap gap-1">
          <div className="skeleton btn btn-sm w-24"></div>
          <div className="skeleton btn btn-sm w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
