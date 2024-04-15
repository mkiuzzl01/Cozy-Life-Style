import { Navigation, Pagination, Scrollbar,Autoplay, EffectCoverflow} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar,EffectCoverflow,Autoplay]}
      spaceBetween={50}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
  >
    <SwiperSlide>
    <div className="flex flex-col lg:flex-row bg-yellow-200 rounded-lg lg:justify-between items-center">
      <div className="md:w-1/2 lg:ms-16 lg:space-y-4">
        <h1 className="font-Merriweather font-medium text-4xl uppercase">
          Choose Your <br /> Residential Place
        </h1>
        <p>
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://reno.wpresidence.net/wp-content/uploads/2023/08/slider3.jpg"
          alt=""
          className="m-0"
        />
      </div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="flex flex-col lg:flex-row bg-yellow-200 rounded-lg lg:justify-between items-center">
      <div className="md:w-1/2 lg:ms-16 lg:space-y-4">
        <h1 className="font-Merriweather font-medium text-4xl uppercase">
          Choose Your <br /> Residential Place
        </h1>
        <p>
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://reno.wpresidence.net/wp-content/uploads/2023/08/slider3.jpg"
          alt=""
          className="m-0"
        />
      </div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="flex flex-col lg:flex-row bg-yellow-200 rounded-lg lg:justify-between items-center">
      <div className="md:w-1/2 lg:ms-16 lg:space-y-4">
        <h1 className="font-Merriweather font-medium text-4xl uppercase">
          Choose Your <br /> Residential Place
        </h1>
        <p>
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://reno.wpresidence.net/wp-content/uploads/2023/08/slider3.jpg"
          alt=""
          className="m-0"
        />
      </div>
    </div>
    </SwiperSlide>
  </Swiper>
   
 

  );
};

export default Banner;
