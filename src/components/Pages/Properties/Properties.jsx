import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
const Properties = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-right">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
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
            alt="Property image coming soon"
            loading="lazy"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/vzQ186c/rendy-novantino-btfixf2-Bb-S0-unsplash.jpg"
            alt="Property image coming soon"
            loading="lazy"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/sRJDPXY/john-fornander-Id7u0-Ek-Tj-BE-unsplash.jpg"
            alt="Property image coming soon"
            loading="lazy"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/h8WHVtb/tobias-nii-kwatei-quartey-Vq-Wy2xl-GK6-Q-unsplash.jpg"
            alt="Property image coming soon"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/GkzbC3N/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg"
            alt="Property image coming soon"
            loading="lazy"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/nQF0M0q/ksenia-balandina-RCF5-KSWb7-Ms-unsplash.jpg"
            alt="Property image coming soon"
            loading="lazy"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/kgdYs2S/hans-m-q4-Gmk6-X-z7o-unsplash.jpg"
            alt="Property image coming soon"
            loading="lazy"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Properties;
