/* eslint-disable react/no-unescaped-entities */
const Header = () => {
  return (
    <div
      className="hero h-[50vh]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/Yb0Fhn3/049-Fairmont-Windsor-Park-Indian-Wedding.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center">
        <div className="">
          <h1 className="mb-2 text-2xl md:text-5xl font-bold text-orange">
            Make Your <br />
            Wedding Memorable
          </h1>
          <p className="text-sm md:text-xl text-slate">
            "A successful marriage requires falling in love <br /> many times
            always with the same person"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
