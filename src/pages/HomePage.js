import React from 'react';
import Introduction from '../components/Introduction';
import Introduction2 from '../components/Introduction2';
import Introduction3 from '../components/Introduction3';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import '../componentsCss/Swiper.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
export default function HomePage () {
    SwiperCore.use([Navigation, Pagination, Autoplay])
    return (
        <div>
            <Swiper pagination={{clickable: true}} loop={true} effect={'fade'} autoplay={{delay: 5000, disableOnInteraction: false}} navigation className='banner'> 
                <SwiperSlide><Introduction/></SwiperSlide>
                <SwiperSlide><Introduction2/></SwiperSlide>
                <SwiperSlide><Introduction3/></SwiperSlide>
            </Swiper>
        </div>
        
    );
}