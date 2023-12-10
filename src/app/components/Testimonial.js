"use client"

// components
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
    return (
        <section className='section flex items-center bg-teal-300' id='testimonials'>
            <div className="container mx-auto">
                <TestimonialSlider/>
            </div>
        </section>
    )
}

export default Testimonial