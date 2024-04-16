// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
const Properties = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        freeMode={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/GkzbC3N/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg"
            alt=""
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/GkzbC3N/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg"
            alt=""
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/GkzbC3N/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg" alt=""
            className='w-full'
        />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/GkzbC3N/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg" alt=""
            className='w-full'
        />
        </SwiperSlide>
        <SwiperSlide>
              <img src="https://i.ibb.co/GkzbC3N/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg" alt=""
            className='w-full'
        />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/GkzbC3N/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg" alt=""
            className='w-full'
        />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/GkzbC3N/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg" alt=""
            className='w-full'
        />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/GkzbC3N/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg" alt=""
            className='w-full'
        />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/GkzbC3N/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg" alt=""
            className='w-full'
        />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Properties;
