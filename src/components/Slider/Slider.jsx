// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "swiper/css/navigation";

// Import Swiper styles
import "./Slider.css";
import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
// import { Pagination } from "swiper";

import slideOne from "../../img/Slider/1.png";
import slideTwo from "../../img/Slider/2.png";
import slideThree from "../../img/Slider/3.png";
import slideFour from "../../img/Slider/4.png";
import arrowLeft from "../../img/Slider/arrowLeft.png";
import arrowRight from "../../img/Slider/arrowRight.png";

const arr = [
  {
    img: slideOne,
    title: "Fig. 1 (plant)",
    text: "Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.",
  },
  {
    img: slideTwo,
    title: "Fig. 2 (flower)",
    text: "Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.",
  },
  {
    img: slideThree,
    title: "Fig. 3 (leaf)",
    text: "Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.",
  },
  {
    img: slideFour,
    title: "Fig. 4 (wood)",
    text: "Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.",
  },
  {
    img: slideOne,
    title: "Fig. 1 (plant)",
    text: "Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.",
  },
  {
    img: slideOne,
    title: "Fig. 1 (plant)",
    text: "Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.",
  },
  {
    img: slideOne,
    title: "Fig. 1 (plant)",
    text: "Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.",
  },
];
export default function Slider() {
  const [currentPage, setCurrentPage] = useState(1);

  const isMobile = window.innerWidth <= 767;
  const isLaptop = window.innerWidth <= 992;

  return (
    <section className="slider__container">
      <Swiper
        spaceBetween={30}
        modules={[Pagination, Navigation]}


        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        slidesPerView={isMobile ? 1 : isLaptop ? 2 : 4}
        onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)}
      >
        {arr.map((item, index) =>( 
                  <SwiperSlide key={index} className="slider__slide">
                  <div className="slider__slide-box">
                    <div className="slider__img-box">
                      <img src={item.img} alt="img-one" />
                    </div>
                    <div className="slider__text-box">
                      <h2 className="slider__title">{item.title}</h2>
                      <p className="slider__text">
                       {item.text}
                      </p>
                      <a href="/#" className="slider__button">
                        Подробнее
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-prev">
        <img src={arrowLeft} alt="arrow" />
      </div>
      <div className="slider__number">{`${currentPage} /  ${isMobile ? arr.length : isLaptop ? 6 : 4}`}</div>
      <div className="custom-next">
        <img src={arrowRight} alt="arrow" />
      </div>
    </section>
  );
}
