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
                <div className='flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'>
                    <div>
                        {/* logo */}
                        <Link to={'home'} smooth={true} spy={true} className='cursor-pointer'>
                            <Image src={'/icons/logo.svg'} width={200} height={200} alt='footer grid'/>
                        </Link>
                    </div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer