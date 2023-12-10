"use client"

// next image
import Image from 'next/image';

// framer motion
import {motion} from 'framer-motion';

// variants
import { fadeIn } from '/variants';

// icons
import { MdHandshake, MdKey, MdTrendingUp } from 'react-icons/md'

const Why = () => {
    return (
        <section className="section flex items-center" id="why">
            <div className='container mx-auto'>
                <motion.h2 
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.2}}
                    className='h2 text-center'
                > 
                    Unmatched excellence and customer satisfaction 
                </motion.h2>
                <motion.p 
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.2}}
                    className='max-w-[680px] text-center mx-auto mb-2'
                > 
                    Our dedication to providing exceptional services sets us apart from the competition. From the moment you engage with us, we strive to exceed your ecpectations in every interaction.
                </motion.p>
                {/* car image */}
                <motion.div 
                    variants={fadeIn('up', 0.6)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.6}}
                    className='hidden md:flex justify-center mb-6 xl:mb-2'
                >
                    <Image src={'/images/why/car.svg'} width={1060} height={420} alt='car why us'/>
                </motion.div>
                {/* grid items */}
                <div> grid </div>
            </div>
        </section>
    )
}

export default Why