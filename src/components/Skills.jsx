import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="Skills" className="p-20 flex flex-col items-center justify-center ">
      <h1 data-aos='fade-up' className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 ">Skills</h1>
      <Slider {...settings} className="w-full">
        <div>
          <h2 data-aos='fade-up' className="text-[27px] flex items-center justify-center font-semibold text-fuchsia-700 rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b-glow ">HTML</h2>
        </div>
        <div>
          <h2 data-aos='fade-down' className="text-[27px] flex items-center justify-center font-semibold text-fuchsia-700 rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b-glow ">CSS </h2>
        </div>
        <div>
          <h2 data-aos='fade-up' className="text-[27px] flex items-center justify-center font-semibold text-fuchsia-700 rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b-glow">Java Script</h2>
        </div>
        <div>
          <h2 data-aos='fade-down' className="text-[27px] flex items-center justify-center font-semibold text-fuchsia-700 rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b-glow ">React</h2>
        </div>
        <div>
          <h2 data-aos='fade-up' className="text-[27px] flex items-center justify-center font-semibold text-fuchsia-700 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-glow">Java</h2>
        </div>
        <div>
          <h2 data-aos='fade-down' className="text-[23px] flex items-center justify-center font-semibold text-fuchsia-700 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-glow">ML</h2>
        </div>
        <div>
          <h2 data-aos='fade-up' className="text-[23px] flex items-center justify-center font-semibold text-fuchsia-700 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-glow">Data Science</h2>
        </div>
        <div>
          <h2 data-aos='fade-down' className="P-3 text-[23px] flex items-center justify-center font-semibold text-fuchsia-700 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-glow">deep Learning</h2>
        </div>
      </Slider>
    </div>
  );
}
