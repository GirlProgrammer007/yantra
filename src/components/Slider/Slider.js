import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import img from "../images/1.jpg"
import img1 from "../images/2.jpg"
import img2 from "../images/3.jpg"
import img3 from "../images/two.jpg"
import img4 from "../images/one.jpg"
import img5 from "../images/three.jpg"
export default function Slider() {
    return (
        <>
            <Swiper
                navigation={false}
                speed={3000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <img src={img} alt="" className="w-[390px] h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="" className="w-[390px] h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" className="w-[390px] h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" className="w-[390px] h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" className="w-[390px] h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" className="w-[390px] h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px]" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
