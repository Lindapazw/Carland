"use client"

// next image
import Image from 'next/image';

// icons
import {MdOutlineMapsHomeWork, MdOutlineBuildCircle, MdOutlineDirectionsCar} from 'react-icons/md';

// react count up
import CountUp from 'react-countup';

// react intersection observer
import {useInView} from 'react-intersection-observer';

// motion
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '/variants';



const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });
    return (
        <section 
            className='section flex items-center' 
            id='about'
            ref={ref}
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:justify-between'>
                    {/* image */}
                    <div>
                        <Image 
                            className='rounded-[20px]' 
                            src={'/images/about/car01.png'} 
                            width={600} 
                            height={448}
                            alt='about image'
                        />
                    </div>
                    {/* text& stats */}
                    <div>
                        <div>
                            <h2>Car services simplified</h2>
                            <p>Rent, choose, and repair with ease. Our convenient locations, diverse car type, and reliable repair points ensure a sesamless car experience.</p>
                            {/* stats */}
                            <div>
                                {/* car types */}
                                <div>
                                    <MdOutlineDirectionsCar className='text-5xl text-accent-DEFAULD'/>
                                    <div className='text-3xl font-black mb-2'>
                                        {inView ? (
                                        <CountUp start={0} end={50} duration={3} delay={1}/>
                                        ) : null }
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About