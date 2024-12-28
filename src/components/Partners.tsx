import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import partner from "../assets/brand.jpg";
const Partners: React.FC = () => {
    return (
        <div className="partners">
            <div className="container">
                <div className="partners__settings">
                    <button id="partners-prev-slide">
                        <GrFormPrevious size={40} color={"#287BDD"} />
                    </button>
                    <h2 className="title-2">Əməkdaşlıq etdiyimiz brendlər</h2>
                    <button id="partners-next-slide">
                        <GrFormNext size={40} color={"#287BDD"} />
                    </button>
                </div>
            </div>
            <div className="partners__slider">
                <Swiper
                    className="partners-swiper"
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        425: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                    navigation={{
                        nextEl: "#partners-next-slide",
                        prevEl: "#partners-prev-slide",
                    }}
                    modules={[Navigation]}
                >
                    <SwiperSlide>
                        <img src={partner} alt={"Partner"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={partner} alt={"Partner"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={partner} alt={"Partner"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={partner} alt={"Partner"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={partner} alt={"Partner"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={partner} alt={"Partner"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={partner} alt={"Partner"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={partner} alt={"Partner"} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
export default Partners;
