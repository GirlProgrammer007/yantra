import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img10 from "./images/2.jpg"
import img11 from "./images/111.jpg"
import img12 from "./images/222.jpg"

export default () => {
    return (
        <div className='w-full h-full bg-[#EFE8DF] '>

            <h1 className='pl-[150px] pt-[80px] text-[#554E4E] text-[40px] font-bold'>The Place</h1>
            <p className='text-[#554E4E] pl-[155px] pr-[180px] text-[14px]'>Inspired by India in every aspect – from our silk wallpapers to our stately, fort-inspired door, celebrated designers Matthew and Paul of MSDO have artfully composed five uniquely Indian spaces within Yantra. Drawing on décor that wends masterfully through the depths of the subcontinent, each visit to Yantra promises a new adventure.</p>
            <div className="pt-[15px] pr-[20px]">

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='w-[990px] h-[500px]  '
                >
                    <SwiperSlide>
                        <img src={img10} alt="" className='w-[990px] h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img11} alt="" className='w-[990px] h-[800px] cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img12} alt="" className='w-[990px] h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='w-[990px] h-[800px]' />
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
            <h5 className=' text-[#554E4E] pl-[120px] pt-[20px] font-bold'>Polo Room</h5>
            <p className='text-[#554E4E] pl-[120px] pr-[120px] pt-[10px] text-[14px]'>Stepping through the fort-inspired entrance, striking pietra dura marble floors and traditional archways — reminiscent of a Rajasthan palace — lead guests through to the main dining hall, Jaipur. Soft subtle silk walls and banquettes accentuate the striking glass wall light installations as well as the contemporary latticed jali screens. Seating is subject to availability and requests, but we will try our best to accommodate your preference.</p>
            <h1 className='pl-[120px] pt-[80px] text-[#554E4E] text-[40px] font-bold'>The Food</h1>
            <p className='text-[#554E4E] pl-[120px] pr-[120px] pt-[10px] text-[15px] learding-3'>Blending a culinary philosophy that pays tribute to India’s rich legacy, culinary historian Pritha Sen and Executive Chef Pinaki Ray create an extensive menu offering both vegetarian and non-vegetarian dishes. Featuring niche ingredients sourced across the Subcontinent and South East Asia, a poetic and irreverent experience awaits.</p>

            <div className="pt-[15px] pr-[20px]">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='w-[990px] h-[500px]  '
                >
                    <SwiperSlide>
                        <img src={img10} alt="" className='w-[990px] h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='w-[990px] h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='w-[990px] h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='w-[990px] h-[800px]' />
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
            <h1 className='pl-[120px] pt-[20px] text-[#554E4E] text-[40px] font-bold'>The People</h1>
            <p className='text-[#554E4E] pl-[120px] pr-[120px] pt-[10px] text-[15px] '> People passionate about Indian cuisine. A celebrated revivalist of rare and bygone recipes, Pith Sen brings her love of Indian cusuine to Singapore with a recipes that span the length and breadth of the Subcontinent. Alongside our ever-talented Executive Chef, Pinaki Ray, Sen is also joined by Head Chef, Prashant Dhanwariya. </p>
            <div className="pt-[15px] pr-[20px] pb-[100px]">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='w-[1000px] h-[550px]  '
                >
                    <SwiperSlide>
                        <img src={img10} alt="" className='w-[990px] h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='w-[990px] h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='w-[990px] h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='w-[990px] h-[800px]' />
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
        </div>
    );
};