import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination} from "swiper";
import './Slider.css'

const Slider = ({allServices}) => {
    return (
             <Swiper
                className='md:w-2/3 rounded-sm'
                spaceBetween={50}
                loop={true}
                autoplay={{delay:3500,pauseOnMouseEnter:false,}}
                slidesPerView={1}
                pagination={{type:'progressbar', progressbarFillClass:'swiper-pagination-progressbar-fill'}}
                modules={[Autoplay,Pagination]}
                >
                    {
                       allServices.map(image=><SwiperSlide key={image.name}>
                            <img className='w-full' src={image.img2} alt="" />
                        </SwiperSlide>)
                    }
            </Swiper> 
    );
};

export default Slider;