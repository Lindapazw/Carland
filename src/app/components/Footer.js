"use client"

// next image
import Image from 'next/image';

// icons
import {FaPhone, FaEnvelope} from 'react-icons/fa6';

// components
import Copyright from './Copyright';

// motions
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '/variants';

// link / react scroll
import {Link} from 'react-scroll';

const Footer = () => {
    return (
        <footer className='pt-20 bg-white z-20'>
            <div className='container mx-auto mb-24'>
                {/* grid */}
                <motion.div 
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.6}}
                    className='flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'
                >
                    <div className='flex flex-col flex-1 gap-y-8'>
                        {/* logo */}
                        <Link to={'home'} smooth={true} spy={true} className='cursor-pointer'>
                            <Image src={'/icons/logo.svg'} width={200} height={200} alt='footer grid'/>
                        </Link>
                        {/* text */}
                        <div className='text-secondary'>Join us and embark on a journey where every drive is an adventure, and every vehicle is a testament to automotive excellence. </div>
                        {/* phone & email */}
                        <div className='flex flex-col gap-y-4 font-semibold'>
                            {/* phone */}
                            <div className='flex items-center gap-x-[10px]'>
                                <FaPhone/>
                                <div className='font-medium'>(123)456-7898</div>
                            </div>
                            {/* email */}
                            <div className='flex items-center gap-x-[10px]'>
                                <FaEnvelope/>
                                <div className='font-medium'>office@carland.com</div>
                            </div>
                        </div>
                    </div>
                    {/* links */}
                    <div className='flex-1 flex flex-col xl:items-center'>
                        <div>
                            <h3 className='h3 font-bold mb-8'>Company</h3>
                            <ul className='flex flex-col gap-y-4 font-semibold'>
                                <li><a href=''>New York</a></li>
                                <li><a href=''>Careers</a></li>
                                <li><a href=''>Mobile</a></li>
                                <li><a href=''>Blog</a></li>
                                <li><a href=''>How we Work</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* program */}
                    <div>
                        <h3>Working Hours</h3>
                        <div>
                            <div className='flex gap-x-2'>
                                <div>Mon-Fri</div>
                                <div>09:00AM - 09:00PM</div>
                            </div>
                            <div className='flex gap-x-2'>
                                <div>Mon-Fri</div>
                                <div>09:00AM - 09:00PM</div>
                            </div>
                            <div className='flex gap-x-2'>
                                <div>Mon-Fri</div>
                                <div>09:00AM - 09:00PM</div>
                            </div>
                        </div>
                    </div>
                    <div>1</div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer