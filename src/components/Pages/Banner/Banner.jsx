const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex flex-col lg:flex-row bg-[#99d1e9] lg:justify-between items-center">
        <div className="w-1/2 lg:ms-16 space-y-4">
        <h1 className="font-Merriweather font-medium text-4xl uppercase"> Choose Your <br /> Residential Place</h1>
        <p>We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.</p>
        </div>
        <div className="w-1/2">
          <img src="https://reno.wpresidence.net/wp-content/uploads/2023/08/slider3.jpg" alt="" className="w-fit" />
        </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <div className="flex flex-col  lg:flex-row bg-[#99d1e9] lg:justify-between items-center">
        <div className="w-1/2 lg:ms-16 space-y-4">
        <h1 className="font-Merriweather font-medium text-4xl uppercase"> Choose Your <br /> Residential Place</h1>
        <p>We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.</p>
        </div>
        <div className="w-1/2">
          <img src="https://i.ibb.co/SrSM2Yc/debby-hudson-Fm-CSSSGge-0-unsplash.jpg" alt="" className="w-fit" />
        </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <div className="flex flex-col lg:flex-row bg-[#99d1e9] lg:justify-between items-center">
        <div className="w-1/2 lg:ms-16 space-y-4">
        <h1 className="font-Merriweather font-medium text-4xl uppercase"> Choose Your <br /> Residential Place</h1>
        <p>We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.</p>
        </div>
        <div className="w-1/2">
          <img src="https://i.ibb.co/Pm9Q4G9/francesca-tosolini-Xc-Vm8mn7-NUM-unsplash.jpg" className="w-fit" alt="" />
        </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
