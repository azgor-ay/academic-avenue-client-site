/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Feedback = () => {
  // eslint-disable-next-line no-unused-vars
  const [swiperRef, setSwiperRef] = useState(null);


  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/feedbacks")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      });
  }, []);

  const includedShapesStyles = [RoundedStar].map((itemShapes) => ({
    itemShapes,
    activeFillColor: "#CD9003",
    inactiveFillColor: "#A1A1A1",
  }));
  return (
    <>
    <h1 className="title">Feedback from students</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {feedbacks.map((f) => (
          <SwiperSlide key={f._id}>
            <div className="mx-auto h-96">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto">
                <img className="w-28" src={f.reviewerPhoto} alt="" />
              </div>
              <div className="mx-auto">
                <p className="text-center font-bold text-3xl text-primary">
                  {f.reviewerName}
                </p>
                <span>
                  {includedShapesStyles.map((itemStyles, index) => (
                    <Rating
                      key={`shape_${index}`}
                      style={{ maxWidth: 150 }}
                      value={f.rating}
                      readOnly
                      itemStyles={itemStyles} 
                      className="mx-auto mb-6"
                    />
                  ))}
                </span>
                <h4 className="font-bold text-xl">{f.collegeName}</h4>
                <p>{f.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
};

export default Feedback;
