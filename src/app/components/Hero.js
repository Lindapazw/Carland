"use client"

import { useContext } from "react";

// Components
import Search from "./Search";

// context
import { SearchContext } from "../context/search";

// next image
import Image from 'next/image'

const Hero = () => {

    const {searchActive} = useContext(SearchContext)

    return (
        <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
            <div className="container mx-auto h-full xl:pt-10">
                {/* text & img wrapper */}
                <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
                    {/* text */}
                    <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
                        <h1 className="h1">
                            Explore the Finest <span className="text-accent-DEFAULD">Global</span> Offers{' '}
                        </h1>
                        <p>Find your ideal ride for any adventure with our diverse range of affordable and dependable car rentals.</p>
                        {/* btns */}
                        <div className="flex gap-x-3 justify-center xl:justify-start">
                            {/* btn appstore */}
                            <button className="btn-cta">
                                <Image src={'/icons/buttons/app-store.svg'} width={132} height={36} alt="google play"/>
                            </button>
                            {/* btn google */}
                            <button className="btn-cta">
                                <Image src={'/icons/buttons/google-play.svg'} width={132} height={36} alt="google play"/>
                            </button>
                        </div>
                    </div>
                    {/* img */}
                    <div>img</div>
                </div>
            </div>
            {
                searchActive ? (
                <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
                    <Search/>
                </div>
                ) : (
                <div className="-mt-12 w-full max-w-[1300px] mx-auto">
                    <Search/>
                </div>
                )}
        </section>
    )
}

export default Hero