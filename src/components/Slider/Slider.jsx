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
import arrowLeft from '../../img/Slider/arrowLeft.png'
import arrowRight from '../../img/Slider/arrowRight.png'


export default function Slider() {
  const [currentPage, setCurrentPage] = useState(1);

  const mobileWidth = window.innerWidth <= 767;

  
  return (
    mobileWidth ? ( <section className="slider__container">
      <Swiper


        spaceBetween={30}
        modules={[Pagination, Navigation]}
        pagination={{
          type: "fraction",
          clickable: true, // Делает точки пагинации кликабельными
        }}
    
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}

        slidesPerView={1}
   
     
      >
        <SwiperSlide className="slider__slide">
          <div className="slider__slide-box">
            <div className="slider__img-box">
              <img src={slideOne} alt="img-one" />
            </div>
            <div className="slider__text-box">
              <h2 className="slider__title">Fig. 1 (plant)</h2>
              <p className="slider__text">
                Имеется спорная точка зрения, гласящая примерно следующее:
                активно развивающиеся страны третьего мира своевременно
                верифицированы.
              </p>
              <a href="/#" className="slider__button">
                Подробнее
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <div className="slider__slide-box">
            <div className="slider__img-box">
              <img src={slideTwo} alt="img-one" />
            </div>
            <div className="slider__text-box">
              <h2 className="slider__title">Fig. 2 (flower)</h2>
              <p className="slider__text">
                Имеется спорная точка зрения, гласящая примерно следующее:
                активно развивающиеся страны третьего мира своевременно
                верифицированы.
              </p>
              <a href="/#" className="slider__button">
                Подробнее
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <div className="slider__slide-box">
            <div className="slider__img-box">
              <img src={slideThree} alt="img-one" />
            </div>
            <div className="slider__text-box">
              <h2 className="slider__title">Fig. 1 (plant)</h2>
              <p className="slider__text">
                Имеется спорная точка зрения, гласящая примерно следующее:
                активно развивающиеся страны третьего мира своевременно
                верифицированы.
              </p>
              <a href="/#" className="slider__button">
                Подробнее
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <div className="slider__slide-box">
            <div className="slider__img-box">
              <img src={slideFour} alt="img-one" />
            </div>
            <div className="slider__text-box">
              <h2 className="slider__title">Fig. 1 (plant)</h2>
              <p className="slider__text">
                Имеется спорная точка зрения, гласящая примерно следующее:
                активно развивающиеся страны третьего мира своевременно
                верифицированы.
              </p>
              <a href="/#" className="slider__button">
                Подробнее
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <div className="slider__slide-box">
            <div className="slider__img-box">
              <img src={slideOne} alt="img-one" />
            </div>
            <div className="slider__text-box">
              <h2 className="slider__title">Fig. 1 (plant)</h2>
              <p className="slider__text">
                Имеется спорная точка зрения, гласящая примерно следующее:
                активно развивающиеся страны третьего мира своевременно
                верифицированы.
              </p>
              <a href="/#" className="slider__button">
                Подробнее
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <div className="slider__slide-box">
            <div className="slider__img-box">
              <img src={slideOne} alt="img-one" />
            </div>
            <div className="slider__text-box">
              <h2 className="slider__title">Fig. 1 (plant)</h2>
              <p className="slider__text">
                Имеется спорная точка зрения, гласящая примерно следующее:
                активно развивающиеся страны третьего мира своевременно
                верифицированы.
              </p>
              <a href="/#" className="slider__button">
                Подробнее
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <div className="slider__slide-box">
            <div className="slider__img-box">
              <img src={slideOne} alt="img-one" />
            </div>
            <div className="slider__text-box">
              <h2 className="slider__title">Fig. 1 (plant)</h2>
              <p className="slider__text">
                Имеется спорная точка зрения, гласящая примерно следующее:
                активно развивающиеся страны третьего мира своевременно
                верифицированы.
              </p>
              <a href="/#" className="slider__button">
                Подробнее
              </a>
            </div>
          </div>
        </SwiperSlide>

        ...
      </Swiper>
      <div className="custom-prev"><img src={arrowLeft} alt="arrow" /></div>
      <div className="slider__number">{`${currentPage} /  4`}</div>
      <div className="custom-next"><img src={arrowRight} alt="arrow" /></div>
    </section>) : (
          <section className="slider__container">
          <Swiper
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)} // Обновляем состояние
            slidesPerView={4}
       
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="slider__slide">
              <div className="slider__slide-box">
                <div className="slider__img-box">
                  <img src={slideOne} alt="img-one" />
                </div>
                <div className="slider__text-box">
                  <h2 className="slider__title">Fig. 1 (plant)</h2>
                  <p className="slider__text">
                    Имеется спорная точка зрения, гласящая примерно следующее:
                    активно развивающиеся страны третьего мира своевременно
                    верифицированы.
                  </p>
                  <a href="/#" className="slider__button">
                    Подробнее
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider__slide">
              <div className="slider__slide-box">
                <div className="slider__img-box">
                  <img src={slideTwo} alt="img-one" />
                </div>
                <div className="slider__text-box">
                  <h2 className="slider__title">Fig. 2 (flower)</h2>
                  <p className="slider__text">
                    Имеется спорная точка зрения, гласящая примерно следующее:
                    активно развивающиеся страны третьего мира своевременно
                    верифицированы.
                  </p>
                  <a href="/#" className="slider__button">
                    Подробнее
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider__slide">
              <div className="slider__slide-box">
                <div className="slider__img-box">
                  <img src={slideThree} alt="img-one" />
                </div>
                <div className="slider__text-box">
                  <h2 className="slider__title">Fig. 1 (plant)</h2>
                  <p className="slider__text">
                    Имеется спорная точка зрения, гласящая примерно следующее:
                    активно развивающиеся страны третьего мира своевременно
                    верифицированы.
                  </p>
                  <a href="/#" className="slider__button">
                    Подробнее
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider__slide">
              <div className="slider__slide-box">
                <div className="slider__img-box">
                  <img src={slideFour} alt="img-one" />
                </div>
                <div className="slider__text-box">
                  <h2 className="slider__title">Fig. 1 (plant)</h2>
                  <p className="slider__text">
                    Имеется спорная точка зрения, гласящая примерно следующее:
                    активно развивающиеся страны третьего мира своевременно
                    верифицированы.
                  </p>
                  <a href="/#" className="slider__button">
                    Подробнее
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider__slide">
              <div className="slider__slide-box">
                <div className="slider__img-box">
                  <img src={slideOne} alt="img-one" />
                </div>
                <div className="slider__text-box">
                  <h2 className="slider__title">Fig. 1 (plant)</h2>
                  <p className="slider__text">
                    Имеется спорная точка зрения, гласящая примерно следующее:
                    активно развивающиеся страны третьего мира своевременно
                    верифицированы.
                  </p>
                  <a href="/#" className="slider__button">
                    Подробнее
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider__slide">
              <div className="slider__slide-box">
                <div className="slider__img-box">
                  <img src={slideOne} alt="img-one" />
                </div>
                <div className="slider__text-box">
                  <h2 className="slider__title">Fig. 1 (plant)</h2>
                  <p className="slider__text">
                    Имеется спорная точка зрения, гласящая примерно следующее:
                    активно развивающиеся страны третьего мира своевременно
                    верифицированы.
                  </p>
                  <a href="/#" className="slider__button">
                    Подробнее
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider__slide">
              <div className="slider__slide-box">
                <div className="slider__img-box">
                  <img src={slideOne} alt="img-one" />
                </div>
                <div className="slider__text-box">
                  <h2 className="slider__title">Fig. 1 (plant)</h2>
                  <p className="slider__text">
                    Имеется спорная точка зрения, гласящая примерно следующее:
                    активно развивающиеся страны третьего мира своевременно
                    верифицированы.
                  </p>
                  <a href="/#" className="slider__button">
                    Подробнее
                  </a>
                </div>
              </div>
            </SwiperSlide>
    
            ...
          </Swiper>
          <div className="custom-prev"><img src={arrowLeft} alt="arrow" /></div>
          <div className="slider__number">{`${currentPage} / 4`}</div>
          <div className="custom-next"><img src={arrowRight} alt="arrow" /></div>
        </section>
    )
  );
}
