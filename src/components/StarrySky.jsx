const StarrySky = () => {
  const stars = [
    { top: "20%", left: "25%", animation: "animate-sparkle" },
    { top: "40%", left: "60%", animation: "animate-sparkle-3s" },
    { top: "60%", left: "40%", animation: "animate-sparkle-4s" },
    { top: "80%", left: "70%", animation: "animate-sparkle-5s" },
    { top: "50%", left: "50%", animation: "animate-sparkle-3s" },
    { top: "30%", left: "30%", animation: "animate-sparkle-4s" },
    { top: "70%", left: "80%", animation: "animate-sparkle-5s" },
    { top: "90%", left: "20%", animation: "animate-sparkle" },
    { top: "10%", left: "10%", animation: "animate-sparkle-4s" },
    { top: "20%", left: "80%", animation: "animate-sparkle-3s" },
    { top: "15%", left: "15%", animation: "animate-sparkle" },
    { top: "25%", left: "75%", animation: "animate-sparkle-4s" },
    { top: "35%", left: "55%", animation: "animate-sparkle-3s" },
    { top: "45%", left: "45%", animation: "animate-sparkle-5s" },
    { top: "55%", left: "65%", animation: "animate-sparkle" },
    { top: "65%", left: "25%", animation: "animate-sparkle-4s" },
    { top: "75%", left: "85%", animation: "animate-sparkle-3s" },
    { top: "85%", left: "35%", animation: "animate-sparkle-5s" },
    { top: "95%", left: "15%", animation: "animate-sparkle" },
    { top: "5%", left: "95%", animation: "animate-sparkle-4s" },
    { top: "10%", left: "50%", animation: "animate-sparkle-3s" },
    { top: "30%", left: "70%", animation: "animate-sparkle-5s" },
    { top: "50%", left: "10%", animation: "animate-sparkle" },
    { top: "60%", left: "90%", animation: "animate-sparkle-4s" },
    { top: "80%", left: "30%", animation: "animate-sparkle-3s" },
    { top: "90%", left: "60%", animation: "animate-sparkle-5s" },
    { top: "40%", left: "20%", animation: "animate-sparkle" },
    { top: "70%", left: "50%", animation: "animate-sparkle-4s" },
    { top: "20%", left: "40%", animation: "animate-sparkle-3s" },
    { top: "60%", left: "70%", animation: "animate-sparkle-5s" },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-full pointer-events-none">
      {stars.map((star, index) => (
        <div
          key={index}
          className={`star absolute ${star.animation} rounded-full bg-white`}
          style={{
            width: "2px",
            height: "2px",
            top: star.top,
            left: star.left,
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarrySky;
