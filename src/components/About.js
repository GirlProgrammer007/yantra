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
        <div className=' bg-[#EFE8DF] text-[#554E4E] md:w-full md:h-full   md:bg-[#EFE8DF]  lg:w-full lg:h-full lg:bg-[#EFE8DF] '>
            <h1 className=' ml-[50px] pt-[40px] font-bold text-[30px] md:ml-[60px] md:pt-[50px] md:font-bold md:text-[40px] md:text-[#554E4E]  lg:pl-[150px] lg:pt-[80px] lg:text-[#554E4E] lg:text-[40px] lg:font-bold'>The Place</h1>
            <p className='pl-[30px] pr-[25px] md:pl-[60px] md:pr-[30px] md:text-[#554E4E] lg:text-[#554E4E] lg:pl-[155px] lg:pr-[180px] lg:text-[14px]'>Inspired by India in every aspect – from our silk wallpapers to our stately, fort-inspired door, celebrated designers Matthew and Paul of MSDO have artfully composed five uniquely Indian spaces within Yantra. Drawing on décor that wends masterfully through the depths of the subcontinent, each visit to Yantra promises a new adventure.</p>
            <div className="m-[30px] md:pt-[15px] md:pr-[20px] lg:pt-[15px] lg:pr-[20px]">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='w-full h-[300px]  md:w-[800px] md:h-[600px] lg:w-[990px] lg:h-[500px]'>
                    <SwiperSlide>
                        <img src={img10} alt="" className='w-full h-[300px]  md:w-[800px] md:h-[600px] lg:w-[990px] lg:h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img11} alt="" className='w-full h-[300px]  md:w-[800px] md:h-[600px]  lg:w-[990px] lg:h-[800px] ' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img12} alt="" className='w-full h-[300px]  md:w-[800px] md:h-[600px]  lg:w-[990px] lg:h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='w-full h-[300px]  md:w-[800px] md:h-[600px]  lg:w-[990px] lg:h-[800px]' />
                    </SwiperSlide>
                </Swiper>
            </div>
            <h5 className='font-bold p-[20px]  text-[20px] md:text-[#554E4E] md:font-bold md:pt-[20px] md:pl-[20px] lg:text-[#554E4E] lg:pl-[120px] lg:pt-[20px] lg:font-bold'>Polo Room</h5>
            <p className='pl-[20px] pr-[20px] text-[14px]  md:text-[#554E4E] md:pl-[20px] md:pr-[50px] md:pt-[10px] md:text-[14px]  lg:text-[#554E4E] lg:pl-[120px] lg:pr-[120px] lg:pt-[10px] lg:text-[14px]'>Stepping through the fort-inspired entrance, striking pietra dura marble floors and traditional archways — reminiscent of a Rajasthan palace — lead guests through to the main dining hall, Jaipur. Soft subtle silk walls and banquettes accentuate the striking glass wall light installations as well as the contemporary latticed jali screens. Seating is subject to availability and requests, but we will try our best to accommodate your preference.</p>
            <h1 className=' pl-[20px] pt-[30px] text-[40px] font-bold  md:pl-[20px] md:pt-[30px] md:text-[#554E4E] md:text-[40px] md:font-bold  lg:pl-[120px] lg:pt-[80px] lg:text-[#554E4E] lg:text-[40px] lg:font-bold'>The Food</h1>
            <p className='pl-[20px] pr-[20px] pt-[10px] text-[15px]   md:text-[#554E4E] md:pl-[20px] md:pr-[20px] md:pt-[10px] md:text-[15px]  lg:text-[#554E4E] lg:pl-[120px] lg:pr-[120px] lg:pt-[10px] lg:text-[15px] lg:learding-3'>Blending a culinary philosophy that pays tribute to India’s rich legacy, culinary historian Pritha Sen and Executive Chef Pinaki Ray create an extensive menu offering both vegetarian and non-vegetarian dishes. Featuring niche ingredients sourced across the Subcontinent and South East Asia, a poetic and irreverent experience awaits.</p>

            <div className="m-[30px]  md:pt-[15px] md:pr-[20px] lg:pt-[15px] lg:pr-[20px]">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='w-full h-[300px]   md:w-[800px] md:h-[600px] lg:w-[990px] lg:h-[500px]  '
                >
                    <SwiperSlide>
                        <img src={img10} alt="" className='  md:w-[800px] md:h-[600px]  lg:w-[990px] lg:h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='  md:w-[800px] md:h-[600px]  lg:w-[990px] lg:h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='  md:w-[800px] md:h-[600px]  lg:w-[990px] lg:h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='  md:w-[800px] md:h-[600px]  lg:w-[990px] lg:h-[800px]' />
                    </SwiperSlide>
                </Swiper>
            </div>
            <h1 className='pl-[20px] pt-[20px] text-[40px] font-bold md:pl-[20px] md:pt-[20px] md:text-[#554E4E] md:text-[40px] md:font-bold   lg:pl-[120px] lg:pt-[20px] lg:text-[#554E4E] lg:text-[40px] lg:font-bold'>The People</h1>
            <p className='pl-[20px] pr-[20px] pt-[20px] text-[15px] md:text-[#554E4E] md:pl-[20px] md:pr-[20px] md:pt-[10px] md:text-[15px] lg:text-[#554E4E] lg:pl-[120px] lg:pr-[120px] lg:pt-[10px] lg:text-[15px] '> People passionate about Indian cuisine. A celebrated revivalist of rare and bygone recipes, Pith Sen brings her love of Indian cusuine to Singapore with a recipes that span the length and breadth of the Subcontinent. Alongside our ever-talented Executive Chef, Pinaki Ray, Sen is also joined by Head Chef, Prashant Dhanwariya. </p>
            <div className="m-[30px] md:pt-[15px] md:pr-[20px] md:pb-[100px]   lg:pt-[15px] lg:pr-[20px] lg:pb-[100px]">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className=' md:w-[800px] md:h-[600px] lg:w-[1000px] lg:h-[550px]'>
                    <SwiperSlide>
                        <img src={img10} alt="" className='  md:w-[800px] md:h-[600px]  lg:w-[990px] lg:h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='  md:w-[800px] md:h-[600px]  lg:w-[990px] lg:h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='  md:w-[800px] md:h-[600px]  lg:w-[990px] lg:h-[800px]' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" className='  md:w-[800px] md:h-[600px]  lg:w-[990px] lg:h-[800px]' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};