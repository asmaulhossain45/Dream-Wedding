const Venue = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-5 my-10">
      <div
        className="hero w-full h-[50vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/pRrjdQc/Venue-01.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 hover:bg-opacity-0 hover:text-transparent"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-2 md:mb-5 text-2xl md:text-5xl font-bold text-orange">
              United States
            </h1>
            <p className="text-lg md:text-3xl mb-5">New York</p>
          </div>
        </div>
      </div>
      <div
        className="hero w-full h-[50vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/QCCMtS6/Venue-02.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 hover:bg-opacity-0 hover:text-transparent"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-2 md:mb-5 text-2xl md:text-5xl font-bold text-orange">
              France
            </h1>
            <p className="text-lg md:text-3xl mb-5">Paris</p>
          </div>
        </div>
      </div>
      <div
        className="hero w-full h-[50vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/fGBkfns/Venue-03.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 hover:bg-opacity-0 hover:text-transparent"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-2 md:mb-5 text-2xl md:text-5xl font-bold text-orange">
              Japan
            </h1>
            <p className="text-lg md:text-3xl mb-5">Tokyo</p>
          </div>
        </div>
      </div>
      <div
        className="hero w-full h-[50vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/Rztrftn/Venue-04.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 hover:bg-opacity-0 hover:text-transparent"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-2 md:mb-5 text-2xl md:text-5xl font-bold text-orange">
              Italy
            </h1>
            <p className="text-lg md:text-3xl mb-5">Rome</p>
          </div>
        </div>
      </div>
      <div
        className="hero w-full h-[50vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/KwvSdRQ/Venue-05.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 hover:bg-opacity-0 hover:text-transparent"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-2 md:mb-5 text-2xl md:text-5xl font-bold text-orange">
              Australia
            </h1>
            <p className="text-lg md:text-3xl mb-5">Sydney</p>
          </div>
        </div>
      </div>
      <div
        className="hero w-full h-[50vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/JkXKvgv/Venue-06.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 hover:bg-opacity-0 hover:text-transparent"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-2 md:mb-5 text-2xl md:text-5xl font-bold text-orange">
              Spain
            </h1>
            <p className="text-lg md:text-3xl mb-5">Barcelona</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
