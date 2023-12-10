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
                <h2> Unmatched excellence and customer satisfaction </h2>
                <p> Our dedication to providing exceptional services sets us apart from the competition. From the moment you engage with us, we strive to exceed your ecpectations in every interaction.</p>
                {/* car image */}
                <div>
                    <Image src={'/images/why/car.svg'} width={1060} height={420} alt='car why us'/>
                </div>
            </div>
        </section>
    )
}

export default Why