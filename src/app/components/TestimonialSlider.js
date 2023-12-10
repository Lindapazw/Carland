"use client"

// import swipper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swipper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination} from 'swipper/modules';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// framer motion
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '/variants';

// next image
import Image from 'next/image';

// data
const testimonialsData = [
    {
        message: 'They truly exceeded my expectations and made my car rental experience a delight',
        avatar: '/images/testimonial/avatar.png',
        name: 'Jane Doe',
        Job: 'Photographer & Videographer',
    },
    {
        message: 'They truly exceeded my expectations and made my car rental experience a delight',
        avatar: '/images/testimonial/avatar.png',
        name: 'Jane Doe',
        Job: 'Photographer & Videographer',
    }
]

const TestimonialSlider = () => {
    return (
        <div>TestimonialSlider</div>
    )
}

export default TestimonialSlider