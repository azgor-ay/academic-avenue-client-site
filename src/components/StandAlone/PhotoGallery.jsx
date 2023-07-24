
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import slide1 from "../../assets/photo-gallery/2400-students-group-study.jpg"
import slide2 from "../../assets/photo-gallery/friends-sitting-wooden-bench-street.jpg"
import slide3 from "../../assets/photo-gallery/group-friends-talking-street-after-class.jpg"
import slide4 from "../../assets/photo-gallery/naassom-azevedo-Q_Sei-TqSlc-unsplash.jpg"
import slide5 from "../../assets/photo-gallery/pexels-ivan-samkov-5676744.jpg"
import slide6 from "../../assets/photo-gallery/students-fellow-graduates-group-college-graduates-standing-cap-gown-holding-their-diplomas_590464-7492.avif"
import slide7 from "../../assets/photo-gallery/photodune-1678194-group-of-graduate-students-xxl-1.jpg"
import slide8 from "../../assets/photo-gallery/students-sitting-stairs-gesturing-two-fingers-looking-camera.jpg"

const PhotoGallery = () => {
    return (
        <div>
            <h1 className='title'>Our pass-out students groups</h1>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="graduate-students" className='w-full h-[500px] object-cover object-top'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="graduate-students" className='w-full h-[500px] object-cover object-top'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="graduate-students" className='w-full h-[500px] object-cover object-top'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="graduate-students" className='w-full h-[500px] object-cover object-top'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="graduate-students" className='w-full h-[500px] object-cover object-top'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide6} alt="graduate-students" className='w-full h-[500px] object-cover object-top'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide7} alt="graduate-students" className='w-full h-[500px] object-cover object-top'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide8} alt="graduate-students" className='w-full h-[500px] object-cover object-top'/>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default PhotoGallery;