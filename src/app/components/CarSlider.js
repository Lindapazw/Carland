"use client"

// import swipper react components
import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';

// next image
import Image from 'next/image';

// icons
import { FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';

// framer 
import {motion} from 'framer-motion';

// variants
import {fadeIn} from 'variants';

// car date
const cars = [
    {
        typeof: 'Hatchback',
        name: 'Ford Focus',
        price: 29,
        stars: 3.5,
        image:'images/carSlider/car01.svg',
        info: [
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual',
            },
            {
                icon: 'icons/carSlider/seat.svg',
                text: '5 Seats',
            },
            {
                icon: 'icons/carSlider/gas.svg',
                text: 'Gas',
            },
            {
                icon: 'icons/carSlider/engine.svg',
                text: '1600 HP',
            },
            {
                icon: 'icons/carSlider/wheel.svg',
                text: 'Front',
            },
        ]
    },
    {
        typeof: 'Sedan',
        name: 'Toyota Corolla',
        price: 25,
        stars: 5,
        image:'images/carSlider/car02.svg',
        info: [
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual',
            },
            {
                icon: 'icons/carSlider/seat.svg',
                text: '5 Seats',
            },
            {
                icon: 'icons/carSlider/gas.svg',
                text: 'Gas',
            },
            {
                icon: 'icons/carSlider/engine.svg',
                text: '1600 HP',
            },
            {
                icon: 'icons/carSlider/wheel.svg',
                text: 'Front',
            },
        ]
    },
    {
        typeof: 'Convertible',
        name: 'Mazda MX-5',
        price: 32,
        stars: 4.9,
        image:'images/carSlider/car02.svg',
        info: [
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Automatic',
            },
            {
                icon: 'icons/carSlider/seat.svg',
                text: '5 Seats',
            },
            {
                icon: 'icons/carSlider/gas.svg',
                text: 'Gas',
            },
            {
                icon: 'icons/carSlider/engine.svg',
                text: '1600 HP',
            },
            {
                icon: 'icons/carSlider/wheel.svg',
                text: 'Front',
            },
        ]
    },
    {
        typeof: 'SUV',
        name: 'Honda CR-V',
        price: 35,
        stars: 4.7,
        image:'images/carSlider/car03.svg',
        info: [
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Automatic',
            },
            {
                icon: 'icons/carSlider/seat.svg',
                text: '5 Seats',
            },
            {
                icon: 'icons/carSlider/gas.svg',
                text: 'Gas',
            },
            {
                icon: 'icons/carSlider/engine.svg',
                text: '1600 HP',
            },
            {
                icon: 'icons/carSlider/wheel.svg',
                text: 'Front',
            },
        ]
    },
]

const CarSlider = () => {
    return (
        <div>CarSlider</div>
    )
}

export default CarSlider