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
        <div className='container mx-auto'>
            <Swiper breakpoints={{
                320: {slidesPerView:1, spaceBetween:15},
                640: {slidesPerView:2, spaceBetween:32},
                1260: {slidesPerView:3, spaceBetween:32},
            }}>
                {cars.map((car, index)=>{
                    return <SwiperSlide key={index}>
                        <div className='max-w-[385px] mx-auto sm:mx-0 bg-gray-200'>
                            <Image src={car.image} width={380} height={284} alt='slider'/>
                            <div>
                                <div>
                                    <div>{car.typeof}</div>
                                    <h3>{car.name}</h3>
                                    <h3>{car.price}/day</h3>
                                </div>
                                {/* stars */}
                                <div>stars</div>
                            </div>
                            {/* car info */}
                            <div>
                                {car.info.map((item, index)=> {
                                    return <div key={index}>
                                        <div className='bg-primary w-12 h-12 rounded-full flex justify-center items-center'>
                                            <Image 
                                                src={item.icon} 
                                                width={24} 
                                                height={24} 
                                                alt='stars'
                                            />
                                        </div>
                                        <div className='text-[12px] uppercase'>{item.text}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default CarSlider