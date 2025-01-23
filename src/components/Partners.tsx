import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

import partner1 from "../assets/partners/partner-1.jpg";
import partner2 from "../assets/partners/partner-2.jpg";
import partner3 from "../assets/partners/partner-3.jpg";
import partner4 from "../assets/partners/partner-4.jpg";
import partner5 from "../assets/partners/cs.png";
import partner6 from "../assets/partners/partner-6.jpg";
import partner7 from "../assets/partners/partner-7.jpg";
import partner8 from "../assets/partners/partner-8.jpg";
import partner9 from "../assets/partners/partner-9.jpg";
import partner10 from "../assets/partners/partner-10.jpg";
import partner11 from "../assets/partners/partner-11.jpg";
import partner12 from "../assets/partners/kapran.png";
import partner13 from "../assets/partners/kas.png";
import partner14 from "../assets/partners/partner-14.png";
import partner15 from "../assets/partners/partner-15.jpg";
import partner16 from "../assets/partners/say-celik.png";
import partner17 from "../assets/partners/partner-17.jpg";
import partner18 from "../assets/partners/partner-18.png";
import partner19 from "../assets/partners/partner-19.jpg";
import partner20 from "../assets/partners/partner-20.jpg";
import partner21 from "../assets/partners/partner-21.jpg";
import partner22 from "../assets/partners/partner-22.jpg";
import partner23 from "../assets/partners/partner-23.jpg";

const partners = [
    { imageUrl: partner1 },
    { imageUrl: partner2 },
    { imageUrl: partner3 },
    { imageUrl: partner4 },
    { imageUrl: partner5 },
    { imageUrl: partner6 },
    { imageUrl: partner7 },
    { imageUrl: partner8 },
    { imageUrl: partner9 },
    { imageUrl: partner10 },
    { imageUrl: partner11 },
    { imageUrl: partner12 },
    { imageUrl: partner13 },
    { imageUrl: partner14 },
    { imageUrl: partner15 },
    { imageUrl: partner16 },
    { imageUrl: partner17 },
    { imageUrl: partner18 },
    { imageUrl: partner19 },
    { imageUrl: partner20 },
    { imageUrl: partner21 },
    { imageUrl: partner22 },
    { imageUrl: partner23 },
];

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
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{delay: 3000}}
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
                    modules={[Navigation, Autoplay]}
                >
                    {partners.map((partner, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={partner.imageUrl} alt={"Partner"} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};
export default Partners;
