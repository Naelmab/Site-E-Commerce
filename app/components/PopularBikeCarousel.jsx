'use client';
import Bike from '@/app/components/Bike.jsx';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';



const PopularBikeCarousel = ({bikes}) => {
    return (
        <Swiper 
        slidesPerView={1} 
        spaceBetween={30} 
        breakpoints={{
            640: {
                slidesPerView: 1,
                // spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                // spaceBetween: 40
            },
            960: {
                slidesPerView: 3,
                // spaceBetween: 50
            },
            1440: {
                slidesPerView: 4,
                // spaceBetween: 50
            }
        }} 
        pagination={{"clickable": true}}
        modules={[Pagination]}        
        className='popular-bike-slider mb-8'
        >
            {bikes.map(bike => {
                return (
                    <SwiperSlide key={bike._id}>
                        <Bike bike={bike}/>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default PopularBikeCarousel;