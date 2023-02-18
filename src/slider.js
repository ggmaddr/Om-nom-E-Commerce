import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export const Slider = () => {
  
  return (
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
            spaceBetween={50}
            slidesPerView={1}
            navigation = {{}}
            pagination={{ clickable: true }}
            loop={true}
            className = "sslide"
            >
              <SwiperSlide>
                    <img className="simg" src="images/banner1.png" alt=""/>
                    <a href="https://www.a.com/" className="sbtn btn"> Let's judge! </a>
              </SwiperSlide>
              <SwiperSlide>
                    <img className="simg" src="images/banner2.png" alt=""/>
                    <a href="https://www.a.com/" className="sbtn btn"> Let's judge! </a>
              </SwiperSlide>
            </Swiper>
     
  )
}