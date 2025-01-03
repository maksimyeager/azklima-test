import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import image1 from "../assets/banner/banner-1.jpg";
import image2 from "../assets/banner/banner-2.jpg";
import image3 from "../assets/banner/banner-3.jpg";

const Banner: React.FC = () => {
    return (
        <div className="banner">
            <Swiper
                className="banner-swiper"
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>
                    <Link to="/products/thermona"></Link>
                    <img src={image1} alt="Banner 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/products/kas-mehsullari"></Link>
                    <img src={image2} alt="Banner 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/products/warmhaus"></Link>
                    <img src={image3} alt="Banner 3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
