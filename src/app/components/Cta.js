"use client";

// next image
import Image from 'next/image';

// framer motion
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '/variants';

const Cta = () => {
    return (
        <section className='pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10 overflow-hidden' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row xl:items-center'>
                    {/* text */}
                    <div className='flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0'>
                        <div className='max-w-[520px] mx-auto order-2 xl:order-none'>
                            <motion.h2 
                                variants={fadeIn('right', 0.2)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{once: false, amount: 0.6}}
                                className='h2'
                            >
                                Download our app now and hit the road with ease
                            </motion.h2>
                            <motion.p
                                variants={fadeIn('right', 0.4)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{once: false, amount: 0.6}}
                                className='mb-5'
                            >
                                Discover the thrill of the open road with our exquisite selection of top-tier automobiles. Whether you're in search of sleek sedans, powerful SUVs, or luxurious sports cars, our showroom boasts an array of options to cater to your discerning taste. 
                            </motion.p>
                            {/* btns */}
                            <motion.div 
                                variants={fadeIn('right', 0.6)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{once: false, amount: 0.6}}
                                className='flex gap-x-3 justify-center md:justify-start'
                            >
                                <button className='btn-cta'>
                                    <Image src={'/icons/buttons/google-play.svg'} width={132} height={36} alt='mobile'/>
                                </button>
                                <button className='btn-cta'>
                                    <Image src={'/icons/buttons/app-store.svg'} width={132} height={36} alt='mobile'/>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                    {/* image */}
                    <motion.div 
                        variants={fadeIn('left', 0.8)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.2}}
                        className='flex-1 flex justify-center order-1 md:order-none'
                    >
                        <Image 
                            src={'/images/cta/phone.svg'} 
                            width={320} 
                            height={640} 
                            alt='mobile phone'
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Cta