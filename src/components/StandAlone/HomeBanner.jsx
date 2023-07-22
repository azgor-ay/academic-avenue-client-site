const HomeBanner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2016/08/13/15/29/johns-hopkins-university-1590925_1280.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-6xl font-bold">Welcome to Academic Avenue</h1>
          <p className="mb-5">
          Explore an extensive database of colleges, complete with admission information, program details, and application guidelines. Our user-friendly interface empowers you to effortlessly browse through colleges that align perfectly with your interests and goals.
          </p>
          <button className="btn btn-primary">Start Exploring</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
