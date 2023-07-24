// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Researches = () => {
  const [researchPapers, setResearchPapers] = useState([]);

  useEffect(() => {
    fetch("https://academic-avenue-server.vercel.app/researches")
      .then((res) => res.json())
      .then((data) => {
        setResearchPapers(data);
      });
  }, []);

  return (
    <div className="my-12">
      <h1 className="title">Published Research Papers by Students</h1>
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {researchPapers.map((researches) => (
            <SwiperSlide
              className="p-6 hero min-h-full text-primary"
              style={{
                backgroundImage: `url("https://i.ibb.co/68FhJsx/Untitled-1.jpg")`,
              }}
              key={researches._id}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="h-96">
                <h4 className="text-center font-bold text-2xl">
                  {researches.title}
                </h4>
                <p className="font-semibold text-xl my-4">
                  By-{researches.collegeName}
                </p>

                <p> Students:-</p>
                <p>
                  {researches.students.map((s, index) => (
                    <span className="badge badge-outline flex m-1 " key={index}>
                      {index + 1}. {s}
                    </span>
                  ))}
                </p>

                <p>Teachers:-</p>
                <p>
                  {researches.prof.map((s, index) => (
                    <span className="badge badge-outline flex m-1" key={index}>
                      {s}
                    </span>
                  ))}
                </p>
                <p></p>
                <a
                  className="text-sm mt-auto"
                  target="blank"
                  href="https://files.eric.ed.gov/fulltext/ED491517.pdf"
                >
                  {researches.link}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Researches;
