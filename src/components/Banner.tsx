import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import image1 from "../assets/banner/banner-1.jpg";
import image2 from "../assets/banner/banner-2.jpg";
import image3 from "../assets/banner/banner-3.jpg";
import image4 from "../assets/banner/banner-4.jpg";

const Banner: React.FC = () => {
    return (
        <div className="banner">
            <Swiper
                className="banner-swiper"
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <a href="https://www.thermona.az/" target="_blank"></a>
                    <img src={image1} alt="Banner 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://kas.com.tr/" target="_blank"></a>
                    <img src={image2} alt="Banner 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.warmhaus.com/az" target="_blank"></a>
                    <img src={image3} alt="Banner 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://alcaplast.shop/" target="_blank"></a>
                    <img src={image4} alt="Banner 4" />
                </SwiperSlide>
            </Swiper>
            <a href="https://www.thermona.az/" target="_blank" className="banner--mobile-link">
                <img className="banner--mobile-img" src={image1} alt="" />
            </a>
        </div>
    );
};

export default Banner;
