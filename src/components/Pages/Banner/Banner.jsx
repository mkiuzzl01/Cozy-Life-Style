import { Navigation, Pagination, Scrollbar,Autoplay, EffectCoverflow} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-col lg:flex-row bg-[url(https://dubai.wpresidence.net/wp-content/uploads/revslider/craftsman/slider-bg.png)] rounded-lg lg:justify-between items-center">
      <div className="p-4 md:w-1/2 md:ms-16 md:space-y-4 ">
        <h1 className="font-Merriweather font-medium text-4xl uppercase animate__animated animate__lightSpeedInRight">
          Choose Your <br /> Residential Place
        </h1>
        <p className='animate__animated animate__backInLeft'>
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>
        <div>
        <Link to='/Register'><button className='btn'>Register Now</button></Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://reno.wpresidence.net/wp-content/uploads/2023/08/slider3.jpg"
          alt=""
          loading="lazy"
          className="rounded-b-lg md:rounded-e-lg"
        />
      </div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="flex flex-col lg:flex-row bg-sky-200 rounded-lg lg:justify-between items-center">
      <div className="p-4 md:w-1/2 md:ms-16 md:space-y-4">
        <h1 className="font-Merriweather font-medium text-4xl uppercase animate__animated animate__lightSpeedInRight">
          Choose Your <br /> Residential Place
        </h1>
        <p className='animate__animated animate__backInLeft'>
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>
        <div>
        <Link to='/Register'><button className='btn'>Register Now</button></Link>
        </div>
      </div>
      <div className="md:w-3/4">
        <img
          src="https://i.ibb.co/Pm9Q4G9/francesca-tosolini-Xc-Vm8mn7-NUM-unsplash.jpg"
          alt=""
          loading="lazy"
          className="rounded-b-lg md:rounded-e-lg"
        />
      </div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="flex flex-col lg:flex-row bg-purple-200 rounded-lg lg:justify-between items-center">
      <div className="p-4 md:w-1/2 md:ms-16 md:space-y-4">
        <h1 className="font-Merriweather font-medium text-4xl uppercase animate__animated animate__lightSpeedInRight">
          Choose Your <br /> Residential Place
        </h1>
        <p className='animate__animated animate__backInLeft'>
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>
        <div>
        <Link to='/Register'><button className='btn'>Register Now</button></Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://i.ibb.co/SrSM2Yc/debby-hudson-Fm-CSSSGge-0-unsplash.jpg"
          alt=""
          loading="lazy"
          className="rounded-b-lg md:rounded-e-lg"
        />
      </div>
    </div>
    </SwiperSlide>
  </Swiper>
   
 

  );
};

export default Banner;
